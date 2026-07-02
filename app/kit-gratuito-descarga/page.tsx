import type { Metadata } from "next"
import { Download, BookOpen, Shield, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata: Metadata = {
  // 57 chars · keyword-first · Gratis trigger · brand
  title: "Kit Gratuito de IA para Padres · Descarga | InnovaKids",
  // 149 chars · proof + differentiator + CTA
  description:
    "Kit gratis para padres: guía práctica para introducir a tu hijo 8-17 años en el mundo de la IA. Probada por 527 familias en 9 países. Descarga gratis.",
  keywords: [
    "kit gratuito ia niños",
    "kit padres ia",
    "descargar kit ia niños",
    "guía ia padres moderno",
    "kit esencial padre moderno",
  ],
  alternates: {
    canonical: "https://www.innovakidslatam.com/kit-gratuito-descarga",
  },
  openGraph: {
    title: "Kit Gratuito de IA para Padres · InnovaKids LATAM",
    description:
      "Descarga gratis el Kit Esencial para Padres Modernos. Aprende a introducir a tu hijo al mundo de la IA con un método probado por 527 familias.",
    url: "https://www.innovakidslatam.com/kit-gratuito-descarga",
    siteName: "InnovaKids",
    type: "website",
    locale: "es_419",
    images: [{
      url: "https://www.innovakidslatam.com/hero-child-learning-ai.jpg",
      width: 1200,
      height: 630,
      alt: "Kit gratuito de IA para padres modernos - InnovaKids",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kit Gratuito de IA para Padres · InnovaKids",
    description:
      "Guía práctica para introducir a tu hijo 8-17 años al mundo de la IA. Probada por 527 familias. Descarga gratis.",
    images: ["https://www.innovakidslatam.com/hero-child-learning-ai.jpg"],
  },
}

export default function KitDownloadPage() {
  return (
    <>
      <div className="min-h-screen bg-[#F2EDE0]">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-block bg-[#C96342]/10 text-[#B5522F] px-6 py-2 rounded-full text-sm font-semibold mb-6 border border-[#C96342]/20">
                ACCESO DIRECTO
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#1A1714] mb-4">Tu Kit Esencial para el Padre Moderno</h1>
              <p className="text-xl text-[#5A5751]">
                La guía práctica que necesitas para introducir a tu hijo en el mundo de la IA
              </p>
            </div>

            {/* Main Content */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div className="flex items-center justify-center">
                <Image
                  src="/ai-learning-kit-book.jpg"
                  alt="Kit del Padre Moderno - Guía práctica de IA para niños"
                  width={500}
                  height={700}
                  quality={90}
                  priority
                  className="w-full max-w-md rounded-lg shadow-2xl"
                />
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1A1714] mb-6">Qué incluye tu Kit:</h2>

                <div className="space-y-5 mb-8">
                  <div className="flex items-start gap-4 bg-[#FAF7EF] p-4 rounded-lg border border-[#E8E0D0]">
                    <Sparkles className="w-6 h-6 text-[#B5522F] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-[#1A1714] mb-1">5 Proyectos Creativos para Empezar Hoy</h3>
                      <p className="text-[#5A5751] text-sm">Sin necesidad de saber programar</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-[#FAF7EF] p-4 rounded-lg border border-[#E8E0D0]">
                    <Shield className="w-6 h-6 text-[#B5522F] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-[#1A1714] mb-1">Checklist de Seguridad Digital</h3>
                      <p className="text-[#5A5751] text-sm">Para proteger a tu hijo online</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-[#FAF7EF] p-4 rounded-lg border border-[#E8E0D0]">
                    <BookOpen className="w-6 h-6 text-[#B5522F] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-[#1A1714] mb-1">Glosario de Términos de IA</h3>
                      <p className="text-[#5A5751] text-sm">Para que ambos hablen el mismo idioma</p>
                    </div>
                  </div>
                </div>

                {/* Download Button */}
                <Button
                  asChild
                  size="lg"
                  className="w-full h-16 bg-[#C96342] hover:bg-[#9A4428] text-[#FAF7EF] font-bold text-lg uppercase tracking-wide shadow-lg rounded-sm"
                >
                  <a href="https://8n2c8ieovwfncuyi.public.blob.vercel-storage.com/kit-padre-moderno.pdf.pdf" download>
                    <Download className="w-6 h-6 mr-2" />
                    DESCARGAR KIT AHORA
                  </a>
                </Button>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-[#FAF7EF] border border-[#E8E0D0] rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-[#1A1714] mb-4">¿Listo para dar el siguiente paso?</h3>
              <p className="text-[#5A5751] mb-6 text-lg">
                Agenda una Clase Gratis (valor $50 USD) y descubre cómo tu hijo puede dominar la IA en 6 semanas
              </p>
              <Button asChild size="lg" className="bg-[#C96342] hover:bg-[#9A4428] text-[#FAF7EF] font-bold text-lg px-8 rounded-sm">
                <Link href="/#lead-magnet">AGENDAR CLASE GRATUITA</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <WhatsAppButton />
    </>
  )
}
