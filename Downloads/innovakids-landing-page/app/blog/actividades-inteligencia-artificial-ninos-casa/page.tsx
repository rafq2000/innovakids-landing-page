import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "12 Actividades de IA para Hacer con Tu Hijo en Casa (Sin Programar) | InnovaKids",
  description:
    "Lista práctica de 12 actividades de inteligencia artificial para niños de 8 a 17 años. Proyectos que puedes hacer en casa con herramientas gratuitas. Por nivel y edad.",
  keywords: [
    "actividades ia para niños",
    "actividades inteligencia artificial niños",
    "proyectos ia niños en casa",
    "que hacer con ia niños",
    "ia para niños en casa",
    "experimentos ia niños",
    "actividades tecnología niños",
    "proyectos inteligencia artificial niños",
    "ia en familia",
    "juegos ia niños",
  ],
  alternates: {
    canonical: "https://www.innovakidslatam.com/blog/actividades-inteligencia-artificial-ninos-casa",
  },
  openGraph: {
    title: "12 Actividades de IA para Hacer con Tu Hijo en Casa | InnovaKids",
    description:
      "Actividades prácticas de IA para niños por edad. Crea cuentos, música, videojuegos y más con herramientas gratuitas. Sin saber programar.",
    url: "https://www.innovakidslatam.com/blog/actividades-inteligencia-artificial-ninos-casa",
    siteName: "InnovaKids",
    type: "article",
    locale: "es_419",
    images: [{
      url: "https://www.innovakidslatam.com/hero-child-learning-ai.jpg",
      width: 1200,
      height: 630,
      alt: "Actividades de inteligencia artificial para niños en casa - InnovaKids",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "12 Actividades de IA para Hacer con Tu Hijo en Casa | InnovaKids",
    description:
      "Lista práctica de actividades de IA para niños por edad. Herramientas gratuitas, sin programar.",
    images: ["https://www.innovakidslatam.com/hero-child-learning-ai.jpg"],
  },
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué actividades de IA puede hacer un niño en casa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los niños pueden crear cuentos ilustrados con IA, componer música, diseñar personajes de videojuegos, hacer presentaciones automáticas, editar fotos artísticas, crear chatbots, diseñar logos y hasta programar juegos simples. Todo con herramientas gratuitas y sin necesidad de saber programar.",
      },
    },
    {
      "@type": "Question",
      name: "¿Necesita mi hijo saber programar para hacer actividades de IA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Las herramientas de IA actuales funcionan con lenguaje natural: el niño describe lo que quiere y la IA lo genera. Solo necesita un computador con conexión a internet y ganas de experimentar. La programación no es un requisito previo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Son seguras las herramientas de IA para niños?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las herramientas que recomendamos tienen filtros de contenido y son seguras para menores con supervisión adulta. Lo importante es que el niño no comparta datos personales (nombre completo, dirección, fotos personales) y que un adulto esté presente las primeras veces.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tiempo necesita un niño para completar una actividad de IA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las actividades más simples toman 30-45 minutos. Las más elaboradas pueden ocupar un fin de semana completo. Cada actividad tiene un tiempo estimado para que puedas planificar. Lo importante es que el niño disfrute el proceso sin presión de tiempo.",
      },
    },
  ],
}

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "12 Actividades de IA para Hacer con Tu Hijo en Casa (Sin Saber Programar)",
  description:
    "Lista práctica de 12 actividades de inteligencia artificial organizadas por edad para hacer en familia con herramientas gratuitas.",
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
  mainEntityOfPage: "https://www.innovakidslatam.com/blog/actividades-inteligencia-artificial-ninos-casa",
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
      name: "Actividades de IA para Niños en Casa",
      item: "https://www.innovakidslatam.com/blog/actividades-inteligencia-artificial-ninos-casa",
    },
  ],
}

interface Actividad {
  numero: number
  titulo: string
  herramienta: string
  tiempo: string
  dificultad: string
  descripcion: string
  pasos: string[]
  aprende: string
}

