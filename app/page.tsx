import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { HeroSection } from "@/components/hero-section"
import { KeyFeaturesSection } from "@/components/key-features-section"
import { Navigation } from "@/components/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "Cursos de Inteligencia Artificial para Niños | #1 Latinoamérica · InnovaKids | Clase Gratis",
  description:
    "🏆 527 graduados en 9 países. Tu hijo crea apps reales con IA en 5 semanas. Grupos de 5. Garantía 10 días. ¡Clase gratis!",
  openGraph: {
    title: "Cursos de IA para Niños | #1 en Latinoamérica | InnovaKids",
    description: "527 niños ya crean apps y videojuegos con IA. Clases en vivo, grupos de 5. Tu hijo crea su proyecto en 5 semanas. ¡Clase gratis!",
  }
}

const AIFutureSection = dynamic(
  () => import("@/components/ai-future-section").then((mod) => ({ default: mod.AIFutureSection })),
  { ssr: true, loading: () => <div className="h-[400px] bg-background animate-pulse" /> },
)
const ModulePreviewSection = dynamic(
  () => import("@/components/module-preview-section").then((mod) => ({ default: mod.ModulePreviewSection })),
  { ssr: true },
)
const ValueStackSection = dynamic(
  () => import("@/components/value-stack-section").then((mod) => ({ default: mod.ValueStackSection })),
  { ssr: true },
)
const WhyNowSection = dynamic(
  () => import("@/components/why-now-section").then((mod) => ({ default: mod.WhyNowSection })),
  { ssr: true },
)
const TestimonialsSection = dynamic(
  () => import("@/components/testimonials-section").then((mod) => ({ default: mod.TestimonialsSection })),
  { ssr: true },
)
const CurriculumSection = dynamic(
  () => import("@/components/curriculum-section").then((mod) => ({ default: mod.CurriculumSection })),
  { ssr: true },
)
const ConsequencesSection = dynamic(
  () => import("@/components/consequences-section").then((mod) => ({ default: mod.ConsequencesSection })),
  { ssr: true },
)
const PricingSection = dynamic(
  () => import("@/components/pricing-section").then((mod) => ({ default: mod.PricingSection })),
  { ssr: true },
)
const UpcomingCoursesSection = dynamic(
  () => import("@/components/upcoming-courses-section").then((mod) => ({ default: mod.UpcomingCoursesSection })),
  { ssr: true },
)
const CalendlySection = dynamic(
  () => import("@/components/calendly-section").then((mod) => ({ default: mod.CalendlySection })),
  { ssr: true, loading: () => <div className="h-[600px] bg-background animate-pulse" /> },
)
const FAQSection = dynamic(() => import("@/components/faq-section").then((mod) => ({ default: mod.FAQSection })), {
  ssr: true,
  loading: () => <div className="h-[500px] bg-background animate-pulse" />,
})
const Footer = dynamic(() => import("@/components/footer").then((mod) => ({ default: mod.Footer })), {
  ssr: true,
  loading: () => <div className="h-[300px] bg-[#030712] animate-pulse" />,
})
const SEOContent = dynamic(() => import("@/components/seo-content").then((mod) => ({ default: mod.SEOContent })), {
  ssr: true,
})

const VisionSection = dynamic(
  () => import("@/components/vision-section").then((mod) => ({ default: mod.VisionSection })),
  { ssr: true },
)
const QualificationSection = dynamic(
  () => import("@/components/qualification-section").then((mod) => ({ default: mod.QualificationSection })),
  { ssr: true },
)

