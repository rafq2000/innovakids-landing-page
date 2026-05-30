import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Curso de IA para Niños de 10, 11 y 12 Años · Qué Pueden Aprender | InnovaKids",
  description:
    "Guía para padres: qué puede aprender un niño de 10, 11 o 12 años sobre Inteligencia Artificial. Proyectos reales, herramientas adecuadas y cómo empezar. Primera clase gratis.",
  keywords: [
    "ia para niños de 10 años",
    "ia para niños de 11 años",
    "ia para niños de 12 años",
    "cursos online para niños de 10 a 12 años",
    "curso de ia para niños de 10 años",
    "inteligencia artificial para niños de 10 años",
    "cursos para niños de 10 a 12 años",
    "que puede aprender un niño de 10 años sobre ia",
    "actividades ia niños 10 años",
    "tecnologia para niños de 10 años",
  ],
  alternates: {
    canonical: "https://www.innovakidslatam.com/blog/curso-ia-ninos-10-11-12-anos",
  },
  openGraph: {
    title: "Curso de IA para Niños de 10, 11 y 12 Años | InnovaKids",
    description:
      "Qué puede aprender un niño de 10-12 años sobre IA, qué herramientas usar y cómo empezar. Guía para padres con ejemplos reales. Primera clase gratis.",
    url: "https://www.innovakidslatam.com/blog/curso-ia-ninos-10-11-12-anos",
    siteName: "InnovaKids",
    type: "article",
    locale: "es_419",
    images: [{
      url: "https://www.innovakidslatam.com/hero-child-learning-ai.jpg",
      width: 1200,
      height: 630,
      alt: "Curso de inteligencia artificial para niños de 10, 11 y 12 años - InnovaKids",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Curso de IA para Niños de 10, 11 y 12 Años | InnovaKids",
    description:
      "Qué puede aprender un niño de 10-12 años sobre IA y cómo empezar. Guía práctica para padres.",
    images: ["https://www.innovakidslatam.com/hero-child-learning-ai.jpg"],
  },
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Puede un niño de 10 años aprender Inteligencia Artificial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, absolutamente. A los 10 años los niños tienen la capacidad cognitiva para entender conceptos de IA adaptados a su edad. No se trata de programar código complejo, sino de usar herramientas de IA para crear: videojuegos, arte, música e historias. En InnovaKids trabajamos con niños desde los 8 años con muy buenos resultados.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué puede crear un niño de 10-12 años con IA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un niño de 10-12 años puede crear con IA: videojuegos simples, imágenes y arte generativo, historias ilustradas con IA, música y composiciones, presentaciones automáticas y pequeñas apps. La clave es que la IA elimina la barrera técnica de la programación, permitiendo que la creatividad sea lo principal.",
      },
    },
    {
      "@type": "Question",
      name: "¿Necesita conocimientos previos un niño de 10-12 años para aprender IA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No necesita ningún conocimiento previo. Los cursos de IA para niños de 10-12 años están diseñados para principiantes totales. Solo se requiere tener un ordenador o tablet, conexión a internet y muchas ganas de crear.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tiempo tarda un niño de 11 años en aprender a usar IA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En solo 5 semanas (10 clases de 90 minutos) un niño de 10-12 años puede pasar de no saber nada a tener su primer proyecto con IA terminado. Los niños aprenden mucho más rápido que los adultos porque no tienen miedo a equivocarse y tienen más curiosidad natural.",
      },
    },
  ],
}

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Curso de IA para Niños de 10, 11 y 12 Años: Qué Pueden Aprender y Cómo Empezar",
  description:
    "Guía completa para padres sobre IA para niños de 10 a 12 años: qué aprenden, herramientas adecuadas, proyectos reales y cómo elegir un buen curso.",
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
  mainEntityOfPage: "https://www.innovakidslatam.com/blog/curso-ia-ninos-10-11-12-anos",
  image: "https://www.innovakidslatam.com/hero-child-learning-ai.jpg",
}

