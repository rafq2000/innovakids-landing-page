#!/usr/bin/env python3
"""
Deploy n8n audit fixes:
1. Lower OpenAI temperature from 0.8 to 0.5
2. Remove dead "Indicador Escribiendo" / "Simular Escritura" node
3. Add 9am-8pm Chile filter to follow-up cron workflow
4. Set up daily SQLite backup cron on VPS

Usage: python deploy_n8n_audit_fixes.py
"""

import json
import time
import sys

try:
    import requests
    import paramiko
except ImportError:
    print("pip install requests paramiko")
    sys.exit(1)

# ── Config ──────────────────────────────────────────────────
N8N_URL = "https://quirky-thompson.74-208-238-121.plesk.page"
N8N_EMAIL = "ricardo.farias.q@gmail.com"
N8N_PASS = "Gaspi1712#"
SSH_HOST = "74.208.238.121"
SSH_USER = "root"
SSH_PASS = "zLDDD6WjesVn8"

MAIN_WF_ID = "wm17NirM9B6SPRH8"
CRON_WF_ID = "hBboZ5Epqt0eMhPL"

sess = requests.Session()
sess.verify = True


def login():
    r = sess.post(f"{N8N_URL}/rest/login", json={
        "emailOrLdapLoginId": N8N_EMAIL,
        "password": N8N_PASS,
    })
    r.raise_for_status()
    print("[OK] Logged into n8n")


def get_workflow(wf_id):
    r = sess.get(f"{N8N_URL}/rest/workflows/{wf_id}")
    r.raise_for_status()
    return r.json()


def patch_workflow(wf_id, data):
    r = sess.patch(f"{N8N_URL}/rest/workflows/{wf_id}", json=data)
    r.raise_for_status()
    print(f"[OK] Patched workflow {wf_id}")
    return r.json()


def ssh_exec(cmd):
    client = paramiko.SSHClient()
    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    client.connect(SSH_HOST, username=SSH_USER, password=SSH_PASS)
    stdin, stdout, stderr = client.exec_command(cmd)
    out = stdout.read().decode()
    err = stderr.read().decode()
    client.close()
    return out, err


def publish_and_restart(wf_id):
    print(f"[...] Publishing workflow {wf_id} and restarting n8n...")
    out, err = ssh_exec(
        f"cd /opt/n8n && docker exec n8n-n8n-1 n8n publish:workflow --id={wf_id} && docker compose restart n8n"
    )
    print(f"  stdout: {out.strip()[:200]}")
    if err.strip():
        print(f"  stderr: {err.strip()[:200]}")
    time.sleep(5)
    print(f"[OK] Published {wf_id} + restarted")


# ── Fix 1: Lower OpenAI temperature ────────────────────────
def fix_temperature(wf):
    changes = 0
    for node in wf.get("nodes", []):
        # OpenAI Chat nodes
        if node.get("type") in (
            "n8n-nodes-base.openAi",
            "@n8n/n8n-nodes-langchain.openAi",
            "@n8n/n8n-nodes-langchain.lmOpenAi",
            "@n8n/n8n-nodes-langchain.lmChatOpenAi",
        ):
            params = node.get("parameters", {})
            options = params.get("options", {})
            temp = options.get("temperature")
            if temp is not None and temp > 0.5:
                old = temp
                options["temperature"] = 0.5
                params["options"] = options
                node["parameters"] = params
                changes += 1
                print(f"  [FIX] {node['name']}: temperature {old} -> 0.5")
    if changes == 0:
        print("  [SKIP] No temperature > 0.5 found (may be in nested options)")
        # Also check top-level temperature
        for node in wf.get("nodes", []):
            if "openai" in node.get("type", "").lower() or "openAi" in node.get("type", ""):
                params = node.get("parameters", {})
                temp = params.get("temperature")
                if temp is not None and float(temp) > 0.5:
                    old = temp
                    params["temperature"] = 0.5
                    node["parameters"] = params
                    changes += 1
                    print(f"  [FIX] {node['name']}: temperature {old} -> 0.5 (top-level)")
    return changes