import { faqs } from "@/lib/faq-data"

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq: any) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Curso de Inteligencia Artificial para Niños y Adolescentes - InnovaKids",
    "description": "Aprende a crear apps, videojuegos y arte con IA en 5 semanas. Clases online en vivo para niños y adolescentes de 8 a 17 años. Grupos de máximo 5 alumnos. Garantía de 10 días.",
    "url": "https://www.innovakidslatam.com",
    "image": "https://www.innovakidslatam.com/hero-child-learning-ai.jpg",
    "provider": {
      "@type": "Organization",
      "name": "InnovaKids",
      "url": "https://www.innovakidslatam.com",
    },
    "educationalLevel": "Beginner",
    "coursePrerequisites": "Ninguno",
    "numberOfLessons": 10,
    "timeRequired": "P5W",
    "inLanguage": "es",
    "courseMode": "online",
    "offers": {
      "@type": "Offer",
      "price": "267",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": "https://www.innovakidslatam.com",
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1",
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <Navigation />
      <main className="min-h-screen bg-background">
        <HeroSection />

        {/* AI Future Stats - Show urgency immediately */}
        <AIFutureSection />

        {/* DISQUALIFICATION SECTION REMOVED PER USER REQUEST */}

        {/* Module Preview - Show exactly what they get */}
        <ModulePreviewSection />

        {/* Value Stack - Everything included */}
        <ValueStackSection />

        <div className="h-16" />

        {/* Testimonials - Social proof from parents and AIs */}
        <TestimonialsSection />

        <div className="h-24" />

        {/* NEW: Vision Section - The Bridge */}
        <VisionSection />

        <div className="h-24" />

        <KeyFeaturesSection />

        <div className="h-24" />

        <WhyNowSection />

        <div className="h-24" />

        <CurriculumSection />

        <div className="h-24" />

        {/* <UpcomingCoursesSection /> */}

        {/* Consequences Section Removed - Positivity Focus */}

        <div className="h-24" />

        <PricingSection />

        <div className="h-24" />

        <CalendlySection />

        <div className="h-24" />

        <FAQSection />

        <div className="h-24" />

        {/* Specialized Courses - Internal Linking for SEO */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Especializaciones: Elige Tu Camino en IA</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Después de completar Vibe Explorer (Nivel 1), tu hijo puede especializarse en el área que más le apasiona.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <a href="/curso-creacion-videojuegos-ninos" className="bg-gradient-to-br from-green-900/30 to-emerald-900/20 p-8 rounded-2xl border border-green-500/20 hover:border-green-500/50 transition-all group hover:scale-[1.02]">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors mb-3">Creación de Videojuegos con IA</h3>
              <p className="text-slate-400 text-sm mb-4">Diseña mundos, personajes y lógicas de juego. Tu hijo pasa de jugar a crear.</p>
              <span className="text-green-400 text-sm font-semibold">Ver curso →</span>
            </a>
            <a href="/curso-creador-contenido-ia" className="bg-gradient-to-br from-pink-900/30 to-purple-900/20 p-8 rounded-2xl border border-pink-500/20 hover:border-pink-500/50 transition-all group hover:scale-[1.02]">
              <div className="text-4xl mb-4">🎬</div>
              <h3 className="text-xl font-bold text-white group-hover:text-pink-400 transition-colors mb-3">Creador de Contenido y Cine IA</h3>
              <p className="text-slate-400 text-sm mb-4">Producción de videos, cortometrajes y contenido social con IA como copiloto.</p>
              <span className="text-pink-400 text-sm font-semibold">Ver curso →</span>
            </a>
            <a href="/curso-emprendimiento-ninos" className="bg-gradient-to-br from-yellow-900/30 to-orange-900/20 p-8 rounded-2xl border border-yellow-500/20 hover:border-yellow-500/50 transition-all group hover:scale-[1.02]">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors mb-3">Emprendimiento y Startups con IA</h3>
              <p className="text-slate-400 text-sm mb-4">Educación financiera, creación de startups y negocios digitales con IA.</p>
              <span className="text-yellow-400 text-sm font-semibold">Ver curso →</span>
            </a>
          </div>
        </section>

        <div className="h-12" />

        <SEOContent />

        <Footer />
      </main>
      <WhatsAppButton />
    </>
  )
}

