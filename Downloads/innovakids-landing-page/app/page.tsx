import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { HeroSection } from "@/components/hero-section"
import { Navigation } from "@/components/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { generateHreflangs } from "@/lib/seo-config"
import { faqs } from "@/lib/faq-data"

export const metadata: Metadata = {
  title: "Cursos de IA para Niños y Adolescentes (8-17 años) | ★4.9 · Clase Gratis | InnovaKids",
  description:
    "Clases en vivo de Inteligencia Artificial para niños y adolescentes 8-17 años. Crean videojuegos, apps y arte con IA. Grupos de máx. 5 alumnos. 527 graduados en 9 países. ★4.9. 1ª clase gratis.",
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
    title: "Cursos de IA para Niños y Adolescentes (8-17 años) | ★4.9 · Clase Gratis | InnovaKids",
    description:
      "Clases de IA en vivo para niños 8-17 años. Crean videojuegos, apps y arte con Inteligencia Artificial. Máx. 5 alumnos. 527 graduados. ★4.9. Reserva tu 1ª clase gratis hoy →",
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
    title: "Cursos de IA para Niños y Adolescentes (8-17 años) | ★4.9 | InnovaKids",
    description:
      "Clases de IA para niños 8-17 años. Crean videojuegos, apps y arte con IA. Grupos de 5. 527 graduados. ★4.9. Primera clase gratis.",
    images: ["https://www.innovakidslatam.com/hero-child-learning-ai.jpg"],
  },
}

const CurriculumSection = dynamic(
  () => import("@/components/curriculum-section").then((mod) => ({ default: mod.CurriculumSection })),
  { ssr: true },
)
const TestimonialsSection = dynamic(
  () => import("@/components/testimonials-section").then((mod) => ({ default: mod.TestimonialsSection })),
  { ssr: true },
)
const IrresistibleOfferSection = dynamic(
  () => import("@/components/irresistible-offer-section").then((mod) => ({ default: mod.IrresistibleOfferSection })),
  { ssr: true },
)
const ValuePropositionSection = dynamic(
  () => import("@/components/value-proposition-section").then((mod) => ({ default: mod.ValuePropositionSection })),
  { ssr: true },
)
const InstitutionalSolutionsSection = dynamic(
  () => import("@/components/institutional-solutions-section").then((mod) => ({ default: mod.InstitutionalSolutionsSection })),
  { ssr: true },
)
const CalendlySection = dynamic(
  () => import("@/components/calendly-section").then((mod) => ({ default: mod.CalendlySection })),
  { ssr: true, loading: () => <div className="h-[600px] bg-background animate-pulse" /> },
)
const FAQSection = dynamic(
  () => import("@/components/faq-section").then((mod) => ({ default: mod.FAQSection })),
  { ssr: true, loading: () => <div className="h-[500px] bg-background animate-pulse" /> },
)
const Footer = dynamic(
  () => import("@/components/footer").then((mod) => ({ default: mod.Footer })),
  { ssr: true, loading: () => <div className="h-[300px] bg-[#EDE6D3] animate-pulse" /> },
)

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
    "alternateName": ["InnovaKids LATAM", "Cursos IA Niños"],
    "url": "https://www.innovakidslatam.com",
    "description": "Academia líder para que niños y adolescentes de 8 a 17 años aprendan Inteligencia Artificial a tiempo y no se queden atrás. LATAM y España.",
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
    "name": "Curso de Inteligencia Artificial para Niños y Adolescentes - Que No Se Quede Atrás | InnovaKids",
    "description": "Para que tu hijo aprenda IA a tiempo y no se quede atrás en la era de la IA. En 5 semanas crea apps, videojuegos y proyectos con IA, y llega preparado al colegio, la universidad y el trabajo. 8-17 años. Grupos de 5. Garantía de 10 días.",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <Navigation />
      <main className="min-h-screen bg-background">
        {/* 1 · HERO — hook + promesa + CTA primario */}
        <HeroSection />

        {/* 2 · QUÉ APRENDE — currículum concreto antes de mostrar precio */}
        <CurriculumSection />

        {/* 3 · PRUEBA SOCIAL — testimonios reales, ya saben qué es el curso */}
        <TestimonialsSection />

        {/* 4 · OFERTA IRRESISTIBLE — problema + calificador + offer stack + cierre */}
        <IrresistibleOfferSection />

        {/* 5 · PROPUESTA DE VALOR — catálogo completo + garantía + recibo + precio */}
        <ValuePropositionSection />

        <div className="h-12" />

        {/* 6 · CONVERSIÓN — formulario + Calendly */}
        <CalendlySection />

        <div className="h-12" />

        {/* 7 · FAQ — cierre de objeciones */}
        <FAQSection />

        <div className="h-12" />

        {/* 8 · INSTITUCIONAL — pivote a colegios, municipios, empresas */}
        <InstitutionalSolutionsSection />

        <div className="h-8" />

        {/* 7 · SEO INTERNAL LINKS — cursos especializados condensados */}
        <section
          className="bg-[#F5F1E8] text-[#2F2F2C] py-28 md:py-40 border-t border-[#2F2F2C]/10"
          aria-label="Cursos especializados"
        >
          <div className="max-w-[1100px] mx-auto px-6 md:px-10">
            <div className="flex items-center gap-5 mb-16">
              <div className="h-px w-12 bg-[#C96342]" />
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold">
                Después del Nivel 01
              </p>
            </div>

            <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-end mb-20">
              <h2
                className="md:col-span-7 text-5xl sm:text-6xl md:text-7xl leading-[0.98] tracking-[-0.02em] font-normal"
                style={{ fontFamily: "'Charter', 'Georgia', serif" }}
              >
                Elige su <em className="italic text-[#C96342]">camino</em>.
              </h2>
              <p className="md:col-span-5 text-lg text-[#5A5751] leading-relaxed max-w-[40ch]">
                Al completar el fundamento, tu hijo se especializa en el área
                que más le apasiona.
              </p>
            </div>

            <ul className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#2F2F2C]/12 border-y border-[#2F2F2C]/12">
              {[
                {
                  href: "/curso-creacion-videojuegos-ninos",
                  number: "02",
                  title: "Videojuegos con IA",
                  desc: "Crea juegos en vez de solo consumirlos.",
                },
                {
                  href: "/curso-creador-contenido-ia",
                  number: "03",
                  title: "Creador de Contenido y Cine IA",
                  desc: "Aprende el nuevo lenguaje digital.",
                },
                {
                  href: "/curso-emprendimiento-ninos",
                  number: "04",
                  title: "Emprendimiento con IA",
                  desc: "Empieza a tiempo, más opciones mañana.",
                },
              ].map((c) => (
                <li key={c.href}>
                  <a
                    href={c.href}
                    className="group block py-10 md:px-8 transition-colors hover:bg-[#EDE6D3]"
                  >
                    <p className="text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold mb-6">
                      Nivel {c.number}
                    </p>
                    <h3
                      className="text-2xl md:text-3xl leading-tight tracking-tight mb-4 group-hover:text-[#C96342] transition-colors"
                      style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                    >
                      {c.title}
                    </h3>
                    <p className="text-base text-[#5A5751] leading-relaxed mb-8 max-w-[32ch]">
                      {c.desc}
                    </p>
                    <span className="text-sm font-semibold text-[#C96342] underline underline-offset-4 decoration-[#C96342]/30 group-hover:decoration-[#C96342]">
                      Ver curso →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Footer />
      </main>
      <WhatsAppButton />
    </>
  )
}
