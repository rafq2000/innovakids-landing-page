import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, Shield, ArrowRight, MessageCircle, Brain, Rocket, Target, Award } from "lucide-react"
import WhatsAppButton from "@/components/whatsapp-button"
import { generateHreflangs } from "@/lib/seo-config"

export const metadata: Metadata = {
  title: "Curso Inteligencia Artificial Niños y Adolescentes Paraguay | Vibe Coding",
  description:
    "No es un curso de computación tradicional. Es Vibe Coding. Tu hijo crea software hablando en español con la IA. Sin matemáticas complejas. Garantía 10 días.de 10 días.",
  keywords: [
    "curso inteligencia artificial niños paraguay",
    "cursos de tecnologia para niños paraguay",
    "aprender ia asuncion",
    "innovakids cursos",
  ],
  openGraph: {
    title: "Curso Inteligencia Artificial Niños y Adolescentes Paraguay | Vibe Coding",
    description: "Transforma a tu hijo en un creador digital. El curso de IA más avanzado de Paraguay para niños de 8-17 años.",
    url: "https://www.innovakidslatam.com/py/cursos-ia-ninos-paraguay",
    locale: "es_PY",
    siteName: "InnovaKids Paraguay",
    type: "website",
  },
  alternates: {
    canonical: "https://www.innovakidslatam.com/py/cursos-ia-ninos-paraguay",
  },
}

export default function CursosIANinosParaguayPage() {
  return (
    <>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden bg-gradient-to-b from-[#D52B1E]/10 via-background to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-[#D52B1E] text-white px-4 py-2">
                🇵🇾 #1 en Cursos de IA para Niños en Paraguay
              </Badge>

              <h1 className="mx-auto max-w-4xl text-3xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl px-2">
                Curso de Vibe Coding: Aprende a Crear con IA
                <span className="block text-2xl md:text-4xl mt-4 text-white/90">Para Niños en Paraguay</span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto">
                Cursos de Inteligencia Artificial para niños paraguayos de 8 a 17 años. Clases online en vivo con grupos
                de máximo 5 alumnos.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-full">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="font-medium">10 Clases en Vivo</span>
                </div>
                <div className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-full">
                  <Users className="h-5 w-5 text-[#D52B1E]" />
                  <span className="font-medium">Máx 5 Niños/Grupo</span>
                </div>
                <div className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-full">
                  <Shield className="h-5 w-5 text-green-500" />
                  <span className="font-medium">Garantía 10 días.10 Días</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-[#D52B1E] hover:bg-[#D52B1E]/90 text-white text-lg px-8 py-6" asChild>
                  <Link href="/booking">
                    Reservar Evaluación GRATIS
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-[#D52B1E] text-[#D52B1E] bg-transparent"
                  asChild
                >
                  <Link href="https://wa.me/56964754219?text=Hola!%20Quiero%20información%20sobre%20los%20cursos%20de%20IA%20para%20niños%20en%20Paraguay">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp
                  </Link>
                </Button>
              </div>

              <div className="bg-[#D52B1E]/10 border border-[#D52B1E]/20 rounded-2xl p-6 max-w-xl mx-auto">
                <p className="text-lg font-semibold text-[#D52B1E]">💰 Inversión: $267 USD</p>
                <p className="text-muted-foreground">
                  10 clases online en vivo (60 min c/u) • Garantía 10 días.de satisfacción 10 días
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Por qué Paraguay */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                ¿Por Qué los Niños Paraguayos <span className="text-[#D52B1E]">Necesitan Aprender IA</span>?
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-[#D52B1E]/20">
                  <CardContent className="p-6">
                    <Brain className="h-12 w-12 text-[#D52B1E] mb-4" />
                    <h3 className="text-xl font-bold mb-2">Paraguay Digital</h3>
                    <p className="text-muted-foreground">
                      El país está creciendo en tecnología. Tu hijo puede liderar esta transformación.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-[#D52B1E]/20">
                  <CardContent className="p-6">
                    <Rocket className="h-12 w-12 text-[#D52B1E] mb-4" />
                    <h3 className="text-xl font-bold mb-2">Oportunidades Globales</h3>
                    <p className="text-muted-foreground">
                      Desde Asunción o Ciudad del Este, tu hijo puede acceder a carreras tecnológicas internacionales.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-[#D52B1E]/20">
                  <CardContent className="p-6">
                    <Target className="h-12 w-12 text-[#D52B1E] mb-4" />
                    <h3 className="text-xl font-bold mb-2">Ventaja Competitiva</h3>
                    <p className="text-muted-foreground">
                      Muy pocos niños en Paraguay están aprendiendo IA. Tu hijo tendrá años de ventaja.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-[#D52B1E]/20">
                  <CardContent className="p-6">
                    <Award className="h-12 w-12 text-[#D52B1E] mb-4" />
                    <h3 className="text-xl font-bold mb-2">Metodología Probada</h3>
                    <p className="text-muted-foreground">
                      Aprender creando: tu hijo construirá proyectos reales con IA desde la primera clase.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Ciudades */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Clases Online para <span className="text-[#D52B1E]">Todo Paraguay</span>
              </h2>

              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "Asunción",
                  "Ciudad del Este",
                  "San Lorenzo",
                  "Luque",
                  "Capiatá",
                  "Lambaré",
                  "Fernando de la Mora",
                  "Encarnación",
                  "Caaguazú",
                  "Pedro Juan Caballero",
                ].map((ciudad) => (
                  <Badge key={ciudad} variant="outline" className="px-4 py-2 text-base border-[#D52B1E]/30">
                    {ciudad}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-[#D52B1E]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">¿Listo para que tu Hijo Domine la IA?</h2>

            <Button size="lg" className="bg-white text-[#D52B1E] hover:bg-white/90 text-lg px-8 py-6" asChild>
              <Link href="/booking">
                Reservar Evaluación GRATIS
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <p className="text-white/80 mt-6">
              💬 ¿Preguntas?{" "}
              <Link href="https://wa.me/56964754219" className="underline">
                Escríbenos por WhatsApp
              </Link>
            </p>
          </div>
        </section>

        {/* Links SEO */}
        <section className="py-12 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4 max-w-4xl mx-auto">
              <Link href="/py" className="text-[#D52B1E] hover:underline">
                Hub Paraguay
              </Link>
              <Link href="/py/clases-ia-ninos-asuncion" className="text-[#D52B1E] hover:underline">
                Clases Asunción
              </Link>
              <Link href="/ar" className="text-[#D52B1E] hover:underline">
                Argentina
              </Link>
              <Link href="/bo" className="text-[#D52B1E] hover:underline">
                Bolivia
              </Link>
            </div>
          </div>
        </section>
      </div>

      <WhatsAppButton />
    </>
  )
}
