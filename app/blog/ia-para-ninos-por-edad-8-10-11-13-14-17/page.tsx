import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  // 57 chars · keyword-first · 2026 · brand
  title: "IA para Niños por Edad · 8-10, 11-13, 14-17 (2026) | InnovaKids",
  // 152 chars · proof + differentiator + CTA
  description:
    "Qué puede aprender tu hijo sobre IA según su edad: guía 2026 para niños 8-10, 11-13 y 14-17 años con proyectos reales probados por 527 familias. Lee ya.",
  keywords: [
    "cursos ia niños por edad",
    "ia para niños 10 años",
    "ia para adolescentes 14 años",
    "inteligencia artificial niños 8 años",
    "cursos ia adolescentes",
    "aprender ia segun edad",
    "ia para preadolescentes",
  ],
  alternates: {
    canonical: "https://www.innovakidslatam.com/blog/ia-para-ninos-por-edad-8-10-11-13-14-17",
  },
  openGraph: {
    title: "IA para Niños por Edad · 8-10, 11-13 y 14-17 años (2026) | InnovaKids",
    description:
      "Guía 2026: qué puede aprender tu hijo sobre IA según su edad. Proyectos reales para cada grupo probados por 527 familias en 9 países.",
    url: "https://www.innovakidslatam.com/blog/ia-para-ninos-por-edad-8-10-11-13-14-17",
    siteName: "InnovaKids",
    type: "article",
    locale: "es_419",
    images: [{
      url: "https://www.innovakidslatam.com/hero-child-learning-ai.jpg",
      width: 1200,
      height: 630,
      alt: "IA para niños por edad 8-10, 11-13, 14-17 años - Guía 2026 InnovaKids",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IA para Niños por Edad · 8-10, 11-13, 14-17 (2026) | InnovaKids",
    description:
      "Qué puede aprender tu hijo sobre IA según su edad. Guía 2026 con proyectos reales para cada grupo.",
    images: ["https://www.innovakidslatam.com/hero-child-learning-ai.jpg"],
  },
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "A que edad puede un nino empezar a aprender IA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A partir de los 8 anos los ninos tienen la madurez cognitiva para empezar a aprender Inteligencia Artificial de forma guiada. InnovaKids ofrece programas adaptados para 8-10, 11-13 y 14-17 anos con proyectos y herramientas diferentes para cada grupo.",
      },
    },
    {
      "@type": "Question",
      name: "Que proyectos de IA puede hacer un nino de 10 anos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un nino de 10 anos puede crear arte digital con IA generativa, componer canciones con Suno AI, disenar historias interactivas con ChatGPT y construir juegos simples con Vibe Coding. Los proyectos se adaptan a su nivel de lectoescritura y pensamiento abstracto.",
      },
    },
    {
      "@type": "Question",
      name: "Es seguro que un adolescente de 14 anos use herramientas de IA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si, siempre que reciba educacion sobre uso responsable. En InnovaKids ensenamos etica digital, verificacion de informacion y privacidad de datos como parte integral del programa. Un adolescente informado es un adolescente protegido.",
      },
    },
    {
      "@type": "Question",
      name: "Cual es la diferencia entre el curso para ninos de 8 y el de 14 anos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El curso de 8-10 anos se enfoca en exploracion creativa con herramientas visuales y proyectos guiados paso a paso. El de 14-17 anos trabaja con herramientas profesionales, Vibe Coding avanzado, creacion de portfolios y preparacion para el mundo laboral.",
      },
    },
  ],
}

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "IA para Ninos por Edad: Guia 8-10, 11-13 y 14-17 Anos (2026)",
  description:
    "Guia completa sobre como la educacion en IA se adapta a cada grupo de edad infantil y adolescente.",
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
  mainEntityOfPage: "https://www.innovakidslatam.com/blog/ia-para-ninos-por-edad-8-10-11-13-14-17",
}

