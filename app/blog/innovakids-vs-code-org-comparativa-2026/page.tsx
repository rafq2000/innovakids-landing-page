import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  // 58 chars · keyword-first · 2026 trigger · brand
  title: "InnovaKids vs Code.org 2026 · ¿Cuál Es Mejor? | InnovaKids",
  // 153 chars · honesto + differentiator + CTA
  description:
    "InnovaKids vs Code.org 2026: comparativa honesta para que tu hijo aprenda programación e IA según su edad. Clases en vivo vs autoguiado. Lee el análisis.",
  keywords: [
    "code.org vs innovakids",
    "mejor plataforma programacion niños",
    "code.org alternativa",
    "code.org vs clases en vivo",
    "plataforma ia niños",
    "aprender programacion niños 2026",
    "alternativas code.org",
  ],
  alternates: {
    canonical: "https://www.innovakidslatam.com/blog/innovakids-vs-code-org-comparativa-2026",
  },
  openGraph: {
    title: "InnovaKids vs Code.org 2026 · Comparativa Honesta | InnovaKids",
    description:
      "Comparativa honesta: InnovaKids vs Code.org. Descubre cuál es la mejor opción para tu hijo 8-17 años según su edad y objetivos.",
    url: "https://www.innovakidslatam.com/blog/innovakids-vs-code-org-comparativa-2026",
    siteName: "InnovaKids",
    type: "article",
    locale: "es_419",
    images: [{
      url: "https://www.innovakidslatam.com/hero-child-learning-ai.jpg",
      width: 1200,
      height: 630,
      alt: "InnovaKids vs Code.org 2026 - Comparativa de plataformas de IA y programación",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "InnovaKids vs Code.org 2026 · ¿Cuál Es Mejor? | InnovaKids",
    description:
      "Comparativa honesta: clases en vivo vs autoguiado para que tu hijo aprenda programación e IA.",
    images: ["https://www.innovakidslatam.com/hero-child-learning-ai.jpg"],
  },
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Es Code.org gratis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si, Code.org es completamente gratuito. Es una organizacion sin fines de lucro que ofrece cursos de programacion autoguiados para ninos. Sin embargo, no incluye clases en vivo, mentor personal, ni ensenanza de Inteligencia Artificial o Vibe Coding.",
      },
    },
    {
      "@type": "Question",
      name: "Cual es mejor para mi hijo, Code.org o InnovaKids?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende de tus objetivos. Si buscas una introduccion gratuita a la logica de programacion basica, Code.org es una buena opcion. Si buscas que tu hijo aprenda habilidades del futuro como IA, Vibe Coding y Prompt Engineering con un mentor en vivo y en espanol, InnovaKids es la mejor opcion.",
      },
    },
    {
      "@type": "Question",
      name: "Code.org ensena Inteligencia Artificial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Code.org tiene algunos modulos introductorios sobre IA, pero su enfoque principal sigue siendo la programacion tradicional con bloques visuales. No ensena herramientas de IA generativa como ChatGPT, Vibe Coding, creacion de arte con IA ni Prompt Engineering, que son las habilidades mas demandadas en 2026.",
      },
    },
    {
      "@type": "Question",
      name: "Mi hijo puede usar Code.org y InnovaKids al mismo tiempo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si. Muchos estudiantes de InnovaKids complementan sus clases en vivo con ejercicios autoguiados de Code.org. Son enfoques complementarios: Code.org para practicar logica basica por su cuenta y InnovaKids para aprender IA, Vibe Coding y crear proyectos reales con un mentor.",
      },
    },
  ],
}

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "InnovaKids vs Code.org (2026): Cual es Mejor para Tu Hijo?",
  description:
    "Comparativa detallada entre InnovaKids y Code.org como plataformas educativas de tecnologia para ninos.",
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
  mainEntityOfPage: "https://www.innovakidslatam.com/blog/innovakids-vs-code-org-comparativa-2026",
}

