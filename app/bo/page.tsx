import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, MessageCircle, MapPin } from "lucide-react"
import WhatsAppButton from "@/components/whatsapp-button"
import { CountryProgramSection } from "@/components/country-program-section"

export const metadata: Metadata = {
  title: "Curso de IA para Niños y Adolescentes en Bolivia | Online en Vivo",
  description:
    "Niños y adolescentes bolivianos de 8-17 años crean apps, arte y música con IA. Horario La Paz y Santa Cruz. Máx 5 por grupo. Garantía 10 días.",
  keywords: [
    "curso ia niños bolivia",
    "clases programación ia la paz",
    "taller tecnologia niños santa cruz",
    "innovakids bolivia",
    "vibe coding bolivia",
  ],
  openGraph: {
    title: "Curso de IA para Niños y Adolescentes en Bolivia | InnovaKids",
    description: "La primera escuela de Vibe Coding para niños y adolescentes en Bolivia. Clases en vivo, grupos reducidos.",
    url: "https://www.innovakidslatam.com/bo",
    locale: "es_BO",
    siteName: "InnovaKids Bolivia",
    type: "website",
  },
  alternates: {
    canonical: "https://www.innovakidslatam.com/bo",
  },
}

const ciudades = [
  { nombre: "La Paz", link: "/bo/clases-ia-ninos-la-paz", descripcion: "Sede de gobierno" },
  { nombre: "Santa Cruz", link: "/bo", descripcion: "Ciudad más grande" },
  { nombre: "Cochabamba", link: "/bo", descripcion: "Ciudad jardín" },
  { nombre: "El Alto", link: "/bo", descripcion: "Altiplano" },
  { nombre: "Sucre", link: "/bo", descripcion: "Capital constitucional" },
  { nombre: "Tarija", link: "/bo", descripcion: "Chapaca" },
]

export default function BoliviaHubPage() {
  return (
    <>
      <div className="min-h-screen bg-background">
        <section className="relative py-20 bg-gradient-to-b from-[#007934]/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-[#007934] text-white px-4 py-2">🇧🇴 Bolivia</Badge>

              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
                Curso de IA y Vibe Coding
                <br />
                <span className="text-[#007934]">en Bolivia</span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
                La primera escuela de Vibe Coding para niños de 8-17 años.
                <strong className="text-white"> Clases 100% online</strong> desde cualquier departamento del país.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-[#007934] hover:bg-[#007934]/90 text-white" asChild>
                  <Link href="/booking">
                    Reservar Evaluación GRATIS <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-[#007934] text-[#007934] bg-transparent" asChild>
                  <Link href="https://wa.me/56964754219?text=Hola!%20Quiero%20info%20cursos%20IA%20Bolivia">
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
                  <span>Garantía 10 días.10 Días</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Clases Online desde <span className="text-[#007934]">Cualquier Ciudad</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {ciudades.map((ciudad) => (
                <Link key={ciudad.nombre} href={ciudad.link}>
                  <Card className="hover:border-[#007934] transition-colors cursor-pointer h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-6 w-6 text-[#007934] flex-shrink-0 mt-1" />
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
          countryName="Bolivia"
          primaryColor="#007934"
          secondaryColor="#CE1126"
        />

        <section className="py-20 bg-[#007934]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">¡Prepara a tu Hijo para el Futuro!</h2>
            <Button size="lg" className="bg-white text-[#007934] hover:bg-white/90" asChild>
              <Link href="/booking">
                Reservar Evaluación GRATIS <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        <section className="py-12 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4 max-w-4xl mx-auto">
              <Link href="/bo/cursos-ia-ninos-bolivia" className="text-[#007934] hover:underline">
                Cursos IA Bolivia
              </Link>
              <Link href="/bo/clases-ia-ninos-la-paz" className="text-[#007934] hover:underline">
                Clases La Paz
              </Link>
              <Link href="/pe" className="text-[#007934] hover:underline">
                Perú
              </Link>
              <Link href="/ar" className="text-[#007934] hover:underline">
                Argentina
              </Link>
            </div>
          </div>
        </section>
      </div>

      <WhatsAppButton />
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "InnovaKids Bolivia",
            description: "Escuela de Inteligencia Artificial y Vibe Coding para niños y adolescentes de 8-17 años en Bolivia. Clases online en vivo, máximo 5 alumnos por grupo.",
            url: "https://www.innovakidslatam.com/bo",
            parentOrganization: {
              "@type": "Organization",
              name: "InnovaKids",
              url: "https://www.innovakidslatam.com",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "523",
            },
          }),
        }}
      />
    </>
  )
}
