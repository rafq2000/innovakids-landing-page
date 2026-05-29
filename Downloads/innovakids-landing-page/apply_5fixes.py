import json, sys

with open('C:/Users/rude_/Downloads/innovakids-landing-page/_backup_post_fix_20260505.json', 'r', encoding='utf-8') as f:
    wf = json.load(f)

nodes = wf['nodes']

# ============================================================
# FIX 1: DEBOUNCE - Leer Lead Score (index 14)
# ============================================================
leer_node = nodes[14]
code = leer_node['parameters']['jsCode']
old_debounce = 'if (msSinceLast < 4000 && prev.messageCount > 0)'
new_debounce = 'const hasReceivedResponse = !!prev.lastOutgoing;\nif (msSinceLast < 4000 && prev.messageCount > 1 && hasReceivedResponse)'
if old_debounce in code:
    code = code.replace(old_debounce, new_debounce)
    leer_node['parameters']['jsCode'] = code
    print("[OK] FIX 1: Debounce relaxed for new leads")
else:
    if 'hasReceivedResponse' in code:
        print("[SKIP] FIX 1: already applied")
    else:
        print("[WARN] FIX 1: pattern not found")

# ============================================================
# FIX 4: B2B Detection - Parsear Mensaje (index 1)
# ============================================================
parsear_node = nodes[1]
pcode = parsear_node['parameters']['jsCode']
if 'isB2B' not in pcode:
    b2b_code = ("\n// B2B Detection\n"
        "const b2bKeywords = ['profesora', 'profesor', 'colegio', 'escuela', "
        "'institucion', 'institucional', 'municipalidad', 'fundacion', 'ong', "
        "'empresa', 'corporacion', 'liceo', 'establecimiento', 'directora', "
        "'director', 'coordinador', 'coordinadora', 'jefe de estudios', "
        "'ugel', 'mineduc', 'secretaria de educacion'];\n"
        "const isB2B = b2bKeywords.some(kw => contentLower.includes(kw));\n")
    last_return = pcode.rfind('return [{')
    pcode = pcode[:last_return] + b2b_code + "\n" + pcode[last_return:]
    pcode = pcode.replace('isNonActionable\n}}];', 'isNonActionable,\n  isB2B\n}}];')
    parsear_node['parameters']['jsCode'] = pcode
    print("[OK] FIX 4: B2B detection added to Parsear Mensaje")
else:
    print("[SKIP] FIX 4: already present")

# ============================================================
# FIXES 2, 3, 5: AI Mia systemMessage
# ============================================================
prompt = nodes[16]['parameters']['options']['systemMessage']

# --- Date fix ---
prompt = prompt.replace('27 de Abril de 2026', '18 de Mayo de 2026')
prompt = prompt.replace('27 de abril de 2026', '18 de Mayo de 2026')
prompt = prompt.replace('27 de Abril', '18 de Mayo')

# --- FIX 2: Rewrite PRIMERA RESPUESTA to be context-aware ---
old_primera_start = 'PRIMERA RESPUESTA (ESTADO_LEAD = NUEVO)\n===============================================\nCuando alguien escribe por primera vez:'
old_primera_end = 'EXCEPCION: Si la persona PREGUNTA DIRECTAMENTE precio, horario o que incluye, ENTONCES si das la info que pidio.'

new_primera = """PRIMERA RESPUESTA (ESTADO_LEAD = NUEVO)
===============================================
REGLA CRITICA: LEE el mensaje del usuario ANTES de responder. Adapta tu respuesta a lo que ELLOS dijeron.

Si el usuario PREGUNTA algo especifico (precio, horarios, edades, que incluye, paises):
-> Responde directamente su pregunta + una pregunta de seguimiento breve.

Si el usuario MENCIONA la edad del hijo o un interes especifico:
-> Reconoce lo que dijeron, conecta con el programa, pregunta algo relevante siguiente.

Si el usuario solo dice "hola" o saludo generico sin pregunta:
-> Saluda + presentate brevemente + pregunta abierta.

NUNCA uses la misma respuesta generica para todos. SIEMPRE personaliza segun lo que el usuario escribio.

Ejemplos:
- "Hola, mi hijo tiene 9" -> "Hola! A los 9 es edad perfecta para empezar. En InnovaKids aprenden a crear con IA de forma divertida. Que le gusta? Juegos, dibujar, musica?"
- "Cuanto cuesta?" -> "El programa son $267 USD (10 clases en vivo, max 5 ninos). Se reserva con $27 reembolsables. Quieres que te cuente que incluye?"
- "Tienen para ninos de 14?" -> "Si! Tenemos grupo 14-17 donde crean proyectos avanzados con IA. Que le interesa? Programacion, diseno, musica?"
- "Hola buenas tardes" -> "Hola! Soy Mia de InnovaKids. Tenemos una academia online donde los ninos aprenden a crear con IA. Cuantos anos tiene tu hijo/a?"

EXCEPCION B2B: Si detectas lenguaje institucional (colegio, escuela, municipalidad), responde: "Genial! Tenemos programas para instituciones. Te conecto con nuestro equipo de alianzas. Cuentame mas sobre tu proyecto?"
"""