export default function InnovaKidsVsCodeOrgPage() {
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
              Comparativa Educativa
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-[#2D3436] leading-tight">
              InnovaKids vs Code.org: <br className="hidden md:block" /> Cual es Mejor para Tu Hijo?
            </h1>
            <div className="flex items-center justify-center gap-4 text-gray-500 text-sm mb-8">
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Abril 2026</span>
              <span>•</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> Lectura: 13 min</span>
            </div>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Code.org ha sido la plataforma por defecto para ensenar programacion a ninos durante anos.
              Pero en 2026, con la IA transformando todo, los padres se preguntan: hay algo mejor?
              Comparamos ambas opciones de forma honesta y detallada.
            </p>
          </div>
        </header>

        {/* Article Body */}
        <article className="py-12 px-4">
          <div className="container mx-auto max-w-3xl">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-gray-700 leading-relaxed">
                Si estas buscando la mejor forma de que tu hijo aprenda tecnologia en 2026, probablemente
                has encontrado a Code.org en tu investigacion. Es una de las plataformas mas conocidas del
                mundo para ensenar programacion a ninos, respaldada por empresas como Microsoft, Google
                y Amazon. Es gratuita, tiene millones de usuarios y se usa en colegios de todo el mundo.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Entonces, ¿por que considerar una alternativa? Porque el mundo cambio. La Inteligencia
                Artificial redefinio lo que significa &quot;saber tecnologia&quot; y las habilidades que los ninos
                necesitan para el futuro ya no son las mismas que hace cinco anos. En este articulo
                comparamos Code.org con{" "}
                <Link href="/cursos/inteligencia-artificial" className="text-[#4ECDC4] hover:underline">
                  InnovaKids
                </Link>{" "}
                de forma honesta, reconociendo las fortalezas de cada plataforma, para que puedas
                tomar la mejor decision para tu hijo.
              </p>
            </div>

            {/* What is Code.org */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#2D3436] mb-6">Que es Code.org: Fortalezas y Limitaciones</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Code.org es una organizacion sin fines de lucro fundada en 2013 con la mision de
                expandir el acceso a la ciencia de la computacion en las escuelas. Su plataforma
                ofrece cursos gratuitos de programacion para ninos desde los 4 anos hasta la
                secundaria, usando principalmente programacion visual con bloques (similar a Scratch).
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Los cursos de Code.org son autoguiados: el nino avanza a su propio ritmo resolviendo
                puzzles de programacion que se vuelven gradualmente mas complejos. Usa personajes de
                Minecraft, Star Wars y Frozen para mantener el interes, y tiene una estructura
                clara de niveles que da sensacion de progreso.
              </p>

              <div className="bg-[#F8F9FA] p-6 rounded-xl border border-gray-200 my-8">
                <h3 className="text-xl font-bold text-[#2D3436] mb-4">Fortalezas de Code.org</h3>
                <ul className="space-y-2">
                  <li className="flex items-start text-gray-700">
                    <span className="text-green-500 mr-3 font-bold">+</span>
                    <span><strong>100% gratuito</strong> — No hay costo alguno, lo que lo hace accesible para todas las familias</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-green-500 mr-3 font-bold">+</span>
                    <span><strong>Autoguiado</strong> — El nino puede aprender a su propio ritmo, cuando y donde quiera</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-green-500 mr-3 font-bold">+</span>
                    <span><strong>Curriculum estructurado</strong> — Los cursos estan alineados con estandares educativos internacionales</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-green-500 mr-3 font-bold">+</span>
                    <span><strong>Personajes populares</strong> — Minecraft y Star Wars mantienen el interes inicial de los ninos</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-green-500 mr-3 font-bold">+</span>
                    <span><strong>Adoptado por colegios</strong> — Muchos profesores lo usan como recurso complementario en clase</span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-xl border border-red-100 my-8">
                <h3 className="text-xl font-bold text-[#2D3436] mb-4">Limitaciones de Code.org</h3>
                <ul className="space-y-2">
                  <li className="flex items-start text-gray-700">
                    <span className="text-red-500 mr-3 font-bold">-</span>
                    <span><strong>Sin clases en vivo</strong> — No hay mentor ni interaccion humana. El nino esta solo frente a la pantalla</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-red-500 mr-3 font-bold">-</span>
                    <span><strong>Enfoque limitado a bloques</strong> — La mayoria del contenido es programacion visual, no IA ni herramientas modernas</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-red-500 mr-3 font-bold">-</span>
                    <span><strong>No ensena IA generativa</strong> — No cubre ChatGPT, Vibe Coding, creacion de arte ni musica con IA</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-red-500 mr-3 font-bold">-</span>
                    <span><strong>Techo bajo de complejidad</strong> — Los proyectos son puzzles, no aplicaciones reales funcionales</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-red-500 mr-3 font-bold">-</span>
                    <span><strong>Pierde interes rapido</strong> — Muchos ninos abandonan despues de las primeras lecciones sin un guia que los motive</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-red-500 mr-3 font-bold">-</span>
                    <span><strong>Sin retroalimentacion personalizada</strong> — El sistema solo verifica si el puzzle esta correcto, no por que</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* What is InnovaKids */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#2D3436] mb-6">Que es InnovaKids: El Enfoque de 2026</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                InnovaKids es una escuela de tecnologia en vivo para ninos y adolescentes de 8 a 17 anos,
                enfocada en Inteligencia Artificial, Vibe Coding y creacion digital. A diferencia de
                plataformas autoguiadas, InnovaKids ofrece clases en vivo con mentores especializados
                y grupos reducidos de maximo 6 estudiantes.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                El enfoque de InnovaKids nace de una premisa: las habilidades tecnologicas que los ninos
                necesitan en 2026 son diferentes a las de 2015. La programacion con bloques fue
                revolucionaria en su momento, pero hoy la IA permite crear aplicaciones, juegos,
                musica y arte sin necesidad de escribir codigo tradicional. InnovaKids ensena a
                los ninos a dominar estas herramientas del futuro.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nuestra{" "}
                <Link href="/metodologia-aprender-creando" className="text-[#4ECDC4] hover:underline">
                  metodologia Aprender Creando
                </Link>{" "}
                se basa en proyectos reales: los estudiantes no resuelven puzzles abstractos, sino que
                construyen aplicaciones, videojuegos, canciones y cortometrajes que pueden mostrar a
                sus amigos y familia. Cada proyecto es elegido por el estudiante segun sus intereses,
                lo que maximiza la motivacion.
              </p>
            </section>

            {/* Comparison Table */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#2D3436] mb-6">Comparativa Directa: Code.org vs InnovaKids</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-[#F8F9FA] rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-[#2D3436] text-white">
                      <th className="text-left p-4 font-semibold">Criterio</th>
                      <th className="p-4 font-semibold">Code.org</th>
                      <th className="p-4 font-semibold text-[#4ECDC4]">InnovaKids</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { criteria: "Precio", codeorg: "Gratis", innovakids: "Desde $49 USD/mes" },
                      { criteria: "Formato", codeorg: "Autoguiado (solo)", innovakids: "Clases en vivo con mentor" },
                      { criteria: "Tamano del grupo", codeorg: "Individual", innovakids: "Maximo 6 estudiantes" },
                      { criteria: "Contenido principal", codeorg: "Programacion con bloques", innovakids: "IA, Vibe Coding, Prompt Eng." },
                      { criteria: "Herramientas de IA", codeorg: "Basico / limitado", innovakids: "ChatGPT, DALL-E, Suno, Cursor" },
                      { criteria: "Tipo de proyectos", codeorg: "Puzzles y ejercicios", innovakids: "Apps, juegos, musica, video reales" },
                      { criteria: "Retroalimentacion", codeorg: "Automatica (correcto/incorrecto)", innovakids: "Personalizada del mentor" },
                      { criteria: "Idioma", codeorg: "Multiidioma (incluye espanol)", innovakids: "Espanol nativo (Latinoamerica)" },
                      { criteria: "Edad recomendada", codeorg: "4-18 anos", innovakids: "8-17 anos" },
                      { criteria: "Persistencia del estudiante", codeorg: "Baja (alto abandono)", innovakids: "Alta (mentor motiva)" },
                      { criteria: "Relevancia laboral futura", codeorg: "Media (logica basica)", innovakids: "Alta (IA es la habilidad #1)" },
                    ].map((row) => (
                      <tr key={row.criteria} className="border-b border-gray-200">
                        <td className="p-4 font-medium text-[#2D3436]">{row.criteria}</td>
                        <td className="p-4 text-center text-gray-600">{row.codeorg}</td>
                        <td className="p-4 text-center text-[#2D3436] font-medium bg-[#4ECDC4]/5">{row.innovakids}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* When to Choose Each */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#2D3436] mb-6">Cuando Elegir Cada Opcion</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Somos honestos: hay situaciones donde Code.org es una buena opcion y otras donde
                InnovaKids es claramente superior. Aqui te ayudamos a decidir segun tu situacion
                especifica.
              </p>

              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h3 className="text-xl font-bold text-blue-800 mb-3">Elige Code.org si...</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>-- Tu hijo tiene menos de 8 anos y quieres una introduccion gratuita a la logica</li>
                    <li>-- Tu presupuesto es cero y no puedes invertir en educacion tecnologica</li>
                    <li>-- Solo buscas una actividad complementaria para que haga en sus tiempos libres</li>
                    <li>-- Tu hijo ya esta en un colegio que usa Code.org y quieres que practique en casa</li>
                  </ul>
                </div>

                <div className="bg-[#4ECDC4]/10 p-6 rounded-xl border border-[#4ECDC4]/20">
                  <h3 className="text-xl font-bold text-[#2D3436] mb-3">Elige InnovaKids si...</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>-- Tu hijo tiene 8-17 anos y quieres prepararlo para el futuro con IA</li>
                    <li>-- Valoras la interaccion humana y quieres que tenga un mentor que lo guie</li>
                    <li>-- Quieres que cree proyectos reales (apps, juegos, musica) que pueda mostrar</li>
                    <li>-- Tu hijo se aburre con plataformas autoguiadas o las abandona rapidamente</li>
                    <li>-- Buscas habilidades con relevancia laboral real (IA, Vibe Coding, Prompt Engineering)</li>
                    <li>-- Quieres clases en espanol con enfoque latinoamericano</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* The Mentor Factor */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#2D3436] mb-6">El Factor Mentor: Por Que las Clases en Vivo Marcan la Diferencia</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Una de las diferencias mas significativas entre Code.org e InnovaKids es la presencia
                de un mentor humano. La investigacion educativa es clara: el aprendizaje es
                significativamente mas efectivo cuando hay un guia experto que adapta la ensenanza
                al estudiante.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                En Code.org, si un nino se traba en un puzzle, puede quedarse frustrado durante
                minutos sin ayuda. Si no entiende un concepto, no hay nadie que se lo explique
                de otra forma. Si pierde la motivacion, no hay nadie que lo aliente. Esto
                explica las altas tasas de abandono de las plataformas autoguiadas.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                En InnovaKids, el mentor detecta en tiempo real cuando un estudiante esta confundido,
                aburrido o frustrado, y ajusta la clase en ese momento. Celebra los logros, desafia
                cuando el estudiante esta listo para mas y crea una relacion de confianza que es
                fundamental para el aprendizaje profundo.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ademas, el mentor ensena habilidades que ningun algoritmo puede ensenar: etica digital,
                pensamiento critico frente a la IA, trabajo en equipo y comunicacion efectiva. Estas
                habilidades blandas son tan importantes como las tecnicas para el futuro de tu hijo.
              </p>
            </section>

            {/* Can They Complement */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#2D3436] mb-6">Pueden Complementarse Code.org e InnovaKids?</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Si, absolutamente. De hecho, muchos de nuestros estudiantes usan Code.org como
                complemento a sus clases en InnovaKids. Es como la diferencia entre tener un tutor
                de matematicas y usar Khan Academy: uno no reemplaza al otro, se potencian mutuamente.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Un plan combinado podria verse asi: tu hijo toma clases semanales en InnovaKids donde
                aprende IA, Vibe Coding y crea proyectos reales con su mentor. Entre clases, puede
                practicar logica basica en Code.org por su cuenta. Lo mejor de ambos mundos.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Si te interesa comparar con otras plataformas, tambien puedes leer nuestra{" "}
                <Link href="/codingal-vs-innovakids-comparativa" className="text-[#4ECDC4] hover:underline">
                  comparativa InnovaKids vs Codingal
                </Link>{" "}
                para conocer mas opciones y encontrar la mejor combinacion para tu hijo.
              </p>
            </section>

            {/* Pricing */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#2D3436] mb-6">Sobre los Precios: Es el Costo una Barrera Real?</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Es cierto que Code.org es gratis e InnovaKids tiene un costo. Pero vale la pena
                analizar que estas pagando. Una clase en InnovaKids incluye un mentor experto en vivo,
                grupo reducido de maximo 6 alumnos, acceso a herramientas de IA profesionales,
                proyectos personalizados y retroalimentacion individualizada.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Si comparas el costo con otras actividades extracurriculares como clases de futbol,
                musica o idiomas, InnovaKids esta en el mismo rango. La diferencia es que las
                habilidades de IA tienen un retorno de inversion mucho mayor en terminos de
                oportunidades futuras para tu hijo. Puedes ver nuestros planes en la{" "}
                <Link href="/precios" className="text-[#4ECDC4] hover:underline">
                  pagina de precios
                </Link>.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ademas, ofrecemos una{" "}
                <Link href="/clase-gratis" className="text-[#4ECDC4] hover:underline">
                  clase gratis sin compromiso
                </Link>{" "}
                para que tu hijo pruebe antes de decidir. Si despues de la clase gratuita no te
                convence, no has perdido nada.
              </p>
            </section>

            {/* FAQ Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#2D3436] mb-6">Preguntas Frecuentes</h2>
              <div className="space-y-4">
                <div className="border border-gray-200 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-[#2D3436] mb-2">Es Code.org gratis?</h3>
                  <p className="text-gray-700">
                    Si, Code.org es completamente gratuito. Ofrece cursos autoguiados de programacion
                    con bloques. No incluye clases en vivo, mentor ni ensenanza de IA moderna.
                  </p>
                </div>
                <div className="border border-gray-200 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-[#2D3436] mb-2">Cual es mejor, Code.org o InnovaKids?</h3>
                  <p className="text-gray-700">
                    Depende de tus objetivos. Code.org es mejor para una introduccion gratuita a la logica.
                    InnovaKids es mejor para aprender IA, Vibe Coding y crear proyectos reales con un mentor.
                  </p>
                </div>
                <div className="border border-gray-200 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-[#2D3436] mb-2">Code.org ensena Inteligencia Artificial?</h3>
                  <p className="text-gray-700">
                    Tiene modulos introductorios sobre IA, pero no ensena herramientas como ChatGPT,{" "}
                    <Link href="/blog/vibe-coding-que-es-futuro-programacion-ninos" className="text-[#4ECDC4] hover:underline">
                      Vibe Coding
                    </Link>
                    , creacion de arte con IA ni Prompt Engineering.
                  </p>
                </div>
                <div className="border border-gray-200 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-[#2D3436] mb-2">Pueden usarse juntos Code.org e InnovaKids?</h3>
                  <p className="text-gray-700">
                    Si. Son complementarios. InnovaKids para clases en vivo de IA y proyectos reales,
                    Code.org para practicar logica basica por cuenta propia.
                  </p>
                </div>
              </div>
            </section>

            {/* Related Links */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#2D3436] mb-4">Articulos Relacionados</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link
                  href="/codingal-vs-innovakids-comparativa"
                  className="block p-4 border border-gray-200 rounded-xl hover:border-[#4ECDC4] transition-colors"
                >
                  <p className="font-semibold text-[#2D3436]">InnovaKids vs Codingal</p>
                  <p className="text-gray-500 text-sm">Otra comparativa para padres informados</p>
                </Link>
                <Link
                  href="/blog/scratch-vs-ia-ninos"
                  className="block p-4 border border-gray-200 rounded-xl hover:border-[#4ECDC4] transition-colors"
                >
                  <p className="font-semibold text-[#2D3436]">Scratch vs IA para Ninos</p>
                  <p className="text-gray-500 text-sm">Que deberia aprender tu hijo primero</p>
                </Link>
                <Link
                  href="/cursos/inteligencia-artificial"
                  className="block p-4 border border-gray-200 rounded-xl hover:border-[#4ECDC4] transition-colors"
                >
                  <p className="font-semibold text-[#2D3436]">Curso de IA para Ninos</p>
                  <p className="text-gray-500 text-sm">Conoce el programa completo de InnovaKids</p>
                </Link>
                <Link
                  href="/blog/ia-para-ninos-por-edad-8-10-11-13-14-17"
                  className="block p-4 border border-gray-200 rounded-xl hover:border-[#4ECDC4] transition-colors"
                >
                  <p className="font-semibold text-[#2D3436]">IA por Edad: Guia Completa</p>
                  <p className="text-gray-500 text-sm">Que puede aprender tu hijo segun su edad</p>
                </Link>
              </div>
            </section>
          </div>
        </article>

        {/* CTA */}
        <section className="py-16 px-4 bg-[#F8F9FA]">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-[#2D3436] mb-4">Prueba InnovaKids Gratis y Decide Tu Mismo</h2>
            <p className="text-xl text-gray-600 mb-8">
              No te pedimos que nos creas: te pedimos que lo pruebes. Agenda una clase gratis
              y tu hijo descubrira lo que puede crear con IA y un mentor experto.
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