# ── Fix 2: Remove dead "Indicador Escribiendo" node ────────
def fix_remove_dead_node(wf):
    DEAD_NAMES = {"Indicador Escribiendo", "Simular Escritura"}
    nodes = wf.get("nodes", [])
    connections = wf.get("connections", {})

    to_remove = [n for n in nodes if n.get("name") in DEAD_NAMES]
    if not to_remove:
        # Check for typing indicator nodes by content
        to_remove = [n for n in nodes if
                     n.get("type") == "n8n-nodes-base.wait" and
                     "escri" in n.get("name", "").lower()]

    if not to_remove:
        print("  [SKIP] No dead 'Indicador Escribiendo' node found")
        return 0

    for dead in to_remove:
        name = dead["name"]
        # Remove from nodes list
        nodes[:] = [n for n in nodes if n["name"] != name]
        # Remove from connections (as source)
        connections.pop(name, None)
        # Remove from connections (as target)
        for src_name, outs in list(connections.items()):
            for out_key, conns_list in list(outs.items()):
                for conn_array in conns_list:
                    conn_array[:] = [c for c in conn_array if c.get("node") != name]
        print(f"  [FIX] Removed dead node '{name}'")

    wf["nodes"] = nodes
    wf["connections"] = connections
    return len(to_remove)


# ── Fix 3: Add time filter to follow-up cron ───────────────
def fix_cron_time_filter(wf):
    """Add a Code node after the trigger that checks Chile time (9-20h)."""
    nodes = wf.get("nodes", [])
    connections = wf.get("connections", {})

    # Check if filter already exists
    if any("Filtro Horario" in n.get("name", "") for n in nodes):
        print("  [SKIP] 'Filtro Horario' node already exists")
        return 0

    # Find the trigger/schedule node
    trigger_node = None
    for n in nodes:
        if n.get("type") in (
            "n8n-nodes-base.scheduleTrigger",
            "n8n-nodes-base.cron",
        ) or "cron" in n.get("name", "").lower() or "schedule" in n.get("name", "").lower():
            trigger_node = n
            break

    if not trigger_node:
        print("  [SKIP] No trigger node found in cron workflow")
        return 0

    trigger_name = trigger_node["name"]

    # Find what the trigger connects to
    trigger_conns = connections.get(trigger_name, {})
    original_targets = []
    if "main" in trigger_conns and trigger_conns["main"]:
        original_targets = trigger_conns["main"][0][:]  # copy

    # Create the time filter Code node
    filter_node = {
        "parameters": {
            "jsCode": (
                "// Only allow follow-ups between 9:00 and 20:00 Chile time\n"
                "const now = new Date();\n"
                "// Chile is UTC-4 (CLT) or UTC-3 (CLST)\n"
                "const chileTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/Santiago' }));\n"
                "const hour = chileTime.getHours();\n"
                "\n"
                "if (hour < 9 || hour >= 20) {\n"
                "  console.log(`Skipping follow-ups: Chile hour is ${hour} (outside 9-20)`);\n"
                "  return [];\n"
                "}\n"
                "\n"
                "console.log(`Follow-ups allowed: Chile hour is ${hour}`);\n"
                "return $input.all();\n"
            ),
        },
        "type": "n8n-nodes-base.code",
        "typeVersion": 2,
        "position": [
            trigger_node["position"][0] + 220,
            trigger_node["position"][1],
        ],
        "id": f"filter-horario-{int(time.time())}",
        "name": "Filtro Horario Chile",
    }

    nodes.append(filter_node)

    # Rewire: trigger -> filter -> original targets
    connections[trigger_name] = {"main": [[{"node": "Filtro Horario Chile", "type": "main", "index": 0}]]}
    connections["Filtro Horario Chile"] = {"main": [original_targets]}

    wf["nodes"] = nodes
    wf["connections"] = connections
    print(f"  [FIX] Added 'Filtro Horario Chile' after '{trigger_name}'")
    return 1


