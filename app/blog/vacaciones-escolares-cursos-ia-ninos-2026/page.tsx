import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  // 59 chars · keyword-first · 2026 trigger · brand
  title: "Vacaciones Escolares 2026 · Cursos IA y Tecnología Niños | InnovaKids",
  // 154 chars · proof + differentiator + CTA
  description:
    "Vacaciones escolares 2026: mejores cursos de IA y tecnología para niños 8-17 años. Actividades productivas y creativas. 527 familias en 9 países. Lee ya.",
  keywords: [
    "cursos vacaciones niños",
    "cursos verano niños 2026",
    "actividades vacaciones niños tecnologia",
    "cursos invierno niños",
    "campamento tecnologia niños",
    "vacaciones productivas niños",
    "cursos ia vacaciones",
  ],
  alternates: {
    canonical: "https://www.innovakidslatam.com/blog/vacaciones-escolares-cursos-ia-ninos-2026",
  },
  openGraph: {
    title: "Vacaciones Escolares 2026 · Mejores Cursos IA y Tecnología Niños | InnovaKids",
    description:
      "Cursos de vacaciones de IA y tecnología para niños 8-17 años. Actividades productivas, creativas y divertidas para el receso escolar.",
    url: "https://www.innovakidslatam.com/blog/vacaciones-escolares-cursos-ia-ninos-2026",
    siteName: "InnovaKids",
    type: "article",
    locale: "es_419",
    images: [{
      url: "https://www.innovakidslatam.com/hero-child-learning-ai.jpg",
      width: 1200,
      height: 630,
      alt: "Vacaciones escolares 2026 - Cursos de IA y tecnología para niños 8-17 años",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vacaciones Escolares 2026 · Cursos IA Niños | InnovaKids",
    description:
      "Mejores cursos de IA y tecnología para niños 8-17 años en vacaciones. Actividades productivas y creativas.",
    images: ["https://www.innovakidslatam.com/hero-child-learning-ai.jpg"],
  },
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Cuales son los mejores cursos para ninos en vacaciones 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los cursos de Inteligencia Artificial y tecnologia creativa son la mejor inversion en vacaciones 2026. Los ninos aprenden habilidades del futuro mientras se divierten creando proyectos reales como videojuegos, musica, arte digital y aplicaciones. InnovaKids ofrece programas intensivos de vacaciones adaptados a ninos de 8 a 17 anos.",
      },
    },
    {
      "@type": "Question",
      name: "A que edad puede mi hijo tomar un curso de tecnologia en vacaciones?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los cursos de IA de InnovaKids estan disponibles para ninos desde los 8 anos hasta los 17 anos. Cada grupo de edad tiene un programa adaptado con proyectos y herramientas apropiadas. Los ninos de 8-10 anos trabajan con creacion artistica y narrativa con IA, los de 11-13 con Vibe Coding, y los de 14-17 con proyectos profesionales.",
      },
    },
    {
      "@type": "Question",
      name: "Cuanto duran los cursos de vacaciones de InnovaKids?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "InnovaKids ofrece formatos flexibles para vacaciones: bootcamps intensivos de una semana (5 sesiones), programas de dos semanas y tambien la opcion de continuar con clases semanales regulares. Los horarios se adaptan a la disponibilidad de cada familia.",
      },
    },
    {
      "@type": "Question",
      name: "Mi hijo necesita conocimientos previos para el curso de vacaciones?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Los cursos de vacaciones de InnovaKids estan disenados para principiantes. No se necesita experiencia previa en programacion ni en Inteligencia Artificial. Los mentores guian a cada estudiante desde cero, adaptando el ritmo a su nivel.",
      },
    },
  ],
}

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Vacaciones Escolares 2026: Los Mejores Cursos de IA y Tecnologia para Ninos",
  description:
    "Guia completa sobre los mejores cursos de vacaciones de tecnologia e IA para ninos y adolescentes en 2026.",
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
  datePublished: "2026-04-01",
  dateModified: "2026-04-01",
  mainEntityOfPage: "https://www.innovakidslatam.com/blog/vacaciones-escolares-cursos-ia-ninos-2026",
}

