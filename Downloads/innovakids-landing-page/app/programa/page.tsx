import { generateHreflangs } from "@/lib/seo-config";
import type { Metadata } from "next"
import { ProgramPageContent } from "@/components/program-page-content"

export const metadata: Metadata = {
    title: "Programa IA Niños 8-17 · 2 Niveles · 6 Tracks | InnovaKids",
    description:
        "Programa de IA para niños 8-17 años: Nivel 1 Explorer (10 clases) + Nivel 2 Maker (5 core + track a elección: Estudio, Emprender, Video, Audio, Transcribir o Programar). Grupos de 5.",
    keywords: [
        "programa ia niños",
        "curso ia niños",
        "programa inteligencia artificial niños",
        "temario curso ia niños",
        "clases en vivo ia niños",
        "vibe coding niños",
        "vibe maker niños",
    ],
    openGraph: {
        title: "Programa IA Niños · 2 Niveles · 6 Tracks | InnovaKids",
        description:
            "De consumidor a creador en 2 niveles: Explorer (fundamentos IA) + Maker (apps, bots, automatización + track especializado). Grupos de 5. Reserva con $27 USD.",
        url: "https://www.innovakidslatam.com/programa",
        siteName: "InnovaKids",
        type: "website",
        locale: "es_419",
        images: [{
            url: "https://www.innovakidslatam.com/hero-child-learning-ai.jpg",
            width: 1200,
            height: 630,
            alt: "Programa de IA para niños 8-17 años — 2 niveles, 6 tracks — InnovaKids",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Programa IA Niños 8-17 · 2 Niveles · 6 Tracks | InnovaKids",
        description:
            "Explorer + Maker: 2 niveles de IA para niños 8-17. Apps, bots, automatización y 6 tracks especializados. Grupos de 5.",
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
