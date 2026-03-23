import type React from "react"
import type { Metadata } from "next"
import ProtectedRoute from "@/components/protected-route"
import { CalculatorStructuredData, FAQStructuredData, BreadcrumbStructuredData } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "🥇 Calculadora de Finiquito Chile 2026 - La Más Precisa y Gratis | LegalPO",
  description:
    "Calculadora de finiquito Chile #1 - La más precisa y confiable. Calcula tu indemnización por años de servicio, vacaciones proporcionales, aviso previo. +100,000 usuarios. 100% gratis y basada en ley chilena 2026.",
  keywords: [
    "calculadora finiquito chile",
    "calculadora de finiquito",
    "calcular finiquito chile",
    "finiquito laboral chile",
    "calculadora finiquito gratis",
    "finiquito chile 2026",
    "indemnización años servicio",
    "calculadora indemnización chile",
    "finiquito online chile",
    "como calcular finiquito",
    "finiquito despido chile",
    "calculadora finiquito precisa",
    "finiquito laboral gratis",
    "derechos laborales chile",
    "código trabajo chile",
    "vacaciones proporcionales",
    "aviso previo indemnización",
    "gratificaciones proporcionales",
    "calculadora legal chile",
    "calculadora finiquito confiable",
    "calculadora finiquito 2026",
    "finiquito calculadora online",
    "calculadora finiquito trabajadores",
    "calculadora finiquito empleados",
  ].join(", "),
  authors: [{ name: "LegalPO - Calculadora Finiquito Chile" }],
  creator: "LegalPO",
  publisher: "LegalPO - Calculadora de Finiquito Chile",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://legalpo.cl"),
  alternates: {
    canonical: "/calculators/finiquito",
  },
  openGraph: {
    title: "🥇 Calculadora de Finiquito Chile 2026 - La Más Precisa y Confiable",
    description:
      "Calculadora de finiquito Chile #1. Calcula tu indemnización por años de servicio, vacaciones proporcionales y más. +100,000 usuarios confían en nosotros. 100% gratis.",
    url: "https://legalpo.cl/calculators/finiquito",
    siteName: "LegalPO - Calculadora Finiquito Chile",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/images/calculadora-finiquito-chile-2025.jpg",
        width: 1200,
        height: 630,
        alt: "Calculadora de Finiquito Chile 2026 - LegalPO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "🥇 Calculadora de Finiquito Chile 2025 - La Más Precisa",
    description:
      "Calculadora de finiquito Chile #1. Calcula tu indemnización por años de servicio, vacaciones proporcionales y más. +100,000 usuarios. 100% gratis.",
    images: ["/images/calculadora-finiquito-chile-2025.jpg"],
    creator: "@LegalPOChile",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    // "google-site-verification": "TU_CODIGO_AQUI", 
  },
}

export default function CalculadoraFiniquitoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <BreadcrumbStructuredData items={[
        { name: "Inicio", url: "https://legalpo.cl" },
        { name: "Calculadoras", url: "https://legalpo.cl/herramientas" },
        { name: "Calculadora de Finiquito", url: "https://legalpo.cl/calculators/finiquito" },
      ]} />
      <CalculatorStructuredData
        name="Calculadora de Finiquito Chile 2026"
        description="Calculadora de finiquito laboral online y gratuita basada en el Código del Trabajo de Chile 2026."
        url="https://legalpo.cl/calculators/finiquito"
      />
      <FAQStructuredData
        faqs={[
          {
            question: "¿Cómo calcular el finiquito?",
            answer: "Para calcular el finiquito se deben considerar: años de servicio, vacaciones proporcionales, indemnización por aviso previo y mes de aviso. Nuestra calculadora oficial realiza este cálculo gratis."
          },
          {
            question: "¿Qué es el tope de 11 años?",
            answer: "La ley chilena establece un tope de 11 años para la indemnización por años de servicio, salvo para contratos anteriores a agosto de 1981."
          },
          {
            question: "¿Cuándo se paga el finiquito?",
            answer: "El empleador tiene un plazo de 10 días hábiles desde la ratificación del finiquito para realizar el pago."
          }
        ]}
      />
      <ProtectedRoute>{children}</ProtectedRoute>
    </>
  )
}
