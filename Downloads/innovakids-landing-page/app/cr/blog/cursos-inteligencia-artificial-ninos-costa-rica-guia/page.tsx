import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Target } from "lucide-react"

export const metadata: Metadata = {
  title: "Cursos de IA para Niños en Costa Rica (Guía 2026)",
  description:
    "Guía Completa: Lo que todo padre tico debe saber antes de inscribir a su hijo en un curso de IA. Precios, herramientas, seguridad y mejores opciones.",
  keywords: [
    "guia cursos ia niños costa rica",
    "mejores cursos programacion niños costa rica",
    "comparativa escuelas ia costa rica",
    "consejos padres tecnologia costa rica",
  ],
  openGraph: {
    title: "Cursos de IA para Niños en Costa Rica (Guía 2026)",
    description: "Todo lo que necesitas saber para elegir la mejor educación tecnológica para tu hijo en Costa Rica.",
    url: "https://www.innovakidslatam.com/cr/blog/cursos-inteligencia-artificial-ninos-costa-rica-guia",
    locale: "es_CR",
    type: "article",
    siteName: "Blog InnovaKids Costa Rica",
  },
  alternates: {
    canonical: "https://www.innovakidslatam.com/cr/blog/cursos-inteligencia-artificial-ninos-costa-rica-guia",
  },
}
export default function BlogCursosIANinosCostaRica() {
  const whatsappNumber = "56964754219"
  const whatsappMessage = encodeURIComponent(
    "Hola! Leí la guía de IA para niños en Costa Rica y quiero más información.",
  )
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
  const calendlyLink = "https://calendly.com/innovakids/evaluacion"

  return (
    <>
      <Navigation />
      <WhatsAppButton />

      <main className="min-h-screen bg-background">
        {/* HERO */}
        <section className="bg-gradient-to-br from-[#002B7F] to-[#001a4d] py-20 md:py-28">
          <div className="container mx-auto px-4 text-center text-white">
            <div className="mb-4 text-sm font-medium text-[#CE1126]">GUÍA COMPLETA 2026</div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Vibe Coding en Costa Rica: La Guía Completa para Padres 2026
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
              Todo lo que necesitas saber para elegir el mejor curso de IA para tu hijo. ¡Pura vida!
            </p>
          </div>
        </section>

        {/* CONTENT */}
        <article className="py-16 md:py-24">
          <div className="container mx-auto max-w-3xl px-4">
            <div className="prose prose-lg max-w-none">
              <h2>¿Por Qué Enseñar IA a Niños en Costa Rica?</h2>
              <p>
                Costa Rica es líder en desarrollo sostenible y tecnología en Centroamérica. Con empresas como Intel,
                Amazon y Microsoft operando en el país, los niños ticos que aprendan IA hoy tendrán acceso a las mejores
                oportunidades laborales del futuro.
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
                Todas nuestras clases son 100% online en vivo. Tu hijo puede participar desde cualquier provincia: San
                José, Heredia, Alajuela, Cartago, Guanacaste, etc.
              </p>
              <p>
                <strong>Próximamente</strong> estaremos organizando talleres presenciales en las principales ciudades de
                Costa Rica.
              </p>

              <h2>¿Cuánto Cuesta un Curso de IA para Niños en Costa Rica?</h2>
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
                <li>Garantía de 10 días</li>
              </ul>

              <h2>Métodos de Pago en Costa Rica</h2>
              <p>
                Aceptamos tarjetas de crédito/débito, SINPE Móvil y PayPal. Todas las opciones son seguras y el precio
                es $267 USD.
              </p>

              <h2>Testimonios de Familias Ticas</h2>
              <blockquote>
                "Mi hijo Mateo creó su primera app en un mes. ¡Pura vida! Los profes son tuanis y el contenido está muy
                actualizado. Los grupos pequeños hacen toda la diferencia."
                <footer>— Carolina Jiménez, Escazú</footer>
              </blockquote>
            </div>

            {/* CTA BOX */}
            <div className="mt-16 rounded-3xl bg-gradient-to-br from-[#002B7F] to-[#001a4d] p-8 text-center text-white">
              <h2 className="text-3xl font-bold text-white mb-6">¿Qué es el Vibe Coding y Por Qué Aprenderlo?</h2>
              <p className="text-gray-300 mb-6">
                El **Vibe Coding** es escribir código usando lenguaje natural y asistido por Inteligencia Artificial.
                Ya no hace falta memorizar sintaxis compleja. Hoy, un niño en Costa Rica puede decirle a la IA:
                "Crea un juego de naves espaciales", y la IA genera el código base.
              </p>
              <p className="text-gray-300 mb-6">
                En Costa Rica, conocida por su talento tecnológico, el Vibe Coding es la habilidad del futuro.
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
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white hover:text-[#002B7F]"
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
                  href="/cr/cursos-ia-ninos-costa-rica"
                  className="rounded-full bg-card px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground"
                >
                  Cursos IA Niños Costa Rica
                </Link>
                <Link
                  href="/cr/clases-ia-ninos-san-jose"
                  className="rounded-full bg-card px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground"
                >
                  Clases IA San José
                </Link>
                <Link
                  href="/cr"
                  className="rounded-full bg-card px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground"
                >
                  Todas las Provincias
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  )
}
