import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { Navigation } from "@/components/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { CountryHeroSection } from "@/components/country-hero-section"
import { CountryPricingSection } from "@/components/country-pricing-section"
import { CountryFAQ } from "@/components/country-faq"
import type { CountryConfig } from "@/lib/countries-config"

// Generic imports from home
import { KeyFeaturesSection } from "@/components/key-features-section"

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
const UpcomingCoursesSection = dynamic(
    () => import("@/components/upcoming-courses-section").then((mod) => ({ default: mod.UpcomingCoursesSection })),
    { ssr: true },
)
const CalendlySection = dynamic(
    () => import("@/components/calendly-section").then((mod) => ({ default: mod.CalendlySection })),
    { ssr: true, loading: () => <div className="h-[600px] bg-background animate-pulse" /> },
)
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

interface CountryHomePageProps {
    country: CountryConfig
}

export function CountryHomePage({ country }: CountryHomePageProps) {
    // Schema specific for country
    const countrySchema = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": `Curso de IA para ${country.childTerm} en ${country.name} - InnovaKids`,
        "description": `Clases de inteligencia artificial para ${country.childTerm} de 8-14 años en ${country.name}.`,
        "provider": {
            "@type": "Organization",
            "name": "InnovaKids"
        },
        "offers": {
            "@type": "Offer",
            "price": country.priceUSD.toString(),
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "areaServed": country.name
        },
        "areaServed": {
            "@type": "Country",
            "name": country.name
        }
    }

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(countrySchema) }} />
            <Navigation countryCode={country.code} />
            <main className="min-h-screen bg-background">
                <CountryHeroSection country={country} />

                <AIFutureSection />
                <QualificationSection />
                <ModulePreviewSection />
                <ValueStackSection country={country} />

                <div className="h-16" />

                <TestimonialsSection />
                {/* TODO: Add logic to filter testimonials by country if possible, currently shows general */}

                <div className="h-24" />

                <VisionSection />

                <div className="h-24" />

                <KeyFeaturesSection />

                <div className="h-24" />

                <WhyNowSection />

                <div className="h-24" />

                <CurriculumSection />

                <div className="h-24" />

                <UpcomingCoursesSection />

                <div className="h-24" />

                <ConsequencesSection />

                <div className="h-24" />

                <CountryPricingSection country={country} />

                <div className="h-24" />

                <CalendlySection />

                <div className="h-24" />

                <CountryFAQ country={country} />

                <div className="h-24" />

                <SEOContent />

                <Footer />
            </main>
            <WhatsAppButton />
        </>
    )
}
