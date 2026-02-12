import type { Metadata } from "next"
import { ResultsPageContent } from "@/components/results-page-content"

export const metadata: Metadata = {
    title: "Resultados y Testimonios | Proyectos Reales de Alumnos | InnovaKids",
    description:
        "Mira lo que crean niños de 8-14 años con IA en InnovaKids. Videojuegos, arte, música y apps. Testimonios reales de padres en 9 países.",
    alternates: {
        canonical: "https://www.innovakidslatam.com/resultados",
    },
}

export default function ResultsPage() {
    return <ResultsPageContent />
}
