"""Fix: use API key instead of cookie auth in followup workflow"""
import requests, json, paramiko, time

N8N_URL = "https://quirky-thompson.74-208-238-121.plesk.page"
WF_ID = "ZHB0iVgkhCkSEzSj"
MAIN_WF_ID = "wm17NirM9B6SPRH8"
API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhOTY0MWUyNi00YWM0LTQ4ZDktOWVmYi1hZDNiZTkzMzVlZDEiLCJpc3MiOiJuOG4iLCJhdWQiOiJwdWJsaWMtYXBpIiwianRpIjoiOWI2ODFlMGUtM2FkZC00OTFlLWJiOWQtYjM5OWZjZGU1MDFhIiwiaWF0IjoxNzc5MTM4NDQwLCJleHAiOjE4NDIyMTA0NDE0OTN9.ZcrcCDHSkqZnUGSIVUIl8pHu6meuRSOd-G49eyQnLJM"

s = requests.Session()
s.post(f"{N8N_URL}/rest/login", json={
    "emailOrLdapLoginId": "ricardo.farias.q@gmail.com",
    "password": "Gaspi1712#"
})

wf = s.get(f"{N8N_URL}/rest/workflows/{WF_ID}").json()
data = wf.get("data", wf)

EVALUAR = f"""// Evaluar Leads v3 — API key auth
const API_URL = 'http://localhost:5678/api/v1';
const API_KEY = '{API_KEY}';
const MAIN_WF = '{MAIN_WF_ID}';
const CALENDLY = 'https://calendly.com/innovakidslatam/reunion-informativa-innovakids';
const H = {{ 'X-N8N-API-KEY': API_KEY }};

let mainLeads = {{}};
try {{
  const wr = await $helpers.httpRequest({{ method: 'GET', url: API_URL + '/workflows/' + MAIN_WF, headers: H }});
  const sd = typeof wr.staticData === 'string' ? JSON.parse(wr.staticData) : (wr.staticData || {{}});
  mainLeads = (sd.global && sd.global.leads) || {{}};
}} catch(e) {{ console.log('[EvalLeads] Read fail:', e.message); return []; }}

const now = Date.now();
const H2 = 2*3600000, H48 = 48*3600000, D7 = 7*86400000;
const results = [];

for (const [phone, lead] of Object.entries(mainLeads)) {{
  if (!phone || phone.includes('TEST')) continue;
  const st = lead.state || 'NEW';
  const fc = lead.firstContact ? new Date(lead.firstContact).getTime() : 0;
  const age = now - fc;
  if (age > D7 || ['PAID','PROBABLE_PAID','MUTED','HANDOFF'].includes(st)) continue;

  const nombre = ((lead.profileName || '').split(' ')[0]) || '';
  const hola = 'Hola' + (nombre ? ' ' + nombre : '') + '!';

  if (st === 'NEW' && age > H2 && !lead._followup_no_agendo_sent) {{
    results.push({{ phone, flow: 'no_agendo', nombre,
      msg: hola + ' Soy Francisca de InnovaKids. Vi que estabas viendo nuestro programa de IA para ninos.\\nTe queda pendiente agendar tu evaluacion gratuita de 20 min. Es sin compromiso.\\n\\nAgenda aqui: ' + CALENDLY + '\\n\\nSi tienes dudas, escribeme!'
    }});
  }}

  if (st === 'SCHEDULED_CONFIRMED' && lead.scheduledAt && !lead._followup_no_show_sent) {{
    if (now - new Date(lead.scheduledAt).getTime() > H48) {{
      results.push({{ phone, flow: 'no_show', nombre,
        msg: hola + ' Soy Francisca de InnovaKids.\\nVi que agendaste tu evaluacion pero no pudimos conectar o quedaron dudas.\\nPuedes reagendar cuando quieras:\\n\\n' + CALENDLY + '\\n\\nLa Cohorte Junio 2026 inicia el 8 de junio. Te esperamos!'
      }});
    }}
  }}

  if (st === 'LINK_SENT' && lead.linkSentAt && !lead._followup_no_pago_sent) {{
    if (now - new Date(lead.linkSentAt).getTime() > H48) {{
      results.push({{ phone, flow: 'no_pago', nombre,
        msg: hola + ' Soy Francisca de InnovaKids.\\nDespues de la evaluacion quedamos con buenas noticias para tu hijo/a.\\nRecuerda que puedes reservar con solo $27 USD y tienes garantia de 10 dias.\\n\\nInscribete aqui: https://www.innovakidslatam.com/pagar?option=reserve\\n\\nSi tienes dudas, escribeme!'
      }});
    }}
  }}
}}

console.log('[EvalLeads] ' + Object.keys(mainLeads).length + ' leads, ' + results.length + ' followups');
if (results.length === 0) return [];
return results.map(r => ({{ json: r }}));
"""

