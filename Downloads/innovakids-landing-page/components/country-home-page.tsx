import dynamic from "next/dynamic"
import { Navigation } from "@/components/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"
import { HeroSection } from "@/components/hero-section"
import { CountrySEOContent } from "@/components/country-seo-content"
import { CountryLinksSection } from "@/components/country-links-section"
import type { CountryConfig } from "@/lib/countries-config"

const TestimonialsSection = dynamic(
  () => import("@/components/testimonials-section").then((m) => ({ default: m.TestimonialsSection })),
  { ssr: true },
)
const ValuePropositionSection = dynamic(
  () => import("@/components/value-proposition-section").then((m) => ({ default: m.ValuePropositionSection })),
  { ssr: true },
)
const CurriculumSection = dynamic(
  () => import("@/components/curriculum-section").then((m) => ({ default: m.CurriculumSection })),
  { ssr: true },
)
const PricingSection = dynamic(
  () => import("@/components/pricing-section").then((m) => ({ default: m.PricingSection })),
  { ssr: true },
)
const InstitutionalSolutionsSection = dynamic(
  () => import("@/components/institutional-solutions-section").then((m) => ({ default: m.InstitutionalSolutionsSection })),
  { ssr: true },
)
const CalendlySection = dynamic(
  () => import("@/components/calendly-section").then((m) => ({ default: m.CalendlySection })),
  { ssr: true, loading: () => <div className="h-[600px] bg-[var(--paper)] animate-pulse" /> },
)
const FAQSection = dynamic(
  () => import("@/components/faq-section").then((m) => ({ default: m.FAQSection })),
  { ssr: true, loading: () => <div className="h-[500px] bg-[var(--paper)] animate-pulse" /> },
)
const Footer = dynamic(
  () => import("@/components/footer").then((m) => ({ default: m.Footer })),
  { ssr: true, loading: () => <div className="h-[300px] bg-[#EDE6D3] animate-pulse" /> },
)

interface CountryHomePageProps {
  country: CountryConfig
}

/**
 * Country-specific editorial intro strip. SEO-critical:
 *  - H2 contains country name + childTerm + main city
 *  - Anchor list of cities (semantic, crawleable)
 *  - Price in local currency (answers FAQ for Google snippet)
 */
