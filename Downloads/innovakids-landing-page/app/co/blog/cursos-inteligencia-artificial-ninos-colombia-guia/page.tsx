import { generateHreflangs } from "@/lib/seo-config";
import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Clock, CheckCircle, Target, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
  title: "Cursos de IA para Niños en Colombia (Guía 2026)",
  description:
    "Guía Completa: Lo que todo padre colombiano debe saber antes de inscribir a su hijo en un curso de IA. Precios, herramientas, seguridad y mejores opciones en Colombia.",
  keywords: [
    "guia cursos ia niños colombia",
    "mejores cursos programacion niños colombia",
    "comparativa escuelas ia colombia",
    "consejos padres tecnologia colombia",
  ],
  openGraph: {
    title: "Cursos de IA para Niños en Colombia (Guía 2026)",
    description: "Todo lo que necesitas saber para elegir la mejor educación tecnológica para tu hijo en Colombia.",
    url: "https://www.innovakidslatam.com/co/blog/cursos-inteligencia-artificial-ninos-colombia-guia",
    locale: "es_CO",
    type: "article",
    siteName: "Blog InnovaKids Colombia",
  },
  alternates: {
    canonical: "https://www.innovakidslatam.com/co/blog/cursos-inteligencia-artificial-ninos-colombia-guia",
      languages: generateHreflangs("home")
  },
}

