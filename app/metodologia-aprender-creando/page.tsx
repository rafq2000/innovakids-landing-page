import type { Metadata } from "next"
import { MetodologiaPageContent } from "@/components/metodologia-page-content"

export const metadata: Metadata = {
  title: "Metodología Aprender Creando | Innovakids - Curso de IA para Niños",
  description:
    "Descubre cómo los niños aprenden IA creando proyectos reales. Metodología práctica basada en proyectos donde tu hijo construye, experimenta y domina la Inteligencia Artificial haciendo.",
  keywords:
    "aprender haciendo, metodología práctica IA niños, proyectos IA para niños, aprendizaje basado en proyectos, curso práctico IA niños",
  openGraph: {
    title: "Metodología Aprender Creando | Innovakids",
    description: "Los niños no aprenden sobre IA. La crean. Metodología práctica basada en proyectos reales.",
    url: "https://innovakids.ai/metodologia-aprender-creando",
    type: "website",
  },
}

export default function MetodologiaPage() {
  return <MetodologiaPageContent />
}