const actividadesExploradores: Actividad[] = [
  {
    numero: 1,
    titulo: "Crea un cuento ilustrado con IA",
    herramienta: "ChatGPT + generador de imágenes (Bing Image Creator)",
    tiempo: "45-60 minutos",
    dificultad: "Fácil",
    descripcion: "Tu hijo inventa una historia y la IA le ayuda a ilustrarla. El niño es el autor; la IA, su ilustrador personal.",
    pasos: [
      "Tu hijo inventa los personajes, el escenario y el conflicto de su cuento",
      "Juntos escriben el cuento en 5-8 párrafos cortos usando ChatGPT como asistente (no como escritor)",
      "Para cada escena, tu hijo describe en palabras qué imagen quiere ver",
      "Generan las ilustraciones con Bing Image Creator usando las descripciones del niño",
      "Arman el cuento con texto e imágenes en un documento o presentación",
    ],
    aprende: "Narrativa, descripción visual, vocabulario y dirección creativa",
  },
  {
    numero: 2,
    titulo: "Diseña tu mascota con inteligencia artificial",
    herramienta: "Bing Image Creator o Canva con IA",
    tiempo: "30-45 minutos",
    dificultad: "Fácil",
    descripcion: "Tu hijo diseña una mascota o personaje original describiendo sus características. Puede crear varias versiones hasta encontrar la que más le guste.",
    pasos: [
      "Tu hijo decide qué tipo de mascota quiere: un animal, un robot, una criatura fantástica",
      "Escribe una descripción detallada: colores, tamaño, accesorios, expresión",
      "Genera la imagen con IA y evalúa el resultado",
      "Ajusta la descripción para mejorar el diseño (iteración creativa)",
      "Crea una ficha de personaje con nombre, poderes y personalidad",
    ],
    aprende: "Descripción detallada, iteración, toma de decisiones estéticas",
  },
  {
    numero: 3,
    titulo: "Compón una canción con IA",
    herramienta: "Suno (suno.com) — versión gratuita",
    tiempo: "30-45 minutos",
    dificultad: "Fácil",
    descripcion: "Tu hijo escribe la letra de una canción y la IA la convierte en música real con voces, instrumentos y ritmo.",
    pasos: [
      "Tu hijo elige un tema para su canción (puede ser divertido, sobre su mascota, su deporte favorito)",
      "Escribe una letra corta: 2-3 estrofas y un coro",
      "Eligen juntos el estilo musical: pop, rock, reggaetón, electrónica",
      "Generan la canción en Suno y escuchan el resultado",
      "Ajustan la letra o el estilo hasta que suene como quieren",
    ],
    aprende: "Expresión escrita, estructura musical, creatividad y perseverancia",
  },
  {
    numero: 4,
    titulo: "Haz una presentación automática sobre tu tema favorito",
    herramienta: "Gamma (gamma.app) — versión gratuita",
    tiempo: "30-40 minutos",
    dificultad: "Fácil",
    descripcion: "Tu hijo elige su tema favorito (dinosaurios, espacio, fútbol, animales) y la IA le ayuda a crear una presentación profesional con contenido e imágenes.",
    pasos: [
      "Tu hijo elige un tema que le apasione y escribe 5 cosas que quiere contar sobre él",
      "Ingresan esas ideas en Gamma como punto de partida",
      "La IA genera una presentación con estructura, texto e imágenes",
      "Tu hijo revisa cada diapositiva y modifica lo que quiera",
      "Practica presentándola frente a la familia (bonus: desarrolla habilidades de oratoria)",
    ],
    aprende: "Investigación básica, organización de ideas, oratoria y pensamiento visual",
  },
]

