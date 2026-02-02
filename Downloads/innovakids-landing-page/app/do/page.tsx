import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { MapPin, Users, Clock, Shield, Target } from "lucide-react"

export const metadata: Metadata = {
  title: "Curso de IA para Niños en República Dominicana | Crea Apps",
  description:
    "Niños dominicanos de 8-14 crean arte, música y apps con IA. Horario Santo Domingo. 10 clases en vivo, grupos de 5. Sin requisitos. Garantía ⭐",
  keywords: [
    "curso ia niños republica dominicana",
    "clases programación ia santo domingo",
    "taller tecnologia niños santiago",
    "innovakids republica dominicana",
    "vibe coding republica dominicana",
  ],
  openGraph: {
    title: "Curso de IA para Niños en República Dominicana | InnovaKids",
    description: "527 alumnos graduados. La primera escuela de Vibe Coding en RD. Clases en vivo horario local. Proyectos reales.",
    url: "https://www.innovakidslatam.com/do",
    locale: "es_DO",
    siteName: "InnovaKids República Dominicana",
    type: "website",
  },
  alternates: {
    canonical: "https://www.innovakidslatam.com/do",
  },
}

export default function RepublicaDominicanaHub() {
  const whatsappNumber = "56964754219"
  const whatsappMessage = encodeURIComponent("Hola! Me interesa el curso de IA para niños en República Dominicana.")
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
  const calendlyLink = "https://calendly.com/innovakids/evaluacion"

  const cities = [
    { name: "Santo Domingo", areas: ["Piantini", "Naco", "Gazcue", "Bella Vista", "Los Prados", "Ensanche Ozama"] },
    { name: "Santiago", areas: ["Los Jardines", "Cerros de Gurabo", "Reparto del Este", "Centro"] },
    { name: "Punta Cana", areas: ["Bávaro", "Cap Cana", "Punta Cana Village"] },
    { name: "La Romana", areas: ["La Romana Centro", "Casa de Campo"] },
    { name: "Puerto Plata", areas: ["Puerto Plata Centro", "Playa Dorada", "Sosúa"] },
    { name: "San Pedro de Macorís", areas: ["Centro", "Juan Dolio"] },
  ]

  return (
    <>
      <Navigation />
      <WhatsAppButton />

      <main className="min-h-screen bg-background">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#002D62] via-[#FFFFFF] to-[#CE1126] py-24 md:py-32">
          <div className="absolute inset-0 bg-black/50" />
          <div className="container relative z-10 mx-auto px-4 text-center text-white">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm">
              <span className="text-2xl">🇩🇴</span>
              <span className="font-medium">República Dominicana - Todas las Ciudades</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Curso de IA y Vibe Coding
              <br />
              <span className="text-[#002D62]">en República Dominicana</span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              La primera escuela de Vibe Coding para niños de 8-14 años.
              <strong className="text-white"> Clases 100% online</strong> desde cualquier provincia del país.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href={calendlyLink}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-[#002D62] shadow-2xl transition-all hover:scale-105"
              >
                <Target className="h-5 w-5" />
                Agendar Evaluación GRATIS
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
        </section>

        {/* CITIES GRID */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">Ciudades de RD que Atendemos</h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {cities.map((city) => (
                <div key={city.name} className="rounded-2xl bg-card p-6 transition-all hover:shadow-lg">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#CE1126]/20">
                      <MapPin className="h-6 w-6 text-[#002D62]" />
                    </div>
                    <h3 className="text-xl font-bold">{city.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {city.areas.map((area) => (
                      <span key={area} className="rounded-full bg-muted px-3 py-1 text-sm">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* KEY INFO */}
        <section className="bg-muted/30 py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#CE1126]/20">
                  <Users className="h-8 w-8 text-[#002D62]" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Máximo 5 Niños</h3>
                <p className="text-muted-foreground">Por grupo, atención 100% personalizada</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#CE1126]/20">
                  <Clock className="h-8 w-8 text-[#002D62]" />
                </div>
                <h3 className="mb-2 text-xl font-bold">10 Clases en Vivo</h3>
                <p className="text-muted-foreground">90 minutos cada una, horario RD</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#CE1126]/20">
                  <Shield className="h-8 w-8 text-[#002D62]" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Garantía 10 Días</h3>
                <p className="text-muted-foreground">Devolución completa si no estás satisfecho</p>
              </div>
            </div>
          </div>
        </section>

        {/* RELATED PAGES */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-2xl font-bold">Páginas Relacionadas en RD</h2>
            <div className="flex flex-wrap justify-center gap-4">
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
                href="/do/blog/cursos-inteligencia-artificial-ninos-republica-dominicana-guia"
                className="rounded-full bg-card px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground"
              >
                Guía Completa IA Niños RD
              </Link>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-gradient-to-br from-[#002D62] to-[#001a3d] py-20 md:py-28">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">$197 USD - Programa Completo</h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-white/80">
              10 clases en vivo, grupos de máximo 5 niños, garantía de 10 días
            </p>

            <Link
              href={calendlyLink}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full bg-[#CE1126] px-8 py-4 text-lg font-bold text-white transition-all hover:scale-105"
            >
              Agendar Evaluación Gratuita
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
