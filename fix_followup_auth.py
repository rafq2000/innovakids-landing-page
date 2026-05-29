"""Fix: add REST API login to Evaluar Leads and Enviar Follow-ups nodes"""
import requests, json, paramiko, time

N8N_URL = "https://quirky-thompson.74-208-238-121.plesk.page"
WF_ID = "ZHB0iVgkhCkSEzSj"
MAIN_WF_ID = "wm17NirM9B6SPRH8"

s = requests.Session()
s.post(f"{N8N_URL}/rest/login", json={
    "emailOrLdapLoginId": "ricardo.farias.q@gmail.com",
    "password": "Gaspi1712#"
})

wf = s.get(f"{N8N_URL}/rest/workflows/{WF_ID}").json()
data = wf.get("data", wf)

EVALUAR_CODE = r"""// Evaluar Leads v2 — login to REST API first
const N8N_INT = 'http://localhost:5678';
const MAIN_WF = '__MAIN_WF__';
const CALENDLY = 'https://calendly.com/innovakidslatam/reunion-informativa-innovakids';

let cookie = '';
try {
  const lr = await $helpers.httpRequest({
    method: 'POST', url: N8N_INT + '/rest/login',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ emailOrLdapLoginId: 'ricardo.farias.q@gmail.com', password: 'Gaspi1712#' }),
    returnFullResponse: true
  });
  const sc = lr.headers?.['set-cookie'] || '';
  cookie = Array.isArray(sc) ? sc.map(c => c.split(';')[0]).join('; ') : sc.split(';')[0];
} catch(e) { console.log('[EvalLeads] Login fail:', e.message); return []; }

let mainLeads = {};
try {
  const wr = await $helpers.httpRequest({
    method: 'GET', url: N8N_INT + '/rest/workflows/' + MAIN_WF,
    headers: { 'Cookie': cookie }
  });
  const w = wr.data || wr;
  const sd = typeof w.staticData === 'string' ? JSON.parse(w.staticData) : (w.staticData || {});
  mainLeads = (sd.global && sd.global.leads) || {};
} catch(e) { console.log('[EvalLeads] Read fail:', e.message); return []; }

const now = Date.now();
const H2 = 2*3600000, H48 = 48*3600000, D7 = 7*86400000;
const results = [];

for (const [phone, lead] of Object.entries(mainLeads)) {
  if (!phone || phone.includes('TEST')) continue;
  const st = lead.state || 'NEW';
  const fc = lead.firstContact ? new Date(lead.firstContact).getTime() : 0;
  const age = now - fc;
  if (age > D7 || ['PAID','PROBABLE_PAID','MUTED','HANDOFF'].includes(st)) continue;

  const nombre = ((lead.profileName || '').split(' ')[0]) || '';
  const hola = 'Hola' + (nombre ? ' ' + nombre : '') + '!';

  if (st === 'NEW' && age > H2 && !lead._followup_no_agendo_sent) {
    results.push({ phone, flow: 'no_agendo', nombre,
      msg: hola + ' Soy Francisca de InnovaKids. Vi que estabas viendo nuestro programa de IA para ninos.\nTe queda pendiente agendar tu evaluacion gratuita de 20 min. Es sin compromiso.\n\nAgenda aqui: ' + CALENDLY + '\n\nSi tienes dudas, escribeme!'
    });
  }

  if (st === 'SCHEDULED_CONFIRMED' && lead.scheduledAt && !lead._followup_no_show_sent) {
    if (now - new Date(lead.scheduledAt).getTime() > H48) {
      results.push({ phone, flow: 'no_show', nombre,
        msg: hola + ' Soy Francisca de InnovaKids.\nVi que agendaste tu evaluacion pero no pudimos conectar o quedaron dudas.\nPuedes reagendar cuando quieras:\n\n' + CALENDLY + '\n\nLa Cohorte Junio 2026 inicia el 8 de junio. Te esperamos!'
      });
    }
  }

  if (st === 'LINK_SENT' && lead.linkSentAt && !lead._followup_asistio_no_pago_sent) {
    if (now - new Date(lead.linkSentAt).getTime() > H48) {
      results.push({ phone, flow: 'asistio_no_pago', nombre,
        msg: hola + ' Soy Francisca de InnovaKids.\nDespues de la evaluacion quedamos con buenas noticias para tu hijo/a.\nRecuerda que puedes reservar con solo $27 USD y tienes garantia de 10 dias.\n\nInscribete aqui: https://www.innovakidslatam.com/pagar?option=reserve\n\nSi tienes dudas, escribeme!'
      });
    }
  }
}

console.log('[EvalLeads] ' + Object.keys(mainLeads).length + ' leads, ' + results.length + ' followups');
if (results.length === 0) return [];
return results.map(r => ({ json: r }));
""".replace("__MAIN_WF__", MAIN_WF_ID)

