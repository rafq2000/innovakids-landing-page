import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, MessageCircle, MapPin } from "lucide-react"
import WhatsAppButton from "@/components/whatsapp-button"
import { CountryProgramSection } from "@/components/country-program-section"

export const metadata: Metadata = {
  title: "Curso de IA para Niños en Ecuador | Crea Apps y Videojuegos",
  description:
    "Niños ecuatorianos de 8-14 crean arte, música y apps con IA. Horario Quito, pago con Transferencia. 10 clases en vivo, grupos de 5. Sin requisitos. Garantía ⭐",
  keywords: [
    "curso ia niños ecuador",
    "clases programación ia quito",
    "taller tecnologia niños guayaquil",
    "innovakids ecuador",
    "vibe coding ecuador",
  ],
  openGraph: {
    title: "Curso de IA para Niños en Ecuador | InnovaKids",
    description: "527 alumnos graduados. La primera escuela de Vibe Coding en Ecuador. Clases en vivo horario Quito. Proyectos reales.",
    url: "https://www.innovakidslatam.com/ec",
    locale: "es_EC",
    siteName: "InnovaKids Ecuador",
    type: "website",
  },
  alternates: {
    canonical: "https://www.innovakidslatam.com/ec",
  },
}

const ciudades = [
  { nombre: "Quito", link: "/ec/clases-ia-ninos-quito", descripcion: "Capital" },
  { nombre: "Guayaquil", link: "/ec", descripcion: "Costa" },
  { nombre: "Cuenca", link: "/ec", descripcion: "Sierra sur" },
  { nombre: "Santo Domingo", link: "/ec", descripcion: "Tsáchilas" },
  { nombre: "Machala", link: "/ec", descripcion: "El Oro" },
  { nombre: "Manta", link: "/ec", descripcion: "Manabí" },
]

export default function EcuadorHubPage() {
  return (
    <>
      <div className="min-h-screen bg-background">
        <section className="relative py-20 bg-gradient-to-b from-[#FFD100]/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-[#0033A0] text-white px-4 py-2">🇪🇨 Ecuador</Badge>

              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
                Curso de IA y Vibe Coding
                <br />
                <span className="text-[#FFCD00]">en Ecuador</span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
                La primera escuela de Vibe Coding para niños de 8-14 años.
                <strong className="text-white"> Clases 100% online</strong> desde cualquier provincia del país.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-[#0033A0] hover:bg-[#0033A0]/90 text-white" asChild>
                  <Link href="/booking">
                    Reservar Evaluación GRATIS <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-[#0033A0] text-[#0033A0] bg-transparent" asChild>
                  <Link href="https://wa.me/56964754219?text=Hola!%20Quiero%20info%20cursos%20IA%20Ecuador">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp
                  </Link>
                </Button>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-full">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>$267 USD - 10 Clases</span>
                </div>
                <div className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-full">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Máx 5 Niños/Grupo</span>
                </div>
                <div className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-full">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Garantía 10 Días</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Clases Online desde <span className="text-[#0033A0]">Cualquier Ciudad</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {ciudades.map((ciudad) => (
                <Link key={ciudad.nombre} href={ciudad.link}>
                  <Card className="hover:border-[#0033A0] transition-colors cursor-pointer h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-6 w-6 text-[#0033A0] flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-xl font-bold">{ciudad.nombre}</h3>
                          <p className="text-muted-foreground">{ciudad.descripcion}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* PROGRAMA COMPLETO - HORMOZI */}
        <CountryProgramSection
          countryName="Ecuador"
          primaryColor="#0033A0"
          secondaryColor="#FFCD00"
        />

        <section className="py-20 bg-[#0033A0]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">¡Prepara a tu Hijo para el Futuro!</h2>
            <Button size="lg" className="bg-white text-[#0033A0] hover:bg-white/90" asChild>
              <Link href="/booking">
                Reservar Evaluación GRATIS <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        <section className="py-12 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4 max-w-4xl mx-auto">
              <Link href="/ec/cursos-ia-ninos-ecuador" className="text-[#0033A0] hover:underline">
                Cursos IA Ecuador
              </Link>
              <Link href="/ec/clases-ia-ninos-quito" className="text-[#0033A0] hover:underline">
                Clases Quito
              </Link>
              <Link href="/co" className="text-[#0033A0] hover:underline">
                Colombia
              </Link>
              <Link href="/pe" className="text-[#0033A0] hover:underline">
                Perú
              </Link>
            </div>
          </div>
        </section>
      </div>

      <WhatsAppButton />
    </>
  )
}
