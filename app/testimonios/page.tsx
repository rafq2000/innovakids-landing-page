import { Navigation } from "@/components/navigation"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
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
            <Link href="/" className="hover:text-[#B5522F] transition-colors">InnovaKids</Link>
            <span className="mx-3" aria-hidden>/</span>
            <span className="text-[#1A1714]">Testimonios</span>
          </nav>

          <header className="mb-12 pb-12 border-b border-[#1A1714]/12">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-[#C96342]" aria-hidden />
              <span className="text-[11px] tracking-[0.28em] uppercase text-[#B5522F] font-semibold">
                527 familias · 9 países · 4.9★
              </span>
            </div>
            <h1
              className="text-5xl md:text-7xl leading-[0.98] tracking-[-0.02em] text-[#1A1714] max-w-[22ch]"
              style={{ fontFamily: "'Charter', 'Georgia', serif" }}
            >
              Lo que dicen las <em className="italic text-[#B5522F]">familias</em>.
            </h1>
          </header>

          <TestimonialsSection />
        </div>
      </main>

      {/* CTA de cierre */}
      <section className="bg-[#1A1714] text-[#FAF7EF] py-24 md:py-32">
        <div className="max-w-[1100px] mx-auto px-6 md:px-10 text-center">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl leading-[1.02] tracking-[-0.02em] font-normal max-w-[20ch] mx-auto mb-8"
            style={{ fontFamily: "'Charter', 'Georgia', serif" }}
          >
            Listo para que tu hijo sea el <em className="italic text-[#B5522F]">próximo</em>?
          </h2>
          <Link
            href="/#sesion-estrategica"
            className="inline-flex items-center bg-[#C96342] hover:bg-[#9A4428] text-[#FAF7EF] px-8 py-4 text-base font-semibold rounded-sm transition-colors mb-6"
          >
            Agendar sesión gratis →
          </Link>
          <p
            className="text-[12px] tracking-[0.18em] uppercase text-[#FAF7EF]/50"
            style={{ fontFamily: "'IBM Plex Mono', 'Menlo', monospace" }}
          >
            30 minutos · Sin compromiso · 100% online
          </p>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
