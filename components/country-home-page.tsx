import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { Navigation } from "@/components/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { CountryHeroSection } from "@/components/country-hero-section"
import { CountryPricingSection } from "@/components/country-pricing-section"
import { CountryFAQ } from "@/components/country-faq"
import type { CountryConfig } from "@/lib/countries-config"
import { CountrySEOContent } from "@/components/country-seo-content"
import { CountryLinksSection } from "@/components/country-links-section"

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

const countryFAQs = (country: CountryConfig) => [
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
        answer: "Sí, ofrecemos garantía de 10 días completos. Si después de la primera semana sientes que el curso no cumplió tus expectativas, te devolvemos el 100% de tu inversión sin preguntas ni complicaciones.",
    },
]

export function CountryHomePage({ country }: CountryHomePageProps) {
    const faqs = countryFAQs(country)

    // Rich Schema: Course + AggregateRating + Offers (para mostrar precio en Google)
    const courseSchema = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": `Curso de IA para ${country.childTerm} en ${country.name} - InnovaKids`,
        "description": `Clases online de inteligencia artificial para ${country.childTerm} ${country.demonym} de 8 a 17 años en ${country.name}. Grupos de máximo 5 alumnos. Metodología Vibe Coding. Garantía de 10 días.`,
        "url": `https://www.innovakidslatam.com/${country.code}`,
        "image": "https://www.innovakidslatam.com/hero-child-learning-ai.jpg",
        "provider": {
            "@type": "Organization",
            "name": "InnovaKids",
            "url": "https://www.innovakidslatam.com",
            "sameAs": ["https://www.instagram.com/innovakidslatam"],
        },
        "educationalLevel": "Beginner",
        "coursePrerequisites": "Ninguno",
        "numberOfLessons": 10,
        "timeRequired": "P5W",
        "inLanguage": "es",
        "courseMode": "online",
        "audience": {
            "@type": "EducationalAudience",
            "educationalRole": "student",
            "audienceType": `${country.childTerm} de 8 a 17 años en ${country.name}`,
        },
        "hasCourseInstance": {
            "@type": "CourseInstance",
            "courseMode": "online",
            "courseWorkload": "PT90M",
            "location": {
                "@type": "VirtualLocation",
                "url": `https://www.innovakidslatam.com/${country.code}`,
            },
            "instructor": {
                "@type": "Person",
                "name": "InnovaKids Team",
            },
        },
        "offers": {
            "@type": "Offer",
            "price": country.priceUSD.toString(),
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "validFrom": "2026-03-01",
            "url": `https://www.innovakidslatam.com/${country.code}`,
            "seller": {
                "@type": "Organization",
                "name": "InnovaKids",
            },
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "127",
            "bestRating": "5",
            "worstRating": "1",
        },
        "areaServed": {
            "@type": "Country",
            "name": country.name,
        },
    }

    // FAQPage Schema: expande el snippet en Google mostrando preguntas/respuestas
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
            },
        })),
    }

    // LocalBusiness Schema: para búsquedas locales por ciudad/país
    const localSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": `InnovaKids ${country.name}`,
        "description": `Academia de inteligencia artificial para ${country.childTerm} en ${country.name}`,
        "url": `https://www.innovakidslatam.com/${country.code}`,
        "telephone": country.whatsapp,
        "email": "innovakidslatam@gmail.com",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": country.code.toUpperCase(),
        },
        "geo": {
            "@type": "GeoCoordinates",
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:00",
            "closes": "22:00",
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "127",
            "bestRating": "5",
        },
    }

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
            <Navigation countryCode={country.code} />
            <main className="min-h-screen bg-background">
                <CountryHeroSection country={country} />

                <AIFutureSection />
                {/* Qualification Section Removed */}
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

                {/* <UpcomingCoursesSection /> */}

                <div className="h-24" />

                <div className="h-24" />

                {/* Consequences Section Removed */}

                <div className="h-24" />

                <div className="h-24" />

                <CountryPricingSection country={country} />

                <div className="h-24" />

                <CalendlySection />

                <div className="h-24" />

                <CountryFAQ country={country} />

                <div className="h-24" />

                <CountrySEOContent country={country} />
                <SEOContent />

                <CountryLinksSection country={country} />

                <Footer />
            </main>
            <WhatsAppButton />
        </>
    )
}
