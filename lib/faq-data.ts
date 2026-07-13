import { COHORT } from "@/lib/site-config"

export const faqs = [
    // 1. ABILITY & BELIEF (¿Podrá mi hijo?) -> Effort & Sacrifice ↓
    {
        question: "¿Mi hijo necesita saber programación o matemáticas avanzadas?",
        answer:
            "No. El 90% de nuestros alumnos empieza desde cero. Usamos 'Vibe Coding', una forma de programar donde tu hijo le da instrucciones a la IA en español corriente y ella escribe el código por él. Si sabe usar YouTube, está listo.",
    },
    {
        question: "¿Cuál es la edad ideal? ¿Es muy pequeño o muy grande?",
        answer:
            "El programa es para niños y adolescentes de 8 a 17 años. Separamos en tres grupos por edad (8-10, 11-13 y 14-17) para que la dinámica sea ideal para su etapa. A estas edades tienen la creatividad y la capacidad lógica perfectas para aprender IA.",
    },

    // 2. DREAM OUTCOME (¿Qué va a lograr?) -> Dream Outcome ↑
    {
        question: "¿Qué va a ser capaz de CREAR mi hijo realmente?",
        answer:
            "En Vibe Explorer crea arte con IA, música con Suno, su voz clonada, su primer videojuego real y un proyecto final que presenta a su familia. Los graduados pueden continuar con Vibe Director, nuestra especialización audiovisual donde dirigen su primer cortometraje con IA.",
    },
    {
        question: "¿Recibe algún certificado oficial?",
        answer:
            "Sí. Al graduarse recibe el 'InnovaKids AI Explorer Certificate', un certificado digital que puede agregar a su portafolio escolar. Es una credencial que lo diferencia del 99% de los niños de su edad.",
    },

    // 3. SOCIAL PROOF & SCARCITY (¿Por qué ahora?) -> Likelihood ↑
    {
        question: "¿Por qué solo aceptan 5 alumnos por grupo?",
        answer:
            "Con 527 graduados, aprendimos que 5 es el número ideal. El instructor ve la pantalla de cada niño, corrige en tiempo real y se asegura de que nadie se quede atrás. No es un webinar masivo, es mentoría personalizada.",
    },

    // 4. LOGISTICS (¿Cómo funciona?) -> Time Delay ↓
    {
        question: "¿Cuándo inicia y cuáles son los horarios?",
        answer:
            `Iniciamos la semana del ${COHORT.startDate}. Los horarios son 100% flexibles: al inscribirte eliges tus bloques preferidos (Lunes a S\u00e1bado, ma\u00f1anas y tardes) y te asignamos al grupo ideal.`,
    },
    {
        question: "¿Cuánto cuesta el programa completo?",
        answer:
            "$297 USD por módulo: 5 semanas, 10 clases en vivo, grabaciones de por vida, software premium y garantía de 10 días. Es una inversión única para una habilidad que usará siempre.",
    },
    {
        question: "¿Qué pasa si falta a una clase?",
        answer:
            "Todas las sesiones se graban y se suben a su aula virtual privada. Puede verlas cuando quiera y hacer preguntas al profesor por el chat de soporte.",
    },

    // 5. RISK REVERSAL (El cierre) -> Risk = 0
    {
        question: "¿Tiene garantía? ¿Qué pasa si no le gusta?",
        answer:
            "Garantía de 10 días. Inscríbelo, que tome las primeras clases y, si no estás satisfecho, te devolvemos el 100% de tu dinero sin preguntas. El riesgo es todo nuestro.",
    },

    // 6. EMPRESA & LEGAL
    {
        question: "¿Quién está detrás de InnovaKids? ¿Es una empresa real?",
        answer:
            "Sí, somos una empresa legalmente constituida en Chile: INNOVAKIDS LATAM SpA, RUT 78.388.703-7, con presencia en 9 países. Puedes verificar nuestros datos en el Servicio de Impuestos Internos (SII) de Chile.",
    },
]
