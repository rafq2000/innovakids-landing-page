"""
Deploy 5 fixes to n8n workflow wm17NirM9B6SPRH8
Run: python3 deploy_5fixes.py

Fixes included:
1. Debounce relaxed (new leads not blocked)
2. Primera respuesta context-aware (reads user message first)
3. FAQ direct answers section added
4. B2B detection in Parsear Mensaje
5. Anti-repetition rules strengthened
+ Date fix: 27 Abril -> 18 Mayo 2026
"""
import json, requests, time, sys

API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxZTgxYzY2Yy1lYmM1LTQyMmItYjc2Ny1hN2E2NTdlMTg1ZTYiLCJpc3MiOiJuOG4iLCJhdWQiOiJwdWJsaWMtYXBpIiwiaWF0IjoxNzQ2MDQ3OTMyfQ.chtKnR7EB-GRFv_kixMibxOPCMScqosMiH6spHTnOcE"
BASE_URL = "https://n8n.innovakidslatam.com"
WF_ID = "wm17NirM9B6SPRH8"
HEADERS = {"X-N8N-API-KEY": API_KEY, "Content-Type": "application/json"}

# Load fixed workflow
with open('C:/Users/rude_/Downloads/innovakids-landing-page/_workflow_5fixes_ready.json', 'r', encoding='utf-8') as f:
    wf = json.load(f)

# Extract only what we need for PATCH
patch_data = {
    "nodes": wf["nodes"],
    "connections": wf["connections"]
}

print(f"Deploying {len(wf['nodes'])} nodes to {BASE_URL}...")

# Step 1: PATCH the workflow
try:
    resp = requests.patch(
        f"{BASE_URL}/api/v1/workflows/{WF_ID}",
        headers=HEADERS,
        json=patch_data,
        timeout=30
    )
    if resp.status_code == 200:
        print(f"[OK] PATCH successful")
    else:
        print(f"[FAIL] PATCH returned {resp.status_code}: {resp.text[:200]}")
        sys.exit(1)
except Exception as e:
    print(f"[FAIL] Connection error: {e}")
    print("\nServer may be down. Try again later or use direct IP if available.")
    sys.exit(1)

# Step 2: Activate/publish the workflow
try:
    resp2 = requests.patch(
        f"{BASE_URL}/api/v1/workflows/{WF_ID}",
        headers=HEADERS,
        json={"active": True},
        timeout=15
    )
    if resp2.status_code == 200:
        print(f"[OK] Workflow activated")
    else:
        print(f"[WARN] Activation returned {resp2.status_code}: {resp2.text[:200]}")
except Exception as e:
    print(f"[WARN] Activation failed: {e}")

print("\nDeployment complete! Test with a WhatsApp message.")
