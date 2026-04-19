import { Navigation } from "@/components/navigation"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  // 55 chars · keyword-first · 4.9★ trigger · brand
  title: "Testimonios · 527 Familias y 4.9★ de Padres | InnovaKids",
  // 153 chars · proof + differentiator + CTA
  description:
    "Testimonios reales de 527 familias en 9 países sobre el curso de IA para niños 8-17 años. 4.9★ de padres. Mira sus experiencias. Reserva tu clase gratis.",
  keywords: [
    "testimonios innovakids",
    "opiniones curso ia niños",
    "reseñas innovakids",
    "experiencias padres curso ia niños",
    "testimonios padres innovakids",
  ],
  alternates: {
    canonical: "https://www.innovakidslatam.com/testimonios",
  },
  openGraph: {
    title: "Testimonios · 527 Familias y 4.9★ | InnovaKids",
    description:
      "Experiencias reales de 527 familias en 9 países. 4.9★ de padres sobre el curso de IA para niños 8-17 años. Reserva tu clase gratis.",
    url: "https://www.innovakidslatam.com/testimonios",
    siteName: "InnovaKids",
    type: "website",
    locale: "es_419",
    images: [{
      url: "https://www.innovakidslatam.com/hero-child-learning-ai.jpg",
      width: 1200,
      height: 630,
      alt: "Testimonios de familias sobre curso de IA para niños 8-17 años - InnovaKids",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Testimonios · 527 Familias y 4.9★ | InnovaKids",
    description:
      "Experiencias de 527 familias en 9 países. 4.9★ de padres sobre el curso de IA para niños 8-17. Clase gratis.",
    images: ["https://www.innovakidslatam.com/hero-child-learning-ai.jpg"],
  },
}

export default function TestimoniosPage() {
  return (
    <div className="min-h-screen bg-[#0a1628]">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Link href="/">
            <Button variant="ghost" className="text-white hover:text-[#4DD0E1] mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al inicio
            </Button>
          </Link>
          <TestimonialsSection />
        </div>
      </main>
    </div>
  )
}
