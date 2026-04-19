import ContactoClient from "./contacto-client"

export const metadata = {
  // 55 chars · keyword-first · brand
  title: "Contacto · Curso de IA para Niños 8-17 | InnovaKids",
  // 152 chars · proof + differentiator + CTA
  description:
    "Contáctanos para resolver dudas sobre el curso de IA para niños 8-17 años. Soporte por WhatsApp, email y llamada. 527 familias en 9 países. Escríbenos.",
  keywords: [
    "contacto innovakids",
    "contacto curso ia niños",
    "whatsapp innovakids",
    "soporte curso ia niños latam",
  ],
  alternates: {
    canonical: "https://www.innovakidslatam.com/contacto",
  },
  openGraph: {
    title: "Contacto · InnovaKids Curso de IA para Niños 8-17 años",
    description:
      "Contáctanos por WhatsApp, email o llamada. Resolvemos tus dudas sobre el curso de IA para niños 8-17 años. 527 familias en 9 países.",
    url: "https://www.innovakidslatam.com/contacto",
    siteName: "InnovaKids",
    type: "website",
    locale: "es_419",
    images: [{
      url: "https://www.innovakidslatam.com/hero-child-learning-ai.jpg",
      width: 1200,
      height: 630,
      alt: "Contacto InnovaKids - Curso de IA para niños 8-17 años",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto · Curso de IA para Niños 8-17 | InnovaKids",
    description:
      "Contáctanos por WhatsApp, email o llamada. Curso de IA para niños 8-17 años. Escríbenos.",
    images: ["https://www.innovakidslatam.com/hero-child-learning-ai.jpg"],
  },
}

export default function ContactoPage() {
  return <ContactoClient />
}
