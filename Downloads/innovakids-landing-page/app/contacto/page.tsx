import ContactoClient from "./contacto-client"

export const metadata = {
  title: "Contacto - InnovaKids",
  description: "Contáctanos para resolver tus dudas sobre el curso de Inteligencia Artificial para niños",
  alternates: {
    canonical: "https://www.innovakidslatam.com/contacto",
  },
}

export default function ContactoPage() {
  return <ContactoClient />
}