const ageProjects: Record<string, { title: string; projects: string[]; focus: string }> = {
  "10 años": {
    title: "Niños de 10 años",
    focus: "Descubrimiento y primeros proyectos creativos",
    projects: [
      "Crear personajes y mundos de videojuegos con IA",
      "Generar ilustraciones para cuentos propios",
      "Componer música simple con herramientas de IA",
      "Crear presentaciones automáticas sobre sus temas favoritos",
    ],
  },
  "11 años": {
    title: "Niños de 11 años",
    focus: "Primeros proyectos interactivos",
    projects: [
      "Diseñar y probar videojuegos básicos",
      "Crear un libro ilustrado completo con IA",
      "Hacer vídeos cortos con edición asistida por IA",
      "Construir un chatbot simple sobre un tema de interés",
    ],
  },
  "12 años": {
    title: "Niños de 12 años",
    focus: "Proyectos más elaborados y pensamiento crítico",
    projects: [
      "Videojuego con mecánicas propias creado con IA",
      "Pequeña app o herramienta funcional",
      "Canal de contenido digital con IA (vídeos, música, arte)",
      "Proyecto de emprendimiento digital con IA",
    ],
  },
}

export default function IANinos10a12Page() {
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
              Guía para padres · Por edad
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.05] tracking-tight mb-8"
              style={{ fontFamily: "'Charter', 'Georgia', serif" }}>
              IA para Niños de{" "}
              <em className="italic text-[#C96342]">10, 11 y 12 años</em>
            </h1>
            <p className="text-lg text-[#F5F1E8]/80 max-w-[60ch] leading-relaxed mb-10">
              Qué puede aprender tu hijo sobre Inteligencia Artificial
              a está edad, qué proyectos reales puede crear y cómo
              empezar sin ningún conocimiento previo.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-[#F5F1E8]/60">
              <span>Lectura: 6 min</span>
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
              ¿Puede un niño de 10-12 años aprender IA?
            </h2>
            <div className="prose prose-lg max-w-none text-[#5A5751] leading-relaxed space-y-4">
              <p>
                Sí, y más de lo que imaginas. Los niños de 10 a 12 años están en uno de los
                mejores momentos para aprender inteligencia artificial. Tienen la curiosidad natural
                intacta, aprenden sin miedos, y su cerebro está especialmente preparado para
                asimilar nuevas formas de pensar.
              </p>
              <p>
                Lo mejor: <strong className="text-[#2F2F2C]">no necesitan saber programar</strong>.
                Las herramientas de IA actuales permiten crear videojuegos, arte, música y apps
                usando lenguaje natural. El niño describe lo que quiere y la IA lo construye.
                El rol del alumno es el de <em>director creativo</em>, no técnico.
              </p>
              <p>
                En InnovaKids hemos formado a más de 527 niños y adolescentes en 9 países.
                Los alumnos de 10-12 años son frecuentemente los que más avanzan: combinan
                creatividad desbordante con la capacidad de aprender herramientas nuevas muy rápido.
              </p>
            </div>
          </section>

          {/* Por edad */}
          <section>
            <h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-8"
              style={{ fontFamily: "'Charter', 'Georgia', serif" }}>
              Proyectos reales según la edad
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {Object.entries(ageProjects).map(([age, data]) => (
                <div key={age} className="bg-white rounded-2xl p-7 border border-[#2F2F2C]/8">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold mb-3">
                    {data.title}
                  </p>
                  <p className="text-sm text-[#5A5751] italic mb-5 leading-relaxed">{data.focus}</p>
                  <ul className="space-y-3">
                    {data.projects.map((p) => (
                      <li key={p} className="flex gap-2 text-sm text-[#2F2F2C]">
                        <span className="text-[#C96342] shrink-0 mt-0.5">→</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Habilidades */}
          <section>
            <h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-8"
              style={{ fontFamily: "'Charter', 'Georgia', serif" }}>
              Habilidades que desarrollan los niños de 10-12 años con IA
            </h2>
            <ul className="grid sm:grid-cols-2 gap-5">
              {[
                { title: "Pensamiento computacional", text: "Aprenden a descomponer problemas en pasos lógicos, una habilidad que se aplica en matemáticas, ciencias y cualquier área del colegio." },
                { title: "Creatividad aplicada", text: "La IA amplifica su creatividad: pueden crear proyectos visuales, sonoros y digitales que antes eran imposibles sin años de práctica técnica." },
                { title: "Perseverancia e iteración", text: "Aprenden el ciclo de crear → probar → mejorar. La tolerancia al error y la capacidad de seguir intentando son habilidades clave." },
                { title: "Confianza digital", text: "Pasan de ser consumidores pasivos de tecnología a creadores. Eso cambia su relación con las pantallas y refuerza su autoestima." },
              ].map((item) => (
                <li key={item.title} className="bg-white rounded-2xl p-6 border border-[#2F2F2C]/8">
                  <h3 className="font-semibold text-[#2F2F2C] mb-2">{item.title}</h3>
                  <p className="text-[#5A5751] text-sm leading-relaxed">{item.text}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* Por qué empezar ahora */}
          <section className="bg-white rounded-2xl p-8 md:p-10 border border-[#2F2F2C]/8">
            <h2 className="text-2xl md:text-3xl font-normal tracking-tight mb-6"
              style={{ fontFamily: "'Charter', 'Georgia', serif" }}>
              Por qué los 10-12 años es la edad ideal para empezar con IA
            </h2>
            <div className="space-y-4 text-[#5A5751] leading-relaxed">
              <p>
                A los 10-12 años los niños tienen la combinación perfecta: <strong className="text-[#2F2F2C]">
                suficiente capacidad cognitiva</strong> para entender conceptos abstractos y
                <strong className="text-[#2F2F2C]"> suficiente curiosidad</strong> para explorar
                sin el miedo al fracaso que aparece en la adolescencia.
              </p>
              <p>
                Además, empezar a los 10-12 significa que al llegar a la universidad (con 17-18 años),
                tu hijo tendrá 5-7 años de experiencia práctica con IA. Eso es una ventaja
                diferencial enorme frente a compañeros que empezaron a los 16 o 17.
              </p>
              <p>
                El mercado laboral del 2030-2035 ya no distinguirá entre "trabajos de tecnología"
                y otros: la IA será una herramienta transversal. Los niños que la dominen hoy
                tendrán más opciones en cualquier campo que elijan.
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
                  q: "¿Puede un niño de 10 años aprender IA sin saber programar?",
                  a: "Sí. Las herramientas de IA actuales usan lenguaje natural, no código. El niño describe lo que quiere crear y la IA lo construye. El aprendizaje se centra en creatividad, pensamiento crítico y resolución de problemas.",
                },
                {
                  q: "¿Cuántas horas a la semana necesita un niño de 11 años para aprender IA?",
                  a: "Con 90 minutos por semana (una sesión) ya se ven resultados. En InnovaKids hacemos 2 sesiónes semanales de 90 minutos durante 5 semanas, para un total de 15 horas que producen proyectos reales terminados.",
                },
                {
                  q: "¿Qué necesita mi hijo de 12 años para empezar?",
                  a: "Solo necesita: un ordenador o tablet con cámara, conexión a internet estable, y ganas de crear. No hace falta ningún software previo — todo se instala en la primera clase.",
                },
                {
                  q: "¿Es InnovaKids adecuado para niños de 10-12 años?",
                  a: "Sí. Tenemos grupos específicos para 8-10 años y para 11-13 años con contenidos y metodología adaptados a cada rango. Los grupos son de máximo 5 alumnos para garantizar atención personalizada.",
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
              InnovaKids · Para niños 8-17 años
            </p>
            <h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-5"
              style={{ fontFamily: "'Charter', 'Georgia', serif" }}>
              Reserva la primera clase de tu hijo{" "}
              <em className="italic text-[#C96342]">gratis</em>.
            </h2>
            <p className="text-[#F5F1E8]/70 max-w-[50ch] mx-auto leading-relaxed mb-8">
              Sin compromiso. Grupos de máximo 5 alumnos.
              Clases en vivo, 100% online. Proyectos reales terminados.
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
              También te puede interesar
            </h2>
            <ul className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/blog/ia-para-ninos-por-edad-8-10-11-13-14-17", title: "IA para Niños por Edad: guía completa 8-17 años" },
                { href: "/blog/extraescolar-inteligencia-artificial-ninos", title: "Extraescolar de IA: cómo elegir la mejor" },
                { href: "/blog/vibe-coding-que-es-futuro-programación-ninos", title: "Vibe Coding: la nueva forma de programar" },
                { href: "/cursos/inteligencia-artificial", title: "Ver el programa completo InnovaKids" },
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
