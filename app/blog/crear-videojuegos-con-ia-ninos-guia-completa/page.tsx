import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Cómo Tu Hijo Puede Crear Videojuegos con IA (Sin Programar) | InnovaKids",
  description:
    "Guía completa para padres: cómo los niños pueden diseñar y crear videojuegos usando inteligencia artificial. Herramientas gratuitas, paso a paso y ejemplos reales.",
  keywords: [
    "crear videojuegos con ia niños",
    "hacer videojuegos con inteligencia artificial",
    "curso videojuegos ia niños",
    "niños creando videojuegos con ia",
    "como crear un videojuego con ia",
    "videojuegos inteligencia artificial niños",
    "crear juegos con ia gratis",
    "niños programando videojuegos",
    "herramientas crear videojuegos niños",
    "game design ia niños",
  ],
  alternates: {
    canonical: "https://www.innovakidslatam.com/blog/crear-videojuegos-con-ia-ninos-guia-completa",
  },
  openGraph: {
    title: "Cómo Tu Hijo Puede Crear Videojuegos con IA | InnovaKids",
    description:
      "Los niños ya no necesitan código complejo para crear videojuegos. Con IA pueden diseñar personajes, niveles, música y lógica de juego. Guía paso a paso.",
    url: "https://www.innovakidslatam.com/blog/crear-videojuegos-con-ia-ninos-guia-completa",
    siteName: "InnovaKids",
    type: "article",
    locale: "es_419",
    images: [{
      url: "https://www.innovakidslatam.com/hero-child-learning-ai.jpg",
      width: 1200,
      height: 630,
      alt: "Niños creando videojuegos con inteligencia artificial - InnovaKids",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cómo Tu Hijo Puede Crear Videojuegos con IA | InnovaKids",
    description:
      "Guía paso a paso para que niños creen videojuegos con IA. Herramientas gratuitas, sin programar.",
    images: ["https://www.innovakidslatam.com/hero-child-learning-ai.jpg"],
  },
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Puede un niño crear un videojuego con inteligencia artificial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Con herramientas de IA actuales, niños desde los 8 años pueden crear videojuegos funcionales sin escribir código complejo. La IA genera personajes, escenarios, música y hasta la lógica del juego a partir de descripciones en lenguaje natural. El niño actúa como director creativo del proyecto.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué herramientas gratuitas existen para que un niño cree videojuegos con IA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las principales herramientas gratuitas son: ChatGPT para diseño y lógica del juego, Bing Image Creator para generar personajes y escenarios, Suno para crear música y efectos de sonido, y Scratch o plataformas similares para ensamblar el juego. Todas tienen versiones gratuitas suficientes para crear un juego completo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tiempo necesita un niño para crear un videojuego con IA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un juego básico se puede crear en un fin de semana (4-6 horas). Un juego más elaborado con múltiples niveles, música propia y mecánicas complejas puede tomar 2-3 semanas trabajando unas horas cada día. En el programa de InnovaKids, los niños crean su primer juego funcional en las primeras 2 semanas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Necesita mi hijo saber programar para crear videojuegos con IA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No necesita conocimientos previos de programación. Las herramientas de IA permiten crear juegos usando lenguaje natural: el niño describe lo que quiere y la IA genera el código. Con herramientas visuales como Scratch combinadas con IA, el proceso es intuitivo y accesible desde los 8 años.",
      },
    },
  ],
}

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cómo Tu Hijo Puede Crear Videojuegos con IA (Sin Programar)",
  description:
    "Guía completa para padres sobre cómo los niños pueden diseñar y crear videojuegos funcionales usando inteligencia artificial y herramientas gratuitas.",
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
  mainEntityOfPage: "https://www.innovakidslatam.com/blog/crear-videojuegos-con-ia-ninos-guia-completa",
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
      name: "Crear Videojuegos con IA",
      item: "https://www.innovakidslatam.com/blog/crear-videojuegos-con-ia-ninos-guia-completa",
    },
  ],
}

