import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Extraescolar de Inteligencia Artificial para Niños · Guía Completa 2026 | InnovaKids",
  description:
    "Qué es una extraescolar de IA para niños, cómo elegir la mejor y por qué es la actividad más demandada en 2026. Clases online en vivo, grupos de 5. Primera clase gratis.",
  keywords: [
    "extraescolar de inteligencia artificial",
    "extraescolar de ia para niños",
    "actividad extraescolar inteligencia artificial",
    "extraescolar tecnología niños",
    "extraescolar ia niños",
    "clases extraescolares de ia",
    "extraescolar programación ia",
    "actividades extraescolares tecnología",
    "extraescolar de ia online",
    "mejor extraescolar de inteligencia artificial",
  ],
  alternates: {
    canonical: "https://www.innovakidslatam.com/blog/extraescolar-inteligencia-artificial-ninos",
  },
  openGraph: {
    title: "Extraescolar de Inteligencia Artificial para Niños · Guía 2026 | InnovaKids",
    description:
      "Todo lo que necesitas saber para elegir la mejor extraescolar de IA para tu hijo. Online, en vivo, grupos de 5. Primera clase gratis.",
    url: "https://www.innovakidslatam.com/blog/extraescolar-inteligencia-artificial-ninos",
    siteName: "InnovaKids",
    type: "article",
    locale: "es_419",
    images: [{
      url: "https://www.innovakidslatam.com/hero-child-learning-ai.jpg",
      width: 1200,
      height: 630,
      alt: "Extraescolar de inteligencia artificial para niños - InnovaKids",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Extraescolar de IA para Niños · Guía 2026 | InnovaKids",
    description:
      "Cómo elegir la mejor extraescolar de inteligencia artificial para tu hijo. Online, en vivo, grupos de 5.",
    images: ["https://www.innovakidslatam.com/hero-child-learning-ai.jpg"],
  },
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué es una extraescolar de inteligencia artificial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Una extraescolar de inteligencia artificial es una actividad complementaria al colegio donde los niños aprenden a usar, crear y entender la IA de forma práctica. A diferencia de los cursos teóricos, en estas clases los alumnos crean proyectos reales: videojuegos, apps, música y arte con IA. Se realizan fuera del horario escolar, normalmente 1-2 veces por semana.",
      },
    },
    {
      "@type": "Question",
      name: "¿A qué edad se puede empezar una extraescolar de IA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los niños pueden empezar una extraescolar de inteligencia artificial a partir de los 8 años. A esa edad ya tienen la capacidad de entender instrucciones, comunicar sus ideas y experimentar con herramientas de IA adaptadas para su edad. En InnovaKids trabajamos con niños y adolescentes de 8 a 17 años en grupos separados por nivel.",
      },
    },
    {
      "@type": "Question",
      name: "¿Es mejor una extraescolar de IA online o presencial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las extraescolares de IA online tienen varias ventajas: más flexibilidad de horario, acceso a los mejores profesores sin importar el país, y los niños aprenden a trabajar con tecnología digital desde casa. Lo más importante es que sean clases en vivo (no grabadas), con grupos pequeños de máximo 5-6 alumnos para garantizar atención personalizada.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto cuesta una extraescolar de inteligencia artificial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El precio de una extraescolar de IA varía según el formato. Los programas de calidad con clases en vivo y grupos pequeños rondan los $150-$300 USD por programa completo (5 semanas). En InnovaKids ofrecemos una primera clase gratuita para que puedas evaluar sin compromiso.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué aprenden los niños en una extraescolar de IA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En una buena extraescolar de IA los niños aprenden: cómo funcionan los modelos de IA, cómo crear videojuegos con IA (sin saber código), cómo generar arte e imágenes con IA, cómo usar la IA para estudiar mejor, y pensamiento computacional y resolución de problemas. La clave es que el aprendizaje sea práctico y los niños se lleven proyectos propios terminados.",
      },
    },
  ],
}

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Extraescolar de Inteligencia Artificial para Niños: Guía Completa 2026",
  description:
    "Guía definitiva para elegir la mejor extraescolar de inteligencia artificial para tu hijo. Qué es, cómo funciona, cuánto cuesta y qué aprender.",
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
  datePublished: "2026-04-27",
  dateModified: "2026-04-27",
  mainEntityOfPage: "https://www.innovakidslatam.com/blog/extraescolar-inteligencia-artificial-ninos",
  image: "https://www.innovakidslatam.com/hero-child-learning-ai.jpg",
}

