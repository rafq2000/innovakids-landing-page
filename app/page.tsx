import type { Metadata } from "next"
import { HeroSection } from "@/components/hero-section"
import { Navigation } from "@/components/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { StatsSection } from "@/components/stats-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { ProjectsGallery } from "@/components/projects-gallery"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CurriculumSection } from "@/components/curriculum-section"
import { ValuePropositionSection } from "@/components/value-proposition-section"
import { IrresistibleOfferSection } from "@/components/irresistible-offer-section"
import { PricingSection } from "@/components/pricing-section"
import { TeamSection } from "@/components/team-section"
import { CalendlySection } from "@/components/calendly-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { SEOContent } from "@/components/seo-content"
import { Footer } from "@/components/footer"
import { ExitIntentPopup } from "@/components/exit-intent-popup"
import { generateHreflangs } from "@/lib/seo-config"
import { faqs } from "@/lib/faq-data"

export const metadata: Metadata = {
  // ≤60 chars: con el title largo Google cortaba el CTA "Diagnóstico Gratis"
  title: "Curso de IA para Niños 8-17 · Diagnóstico Gratis | InnovaKids",
  description:
    "Clases de IA en vivo para niños de 8 a 17: crean videojuegos, música y arte con IA. Clases 1 a 1. Sesión de diagnóstico gratis: reserva hoy.",
  keywords: [
    "mi hijo se queda atrás en la era de la ia",
    "cómo evitar que mi hijo se quede atrás con la ia",
    "curso inteligencia artificial niños",
    "curso ia para niños",
    "cursos de ia para niños",
    "curso de inteligencia artificial para niños",
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
    title: "Curso de IA para Niños y Adolescentes (8-17) · Diagnóstico Gratis | InnovaKids",
    description:
      "Tu hijo crea apps, videojuegos y proyectos reales con IA en 5 semanas. Clases en vivo 1 a 1. ★4.9 de 527 familias. Agenda su diagnóstico gratis hoy.",
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
    title: "Curso de IA para Niños y Adolescentes (8-17) | InnovaKids",
    description:
      "Tu hijo crea apps y videojuegos con IA en 5 semanas. Clases 1 a 1. ★4.9 de 527 familias. Diagnóstico gratis.",
    images: ["https://www.innovakidslatam.com/hero-child-learning-ai.jpg"],
  },
}

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq: any) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "InnovaKids",
    "alternateName": ["InnovaKids LATAM"],
    "url": "https://www.innovakidslatam.com",
    "description": "Academia líder para que niños y adolescentes de 8 a 17 años aprendan Inteligencia Artificial a tiempo y no se queden atrás. LATAM y España.",
    "inLanguage": "es"
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
    "name": "Curso de Inteligencia Artificial para Niños y Adolescentes - Que No Se Quede Atrás | InnovaKids",
    "description": "Para que tu hijo aprenda IA a tiempo y no se quede atrás en la era de la IA. 10 clases por módulo, crea apps, videojuegos y proyectos con IA, y llega preparado al colegio, la universidad y el trabajo. 8-17 años. Clases 1 a 1. Garantía de 10 días.",
    "url": "https://www.innovakidslatam.com",
    "image": "https://www.innovakidslatam.com/hero-child-learning-ai.jpg",
    "provider": {
      "@type": "Organization",
      "name": "InnovaKids",
      "url": "https://www.innovakidslatam.com",
    },
    "educationalLevel": "Beginner",
    "coursePrerequisites": [],
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
      "reviewCount": "527",
      "bestRating": "5",
      "worstRating": "1",
    },
    "hasCourseInstance": [
      {
        "@type": "CourseInstance",
        "courseMode": "online",
        "startDate": "2026-07-20",
        "endDate": "2026-08-24",
        "courseWorkload": "PT10H",
        "instructor": {
          "@type": "Person",
          "name": "Rafael Quiroz",
        },
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <Navigation />
      <main className="min-h-screen bg-background">

        {/* ═══ HORMOZI FUNNEL ORDER ═══ */}

        {/* 1 - HERO: dream outcome + CTA + mini social proof + risk reversal */}
        <HeroSection />

        {/* 2 - PROBLEMA: dolor + urgencia → por qué actuar ahora */}
        <div className="cv-auto"><ProblemSection /></div>

        {/* 3 - SOLUCIÓN: qué hacemos diferente vs. el colegio */}
        <div className="cv-auto"><SolutionSection /></div>

        {/* 4 - PRUEBA SOCIAL: testimonios reales de padres (perceived likelihood) */}
        <div className="cv-auto"><TestimonialsSection /></div>

        {/* 5 - PROYECTOS: galería visual del dream outcome — lo que crean los alumnos */}
        <div className="cv-auto"><ProjectsGallery /></div>

        {/* 6 - STATS: números que refuerzan la prueba social (527 familias, 4.9★, 98%) */}
        <div className="cv-auto"><StatsSection /></div>

        {/* 7 - CÓMO FUNCIONA: 3 pasos → reducir esfuerzo percibido */}
        <div className="cv-auto"><HowItWorksSection /></div>

        {/* 8 - CURRÍCULUM: qué aprenden → value stack nivel 1 */}
        <div className="cv-auto"><CurriculumSection /></div>

        {/* 9 - PROPUESTA DE VALOR: el ticket completo → value stack nivel 2 */}
        <div className="cv-auto"><ValuePropositionSection /></div>

        {/* 10 - ¿ES PARA TI?: calificación + agitación → último empuje emocional */}
        <div className="cv-auto"><IrresistibleOfferSection /></div>

        {/* 11 - EQUIPO: autoridad y confianza → justo antes del precio */}
        <div className="cv-auto"><TeamSection /></div>

        {/* 12 - PRECIO: inversión con desglose, anclaje y garantía */}
        <div className="cv-auto"><PricingSection /></div>

        {/* 13 - CONVERSIÓN: formulario Calendly (clase gratis) */}
        <div className="cv-auto"><CalendlySection /></div>

        {/* 14 - FAQ: cierre de objeciones finales */}
        <div className="cv-auto"><FAQSection /></div>

        {/* 15 - CTA FINAL: último empuje a la conversión */}
        <div className="cv-auto"><CTASection /></div>

        {/* 16 - SEO: contenido largo para posicionamiento orgánico */}
        <div className="cv-auto"><SEOContent /></div>

        <Footer />
      </main>

      {/* Sticky CTA mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#1A1714]/95 backdrop-blur-sm border-t border-[#FAF7EF]/10 p-3 flex items-center gap-3">
        <a
          href="https://wa.me/56964754219?text=Hola%2C%20quiero%20agendar%20la%20Sesi%C3%B3n%20de%20Diagn%C3%B3stico%20gratuita%20para%20mi%20hijo%2Fa"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-[#C96342] hover:bg-[#9A4428] text-[#FAF7EF] py-3.5 text-center text-sm font-semibold rounded-sm shadow-lg transition-colors"
        >
          Agendar diagnóstico gratis
        </a>
        <a
          href="https://wa.me/56964754219?text=Hola%2C%20quiero%20info%20del%20curso%20de%20IA%20para%20mi%20hijo"
          className="shrink-0 bg-[#25D366] text-white p-3.5 rounded-sm"
          aria-label="WhatsApp"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492l4.634-1.215A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-2.09 0-4.02-.66-5.608-1.783l-.402-.239-4.17 1.093 1.113-4.063-.263-.418A9.72 9.72 0 012.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75z"/></svg>
        </a>
      </div>
      <WhatsAppButton />
      <ExitIntentPopup />
    </>
  )
}