const herramientas = [
  {
    nombre: "ChatGPT",
    url: "chat.openai.com",
    gratis: true,
    uso: "Diseño del juego, mecánicas, diálogos, lógica y resolución de problemas",
    descripcion: "El cerebro del proyecto. Tu hijo le describe su idea de juego y ChatGPT le ayuda a estructurar las mecánicas, escribir diálogos para los personajes, resolver problemas de lógica y generar código si es necesario.",
  },
  {
    nombre: "Bing Image Creator",
    url: "bing.com/images/create",
    gratis: true,
    uso: "Personajes, escenarios, objetos, fondos e interfaz visual",
    descripcion: "El artista del equipo. Genera imágenes de alta calidad a partir de descripciones. Tu hijo describe cómo quiere que se vea su personaje y la IA lo dibuja. Perfecto para crear todo el arte del juego sin saber dibujar.",
  },
  {
    nombre: "Suno",
    url: "suno.com",
    gratis: true,
    uso: "Música de fondo, efectos de sonido y temas musicales",
    descripcion: "El compositor del equipo. Genera música original a partir de texto. Tu hijo puede crear la banda sonora completa de su juego: música de menú, de acción, de victoria y de derrota.",
  },
  {
    nombre: "Scratch",
    url: "scratch.mit.edu",
    gratis: true,
    uso: "Plataforma de ensamblaje del juego con programación visual",
    descripcion: "El taller donde se ensambla todo. Scratch permite crear juegos con bloques visuales de programación. Combinado con los assets generados por IA (imágenes, sonidos), tu hijo puede construir un juego completo y jugable.",
  },
  {
    nombre: "CapCut",
    url: "capcut.com",
    gratis: true,
    uso: "Trailer del juego y video de presentación",
    descripcion: "El estudio de cine. Una vez terminado el juego, tu hijo puede grabar gameplay y crear un trailer profesional para presentar su creación.",
  },
]

const pasosFinDeSemana = [
  {
    dia: "Sábado mañana (2 horas)",
    titulo: "Diseño y planificación",
    tareas: [
      "Definir el concepto: ¿qué tipo de juego será? (plataformas, aventura, quiz, RPG)",
      "Crear el documento de diseño: personajes, mecánica principal, 3 niveles, condiciones de ganar y perder",
      "Dibujar un boceto rápido en papel de las pantallas principales",
      "Escribir la historia del juego en 5-10 oraciones",
    ],
  },
  {
    dia: "Sábado tarde (2 horas)",
    titulo: "Creación de assets con IA",
    tareas: [
      "Generar el personaje principal con Bing Image Creator (probar 5-10 variaciones)",
      "Crear los enemigos y personajes secundarios",
      "Generar los fondos y escenarios para cada nivel",
      "Componer la música del juego con Suno: tema principal + música de acción",
    ],
  },
  {
    dia: "Domingo mañana (2-3 horas)",
    titulo: "Programación y ensamblaje",
    tareas: [
      "Importar los personajes y fondos a Scratch",
      "Programar el movimiento del personaje principal",
      "Crear la lógica de los enemigos y obstáculos",
      "Añadir el sistema de puntos, vidas y condiciones de victoria",
      "Integrar la música y efectos de sonido",
    ],
  },
  {
    dia: "Domingo tarde (1-2 horas)",
    titulo: "Testing y presentación",
    tareas: [
      "Jugar el juego completo y buscar errores",
      "Pedir a la familia que lo pruebe y dar feedback",
      "Corregir los errores encontrados",
      "Grabar un video de gameplay y crear un mini trailer",
      "Compartir el juego con amigos o publicar en la comunidad de Scratch",
    ],
  },
]

const habilidades = [
  {
    titulo: "Pensamiento sistémico",
    texto: "Un videojuego es un sistema: tiene reglas, entidades que interactúan, estados y condiciones. Diseñar uno obliga al niño a pensar en cómo todas las piezas encajan. Esta habilidad se transfiere directamente a matemáticas, ciencias y resolución de problemas complejos.",
  },
  {
    titulo: "Gestión de proyectos",
    texto: "Crear un juego requiere planificar, dividir el trabajo en etapas, priorizar tareas y manejar el tiempo. Tu hijo aprende a gestionar un proyecto real de principio a fin, una habilidad que usará en cualquier carrera futura.",
  },
  {
    titulo: "Creatividad aplicada",
    texto: "No es creatividad abstracta: es creatividad con restricciones reales. El niño debe crear algo divertido dentro de las limitaciones técnicas de la herramienta. Esa tensión entre lo que imagina y lo que puede construir desarrolla una creatividad práctica y poderosa.",
  },
  {
    titulo: "Tolerancia al error",
    texto: "Los videojuegos no funcionan a la primera. Siempre hay bugs, errores y cosas que no salen como se planearon. El proceso de crear, probar, fallar y mejorar desarrolla una resiliencia que es fundamental en la vida adulta.",
  },
  {
    titulo: "Comunicación con IA",
    texto: "Para que la IA genere buenos personajes, buena música y buen código, tu hijo necesita aprender a comunicar sus ideas con claridad y precisión. Esta habilidad de ingeniería de prompts será una de las competencias laborales más demandadas en los próximos años.",
  },
  {
    titulo: "Empatía y diseño centrado en el usuario",
    texto: "Cuando tu hijo ve a alguien jugar su juego y frustrarse porque un nivel es demasiado difícil o aburrirse porque es muy fácil, aprende algo fundamental: crear para otros requiere ponerse en su lugar. Eso es diseño centrado en el usuario, la base de cualquier producto digital exitoso.",
  },
]

