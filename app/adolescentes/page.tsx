import type { Metadata } from "next"
import Link from "next/link"
import { HeroSection } from "@/components/hero-section"
import { Navigation } from "@/components/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CurriculumSection } from "@/components/curriculum-section"
import { ValuePropositionSection } from "@/components/value-proposition-section"
import { PricingSection } from "@/components/pricing-section"
import { CalendlySection } from "@/components/calendly-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { faqs } from "@/lib/faq-data"

export const metadata: Metadata = {
    title: "Cursos de IA para Adolescentes (14-17 años) | Clases en Vivo · Clase Gratis | InnovaKids",
    description:
        "Cursos de Inteligencia Artificial para adolescentes 14-17 años. Crean apps reales y portafolio universitario con IA. Clases en vivo, grupos de 5, certificado. 1ª clase gratis.",
    keywords: [
        "cursos de ia para adolescentes",
        "curso ia adolescentes",
        "curso de ia para adolescentes",
        "clases de ia para adolescentes",
        "programacion para jovenes con ia",
        "bootcamp ia adolescentes",
        "curso ia 14-17 años",
        "ia para adolescentes",
        "inteligencia artificial para jovenes",
        "cursos online inteligencia artificial adolescentes",
    ],
    alternates: {
        canonical: "https://www.innovakidslatam.com/adolescentes",
    },
    openGraph: {
        title: "Cursos de IA para Adolescentes (14-17 años) · Escuela #1 en LATAM | InnovaKids",
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
        title: "Cursos de IA para Adolescentes (14-17 años) | InnovaKids",
        description:
            "Cursos de IA para adolescentes 14-17 años. Apps reales y portafolio universitario. Grupos de 5, certificado. Clase gratis.",
        images: ["https://www.innovakidslatam.com/hero-child-learning-ai.jpg"],
    },
    robots: { index: true, follow: true },
}

const teenPillars = [
    {
        number: "01",
        title: "Vibe Coding",
        desc: "Crea apps reales describiéndolas en lenguaje natural. De idea a producto funcionando en una sesión.",
    },
    {
        number: "02",
        title: "Portafolio universitario",
        desc: "Proyectos documentados que suman en postulaciones a carreras de ingeniería, diseño y negocios.",
    },
    {
        number: "03",
        title: "Pensamiento de producto",
        desc: "No solo aprenden herramientas: aprenden a detectar problemas, validar ideas y lanzar con IA.",
    },
]

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

    const courseSchema = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "Curso de IA para Adolescentes 14-17 | InnovaKids",
        "description": "Vibe Coding, apps reales y portafolio universitario para jóvenes 14-17 años. Clases en vivo, grupos de 5.",
        "url": "https://www.innovakidslatam.com/adolescentes",
        "image": "https://www.innovakidslatam.com/hero-child-learning-ai.jpg",
        "provider": { "@type": "Organization", "name": "InnovaKids", "url": "https://www.innovakidslatam.com" },
        "educationalLevel": "Intermediate",
        "typicalAgeRange": "14-17",
        "inLanguage": "es",
        "courseMode": "online",
        "offers": {
            "@type": "Offer",
            "price": "267",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "url": "https://www.innovakidslatam.com/adolescentes",
        },
    }

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Navigation />
            <main className="min-h-screen bg-[#FAF7EF]">
                <HeroSection />

                {/* Editorial intro specific to teens */}
                <section className="bg-[#FAF7EF] py-24 md:py-32 border-y border-[#1A1714]/12" aria-label="Introducción adolescentes">
                    <div className="max-w-[1100px] mx-auto px-6 md:px-10">
                        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start mb-16">
                            <div className="md:col-span-5">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="h-px w-10 bg-[#C96342]" aria-hidden />
                                    <span className="text-[11px] tracking-[0.28em] uppercase text-[#C96342] font-semibold">
                                        Para 14 a 17 años
                                    </span>
                                </div>
                                <h2
                                    className="text-5xl md:text-6xl leading-[0.98] tracking-[-0.02em] text-[#1A1714]"
                                    style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                                >
                                    De consumidor a <em className="italic text-[#C96342]">creador</em>.
                                </h2>
                                <p className="mt-8 text-lg text-[#1A1714]/70 leading-relaxed max-w-[38ch]">
                                    El curso que les enseña a usar la IA como los estudiantes universitarios que lideran
                                    sus carreras, no como los que llegan tarde a descubrirla.
                                </p>
                            </div>

                            <ul className="md:col-span-7 grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#1A1714]/12 border-y border-[#1A1714]/12">
                                {teenPillars.map((p) => (
                                    <li key={p.number} className="py-8 md:px-6">
                                        <p className="text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold mb-5">
                                            {p.number}
                                        </p>
                                        <h3
                                            className="text-xl md:text-2xl leading-tight tracking-tight mb-4 text-[#1A1714]"
                                            style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                                        >
                                            {p.title}
                                        </h3>
                                        <p className="text-sm text-[#1A1714]/70 leading-relaxed">
                                            {p.desc}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#1A1714]/12">
                            <Link
                                href="/#inversion"
                                className="inline-flex items-center justify-center gap-2 bg-[#C96342] hover:bg-[#A8502F] text-[#FAF7EF] px-8 py-4 font-semibold text-base tracking-wide transition-colors"
                            >
                                Ver el programa completo
                                <span aria-hidden>→</span>
                            </Link>
                            <Link
                                href="/clase-gratis"
                                className="inline-flex items-center justify-center gap-2 border border-[#1A1714] text-[#1A1714] hover:bg-[#1A1714] hover:text-[#FAF7EF] px-8 py-4 font-semibold text-base tracking-wide transition-colors"
                            >
                                Agendar clase gratis
                            </Link>
                        </div>
                    </div>
                </section>

                <TestimonialsSection />
                <div className="h-24" />
                <ValuePropositionSection />
                <div className="h-24" />
                <CurriculumSection />
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