ENVIAR = f"""// Enviar Follow-ups v3 — API key auth
const API_URL = 'http://localhost:5678/api/v1';
const API_KEY = '{API_KEY}';
const MAIN_WF = '{MAIN_WF_ID}';
const YCLOUD = 'b0bdbae389901432af2b47d9c6a4dcbe';
const IK = '56964754219';
const ADMIN = '56971360895';
const H = {{ 'X-N8N-API-KEY': API_KEY }};

const items = $input.all();
let sent = 0, errs = [], details = [];

for (const item of items) {{
  const {{ phone, flow, msg, nombre }} = item.json;
  if (!phone || !msg) continue;

  try {{
    await $helpers.httpRequest({{
      method: 'POST', url: 'https://api.ycloud.com/v2/whatsapp/messages',
      headers: {{ 'X-API-Key': YCLOUD, 'Content-Type': 'application/json' }},
      body: JSON.stringify({{ from: IK, to: phone, type: 'text', text: {{ body: msg }} }})
    }});
    sent++;
    details.push(flow + ': ' + phone + ' (' + (nombre || '?') + ')');
  }} catch(e) {{ errs.push(phone + ': ' + e.message); continue; }}

  // Mark in staticData
  try {{
    const wr = await $helpers.httpRequest({{ method: 'GET', url: API_URL + '/workflows/' + MAIN_WF, headers: H }});
    const sd = typeof wr.staticData === 'string' ? JSON.parse(wr.staticData) : (wr.staticData || {{}});
    if (sd.global?.leads?.[phone]) {{
      sd.global.leads[phone]['_followup_' + flow + '_sent'] = true;
      sd.global.leads[phone]['_followup_' + flow + '_at'] = new Date().toISOString();
      if (Array.isArray(sd.global.chat_log)) {{
        sd.global.chat_log.push({{ ts: new Date().toISOString(), phone, role: 'followup', text: msg.slice(0, 300), flow_path: 'lead_followup_' + flow, source: 'lead_followups_wf' }});
        if (sd.global.chat_log.length > 20000) sd.global.chat_log = sd.global.chat_log.slice(-20000);
      }}
      await $helpers.httpRequest({{
        method: 'PUT', url: API_URL + '/workflows/' + MAIN_WF,
        headers: {{ ...H, 'Content-Type': 'application/json' }},
        body: JSON.stringify({{ ...wr, staticData: JSON.stringify(sd) }})
      }});
    }}
  }} catch(e) {{ console.log('[Enviar] SD err ' + phone + ':', e.message); }}
}}

if (sent > 0) {{
  try {{
    await $helpers.httpRequest({{
      method: 'POST', url: 'https://api.ycloud.com/v2/whatsapp/messages',
      headers: {{ 'X-API-Key': YCLOUD, 'Content-Type': 'application/json' }},
      body: JSON.stringify({{ from: IK, to: ADMIN, type: 'text', text: {{ body: 'Follow-ups enviados: ' + sent + '\\n' + details.join('\\n') + (errs.length ? '\\nErrores: ' + errs.join(', ') : '') }} }})
    }});
  }} catch(e) {{}}
}}

console.log('[Enviar] Sent: ' + sent + ', Errors: ' + errs.length);
return [{{ json: {{ sent, errors: errs, total: items.length }} }}];
"""

for n in data["nodes"]:
    if n["name"] == "Evaluar Leads":
        n["parameters"]["jsCode"] = EVALUAR
    elif n["name"] == "Enviar Follow-ups":
        n["parameters"]["jsCode"] = ENVIAR

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
print(f"Publish: {stdout.read().decode().strip()[-80:]}")
stdin, stdout, stderr = ssh.exec_command("cd /opt/n8n && docker compose restart n8n")
stderr.read()
time.sleep(8)
stdin, stdout, stderr = ssh.exec_command("cd /opt/n8n && docker logs n8n-n8n-1 --tail 3 2>&1")
print(f"Logs: {stdout.read().decode().strip()}")

# Test: set to 1min, wait, check
print("\nTest run...")
wf2 = s.get(f"{N8N_URL}/rest/workflows/{WF_ID}").json()
d2 = wf2.get("data", wf2)
for n in d2["nodes"]:
    if n["name"] == "Cada 2 Horas":
        n["parameters"] = {"rule": {"interval": [{"field": "minutes", "minutesInterval": 1}]}}
        break
s.patch(f"{N8N_URL}/rest/workflows/{WF_ID}", json={"nodes": d2["nodes"], "connections": d2["connections"], "settings": d2.get("settings", {})})
time.sleep(75)

# Check flags
wf3 = s.get(f"{N8N_URL}/api/v1/workflows/{MAIN_WF_ID}", headers={"X-N8N-API-KEY": API_KEY}).json()
sd_raw = wf3.get("staticData", "{}")
sd = json.loads(sd_raw) if isinstance(sd_raw, str) else (sd_raw or {})
leads = (sd.get("global", {}) or {}).get("leads", {})
flagged = 0
for phone, lead in leads.items():
    flags = [k for k in lead.keys() if "_followup_" in k]
    if flags:
        flagged += 1
        if flagged <= 5:
            print(f"  {phone} state={lead.get('state','?')} flags={flags}")

print(f"\nLeads with followup flags: {flagged}/{len(leads)}")

# Check last executions
execs = s.get(f"{N8N_URL}/rest/executions", params={"workflowId": WF_ID, "limit": 2}).json()
el = execs.get("data", {})
if isinstance(el, dict): el = el.get("results", [])
for ex in el[:2]:
    print(f"  exec {ex['id']}: {ex['status']}")

# Restore 2h
for n in d2["nodes"]:
    if n["name"] == "Cada 2 Horas":
        n["parameters"] = {"rule": {"interval": [{"field": "hours", "hoursInterval": 2}]}}
        break
s.patch(f"{N8N_URL}/rest/workflows/{WF_ID}", json={"nodes": d2["nodes"], "connections": d2["connections"], "settings": d2.get("settings", {})})
print("Schedule restored to 2h")
ssh.close()