ENVIAR_CODE = r"""// Enviar Follow-ups v2 — login for staticData update
const N8N_INT = 'http://localhost:5678';
const MAIN_WF = '__MAIN_WF__';
const YCLOUD_KEY = 'b0bdbae389901432af2b47d9c6a4dcbe';
const IK_NUM = '56964754219';
const ADMIN_NUM = '56971360895';

const items = $input.all();
let sent = 0, errs = [], details = [];

let cookie = '';
try {
  const lr = await $helpers.httpRequest({
    method: 'POST', url: N8N_INT + '/rest/login',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ emailOrLdapLoginId: 'ricardo.farias.q@gmail.com', password: 'Gaspi1712#' }),
    returnFullResponse: true
  });
  const sc = lr.headers?.['set-cookie'] || '';
  cookie = Array.isArray(sc) ? sc.map(c => c.split(';')[0]).join('; ') : sc.split(';')[0];
} catch(e) { console.log('[Enviar] Login fail:', e.message); }

for (const item of items) {
  const { phone, flow, msg, nombre } = item.json;
  if (!phone || !msg) continue;

  try {
    await $helpers.httpRequest({
      method: 'POST', url: 'https://api.ycloud.com/v2/whatsapp/messages',
      headers: { 'X-API-Key': YCLOUD_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from: IK_NUM, to: phone, type: 'text', text: { body: msg } })
    });
    sent++;
    details.push(flow + ': ' + phone + ' (' + (nombre || '?') + ')');
  } catch(e) { errs.push(phone + ': ' + e.message); continue; }

  if (cookie) {
    try {
      const wr = await $helpers.httpRequest({ method: 'GET', url: N8N_INT + '/rest/workflows/' + MAIN_WF, headers: { 'Cookie': cookie } });
      const w = wr.data || wr;
      const sd = typeof w.staticData === 'string' ? JSON.parse(w.staticData) : (w.staticData || {});
      if (sd.global?.leads?.[phone]) {
        sd.global.leads[phone]['_followup_' + flow + '_sent'] = true;
        sd.global.leads[phone]['_followup_' + flow + '_at'] = new Date().toISOString();
        if (Array.isArray(sd.global.chat_log)) {
          sd.global.chat_log.push({ ts: new Date().toISOString(), phone, role: 'followup', text: msg.slice(0, 300), flow_path: 'lead_followup_' + flow, source: 'lead_followups_wf' });
          if (sd.global.chat_log.length > 20000) sd.global.chat_log = sd.global.chat_log.slice(-20000);
        }
        await $helpers.httpRequest({
          method: 'PATCH', url: N8N_INT + '/rest/workflows/' + MAIN_WF,
          headers: { 'Content-Type': 'application/json', 'Cookie': cookie },
          body: JSON.stringify({ staticData: JSON.stringify(sd) })
        });
      }
    } catch(e) { console.log('[Enviar] SD err ' + phone + ':', e.message); }
  }
}

if (sent > 0) {
  try {
    await $helpers.httpRequest({
      method: 'POST', url: 'https://api.ycloud.com/v2/whatsapp/messages',
      headers: { 'X-API-Key': YCLOUD_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from: IK_NUM, to: ADMIN_NUM, type: 'text', text: { body: 'Follow-ups enviados: ' + sent + '\n' + details.join('\n') + (errs.length ? '\nErrores: ' + errs.join(', ') : '') } })
    });
  } catch(e) {}
}

console.log('[Enviar] Sent: ' + sent + ', Errors: ' + errs.length);
return [{ json: { sent, errors: errs, total: items.length } }];
""".replace("__MAIN_WF__", MAIN_WF_ID)

