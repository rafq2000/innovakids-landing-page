import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { TeenHeroSection } from "@/components/teen-hero-section"
import { KeyFeaturesSection } from "@/components/key-features-section"
import { Navigation } from "@/components/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata: Metadata = {
    // 58 chars · keyword-first · age range · brand last
    title: "Curso de IA para Adolescentes 14-17 · Vibe Coding | InnovaKids",
    // 153 chars · differentiator + proof + CTA
    description:
        "Curso de IA para adolescentes 14-17 años: Vibe Coding, apps reales y portafolio universitario. Clases en vivo, grupos de 5, certificado. Clase gratis.",
    keywords: [
        "curso ia adolescentes",
        "programacion para jovenes",
        "bootcamp tecnologia secundaria",
        "preparacion universitaria ingenieria",
        "vibe coding",
        "curso ia 14-17 años",
        "ia para adolescentes",
    ],
    alternates: {
        canonical: "https://www.innovakidslatam.com/adolescentes",
    },
    openGraph: {
        title: "Curso de IA para Adolescentes 14-17 · Escuela #1 en LATAM | InnovaKids",
        description:
            "Tu hijo deja de ser consumidor de tecnología y lanza su primera app con IA. Grupos de 5, portafolio universitario y certificado. Clase gratis.",
        url: "https://www.innovakidslatam.com/adolescentes",
        siteName: "InnovaKids",
        type: "website",
        locale: "es_419",
        images: [{
            url: "https://www.innovakidslatam.com/hero-child-learning-ai.jpg",
            width: 1200,
            height: 630,
            alt: "Curso de IA para adolescentes 14-17 años - Vibe Coding y startups - InnovaKids",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Curso de IA para Adolescentes 14-17 · Vibe Coding | InnovaKids",
        description:
            "Vibe Coding, apps reales y portafolio universitario para jóvenes 14-17 años. Grupos de 5, certificado. Clase gratis.",
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
const VisionSection = dynamic(
    () => import("@/components/vision-section").then((mod) => ({ default: mod.VisionSection })),
    { ssr: true },
)
const QualificationSection = dynamic(
    () => import("@/components/qualification-section").then((mod) => ({ default: mod.QualificationSection })),
    { ssr: true },
)

import { faqs } from "@/lib/faq-data"

export default function AdolescentesPage() {
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

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Navigation />
            <main className="min-h-screen bg-background">
                <TeenHeroSection />

                {/* Keeping the same high-converting structure but with the new Hero context */}
                <AIFutureSection />
                {/* Qualification Section Removed */}
                <ModulePreviewSection />
                <ValueStackSection />
                <div className="h-16" />
                <TestimonialsSection />
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
                {/* Consequences Section Removed */}\n
                <div className="h-24" />
                <PricingSection />
                <div className="h-24" />
                <CalendlySection />
                <div className="h-24" />
                <FAQSection />
                <div className="h-24" />
                <Footer />
            </main>
            <WhatsAppButton />
        </>
    )
}