export default function CrearVideojuegosConIAPage() {
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
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#B5522F] font-semibold mb-6">
              Guía para padres · Videojuegos + IA
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.05] tracking-tight mb-8"
              style={{ fontFamily: "'Charter', 'Georgia', serif" }}>
              Cómo Tu Hijo Puede Crear Videojuegos{" "}
              <em className="italic text-[#B5522F]">con IA</em>
            </h1>
            <p className="text-lg text-[#F5F1E8]/80 max-w-[60ch] leading-relaxed mb-10">
              Ya no necesita saber programar. Con inteligencia artificial puede
              diseñar personajes, crear niveles, componer música y construir juegos
              completos. Todo en un fin de semana.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-[#F5F1E8]/60">
              <span>Lectura: 9 min</span>
              <span>·</span>
              <span>Actualizado: junio 2026</span>
              <span>·</span>
              <span>Por el equipo InnovaKids</span>
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-6 py-16 space-y-20">

          {/* Sección 1: El videojuego como puerta */}
          <section>
            <h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-6"
              style={{ fontFamily: "'Charter', 'Georgia', serif" }}>
              El videojuego como puerta de entrada a la IA
            </h2>
            <div className="prose prose-lg max-w-none text-[#5A5751] leading-relaxed space-y-4">
              <p>
                Si le preguntas a un niño de 10 años qué quiere crear con inteligencia artificial, la respuesta más frecuente es:
                <strong className="text-[#2F2F2C]"> un videojuego</strong>. Y tiene todo el sentido.
                Los videojuegos son el medio artístico más completo que existe: combinan arte visual, música, narrativa,
                lógica, matemáticas y diseño de experiencia. Crear uno toca todas las disciplinas.
              </p>
              <p>
                Hace 5 años, un niño que quería crear un videojuego necesitaba aprender a programar en un lenguaje como C# o Python,
                dominar un motor gráfico como Unity, saber dibujar o modelar en 3D, y componer música.
                Años de estudio antes de ver un resultado. La mayoría se rendía antes de empezar.
              </p>
              <p>
                Hoy, con inteligencia artificial, el proceso se invirtió: <strong className="text-[#2F2F2C]">primero creas, después aprendes la técnica</strong>.
                Un niño puede tener su primer juego funcional en un fin de semana y después profundizar en programación, arte o diseño
                porque ya tiene la motivación de haber creado algo real.
              </p>
              <p>
                En{" "}
                <Link href="/" className="text-[#B5522F] underline underline-offset-2 hover:text-[#b8573a]">
                  InnovaKids
                </Link>
                , los videojuegos son el proyecto más popular entre nuestros alumnos. Y no es casualidad:
                es el proyecto donde más habilidades se desarrollan simultáneamente, el que más orgullo genera
                y el que tiene el impacto más visible. Cuando un niño ve a su familia jugando algo que él creó, algo cambia para siempre.
              </p>
            </div>
          </section>

          {/* Sección 2: Herramientas */}
          <section>
            <h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-4"
              style={{ fontFamily: "'Charter', 'Georgia', serif" }}>
              Herramientas de IA para crear videojuegos (gratuitas)
            </h2>
            <p className="text-[#5A5751] leading-relaxed mb-8">
              Todas estas herramientas tienen versión gratuita suficiente para crear un juego completo.
              No necesitas gastar un peso. Tu hijo usa cada herramienta para un rol diferente, como un estudio de desarrollo profesional en miniatura.
            </p>
            <div className="space-y-5">
              {herramientas.map((h) => (
                <div key={h.nombre} className="bg-white rounded-2xl p-7 border border-[#2F2F2C]/8">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="font-semibold text-[#2F2F2C] text-lg">{h.nombre}</h3>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">Gratis</span>
                    <span className="text-xs text-[#5A5751]">({h.url})</span>
                  </div>
                  <p className="text-[11px] uppercase tracking-[0.28em] text-[#B5522F] font-semibold mb-2">
                    {h.uso}
                  </p>
                  <p className="text-[#5A5751] text-sm leading-relaxed">{h.descripcion}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 prose prose-lg max-w-none text-[#5A5751] leading-relaxed">
              <p>
                <strong className="text-[#2F2F2C]">Nota para padres:</strong> si tu hijo ya ha experimentado con{" "}
                <Link href="/blog/scratch-vs-ia-ninos" className="text-[#B5522F] underline underline-offset-2 hover:text-[#b8573a]">
                  Scratch
                </Link>
                , la combinación con IA es natural. Scratch sigue siendo excelente para la lógica de programación visual;
                la IA simplemente le añade superpoderes creativos (arte, música, diseño) que antes eran inalcanzables.
              </p>
            </div>
          </section>

          {/* Sección 3: Paso a paso fin de semana */}
          <section>
            <h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-4"
              style={{ fontFamily: "'Charter', 'Georgia', serif" }}>
              Paso a paso: tu hijo crea su primer juego en un fin de semana
            </h2>
            <p className="text-[#5A5751] leading-relaxed mb-8">
              Este plan está probado con alumnos reales de{" "}
              <Link href="/blog/curso-ia-ninos-10-11-12-anos" className="text-[#B5522F] underline underline-offset-2 hover:text-[#b8573a]">
                10 a 12 años
              </Link>
              . En un fin de semana (7-9 horas totales), tu hijo puede crear un juego funcional y jugable.
              No tiene que ser perfecto; tiene que ser suyo.
            </p>
            <div className="space-y-6">
              {pasosFinDeSemana.map((paso) => (
                <div key={paso.dia} className="bg-white rounded-2xl p-7 border border-[#2F2F2C]/8">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="bg-[#2F2F2C] text-[#F5F1E8] text-xs font-bold px-3 py-1 rounded-lg">
                      {paso.dia}
                    </span>
                    <h3 className="font-semibold text-[#2F2F2C] text-lg">{paso.titulo}</h3>
                  </div>
                  <ul className="space-y-2">
                    {paso.tareas.map((tarea, i) => (
                      <li key={i} className="flex gap-2 text-sm text-[#5A5751]">
                        <span className="text-[#B5522F] shrink-0 mt-0.5">→</span>
                        {tarea}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-[#FDF8F3] rounded-2xl p-7 border border-[#C96342]/20">
              <p className="text-sm text-[#2F2F2C] leading-relaxed">
                <strong>Consejo importante:</strong> no presiones a tu hijo para que termine todo en un fin de semana.
                Si necesita más tiempo, perfecto. Lo importante es que disfrute el proceso y se sienta orgulloso del resultado.
                Un juego "imperfecto" que tu hijo creó vale más que un juego "perfecto" que abandonó a la mitad por frustración.
              </p>
            </div>
          </section>

          {/* Sección 4: Lo que aprende */}
          <section>
            <h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-8"
              style={{ fontFamily: "'Charter', 'Georgia', serif" }}>
              Lo que aprende un niño creando videojuegos con IA
            </h2>
            <div className="prose prose-lg max-w-none text-[#5A5751] leading-relaxed space-y-4 mb-8">
              <p>
                "Pero es solo un juego" es una frase que escuchamos a veces de padres que no han visto el proceso.
                Cuando ven todo lo que su hijo tuvo que hacer para crear ese "solo un juego", cambian de opinión inmediatamente.
                Crear un videojuego con IA desarrolla habilidades que la educación tradicional rara vez toca:
              </p>
            </div>
            <ul className="grid sm:grid-cols-2 gap-5">
              {habilidades.map((item) => (
                <li key={item.titulo} className="bg-white rounded-2xl p-6 border border-[#2F2F2C]/8">
                  <h3 className="font-semibold text-[#2F2F2C] mb-2">{item.titulo}</h3>
                  <p className="text-[#5A5751] text-sm leading-relaxed">{item.texto}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* Sección 5: Ejemplos reales */}
          <section className="bg-white rounded-2xl p-8 md:p-10 border border-[#2F2F2C]/8">
            <h2 className="text-2xl md:text-3xl font-normal tracking-tight mb-6"
              style={{ fontFamily: "'Charter', 'Georgia', serif" }}>
              Ejemplos reales de videojuegos creados por niños
            </h2>
            <div className="space-y-4 text-[#5A5751] leading-relaxed mb-8">
              <p>
                Estos son ejemplos reales de proyectos creados por alumnos de InnovaKids durante sus primeras semanas de clase.
                Ninguno de estos niños sabía programar cuando empezó. Todos usaron IA como su herramienta principal de creación.
              </p>
            </div>
            <div className="space-y-6">
              {[
                {
                  nombre: "Camilo, 11 años (Colombia)",
                  juego: "Space Defender",
                  descripcion: "Un juego de naves espaciales donde el jugador defiende la Tierra de asteroides. Camilo diseñó 3 tipos de naves enemigas con IA, compuso la banda sonora con Suno y programó 5 niveles con dificultad creciente. Tiempo total: 2 semanas.",
                  aprendio: "Programación de lógica de colisiones, diseño de niveles y balanceo de dificultad.",
                },
                {
                  nombre: "Valentina, 12 años (Chile)",
                  juego: "El Bosque Encantado",
                  descripcion: "Un juego de aventura y puzzles donde la protagonista debe resolver acertijos para avanzar por un bosque mágico. Valentina generó todo el arte con IA manteniendo un estilo visual consistente de acuarela. Incluyó diálogos con personajes no jugables escritos con ayuda de ChatGPT.",
                  aprendio: "Narrativa interactiva, consistencia visual y diseño de puzzles.",
                },
                {
                  nombre: "Santiago, 10 años (México)",
                  juego: "Futbol Loco",
                  descripcion: "Un juego de fútbol con reglas inventadas: la pelota cambia de tamaño, aparecen obstáculos en la cancha y los jugadores tienen poderes especiales. Santiago usó IA para crear los personajes pixelados y los efectos de sonido. Su familia lo juega todas las noches.",
                  aprendio: "Game design creativo, mecánicas de juego originales y feedback de usuarios reales.",
                },
              ].map((ejemplo) => (
                <div key={ejemplo.nombre} className="border-l-4 border-[#C96342] pl-6">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-[#B5522F] font-semibold mb-1">
                    {ejemplo.nombre}
                  </p>
                  <h3 className="font-semibold text-[#2F2F2C] text-lg mb-2">{ejemplo.juego}</h3>
                  <p className="text-sm text-[#5A5751] leading-relaxed mb-2">{ejemplo.descripcion}</p>
                  <p className="text-xs text-[#B5522F] italic">Aprendió: {ejemplo.aprendio}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-[#5A5751] leading-relaxed">
              <p>
                Lo que tienen en común estos tres proyectos es que ninguno fue "perfecto" desde el punto de vista técnico.
                Pero todos fueron <strong className="text-[#2F2F2C]">100% creados por el niño</strong>, todos fueron jugables,
                y todos generaron un orgullo enorme en sus creadores. Eso vale más que cualquier nota del colegio.
              </p>
            </div>
          </section>

          {/* Sección 6: Del juego al portafolio */}
          <section>
            <h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-6"
              style={{ fontFamily: "'Charter', 'Georgia', serif" }}>
              Del juego casero al portafolio profesional
            </h2>
            <div className="prose prose-lg max-w-none text-[#5A5751] leading-relaxed space-y-4">
              <p>
                Crear un videojuego con IA es un logro en sí mismo. Pero lo más interesante es lo que viene después.
                Un niño que ya creó un juego puede:
              </p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  "Publicar su juego en la comunidad de Scratch y recibir feedback de jugadores reales de todo el mundo",
                  "Crear un portafolio digital con todos sus proyectos que puede presentar en postulaciones escolares o universitarias",
                  "Participar en game jams (competencias de creación de juegos) donde compite con otros jóvenes creadores",
                  "Empezar a aprender programación real (Python, JavaScript) con la motivación de mejorar sus juegos",
                  "Explorar carreras en game design, desarrollo de software, arte digital o producción audiovisual",
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-base">
                    <span className="text-[#B5522F] shrink-0 mt-0.5">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                En{" "}
                <Link href="/programa" className="text-[#B5522F] underline underline-offset-2 hover:text-[#b8573a]">
                  el programa de InnovaKids
                </Link>
                , cada alumno termina con un portafolio de proyectos reales que incluye videojuegos, aplicaciones, contenido digital y más.
                No es un certificado de participación: es evidencia tangible de lo que saben hacer.
              </p>
              <p>
                Un adolescente de 15 años que tiene un portafolio con 5 videojuegos creados,
                una app funcional y un canal de contenido digital tiene algo que la mayoría de los universitarios no tienen:
                <strong className="text-[#2F2F2C]"> prueba real de sus habilidades</strong>. En un mundo donde los títulos importan cada vez menos
                y las habilidades importan cada vez más, ese portafolio vale oro.
              </p>
              <p>
                Si tu hijo ya tiene curiosidad por los videojuegos y la tecnología, no dejes que esa energía se desperdicie
                solo consumiendo juegos de otros. Conviértelo en creador.
                Es la diferencia entre ver películas y dirigir una. Entre escuchar música y componer.
                Entre jugar y crear el juego.
              </p>
              <p>
                Si quieres explorar más actividades que puedes hacer con tu hijo antes de dar el paso a un programa estructurado,
                revisa nuestra guía de{" "}
                <Link href="/blog/actividades-inteligencia-artificial-ninos-casa" className="text-[#B5522F] underline underline-offset-2 hover:text-[#b8573a]">
                  12 actividades de IA para hacer en casa
                </Link>
                . Varias de ellas están relacionadas con la creación de juegos y pueden ser el punto de partida perfecto.
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
                  q: "¿A partir de qué edad puede un niño crear videojuegos con IA?",
                  a: "Desde los 8 años los niños pueden crear juegos simples con IA y herramientas visuales como Scratch. A los 10-12 años pueden crear juegos más complejos con múltiples niveles y mecánicas elaboradas. Los adolescentes de 14+ pueden crear juegos con un nivel de calidad sorprendente.",
                },
                {
                  q: "¿Mi hijo dejará de aprender a programar si usa IA?",
                  a: "Al contrario. La IA hace que la programación sea más accesible y motivadora. Los niños que empiezan creando juegos con IA suelen querer aprender a programar después para tener más control sobre sus creaciones. La IA baja la barrera de entrada, no reemplaza el aprendizaje.",
                },
                {
                  q: "¿Los juegos creados con IA son de buena calidad?",
                  a: "La calidad depende del tiempo y dedicación del niño, no de las herramientas. Un juego bien diseñado con IA puede ser más divertido que uno mal diseñado con herramientas profesionales. Lo que importa es la idea, el diseño de la experiencia y la iteración.",
                },
                {
                  q: "¿Puede mi hijo publicar y compartir los juegos que crea?",
                  a: "Sí. Scratch tiene una comunidad global donde puede publicar sus juegos y recibir feedback. Los juegos creados con herramientas gratuitas pueden compartirse libremente. Es una forma excelente de que tu hijo reciba retroalimentación real de usuarios reales.",
                },
              ].map((item) => (
                <details key={item.q} className="group bg-white rounded-2xl border border-[#2F2F2C]/8">
                  <summary className="flex justify-between items-center px-7 py-5 cursor-pointer font-semibold text-[#2F2F2C] list-none">
                    {item.q}
                    <span className="text-[#B5522F] group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="px-7 pb-6 text-[#5A5751] leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-[#2F2F2C] rounded-3xl p-10 md:p-14 text-center text-[#F5F1E8]">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#B5522F] font-semibold mb-5">
              InnovaKids · De jugador a creador de videojuegos
            </p>
            <h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-5"
              style={{ fontFamily: "'Charter', 'Georgia', serif" }}>
              Tu hijo puede crear su primer videojuego{" "}
              <em className="italic text-[#B5522F]">esta semana.</em>
            </h2>
            <p className="text-[#F5F1E8]/70 max-w-[50ch] mx-auto leading-relaxed mb-8">
              Primera clase gratis. Sin compromiso. Clases 1 a 1, individuales.
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
                { href: "/blog/actividades-inteligencia-artificial-ninos-casa", title: "12 actividades de IA para hacer con tu hijo en casa" },
                { href: "/blog/curso-ia-ninos-10-11-12-anos", title: "Curso de IA para niños de 10, 11 y 12 años" },
                { href: "/blog/chatgpt-tareas-escolares-ninos-guia-padres", title: "ChatGPT para tareas escolares: guía para padres" },
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
