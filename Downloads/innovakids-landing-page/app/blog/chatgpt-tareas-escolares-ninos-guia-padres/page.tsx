import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "ChatGPT para Tareas Escolares: Guía para Padres que Quieren Hacerlo Bien | InnovaKids",
  description:
    "Aprende cómo tu hijo puede usar ChatGPT para estudiar sin hacer trampa. 10 prompts reales por materia, reglas claras y consejos para padres. Guía práctica 2026.",
  keywords: [
    "chatgpt para tareas escolares",
    "usar chatgpt en el colegio",
    "ia para estudiar",
    "chatgpt para niños",
    "como usar chatgpt para hacer tareas",
    "inteligencia artificial tareas escolares",
    "chatgpt tareas colegio",
    "ia para hacer tareas",
    "prompts chatgpt estudiantes",
    "chatgpt educación niños",
  ],
  alternates: {
    canonical: "https://www.innovakidslatam.com/blog/chatgpt-tareas-escolares-ninos-guia-padres",
  },
  openGraph: {
    title: "ChatGPT para Tareas Escolares: Guía para Padres | InnovaKids",
    description:
      "Cómo tu hijo puede usar ChatGPT para aprender más, no para copiar. 10 prompts reales por materia y consejos para supervisar sin controlar.",
    url: "https://www.innovakidslatam.com/blog/chatgpt-tareas-escolares-ninos-guia-padres",
    siteName: "InnovaKids",
    type: "article",
    locale: "es_419",
    images: [{
      url: "https://www.innovakidslatam.com/hero-child-learning-ai.jpg",
      width: 1200,
      height: 630,
      alt: "ChatGPT para tareas escolares - Guía para padres InnovaKids",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ChatGPT para Tareas Escolares: Guía para Padres | InnovaKids",
    description:
      "Cómo tu hijo puede usar ChatGPT para aprender, no para copiar. 10 prompts reales por materia.",
    images: ["https://www.innovakidslatam.com/hero-child-learning-ai.jpg"],
  },
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Es trampa usar ChatGPT para las tareas del colegio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende de cómo se use. Si el niño copia y pega la respuesta sin leerla, sí es trampa. Pero si usa ChatGPT para entender un concepto, generar ideas o verificar su propio trabajo, es una herramienta legítima de aprendizaje. La clave está en que el niño piense antes de preguntar y evalúe críticamente las respuestas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué prompts puede usar mi hijo en ChatGPT para estudiar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Algunos prompts útiles: 'Explícame [tema] como si tuviera 10 años', 'Dame 5 ejercicios de práctica sobre [tema] y después corrígelos', 'Actúa como mi profesor de [materia] y hazme preguntas para ver si entendí'. Lo importante es que el prompt pida explicación o práctica, no la respuesta directa.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué dicen los colegios sobre el uso de ChatGPT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La mayoría de los colegios en Latinoamérica están pasando de prohibir la IA a integrarla. Organismos como la UNESCO recomiendan enseñar a usarla, no prohibirla. Cada vez más colegios permiten el uso de IA siempre que el alumno declare cómo la usó y demuestre comprensión del tema.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo puedo supervisar el uso de ChatGPT de mi hijo sin ser invasivo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Establece reglas claras desde el principio: usar ChatGPT en espacios comunes, mostrar el historial de conversaciones, y explicar qué aprendió con sus propias palabras después de usarlo. No se trata de leer cada mensaje, sino de crear una cultura de transparencia y uso responsable.",
      },
    },
  ],
}

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ChatGPT para Tareas Escolares: Guía para Padres que Quieren Hacerlo Bien",
  description:
    "Guía práctica para padres sobre cómo los niños pueden usar ChatGPT para estudiar y hacer tareas sin hacer trampa. Incluye prompts reales por materia.",
  author: {
    "@type": "Organization",
    name: "InnovaKids",
    url: "https://www.innovakidslatam.com",
  },
  publisher: {
    "@type": "Organization",
    name: "InnovaKids",
    url: "https://www.innovakidslatam.com",
  },
  datePublished: "2026-06-03",
  dateModified: "2026-06-03",
  mainEntityOfPage: "https://www.innovakidslatam.com/blog/chatgpt-tareas-escolares-ninos-guia-padres",
  image: "https://www.innovakidslatam.com/hero-child-learning-ai.jpg",
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: "https://www.innovakidslatam.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://www.innovakidslatam.com/blog",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "ChatGPT para Tareas Escolares",
      item: "https://www.innovakidslatam.com/blog/chatgpt-tareas-escolares-ninos-guia-padres",
    },
  ],
}