const comparisons = [
  {
    criteria: "Formato de clase",
    tradicional: "Grabada o asíncrona, el niño ve vídeos solo",
    innovakids: "En vivo con profesor, interacción real en tiempo real",
  },
  {
    criteria: "Tamaño del grupo",
    tradicional: "15 a 30 alumnos o sin interacción",
    innovakids: "Máximo 5 alumnos por sesión garantizado",
  },
  {
    criteria: "Proyecto al terminar",
    tradicional: "Ejercicios de práctica guiados",
    innovakids: "Videojuego, app o proyecto creativo propio y terminado",
  },
  {
    criteria: "Edad de inicio",
    tradicional: "Generalmente desde 12 años",
    innovakids: "Desde 8 años, grupos adaptados por edad y nivel",
  },
  {
    criteria: "Certificado",
    tradicional: "No siempre incluido",
    innovakids: "Certificado internacional de finalización incluido",
  },
]

export default function ExtraescolarIAPage() {
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
      <main className="min-h-screen bg-[#F5F1E8] text-[#2F2F2C]">

        {/* Hero */}
        <header className="pt-32 pb-16 px-6 bg-[#2F2F2C] text-[#F5F1E8]">
          <div className="max-w-4xl mx-auto">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold mb-6">
              Guía para padres · 2026
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.05] tracking-tight mb-8"
              style={{ fontFamily: "'Charter', 'Georgia', serif" }}>
              Extraescolar de{" "}
              <em className="italic text-[#C96342]">Inteligencia Artificial</em>{" "}
              para Niños
            </h1>
            <p className="text-lg text-[#F5F1E8]/80 max-w-[60ch] leading-relaxed mb-10">
              Qué es, cómo elegir la mejor y por qué es la actividad
              extraescolar más demandada en 2026. Todo lo que necesitas
              saber antes de inscribir a tu hijo.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-[#F5F1E8]/60">
              <span>Lectura: 7 min</span>
              <span>·</span>
              <span>Actualizado: abril 2026</span>
              <span>·</span>
              <span>Por el equipo InnovaKids</span>
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-6 py-16 space-y-20">

          {/* Intro */}
          <section>
            <h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-6"
              style={{ fontFamily: "'Charter', 'Georgia', serif" }}>
              ¿Qué es una extraescolar de Inteligencia Artificial?
            </h2>
            <div className="prose prose-lg max-w-none text-[#5A5751] leading-relaxed space-y-4">
              <p>
                Una <strong className="text-[#2F2F2C]">extraescolar de inteligencia artificial</strong> es
                una actividad complementaria al colegio donde los niños aprenden a usar, crear y
                entender la IA de forma práctica. Se realiza fuera del horario escolar —normalmente
                1 o 2 veces por semana— y su objetivo es que los alumnos desarrollen habilidades
                tecnológicas reales, no solo conocimiento teórico.
              </p>
              <p>
                A diferencia de un curso de programación tradicional donde se aprende sintaxis,
                en una extraescolar de IA los niños crean proyectos con herramientas de inteligencia
                artificial actuales: videojuegos, aplicaciones, arte generativo, música, y más.
                El enfoque es <strong className="text-[#2F2F2C]">crear, no solo consumir</strong>.
              </p>
              <p>
                En 2026, la IA se ha convertido en una habilidad base del mismo nivel que leer,
                escribir o usar el inglés. Los colegios aún no la enseñan sistemáticamente,
                por lo que las extraescolares de IA están cubriendo ese vacío crítico.
              </p>
            </div>
          </section>

          {/* Por qué importa */}
          <section>
            <h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-8"
              style={{ fontFamily: "'Charter', 'Georgia', serif" }}>
              Por qué una extraescolar de IA importa en 2026
            </h2>
            <ul className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  title: "El 73% de los alumnos ya usa IA para estudiar",
                  text: "Sin entender cómo funciona, la usan mal. Con una buena extraescolar, tu hijo la domina y la aprovecha mejor que sus compañeros.",
                },
                {
                  title: "Los colegios van 3-5 años por detrás",
                  text: "Los programas escolares no se actualizan al ritmo de la IA. La extraescolar es el puente para que tu hijo no llegue tarde.",
                },
                {
                  title: "Ventaja universitaria y laboral",
                  text: "Cada vez más universidades y empresas valoran proyectos reales con IA. Un portafolio construido desde niño es una ventaja diferencial.",
                },
                {
                  title: "Desarrolla pensamiento computacional",
                  text: "Más allá de la IA, aprenden a descomponer problemas, iterar soluciones y pensar sistemáticamente. Habilidades que se aplican en cualquier área.",
                },
              ].map((item) => (
                <li key={item.title} className="bg-white rounded-2xl p-7 border border-[#2F2F2C]/8">
                  <h3 className="text-lg font-semibold text-[#2F2F2C] mb-3">{item.title}</h3>
                  <p className="text-[#5A5751] leading-relaxed text-base">{item.text}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* Qué aprenden */}
          <section>
            <h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-8"
              style={{ fontFamily: "'Charter', 'Georgia', serif" }}>
              ¿Qué aprenden los niños en una extraescolar de IA?
            </h2>
            <div className="prose prose-lg max-w-none text-[#5A5751] space-y-4 mb-8">
              <p>
                El contenido varía según el programa, pero una buena extraescolar de inteligencia
                artificial para niños debería cubrir:
              </p>
            </div>
            <ol className="space-y-5">
              {[
                { n: "01", title: "Fundamentos de la IA", text: "Cómo funcionan los modelos de lenguaje, generación de imágenes y video. Sin tecnicismos, con analogías que los niños entienden." },
                { n: "02", title: "Creación con IA", text: "Usar herramientas de IA para crear videojuegos, música, arte, historias y apps. El niño se convierte en creador, no solo usuario." },
                { n: "03", title: "Pensamiento computacional", text: "Descomponer problemas, diseñar soluciones paso a paso, iterar y mejorar. Habilidad transversal que se aplica en cualquier asignatura." },
                { n: "04", title: "Uso responsable y crítico", text: "Identificar contenido generado por IA, privacidad, sesgos y ética. Los niños aprenden a ser ciudadanos digitales informados." },
                { n: "05", title: "Proyecto propio terminado", text: "Al finalizar el programa, el alumno tiene un proyecto real creado por él: videojuego, app o proyecto creativo propio con IA." },
              ].map((item) => (
                <li key={item.n} className="flex gap-6 items-start">
                  <span className="text-[#C96342] font-mono text-sm font-semibold pt-1 shrink-0">{item.n}</span>
                  <div>
                    <h3 className="font-semibold text-[#2F2F2C] text-lg mb-1">{item.title}</h3>
                    <p className="text-[#5A5751] leading-relaxed">{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* Comparativa */}
          <section>
            <h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-8"
              style={{ fontFamily: "'Charter', 'Georgia', serif" }}>
              Extraescolar tradicional vs extraescolar de IA de calidad
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-[#2F2F2C]/10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#2F2F2C] text-[#F5F1E8]">
                    <th className="text-left px-6 py-4 font-semibold">Criterio</th>
                    <th className="text-left px-6 py-4 font-semibold text-[#F5F1E8]/60">Extraescolar genérica</th>
                    <th className="text-left px-6 py-4 font-semibold text-[#C96342]">InnovaKids</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#2F2F2C]/8">
                  {comparisons.map((row) => (
                    <tr key={row.criteria} className="bg-white even:bg-[#F5F1E8]/40">
                      <td className="px-6 py-4 font-medium text-[#2F2F2C]">{row.criteria}</td>
                      <td className="px-6 py-4 text-[#5A5751]">{row.tradicional}</td>
                      <td className="px-6 py-4 text-[#2F2F2C] font-medium">{row.innovakids}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Cómo elegir */}
          <section>
            <h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-8"
              style={{ fontFamily: "'Charter', 'Georgia', serif" }}>
              Cómo elegir la mejor extraescolar de IA para tu hijo
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "1. Clases en vivo, no grabadas",
                  a: "Las clases grabadas son cómodas pero no funcionan para niños. Necesitan interacción en tiempo real, poder preguntar, y un profesor que los guíe. Busca programas con clases en vivo.",
                },
                {
                  q: "2. Grupos pequeños (máximo 5-6 alumnos)",
                  a: "Con grupos grandes, los niños se pierden y el profesor no puede dar atención personalizada. Exige este dato antes de inscribir. En InnovaKids garantizamos máximo 5 alumnos.",
                },
                {
                  q: "3. Proyectos reales al terminar",
                  a: "Si al finalizar el programa tu hijo no tiene un proyecto propio y terminado, el programa no era bueno. El aprendizaje práctico es lo que consolida el conocimiento.",
                },
                {
                  q: "4. Clase de prueba gratuita",
                  a: "Cualquier programa de calidad ofrece una clase de prueba sin compromiso. Es la única forma de saber si el método, el profesor y el ritmo son adecuados para tu hijo.",
                },
                {
                  q: "5. Rango de edad específico",
                  a: "Un niño de 8 años y un adolescente de 16 necesitan enfoques completamente distintos. Asegúrate de que el grupo sea apropiado para la edad y nivel de tu hijo.",
                },
              ].map((item) => (
                <div key={item.q} className="bg-white rounded-2xl p-7 border border-[#2F2F2C]/8">
                  <h3 className="font-semibold text-[#2F2F2C] text-lg mb-3">{item.q}</h3>
                  <p className="text-[#5A5751] leading-relaxed">{item.a}</p>
                </div>
              ))}
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
                  q: "¿A qué edad se puede empezar?",
                  a: "Desde los 8 años. A esa edad ya pueden comunicar ideas, experimentar con herramientas y entender el proceso iterativo de crear y mejorar. En InnovaKids trabajamos con grupos de 8-10, 11-13 y 14-17 años.",
                },
                {
                  q: "¿Necesita conocimientos previos de programación?",
                  a: "No. Las extraescolares de IA están diseñadas para niños sin experiencia previa. La IA permite crear sin necesidad de aprender sintaxis o lenguajes de programación complejos.",
                },
                {
                  q: "¿Cuántas horas a la semana requiere?",
                  a: "Normalmente 1,5 a 2 horas por sesión, 1 o 2 veces por semana. En InnovaKids son 10 clases de 90 minutos a lo largo de 5 semanas.",
                },
                {
                  q: "¿Es mejor online o presencial?",
                  a: "Para IA, online en vivo es igual de efectivo que presencial —y más flexible. Lo importante es que sean clases en vivo con grupos pequeños, no vídeos grabados.",
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
              InnovaKids · La Extraescolar de IA #1 en LATAM
            </p>
            <h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-5"
              style={{ fontFamily: "'Charter', 'Georgia', serif" }}>
              Prueba la extraescolar de IA<br />
              <em className="italic text-[#C96342]">sin compromiso</em>.
            </h2>
            <p className="text-[#F5F1E8]/70 max-w-[50ch] mx-auto leading-relaxed mb-8">
              Primera clase 100% gratis. Grupos de máximo 5 alumnos.
              Clases en vivo. 527 graduados en 9 países. ★4.9.
            </p>
            <Link
              href="/"
              className="inline-block bg-[#C96342] text-white font-semibold px-8 py-4 rounded-xl hover:bg-[#b8573a] transition-colors text-base"
            >
              Reservar clase gratis →
            </Link>
          </section>

          {/* Internal links */}
          <section>
            <h2 className="text-2xl font-normal tracking-tight mb-6"
              style={{ fontFamily: "'Charter', 'Georgia', serif" }}>
              Artículos relacionados
            </h2>
            <ul className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/blog/ia-para-ninos-por-edad-8-10-11-13-14-17", title: "IA para Niños por Edad: 8, 10, 11, 13, 14 y 17 años" },
                { href: "/blog/vibe-coding-que-es-futuro-programación-ninos", title: "Vibe Coding: Qué Es y Por Qué Es el Futuro para Niños" },
                { href: "/blog/cursos-online-tecnologia-ninos-adolescentes", title: "Cursos Online de Tecnología para Niños y Adolescentes" },
                { href: "/adolescentes", title: "Cursos de IA para Adolescentes 14-17 años" },
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
