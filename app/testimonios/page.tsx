import { Navigation } from "@/components/navigation"
import { TestimonialsSection } from "@/components/testimonials-section"
import Link from "next/link"

export const metadata = {
  title: "Testimonios · 527 Familias y 4.9★ de Padres | InnovaKids",
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
    <div className="min-h-screen bg-[#FAF7EF] text-[#1A1714]">
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="max-w-[1100px] mx-auto px-6 md:px-10">
          <nav aria-label="Breadcrumb" className="mb-10 text-[12px] tracking-[0.2em] uppercase text-[#1A1714]/55">
            <Link href="/" className="hover:text-[#C96342] transition-colors">InnovaKids</Link>
            <span className="mx-3" aria-hidden>/</span>
            <span className="text-[#1A1714]">Testimonios</span>
          </nav>

          <header className="mb-12 pb-12 border-b border-[#1A1714]/12">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-[#C96342]" aria-hidden />
              <span className="text-[11px] tracking-[0.28em] uppercase text-[#C96342] font-semibold">
                527 familias · 9 países · 4.9★
              </span>
            </div>
            <h1
              className="text-5xl md:text-7xl leading-[0.98] tracking-[-0.02em] text-[#1A1714] max-w-[22ch]"
              style={{ fontFamily: "'Charter', 'Georgia', serif" }}
            >
              Lo que dicen las <em className="italic text-[#C96342]">familias</em>.
            </h1>
          </header>

          <TestimonialsSection />
        </div>
      </main>
    </div>
  )
}
