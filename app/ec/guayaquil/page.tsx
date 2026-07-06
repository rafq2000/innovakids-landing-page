import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle, Target, ArrowRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"

const city = "Guayaquil"
const countryCode = "ec"
const priceDisplay = "$297 USD"
const reservationDisplay = "$27 USD"

export const metadata: Metadata = {
  title: "Curso de IA para Niños en Guayaquil | InnovaKids",
  description:
    "Tu hijo en Guayaquil crea apps, videojuegos y proyectos reales con IA. Clases en vivo, máx 5 alumnos (8-17 años). Cerca de ESPOL y Puerto Hacker. 1.ª clase gratis.",
  alternates: {
    canonical: `https://www.innovakidslatam.com/${countryCode}/guayaquil`,
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Curso de IA para Niños en Guayaquil | InnovaKids",
    description:
      "Niños y adolescentes en Guayaquil aprenden a crear tecnología real con IA. Grupos reducidos, clases en vivo.",
    url: `https://www.innovakidslatam.com/${countryCode}/guayaquil`,
    type: "website",
    locale: "es_EC",
    siteName: "InnovaKids",
    images: [
      {
        url: "https://www.innovakidslatam.com/hero-child-learning-ai.jpg",
        width: 1200,
        height: 630,
        alt: "Curso de IA para Niños en Guayaquil - InnovaKids",
      },
    ],
  },
}

export default function GuayaquilPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[var(--paper)] text-[#2F2F2C]">
        {/* Hero */}
        <section className="relative py-20 md:py-28 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-[#C96342]/10 text-[#B5522F] text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              Guayaquil, Ecuador
            </span>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              Curso de Inteligencia Artificial para Niños en{" "}
              <span className="text-[#B5522F]">Guayaquil</span>
            </h1>
            <p className="text-lg md:text-xl text-[#5A5751] max-w-2xl mx-auto mb-8">
              Guayaquil es el motor económico del Ecuador y hogar de ESPOL y Puerto Hacker,
              el hub de innovación del puerto principal. Tus hijos aprenden a crear apps,
              videojuegos y arte con IA en clases 100&nbsp;% online y en vivo, perfectas para
              el régimen Costa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/clase-gratis"
                className="inline-flex items-center justify-center gap-2 bg-[#C96342] hover:bg-[#B5522F] text-white font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Reservar clase gratis <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://wa.me/56964754219?text=Hola%2C%20quiero%20info%20del%20curso%20de%20IA%20para%20mi%20hijo%20en%20Guayaquil"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-[#C96342]/20 text-[#B5522F] hover:bg-[#C96342]/10 font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Hablar por WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Por qué Guayaquil */}
        <section className="py-16 px-4 bg-[#2F2F2C]/[0.04]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
              ¿Por qué familias en Guayaquil eligen InnovaKids?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Ecosistema ESPOL & Puerto Hacker",
                  text: "Guayaquil lidera la innovación en la costa ecuatoriana. Nuestro curso conecta a tus hijos con el mismo espíritu emprendedor que impulsa ESPOL y Puerto Hacker.",
                },
                {
                  title: "Horarios régimen Costa",
                  text: "Clases compatibles con el calendario escolar Costa. Aprovecha las tardes o los fines de semana sin afectar el rendimiento escolar.",
                },
                {
                  title: "Grupos de máx. 5 alumnos",
                  text: "Atención personalizada en cada sesión en vivo. El profesor conoce el ritmo y los intereses de tu hijo.",
                },
                {
                  title: "Proyectos que se ven y se tocan",
                  text: "En 5 semanas crean apps funcionales, videojuegos, arte con IA y chatbots. Ideal para presentar en ferias tecnológicas de Guayaquil.",
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
              Inversión para familias en Guayaquil
            </h2>
            <p className="text-[#5A5751] mb-2">
              Ecuador usa dólar: pagas directo sin conversión ni recargos.
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
                href="https://wa.me/56964754219?text=Hola%2C%20quiero%20inscribir%20a%20mi%20hijo%20en%20Guayaquil"
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
              <Link href="/ec" className="text-[#B5522F] hover:underline">
                InnovaKids Ecuador
              </Link>{" "}
              ·{" "}
              <Link href="/ec/quito" className="text-[#B5522F] hover:underline">
                Curso IA Quito
              </Link>{" "}
              ·{" "}
              <Link href="/blog" className="text-[#B5522F] hover:underline">
                Blog
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
