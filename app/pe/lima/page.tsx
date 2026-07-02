import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle, Target, ArrowRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"

const city = "Lima"
const countryCode = "pe"
const priceDisplay = "$267 USD (aprox. S/ 1.000 PEN)"
const reservationDisplay = "$27 USD (aprox. S/ 100)"

export const metadata: Metadata = {
  title: "Curso de IA para Niños en Lima | InnovaKids",
  description:
    "Tu hijo en Lima crea apps, videojuegos y proyectos reales con IA. Clases en vivo, máx 5 alumnos (8-17 años). Cerca de la PUCP, UPC y San Isidro tech hub. 1.ª clase gratis.",
  alternates: {
    canonical: `https://www.innovakidslatam.com/${countryCode}/lima`,
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Curso de IA para Niños en Lima | InnovaKids",
    description:
      "Niños y adolescentes en Lima aprenden a crear tecnología real con IA. Grupos reducidos, clases en vivo.",
    url: `https://www.innovakidslatam.com/${countryCode}/lima`,
    type: "website",
    locale: "es_PE",
    siteName: "InnovaKids",
    images: [
      {
        url: "https://www.innovakidslatam.com/hero-child-learning-ai.jpg",
        width: 1200,
        height: 630,
        alt: "Curso de IA para Niños en Lima - InnovaKids",
      },
    ],
  },
}

export default function LimaPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[var(--paper)] text-[#2F2F2C]">
        {/* Hero */}
        <section className="relative py-20 md:py-28 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-[#C96342]/10 text-[#B5522F] text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              Lima, Perú
            </span>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              Curso de Inteligencia Artificial para Niños en{" "}
              <span className="text-[#B5522F]">Lima</span>
            </h1>
            <p className="text-lg md:text-xl text-[#5A5751] max-w-2xl mx-auto mb-8">
              Lima es el corazón tecnológico del Perú: la PUCP, la UPC y el hub tech de
              San Isidro concentran el ecosistema de innovación más grande del país. Tus
              hijos aprenden a crear apps, videojuegos y arte con IA en clases 100&nbsp;%
              online y en vivo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/clase-gratis"
                className="inline-flex items-center justify-center gap-2 bg-[#C96342] hover:bg-[#B5522F] text-white font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Reservar clase gratis <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://wa.me/56964754219?text=Hola%2C%20quiero%20info%20del%20curso%20de%20IA%20para%20mi%20hijo%20en%20Lima"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-[#C96342]/20 text-[#B5522F] hover:bg-[#C96342]/10 font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Hablar por WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Por qué Lima */}
        <section className="py-16 px-4 bg-[#2F2F2C]/[0.04]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
              ¿Por qué familias en Lima eligen InnovaKids?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Ecosistema PUCP, UPC y San Isidro",
                  text: "Lima concentra las mejores universidades y startups del Perú. Nuestro curso acerca a tus hijos a ese ecosistema de innovación desde los 8 años.",
                },
                {
                  title: "100 % online, sin tráfico limeño",
                  text: "Clases en vivo por Zoom: tu hijo aprende desde Miraflores, Los Olivos, Surco o cualquier distrito sin perder tiempo en el tráfico.",
                },
                {
                  title: "Grupos de máx. 5 alumnos",
                  text: "Atención personalizada real. El profesor conoce a cada alumno por nombre, ritmo e intereses.",
                },
                {
                  title: "Proyectos reales en 5 semanas",
                  text: "Crean apps funcionales, videojuegos, arte con IA y chatbots. Proyectos ideales para ferias escolares y portafolios.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-[#2F2F2C]/5 border border-[#C96342]/20 rounded-xl p-6"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#B5522F] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                      <p className="text-[#5A5751] text-sm">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Qué aprenden */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Qué aprende tu hijo en el curso?
            </h2>
            <p className="text-[#5A5751] mb-10 max-w-2xl mx-auto">
              Programa Vibe Explorer: 10 clases en vivo de 60 min. Para niños y adolescentes
              de 8 a 17 años.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
              {[
                "Crear apps con prompts de IA",
                "Diseñar videojuegos desde cero",
                "Generar arte e imágenes con IA",
                "Construir chatbots inteligentes",
                "Vibe Coding: programar conversando",
                "Pensamiento computacional y lógica",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 bg-[#2F2F2C]/5 rounded-lg p-4"
                >
                  <Target className="w-5 h-5 text-[#B5522F] flex-shrink-0" />
                  <span className="text-sm text-[#5A5751]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Precio y CTA */}
        <section className="py-16 px-4 bg-[#2F2F2C]/[0.04]">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Inversión para familias en Lima
            </h2>
            <p className="text-[#5A5751] mb-2">
              Paga con tarjeta, Yape o PayPal. Sin recargos ocultos.
            </p>
            <p className="text-4xl font-bold text-[#B5522F] mb-2">{priceDisplay}</p>
            <p className="text-[#5A5751] text-sm mb-6">
              Reserva tu cupo con solo {reservationDisplay}. Prueba 2 clases y, si no te
              convence, te devolvemos el 100&nbsp;%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/clase-gratis"
                className="inline-flex items-center justify-center gap-2 bg-[#C96342] hover:bg-[#B5522F] text-white font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Agendar clase gratis <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://wa.me/56964754219?text=Hola%2C%20quiero%20inscribir%20a%20mi%20hijo%20en%20Lima"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-[#C96342]/20 text-[#B5522F] hover:bg-[#C96342]/10 font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Consultar por WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Links internos */}
        <section className="py-12 px-4">
          <div className="max-w-2xl mx-auto text-center text-sm text-[#5A5751]">
            <p>
              <Link href="/pe" className="text-[#B5522F] hover:underline">
                InnovaKids Perú
              </Link>{" "}
              ·{" "}
              <Link href="/pe/arequipa" className="text-[#B5522F] hover:underline">
                Curso IA Arequipa
              </Link>{" "}
              ·{" "}
              <Link
                href="/pe/blog/cursos-inteligencia-artificial-ninos-peru-guia"
                className="text-[#B5522F] hover:underline"
              >
                Blog Perú
              </Link>
            </p>
          </div>
        </section>
        <Footer />
      </main>
      <WhatsAppButton />
    </>
  )
}