export default function GuiaCursosIAColombia() {
  const whatsappNumber = "56964754219"
  const whatsappMessage = encodeURIComponent(
    "Hola! Leí la guía de cursos de IA para niños en Colombia y me interesa saber más.",
  )
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
  const calendlyLink = "https://calendly.com/innovakids/evaluacion"

  return (
    <>
      <Navigation />
      <WhatsAppButton />

      <main className="min-h-screen bg-background">
        {/* ARTICLE HEADER */}
        <header className="bg-gradient-to-br from-[#003893] to-[#001d4a] py-16 text-white md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-white/70">
              <span className="rounded-full bg-[#FCD116] px-3 py-1 text-xs font-bold text-[#003893]">
                Educación IA Colombia
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" /> 18 min lectura
              </span>
              <span>Actualizado: Marzo 2026</span>
            </div>

            <h1 className="max-w-4xl text-3xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Vibe Coding en Colombia: La Guía Completa para Padres 2026
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-white/80">
              Todo lo que necesitas saber antes de inscribir a tu hijo en un curso de IA en Colombia. Comparativas
              objetivas, herramientas, edades recomendadas y testimonios reales.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-[#FCD116]" />
              <div>
                <div className="font-bold">Ricardo González</div>
                <div className="text-sm text-white/70">Fundador InnovaKids | Experto en Educación IA</div>
              </div>
            </div>
          </div>
        </header>

        {/* TABLE OF CONTENTS */}
        <nav className="border-b bg-card py-8">
          <div className="container mx-auto px-4">
            <h2 className="mb-4 text-lg font-bold">📋 Contenido de esta Guía</h2>
            <ol className="grid gap-2 text-sm md:grid-cols-2 lg:grid-cols-3">
              {[
                "¿Qué es la IA para Niños?",
                "¿Por Qué Aprender IA en 2026?",
                "¿A Qué Edad Pueden Empezar?",
                "Comparativa: Mejores Programas",
                "Qué Crearán en el Primer Mes",
                "Inversión y Retorno",
                "Cómo Elegir el Curso Correcto",
                "Testimonios Reales",
                "Preguntas Frecuentes",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-muted text-xs font-bold">
                    {i + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </nav>

        {/* ARTICLE CONTENT */}
        <article className="py-16">
          <div className="container mx-auto max-w-4xl px-4">
            {/* Section 1 */}
            <section className="mb-16">
              <h2 className="mb-6 text-3xl font-bold">¿Qué es el Vibe Coding?</h2>
              <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
                El **Vibe Coding** no es solo escribir líneas de código. Es programar usando el lenguaje natural y la Inteligencia Artificial.
                Antes, para crear un videojuego, un niño necesitaba memorizar sintaxis compleja. Hoy, un pelado en Colombia puede decirle a la IA:
                "Crea un juego donde un gato salte obstáculos", y la IA genera el código base.
              </p>
              <p className="mb-6 text-muted-foreground">
                Imagínalo así: el niño se convierte en el arquitecto y la IA en su equipo de construcción. Esto permite crear proyectos increíbles en horas, no meses.
              </p>

              <div className="rounded-2xl bg-[#FCD116]/10 p-6">
                <h3 className="mb-3 text-lg font-bold">💡 Ejemplo Práctico Colombia</h3>
                <p className="text-muted-foreground">
                  Santiago, 10 años de Chapinero, creó un comic completo de 12 páginas en su primera semana. Usó ChatGPT
                  para escribir el guión, Midjourney para las ilustraciones y Canva para el diseño final. Antes del
                  curso, nunca había dibujado digitalmente.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="mb-16">
              <h2 className="mb-6 text-3xl font-bold">¿Por Qué Tu Hijo Debe Aprender IA en 2026?</h2>
              <p className="mb-6 text-lg text-muted-foreground">
                No es "prepararse para el futuro". La IA ya está aquí, transformando Colombia ahora mismo. Los niños que
                la dominen hoy tendrán ventajas competitivas enormes en el mercado laboral.
              </p>

              <div className="mb-8 grid gap-6 md:grid-cols-3">
                {[
                  { stat: "70%", desc: "de empresas colombianas buscan profesionales con habilidades en IA" },
                  { stat: "$8-15M", desc: "COP salario anual promedio para roles de IA en Colombia" },
                  { stat: "3x", desc: "más oportunidades de empleo remoto con habilidades IA" },
                ].map((item, i) => (
                  <div key={i} className="rounded-2xl bg-card p-6 text-center">
                    <div className="mb-2 text-3xl font-bold text-[#003893]">{item.stat}</div>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3 - Age */}
            <section className="mb-16">
              <h2 className="mb-6 text-3xl font-bold">¿A Qué Edad Pueden Empezar a Aprender IA?</h2>
              <p className="mb-6 text-lg text-muted-foreground">
                Respuesta corta: <strong>desde los 8 años</strong>. Pero depende del nivel de madurez digital y
                habilidades de lectoescritura del niño.
              </p>

              <div className="space-y-6">
                {[
                  {
                    age: "6-7 años",
                    verdict: "⚠️ Esperar un poco más",
                    desc: "Están desarrollando lectoescritura. Las herramientas de IA requieren escribir prompts claros.",
                    recommended: false,
                  },
                  {
                    age: "8-10 años",
                    verdict: "✅ Ideal para Empezar",
                    desc: "Ya tienen lectoescritura fluida y pueden expresar ideas complejas. Son creativos y curiosos.",
                    recommended: true,
                  },
                  {
                    age: "11-13 años",
                    verdict: "✅✅ Óptimo",
                    desc: "Pensamiento abstracto desarrollado. Pueden manejar proyectos complejos combinando múltiples herramientas.",
                    recommended: true,
                  },
                  {
                    age: "14-16 años",
                    verdict: "✅ Nivel Avanzado",
                    desc: "Ya tienen contexto del mundo real. Pueden crear proyectos con impacto comercial.",
                    recommended: true,
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`rounded-2xl p-6 ${item.recommended ? "border-2 border-green-500 bg-green-500/5" : "bg-card"}`}
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="text-xl font-bold">{item.age}</h3>
                      <span className={item.recommended ? "text-green-500" : "text-orange-500"}>{item.verdict}</span>
                    </div>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4 - Comparison */}
            <section className="mb-16">
              <h2 className="mb-6 text-3xl font-bold">Comparativa: Los Mejores Cursos de IA en Colombia</h2>

              <div className="mb-8 overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="p-4 text-left">Criterio</th>
                      <th className="p-4 text-center font-bold text-[#003893]">InnovaKids</th>
                      <th className="p-4 text-center">Otros</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { criteria: "Herramientas IA", innovakids: "10+", others: "2-4" },
                      { criteria: "Tamaño Clase", innovakids: "Máx 5", others: "15-30" },
                      { criteria: "Precio", innovakids: "$267 USD", others: "$300-500 USD" },
                      { criteria: "Garantía", innovakids: "10 días", others: "No" },
                      { criteria: "Proyectos Reales", innovakids: "10+", others: "3-5" },
                    ].map((row, i) => (
                      <tr key={i} className="border-b">
                        <td className="p-4 font-medium">{row.criteria}</td>
                        <td className="p-4 text-center font-bold text-green-500">{row.innovakids}</td>
                        <td className="p-4 text-center text-muted-foreground">{row.others}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="rounded-2xl bg-[#003893] p-6 text-white">
                <div className="mb-2 text-sm text-[#FCD116]">🏆 RECOMENDADO</div>
                <h3 className="mb-2 text-xl font-bold">InnovaKids - Mejor Opción para Colombia</h3>
                <p className="mb-4 text-white/80">
                  Programa completo de 10 clases, grupos de máximo 5 niños, 10+ herramientas de IA, $267 USD con
                  garantía de 10 días.
                </p>
                <Link
                  href="/co/cursos-ia-ninos-colombia"
                  className="inline-flex items-center gap-2 rounded-full bg-[#FCD116] px-6 py-3 font-bold text-[#003893]"
                >
                  Ver Programa Completo <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </section>

            {/* CTA Mid-Article */}
            <section className="mb-16 rounded-2xl bg-gradient-to-br from-[#003893] to-[#001d4a] p-8 text-center text-white">
              <h2 className="mb-4 text-2xl font-bold">¿Listo para que tu hijo aprenda IA?</h2>
              <p className="mb-6 text-white/80">
                Agenda una evaluación gratuita y descubre si InnovaKids es el programa correcto para tu familia.
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href={calendlyLink}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full bg-[#FCD116] px-8 py-4 font-bold text-[#003893]"
                >
                  <Target className="h-5 w-5" />
                  Agendar Evaluación Gratis
                </Link>
                <Link
                  href={whatsappLink}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 font-bold text-white"
                >
                  Consultar por WhatsApp
                </Link>
              </div>
            </section>

            {/* Section 5 - What they'll create */}
            <section className="mb-16">
              <h2 className="mb-6 text-3xl font-bold">Qué Proyecto Real Creará Tu Hijo en el Primer Mes</h2>
              <p className="mb-8 text-muted-foreground">
                Olvida la teoría. En InnovaKids, los peladitos crean proyectos publicables desde la primera semana:
              </p>

              <div className="space-y-6">
                {[
                  {
                    week: "Semana 1-2",
                    project: "Vibe IA & Art",
                    desc: "Chatbots propios con GPT-4 y Comics ilustrados con Midjourney.",
                  },
                  {
                    week: "Semana 3-4",
                    project: "Vibe Music & Voice",
                    desc: "Composición musical con Suno AI y clonación de voz.",
                  },
                  {
                    week: "Semana 5-6",
                    project: "Vibe Coding & Cinema",
                    desc: "Programación de videojuegos y creación de películas con IA.",
                  },
                  {
                    week: "Semana 7-10",
                    project: "Vibe Study & Final Project",
                    desc: "Hackeo de estudio y creación de una Startup o Identidad Digital completa.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 rounded-2xl bg-card p-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FCD116] text-sm font-bold text-[#003893]">
                      {i + 1}
                    </div>
                    <div>
                      <div className="mb-1 text-sm text-muted-foreground">{item.week}</div>
                      <h3 className="mb-2 text-xl font-bold">{item.project}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-16">
              <h2 className="mb-6 text-3xl font-bold">Preguntas Frecuentes</h2>

              <div className="space-y-4">
                {[
                  {
                    q: "¿Necesita mi hijo saber programar?",
                    a: "No. El curso está diseñado para principiantes absolutos. Aprenderán a usar IA sin necesidad de conocimientos previos de programación.",
                  },
                  {
                    q: "¿Qué equipo necesita?",
                    a: "Solo una computadora (Windows o Mac) con conexión a internet estable. No necesita ser una computadora potente.",
                  },
                  {
                    q: "¿Las herramientas de IA tienen costo adicional?",
                    a: "No. El precio del programa incluye acceso a todas las herramientas de IA que usarán durante el curso.",
                  },
                  {
                    q: "¿Qué pasa si mi hijo falta a una clase?",
                    a: "Todas las clases quedan grabadas. Tu hijo puede ver la grabación y ponerse al día antes de la siguiente clase.",
                  },
                ].map((faq, i) => (
                  <div key={i} className="rounded-2xl bg-card p-6">
                    <h3 className="mb-3 text-lg font-bold">{faq.q}</h3>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </article>

        {/* FINAL CTA */}
        <section className="bg-gradient-to-br from-[#003893] to-[#001d4a] py-20">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="mb-4 text-3xl font-bold">¿Listo para dar el siguiente paso?</h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-white/80">
              Agenda una evaluación gratuita y descubre si InnovaKids es el programa correcto para tu hijo.
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href={calendlyLink}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full bg-[#FCD116] px-8 py-4 text-lg font-bold text-[#003893]"
              >
                <Target className="h-5 w-5" />
                Agendar Evaluación Gratis
              </Link>
              <Link
                href="/co/cursos-ia-ninos-colombia"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-lg font-bold text-white"
              >
                Ver Programa Completo
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
                <CheckCircle className="h-4 w-4" /> $267 USD total
              </span>
            </div>
          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h3 className="mb-6 text-xl font-bold">Explora más sobre InnovaKids Colombia</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/co" className="text-primary hover:underline">
                InnovaKids Colombia
              </Link>
              <Link href="/co/cursos-ia-ninos-colombia" className="text-primary hover:underline">
                Cursos IA Niños Colombia
              </Link>
              <Link href="/co/clases-ia-ninos-bogota" className="text-primary hover:underline">
                Clases en Bogotá
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
            "@type": "Article",
            headline: "Cursos de Inteligencia Artificial para Niños en Colombia: Guía Completa 2026",
            author: {
              "@type": "Person",
              name: "Ricardo González",
            },
            publisher: {
              "@type": "Organization",
              name: "InnovaKids",
            },
            datePublished: "2026-01-08",
            dateModified: "2026-01-08",
          }),
        }}
      />
    </>
  )
}