# ── Fix 4: SQLite backup cron on VPS ───────────────────────
def setup_sqlite_backup():
    print("\n=== Setting up daily SQLite backup cron ===")

    # Find the n8n database file
    out, _ = ssh_exec("docker volume inspect n8n_n8n-data 2>/dev/null | grep Mountpoint || echo 'NOT_FOUND'")
    if "NOT_FOUND" in out:
        # Try common paths
        out, _ = ssh_exec("find /var/lib/docker/volumes -name 'database.sqlite' 2>/dev/null | head -1")
        db_path = out.strip()
    else:
        mountpoint = out.strip().split('"')[-2] if '"' in out else out.strip()
        db_path = f"{mountpoint}/database.sqlite"

    if not db_path:
        # Check docker-compose volume
        out, _ = ssh_exec("docker exec n8n-n8n-1 ls /home/node/.n8n/database.sqlite 2>/dev/null && echo EXISTS")
        if "EXISTS" in out:
            db_path = "DOCKER_INTERNAL"

    print(f"  DB path: {db_path or 'searching...'}")

    # Create backup script
    backup_script = """#!/bin/bash
# n8n SQLite daily backup
BACKUP_DIR="/opt/n8n/backups"
mkdir -p "$BACKUP_DIR"
DATE=$(date +%Y-%m-%d_%H%M)

# Copy from docker volume
docker cp n8n-n8n-1:/home/node/.n8n/database.sqlite "$BACKUP_DIR/n8n_backup_$DATE.sqlite"

# Keep only last 7 days
find "$BACKUP_DIR" -name "n8n_backup_*.sqlite" -mtime +7 -delete

echo "Backup done: n8n_backup_$DATE.sqlite"
"""

    # Upload and set up cron
    ssh_exec(f"cat > /opt/n8n/backup_n8n.sh << 'SCRIPT'\n{backup_script}\nSCRIPT")
    ssh_exec("chmod +x /opt/n8n/backup_n8n.sh")

    # Add cron (3am Chile = 7am UTC)
    out, _ = ssh_exec("crontab -l 2>/dev/null || echo ''")
    if "backup_n8n.sh" not in out:
        cron_line = "0 7 * * * /opt/n8n/backup_n8n.sh >> /opt/n8n/backup.log 2>&1"
        ssh_exec(f'(crontab -l 2>/dev/null; echo "{cron_line}") | crontab -')
        print("  [FIX] Cron added: daily backup at 3am Chile")
    else:
        print("  [SKIP] Backup cron already exists")

    # Run first backup now
    out, err = ssh_exec("/opt/n8n/backup_n8n.sh")
    print(f"  [OK] First backup: {out.strip()}")
    if err.strip():
        print(f"  stderr: {err.strip()[:200]}")

    return 1


# ── Main ────────────────────────────────────────────────────
def main():
    print("=== n8n Audit Fixes Deploy ===\n")

    login()

    # ── Main bot workflow ──
    print(f"\n--- Main bot workflow ({MAIN_WF_ID}) ---")
    wf_data = get_workflow(MAIN_WF_ID)
    wf = wf_data if "nodes" in wf_data else wf_data.get("data", wf_data)

    # Save backup
    with open("_backup_before_audit_fixes.json", "w") as f:
        json.dump(wf, f, indent=2)
    print("[OK] Backup saved to _backup_before_audit_fixes.json")

    changes_main = 0
    changes_main += fix_temperature(wf)
    changes_main += fix_remove_dead_node(wf)

    if changes_main > 0:
        patch_workflow(MAIN_WF_ID, wf)
        publish_and_restart(MAIN_WF_ID)
    else:
        print("[SKIP] No changes to main workflow")

    # ── Cron workflow ──
    print(f"\n--- Cron workflow ({CRON_WF_ID}) ---")
    cron_data = get_workflow(CRON_WF_ID)
    cron_wf = cron_data if "nodes" in cron_data else cron_data.get("data", cron_data)

    # Save backup
    with open("_backup_cron_before_audit_fixes.json", "w") as f:
        json.dump(cron_wf, f, indent=2)
    print("[OK] Backup saved to _backup_cron_before_audit_fixes.json")

    changes_cron = fix_cron_time_filter(cron_wf)

    if changes_cron > 0:
        patch_workflow(CRON_WF_ID, cron_wf)
        publish_and_restart(CRON_WF_ID)
    else:
        print("[SKIP] No changes to cron workflow")

    # ── SQLite backup ──
    setup_sqlite_backup()

    # Re-login after restart (session may be invalid)
    time.sleep(3)
    try:
        login()
    except Exception:
        pass

    print("\n=== All done! ===")
    print(f"  Temperature: lowered to 0.5")
    print(f"  Dead node: removed")
    print(f"  Cron filter: 9am-8pm Chile")
    print(f"  SQLite backup: daily at 3am Chile")


if __name__ == "__main__":
    main()
