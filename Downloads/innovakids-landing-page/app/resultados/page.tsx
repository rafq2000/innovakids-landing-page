import { generateHreflangs } from "@/lib/seo-config";
import type { Metadata } from "next"
import { ResultsPageContent } from "@/components/results-page-content"

export const metadata: Metadata = {
    // 59 chars · keyword-first · proof · brand last
    title: "Resultados · Proyectos Reales Niños 8-17 con IA | InnovaKids",
    // 154 chars · proof + differentiator + CTA
    description:
        "Mira lo que crean niños 8-17 años con IA en InnovaKids: videojuegos, arte, música y apps. 527 graduados, 9 países, 4.9★. Clase gratis.",
    keywords: [
        "resultados innovakids",
        "proyectos ia niños",
        "testimonios curso ia niños",
        "videojuegos creados por niños ia",
        "resultados curso innovakids",
    ],
    openGraph: {
        title: "Resultados · Proyectos Reales de Niños con IA | InnovaKids",
        description:
            "Videojuegos, arte, música y apps creados por niños 8-17 años con IA. 527 graduados en 9 países, 4.9★. Reserva tu clase gratis.",
        url: "https://www.innovakidslatam.com/resultados",
        siteName: "InnovaKids",
        type: "website",
        locale: "es_419",
        images: [{
            url: "https://www.innovakidslatam.com/hero-child-learning-ai.jpg",
            width: 1200,
            height: 630,
            alt: "Resultados InnovaKids - Proyectos reales de niños 8-17 años con IA",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Resultados · Proyectos Reales Niños 8-17 con IA | InnovaKids",
        description:
            "Videojuegos, arte, música y apps creados por niños 8-17. 527 graduados en 9 países, 4.9★. Clase gratis.",
        images: ["https://www.innovakidslatam.com/hero-child-learning-ai.jpg"],
    },
    alternates: {
        canonical: "https://www.innovakidslatam.com/resultados",
      languages: generateHreflangs("sales")
    },
}

export default function ResultsPage() {
    return <ResultsPageContent />
}
