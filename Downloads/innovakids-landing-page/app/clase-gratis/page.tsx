import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { CalendlySection } from "@/components/calendly-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, CheckCircle2, Clock, Video, Users, Star } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Clase Gratis de IA para Ninos — Agenda Tu Sesion Diagnostica | InnovaKids",
  description:
    "Agenda una sesion diagnostica gratuita de 20 minutos para tu hijo. Descubre su potencial con Inteligencia Artificial. Sin costo, sin compromiso. Cupos limitados.",
  keywords:
    "clase gratis ia ninos, sesion diagnostica innovakids, prueba gratis curso ia, clase prueba inteligencia artificial ninos",
  openGraph: {
    title: "Clase Gratis de IA para Ninos | InnovaKids",
    description:
      "Sesion diagnostica gratuita de 20 min. Descubre el potencial de tu hijo con IA. Sin costo, sin compromiso.",
    type: "website",
    url: "https://www.innovakidslatam.com/clase-gratis",
    images: [
      {
        url: "https://www.innovakidslatam.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "InnovaKids - Clase Gratis de IA para Ninos",
      },
    ],
  },
  alternates: {
    canonical: "https://www.innovakidslatam.com/clase-gratis",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Sesion Diagnostica Gratuita - Curso de IA para Ninos | InnovaKids",
  description:
    "Sesion diagnostica gratuita de 20 minutos para evaluar el potencial de tu hijo con Inteligencia Artificial. Incluye demostracion en vivo y plan personalizado.",
  eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "VirtualLocation",
    url: "https://www.innovakidslatam.com/clase-gratis",
  },
  organizer: {
    "@type": "Organization",
    name: "InnovaKids",
    url: "https://www.innovakidslatam.com",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/LimitedAvailability",
    url: "https://www.innovakidslatam.com/clase-gratis",
    validFrom: "2026-01-01",
  },
  performer: {
    "@type": "Organization",
    name: "InnovaKids",
  },
  image: "https://www.innovakidslatam.com/og-image.png",
  isAccessibleForFree: true,
}

export default function ClaseGratisPage() {
  return (
    <>
      <Navigation />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-background pt-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <Link href="/">
            <Button variant="ghost" className="text-white hover:text-[#4DD0E1] mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al inicio
            </Button>
          </Link>

          {/* Hero */}
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-5 py-2 mb-6">
              <span className="text-green-400 font-semibold text-sm uppercase tracking-wide">
                100% Gratis - Cupos Limitados
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Agenda una{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Sesion Diagnostica Gratuita
              </span>
              <br />
              para tu Hijo
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              En solo 20 minutos descubriras como tu hijo puede aprender Inteligencia Artificial
              de forma practica y divertida. Sin costo. Sin compromiso.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                Que incluye tu sesion gratuita?
              </h2>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#4DD0E1] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-bold mb-1">Demostracion de IA en vivo</h3>
                    <p className="text-gray-300 text-sm">
                      Tu hijo experimentara como funcionan las herramientas de IA de forma practica
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#4DD0E1] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-bold mb-1">Evaluacion personalizada</h3>
                    <p className="text-gray-300 text-sm">
                      Analizamos el nivel e intereses de tu hijo y recomendamos el mejor camino de aprendizaje
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#4DD0E1] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-bold mb-1">Reunion informativa para padres</h3>
                    <p className="text-gray-300 text-sm">
                      Conoce el programa completo, metodologia y beneficios del curso
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#4DD0E1] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-bold mb-1">Resolucion de todas tus dudas</h3>
                    <p className="text-gray-300 text-sm">
                      Responderemos todas tus preguntas sobre horarios, precios y metodologia
                    </p>
                  </div>
                </div>
              </div>

              {/* Info Cards */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <Card className="bg-[#1a2942] border-[#2a3952]">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <Clock className="w-5 h-5 text-[#4DD0E1]" />
                      <h3 className="text-white font-bold text-sm">Duracion</h3>
                    </div>
                    <p className="text-gray-300 text-sm">20 minutos</p>
                  </CardContent>
                </Card>

                <Card className="bg-[#1a2942] border-[#2a3952]">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <Video className="w-5 h-5 text-[#4DD0E1]" />
                      <h3 className="text-white font-bold text-sm">Modalidad</h3>
                    </div>
                    <p className="text-gray-300 text-sm">100% Online via Zoom</p>
                  </CardContent>
                </Card>

                <Card className="bg-[#1a2942] border-[#2a3952]">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <Users className="w-5 h-5 text-[#4DD0E1]" />
                      <h3 className="text-white font-bold text-sm">Edades</h3>
                    </div>
                    <p className="text-gray-300 text-sm">8 a 14 anos</p>
                  </CardContent>
                </Card>

                <Card className="bg-[#1a2942] border-[#2a3952]">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <Star className="w-5 h-5 text-[#4DD0E1]" />
                      <h3 className="text-white font-bold text-sm">Precio</h3>
                    </div>
                    <p className="text-gray-300 text-sm">$0 - Totalmente gratis</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Social Proof */}
            <div>
              <Card className="bg-gradient-to-br from-[#1a2942] to-[#0f1f3a] border-[#4DD0E1]/20 mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4 text-center">
                    Lo que dicen los padres
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-[#0a1628]/50 p-4 rounded-lg border border-[#2a3952]">
                      <p className="text-gray-300 text-sm italic mb-2">
                        &quot;Mi hijo quedo fascinado con la sesion. En 20 minutos ya queria inscribirse al curso completo.&quot;
                      </p>
                      <p className="text-[#4DD0E1] text-xs font-semibold">- Carolina M., Chile</p>
                    </div>
                    <div className="bg-[#0a1628]/50 p-4 rounded-lg border border-[#2a3952]">
                      <p className="text-gray-300 text-sm italic mb-2">
                        &quot;Excelente la evaluacion. Nos dieron un plan personalizado para mi hija de 10 anos.&quot;
                      </p>
                      <p className="text-[#4DD0E1] text-xs font-semibold">- Roberto P., Mexico</p>
                    </div>
                    <div className="bg-[#0a1628]/50 p-4 rounded-lg border border-[#2a3952]">
                      <p className="text-gray-300 text-sm italic mb-2">
                        &quot;Sin presion de venta, super profesionales. Recomendadisimo.&quot;
                      </p>
                      <p className="text-[#4DD0E1] text-xs font-semibold">- Lucia G., Colombia</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-[#4DD0E1]/10 border border-[#4DD0E1]/30 rounded-xl p-5">
                <p className="text-sm text-gray-300 text-center">
                  <strong className="text-white">+527 familias</strong> ya confiaron en InnovaKids.
                  <br />
                  Agenda hoy y asegura tu cupo.
                </p>
              </div>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <Card className="bg-gradient-to-r from-[#4DD0E1]/20 to-[#00BCD4]/20 border-[#4DD0E1]/30 mb-8">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Prefieres hablar directamente con nosotros?
              </h2>
              <p className="text-gray-300 mb-6">
                Contactanos por WhatsApp y agendamos tu sesion personalizada
              </p>
              <a
                href="https://wa.me/56964754219?text=Hola,%20quiero%20agendar%20una%20sesi%C3%B3n%20diagn%C3%B3stica%20gratuita%20para%20mi%20hijo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-8 py-6 text-lg font-bold">
                  CONTACTAR POR WHATSAPP
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>

        {/* Calendly Booking Section */}
        <CalendlySection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