function CountryIntroStrip({ country }: { country: CountryConfig }) {
  return (
    <section
      aria-label={`InnovaKids en ${country.name}`}
      className="bg-[#F5F1E8] text-[#2F2F2C] border-t border-[#2F2F2C]/10"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="flex items-center gap-5 mb-10">
          <div className="h-px w-12 bg-[#C96342]" />
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold">
            {country.flag} InnovaKids · {country.name}
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-end">
          <h2
            className="md:col-span-8 text-4xl sm:text-5xl md:text-6xl leading-[1.02] tracking-[-0.02em] font-normal"
            style={{ fontFamily: "'Charter', 'Georgia', serif" }}
          >
            Curso de IA para <em className="italic text-[#C96342]">{country.childTerm} {country.demonym}</em> en {country.mainCity} y todo {country.name}.
          </h2>

          <dl className="md:col-span-4 space-y-5 text-sm">
            {[
              ["Inversión", country.priceDisplay],
              ["Reserva", `${country.reservationPriceDisplay} — resto tras la 2ª clase`],
              ["Modalidad", `Online en vivo · huso horario ${country.name}`],
            ].map(([k, v]) => (
              <div
                key={k}
                className="flex items-baseline gap-6 border-b border-[#2F2F2C]/12 pb-4"
              >
                <dt className="text-[11px] uppercase tracking-[0.18em] text-[#C96342] font-semibold w-24 shrink-0">
                  {k}
                </dt>
                <dd
                  className="text-base text-[#2F2F2C] leading-snug"
                  style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                >
                  {v}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {country.otherCities?.length > 0 && (
          <p className="mt-10 text-sm text-[#5A5751] leading-relaxed max-w-[70ch]">
            Familias de{" "}
            <strong className="text-[#2F2F2C]">{country.mainCity}</strong>,{" "}
            {country.otherCities.map((city, i) => (
              <span key={city}>
                <strong className="text-[#2F2F2C]">{city}</strong>
                {i < country.otherCities.length - 1 ? ", " : " "}
              </span>
            ))}
            y todo {country.name} ya aprenden con InnovaKids.
          </p>
        )}
      </div>
    </section>
  )
}

export function CountryHomePage({ country }: CountryHomePageProps) {
  const faqs = [
    {
      question: `¿El curso de IA está disponible para ${country.childTerm} en ${country.name}?`,
      answer: `Sí, nuestro curso de inteligencia artificial está 100% disponible para ${country.childTerm} ${country.demonym} de 8 a 17 años. Las clases son online en vivo con horarios adaptados a ${country.name}. Tenemos alumnos en ${country.mainCity}, ${country.otherCities.join(", ")} y todo el país.`,
    },
    {
      question: `¿Cuánto cuesta el curso de IA para ${country.childTerm} en ${country.name}?`,
      answer: `El precio para familias de ${country.name} es de ${country.priceDisplay} (${country.priceUSD} USD). ${country.faqPaymentAnswer}`,
    },
    {
      question: `¿A qué hora son las clases para ${country.childTerm} de ${country.name}?`,
      answer: `Las clases se programan adaptadas al huso horario de ${country.name}. Tenemos sesiones por las tardes (después del colegio) y sábados por la mañana. Al agendar tu evaluación gratuita, coordinamos el horario ideal para tu familia.`,
    },
    {
      question: `¿Qué van a crear los ${country.childTerm} ${country.demonym} en el curso?`,
      answer: `En 5 semanas, tu hijo crea: su primera app funcional con IA, arte digital original, música compuesta con inteligencia artificial, un videojuego y una presentación final de su proyecto. Todo con metodología Vibe Coding, sin necesidad de saber programar.`,
    },
    {
      question: "¿Tienen garantía de satisfacción?",
      answer:
        "Sí, ofrecemos garantía de 10 días completos. Si después de la primera semana sientes que el curso no cumplió tus expectativas, te devolvemos el 100% de tu inversión sin preguntas ni complicaciones.",
    },
  ]

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: `Curso de IA para ${country.childTerm} en ${country.name} - InnovaKids`,
    description: `Clases online de inteligencia artificial para ${country.childTerm} ${country.demonym} de 8 a 17 años en ${country.name}. Grupos de máximo 5 alumnos. Metodología Vibe Coding. Garantía de 10 días.`,
    url: `https://www.innovakidslatam.com/${country.code}`,
    image: "https://www.innovakidslatam.com/hero-child-learning-ai.jpg",
    provider: {
      "@type": "Organization",
      name: "InnovaKids",
      url: "https://www.innovakidslatam.com",
      sameAs: ["https://www.instagram.com/innovakidslatam"],
    },
    educationalLevel: "Beginner",
    coursePrerequisites: "Ninguno",
    numberOfLessons: 10,
    timeRequired: "P5W",
    inLanguage: "es",
    courseMode: "online",
    audience: {
      "@type": "EducationalAudience",
      educationalRole: "student",
      audienceType: `${country.childTerm} de 8 a 17 años en ${country.name}`,
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      courseWorkload: "PT90M",
      startDate: "2026-04-27",
      location: {
        "@type": "VirtualLocation",
        url: `https://www.innovakidslatam.com/${country.code}`,
      },
      instructor: { "@type": "Person", name: "InnovaKids Team" },
    },
    offers: {
      "@type": "Offer",
      price: country.priceUSD.toString(),
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      validFrom: "2026-03-01",
      url: `https://www.innovakidslatam.com/${country.code}`,
      seller: { "@type": "Organization", name: "InnovaKids" },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
    areaServed: { "@type": "Country", name: country.name },
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  }

  const countryGeo: Record<string, { lat: number; lng: number }> = {
    cl: { lat: -33.4489, lng: -70.6693 },
    mx: { lat: 19.4326, lng: -99.1332 },
    co: { lat: 4.711, lng: -74.0721 },
    ar: { lat: -34.6037, lng: -58.3816 },
    pe: { lat: -12.0464, lng: -77.0428 },
    es: { lat: 40.4168, lng: -3.7038 },
    us: { lat: 25.7617, lng: -80.1918 },
    ec: { lat: -0.1807, lng: -78.4678 },
    bo: { lat: -16.5, lng: -68.15 },
    uy: { lat: -34.9011, lng: -56.1645 },
    ve: { lat: 10.4806, lng: -66.9036 },
    cr: { lat: 9.9281, lng: -84.0907 },
    pa: { lat: 8.9936, lng: -79.5197 },
    do: { lat: 18.4861, lng: -69.9312 },
    hn: { lat: 14.0818, lng: -87.2068 },
    sv: { lat: 13.6929, lng: -89.2182 },
    gt: { lat: 14.6407, lng: -90.5133 },
    py: { lat: -25.2637, lng: -57.5759 },
    ni: { lat: 12.8654, lng: -85.2072 },
    pr: { lat: 18.2208, lng: -66.5901 },
  }
  const geo = countryGeo[country.code] || { lat: 0, lng: 0 }

  const localSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: `InnovaKids ${country.name}`,
    description: `Academia online de inteligencia artificial para ${country.childTerm} en ${country.name}. Grupos de 5 alumnos, clases en vivo, garantía de 10 días.`,
    url: `https://www.innovakidslatam.com/${country.code}`,
    telephone: country.whatsapp,
    email: "innovakidslatam@gmail.com",
    priceRange: `$${country.priceUSD} USD`,
    address: {
      "@type": "PostalAddress",
      addressCountry: country.code.toUpperCase(),
      addressLocality: country.mainCity,
    },
    geo: { "@type": "GeoCoordinates", latitude: geo.lat, longitude: geo.lng },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "22:00",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
    sameAs: ["https://www.instagram.com/innovakidslatam"],
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "InnovaKids", item: "https://www.innovakidslatam.com" },
      {
        "@type": "ListItem",
        position: 2,
        name: `InnovaKids ${country.name}`,
        item: `https://www.innovakidslatam.com/${country.code}`,
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Navigation countryCode={country.code} />
      <BreadcrumbNav
        items={[
          { label: "Cursos Online", href: "/cursos/inteligencia-artificial" },
          { label: `InnovaKids ${country.name}`, href: `/${country.code}` },
        ]}
      />

      <main className="min-h-screen bg-[var(--paper)]">
        {/* 1 · HERO editorial global (hook + cohorte + CTA) */}
        <HeroSection />

        {/* 2 · Intro editorial por país — SEO local */}
        <CountryIntroStrip country={country} />

        {/* 3 · PRUEBA SOCIAL */}
        <TestimonialsSection />

        <div className="h-24" />

        {/* 4 · PROPUESTA DE VALOR */}
        <ValuePropositionSection />

        <div className="h-24" />

        {/* 5 · CURRÍCULUM */}
        <CurriculumSection />

        <div className="h-24" />

        {/* 6 · PRECIO */}
        <PricingSection />

        <div className="h-24" />

        {/* 7 · INSTITUCIONAL */}
        <InstitutionalSolutionsSection />

        <div className="h-24" />

        {/* 8 · CONVERSIÓN */}
        <CalendlySection />

        <div className="h-24" />

        {/* 9 · FAQ */}
        <FAQSection />

        <div className="h-24" />

        {/* 10 · SEO editorial content por país (H2/H3, texto largo para ranking) */}
        <CountrySEOContent country={country} />

        {/* 11 · Internal links por ciudad / otros países */}
        <CountryLinksSection country={country} />

        <Footer />
      </main>
      <WhatsAppButton />
    </>
  )
}