start_idx = prompt.find(old_primera_start)
end_idx = prompt.find(old_primera_end)
if start_idx > -1 and end_idx > -1:
    end_idx += len(old_primera_end)
    prompt = prompt[:start_idx] + new_primera + prompt[end_idx:]
    print("[OK] FIX 2: Primera respuesta rewritten (context-aware)")
else:
    print(f"[WARN] FIX 2: Could not find exact section (start={start_idx}, end={end_idx})")
    # Fallback: find by section boundaries
    s1 = prompt.find('PRIMERA RESPUESTA (ESTADO_LEAD = NUEVO)')
    s2 = prompt.find('===============================================\nESTADOS DEL LEAD')
    if s1 > -1 and s2 > -1:
        prompt = prompt[:s1] + new_primera + "\n" + prompt[s2:]
        print("[OK] FIX 2: Applied via section boundary replacement")

# --- FIX 3: Add FAQ direct answers section ---
faq_section = """
===============================================
FAQ - RESPUESTAS DIRECTAS (memoriza esto)
===============================================
Cuando pregunten, responde DIRECTO sin rodeos:

PRECIO: $267 USD total (10 clases en vivo, grupos max 5 ninos). Reserva: $27 USD reembolsables.
HORARIOS: Clases 1 vez por semana, 1 hora. Horarios flexibles (manana, tarde, noche segun timezone).
CLASE GRATIS: Si, ofrecemos una clase de evaluacion gratuita para conocer al nino y que pruebe.
EDADES: 8-10, 11-13, 14-17 anos. Grupos por nivel.
INICIO: Proxima fecha: semana del 18 de Mayo de 2026.
PAISES: Chile, Mexico, Colombia, Argentina, Peru, Ecuador, Uruguay, Costa Rica, Panama, Rep Dominicana, Honduras, El Salvador, Guatemala, Paraguay, Bolivia, Venezuela, Nicaragua, Puerto Rico, Espana, USA.
DURACION: 10 semanas (1 clase semanal de 1 hora).
PLATAFORMA: Online en vivo por Zoom con profesor real + herramientas de IA.
GARANTIA: 10 dias de garantia. Si no les gusta, devolvemos todo.
QUE APRENDEN: Crear con IA - musica, arte, videojuegos, apps, historias. Pensamiento computacional + creatividad.
"""

urgencia_idx = prompt.find('URGENCIA Y CUPOS')
if urgencia_idx > -1 and 'FAQ - RESPUESTAS DIRECTAS' not in prompt:
    sep_before = prompt.rfind('===============', 0, urgencia_idx)
    if sep_before > -1:
        prompt = prompt[:sep_before] + faq_section + "\n===============================================\n" + prompt[urgencia_idx:]
    else:
        prompt = prompt[:urgencia_idx] + faq_section + "\n" + prompt[urgencia_idx:]
    print("[OK] FIX 3: FAQ section added before URGENCIA")
elif 'FAQ - RESPUESTAS DIRECTAS' in prompt:
    print("[SKIP] FIX 3: already present")
else:
    print("[FAIL] FIX 3: Could not locate URGENCIA section")

# --- FIX 5: Strengthen "don't ask for info already provided" ---
old_regla = '- NUNCA repitas informacion ya entregada.'
new_regla = ('- NUNCA repitas informacion ya entregada.\n'
    '- NUNCA preguntes algo que el usuario YA te dijo (edad, nombre, pais, interes). Si ya lo tienes, usalo directamente.\n'
    '- Si el usuario ya dio la edad del hijo, NO preguntes "cuantos anos tiene?". Avanza al siguiente paso.')

if old_regla in prompt:
    prompt = prompt.replace(old_regla, new_regla)
    print("[OK] FIX 5: Anti-repetition rules strengthened")
else:
    print("[WARN] FIX 5: exact pattern not found, appending to REGLAS")
    reglas_idx = prompt.find('REGLAS IMPORTANTES')
    if reglas_idx > -1:
        insert_after = prompt.find('\n', reglas_idx + 50)
        extra = ('\n- NUNCA preguntes algo que el usuario YA te dijo (edad, nombre, pais, interes).\n'
                 '- Si ya tienes la edad, NO la vuelvas a pedir. Avanza.\n')
        prompt = prompt[:insert_after] + extra + prompt[insert_after:]
        print("[OK] FIX 5: Appended after REGLAS header")

# Apply modified prompt
nodes[16]['parameters']['options']['systemMessage'] = prompt
print(f"\nFinal prompt length: {len(prompt)} (original: 14569)")

# Save
output_path = 'C:/Users/rude_/Downloads/innovakids-landing-page/_workflow_5fixes_ready.json'
with open(output_path, 'w', encoding='utf-8') as f:
    json.dump(wf, f, ensure_ascii=False, indent=2)

print(f"\nWorkflow saved to: {output_path}")
print("Ready to deploy via n8n API when server is back online.")
