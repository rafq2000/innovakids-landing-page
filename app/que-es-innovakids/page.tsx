import { generateHreflangs } from "@/lib/seo-config";
import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { CheckCircle, Target, ArrowRight, Sparkles, Users, BookOpen, Trophy, Lightbulb, Rocket } from "lucide-react"

export const metadata: Metadata = {
  // 59 chars · keyword-first · brand + age
  title: "¿Qué es InnovaKids? Escuela IA Niños 8-17 · #1 LATAM",
  // 154 chars · proof + differentiator + CTA
  description:
    "InnovaKids es la escuela #1 de IA y Vibe Coding para niños 8-17 años en LATAM. 527 graduados en 9 países, grupos de 5 y clases en vivo. Clase gratis.",
  keywords: [
    "que es innovakids",
    "innovakids escuela ia",
    "escuela ia niños latam",
    "innovakids curso",
    "escuela vibe coding niños",
  ],
  openGraph: {
    title: "¿Qué es InnovaKids? Escuela #1 de IA para Niños y Adolescentes en LATAM",
    description:
      "Tu hijo pasa de consumidor a creador. 527 graduados en 9 países, grupos de 5, clases en vivo. Reserva tu clase gratis.",
    url: "https://www.innovakidslatam.com/que-es-innovakids",
    siteName: "InnovaKids",
    type: "website",
    locale: "es_419",
    images: [{
      url: "https://www.innovakidslatam.com/hero-child-learning-ai.jpg",
      width: 1200,
      height: 630,
      alt: "¿Qué es InnovaKids? Escuela de IA para niños 8-17 años en LATAM",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "¿Qué es InnovaKids? Escuela IA Niños 8-17 · #1 LATAM",
    description:
      "Escuela #1 de IA y Vibe Coding para niños 8-17. 527 graduados en 9 países, grupos de 5. Clase gratis.",
    images: ["https://www.innovakidslatam.com/hero-child-learning-ai.jpg"],
  },
  alternates: {
    canonical: "https://www.innovakidslatam.com/que-es-innovakids",
      languages: generateHreflangs("global", "/que-es-innovakids")
  },
}

export default function QueEsInnovaKids() {
  const whatsappNumber = "56964754219"
  const whatsappMessage = encodeURIComponent(
    "Hola! Quiero saber más sobre InnovaKids y sus cursos de IA para mi hijo/a.",
  )
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
  const calendlyLink = "https://calendly.com/innovakids/evaluacion"

  return (
    <>
      <Navigation />
      <WhatsAppButton />

      <main className="min-h-screen bg-background">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-violet-600 via-indigo-700 to-blue-800 py-24 md:py-32">
          <div className="absolute inset-0 bg-black/20" />
          <div className="container relative z-10 mx-auto px-4 text-center text-white">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm">
              <Sparkles className="h-5 w-5 text-yellow-300" />
              <span className="font-medium">La escuela #1 de IA en Latinoamérica</span>
            </div>

            <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
              ¿Qué es InnovaKids?
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-xl text-white/90 md:text-2xl">
              La primera escuela online especializada en enseñar Inteligencia Artificial y Vibe Coding a niños y adolescentes de 8 a 17 años.
            </p>

            <div className="mx-auto mt-10 grid max-w-3xl grid-cols-3 gap-4">
              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                <div className="text-3xl font-bold md:text-4xl">527</div>
                <div className="text-sm text-white/80">Graduados</div>
              </div>
              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                <div className="text-3xl font-bold md:text-4xl">9</div>
                <div className="text-sm text-white/80">Países</div>
              </div>
              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                <div className="text-3xl font-bold md:text-4xl">4.9★</div>
                <div className="text-sm text-white/80">Calificación</div>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT IS INNOVAKIDS */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-3xl font-bold md:text-4xl">
                InnovaKids: Donde los Niños y Adolescentes Aprenden a Crear con IA
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                InnovaKids es una <strong>academia online de Inteligencia Artificial</strong> diseñada específicamente para niños y adolescentes de 8 a 17 años. No enseñamos programación tradicional: enseñamos <strong>Vibe Coding</strong>, una metodología donde los alumnos crean software, arte, música y videojuegos hablando en español con la IA.
              </p>
              <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                Fundada con la misión de transformar a los jóvenes de <strong>consumidores de tecnología en creadores</strong>, InnovaKids ya ha graduado a más de 527 alumnos en 9 países de Latinoamérica y España.
              </p>
              <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                Nuestras clases son 100% en vivo (no videos pregrabados), con un máximo de 5 alumnos por grupo, lo que garantiza atención totalmente personalizada. Cada alumno construye un portafolio real de proyectos que puede mostrar al mundo.
              </p>
            </div>
          </div>
        </section>

        {/* WHY DIFFERENT */}
        <section className="bg-muted/30 py-20 md:py-28">
          <div className="container mx-auto px-4">
            <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
              ¿Qué Hace Diferente a InnovaKids?
            </h2>
            <p className="mx-auto mb-16 max-w-2xl text-center text-muted-foreground">
              No es otro curso de computación. Es una experiencia de creación con IA.
            </p>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <Users className="h-8 w-8" />,
                  title: "Grupos Ultra Reducidos",
                  desc: "Máximo 5 alumnos por grupo. Tu hijo no será uno más en una clase de 30. Cada alumno recibe atención 100% personalizada del profesor.",
                },
                {
                  icon: <Sparkles className="h-8 w-8" />,
                  title: "Metodología Vibe Coding",
                  desc: "No enseñamos código aburrido. Los alumnos crean hablando en español con la IA: 'Haz un juego donde un gato salte obstáculos'. La IA genera el código y aprenden mientras crean.",
                },
                {
                  icon: <Rocket className="h-8 w-8" />,
                  title: "10+ Herramientas de IA",
                  desc: "ChatGPT, Midjourney, Suno AI, Cursor, Bolt y más. Los alumnos dominan las mismas herramientas que usan los profesionales de Silicon Valley.",
                },
                {
                  icon: <BookOpen className="h-8 w-8" />,
                  title: "100% Práctico",
                  desc: "Desde la primera clase, tu hijo crea proyectos reales. No hay teoría sin aplicación. Al finalizar, tiene un portafolio web con todos sus proyectos publicados.",
                },
                {
                  icon: <Trophy className="h-8 w-8" />,
                  title: "Certificación Internacional",
                  desc: "Al completar el programa, cada alumno recibe una certificación respaldada y un portafolio profesional publicado en la web.",
                },
                {
                  icon: <Lightbulb className="h-8 w-8" />,
                  title: "Para Todas las Edades",
                  desc: "Niños de 8-12 y adolescentes de 13-17 en grupos adaptados a su nivel. Cada grupo tiene un ritmo y proyectos diseñados para su edad y madurez.",
                },
              ].map((item, i) => (
                <div key={i} className="rounded-2xl bg-card p-6">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                    {item.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT THEY CREATE */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
              ¿Qué Crean los Alumnos de InnovaKids?
            </h2>
            <p className="mx-auto mb-16 max-w-2xl text-center text-muted-foreground">
              Proyectos reales que construyen en 5 semanas de clases
            </p>

            <div className="mx-auto max-w-4xl space-y-6">
              {[
                {
                  week: "Semanas 1-2",
                  title: "Vibe IA y Arte Digital",
                  desc: "Crean chatbots personalizados con GPT-4, generan comics ilustrados con Midjourney, y diseñan logos y marcas personales con IA.",
                  color: "from-purple-500 to-indigo-500",
                },
                {
                  week: "Semanas 3-4",
                  title: "Vibe Music y Voz",
                  desc: "Componen canciones originales con Suno AI, clonan su voz para narrar historias, y crean podcasts y contenido multimedia profesional.",
                  color: "from-pink-500 to-rose-500",
                },
                {
                  week: "Semanas 5-6",
                  title: "Vibe Coding y Cinema",
                  desc: "Programan videojuegos hablando con la IA, crean películas animadas y cortometrajes con herramientas de IA generativa.",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  week: "Semanas 7-10",
                  title: "Proyecto Final y Portfolio",
                  desc: "Hack de estudio con IA para el colegio, creación de una startup digital o identidad de marca completa. Presentación final del portafolio.",
                  color: "from-emerald-500 to-teal-500",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 rounded-2xl bg-card p-6 transition-all hover:shadow-lg">
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-lg font-bold text-white`}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <div className="mb-1 text-sm text-muted-foreground">{item.week}</div>
                    <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AGES */}
        <section className="bg-muted/30 py-20 md:py-28">
          <div className="container mx-auto px-4">
            <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
              ¿Para Qué Edades es InnovaKids?
            </h2>
            <p className="mx-auto mb-16 max-w-2xl text-center text-muted-foreground">
              Dos tracks diseñados por nivel de madurez y habilidades
            </p>

            <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
              <div className="rounded-2xl border-2 border-primary/30 bg-card p-8">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary">
                  <span className="text-lg font-bold">8-12 años</span>
                </div>
                <h3 className="mb-4 text-2xl font-bold">Track Niños</h3>
                <ul className="space-y-3">
                  {[
                    "Proyectos creativos: comics, música, arte",
                    "Lenguaje sencillo y supervisión cercana",
                    "Metodología de aprendizaje por juego",
                    "Grupos de compañeros de la misma edad",
                    "Énfasis en creatividad y exploración",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border-2 border-violet-500/30 bg-card p-8">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-violet-500/10 px-4 py-2 text-violet-500">
                  <span className="text-lg font-bold">13-17 años</span>
                </div>
                <h3 className="mb-4 text-2xl font-bold">Track Adolescentes</h3>
                <ul className="space-y-3">
                  {[
                    "Proyectos con impacto real: startups, apps funcionales",
                    "Herramientas profesionales de desarrollo",
                    "Creación de portafolio para universidades",
                    "Colaboración con peers internacionales",
                    "Énfasis en emprendimiento y pensamiento crítico",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-violet-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* COUNTRIES */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Presencia en 9 Países
            </h2>
            <p className="mx-auto mb-16 max-w-2xl text-muted-foreground">
              Alumnos de toda Latinoamérica y España crean con IA en InnovaKids
            </p>

            <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-4">
              {[
                { name: "Chile", link: "/cl", flag: "🇨🇱" },
                { name: "Colombia", link: "/co", flag: "🇨🇴" },
                { name: "México", link: "/mx", flag: "🇲🇽" },
                { name: "Perú", link: "/pe", flag: "🇵🇪" },
                { name: "Argentina", link: "/ar", flag: "🇦🇷" },
                { name: "Ecuador", link: "/ec", flag: "🇪🇨" },
                { name: "España", link: "/es", flag: "🇪🇸" },
                { name: "Uruguay", link: "/uy", flag: "🇺🇾" },
                { name: "Panamá", link: "/pa", flag: "🇵🇦" },
              ].map((country, i) => (
                <Link
                  key={i}
                  href={country.link}
                  className="group rounded-2xl bg-card px-6 py-4 transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-lg"
                >
                  <span className="text-xl">{country.flag}</span>
                  <span className="ml-2 font-medium">{country.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-muted/30 py-20 md:py-28">
          <div className="container mx-auto px-4">
            <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
              Preguntas Frecuentes sobre InnovaKids
            </h2>
            <p className="mx-auto mb-16 max-w-2xl text-center text-muted-foreground">
              Todo lo que necesitas saber antes de inscribir a tu hijo
            </p>

            <div className="mx-auto max-w-3xl space-y-4">
              {[
                {
                  q: "¿Qué es exactamente InnovaKids?",
                  a: "InnovaKids es una escuela online que enseña Inteligencia Artificial y Vibe Coding a niños y adolescentes de 8 a 17 años. No somos un curso de programación tradicional: nuestros alumnos crean apps, música, arte y videojuegos hablando en español con la IA.",
                },
                {
                  q: "¿Necesita mi hijo saber programar para entrar?",
                  a: "No. El programa está diseñado para principiantes absolutos. No se requiere ningún conocimiento previo de programación, tecnología o matemáticas avanzadas. Solo necesita saber leer y escribir con fluidez.",
                },
                {
                  q: "¿Qué herramientas de IA aprenderán a usar?",
                  a: "Los alumnos dominan más de 10 herramientas profesionales incluyendo ChatGPT, Midjourney, Suno AI, Cursor, Bolt, Canva AI y más. Son las mismas herramientas que usan los profesionales de la industria tecnológica.",
                },
                {
                  q: "¿Cuánto cuesta el programa?",
                  a: "El programa completo de 10 clases en vivo tiene un valor de $297 USD. Puedes reservar tu cupo con solo $50 USD. Incluye todas las herramientas, certificación, portafolio web y garantía de 10 días.",
                },
                {
                  q: "¿Qué pasa si no me gusta el curso?",
                  a: "Tienes una garantía total de 10 días. Si no estás 100% satisfecho por cualquier razón, te devolvemos todo tu dinero sin hacer preguntas. Sin letra chica, sin complicaciones.",
                },
                {
                  q: "¿Cuántos alumnos hay por clase?",
                  a: "Máximo 5 alumnos por grupo. Esto permite atención completamente personalizada. Cada alumno avanza a su ritmo y recibe retroalimentación directa del profesor en cada clase.",
                },
                {
                  q: "¿Funciona para adolescentes o solo niños pequeños?",
                  a: "InnovaKids tiene tracks diferenciados: uno para niños de 8-12 años (enfocado en creatividad y exploración) y otro para adolescentes de 13-17 años (enfocado en emprendimiento, apps funcionales y portafolio para universidades).",
                },
                {
                  q: "¿Desde qué países pueden participar?",
                  a: "Alumnos de cualquier país hispanohablante pueden participar. Actualmente tenemos presencia activa en Chile, Colombia, México, Perú, Argentina, Ecuador, España, Uruguay y Panamá. Los horarios se adaptan a tu zona horaria.",
                },
              ].map((faq, i) => (
                <div key={i} className="rounded-2xl bg-card p-6">
                  <h3 className="mb-3 text-lg font-bold">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-gradient-to-br from-violet-600 via-indigo-700 to-blue-800 py-20 md:py-28">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Transforma a Tu Hijo en un Creador Digital
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-white/80">
              527 familias en 9 países ya confiaron en InnovaKids. Tu hijo puede ser el siguiente en crear proyectos increíbles con Inteligencia Artificial.
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href={calendlyLink}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-violet-700 shadow-2xl transition-all hover:scale-105"
              >
                <Target className="h-5 w-5" />
                Agendar Evaluación Gratis
              </Link>
              <Link
                href={whatsappLink}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white hover:text-violet-700"
              >
                Consultar por WhatsApp
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-white/70">
              <span className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" /> Sin compromiso
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" /> Garantía de 10 días
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" /> Grupos máx 5 alumnos
              </span>
            </div>
          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h3 className="mb-6 text-xl font-bold">Explora InnovaKids</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/" className="flex items-center gap-1 text-primary hover:underline">
                Inicio <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/cursos/inteligencia-artificial" className="flex items-center gap-1 text-primary hover:underline">
                Cursos de IA <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/blog" className="flex items-center gap-1 text-primary hover:underline">
                Blog <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/testimonios" className="flex items-center gap-1 text-primary hover:underline">
                Testimonios <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/descargar-guia-ia-ninos" className="flex items-center gap-1 text-primary hover:underline">
                Guía Gratis <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿Qué es InnovaKids?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "InnovaKids es una escuela online que enseña Inteligencia Artificial y Vibe Coding a niños y adolescentes de 8 a 17 años. 527 graduados en 9 países. Clases en vivo con máximo 5 alumnos por grupo.",
                },
              },
              {
                "@type": "Question",
                name: "¿Qué edades acepta InnovaKids?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "InnovaKids acepta niños de 8 a 12 años y adolescentes de 13 a 17 años, con tracks diferenciados para cada grupo de edad.",
                },
              },
              {
                "@type": "Question",
                name: "¿Cuántos alumnos hay por clase en InnovaKids?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Máximo 5 alumnos por grupo, lo que garantiza atención 100% personalizada.",
                },
              },
              {
                "@type": "Question",
                name: "¿Cuánto cuesta InnovaKids?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "El programa completo de 10 clases en vivo tiene un valor de $297 USD. Se puede reservar con $50 USD. Incluye garantía de 10 días.",
                },
              },
            ],
          }),
        }}
      />
    </>
  )
}