export default function VacacionesEscolaresCursosIAPage() {
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
      <Navigation />
      <main className="min-h-screen bg-white text-[#2D3436]">
        {/* Article Header */}
        <header className="pt-32 pb-12 px-4 bg-[#F8F9FA] text-center">
          <div className="container mx-auto max-w-4xl">
            <Badge className="mb-6 bg-[#4ECDC4]/10 text-[#4ECDC4] border-[#4ECDC4]/20 px-4 py-1 text-sm">
              Vacaciones 2026
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-[#2D3436] leading-tight">
              Vacaciones Escolares 2026: Los Mejores <br className="hidden md:block" /> Cursos de IA para Ninos
            </h1>
            <div className="flex items-center justify-center gap-4 text-gray-500 text-sm mb-8">
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Abril 2026</span>
              <span>•</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> Lectura: 12 min</span>
            </div>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Las vacaciones escolares son el momento perfecto para que tu hijo aprenda algo nuevo
              sin la presion del colegio. Descubre por que los cursos de IA y tecnologia creativa
              son la mejor inversion que puedes hacer en su futuro.
            </p>
          </div>
        </header>

        {/* Article Body */}
        <article className="py-12 px-4">
          <div className="container mx-auto max-w-3xl">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-gray-700 leading-relaxed">
                Se acercan las vacaciones y como padre o madre ya conoces la dinamica: las primeras
                dos semanas los ninos disfrutan la libertad, y luego empieza el aburrimiento, las
                pantallas sin proposito y el &quot;no se que hacer&quot;. Muchas familias buscan actividades
                que mantengan a sus hijos entretenidos y, si es posible, que aprendan algo valioso
                en el proceso.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                En 2026, la opcion mas inteligente es clara: <strong>cursos de Inteligencia Artificial
                y tecnologia creativa</strong>. No son las clases de computacion aburridas del pasado.
                Son experiencias donde los ninos crean videojuegos, componen musica, disenan arte
                digital y construyen aplicaciones reales, todo usando las herramientas de IA mas
                avanzadas del mundo. Y lo mejor: se divierten haciendolo.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                En este articulo te contamos por que los cursos de IA son la mejor actividad
                vacacional para tu hijo, que opciones existen y como elegir la mejor para
                su edad e intereses.
              </p>
            </div>

            {/* Why Vacations are Perfect */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#2D3436] mb-6">Por Que las Vacaciones Son el Momento Perfecto para Aprender IA</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Durante el ano escolar, los ninos tienen la mente dividida entre tareas, examenes
                y multiples actividades. Las vacaciones les dan algo que es escaso durante el periodo
                escolar: <strong>tiempo y espacio mental para explorar sin presion</strong>.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Este contexto es ideal para el aprendizaje creativo. Sin la ansiedad de las notas,
                los ninos se atreven a experimentar, a equivocarse y a probar cosas nuevas. La IA
                se aprende mejor asi: jugando, creando y descubriendo lo que es posible.
              </p>

              <div className="bg-[#F8F9FA] p-6 rounded-xl border border-gray-200 my-8">
                <h3 className="text-xl font-bold text-[#2D3436] mb-4">5 Razones para Invertir las Vacaciones en IA</h3>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-700">
                    <span className="text-[#4ECDC4] mr-3 font-bold">1.</span>
                    <span><strong>Tiempo sin presion academica</strong> — Sin tareas ni examenes, la mente esta libre para aprender por placer y curiosidad genuina</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-[#4ECDC4] mr-3 font-bold">2.</span>
                    <span><strong>Ventaja competitiva</strong> — Mientras otros ninos ven pantallas pasivamente, el tuyo esta creando y aprendiendo habilidades del futuro</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-[#4ECDC4] mr-3 font-bold">3.</span>
                    <span><strong>Formato intensivo funciona mejor</strong> — Las vacaciones permiten bootcamps de una semana donde el avance es mayor que en meses de clases esporadicas</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-[#4ECDC4] mr-3 font-bold">4.</span>
                    <span><strong>Descubrimiento de vocacion</strong> — Muchos ninos descubren durante vacaciones una pasion que define su rumbo profesional futuro</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-[#4ECDC4] mr-3 font-bold">5.</span>
                    <span><strong>Tiempo de pantalla con proposito</strong> — En lugar de consumir contenido pasivamente, tu hijo estara creando activamente</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Types of Vacation Courses */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#2D3436] mb-6">Tipos de Cursos de Tecnologia para Vacaciones</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                No todos los cursos de vacaciones son iguales. Existen diferentes formatos y enfoques,
                y elegir el correcto depende de la edad de tu hijo, sus intereses y tu disponibilidad.
                Aqui te presentamos las principales opciones disponibles en 2026.
              </p>

              <div className="space-y-6 my-8">
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h3 className="text-xl font-bold text-blue-800 mb-3">Bootcamps Intensivos (1 semana)</h3>
                  <p className="text-gray-700 mb-3">
                    El formato mas popular para vacaciones. Son programas de 5 dias consecutivos,
                    generalmente de 2-3 horas diarias, donde los ninos completan un proyecto de principio
                    a fin. Al terminar la semana, tienen un producto terminado que pueden mostrar: un
                    videojuego, una app, un cortometraje o un album musical.
                  </p>
                  <p className="text-gray-700 text-sm">
                    <strong>Ideal para:</strong> Ninos que quieren una experiencia inmersiva con resultado rapido.
                  </p>
                </div>

                <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                  <h3 className="text-xl font-bold text-purple-800 mb-3">Programas de 2-4 Semanas</h3>
                  <p className="text-gray-700 mb-3">
                    Para familias con vacaciones mas largas, los programas extendidos permiten explorar
                    multiples areas de la IA: una semana de arte digital, otra de musica, otra de
                    videojuegos y otra de aplicaciones. El nino descubre que area le apasiona mas.
                  </p>
                  <p className="text-gray-700 text-sm">
                    <strong>Ideal para:</strong> Ninos que quieren explorar diferentes areas antes de especializarse.
                  </p>
                </div>

                <div className="bg-[#4ECDC4]/10 p-6 rounded-xl border border-[#4ECDC4]/20">
                  <h3 className="text-xl font-bold text-[#2D3436] mb-3">Clases Semanales Flexibles</h3>
                  <p className="text-gray-700 mb-3">
                    Si las vacaciones de tu hijo no coinciden con fechas de bootcamps, las clases
                    semanales regulares son una excelente opcion. En InnovaKids, puedes empezar
                    cualquier semana del ano y los horarios se adaptan a tu disponibilidad familiar.
                  </p>
                  <p className="text-gray-700 text-sm">
                    <strong>Ideal para:</strong> Familias con horarios irregulares o vacaciones no estandar.
                  </p>
                </div>
              </div>
            </section>

            {/* What Kids Create */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#2D3436] mb-6">Que Puede Crear Tu Hijo en una Semana de Vacaciones</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Una de las preguntas mas comunes de los padres es: &quot;¿que va a lograr mi hijo en tan
                poco tiempo?&quot;. La respuesta puede sorprenderte. Gracias al{" "}
                <Link href="/blog/vibe-coding-que-es-futuro-programacion-ninos" className="text-[#4ECDC4] hover:underline">
                  Vibe Coding
                </Link>{" "}
                y las herramientas de IA generativa, los ninos pueden crear proyectos completos en
                una fraccion del tiempo que tomaba antes.
              </p>

              <div className="bg-[#F8F9FA] p-6 rounded-xl border border-gray-200 my-8">
                <h3 className="text-xl font-bold text-[#2D3436] mb-4">Proyectos Posibles en 5 Dias</h3>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-700">
                    <span className="text-[#4ECDC4] mr-3 font-bold">Dia 1-5:</span>
                    <span><strong>Mi Primer Videojuego</strong> — Disenar, crear y publicar un videojuego funcional con personajes, niveles y sonido usando Vibe Coding e IA generativa</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-[#4ECDC4] mr-3 font-bold">Dia 1-5:</span>
                    <span><strong>Album Musical con IA</strong> — Componer 4-5 canciones originales usando herramientas de IA musical, con letras, melodias y portada de album</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-[#4ECDC4] mr-3 font-bold">Dia 1-5:</span>
                    <span><strong>App que Resuelve un Problema</strong> — Identificar un problema real, disenar la solucion y construirla como aplicacion web funcional con Vibe Coding</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-[#4ECDC4] mr-3 font-bold">Dia 1-5:</span>
                    <span><strong>Cortometraje Animado</strong> — Escribir guion, generar escenas visuales con IA, agregar voces y musica, editar y publicar</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-[#4ECDC4] mr-3 font-bold">Dia 1-5:</span>
                    <span><strong>Sitio Web Personal</strong> — Construir un portfolio digital donde el nino muestra todos sus proyectos creativos</span>
                  </li>
                </ul>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                Cada uno de estos proyectos seria imposible de completar en una semana con metodos
                tradicionales de ensenanza. El poder de la IA como herramienta de creacion permite
                que los ninos se enfoquen en la parte creativa y estrategica mientras la tecnologia
                se encarga de la ejecucion tecnica.
              </p>
            </section>

            {/* Age-Specific Recommendations */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#2D3436] mb-6">Recomendaciones por Edad para Vacaciones</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Asi como lo detallamos en nuestra{" "}
                <Link href="/blog/ia-para-ninos-por-edad-8-10-11-13-14-17" className="text-[#4ECDC4] hover:underline">
                  guia de IA por edad
                </Link>
                , cada grupo etario tiene necesidades y capacidades diferentes. Aqui te orientamos
                sobre que tipo de curso vacacional es mejor segun la edad de tu hijo.
              </p>

              <div className="overflow-x-auto my-8">
                <table className="w-full border-collapse bg-[#F8F9FA] rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-[#2D3436] text-white">
                      <th className="text-left p-4 font-semibold">Aspecto</th>
                      <th className="p-4 font-semibold">8-10 anos</th>
                      <th className="p-4 font-semibold">11-13 anos</th>
                      <th className="p-4 font-semibold text-[#4ECDC4]">14-17 anos</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { aspect: "Formato ideal", g1: "Bootcamp 1 semana", g2: "Bootcamp 1-2 semanas", g3: "Programa 2-4 semanas" },
                      { aspect: "Proyecto estrella", g1: "Cuento interactivo con IA", g2: "Videojuego completo", g3: "App + portfolio profesional" },
                      { aspect: "Herramientas", g1: "ChatGPT, DALL-E, Suno", g2: "Vibe Coding, IA generativa", g3: "Cursor, APIs, herramientas pro" },
                      { aspect: "Duracion por sesion", g1: "1.5-2 horas", g2: "2-2.5 horas", g3: "2.5-3 horas" },
                      { aspect: "Resultado esperado", g1: "Descubrir que puede crear", g2: "Crear algo que lo enorgullezca", g3: "Portfolio para universidad" },
                    ].map((row) => (
                      <tr key={row.aspect} className="border-b border-gray-200">
                        <td className="p-4 font-medium text-[#2D3436]">{row.aspect}</td>
                        <td className="p-4 text-center text-gray-600">{row.g1}</td>
                        <td className="p-4 text-center text-gray-600">{row.g2}</td>
                        <td className="p-4 text-center text-[#2D3436] font-medium bg-[#4ECDC4]/5">{row.g3}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Why AI over Traditional */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#2D3436] mb-6">Por Que IA y No un Campamento Tradicional de Programacion</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Los campamentos de programacion tradicionales siguen existiendo y algunos son buenos.
                Pero en 2026, hay una diferencia fundamental: la velocidad a la que un nino puede
                crear algo impresionante.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                En un campamento de programacion tradicional, tu hijo pasaria la primera semana
                aprendiendo variables, bucles y condicionales. Quizas al final de dos semanas
                tendria un juego muy basico en Python. En un curso de IA con Vibe Coding, en la
                primera hora ya esta creando algo funcional y al final de la semana tiene un
                proyecto que lo deja con la boca abierta.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Esta diferencia en velocidad de resultados tiene un impacto enorme en la motivacion.
                Un nino que en su primera clase crea algo asombroso quiere seguir aprendiendo. Un
                nino que pasa una semana sin ver resultados tangibles pierde el interes. En vacaciones,
                donde el objetivo es que el nino disfrute, esta diferencia es critica.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ademas, las habilidades que aprende con IA son mas relevantes para su futuro. El
                World Economic Forum identifica la alfabetizacion en IA como una de las competencias
                mas importantes para los trabajadores del futuro. Cada semana de vacaciones aprendiendo
                IA es una inversion directa en las oportunidades laborales de tu hijo.
              </p>
            </section>

            {/* InnovaKids Vacation Programs */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#2D3436] mb-6">Programas de Vacaciones en InnovaKids</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                En{" "}
                <Link href="/cursos/inteligencia-artificial" className="text-[#4ECDC4] hover:underline">
                  InnovaKids
                </Link>{" "}
                ofrecemos programas de vacaciones disenados especificamente para aprovechar al maximo
                el tiempo libre de tu hijo. Todos nuestros cursos son en vivo, con mentores
                especializados y grupos reducidos de maximo 6 estudiantes.
              </p>

              <div className="bg-[#4ECDC4]/10 p-6 rounded-xl border border-[#4ECDC4]/20 my-8">
                <h3 className="text-xl font-bold text-[#2D3436] mb-4">Lo que Incluyen Nuestros Programas Vacacionales</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>-- Clases en vivo por videollamada con mentor especializado en IA educativa</li>
                  <li>-- Grupos de maximo 6 estudiantes para atencion personalizada</li>
                  <li>-- Herramientas de IA profesionales configuradas y seguras para cada estudiante</li>
                  <li>-- Proyecto final completo que el nino puede mostrar a familia y amigos</li>
                  <li>-- Certificado de finalizacion del programa</li>
                  <li>-- Acceso a la comunidad de estudiantes InnovaKids</li>
                  <li>-- Horarios flexibles adaptados a las vacaciones de cada pais latinoamericano</li>
                </ul>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Una ventaja de InnovaKids sobre campamentos presenciales es que al ser online, tu
                hijo puede participar desde cualquier lugar. No importa si estan en casa, en la
                playa o visitando a la abuela: solo necesita una computadora con internet y un
                espacio tranquilo para conectarse.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Si quieres conocer opciones de cursos de verano similares, tambien puedes visitar nuestra
                pagina dedicada a los{" "}
                <Link href="/mejores-cursos-verano-programacion-ia-ninos-2026" className="text-[#4ECDC4] hover:underline">
                  mejores cursos de verano de programacion e IA para ninos 2026
                </Link>.
              </p>
            </section>

            {/* Tips for Parents */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#2D3436] mb-6">Consejos para Padres: Como Elegir el Mejor Curso</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Con tantas opciones disponibles, elegir el curso correcto puede ser abrumador. Aqui
                te damos criterios claros para tomar la mejor decision.
              </p>

              <div className="bg-[#F8F9FA] p-6 rounded-xl border border-gray-200 my-8">
                <h3 className="text-xl font-bold text-[#2D3436] mb-4">Checklist para Evaluar un Curso de Vacaciones</h3>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-700">
                    <span className="text-[#4ECDC4] mr-3 font-bold">?</span>
                    <span><strong>Tiene clases en vivo con un humano?</strong> — Las plataformas autoguiadas tienen altisimas tasas de abandono. Un mentor marca la diferencia.</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-[#4ECDC4] mr-3 font-bold">?</span>
                    <span><strong>El grupo es reducido?</strong> — Maximo 6-8 estudiantes por clase. Mas que eso y la atencion personalizada desaparece.</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-[#4ECDC4] mr-3 font-bold">?</span>
                    <span><strong>Ensena herramientas de IA actuales?</strong> — Si solo ensena Scratch o programacion con bloques, esta desactualizado para 2026.</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-[#4ECDC4] mr-3 font-bold">?</span>
                    <span><strong>Hay un proyecto final tangible?</strong> — Tu hijo deberia terminar con algo que pueda mostrar: un juego, una app, una cancion.</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-[#4ECDC4] mr-3 font-bold">?</span>
                    <span><strong>Ofrece clase de prueba gratuita?</strong> — Un buen curso te deja probar antes de pagar. Desconfia de los que no lo hacen.</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-[#4ECDC4] mr-3 font-bold">?</span>
                    <span><strong>Incluye seguridad digital?</strong> — Cualquier curso de IA para ninos debe ensenar{" "}
                      <Link href="/blog/como-proteger-hijos-ia-uso-seguro-responsable" className="text-[#4ECDC4] hover:underline">
                        uso seguro y responsable
                      </Link>.
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Screen Time Debate */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#2D3436] mb-6">Pero... No es Mas Tiempo de Pantalla?</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Esta es una preocupacion legitima de muchos padres. La respuesta es: no todo el
                tiempo de pantalla es igual. Hay una diferencia enorme entre <strong>consumir
                pantalla pasivamente</strong> (ver videos, scrollear redes sociales) y <strong>crear
                activamente con pantalla</strong> (disenar un juego, componer musica, construir una app).
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Cuando tu hijo crea con herramientas de IA, esta pensando, resolviendo problemas,
                comunicando ideas y evaluando resultados. Es tan activo mentalmente como cuando
                construye con LEGO o pinta un cuadro. La pantalla es solo el medio, no el fin.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Dicho esto, el equilibrio es importante. Los cursos de InnovaKids son de 1.5 a 3 horas
                dependiendo de la edad, no todo el dia. El resto del tiempo tu hijo deberia jugar
                al aire libre, leer, socializar y hacer todas las otras cosas que hacen que las
                vacaciones sean memorables. La tecnologia complementa las vacaciones, no las reemplaza.
              </p>
            </section>

            {/* FAQ Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#2D3436] mb-6">Preguntas Frecuentes</h2>
              <div className="space-y-4">
                <div className="border border-gray-200 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-[#2D3436] mb-2">Cuales son los mejores cursos para ninos en vacaciones 2026?</h3>
                  <p className="text-gray-700">
                    Los cursos de IA y tecnologia creativa son la mejor opcion. Los ninos aprenden
                    habilidades del futuro mientras crean proyectos reales.{" "}
                    <Link href="/clase-gratis" className="text-[#4ECDC4] hover:underline">
                      Prueba una clase gratis en InnovaKids
                    </Link>.
                  </p>
                </div>
                <div className="border border-gray-200 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-[#2D3436] mb-2">A que edad puede mi hijo tomar un curso de tecnologia?</h3>
                  <p className="text-gray-700">
                    Desde los 8 anos. InnovaKids tiene programas adaptados para{" "}
                    <Link href="/ia-ninos-por-edad" className="text-[#4ECDC4] hover:underline">
                      8-10, 11-13 y 14-17 anos
                    </Link>.
                  </p>
                </div>
                <div className="border border-gray-200 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-[#2D3436] mb-2">Cuanto duran los cursos de vacaciones?</h3>
                  <p className="text-gray-700">
                    InnovaKids ofrece bootcamps de 1 semana, programas de 2-4 semanas y clases
                    semanales flexibles. Los horarios se adaptan a cada familia.
                  </p>
                </div>
                <div className="border border-gray-200 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-[#2D3436] mb-2">Mi hijo necesita conocimientos previos?</h3>
                  <p className="text-gray-700">
                    No. Todos los cursos de vacaciones estan disenados para principiantes. Los
                    mentores guian a cada estudiante desde cero.
                  </p>
                </div>
              </div>
            </section>

            {/* Related Links */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#2D3436] mb-4">Articulos Relacionados</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link
                  href="/mejores-cursos-verano-programacion-ia-ninos-2026"
                  className="block p-4 border border-gray-200 rounded-xl hover:border-[#4ECDC4] transition-colors"
                >
                  <p className="font-semibold text-[#2D3436]">Cursos de Verano 2026</p>
                  <p className="text-gray-500 text-sm">Los mejores programas de verano para ninos</p>
                </Link>
                <Link
                  href="/blog/ia-para-ninos-por-edad-8-10-11-13-14-17"
                  className="block p-4 border border-gray-200 rounded-xl hover:border-[#4ECDC4] transition-colors"
                >
                  <p className="font-semibold text-[#2D3436]">IA por Edad: Guia Completa</p>
                  <p className="text-gray-500 text-sm">Que puede aprender tu hijo segun su edad</p>
                </Link>
                <Link
                  href="/blog/vibe-coding-que-es-futuro-programacion-ninos"
                  className="block p-4 border border-gray-200 rounded-xl hover:border-[#4ECDC4] transition-colors"
                >
                  <p className="font-semibold text-[#2D3436]">Que es el Vibe Coding</p>
                  <p className="text-gray-500 text-sm">El futuro de la programacion para ninos</p>
                </Link>
                <Link
                  href="/blog"
                  className="block p-4 border border-gray-200 rounded-xl hover:border-[#4ECDC4] transition-colors"
                >
                  <p className="font-semibold text-[#2D3436]">Blog de InnovaKids</p>
                  <p className="text-gray-500 text-sm">Mas articulos sobre educacion y tecnologia</p>
                </Link>
              </div>
            </section>
          </div>
        </article>

        {/* CTA */}
        <section className="py-16 px-4 bg-[#F8F9FA]">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-[#2D3436] mb-4">Estas Vacaciones, Tu Hijo Puede Crear Algo Increible</h2>
            <p className="text-xl text-gray-600 mb-8">
              Agenda una clase gratis y descubre como tu hijo puede aprovechar las vacaciones
              aprendiendo IA y creando proyectos reales. Sin compromiso.
            </p>
            <Link href="/clase-gratis">
              <Button
                size="lg"
                className="bg-[#4ECDC4] hover:bg-[#45b8b0] text-white font-bold text-lg px-10 py-6 h-auto rounded-full"
              >
                Agendar Clase Gratis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
