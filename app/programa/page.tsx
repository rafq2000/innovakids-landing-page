import { generateHreflangs } from "@/lib/seo-config";
import type { Metadata } from "next"
import { ProgramPageContent } from "@/components/program-page-content"

export const metadata: Metadata = {
    // 58 chars · keyword-first · En vivo trigger · brand
    title: "Programa IA Niños 8-17 · 10 Clases En Vivo | InnovaKids",
    // 152 chars · proof + differentiator + CTA
    description:
        "Programa de IA para niños 8-17 años: 10 clases en vivo, arte con IA, música, videojuegos, voz clonada y más. Grupos de 5. Reserva con $27 USD.",
    keywords: [
        "programa ia niños",
        "curso ia niños 10 clases",
        "programa inteligencia artificial niños",
        "temario curso ia niños",
        "clases en vivo ia niños",
    ],
    openGraph: {
        title: "Programa IA Niños · 10 Clases En Vivo | Escuela #1 LATAM",
        description:
            "10 clases en vivo donde tu hijo pasa de consumidor a creador: arte IA, música, videojuegos y voz clonada. Grupos de 5. Reserva con $27 USD.",
        url: "https://www.innovakidslatam.com/programa",
        siteName: "InnovaKids",
        type: "website",
        locale: "es_419",
        images: [{
            url: "https://www.innovakidslatam.com/hero-child-learning-ai.jpg",
            width: 1200,
            height: 630,
            alt: "Programa del curso de IA para niños 8-17 años - 10 clases en vivo InnovaKids",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Programa IA Niños 8-17 · 10 Clases En Vivo | InnovaKids",
        description:
            "10 clases en vivo de IA para niños 8-17: arte, música, videojuegos y voz clonada. Grupos de 5. Reserva con $27 USD.",
        images: ["https://www.innovakidslatam.com/hero-child-learning-ai.jpg"],
    },
    alternates: {
        canonical: "https://www.innovakidslatam.com/programa",
      languages: generateHreflangs("sales")
    },
}

export default function ProgramPage() {
    return <ProgramPageContent />
}