for n in data["nodes"]:
    if n["name"] == "Evaluar Leads":
        n["parameters"]["jsCode"] = EVALUAR_CODE
    elif n["name"] == "Enviar Follow-ups":
        n["parameters"]["jsCode"] = ENVIAR_CODE

res = s.patch(f"{N8N_URL}/rest/workflows/{WF_ID}", json={
    "nodes": data["nodes"],
    "connections": data["connections"],
    "settings": data.get("settings", {})
})
print(f"Patch: {res.status_code}")

# Publish + restart
ssh = paramiko.SSHClient()
ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
ssh.connect("74.208.238.121", username="root", password="zLDDD6WjesVn8")

stdin, stdout, stderr = ssh.exec_command(f"cd /opt/n8n && docker exec n8n-n8n-1 n8n publish:workflow --id={WF_ID}")
print(f"Publish: {stdout.read().decode().strip()}")

stdin, stdout, stderr = ssh.exec_command("cd /opt/n8n && docker compose restart n8n")
print(f"Restart: {stderr.read().decode().strip()}")

time.sleep(8)
stdin, stdout, stderr = ssh.exec_command("cd /opt/n8n && docker logs n8n-n8n-1 --tail 5 2>&1")
print(f"Logs: {stdout.read().decode().strip()}")
ssh.close()

# Now trigger a test run
print("\nTriggering test run (1min schedule)...")
wf2 = s.get(f"{N8N_URL}/rest/workflows/{WF_ID}").json()
d2 = wf2.get("data", wf2)
for n in d2["nodes"]:
    if n["name"] == "Cada 2 Horas":
        n["parameters"] = {"rule": {"interval": [{"field": "minutes", "minutesInterval": 1}]}}
        break
s.patch(f"{N8N_URL}/rest/workflows/{WF_ID}", json={"nodes": d2["nodes"], "connections": d2["connections"], "settings": d2.get("settings", {})})

time.sleep(75)

# Check results
execs = s.get(f"{N8N_URL}/rest/executions", params={"workflowId": WF_ID, "limit": 3}).json()
el = execs.get("data", {})
if isinstance(el, dict):
    el = el.get("results", [])
print(f"\nExecutions: {len(el)}")
for ex in el[:3]:
    print(f"  ID={ex['id']} status={ex['status']} duration={ex.get('stoppedAt','?')}")

# Check if followup flags were set
wf3 = s.get(f"{N8N_URL}/rest/workflows/{MAIN_WF_ID}").json()
d3 = wf3.get("data", wf3)
sd_raw = d3.get("staticData", "{}")
sd = json.loads(sd_raw) if isinstance(sd_raw, str) else sd_raw
leads = (sd.get("global", {}) or {}).get("leads", {})
flagged = 0
for phone, lead in leads.items():
    flags = [k for k in lead.keys() if "_followup_" in k]
    if flags:
        flagged += 1
        if flagged <= 5:
            print(f"  {phone} state={lead.get('state','?')} flags={flags}")
print(f"\nTotal leads with followup flags: {flagged}")

# Restore 2h schedule
for n in d2["nodes"]:
    if n["name"] == "Cada 2 Horas":
        n["parameters"] = {"rule": {"interval": [{"field": "hours", "hoursInterval": 2}]}}
        break
s.patch(f"{N8N_URL}/rest/workflows/{WF_ID}", json={"nodes": d2["nodes"], "connections": d2["connections"], "settings": d2.get("settings", {})})
print("Schedule restored to 2h")
