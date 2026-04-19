import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { InstitutionalSolutionsSection } from "@/components/institutional-solutions-section"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
    // 59 chars · keyword-first · B2B · brand last
    title: "IA para Colegios e Instituciones · B2B LATAM | InnovaKids",
    // 154 chars · proof + differentiator + CTA
    description:
        "Programas certificados de IA para colegios, municipios, fundaciones y empresas en LATAM. Metodología ERICA, 527 alumnos formados. Solicita tu reunión.",
    keywords: [
        "ia para colegios",
        "curso ia colegios",
        "programa ia instituciones",
        "educacion ia b2b latam",
        "ia colegios municipios fundaciones",
        "innovakids b2b colegios",
    ],
    alternates: {
        canonical: "https://www.innovakidslatam.com/colegios",
    },
    openGraph: {
        title: "IA para Colegios e Instituciones · B2B en LATAM | InnovaKids",
        description:
            "Llevamos la educación en IA a tu institución. Programas certificados para colegios, municipios, fundaciones y empresas RSE. Solicita tu reunión B2B.",
        url: "https://www.innovakidslatam.com/colegios",
        siteName: "InnovaKids",
        type: "website",
        locale: "es_419",
        images: [{
            url: "https://www.innovakidslatam.com/hero-child-learning-ai.jpg",
            width: 1200,
            height: 630,
            alt: "Programas de IA para colegios e instituciones en LATAM - InnovaKids B2B",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: "IA para Colegios e Instituciones · B2B LATAM | InnovaKids",
        description:
            "Programas certificados de IA para colegios, municipios y empresas en LATAM. Solicita tu reunión B2B.",
        images: ["https://www.innovakidslatam.com/hero-child-learning-ai.jpg"],
    },
}

export default function ColegiosB2B() {
    return (
        <>
            <Navigation />
            <main className="min-h-screen bg-background pt-24">

                {/* Cabecera / Hero B2B */}
                <section className="container mx-auto px-4 py-16 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Formación en IA para <span className="text-indigo-400">Instituciones</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
                        InnovaKids se asocia con colegios educacionales, ayuntamientos y empresas RSE para cerrar la brecha tecnológica y preparar a los niños para el futuro laboral.
                    </p>
                    <div className="flex justify-center gap-4">
                        <a
                            href="https://wa.me/56964754219?text=Hola,%20busco%20información%20sobre%20alianzas%20institucionales%20B2B."
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-8">
                                Solicitar Reunión B2B
                            </Button>
                        </a>
                    </div>
                </section>

                {/* Sección de Soluciones Importada */}
                <InstitutionalSolutionsSection />

                <div className="h-24"></div>

            </main>
            <Footer />
            <WhatsAppButton />
        </>
    )
}
