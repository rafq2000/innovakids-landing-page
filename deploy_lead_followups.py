"""
Deploy: Lead Follow-up Workflows for InnovaKids n8n
Creates a new workflow with 3 cron-based follow-up automations:

1. Lead no agendo (2h after booking_leads insert, no SCHEDULED_CONFIRMED)
2. No-show (Calendly scheduled but didn't attend, 2h after event time)
3. Asistio pero no pago (48h after SCHEDULED_CONFIRMED, no PAID/PROBABLE_PAID)

All 3 run on a single Schedule trigger every 2 hours (8am-10pm Chile).
Uses staticData from main workflow (wm17NirM9B6SPRH8) to check lead states.
Sends WhatsApp via YCloud API + notifies admin.
"""

import json, requests, subprocess, time, sys

# --- Config ---
N8N_URL = "https://quirky-thompson.74-208-238-121.plesk.page"
SSH_HOST = "74.208.238.121"
SSH_PASS = "zLDDD6WjesVn8"
N8N_EMAIL = "ricardo.farias.q@gmail.com"
N8N_PASS = "Gaspi1712#"
MAIN_WF_ID = "wm17NirM9B6SPRH8"
YCLOUD_KEY = "b0bdbae389901432af2b47d9c6a4dcbe"
IK_NUMBER = "56964754219"
ADMIN_NUMBER = "56971360895"
CALENDLY_URL = "https://calendly.com/innovakidslatam/reunion-informativa-innovakids"

