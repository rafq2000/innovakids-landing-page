import type { Metadata } from "next"
import { MetodologiaPageContent } from "@/components/metodologia-page-content"

export const metadata: Metadata = {
  // 59 chars · keyword-first · brand last
  title: "Metodología Aprender Creando · IA Niños 8-17 | InnovaKids",
  // 154 chars · proof + differentiator + CTA
  description:
    "Metodología Aprender Creando: niños 8-17 años dominan IA construyendo proyectos reales. Método ERICA probado en 527 graduados y 9 países. Clase gratis.",
  keywords: [
    "aprender haciendo",
    "metodología práctica ia niños",
    "proyectos ia para niños",
    "aprendizaje basado en proyectos",
    "curso práctico ia niños",
    "metodologia erica innovakids",
  ],
  alternates: {
    canonical: "https://www.innovakidslatam.com/metodologia-aprender-creando",
  },
  openGraph: {
    title: "Metodología Aprender Creando · Escuela #1 IA Niños | InnovaKids",
    description:
      "Tu hijo no aprende sobre IA: la crea. Método ERICA probado por 527 familias en 9 países, con proyectos reales y clases en vivo. Clase gratis.",
    url: "https://www.innovakidslatam.com/metodologia-aprender-creando",
    siteName: "InnovaKids",
    type: "website",
    locale: "es_419",
    images: [{
      url: "https://www.innovakidslatam.com/hero-child-learning-ai.jpg",
      width: 1200,
      height: 630,
      alt: "Metodología Aprender Creando - Niños 8-17 dominan IA con proyectos reales",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Metodología Aprender Creando · IA Niños 8-17 | InnovaKids",
    description:
      "Los niños no aprenden sobre IA: la crean. Método ERICA probado por 527 familias en 9 países. Clase gratis.",
    images: ["https://www.innovakidslatam.com/hero-child-learning-ai.jpg"],
  },
}

export default function MetodologiaPage() {
  return <MetodologiaPageContent />
}