export default function IAParaNinosPorEdadPage() {
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
              Guia por Edades
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-[#2D3436] leading-tight">
              IA para Ninos por Edad: Guia <br className="hidden md:block" /> 8-10, 11-13 y 14-17 Anos
            </h1>
            <div className="flex items-center justify-center gap-4 text-gray-500 text-sm mb-8">
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Abril 2026</span>
              <span>•</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> Lectura: 14 min</span>
            </div>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              No todos los ninos aprenden igual. La edad marca una diferencia enorme en como un nino interactua
              con la Inteligencia Artificial. Aqui te explicamos exactamente que puede aprender tu hijo
              segun su etapa de desarrollo.
            </p>
          </div>
        </header>

        {/* Article Body */}
        <article className="py-12 px-4">
          <div className="container mx-auto max-w-3xl">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-gray-700 leading-relaxed">
                Una de las preguntas mas frecuentes que recibimos en{" "}
                <Link href="/cursos/inteligencia-artificial" className="text-[#4ECDC4] hover:underline">
                  InnovaKids
                </Link>{" "}
                es: &quot;Mi hijo tiene X anos, ¿puede aprender IA?&quot;. La respuesta es casi siempre si,
                pero <strong>la forma en que se ensena cambia radicalmente</strong> segun la edad del nino.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Un nino de 8 anos no piensa igual que uno de 14. Sus intereses son diferentes, su capacidad
                de abstraccion es distinta y las herramientas que pueden manejar varian enormemente. Por eso,
                en InnovaKids hemos disenado programas especificos para tres grupos de edad, cada uno con
                su propio enfoque, proyectos y ritmo de aprendizaje.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                En esta guia vamos a desglosar exactamente que puede aprender un nino en cada etapa,
                que proyectos reales puede crear y como la IA se adapta a su nivel de desarrollo cognitivo.
                Si eres padre o madre y quieres tomar la mejor decision educativa para tu hijo, esta guia
                te dara toda la informacion que necesitas.
              </p>
            </div>

            {/* Why Age Matters */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#2D3436] mb-6">Por Que la Edad Importa en la Educacion con IA</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                La Inteligencia Artificial no es una unica herramienta: es un ecosistema de tecnologias que van
                desde chatbots conversacionales hasta generadores de imagenes, musica, video y codigo. Cada una
                de estas herramientas requiere un nivel diferente de madurez cognitiva, pensamiento abstracto
                y capacidad de comunicacion escrita.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Segun la psicologia del desarrollo, las capacidades cognitivas de un nino evolucionan
                significativamente entre los 8 y los 17 anos. Jean Piaget identifico que entre los 7 y 11 anos
                los ninos estan en la etapa de operaciones concretas, donde piensan de forma logica pero
                necesitan ejemplos tangibles. A partir de los 11-12 anos entran en la etapa de operaciones
                formales, donde pueden manejar conceptos abstractos y hipoteticos.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Esto tiene implicaciones directas en como ensenamos IA. Un nino de 8 anos necesita ver
                resultados visuales inmediatos para mantenerse motivado. Un adolescente de 15 anos puede
                entender conceptos como sesgos algoritmicos, etica de datos y pensamiento computacional avanzado.
                Forzar el mismo contenido para ambos grupos seria un error pedagogico grave.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Por eso, la{" "}
                <Link href="/metodologia-aprender-creando" className="text-[#4ECDC4] hover:underline">
                  metodologia Aprender Creando de InnovaKids
                </Link>{" "}
                se adapta a cada grupo etario, manteniendo siempre el enfoque practico y basado en proyectos
                reales, pero ajustando la complejidad, las herramientas y los objetivos de aprendizaje.
              </p>
            </section>

            {/* 8-10 Years */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#2D3436] mb-6">Grupo 8-10 Anos: Exploradores Creativos</h2>
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mb-6">
                <h3 className="text-xl font-bold text-blue-800 mb-3">Perfil del Estudiante</h3>
                <p className="text-gray-700">
                  Los ninos de 8 a 10 anos estan en una etapa de curiosidad intensa. Quieren entender como
                  funcionan las cosas, les fascina la magia de ver algo creado &quot;de la nada&quot; y tienen una
                  capacidad de asombro que los convierte en los estudiantes mas entusiastas. Sin embargo,
                  su capacidad de atencion es mas corta y necesitan cambios frecuentes de actividad.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-[#2D3436] mb-4">Que Pueden Aprender</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                A esta edad, el enfoque principal es la <strong>exploracion creativa guiada</strong>. Los ninos
                de 8-10 anos pueden aprender a interactuar con chatbots de IA de forma basica, generando
                historias, resolviendo acertijos y creando dialogos con personajes inventados. La clave
                esta en que cada actividad produce un resultado visible e inmediato.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Tambien pueden iniciarse en la generacion de arte digital con IA. Herramientas como DALL-E
                les permiten crear ilustraciones describiendo lo que imaginan. Esto no solo desarrolla
                su creatividad sino que les ensena a comunicar ideas de forma clara y especifica, una
                habilidad fundamental del Prompt Engineering.
              </p>

              <div className="bg-[#F8F9FA] p-6 rounded-xl border border-gray-200 my-8">
                <h3 className="text-xl font-bold text-[#2D3436] mb-4">Proyectos Reales para 8-10 Anos</h3>
                <ul className="space-y-2">
                  <li className="flex items-start text-gray-700">
                    <span className="text-[#4ECDC4] mr-3 font-bold">1.</span>
                    <span><strong>Mi Cuento Ilustrado con IA</strong> — Escriben una historia con ayuda de ChatGPT y generan las ilustraciones con IA</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-[#4ECDC4] mr-3 font-bold">2.</span>
                    <span><strong>Disenador de Personajes</strong> — Crean personajes originales describiendolos a una IA generativa de imagenes</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-[#4ECDC4] mr-3 font-bold">3.</span>
                    <span><strong>Mi Primera Cancion</strong> — Componen letras y melodias usando herramientas de musica con IA</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-[#4ECDC4] mr-3 font-bold">4.</span>
                    <span><strong>Aventura Interactiva</strong> — Programan un juego de decision estilo &quot;elige tu propia aventura&quot; con ayuda de IA</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-[#4ECDC4] mr-3 font-bold">5.</span>
                    <span><strong>Robot Preguntón</strong> — Disenan un chatbot que responde preguntas sobre su tema favorito</span>
                  </li>
                </ul>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                El objetivo a esta edad no es la profundidad tecnica sino <strong>encender la chispa</strong>.
                Queremos que el nino asocie la tecnologia con creatividad, diversion y posibilidades infinitas.
                Un nino que a los 8 anos descubre que puede crear con IA, a los 12 estara listo para proyectos
                mucho mas ambiciosos.
              </p>
            </section>

            {/* 11-13 Years */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#2D3436] mb-6">Grupo 11-13 Anos: Creadores Independientes</h2>
              <div className="bg-purple-50 p-6 rounded-xl border border-purple-100 mb-6">
                <h3 className="text-xl font-bold text-purple-800 mb-3">Perfil del Estudiante</h3>
                <p className="text-gray-700">
                  Los preadolescentes de 11 a 13 anos estan en una transicion fascinante. Comienzan a pensar
                  de forma abstracta, tienen opiniones propias y buscan diferenciarse. Quieren crear cosas
                  que impresionen a sus amigos y demostrar que son capaces de cosas &quot;de adultos&quot;. Su capacidad
                  de atencion y persistencia es significativamente mayor que la del grupo anterior.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-[#2D3436] mb-4">Que Pueden Aprender</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Este grupo puede avanzar a un uso mas sofisticado de la IA. Ya pueden escribir prompts
                complejos y entender por que una instruccion produce mejores resultados que otra. Es el
                momento ideal para introducir el concepto de <strong>Prompt Engineering</strong> de forma
                mas estructurada.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Tambien es la edad perfecta para comenzar con{" "}
                <Link href="/vibe-coding-ninos" className="text-[#4ECDC4] hover:underline">
                  Vibe Coding
                </Link>
                : la programacion mediante lenguaje natural. Un preadolescente de 12 anos puede describir
                una aplicacion que quiere crear y trabajar con la IA para construirla paso a paso. Esto les
                da una sensacion de poder y logro que es tremendamente motivadora a esta edad.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Ademas, a esta edad pueden empezar a entender conceptos basicos de etica digital: que significa
                que la IA tenga sesgos, por que no se debe copiar trabajo ajeno, como verificar si la
                informacion generada por IA es correcta. Estas conversaciones son fundamentales para formar
                usuarios responsables de la tecnologia.
              </p>

              <div className="bg-[#F8F9FA] p-6 rounded-xl border border-gray-200 my-8">
                <h3 className="text-xl font-bold text-[#2D3436] mb-4">Proyectos Reales para 11-13 Anos</h3>
                <ul className="space-y-2">
                  <li className="flex items-start text-gray-700">
                    <span className="text-[#4ECDC4] mr-3 font-bold">1.</span>
                    <span><strong>Mi Primera App con Vibe Coding</strong> — Crean una aplicacion funcional describiendola en espanol a la IA</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-[#4ECDC4] mr-3 font-bold">2.</span>
                    <span><strong>Videojuego Completo</strong> — Disenan y programan un juego con mecanicas, niveles y graficos generados con IA</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-[#4ECDC4] mr-3 font-bold">3.</span>
                    <span><strong>Cortometraje con IA</strong> — Escriben guion, generan escenas visuales y agregan musica creada con IA</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-[#4ECDC4] mr-3 font-bold">4.</span>
                    <span><strong>Asistente de Estudio Personal</strong> — Construyen un chatbot que les ayuda a estudiar sus materias del colegio</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-[#4ECDC4] mr-3 font-bold">5.</span>
                    <span><strong>Podcast con IA</strong> — Producen un episodio completo usando IA para guion, edicion y musica</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* 14-17 Years */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#2D3436] mb-6">Grupo 14-17 Anos: Futuros Profesionales</h2>
              <div className="bg-pink-50 p-6 rounded-xl border border-pink-100 mb-6">
                <h3 className="text-xl font-bold text-pink-800 mb-3">Perfil del Estudiante</h3>
                <p className="text-gray-700">
                  Los adolescentes de 14 a 17 anos estan a pocos anos de entrar a la universidad o al mundo
                  laboral. Tienen capacidad de pensamiento abstracto completa, pueden manejar proyectos
                  complejos de varias semanas y estan motivados por la relevancia practica de lo que aprenden.
                  Quieren saber que lo que estudian les servira de verdad.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-[#2D3436] mb-4">Que Pueden Aprender</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Para este grupo, la IA ya no es solo una herramienta creativa: es una{" "}
                <strong>competencia profesional</strong>. Los adolescentes pueden aprender Prompt Engineering
                avanzado, Vibe Coding para crear aplicaciones complejas, automatizacion de tareas con IA
                y las bases del pensamiento critico frente a la tecnologia.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                En{" "}
                <Link href="/adolescentes" className="text-[#4ECDC4] hover:underline">
                  el programa para adolescentes de InnovaKids
                </Link>
                , los estudiantes trabajan en proyectos que podrian formar parte de un portfolio profesional.
                No son ejercicios academicos: son productos reales que demuestran competencias concretas
                ante universidades y futuros empleadores.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Tambien profundizamos en temas como la etica de la IA, el impacto social de la automatizacion,
                la propiedad intelectual en contenido generado por IA y la privacidad de datos. Un adolescente
                que entiende estos temas no solo esta preparado para usar la tecnologia, sino para
                liderarla de forma responsable.
              </p>

              <div className="bg-[#F8F9FA] p-6 rounded-xl border border-gray-200 my-8">
                <h3 className="text-xl font-bold text-[#2D3436] mb-4">Proyectos Reales para 14-17 Anos</h3>
                <ul className="space-y-2">
                  <li className="flex items-start text-gray-700">
                    <span className="text-[#4ECDC4] mr-3 font-bold">1.</span>
                    <span><strong>Startup Simulada</strong> — Disenan un producto digital completo usando IA: desde la idea hasta el prototipo funcional</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-[#4ECDC4] mr-3 font-bold">2.</span>
                    <span><strong>App con Vibe Coding Avanzado</strong> — Construyen una aplicacion web completa con bases de datos y autenticacion</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-[#4ECDC4] mr-3 font-bold">3.</span>
                    <span><strong>Automatizacion Inteligente</strong> — Crean flujos automatizados que resuelven problemas reales usando APIs de IA</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-[#4ECDC4] mr-3 font-bold">4.</span>
                    <span><strong>Portfolio Digital</strong> — Construyen su sitio web personal con todos sus proyectos de IA</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-[#4ECDC4] mr-3 font-bold">5.</span>
                    <span><strong>Investigacion sobre IA y Sociedad</strong> — Producen un ensayo multimedia sobre el impacto de la IA en su comunidad</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* How to Choose */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#2D3436] mb-6">Como Elegir el Programa Adecuado para Tu Hijo</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                La edad es el factor principal, pero no el unico. Tambien debes considerar los intereses
                de tu hijo, su nivel de familiaridad con la tecnologia y su personalidad. Algunos ninos de
                9 anos son mas maduros que otros de 11, y eso esta bien. En InnovaKids, nuestros mentores
                evaluan a cada estudiante de forma individual para ubicarlo en el grupo donde mejor pueda
                desarrollarse.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Si tu hijo ya tiene experiencia con tecnologia, por ejemplo si ya ha usado{" "}
                <Link href="/blog/scratch-vs-ia-ninos" className="text-[#4ECDC4] hover:underline">
                  Scratch o herramientas similares
                </Link>
                , puede que este listo para un grupo ligeramente mas avanzado. Lo importante es que se
                sienta desafiado pero no frustrado. La zona de desarrollo proximo, como diria Vygotsky,
                es donde ocurre el aprendizaje real.
              </p>

              <div className="overflow-x-auto my-8">
                <table className="w-full border-collapse bg-[#F8F9FA] rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-[#2D3436] text-white">
                      <th className="text-left p-4 font-semibold">Aspecto</th>
                      <th className="p-4 font-semibold">8-10 Anos</th>
                      <th className="p-4 font-semibold">11-13 Anos</th>
                      <th className="p-4 font-semibold text-[#4ECDC4]">14-17 Anos</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { aspect: "Enfoque", g1: "Exploracion creativa", g2: "Creacion independiente", g3: "Competencia profesional" },
                      { aspect: "Herramientas", g1: "ChatGPT basico, DALL-E, Suno", g2: "Vibe Coding, Prompt Eng.", g3: "IA avanzada, APIs, automatizacion" },
                      { aspect: "Duracion de proyectos", g1: "1-2 sesiones", g2: "2-4 sesiones", g3: "4-8 sesiones" },
                      { aspect: "Supervision", g1: "Alta", g2: "Media", g3: "Baja (autonomia guiada)" },
                      { aspect: "Resultado principal", g1: "Asombro y motivacion", g2: "Confianza y habilidad", g3: "Portfolio y preparacion" },
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

            {/* Common Concerns */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#2D3436] mb-6">Preocupaciones Comunes de los Padres</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Es natural que como padre o madre tengas dudas sobre exponer a tu hijo a la Inteligencia
                Artificial. Hemos recopilado las preocupaciones mas frecuentes y nuestras respuestas basadas
                en la experiencia con cientos de familias latinoamericanas.
              </p>

              <div className="space-y-4">
                <div className="bg-[#F8F9FA] p-6 rounded-xl border border-gray-200">
                  <h3 className="text-lg font-bold text-[#2D3436] mb-2">&quot;Mi hijo es muy chico para la IA&quot;</h3>
                  <p className="text-gray-700">
                    Si tiene 8 anos o mas, no es muy chico. La clave esta en la forma de ensenanza. No le
                    pedimos que entienda algoritmos: le pedimos que cree, que imagine, que se divierta. Las
                    herramientas de IA modernas son tan intuitivas como dibujar con crayones, solo que los
                    resultados son mucho mas impresionantes. Te invitamos a conocer nuestra{" "}
                    <Link href="/confianza-y-seguridad" className="text-[#4ECDC4] hover:underline">
                      politica de confianza y seguridad
                    </Link>.
                  </p>
                </div>

                <div className="bg-[#F8F9FA] p-6 rounded-xl border border-gray-200">
                  <h3 className="text-lg font-bold text-[#2D3436] mb-2">&quot;La IA le va a hacer trampas en el colegio&quot;</h3>
                  <p className="text-gray-700">
                    Todo lo contrario. Un nino que entiende como funciona la IA sabe usarla como herramienta
                    de aprendizaje, no como atajo. En InnovaKids ensenamos explicitamente la diferencia entre
                    usar la IA para aprender y usarla para copiar. Los estudiantes que pasan por nuestro
                    programa son mejores estudiantes, no peores.
                  </p>
                </div>

                <div className="bg-[#F8F9FA] p-6 rounded-xl border border-gray-200">
                  <h3 className="text-lg font-bold text-[#2D3436] mb-2">&quot;No entiendo de tecnologia, no puedo ayudarlo&quot;</h3>
                  <p className="text-gray-700">
                    No necesitas saber de tecnologia. Nuestros mentores guian a cada estudiante en clases
                    en vivo con grupos reducidos. Tu rol es apoyar y celebrar lo que tu hijo crea. Muchos
                    padres nos dicen que terminan aprendiendo de sus propios hijos, lo cual fortalece
                    el vinculo familiar.
                  </p>
                </div>
              </div>
            </section>

            {/* The InnovaKids Method */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#2D3436] mb-6">El Metodo InnovaKids: Aprender Creando</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Independientemente de la edad, todos nuestros programas comparten una filosofia comun: el
                aprendizaje sucede cuando creas algo real. No usamos examenes, no hay calificaciones y no
                hay memorizacion. Cada clase termina con un proyecto tangible que el estudiante puede
                mostrar, compartir y del cual sentirse orgulloso.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Nuestras clases son en vivo, con grupos de maximo 6 estudiantes por mentor. Esto permite
                una atencion personalizada que es imposible en plataformas autoguiadas o en clases
                masivas. Cada estudiante avanza a su ritmo, recibe retroalimentacion inmediata y
                construye una relacion de confianza con su mentor.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Si quieres saber mas sobre nuestra metodologia, visita la pagina de{" "}
                <Link href="/metodologia-aprender-creando" className="text-[#4ECDC4] hover:underline">
                  Metodologia Aprender Creando
                </Link>{" "}
                o{" "}
                <Link href="/clase-gratis" className="text-[#4ECDC4] hover:underline">
                  agenda una clase gratis
                </Link>{" "}
                para que tu hijo lo experimente en primera persona.
              </p>
            </section>

            {/* FAQ Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#2D3436] mb-6">Preguntas Frecuentes</h2>
              <div className="space-y-4">
                <div className="border border-gray-200 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-[#2D3436] mb-2">A que edad puede un nino empezar a aprender IA?</h3>
                  <p className="text-gray-700">
                    A partir de los 8 anos. InnovaKids ofrece programas adaptados para{" "}
                    <Link href="/ia-ninos-por-edad" className="text-[#4ECDC4] hover:underline">
                      cada grupo de edad: 8-10, 11-13 y 14-17 anos
                    </Link>.
                  </p>
                </div>
                <div className="border border-gray-200 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-[#2D3436] mb-2">Que proyectos de IA puede hacer un nino de 10 anos?</h3>
                  <p className="text-gray-700">
                    Puede crear arte digital con IA, componer canciones, disenar historias interactivas
                    y construir juegos simples con ayuda de herramientas de IA generativa.
                  </p>
                </div>
                <div className="border border-gray-200 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-[#2D3436] mb-2">Es seguro que un adolescente de 14 anos use herramientas de IA?</h3>
                  <p className="text-gray-700">
                    Si, siempre con educacion sobre uso responsable. En InnovaKids ensenamos etica digital
                    y privacidad como parte integral del programa. Conoce mas sobre{" "}
                    <Link href="/blog/como-proteger-hijos-ia-uso-seguro-responsable" className="text-[#4ECDC4] hover:underline">
                      como proteger a tus hijos en la era de la IA
                    </Link>.
                  </p>
                </div>
                <div className="border border-gray-200 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-[#2D3436] mb-2">Cual es la diferencia entre el curso para ninos de 8 y el de 14 anos?</h3>
                  <p className="text-gray-700">
                    El curso de 8-10 anos se enfoca en exploracion creativa con herramientas visuales.
                    El de 14-17 trabaja con herramientas profesionales, Vibe Coding avanzado y
                    preparacion para el mundo laboral.
                  </p>
                </div>
              </div>
            </section>

            {/* Related Links */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#2D3436] mb-4">Articulos Relacionados</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link
                  href="/cursos/inteligencia-artificial"
                  className="block p-4 border border-gray-200 rounded-xl hover:border-[#4ECDC4] transition-colors"
                >
                  <p className="font-semibold text-[#2D3436]">Curso de IA para Ninos</p>
                  <p className="text-gray-500 text-sm">Conoce el programa completo de InnovaKids</p>
                </Link>
                <Link
                  href="/blog/scratch-vs-ia-ninos"
                  className="block p-4 border border-gray-200 rounded-xl hover:border-[#4ECDC4] transition-colors"
                >
                  <p className="font-semibold text-[#2D3436]">Scratch vs IA: Comparativa</p>
                  <p className="text-gray-500 text-sm">Que deberia aprender tu hijo primero</p>
                </Link>
                <Link
                  href="/blog/vibe-coding-que-es-futuro-programacion-ninos"
                  className="block p-4 border border-gray-200 rounded-xl hover:border-[#4ECDC4] transition-colors"
                >
                  <p className="font-semibold text-[#2D3436]">Que es el Vibe Coding</p>
                  <p className="text-gray-500 text-sm">El futuro de la programacion para ninos</p>
                </Link>
                <Link
                  href="/blog/como-proteger-hijos-ia-uso-seguro-responsable"
                  className="block p-4 border border-gray-200 rounded-xl hover:border-[#4ECDC4] transition-colors"
                >
                  <p className="font-semibold text-[#2D3436]">Uso Seguro de IA para Ninos</p>
                  <p className="text-gray-500 text-sm">Guia para padres sobre seguridad digital</p>
                </Link>
              </div>
            </section>
          </div>
        </article>

        {/* CTA */}
        <section className="py-16 px-4 bg-[#F8F9FA]">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-[#2D3436] mb-4">Descubre el Programa Ideal para la Edad de Tu Hijo</h2>
            <p className="text-xl text-gray-600 mb-8">
              Agenda una clase gratis y nuestros mentores evaluaran el nivel de tu hijo
              para ubicarlo en el grupo perfecto. Sin compromiso.
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