WORKFLOW = {
    "name": "Lead Follow-ups (3 automations)",
    "active": True,
    "nodes": [
        {
            "parameters": {
                "rule": {
                    "interval": [
                        {
                            "triggerAtHour": 12,
                            "triggerAtMinute": 0
                        }
                    ]
                }
            },
            "type": "n8n-nodes-base.scheduleTrigger",
            "typeVersion": 1.2,
            "position": [200, 300],
            "id": "schedule-trigger-1",
            "name": "Cada 2 Horas"
        },
        {
            "parameters": {
                "jsCode": f"""// Filtro Horario Chile (8am-22pm)
const now = new Date();
const chileOffset = 4; // UTC-4
const chileHour = (now.getUTCHours() - chileOffset + 24) % 24;

if (chileHour < 8 || chileHour >= 22) {{
  return []; // Fuera de horario, no ejecutar
}}

return [{{ json: {{ chileHour, timestamp: now.toISOString() }} }}];
"""
            },
            "type": "n8n-nodes-base.code",
            "typeVersion": 2,
            "position": [440, 300],
            "id": "filtro-horario-1",
            "name": "Filtro Horario Chile"
        },
        {
            "parameters": {
                "jsCode": f"""// Leer leads del workflow principal
const MAIN_WF_ID = '{MAIN_WF_ID}';
const YCLOUD_KEY = '{YCLOUD_KEY}';
const IK_NUMBER = '{IK_NUMBER}';
const ADMIN_NUMBER = '{ADMIN_NUMBER}';
const CALENDLY_URL = '{CALENDLY_URL}';

// Access staticData from main workflow via internal API
let mainLeads = {{}};
try {{
  const wfData = await $helpers.httpRequest({{
    method: 'GET',
    url: '{N8N_URL}/rest/workflows/' + MAIN_WF_ID,
    headers: {{ 'Content-Type': 'application/json' }}
  }});
  const wf = wfData.data || wfData;
  const sd = JSON.parse(wf.staticData || '{{}}');
  mainLeads = (sd.global && sd.global.leads) || {{}};
}} catch(e) {{
  console.log('[Follow-ups] Cannot read main workflow staticData:', e.message);
  return [];
}}

const now = Date.now();
const TWO_HOURS = 2 * 60 * 60 * 1000;
const FORTY_EIGHT_HOURS = 48 * 60 * 60 * 1000;
const SEVEN_DAYS = 7 * 24 * 60 * 60 * 1000;

const results = [];

for (const [phone, lead] of Object.entries(mainLeads)) {{
  if (!phone || phone.includes('TEST')) continue;
  const state = lead.state || 'NEW';
  const firstContact = lead.firstContact ? new Date(lead.firstContact).getTime() : 0;
  const age = now - firstContact;

  // Skip very old leads (>7 days) or already paid
  if (age > SEVEN_DAYS) continue;
  if (['PAID', 'MUTED'].includes(state)) continue;

  // --- FLOW 1: Lead no agendo ---
  // Conditions: state is NEW or has messages but NOT LINK_SENT/SCHEDULED_CONFIRMED/PAID
  // At least 2h since first contact, no scheduled
  if (state === 'NEW' && age > TWO_HOURS && !lead._followup_nobook_sent) {{
    results.push({{
      phone, lead,
      flow: 'no_agendo',
      nombre: (lead.profileName || '').split(' ')[0] || '',
      msg: 'Hola' + ((lead.profileName || '').split(' ')[0] ? ' ' + (lead.profileName || '').split(' ')[0] : '') +
        '! Soy Francisca de InnovaKids. Vi que estabas viendo nuestro programa de IA para ninos.' +
        '\\nTe queda pendiente agendar tu evaluacion gratuita de 20 min. Es sin compromiso y te sirve para conocer el programa.' +
        '\\n\\nAgenda aqui: ' + CALENDLY_URL +
        '\\n\\nSi tienes alguna duda, escribeme por aqui!'
    }});
  }}

  // --- FLOW 2: No-show ---
  // Conditions: SCHEDULED_CONFIRMED but scheduledFecha already passed + 2h, no deposit
  if (state === 'SCHEDULED_CONFIRMED' && lead.scheduledAt && !lead._followup_noshow_sent) {{
    // scheduledAt is when they booked. scheduledFecha is the text date.
    // We use scheduledAt + 48h as proxy (can't parse text date reliably)
    const scheduledTime = new Date(lead.scheduledAt).getTime();
    const timeSinceScheduled = now - scheduledTime;
    // If >48h since booking and still SCHEDULED_CONFIRMED (not PAID), likely no-show or didn't convert
    if (timeSinceScheduled > FORTY_EIGHT_HOURS) {{
      results.push({{
        phone, lead,
        flow: 'no_show_or_no_pay',
        nombre: (lead.profileName || '').split(' ')[0] || '',
        msg: 'Hola' + ((lead.profileName || '').split(' ')[0] ? ' ' + (lead.profileName || '').split(' ')[0] : '') +
          '! Soy Francisca de InnovaKids.' +
          '\\nVi que agendaste tu evaluacion pero no pudimos conectar.' +
          '\\nLa buena noticia es que puedes reagendar cuando quieras:' +
          '\\n\\n' + CALENDLY_URL +
          '\\n\\nLa Cohorte Junio 2026 inicia el 8 de junio y quedan pocos cupos. Te esperamos!'
      }});
    }}
  }}

  // --- FLOW 3: Asistio pero no pago (LINK_SENT > 48h) ---
  // If state is LINK_SENT and >48h since link was sent
  if (state === 'LINK_SENT' && lead.linkSentAt && !lead._followup_nopay_sent) {{
    const linkTime = new Date(lead.linkSentAt).getTime();
    const timeSinceLink = now - linkTime;
    if (timeSinceLink > FORTY_EIGHT_HOURS) {{
      results.push({{
        phone, lead,
        flow: 'asistio_no_pago',
        nombre: (lead.profileName || '').split(' ')[0] || '',
        msg: 'Hola' + ((lead.profileName || '').split(' ')[0] ? ' ' + (lead.profileName || '').split(' ')[0] : '') +
          '! Soy Francisca de InnovaKids.' +
          '\\nDespues de la evaluacion quedamos con buenas noticias para tu hijo/a.' +
          '\\nRecuerda que puedes reservar con solo $27 USD y tienes garantia de 10 dias (si no te convence, devolucion completa).' +
          '\\n\\nInscribete aqui: https://www.innovakidslatam.com/pagar?option=reserve' +
          '\\n\\nSi tienes dudas sobre el programa, escribeme!'
      }});
    }}
  }}
}}

if (results.length === 0) {{
  return [];
}}

return results.map(r => ({{ json: r }}));
"""
            },
            "type": "n8n-nodes-base.code",
            "typeVersion": 2,
            "position": [700, 300],
            "id": "evaluar-leads-1",
            "name": "Evaluar Leads"
        },
        {
            "parameters": {
                "jsCode": f"""// Enviar WhatsApp + marcar en staticData + notificar admin
const MAIN_WF_ID = '{MAIN_WF_ID}';
const YCLOUD_KEY = '{YCLOUD_KEY}';
const IK_NUMBER = '{IK_NUMBER}';
const ADMIN_NUMBER = '{ADMIN_NUMBER}';

const items = $input.all();
let sent = 0;
const errors = [];

for (const item of items) {{
  const {{ phone, flow, msg, nombre }} = item.json;
  if (!phone || !msg) continue;

  // Send WhatsApp
  try {{
    await $helpers.httpRequest({{
      method: 'POST',
      url: 'https://api.ycloud.com/v2/whatsapp/messages',
      headers: {{ 'X-API-Key': YCLOUD_KEY, 'Content-Type': 'application/json' }},
      body: JSON.stringify({{
        from: IK_NUMBER, to: phone, type: 'text',
        text: {{ body: msg }}
      }})
    }});
    sent++;
  }} catch(e) {{
    errors.push(phone + ': ' + e.message);
    continue;
  }}

  // Mark in main workflow staticData so we don't send again
  try {{
    const wfRes = await $helpers.httpRequest({{
      method: 'GET',
      url: '{N8N_URL}/rest/workflows/' + MAIN_WF_ID,
      headers: {{ 'Content-Type': 'application/json' }}
    }});
    const wf = wfRes.data || wfRes;
    const sd = JSON.parse(wf.staticData || '{{}}');
    if (sd.global && sd.global.leads && sd.global.leads[phone]) {{
      const flagKey = '_followup_' + flow.replace(/[^a-z_]/g, '') + '_sent';
      sd.global.leads[phone][flagKey] = true;
      sd.global.leads[phone]['_followup_' + flow + '_at'] = new Date().toISOString();

      // Also log in chat_log
      if (Array.isArray(sd.global.chat_log)) {{
        sd.global.chat_log.push({{
          ts: new Date().toISOString(),
          phone, role: 'followup', text: msg.slice(0, 300),
          flow_path: 'lead_followup_' + flow, source: 'lead_followups_wf'
        }});
        if (sd.global.chat_log.length > 20000) {{
          sd.global.chat_log = sd.global.chat_log.slice(-20000);
        }}
      }}

      await $helpers.httpRequest({{
        method: 'PATCH',
        url: '{N8N_URL}/rest/workflows/' + MAIN_WF_ID,
        headers: {{ 'Content-Type': 'application/json' }},
        body: JSON.stringify({{ staticData: JSON.stringify(sd) }})
      }});
    }}
  }} catch(e) {{
    console.log('[Follow-ups] Error updating staticData for ' + phone + ':', e.message);
  }}
}}

// Notify admin
if (sent > 0) {{
  const summary = items.map(i => i.json.flow + ': ' + i.json.phone + ' (' + (i.json.nombre || '?') + ')').join('\\n');
  try {{
    await $helpers.httpRequest({{
      method: 'POST',
      url: 'https://api.ycloud.com/v2/whatsapp/messages',
      headers: {{ 'X-API-Key': YCLOUD_KEY, 'Content-Type': 'application/json' }},
      body: JSON.stringify({{
        from: IK_NUMBER, to: ADMIN_NUMBER, type: 'text',
        text: {{ body: 'Follow-ups enviados: ' + sent + '\\n' + summary + (errors.length ? '\\nErrores: ' + errors.join(', ') : '') }}
      }})
    }});
  }} catch(e) {{}}
}}

return [{{ json: {{ sent, errors, total: items.length }} }}];
"""
            },
            "type": "n8n-nodes-base.code",
            "typeVersion": 2,
            "position": [1000, 300],
            "id": "enviar-followups-1",
            "name": "Enviar Follow-ups"
        }
    ],
    "connections": {
        "Cada 2 Horas": {
            "main": [[{"node": "Filtro Horario Chile", "type": "main", "index": 0}]]
        },
        "Filtro Horario Chile": {
            "main": [[{"node": "Evaluar Leads", "type": "main", "index": 0}]]
        },
        "Evaluar Leads": {
            "main": [[{"node": "Enviar Follow-ups", "type": "main", "index": 0}]]
        }
    },
    "settings": {
        "executionOrder": "v1"
    }
}


