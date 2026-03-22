import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Check, Shield, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Precios del Curso de IA para Niños 2026 — Planes y Opciones | InnovaKids",
  description:
    "Conoce los precios del curso de Inteligencia Artificial para niños. Desde $27 USD la reserva. Planes flexibles para toda Latinoamérica. Garantía de satisfacción.",
  keywords: [
    "curso ia niños precio",
    "precio curso inteligencia artificial niños",
    "cuánto cuesta curso ia niños",
    "curso ia niños barato",
    "planes curso ia niños",
  ],
  alternates: {
    canonical: "https://www.innovakidslatam.com/precios",
  },
  openGraph: {
    title: "Precios del Curso de IA para Niños 2026 — Planes y Opciones | InnovaKids",
    description:
      "Conoce los precios del curso de Inteligencia Artificial para niños. Desde $27 USD la reserva. Planes flexibles para toda Latinoamérica.",
    url: "https://www.innovakidslatam.com/precios",
    siteName: "InnovaKids",
    type: "website",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Curso de Inteligencia Artificial para Niños — InnovaKids Vibe Edition 2026",
  description:
    "Curso online en vivo de IA para niños de 8-17 años. 10 clases, grupos de 5 alumnos, proyectos reales.",
  brand: {
    "@type": "Brand",
    name: "InnovaKids",
  },
  offers: [
    {
      "@type": "Offer",
      name: "Plan Starter",
      price: "147",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: "https://www.innovakidslatam.com/precios",
      description: "5 clases en vivo + acceso a grabaciones",
    },
    {
      "@type": "Offer",
      name: "Plan Explorer (Más Popular)",
      price: "267",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: "https://www.innovakidslatam.com/precios",
      description: "10 clases en vivo + acceso de por vida + certificado + comunidad",
    },
    {
      "@type": "Offer",
      name: "Plan Creator VIP",
      price: "397",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: "https://www.innovakidslatam.com/precios",
      description: "10 clases + mentoría 1:1 + portafolio profesional + acceso VIP",
    },
  ],
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto cuesta el curso de IA para niños de InnovaKids?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "InnovaKids ofrece tres planes: Starter desde $147 USD (5 clases), Explorer desde $267 USD (10 clases, el más popular) y Creator VIP desde $397 USD (10 clases + mentoría personalizada). Todos incluyen garantía de satisfacción.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo pagar en cuotas o en moneda local?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Aceptamos pagos en cuotas y precios adaptados a cada país de Latinoamérica: pesos mexicanos, pesos colombianos, pesos chilenos, soles peruanos, y más. Contáctanos para conocer tu precio local.",
      },
    },
    {
      "@type": "Question",
      name: "¿Tienen garantía de devolución?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Si después de la primera clase no estás satisfecho, te devolvemos el 100% de tu inversión. Sin preguntas, sin complicaciones.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué incluye la reserva de $27 USD?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La reserva de $27 USD asegura el cupo de tu hijo en el próximo ciclo. Este monto se descuenta del precio total del plan que elijas.",
      },
    },
  ],
}