const promptsPorMateria = [
  {
    materia: "Matemáticas",
    prompts: [
      { prompt: "No me digas la respuesta. Explícame paso a paso cómo resolver este tipo de problema: [pega el ejercicio]", uso: "Para entender el método sin copiar la solución" },
      { prompt: "Dame 5 problemas parecidos a este para practicar: [pega el ejercicio]. Después corrígelos cuando te envíe mis respuestas", uso: "Para generar ejercicios de práctica ilimitados" },
    ],
  },
  {
    materia: "Ciencias Naturales",
    prompts: [
      { prompt: "Explícame [concepto] usando una analogía que un niño de 11 años pueda entender. Después hazme 3 preguntas para verificar que lo entendí", uso: "Para comprender conceptos abstractos" },
      { prompt: "Actúa como un científico y ayúdame a diseñar un experimento casero para demostrar [concepto]", uso: "Para conectar teoría con práctica" },
    ],
  },
  {
    materia: "Lenguaje e Historia",
    prompts: [
      { prompt: "Voy a escribir un ensayo sobre [tema]. Ayúdame a organizar mis ideas en una estructura de introducción, desarrollo y conclusión. No escribas el ensayo por mí", uso: "Para estructurar ideas sin que la IA escriba" },
      { prompt: "Soy estudiante de [edad] años. Hazme un resumen de [período histórico] y después hazme un quiz de 10 preguntas para estudiar", uso: "Para repasar contenido de forma activa" },
    ],
  },
  {
    materia: "Inglés u otro idioma",
    prompts: [
      { prompt: "Vamos a tener una conversación en inglés sobre [tema]. Corrige mis errores de gramática después de cada respuesta mía, pero déjame intentar primero", uso: "Para practicar conversación con corrección inmediata" },
      { prompt: "Traduje esta oración: [oración en español] como [tu traducción]. ¿Está correcta? Si no, explícame por qué y dame la versión correcta", uso: "Para verificar traducciones entendiendo el porqué" },
    ],
  },
  {
    materia: "Cualquier materia",
    prompts: [
      { prompt: "Actúa como mi profesor de [materia]. Hazme preguntas sobre [tema] una por una. Si me equivoco, explícame la respuesta correcta antes de seguir", uso: "Para simular un examen oral con retroalimentación" },
      { prompt: "Tengo una prueba de [materia] mañana sobre [temas]. Crea una guía de estudio con los conceptos clave y preguntas de práctica", uso: "Para preparar evaluaciones de forma organizada" },
    ],
  },
]

export default function ChatGPTTareasEscolaresPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Navigation />
      <main className="min-h-screen bg-[#F5F1E8] text-[#2F2F2C]">

        {/* Hero */}
        <header className="pt-32 pb-16 px-6 bg-[#2F2F2C] text-[#F5F1E8]">
          <div className="max-w-4xl mx-auto">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold mb-6">
              Guía para padres · IA en el colegio
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.05] tracking-tight mb-8"
              style={{ fontFamily: "'Charter', 'Georgia', serif" }}>
              ChatGPT para Tareas Escolares:{" "}
              <em className="italic text-[#C96342]">Guía para Padres</em>
            </h1>
            <p className="text-lg text-[#F5F1E8]/80 max-w-[60ch] leading-relaxed mb-10">
              No es trampa si se usa bien. Aprende cómo tu hijo puede usar
              ChatGPT como herramienta de aprendizaje, no como atajo.
              Incluye 10 prompts reales que puede usar hoy.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-[#F5F1E8]/60">
              <span>Lectura: 8 min</span>
              <span>·</span>
              <span>Actualizado: junio 2026</span>
              <span>·</span>
              <span>Por el equipo InnovaKids</span>
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-6 py-16 space-y-20">

          {/* Sección 1: ¿Es trampa? */}
          <section>
            <h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-6"
              style={{ fontFamily: "'Charter', 'Georgia', serif" }}>
              ¿Es trampa usar ChatGPT para las tareas? (spoiler: depende de cómo)
            </h2>
            <div className="prose prose-lg max-w-none text-[#5A5751] leading-relaxed space-y-4">
              <p>
                Esta es la pregunta que más escuchamos de los padres. Y la respuesta honesta es: <strong className="text-[#2F2F2C]">depende completamente de cómo se use</strong>.
                Copiar y pegar una respuesta de ChatGPT es trampa, igual que copiar de Wikipedia o del cuaderno de un compañero.
                Pero usar ChatGPT para entender un concepto difícil, practicar con ejercicios extra o estructurar ideas propias es exactamente lo que hacen los mejores estudiantes.
              </p>
              <p>
                Piénsalo así: una calculadora no es trampa en una clase de física. Pero sí lo es en un examen de aritmética básica.
                El contexto importa. Y con la IA pasa exactamente lo mismo.
              </p>
              <p>
                El problema real no es que tu hijo use ChatGPT. El problema es que <strong className="text-[#2F2F2C]">nadie le ha enseñado a usarlo bien</strong>.
                La mayoría de niños y adolescentes descubren ChatGPT solos y lo usan de la forma más obvia: "hazme la tarea".
                Pero cuando un adulto les muestra cómo usarlo para <em>aprender más</em>, todo cambia.
              </p>
              <p>
                En{" "}
                <Link href="/" className="text-[#C96342] underline underline-offset-2 hover:text-[#b8573a]">
                  InnovaKids
                </Link>{" "}
                vemos esto todos los días: niños que llegaron usando ChatGPT solo para copiar,
                y que en pocas semanas aprenden a usarlo como un asistente de estudio que los hace pensar más, no menos.
              </p>
            </div>
          </section>

          {/* Sección 2: Copiar vs aprender */}
          <section>
            <h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-8"
              style={{ fontFamily: "'Charter', 'Georgia', serif" }}>
              La diferencia entre copiar y aprender con IA
            </h2>
            <div className="prose prose-lg max-w-none text-[#5A5751] leading-relaxed space-y-4 mb-8">
              <p>
                La línea entre usar IA para aprender y usarla para hacer trampa es más clara de lo que parece.
                Todo se reduce a una pregunta: <strong className="text-[#2F2F2C]">¿tu hijo entiende lo que entregó?</strong>
              </p>
              <p>
                Si le preguntas sobre su tarea y puede explicar cada parte con sus propias palabras, usó la IA correctamente.
                Si no puede explicar lo que escribió, copió. Así de simple.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-red-50 rounded-2xl p-7 border border-red-200/50">
                <p className="text-[11px] uppercase tracking-[0.28em] text-red-600 font-semibold mb-4">
                  Esto es copiar
                </p>
                <ul className="space-y-3">
                  {[
                    "Pegar la pregunta de la tarea y copiar la respuesta tal cual",
                    "Pedirle a ChatGPT que escriba un ensayo completo y entregarlo como propio",
                    "Usar la IA sin leer ni entender lo que generó",
                    "No poder explicar su propio trabajo cuando le preguntan",
                    "Usar ChatGPT a escondidas porque sabe que no debería",
                  ].map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-[#2F2F2C]">
                      <span className="text-red-500 shrink-0 mt-0.5">✗</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-green-50 rounded-2xl p-7 border border-green-200/50">
                <p className="text-[11px] uppercase tracking-[0.28em] text-green-700 font-semibold mb-4">
                  Esto es aprender con IA
                </p>
                <ul className="space-y-3">
                  {[
                    "Pedir que le explique un concepto que no entendió en clase",
                    "Generar ejercicios de práctica y resolverlos por su cuenta",
                    "Usar la IA para revisar y mejorar un texto que escribió primero",
                    "Pedirle que actúe como profesor y le haga preguntas",
                    "Declarar abiertamente que usó IA y explicar cómo",
                  ].map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-[#2F2F2C]">
                      <span className="text-green-600 shrink-0 mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-8 prose prose-lg max-w-none text-[#5A5751] leading-relaxed space-y-4">
              <p>
                Una buena regla para enseñarle a tu hijo: <strong className="text-[#2F2F2C]">"Usa ChatGPT para pensar más, no para pensar menos"</strong>.
                Si después de usar la IA entiendes mejor el tema, lo estás haciendo bien. Si después de usarla no aprendiste nada nuevo, lo estás haciendo mal.
              </p>
              <p>
                Esto conecta directamente con lo que enseñamos en los cursos de{" "}
                <Link href="/blog/inteligencia-artificial-para-ninos" className="text-[#C96342] underline underline-offset-2 hover:text-[#b8573a]">
                  inteligencia artificial para niños
                </Link>
                : la IA es una herramienta que amplifica lo que ya hay dentro del niño. Si hay curiosidad, la amplifica. Si hay pereza, también.
              </p>
            </div>
          </section>

          {/* Sección 3: Prompts por materia */}
          <section>
            <h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-4"
              style={{ fontFamily: "'Charter', 'Georgia', serif" }}>
              10 prompts que tu hijo puede usar hoy por materia
            </h2>
            <p className="text-[#5A5751] leading-relaxed mb-8">
              Estos son prompts diseñados para que tu hijo <strong className="text-[#2F2F2C]">aprenda más</strong>, no para que copie.
              Fíjate que ninguno pide "la respuesta". Todos piden explicación, práctica o retroalimentación.
              Puedes imprimir esta lista y pegarla junto al escritorio de tu hijo.
            </p>
            <div className="space-y-6">
              {promptsPorMateria.map((seccion) => (
                <div key={seccion.materia} className="bg-white rounded-2xl p-7 border border-[#2F2F2C]/8">
                  <h3 className="font-semibold text-[#2F2F2C] mb-4 text-lg">{seccion.materia}</h3>
                  <div className="space-y-4">
                    {seccion.prompts.map((item) => (
                      <div key={item.prompt}>
                        <p className="bg-[#F5F1E8] rounded-lg px-4 py-3 text-sm font-mono text-[#2F2F2C] mb-1.5">
                          "{item.prompt}"
                        </p>
                        <p className="text-xs text-[#5A5751] italic pl-4">{item.uso}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 prose prose-lg max-w-none text-[#5A5751] leading-relaxed">
              <p>
                <strong className="text-[#2F2F2C]">Consejo clave:</strong> enséñale a tu hijo que el mejor prompt siempre incluye contexto.
                En lugar de "explícame las fracciones", es mucho mejor decir "tengo 11 años y no entiendo cómo sumar fracciones con distinto denominador.
                Explícamelo paso a paso con un ejemplo de pizza". Cuanto más contexto, mejor respuesta.
              </p>
            </div>
          </section>

          {/* Sección 4: Qué dicen los colegios */}
          <section className="bg-white rounded-2xl p-8 md:p-10 border border-[#2F2F2C]/8">
            <h2 className="text-2xl md:text-3xl font-normal tracking-tight mb-6"
              style={{ fontFamily: "'Charter', 'Georgia', serif" }}>
              Qué dicen los colegios sobre el uso de IA
            </h2>
            <div className="space-y-4 text-[#5A5751] leading-relaxed">
              <p>
                El panorama está cambiando rápido. En 2024, la mayoría de los colegios en Latinoamérica prohibían el uso de ChatGPT.
                En 2026, la tendencia se ha invertido: <strong className="text-[#2F2F2C]">cada vez más instituciones educativas integran la IA</strong> como parte del proceso de aprendizaje.
              </p>
              <p>
                La UNESCO publicó su guía sobre IA en educación recomendando que los colegios enseñen a usar estas herramientas
                en lugar de prohibirlas. Países como Uruguay, Colombia y Chile ya tienen programas piloto de IA en educación básica.
              </p>
              <p>
                Muchos colegios ahora permiten el uso de IA con una condición: <strong className="text-[#2F2F2C]">el alumno debe declarar cómo la usó</strong>.
                Algunos incluso piden que los estudiantes entreguen el historial de su conversación con ChatGPT junto con la tarea.
                Esto no es vigilancia: es transparencia y honestidad académica.
              </p>
              <p>
                Si el colegio de tu hijo todavía prohíbe la IA, no te preocupes. Puedes enseñarle a usarla en casa para estudiar,
                repasar y practicar. Lo que aprenda sobre cómo interactuar con la IA le servirá para toda su vida académica y profesional.
                Te recomendamos leer nuestra guía sobre{" "}
                <Link href="/blog/como-proteger-hijos-ia-uso-seguro-responsable" className="text-[#C96342] underline underline-offset-2 hover:text-[#b8573a]">
                  cómo proteger a tus hijos en el uso de IA
                </Link>{" "}
                para complementar esta información.
              </p>
            </div>
          </section>

          {/* Sección 5: Supervisar sin controlar */}
          <section>
            <h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-8"
              style={{ fontFamily: "'Charter', 'Georgia', serif" }}>
              Cómo supervisar sin controlar: el rol del padre
            </h2>
            <div className="prose prose-lg max-w-none text-[#5A5751] leading-relaxed space-y-4 mb-8">
              <p>
                Aquí es donde muchos padres se sienten perdidos. No quieres ser el policía que revisa cada conversación de tu hijo con ChatGPT,
                pero tampoco quieres dejarlo solo frente a una herramienta que puede darle respuestas a todo.
                La buena noticia: hay un punto medio que funciona muy bien.
              </p>
            </div>
            <div className="grid gap-5">
              {[
                {
                  titulo: "1. Establece las reglas antes, no después",
                  texto: "Antes de que tu hijo use ChatGPT por primera vez para estudiar, siéntate con él y definan juntos las reglas. Por ejemplo: 'Puedes usarlo para entender conceptos y practicar, pero no para copiar respuestas directas. Si tienes dudas sobre si algo es correcto, me preguntas'. Que las reglas sean claras y acordadas, no impuestas.",
                },
                {
                  titulo: "2. Pide que te explique lo que aprendió",
                  texto: "La mejor forma de verificar si tu hijo usó ChatGPT para aprender o para copiar es simple: pídele que te explique su tarea con sus propias palabras. Si puede hacerlo, todo bien. Si titubea, hubo un problema. Esto además refuerza el aprendizaje porque explicar es la mejor forma de consolidar conocimiento.",
                },
                {
                  titulo: "3. Usa ChatGPT con él las primeras veces",
                  texto: "No tiene que ser una actividad formal. La próxima vez que tu hijo tenga una tarea difícil, siéntate a su lado y usen ChatGPT juntos. Muéstrale cómo formular preguntas que le hagan pensar, no que le den la respuesta. Este acompañamiento inicial marca toda la diferencia.",
                },
                {
                  titulo: "4. Celebra el proceso, no solo la nota",
                  texto: "Si tu hijo usó ChatGPT para entender un tema difícil y después resolvió la tarea solo, reconócelo. El objetivo no es la nota perfecta sino el aprendizaje real. Un niño que aprende a usar la IA como herramienta de estudio tiene una ventaja para toda su vida académica.",
                },
                {
                  titulo: "5. Mantén las conversaciones abiertas",
                  texto: "Pregúntale regularmente cómo está usando ChatGPT, qué descubrió, qué le pareció útil. Si creas un ambiente donde hablar de IA es normal y positivo, tu hijo no sentirá la necesidad de esconder su uso. La confianza es mejor filtro que cualquier software de control parental.",
                },
              ].map((item) => (
                <div key={item.titulo} className="bg-white rounded-2xl p-6 border border-[#2F2F2C]/8">
                  <h3 className="font-semibold text-[#2F2F2C] mb-2">{item.titulo}</h3>
                  <p className="text-[#5A5751] text-sm leading-relaxed">{item.texto}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Sección 6: De consumidor a creador */}
          <section>
            <h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-6"
              style={{ fontFamily: "'Charter', 'Georgia', serif" }}>
              De consumidor a creador: el siguiente paso
            </h2>
            <div className="prose prose-lg max-w-none text-[#5A5751] leading-relaxed space-y-4">
              <p>
                Usar ChatGPT para estudiar mejor es un excelente primer paso. Pero es solo eso: el primer paso.
                El verdadero potencial de la IA no está en responder preguntas de tarea, sino en <strong className="text-[#2F2F2C]">crear cosas que antes eran imposibles</strong>.
              </p>
              <p>
                Un niño que domina los prompts de estudio puede dar el salto a crear con IA: diseñar videojuegos, componer música,
                ilustrar historias, programar aplicaciones. La misma habilidad de comunicarse bien con la IA (lo que llamamos
                <em> ingeniería de prompts</em>) que sirve para estudiar, sirve para construir proyectos reales.
              </p>
              <p>
                Eso es exactamente lo que hacemos en{" "}
                <Link href="/programa" className="text-[#C96342] underline underline-offset-2 hover:text-[#b8573a]">
                  el programa de InnovaKids
                </Link>
                : llevamos a los niños de usar IA como consumidores (hacer preguntas) a usarla como creadores (construir proyectos).
                En 5 semanas, tu hijo pasa de "ChatGPT, hazme la tarea" a "ChatGPT, ayúdame a construir mi videojuego".
              </p>
              <p>
                Si tu hijo ya usa ChatGPT para estudiar, está listo para el siguiente nivel.
                Los niños que aprenden a{" "}
                <Link href="/blog/curso-ia-ninos-10-11-12-anos" className="text-[#C96342] underline underline-offset-2 hover:text-[#b8573a]">
                  crear con IA desde los 10-12 años
                </Link>{" "}
                tienen una ventaja que se acumula con el tiempo. Cada año de experiencia creativa con IA es un año que sus compañeros no tendrán.
              </p>
              <p>
                La pregunta no es si tu hijo va a usar IA en su futuro. Es si va a llegar a ese futuro sabiendo usarla bien
                o teniendo que aprenderla desde cero cuando ya sea tarde. Hoy, como padre, tienes la oportunidad de darle esa ventaja.
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-8"
              style={{ fontFamily: "'Charter', 'Georgia', serif" }}>
              Preguntas frecuentes
            </h2>
            <div className="space-y-5">
              {[
                {
                  q: "¿Es trampa usar ChatGPT para las tareas del colegio?",
                  a: "Depende de cómo se use. Si tu hijo copia y pega la respuesta, sí es trampa. Si lo usa para entender un concepto, generar ejercicios de práctica o mejorar un texto que escribió primero, es una herramienta legítima de aprendizaje. La clave: ¿puede explicar su trabajo con sus propias palabras?",
                },
                {
                  q: "¿A partir de qué edad puede mi hijo usar ChatGPT para estudiar?",
                  a: "ChatGPT requiere 13 años según sus términos de uso. Para niños menores, recomendamos que lo usen siempre acompañados de un adulto. En la práctica, niños de 10-12 años pueden usarlo muy bien con supervisión inicial y reglas claras.",
                },
                {
                  q: "¿ChatGPT siempre da respuestas correctas?",
                  a: "No. ChatGPT puede equivocarse, inventar datos o dar información desactualizada. Enseñarle a tu hijo a verificar las respuestas de la IA es una de las habilidades más valiosas que puede aprender: pensamiento crítico aplicado a la era digital.",
                },
                {
                  q: "¿Cómo sé si mi hijo copió de ChatGPT o aprendió de verdad?",
                  a: "Pídele que te explique su tarea con sus propias palabras, sin mirar el cuaderno. Si puede hacerlo, aprendió. Si no puede, copió. Esta simple prueba funciona mejor que cualquier detector de IA.",
                },
              ].map((item) => (
                <details key={item.q} className="group bg-white rounded-2xl border border-[#2F2F2C]/8">
                  <summary className="flex justify-between items-center px-7 py-5 cursor-pointer font-semibold text-[#2F2F2C] list-none">
                    {item.q}
                    <span className="text-[#C96342] group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="px-7 pb-6 text-[#5A5751] leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-[#2F2F2C] rounded-3xl p-10 md:p-14 text-center text-[#F5F1E8]">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold mb-5">
              InnovaKids · De consumidor a creador de IA
            </p>
            <h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-5"
              style={{ fontFamily: "'Charter', 'Georgia', serif" }}>
              Tu hijo ya usa ChatGPT.{" "}
              <em className="italic text-[#C96342]">Enséñale a crear con IA.</em>
            </h2>
            <p className="text-[#F5F1E8]/70 max-w-[50ch] mx-auto leading-relaxed mb-8">
              Primera clase gratis. Sin compromiso. Grupos de máximo 5 alumnos.
              Clases en vivo, 100% online. Proyectos reales terminados.
            </p>
            <Link
              href="/#sesion-estrategica"
              className="inline-block bg-[#C96342] text-white font-semibold px-8 py-4 rounded-xl hover:bg-[#b8573a] transition-colors text-base"
            >
              Reservar clase gratis →
            </Link>
          </section>

          {/* Internal links */}
          <section>
            <h2 className="text-2xl font-normal tracking-tight mb-6"
              style={{ fontFamily: "'Charter', 'Georgia', serif" }}>
              También te puede interesar
            </h2>
            <ul className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/blog/inteligencia-artificial-para-ninos", title: "Inteligencia Artificial para Niños: guía completa" },
                { href: "/blog/como-proteger-hijos-ia-uso-seguro-responsable", title: "Cómo proteger a tus hijos en el uso de IA" },
                { href: "/blog/actividades-inteligencia-artificial-ninos-casa", title: "12 actividades de IA para hacer con tu hijo en casa" },
                { href: "/blog/scratch-vs-ia-ninos", title: "Scratch vs IA: ¿qué debería aprender tu hijo?" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block bg-white rounded-xl px-6 py-4 border border-[#2F2F2C]/8 hover:border-[#C96342]/40 hover:bg-[#FDF8F3] transition-colors text-[#2F2F2C] font-medium text-sm"
                  >
                    {link.title} →
                  </Link>
                </li>
              ))}
            </ul>
          </section>

        </div>
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  )
}