const actividadesCreadores: Actividad[] = [
  {
    numero: 5,
    titulo: "Crea un cómic de 6 páginas con IA",
    herramienta: "ChatGPT + Bing Image Creator + Canva",
    tiempo: "90-120 minutos",
    dificultad: "Media",
    descripcion: "Tu hijo crea un cómic completo: guion, personajes, diálogos y arte. La IA genera las imágenes según sus indicaciones creativas.",
    pasos: [
      "Tu hijo crea el guion: protagonista, villano, conflicto y resolución en 6 escenas",
      "Escribe los diálogos de cada viñeta",
      "Genera las imágenes de cada escena con IA, manteniendo consistencia en los personajes",
      "Arma las páginas del cómic en Canva con las imágenes y globos de diálogo",
      "Comparte el cómic terminado con familia o amigos",
    ],
    aprende: "Narrativa visual, consistencia creativa, diseño gráfico básico y escritura de diálogos",
  },
  {
    numero: 6,
    titulo: "Construye un chatbot sobre un tema que domine",
    herramienta: "Poe (poe.com) o Character.AI",
    tiempo: "60-90 minutos",
    dificultad: "Media",
    descripcion: "Tu hijo crea un chatbot que responde preguntas sobre un tema en el que sea experto. Puede ser sobre un deporte, un videojuego, un animal o cualquier pasión.",
    pasos: [
      "Tu hijo elige un tema en el que sea realmente bueno o sepa mucho",
      "Define la personalidad del chatbot: nombre, forma de hablar, nivel de detalle",
      "Escribe las instrucciones del sistema (el 'prompt inicial') que define cómo debe comportarse",
      "Prueba el chatbot haciéndole preguntas difíciles y ajusta las instrucciones",
      "Invita a la familia a usar el chatbot y ver si responde bien",
    ],
    aprende: "Ingeniería de prompts, organización del conocimiento, lógica condicional y empatía (pensar en el usuario)",
  },
  {
    numero: 7,
    titulo: "Edita fotos con estilos artísticos usando IA",
    herramienta: "Canva con IA o Photopea + plugins IA",
    tiempo: "45-60 minutos",
    dificultad: "Media",
    descripcion: "Tu hijo toma fotos cotidianas (de la casa, la mascota, el parque) y las transforma en obras de arte con diferentes estilos artísticos usando IA.",
    pasos: [
      "Tu hijo toma 5-10 fotos con el celular de objetos o escenas que le gusten",
      "Suben las fotos a la herramienta de edición con IA",
      "Experimentan con diferentes estilos: acuarela, pixel art, cómic, óleo, anime",
      "Tu hijo elige sus favoritas y explica por qué le gustan (criterio estético)",
      "Crean una galería digital o imprimen las mejores para decorar su habitación",
    ],
    aprende: "Apreciación artística, fotografía básica, experimentación visual y criterio estético",
  },
  {
    numero: 8,
    titulo: "Inventa un idioma con ayuda de IA",
    herramienta: "ChatGPT",
    tiempo: "60-90 minutos",
    dificultad: "Media",
    descripcion: "Tu hijo crea un idioma ficticio completo: vocabulario, reglas gramaticales y frases básicas. La IA le ayuda a mantener la consistencia del sistema.",
    pasos: [
      "Tu hijo decide cómo quiere que suene su idioma: suave, fuerte, musical, robótico",
      "Define las primeras 20-30 palabras básicas (saludos, números, colores, familia)",
      "Con ayuda de ChatGPT, crea reglas gramaticales simples (orden de palabras, plurales)",
      "Escribe 10 frases útiles en su nuevo idioma con su traducción",
      "Enseña algunas frases a la familia e intenta mantener una conversación básica",
    ],
    aprende: "Lingüística básica, pensamiento sistémico, creatividad estructurada y consistencia lógica",
  },
]

