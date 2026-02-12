import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Target } from "lucide-react"

export const metadata: Metadata = {
  title: "Cursos de IA para Niños en República Dominicana (Guía 2026)",
  description:
    "Guía Completa: Lo que todo padre dominicano debe saber antes de inscribir a su hijo en un curso de IA. Precios, herramientas, seguridad y mejores opciones.",
  keywords: [
    "guia cursos ia niños republica dominicana",
    "mejores cursos programacion niños republica dominicana",
    "comparativa escuelas ia republica dominicana",
    "consejos padres tecnologia republica dominicana",
  ],
  openGraph: {
    title: "Cursos de IA para Niños en República Dominicana (Guía 2026)",
    description: "Todo lo que necesitas saber para elegir la mejor educación tecnológica para tu hijo en República Dominicana.",
    url: "https://www.innovakidslatam.com/do/blog/cursos-inteligencia-artificial-ninos-republica-dominicana-guia",
    locale: "es_DO",
    type: "article",
    siteName: "Blog InnovaKids República Dominicana",
  },
  alternates: {
    canonical: "https://www.innovakidslatam.com/do/blog/cursos-inteligencia-artificial-ninos-republica-dominicana-guia",
  },
}

export default function BlogCursosIANinosRD() {
  const whatsappNumber = "56964754219"
  const whatsappMessage = encodeURIComponent("Hola! Leí la guía de IA para niños en RD y quiero más información.")
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
  const calendlyLink = "https://calendly.com/innovakids/evaluacion"

  return (
    <>
      <Navigation />
      <WhatsAppButton />

      <main className="min-h-screen bg-background">
        {/* HERO */}
        <section className="bg-gradient-to-br from-[#002D62] to-[#001a3d] py-20 md:py-28">
          <div className="container mx-auto px-4 text-center text-white">
            <div className="mb-4 text-sm font-medium text-[#CE1126]">GUÍA COMPLETA 2026</div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Vibe Coding en Rep. Dominicana: La Guía Completa para Padres 2026
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
              Todo lo que necesitas saber para elegir el mejor curso de IA para tu hijo. ¡Klk!
            </p>
          </div>
        </section>

        {/* CONTENT */}
        <article className="py-16 md:py-24">
          <div className="container mx-auto max-w-3xl px-4">
            <div className="prose prose-lg max-w-none">
              <h2>¿Por Qué Enseñar IA a Niños en República Dominicana?</h2>
              <p>
                República Dominicana está creciendo como hub tecnológico del Caribe. Con zonas francas tecnológicas y
                empresas internacionales estableciéndose en el país, los niños dominicanos que aprendan IA hoy tendrán
                acceso a las mejores oportunidades laborales del futuro.
              </p>

              <h2>¿Qué Aprenden los Niños en un Curso de IA?</h2>
              <ul>
                <li>
                  <strong>Vibe IA (Chatbots):</strong> Asistentes virtuales con GPT-4
                </li>
                <li>
                  <strong>Vibe Art (Storytelling):</strong> Comics e historias ilustradas con Midjourney
                </li>
                <li>
                  <strong>Vibe Music:</strong> Canciones originales compuestas con Suno AI
                </li>
                <li>
                  <strong>Vibe Coding:</strong> Videojuegos y apps reales con Cursor y Replit
                </li>
                <li>
                  <strong>Vibe Cinema:</strong> Producción de video y efectos con Runway
                </li>
                <li>
                  <strong>Vibe Study:</strong> Técnicas de estudio y productividad escolar con IA
                </li>
              </ul>

              <h2>Edad Recomendada</h2>
              <p>
                En InnovaKids trabajamos con niños de 8 a 14 años. Esta es la edad ideal porque ya tienen habilidades de
                lectura desarrolladas y su creatividad está en su punto máximo.
              </p>

              <h2>¿Clases Presenciales o Online?</h2>
              <p>
                Todas nuestras clases son 100% online en vivo. Tu hijo puede participar desde cualquier ciudad: Santo
                Domingo, Santiago, Punta Cana, La Romana, etc.
              </p>
              <p>
                <strong>Próximamente</strong> estaremos organizando talleres presenciales en las principales ciudades de
                RD.
              </p>

              <h2>¿Cuánto Cuesta un Curso de IA para Niños en RD?</h2>
              <p>
                El programa completo de InnovaKids cuesta <strong>$267 USD</strong> e incluye:
              </p>
              <ul>
                <li>10 clases en vivo de 60 minutos cada una</li>
                <li>Grupos de máximo 5 niños</li>
                <li>Acceso a 10+ herramientas de IA profesionales</li>
                <li>Proyectos reales publicables</li>
                <li>Certificado de finalización</li>
                <li>Soporte por WhatsApp</li>
                <li>Garantía 10 días.de 10 días</li>
              </ul>

              <h2>Métodos de Pago en República Dominicana</h2>
              <p>Aceptamos tarjetas de crédito/débito, transferencia bancaria y PayPal. El precio es $267 USD.</p>

              <h2>Testimonios de Familias Dominicanas</h2>
              <blockquote>
                "Mi hijo Carlos creó su primera app en un mes. ¡Qué lo qué! Los profesores son excelentes y los grupos
                pequeños hacen toda la diferencia."
                <footer>— María Rodríguez, Piantini</footer>
              </blockquote>
            </div>

            {/* CTA BOX */}
            <div className="mt-16 rounded-3xl bg-gradient-to-br from-[#002D62] to-[#001a3d] p-8 text-center text-white">
              <h2 className="text-3xl font-bold text-white mb-6">¿Qué es el Vibe Coding y Por Qué Aprenderlo?</h2>
              <p className="text-gray-300 mb-6">
                El **Vibe Coding** es escribir código usando lenguaje natural y asistido por Inteligencia Artificial.
                Ya no hace falta memorizar sintaxis compleja. Hoy, un niño en República Dominicana puede decirle a la IA:
                "Crea un juego de naves espaciales", y la IA genera el código base.
              </p>
              <p className="text-gray-300 mb-6">
                En República Dominicana, la demanda de perfiles tecnológicos sigue creciendo, y el Vibe Coding es la habilidad del futuro.
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href={calendlyLink}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full bg-[#CE1126] px-8 py-4 text-lg font-bold text-white transition-all hover:scale-105"
                >
                  <Target className="h-5 w-5" />
                  Agendar Evaluación Gratuita
                </Link>
                <Link
                  href={whatsappLink}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white hover:text-[#002D62]"
                >
                  Consultar por WhatsApp
                </Link>
              </div>
            </div>

            {/* RELATED LINKS */}
            <div className="mt-12">
              <h3 className="mb-4 text-xl font-bold">Artículos Relacionados</h3>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/do/cursos-ia-ninos-republica-dominicana"
                  className="rounded-full bg-card px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground"
                >
                  Cursos IA Niños RD
                </Link>
                <Link
                  href="/do/clases-ia-ninos-santo-domingo"
                  className="rounded-full bg-card px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground"
                >
                  Clases IA Santo Domingo
                </Link>
                <Link
                  href="/do"
                  className="rounded-full bg-card px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground"
                >
                  Todas las Ciudades
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  )
}
