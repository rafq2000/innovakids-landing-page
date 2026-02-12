import type { Metadata } from "next"
import { ProgramPageContent } from "@/components/program-page-content"

export const metadata: Metadata = {
    title: "Programa del Curso de IA para Niños | 10 Clases en Vivo | InnovaKids",
    description:
        "Conoce las 10 clases del programa InnovaKids. Tu hijo creará arte con IA, música, videojuegos, voz clonada y más. Grupos de 5 niños. Reserva con $27 USD.",
    alternates: {
        canonical: "https://www.innovakidslatam.com/programa",
    },
}

export default function ProgramPage() {
    return <ProgramPageContent />
}