const actividadesProfesionales: Actividad[] = [
  {
    numero: 9,
    titulo: "Crea un videoclip musical completo",
    herramienta: "Suno + generador de imágenes + editor de video (CapCut)",
    tiempo: "3-4 horas (fin de semana)",
    dificultad: "Alta",
    descripcion: "Tu hijo produce un videoclip completo: compone la canción con IA, genera las imágenes para cada escena y edita el video final.",
    pasos: [
      "Escribe la letra de la canción y genera la música con Suno",
      "Divide la canción en escenas visuales (storyboard)",
      "Genera las imágenes para cada escena con IA",
      "Edita el video en CapCut sincronizando imágenes con la música",
      "Añade transiciones, efectos y títulos para un resultado profesional",
    ],
    aprende: "Producción audiovisual, dirección creativa, edición de video, planificación de proyectos",
  },
  {
    numero: 10,
    titulo: "Diseña y programa un juego con IA",
    herramienta: "ChatGPT + Scratch o plataforma de juegos con IA",
    tiempo: "4-6 horas (fin de semana)",
    dificultad: "Alta",
    descripcion: "Tu hijo diseña un juego completo: mecánicas, personajes, niveles y música. Usa IA para generar los assets y para resolver problemas de programación.",
    pasos: [
      "Define el concepto del juego: género, mecánica principal, historia",
      "Genera los personajes y escenarios con IA de imágenes",
      "Programa la lógica del juego en Scratch o con asistencia de ChatGPT",
      "Crea la música y efectos de sonido con IA",
      "Testea el juego, corrige errores y pide a la familia que lo pruebe",
    ],
    aprende: "Game design, programación básica, resolución de problemas, testing y feedback",
  },
  {
    numero: 11,
    titulo: "Crea un canal de contenido con IA",
    herramienta: "ChatGPT + Canva + Suno + editor de video",
    tiempo: "4-5 horas (puede dividirse en varios días)",
    dificultad: "Alta",
    descripcion: "Tu hijo planifica y produce el contenido de un mini canal digital: define su nicho, crea 3 piezas de contenido (video, imagen, texto) y arma su identidad visual.",
    pasos: [
      "Define el tema del canal: ¿sobre qué quiere crear contenido?",
      "Crea la identidad visual: nombre, logo (con IA), paleta de colores",
      "Produce 3 piezas de contenido diferentes usando las herramientas de IA aprendidas",
      "Escribe los textos de descripción y hashtags con ayuda de ChatGPT",
      "Presenta el canal a la familia como si fuera un pitch de emprendimiento",
    ],
    aprende: "Marketing digital básico, branding, producción de contenido, emprendimiento y comunicación",
  },
  {
    numero: 12,
    titulo: "Desarrolla una app que resuelva un problema real",
    herramienta: "ChatGPT + herramienta no-code (Glide o similar)",
    tiempo: "6-8 horas (proyecto de fin de semana largo)",
    dificultad: "Avanzada",
    descripcion: "Tu hijo identifica un problema real en su entorno (escolar, familiar, del barrio) y diseña una app funcional para resolverlo usando IA y herramientas no-code.",
    pasos: [
      "Identifica un problema real: organización de tareas, reciclaje en casa, gestión de mesada",
      "Diseña la solución en papel: qué pantallas tendrá, qué datos necesita, cómo funciona",
      "Usa ChatGPT para definir la estructura de datos y la lógica de la app",
      "Construye la app en una plataforma no-code con asistencia de IA",
      "Testea con usuarios reales (familia, amigos) y mejora según el feedback",
    ],
    aprende: "Design thinking, desarrollo de producto, resolución de problemas reales, emprendimiento tecnológico",
  },
]

