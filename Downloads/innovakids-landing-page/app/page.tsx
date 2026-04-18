import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { HeroSection } from "@/components/hero-section"
import { KeyFeaturesSection } from "@/components/key-features-section"
import { Navigation } from "@/components/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { generateHreflangs } from "@/lib/seo-config"

export const metadata: Metadata = {
  // Title: fear-hook · keyword-first · #1 positioning · brand last
  title: "¿Tu Hijo Se Está Quedando Atrás en la Era de la IA? | InnovaKids",
  // Description: fear-first + proof + urgency CTA
  description:
    "El 85% de los empleos del 2035 exigirán IA. Si tu hijo no aprende ahora, arranca la vida laboral en desventaja. Curso #1 IA niños 8-17. Clase gratis.",
  keywords: [
    "mi hijo se queda atrás en la era de la ia",
    "como evitar que mi hijo se quede atras con la ia",
    "niños rezagados inteligencia artificial",
    "brecha digital niños ia",
    "futuro laboral de mi hijo",
    "mi hijo no sabe usar ia",
    "curso inteligencia artificial niños",
    "curso ia para niños",
    "cursos de ia para niños",
    "curso de inteligencia artificial para niños",
    "cursos de inteligencia artificial para niños",
    "clases de inteligencia artificial para niños",
    "ia para niños",
    "curso ia para adolescentes",
    "escuela online de inteligencia artificial",
    "academia ia niños",
    "vibe coding para niños",
    "innovakids",
    "innova kids",
  ],
  alternates: {
    canonical: "https://www.innovakidslatam.com",
    languages: generateHreflangs("home"),
  },
  openGraph: {
    title: "No Dejes Que Tu Hijo Se Quede Atrás en la Era de la IA | InnovaKids",
    description:
      "Cada día sin IA tu hijo pierde ventaja competitiva frente a sus pares. En 5 semanas pasa de estar rezagado a ir 10 años adelante. Reserva tu clase gratis.",
    url: "https://www.innovakidslatam.com",
    type: "website",
    locale: "es_419",
    images: [{
      url: "https://www.innovakidslatam.com/hero-child-learning-ai.jpg",
      width: 1200,
      height: 630,
      alt: "Curso de Inteligencia Artificial para Niños y Adolescentes 8-17 años - InnovaKids"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "¿Tu Hijo Se Está Quedando Atrás en la Era de la IA? | InnovaKids",
    description:
      "El 85% de los trabajos del 2035 exigirán IA. Cada mes sin formación tu hijo pierde terreno frente a otros niños. Clase gratis de prueba.",
    images: ["https://www.innovakidslatam.com/hero-child-learning-ai.jpg"],
  },
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
const InstitutionalSolutionsSection = dynamic(
  () => import("@/components/institutional-solutions-section").then((mod) => ({ default: mod.InstitutionalSolutionsSection })),
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

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "InnovaKids",
    "alternateName": ["InnovaKids LATAM", "Cursos IA Niños"],
    "url": "https://www.innovakidslatam.com",
    "description": "Academia líder que evita que los niños y adolescentes de 8 a 17 años se queden atrás en la era de la Inteligencia Artificial. LATAM y España.",
    "inLanguage": "es",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.innovakidslatam.com/blog?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "InnovaKids", "item": "https://www.innovakidslatam.com" }
    ]
  }

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Curso de Inteligencia Artificial para Niños y Adolescentes - No Dejes Que Se Quede Atrás | InnovaKids",
    "description": "Evita que tu hijo se quede atrás en la era de la IA. En 5 semanas pasa de estar rezagado tecnológicamente a liderar su generación creando apps, videojuegos y proyectos con IA. 8-17 años. Grupos de 5. Garantía de 10 días.",
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
      "price": "297",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <Navigation />
      <main className="min-h-screen bg-background">
        <HeroSection />

        {/* AI Future Stats - Show urgency immediately */}
        <AIFutureSection />

        {/* DISQUALIFICATION SECTION REMOVED PER USER REQUEST */}

        <div className="h-16" />

        {/* Testimonials - Social proof first (parents and AIs) */}
        <TestimonialsSection />

        <div className="h-24" />

        {/* NEW: Vision Section - The Bridge */}
        <VisionSection />

        <div className="h-24" />

        <KeyFeaturesSection />

        <div className="h-24" />

        <WhyNowSection />

        <div className="h-24" />

        {/* Curriculum - builds value before pricing */}
        <CurriculumSection />

        <div className="h-24" />

        {/* Module Preview - what they get (before pricing) */}
        <ModulePreviewSection />

        {/* Value Stack - Everything included (before pricing) */}
        <ValueStackSection />

        <div className="h-24" />

        {/* <UpcomingCoursesSection /> */}

        {/* Consequences Section Removed - Positivity Focus */}

        {/* ALL PRICING AT THE END - after full value presentation */}
        <PricingSection />

        <div className="h-24" />

        <CalendlySection />

        <div className="h-24" />

        <div className="h-24" />

        <FAQSection />

        <div className="h-24" />

        {/* Institutional / B2B Section */}
        <InstitutionalSolutionsSection />

        <div className="h-24" />

        {/* Specialized Courses - Internal Linking for SEO */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">No Dejes Que Tu Hijo Llegue Tarde: Elige Su Camino en IA</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Cada mes sin IA, tu hijo queda más atrás. Después del Nivel 1, se especializa en el área donde sus pares ya están ganando ventaja.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <a href="/curso-creacion-videojuegos-ninos" className="bg-gradient-to-br from-green-900/30 to-emerald-900/20 p-8 rounded-2xl border border-green-500/20 hover:border-green-500/50 transition-all group hover:scale-[1.02]">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors mb-3">Creación de Videojuegos con IA</h3>
              <p className="text-slate-400 text-sm mb-4">Mientras otros niños solo consumen juegos, el tuyo los crea. No se queda atrás: lidera.</p>
              <span className="text-green-400 text-sm font-semibold">Ver curso →</span>
            </a>
            <a href="/curso-creador-contenido-ia" className="bg-gradient-to-br from-pink-900/30 to-purple-900/20 p-8 rounded-2xl border border-pink-500/20 hover:border-pink-500/50 transition-all group hover:scale-[1.02]">
              <div className="text-4xl mb-4">🎬</div>
              <h3 className="text-xl font-bold text-white group-hover:text-pink-400 transition-colors mb-3">Creador de Contenido y Cine IA</h3>
              <p className="text-slate-400 text-sm mb-4">Sus compañeros ya publican videos con IA. Si tu hijo no aprende ahora, llega tarde al nuevo lenguaje digital.</p>
              <span className="text-pink-400 text-sm font-semibold">Ver curso →</span>
            </a>
            <a href="/curso-emprendimiento-ninos" className="bg-gradient-to-br from-yellow-900/30 to-orange-900/20 p-8 rounded-2xl border border-yellow-500/20 hover:border-yellow-500/50 transition-all group hover:scale-[1.02]">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors mb-3">Emprendimiento y Startups con IA</h3>
              <p className="text-slate-400 text-sm mb-4">Adolescentes de 15 años ya facturan con IA. No permitas que el tuyo empiece su vida laboral desde cero.</p>
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