export default function PreciosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 pt-24">
        {/* Hero */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-5xl text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Precios del Curso de IA{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                para Niños 2026
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Planes flexibles para toda Latinoamérica. Reserva el cupo de tu hijo desde <strong className="text-cyan-400">$27 USD</strong>.
              Garantía 100% de satisfacción.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Starter */}
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 flex flex-col">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-white mb-2">Starter</h2>
                  <p className="text-gray-400">Ideal para probar</p>
                </div>
                <div className="mb-6">
                  <span className="text-gray-400 line-through text-lg">$297 USD</span>
                  <p className="text-5xl font-bold text-white">$147 <span className="text-lg font-normal text-gray-400">USD</span></p>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {[
                    "5 clases en vivo (60 min c/u)",
                    "Grupos de máximo 5 alumnos",
                    "Acceso a grabaciones por 6 meses",
                    "Kit de prompts básico",
                    "Soporte por WhatsApp",
                  ].map((item) => (
                    <li key={item} className="flex items-start text-gray-300">
                      <Check className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/#sesion-estrategica">
                  <Button className="w-full bg-white/10 hover:bg-white/20 text-white font-bold py-6">
                    Reservar Cupo
                  </Button>
                </Link>
              </div>

              {/* Explorer - Most Popular */}
              <div className="bg-gradient-to-br from-cyan-900/40 to-purple-900/40 p-8 rounded-2xl border-2 border-cyan-500/50 flex flex-col relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-bold px-6 py-1.5 rounded-full">
                  Mas Popular
                </div>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-white mb-2">Explorer</h2>
                  <p className="text-gray-400">Programa completo</p>
                </div>
                <div className="mb-6">
                  <span className="text-gray-400 line-through text-lg">$497 USD</span>
                  <p className="text-5xl font-bold text-cyan-400">$267 <span className="text-lg font-normal text-gray-400">USD</span></p>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {[
                    "10 clases en vivo (60 min c/u)",
                    "Grupos de máximo 5 alumnos",
                    "Acceso de por vida a grabaciones",
                    "Kit de prompts completo",
                    "Certificado oficial InnovaKids",
                    "Comunidad privada de estudiantes",
                    "Demo Day final",
                    "Soporte prioritario por WhatsApp",
                  ].map((item) => (
                    <li key={item} className="flex items-start text-gray-300">
                      <Check className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/#sesion-estrategica">
                  <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-6 text-lg">
                    Reservar Cupo — $27 USD
                  </Button>
                </Link>
              </div>

              {/* Creator VIP */}
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/30 flex flex-col">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-white mb-2">Creator VIP</h2>
                  <p className="text-gray-400">Experiencia premium</p>
                </div>
                <div className="mb-6">
                  <span className="text-gray-400 line-through text-lg">$697 USD</span>
                  <p className="text-5xl font-bold text-purple-400">$397 <span className="text-lg font-normal text-gray-400">USD</span></p>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {[
                    "Todo lo del Plan Explorer",
                    "2 sesiones de mentoría 1:1",
                    "Portafolio digital profesional",
                    "Acceso VIP a eventos especiales",
                    "Feedback personalizado del instructor",
                    "Prioridad en futuros cursos",
                    "Certificado con honores",
                  ].map((item) => (
                    <li key={item} className="flex items-start text-gray-300">
                      <Check className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/#sesion-estrategica">
                  <Button className="w-full bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 font-bold py-6 border border-purple-500/30">
                    Reservar Cupo VIP
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Guarantee */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-3xl">
            <div className="bg-cyan-900/20 p-8 rounded-2xl border border-cyan-500/30 text-center">
              <Shield className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white mb-4">Garantía 100% de Satisfacción</h2>
              <p className="text-lg text-gray-300">
                Si después de la primera clase sientes que el curso no es lo que esperabas,
                te devolvemos el 100% de tu inversión. Sin preguntas, sin complicaciones.
              </p>
            </div>
          </div>
        </section>

        {/* Prices by Country */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Precios en Moneda Local</h2>
            <p className="text-gray-300 text-center mb-8 text-lg">
              Nuestros precios están adaptados a cada país de Latinoamérica para hacer la educación en IA accesible para todos.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { flag: "🇲🇽", country: "México", currency: "MXN" },
                { flag: "🇨🇴", country: "Colombia", currency: "COP" },
                { flag: "🇦🇷", country: "Argentina", currency: "ARS" },
                { flag: "🇨🇱", country: "Chile", currency: "CLP" },
                { flag: "🇵🇪", country: "Perú", currency: "PEN" },
                { flag: "🇪🇨", country: "Ecuador", currency: "USD" },
                { flag: "🇺🇾", country: "Uruguay", currency: "UYU" },
                { flag: "🇨🇷", country: "Costa Rica", currency: "CRC" },
                { flag: "🇵🇦", country: "Panamá", currency: "USD" },
              ].map((item) => (
                <div
                  key={item.country}
                  className="bg-white/5 backdrop-blur-sm px-4 py-4 rounded-xl text-center border border-white/10"
                >
                  <span className="text-2xl">{item.flag}</span>
                  <p className="text-white font-semibold mt-1">{item.country}</p>
                  <p className="text-gray-400 text-sm">Pagos en {item.currency}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-center mt-6 text-sm">
              Contáctanos por WhatsApp para conocer el precio exacto en tu moneda local.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 bg-gradient-to-b from-gray-800/50 to-gray-900">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Preguntas Frecuentes sobre Precios</h2>
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-3">¿Cuánto cuesta el curso de IA para niños de InnovaKids?</h3>
                <p className="text-gray-300">
                  Ofrecemos tres planes: Starter desde $147 USD (5 clases), Explorer desde $267 USD (10 clases, el más popular)
                  y Creator VIP desde $397 USD (10 clases + mentoría personalizada). Todos incluyen garantía de satisfacción.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-3">¿Puedo pagar en cuotas o en moneda local?</h3>
                <p className="text-gray-300">
                  Sí. Aceptamos pagos en cuotas y precios adaptados a cada país de Latinoamérica: pesos mexicanos,
                  pesos colombianos, pesos chilenos, soles peruanos, y más. Contáctanos para conocer tu precio local.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-3">¿Tienen garantía de devolución?</h3>
                <p className="text-gray-300">
                  Sí. Si después de la primera clase no estás satisfecho, te devolvemos el 100% de tu inversión.
                  Sin preguntas, sin complicaciones.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-3">¿Qué incluye la reserva de $27 USD?</h3>
                <p className="text-gray-300">
                  La reserva de $27 USD asegura el cupo de tu hijo en el próximo ciclo. Este monto se descuenta
                  del precio total del plan que elijas. Es 100% reembolsable si cambias de opinión.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/cursos/inteligencia-artificial" className="text-cyan-400 hover:text-cyan-300 underline">
                Ver detalle del curso
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="/programa" className="text-cyan-400 hover:text-cyan-300 underline">
                Programa completo
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="/clase-gratis" className="text-cyan-400 hover:text-cyan-300 underline">
                Prueba una clase gratis
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 p-12 rounded-3xl border-2 border-cyan-500/50">
              <h2 className="text-3xl font-bold text-white mb-4">Agenda una Clase Gratis</h2>
              <p className="text-xl text-gray-300 mb-8">
                Conoce el método InnovaKids sin compromiso. Tu hijo prueba una clase real y tú decides.
              </p>
              <Link href="/clase-gratis">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold text-lg px-10 py-6 h-auto"
                >
                  Agendar Clase Gratis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
