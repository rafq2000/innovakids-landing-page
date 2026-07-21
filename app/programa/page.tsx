import type { Metadata } from "next"
import { ProgramPageContent } from "@/components/program-page-content"

export const metadata: Metadata = {
    title: "Programa Vibe Explorer · IA para Niños 8-17 | InnovaKids",
    description:
        "Programa de IA para niños 8-17: Vibe Explorer, 10 clases en vivo 1 a 1 — arte, música, voz clonada y su primer videojuego con IA.",
    openGraph: {
        title: "Programa Vibe Explorer · IA para Niños 8-17 | InnovaKids",
        description:
            "De consumidor a creador con Vibe Explorer: 10 clases en vivo de IA para niños 8-17. Arte, música y su primer videojuego. Clases 1 a 1. Reserva con $27 USD.",
        url: "https://www.innovakidslatam.com/programa",
        siteName: "InnovaKids",
        type: "website",
        locale: "es_419",
        images: [{
            url: "https://www.innovakidslatam.com/hero-child-learning-ai.jpg",
            width: 1200,
            height: 630,
            alt: "Programa Vibe Explorer de IA para niños 8-17 años — InnovaKids",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Programa Vibe Explorer · IA para Niños 8-17 | InnovaKids",
        description:
            "Vibe Explorer: 10 clases en vivo de IA para niños 8-17. Arte, música, voz clonada y su primer videojuego. Clases 1 a 1.",
        images: ["https://www.innovakidslatam.com/hero-child-learning-ai.jpg"],
    },
    alternates: {
        canonical: "https://www.innovakidslatam.com/programa",
    },
}

export default function ProgramPage() {
    return <ProgramPageContent />
}
