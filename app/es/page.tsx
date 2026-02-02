import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { MapPin, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Curso de IA para Niños en España | Crea Apps y Videojuegos",
  description:
    "Niños en España de 8-14 crean arte, música y apps con IA. Horario Madrid, pago en Euros. 10 clases en vivo, grupos de 5. Sin requisitos. Garantía ⭐",
  keywords: [
    "curso ia niños españa",
    "clases programación ia madrid",
    "taller tecnologia niños barcelona",
    "innovakids españa",
    "vibe coding españa",
  ],
  alternates: {
    canonical: "https://www.innovakidslatam.com/es",
  },
  openGraph: {
    title: "Curso de IA para Niños en España | InnovaKids",
    description: "527 alumnos graduados. La primera escuela de Vibe Coding en España. Clases en vivo horario Madrid/Barcelona. Proyectos reales.",
    url: "https://www.innovakidslatam.com/es",
    locale: "es_ES",
    siteName: "InnovaKids España",
    type: "website",
  },
}

export default function EspanaHub() {
  const whatsappNumber = "56964754219"
  const whatsappMessage = encodeURIComponent(
    "¡Hola! Me interesa el curso de IA para niños en España. Me gustaría más información.",
  )
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  const ciudades = [
    { nombre: "Madrid", comunidad: "Comunidad de Madrid", destacada: true },
    { nombre: "Barcelona", comunidad: "Cataluña", destacada: true },
    { nombre: "Valencia", comunidad: "Comunidad Valenciana", destacada: true },
    { nombre: "Sevilla", comunidad: "Andalucía", destacada: false },
    { nombre: "Bilbao", comunidad: "País Vasco", destacada: false },
    { nombre: "Málaga", comunidad: "Andalucía", destacada: false },
    { nombre: "Zaragoza", comunidad: "Aragón", destacada: false },
    { nombre: "Murcia", comunidad: "Región de Murcia", destacada: false },
    { nombre: "Palma de Mallorca", comunidad: "Islas Baleares", destacada: false },
    { nombre: "Las Palmas", comunidad: "Canarias", destacada: false },
    { nombre: "Alicante", comunidad: "Comunidad Valenciana", destacada: false },
    { nombre: "Córdoba", comunidad: "Andalucía", destacada: false },
  ]

  return (
    <>
      <Navigation />
      <WhatsAppButton />

      <main className="min-h-screen bg-background">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#C60B1E] via-[#FFC400] to-[#C60B1E] py-20 md:py-28">
          <div className="absolute inset-0 bg-black/30" />
          <div className="container relative z-10 mx-auto px-4 text-center text-white">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm">
              <span className="text-2xl">🇪🇸</span>
              <span className="font-medium">España</span>
            </div>

            <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
              Escuela de Inteligencia Artificial y Vibe Coding en España
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90">
              100% online en vivo. Tu hijo puede participar desde Madrid, Barcelona, Valencia, Sevilla o cualquier
              ciudad de España.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/es/cursos-ia-ninos-espana"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-[#C60B1E] shadow-2xl transition-all hover:scale-105"
              >
                Ver Programa Completo
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* CIUDADES */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
              Clases de IA para Niños en Todas las Ciudades
            </h2>
            <p className="mx-auto mb-16 max-w-2xl text-center text-muted-foreground">
              100% online en vivo. No importa dónde estés en España, tu hijo puede participar.
            </p>

            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
              {ciudades.map((ciudad, i) => (
                <div
                  key={i}
                  className={`rounded-2xl p-6 transition-all hover:shadow-lg ${ciudad.destacada
                    ? "bg-gradient-to-br from-[#C60B1E]/10 to-[#FFC400]/10 border-2 border-[#C60B1E]/20"
                    : "bg-card"
                    }`}
                >
                  <div className="mb-2 flex items-center gap-2">
                    <MapPin className={`h-5 w-5 ${ciudad.destacada ? "text-[#C60B1E]" : "text-muted-foreground"}`} />
                    <h3 className="font-bold">{ciudad.nombre}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{ciudad.comunidad}</p>
                  {ciudad.destacada && (
                    <span className="mt-2 inline-block rounded-full bg-[#C60B1E]/20 px-2 py-1 text-xs font-medium text-[#C60B1E]">
                      Alta demanda
                    </span>
                  )}
                </div>
              ))}
            </div>

            <p className="mt-8 text-center text-muted-foreground">
              ¿No ves tu ciudad? No importa. Nuestras clases son 100% online y puedes participar desde cualquier lugar
              de España.
            </p>
          </div>
        </section>

        {/* PROGRAMA RESUMEN */}
        <section className="bg-muted/30 py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold">¿Qué Incluye el Programa?</h2>

            <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
              {[
                { stat: "10", label: "Clases en vivo", desc: "90 minutos cada una" },
                { stat: "5", label: "Niños máximo", desc: "Por grupo" },
                { stat: "$267", label: "USD", desc: "Precio total del programa" },
                { stat: "10", label: "Días de garantía", desc: "Devolución sin preguntas" },
              ].map((item, i) => (
                <div key={i} className="rounded-2xl bg-card p-6 text-center">
                  <div className="text-4xl font-bold text-[#C60B1E]">{item.stat}</div>
                  <div className="font-semibold">{item.label}</div>
                  <div className="text-sm text-muted-foreground">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold">Explora InnovaKids España</h2>

            <div className="grid gap-6 md:grid-cols-3">
              <Link
                href="/es/cursos-ia-ninos-espana"
                className="group rounded-2xl bg-card p-6 transition-all hover:shadow-lg"
              >
                <h3 className="mb-2 text-xl font-bold group-hover:text-[#C60B1E]">Cursos de IA para Niños</h3>
                <p className="text-muted-foreground">Programa completo de 10 clases para niños 8-14 años</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#C60B1E]">
                  Ver más <ArrowRight className="h-4 w-4" />
                </span>
              </Link>

              <Link
                href="/es/clases-ia-ninos-madrid"
                className="group rounded-2xl bg-card p-6 transition-all hover:shadow-lg"
              >
                <h3 className="mb-2 text-xl font-bold group-hover:text-[#C60B1E]">Clases IA Madrid</h3>
                <p className="text-muted-foreground">Información específica para familias en la capital</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#C60B1E]">
                  Ver más <ArrowRight className="h-4 w-4" />
                </span>
              </Link>

              <Link
                href="/es/blog/cursos-inteligencia-artificial-ninos-espana-guia"
                className="group rounded-2xl bg-card p-6 transition-all hover:shadow-lg"
              >
                <h3 className="mb-2 text-xl font-bold group-hover:text-[#C60B1E]">Guía Completa</h3>
                <p className="text-muted-foreground">Todo lo que necesitas saber sobre IA para niños en España</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#C60B1E]">
                  Leer guía <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="bg-gradient-to-br from-[#C60B1E] to-[#8B0000] py-20">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">¿Listo para Empezar?</h2>
            <p className="mx-auto mb-10 max-w-2xl text-white/80">
              Agenda una evaluación gratuita y descubre si InnovaKids es ideal para tu hijo.
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="https://calendly.com/innovakids/evaluacion"
                target="_blank"
                className="rounded-full bg-white px-8 py-4 text-lg font-bold text-[#C60B1E] transition-all hover:scale-105"
              >
                Agendar Evaluación GRATIS
              </Link>
              <Link
                href={whatsappLink}
                target="_blank"
                className="rounded-full border-2 border-white px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white hover:text-[#C60B1E]"
              >
                Consultar por WhatsApp
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