export default function ActividadesIANinosCasaPage() {
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
              Guía práctica · IA en familia
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.05] tracking-tight mb-8"
              style={{ fontFamily: "'Charter', 'Georgia', serif" }}>
              12 Actividades de IA para Hacer con Tu Hijo{" "}
              <em className="italic text-[#C96342]">en Casa</em>
            </h1>
            <p className="text-lg text-[#F5F1E8]/80 max-w-[60ch] leading-relaxed mb-10">
              No necesitas saber programar. Solo un computador, internet y ganas de crear juntos.
              12 proyectos organizados por edad con herramientas 100% gratuitas.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-[#F5F1E8]/60">
              <span>Lectura: 10 min</span>
              <span>·</span>
              <span>Actualizado: junio 2026</span>
              <span>·</span>
              <span>Por el equipo InnovaKids</span>
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-6 py-16 space-y-20">

          {/* Sección 1: Por qué en familia */}
          <section>
            <h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-6"
              style={{ fontFamily: "'Charter', 'Georgia', serif" }}>
              Por qué hacer actividades de IA en familia
            </h2>
            <div className="prose prose-lg max-w-none text-[#5A5751] leading-relaxed space-y-4">
              <p>
                La mayoría de los niños descubren la inteligencia artificial solos. Abren ChatGPT por curiosidad, ven un video en TikTok
                sobre imágenes generadas con IA, o un compañero del colegio les muestra alguna herramienta. El problema no es que la descubran,
                sino que <strong className="text-[#2F2F2C]">la descubran sin acompañamiento</strong>.
              </p>
              <p>
                Cuando un padre o madre se sienta junto a su hijo a crear algo con IA, pasan tres cosas importantes.
                Primero, el niño aprende a usar la herramienta <strong className="text-[#2F2F2C]">de forma segura y responsable</strong> desde el inicio.
                Segundo, el padre entiende de primera mano qué puede hacer la IA y pierde el miedo a lo desconocido.
                Y tercero, crean un espacio de conexión familiar alrededor de la tecnología en lugar de que la tecnología los separe.
              </p>
              <p>
                En{" "}
                <Link href="/" className="text-[#C96342] underline underline-offset-2 hover:text-[#b8573a]">
                  InnovaKids
                </Link>{" "}
                siempre decimos que las mejores experiencias de aprendizaje ocurren cuando el niño tiene a alguien con quien compartir su emoción de crear.
                Estas actividades están diseñadas para eso: para que creen juntos, se sorprendan juntos y aprendan juntos.
              </p>
              <p>
                Y si te preocupa la seguridad, estas actividades usan herramientas con filtros de contenido apropiados para menores.
                Te recomendamos revisar nuestra guía sobre{" "}
                <Link href="/blog/como-proteger-hijos-ia-uso-seguro-responsable" className="text-[#C96342] underline underline-offset-2 hover:text-[#b8573a]">
                  cómo proteger a tus hijos en el uso de IA
                </Link>{" "}
                para tener un marco de seguridad antes de empezar.
              </p>
            </div>
          </section>

          {/* Sección 2: Lo que necesitas */}
          <section className="bg-white rounded-2xl p-8 md:p-10 border border-[#2F2F2C]/8">
            <h2 className="text-2xl md:text-3xl font-normal tracking-tight mb-6"
              style={{ fontFamily: "'Charter', 'Georgia', serif" }}>
              Lo que necesitas antes de empezar (spoiler: solo un computador)
            </h2>
            <div className="space-y-4 text-[#5A5751] leading-relaxed mb-6">
              <p>
                No necesitas comprar ningún software, ni tener conocimientos de programación, ni ser experto en tecnología.
                Para hacer todas las actividades de esta guía solo necesitas:
              </p>
            </div>
            <ul className="grid sm:grid-cols-2 gap-4 mb-6">
              {[
                { item: "Un computador o laptop", detalle: "Windows, Mac o Chromebook. Con tablet también funciona, aunque es más cómodo con teclado." },
                { item: "Conexión a internet estable", detalle: "Todas las herramientas funcionan en el navegador. No necesitas descargar nada." },
                { item: "Una cuenta de correo electrónico", detalle: "Para registrarse en las herramientas gratuitas. Usa la cuenta del padre, no la del niño." },
                { item: "60-90 minutos de tiempo libre", detalle: "Las actividades más simples toman 30 minutos. Las más elaboradas, un fin de semana." },
              ].map((req) => (
                <li key={req.item} className="flex gap-3 text-sm">
                  <span className="text-[#C96342] shrink-0 mt-0.5 font-bold">✓</span>
                  <div>
                    <span className="font-semibold text-[#2F2F2C]">{req.item}</span>
                    <p className="text-[#5A5751] mt-0.5">{req.detalle}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="text-[#5A5751] leading-relaxed">
              <p>
                <strong className="text-[#2F2F2C]">Consejo importante:</strong> registra las cuentas de las herramientas con tu correo de adulto, no con el de tu hijo.
                Así tú controlas el acceso y puedes supervisar el uso. Las herramientas que usamos son: ChatGPT (chat.openai.com),
                Bing Image Creator (bing.com/images/create), Suno (suno.com), Gamma (gamma.app) y Canva (canva.com).
              </p>
            </div>
          </section>

          {/* Sección 3: Exploradores 8-10 */}
          <section>
            <h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-3"
              style={{ fontFamily: "'Charter', 'Georgia', serif" }}>
              4 actividades para niños de 8-10 años (explorador)
            </h2>
            <p className="text-[#5A5751] leading-relaxed mb-8">
              Actividades simples, divertidas y con resultados inmediatos. Ideales para el primer contacto con la IA.
              El padre participa activamente en todas.
            </p>
            <div className="space-y-6">
              {actividadesExploradores.map((act) => (
                <div key={act.numero} className="bg-white rounded-2xl p-7 border border-[#2F2F2C]/8">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="bg-[#C96342] text-white text-xs font-bold px-2.5 py-1 rounded-lg">
                      #{act.numero}
                    </span>
                    <h3 className="font-semibold text-[#2F2F2C] text-lg">{act.titulo}</h3>
                  </div>
                  <div className="flex flex-wrap gap-4 text-xs text-[#5A5751] mb-4">
                    <span>Herramienta: {act.herramienta}</span>
                    <span>·</span>
                    <span>Tiempo: {act.tiempo}</span>
                    <span>·</span>
                    <span>Dificultad: {act.dificultad}</span>
                  </div>
                  <p className="text-[#5A5751] text-sm leading-relaxed mb-4">{act.descripcion}</p>
                  <div className="mb-4">
                    <p className="text-xs uppercase tracking-wide text-[#2F2F2C] font-semibold mb-2">Paso a paso:</p>
                    <ol className="space-y-2">
                      {act.pasos.map((paso, i) => (
                        <li key={i} className="flex gap-2 text-sm text-[#5A5751]">
                          <span className="text-[#C96342] shrink-0 font-semibold">{i + 1}.</span>
                          {paso}
                        </li>
                      ))}
                    </ol>
                  </div>
                  <p className="text-xs text-[#C96342] italic">Aprende: {act.aprende}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Sección 4: Creadores 11-13 */}
          <section>
            <h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-3"
              style={{ fontFamily: "'Charter', 'Georgia', serif" }}>
              4 actividades para niños de 11-13 años (creador)
            </h2>
            <p className="text-[#5A5751] leading-relaxed mb-8">
              Proyectos más elaborados que requieren planificación y varias herramientas. El niño lidera, el padre acompaña.
              Si tu hijo tiene entre{" "}
              <Link href="/blog/curso-ia-ninos-10-11-12-anos" className="text-[#C96342] underline underline-offset-2 hover:text-[#b8573a]">
                10 y 12 años
              </Link>
              , estas actividades son el punto ideal entre desafío y diversión.
            </p>
            <div className="space-y-6">
              {actividadesCreadores.map((act) => (
                <div key={act.numero} className="bg-white rounded-2xl p-7 border border-[#2F2F2C]/8">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="bg-[#C96342] text-white text-xs font-bold px-2.5 py-1 rounded-lg">
                      #{act.numero}
                    </span>
                    <h3 className="font-semibold text-[#2F2F2C] text-lg">{act.titulo}</h3>
                  </div>
                  <div className="flex flex-wrap gap-4 text-xs text-[#5A5751] mb-4">
                    <span>Herramienta: {act.herramienta}</span>
                    <span>·</span>
                    <span>Tiempo: {act.tiempo}</span>
                    <span>·</span>
                    <span>Dificultad: {act.dificultad}</span>
                  </div>
                  <p className="text-[#5A5751] text-sm leading-relaxed mb-4">{act.descripcion}</p>
                  <div className="mb-4">
                    <p className="text-xs uppercase tracking-wide text-[#2F2F2C] font-semibold mb-2">Paso a paso:</p>
                    <ol className="space-y-2">
                      {act.pasos.map((paso, i) => (
                        <li key={i} className="flex gap-2 text-sm text-[#5A5751]">
                          <span className="text-[#C96342] shrink-0 font-semibold">{i + 1}.</span>
                          {paso}
                        </li>
                      ))}
                    </ol>
                  </div>
                  <p className="text-xs text-[#C96342] italic">Aprende: {act.aprende}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Sección 5: Profesionales 14-17 */}
          <section>
            <h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-3"
              style={{ fontFamily: "'Charter', 'Georgia', serif" }}>
              4 actividades para adolescentes de 14-17 años (profesional)
            </h2>
            <p className="text-[#5A5751] leading-relaxed mb-8">
              Proyectos de nivel profesional que pueden formar parte de un portafolio real.
              El adolescente trabaja de forma autónoma; el padre puede observar o participar si lo invitan.
            </p>
            <div className="space-y-6">
              {actividadesProfesionales.map((act) => (
                <div key={act.numero} className="bg-white rounded-2xl p-7 border border-[#2F2F2C]/8">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="bg-[#C96342] text-white text-xs font-bold px-2.5 py-1 rounded-lg">
                      #{act.numero}
                    </span>
                    <h3 className="font-semibold text-[#2F2F2C] text-lg">{act.titulo}</h3>
                  </div>
                  <div className="flex flex-wrap gap-4 text-xs text-[#5A5751] mb-4">
                    <span>Herramienta: {act.herramienta}</span>
                    <span>·</span>
                    <span>Tiempo: {act.tiempo}</span>
                    <span>·</span>
                    <span>Dificultad: {act.dificultad}</span>
                  </div>
                  <p className="text-[#5A5751] text-sm leading-relaxed mb-4">{act.descripcion}</p>
                  <div className="mb-4">
                    <p className="text-xs uppercase tracking-wide text-[#2F2F2C] font-semibold mb-2">Paso a paso:</p>
                    <ol className="space-y-2">
                      {act.pasos.map((paso, i) => (
                        <li key={i} className="flex gap-2 text-sm text-[#5A5751]">
                          <span className="text-[#C96342] shrink-0 font-semibold">{i + 1}.</span>
                          {paso}
                        </li>
                      ))}
                    </ol>
                  </div>
                  <p className="text-xs text-[#C96342] italic">Aprende: {act.aprende}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Sección 6: Del proyecto casero al real */}
          <section>
            <h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-6"
              style={{ fontFamily: "'Charter', 'Georgia', serif" }}>
              De la actividad casera al proyecto real
            </h2>
            <div className="prose prose-lg max-w-none text-[#5A5751] leading-relaxed space-y-4">
              <p>
                Si tu hijo disfrutó estas actividades y quiere ir más lejos, es una señal clara: está listo para proyectos más serios.
                Las actividades caseras son excelentes para despertar la curiosidad, pero tienen un límite natural.
                Llega un momento en que el niño necesita <strong className="text-[#2F2F2C]">estructura, guía experta y compañeros de su nivel</strong>.
              </p>
              <p>
                Eso es exactamente lo que ofrecemos en{" "}
                <Link href="/programa" className="text-[#C96342] underline underline-offset-2 hover:text-[#b8573a]">
                  el programa de InnovaKids
                </Link>
                : un camino estructurado donde cada actividad construye sobre la anterior, con un profesor experto que guía el proceso
                y un grupo pequeño de compañeros que comparten la misma pasión.
              </p>
              <p>
                Los niños que empiezan con actividades caseras y después pasan a un programa estructurado tienen una ventaja enorme:
                ya saben que les gusta crear con IA, ya conocen las herramientas básicas y llegan motivados.
                Es la diferencia entre aprender a nadar solo en la piscina de casa y después unirse a un equipo de natación.
              </p>
              <p>
                Si alguna de estas actividades encendió una chispa en tu hijo, no dejes que se apague.
                La curiosidad de un niño es el recurso más valioso que existe, y tiene fecha de vencimiento si no se alimenta.
                En InnovaKids convertimos esa chispa en un fuego que dura años.
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
                  q: "¿Necesita mi hijo saber programar para hacer estas actividades?",
                  a: "No. Todas las actividades usan herramientas de IA que funcionan con lenguaje natural. Tu hijo describe lo que quiere y la IA lo genera. La programación no es un requisito en ninguna de las 12 actividades.",
                },
                {
                  q: "¿Cuál es la mejor actividad para empezar?",
                  a: "Para niños de 8-10 años, recomendamos empezar con la actividad #1 (cuento ilustrado) o la #3 (componer una canción). Son las más rápidas y dan resultados espectaculares que motivan a seguir. Para adolescentes, la #10 (diseñar un juego) suele ser la más atractiva.",
                },
                {
                  q: "¿Las herramientas mencionadas son realmente gratuitas?",
                  a: "Sí, todas las herramientas tienen versión gratuita suficiente para completar las actividades. ChatGPT tiene uso limitado gratuito, Bing Image Creator es gratuito, Suno ofrece créditos diarios gratuitos, Gamma tiene plan gratuito y Canva también. No necesitas pagar nada.",
                },
                {
                  q: "¿Puedo hacer estas actividades si yo no sé nada de IA?",
                  a: "Absolutamente. Estas actividades están diseñadas para que padres sin conocimiento técnico puedan participar. Las instrucciones son paso a paso y las herramientas son intuitivas. De hecho, aprender junto a tu hijo es parte de la experiencia.",
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
              InnovaKids · De la actividad casera al proyecto real
            </p>
            <h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-5"
              style={{ fontFamily: "'Charter', 'Georgia', serif" }}>
              ¿Tu hijo quiere ir más lejos?{" "}
              <em className="italic text-[#C96342]">Primera clase gratis.</em>
            </h2>
            <p className="text-[#F5F1E8]/70 max-w-[50ch] mx-auto leading-relaxed mb-8">
              Grupos de máximo 5 alumnos. Clases en vivo, 100% online.
              Proyectos reales terminados. Para niños y adolescentes de 8 a 17 años.
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
                { href: "/blog/crear-videojuegos-con-ia-ninos-guia-completa", title: "Cómo tu hijo puede crear videojuegos con IA" },
                { href: "/blog/chatgpt-tareas-escolares-ninos-guia-padres", title: "ChatGPT para tareas escolares: guía para padres" },
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