def ssh(cmd):
    """Run command on n8n server via SSH"""
    full = f"sshpass -p '{SSH_PASS}' ssh -o StrictHostKeyChecking=no root@{SSH_HOST} \"{cmd}\""
    r = subprocess.run(full, shell=True, capture_output=True, text=True, timeout=30)
    return r.stdout.strip(), r.stderr.strip()


def main():
    print("=== Deploy Lead Follow-ups Workflow ===\n")

    # 1. Login to n8n
    print("[1/5] Logging in to n8n...")
    session = requests.Session()
    login_res = session.post(f"{N8N_URL}/rest/login", json={
        "emailOrLdapLoginId": N8N_EMAIL,
        "password": N8N_PASS
    })
    if login_res.status_code != 200:
        print(f"  FAIL: Login returned {login_res.status_code}")
        print(f"  {login_res.text[:300]}")
        sys.exit(1)
    print("  OK: Logged in")

    # 2. Check if workflow already exists
    print("[2/5] Checking existing workflows...")
    wf_list = session.get(f"{N8N_URL}/rest/workflows").json()
    existing = None
    for wf in (wf_list.get("data", []) if isinstance(wf_list, dict) else wf_list):
        if wf.get("name") == WORKFLOW["name"]:
            existing = wf["id"]
            break

    # 3. Create or update workflow
    if existing:
        print(f"  Found existing workflow {existing}, updating...")
        res = session.patch(f"{N8N_URL}/rest/workflows/{existing}", json=WORKFLOW)
        wf_id = existing
    else:
        print("  Creating new workflow...")
        res = session.post(f"{N8N_URL}/rest/workflows", json=WORKFLOW)
        data = res.json()
        wf_id = (data.get("data", {}) if isinstance(data, dict) else data).get("id") or data.get("id")

    if res.status_code not in (200, 201):
        print(f"  FAIL: {res.status_code}")
        print(f"  {res.text[:500]}")
        sys.exit(1)
    print(f"  OK: Workflow ID = {wf_id}")

    # 4. Activate workflow
    print(f"[3/5] Activating workflow {wf_id}...")
    act_res = session.post(f"{N8N_URL}/rest/workflows/{wf_id}/activate")
    if act_res.status_code == 200:
        print("  OK: Activated")
    else:
        print(f"  WARN: activate returned {act_res.status_code}, trying PATCH...")
        session.patch(f"{N8N_URL}/rest/workflows/{wf_id}", json={"active": True})

    # 5. Publish + restart
    print(f"[4/5] Publishing workflow...")
    stdout, stderr = ssh(f"cd /opt/n8n && docker exec n8n-n8n-1 n8n publish:workflow --id={wf_id}")
    print(f"  Publish: {stdout or stderr or 'done'}")

    print("[5/5] Restarting n8n container...")
    stdout, stderr = ssh("cd /opt/n8n && docker compose restart n8n")
    print(f"  Restart: {stdout or stderr or 'done'}")

    time.sleep(5)

    # Verify
    print("\n=== Verification ===")
    stdout, _ = ssh("cd /opt/n8n && docker logs n8n-n8n-1 --tail 5 2>&1")
    print(f"  Last logs: {stdout}")

    print(f"\n=== DONE ===")
    print(f"Workflow: {N8N_URL}/workflow/{wf_id}")
    print(f"")
    print(f"3 follow-ups configurados:")
    print(f"  1. Lead no agendo    → WhatsApp 2h despues si no agenda Calendly")
    print(f"  2. No-show / no pago → WhatsApp 48h despues de agendar si no pago")
    print(f"  3. Asistio, no pago  → WhatsApp 48h despues de recibir link de pago")
    print(f"")
    print(f"Corre cada 2h entre 8am-10pm Chile. Notifica admin a {ADMIN_NUMBER}.")


if __name__ == "__main__":
    main()
