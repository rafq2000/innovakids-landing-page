import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Check, Shield, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Precio Curso IA para Niños 2026 · $267 USD | InnovaKids",
  description:
    "Curso completo de IA para niños 8-17 años: 10 clases en vivo, grupos de 5 alumnos, certificado y garantía 10 días. $267 USD pago único o 3 cuotas.",
  keywords: [
    "curso ia niños precio",
    "precio curso inteligencia artificial niños",
    "cuánto cuesta curso ia niños",
    "precio innovakids 2026",
  ],
  alternates: {
    canonical: "https://www.innovakidslatam.com/precios",
  },
  openGraph: {
    title: "Precio Curso IA para Niños 2026 · $267 USD | InnovaKids",
    description:
      "10 clases en vivo, grupos de 5 alumnos, certificado y garantía 10 días. $267 USD. Reserva tu cupo con $27 USD hoy.",
    url: "https://www.innovakidslatam.com/precios",
    siteName: "InnovaKids",
    type: "website",
    locale: "es_419",
    images: [{
      url: "https://www.innovakidslatam.com/hero-child-learning-ai.jpg",
      width: 1200,
      height: 630,
      alt: "Precio curso IA para niños 2026 - InnovaKids $267 USD",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Precio Curso IA para Niños 2026 · $267 USD | InnovaKids",
    description: "10 clases en vivo, grupos de 5, certificado y garantía 10 días. Reserva con $27 USD.",
    images: ["https://www.innovakidslatam.com/hero-child-learning-ai.jpg"],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Programa Vibe Explorer — Curso IA para Niños InnovaKids 2026",
  description: "Curso online en vivo de IA para niños de 8-17 años. 10 clases, grupos de 5 alumnos, proyectos reales y certificado.",
  brand: { "@type": "Brand", name: "InnovaKids" },
  offers: {
    "@type": "Offer",
    name: "Programa Vibe Explorer",
    price: "267",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: "https://www.innovakidslatam.com/precios",
    description: "10 clases en vivo + grabaciones + kit completo + certificado + garantía 10 días",
  },
}

const INCLUDES = [
  "10 clases en vivo de 90 min (5 semanas)",
  "Grupos de máximo 5 alumnos",
  "Grabaciones de todas las clases",
  "Kit de Bienvenida completo (8 documentos)",
  "200 prompts para tareas escolares",
  "Acceso a comunidad Discord exclusiva",
  "Certificado Digital Vibe Explorer",
  "Gala de Graduación con presentación del proyecto final",
  "Soporte por WhatsApp en horario de clases",
  "Garantía de satisfacción de 10 días — devolución 100%",
]

export default function PreciosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <main className="min-h-screen bg-background">

        {/* Hero */}
        <section className="py-16 md:py-24 px-4 border-b">
          <div className="container mx-auto max-w-3xl text-center">
            <p className="text-sm font-mono tracking-widest uppercase text-primary mb-4">
              Programa Vibe Explorer · Cohorte Mayo 2026
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-balance">
              Un solo programa.<br />Un solo precio.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Sin planes confusos, sin niveles artificiales. Tu hijo entra al programa completo
              y sale con un proyecto real, un certificado y habilidades que ningún colegio enseña todavía.
            </p>
          </div>
        </section>

        {/* Pricing Card */}
        <section className="py-16 md:py-20 px-4">
          <div className="container mx-auto max-w-2xl">
            <div className="border-2 border-primary rounded-2xl overflow-hidden shadow-xl">

              {/* Card header */}
              <div className="bg-primary px-8 py-6 text-center">
                <p className="text-primary-foreground/80 text-sm font-mono tracking-widest uppercase mb-1">
                  Programa Completo
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground">
                  Vibe Explorer — Nivel 01
                </h2>
              </div>

              {/* Price */}
              <div className="px-8 py-8 text-center border-b">
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-6xl md:text-7xl font-bold">$267</span>
                  <span className="text-xl text-muted-foreground font-mono">USD</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  Pago único · o 3 cuotas de $89 USD
                </p>
                <p className="text-sm mt-3 text-muted-foreground">
                  Reserva tu cupo hoy con solo{" "}
                  <strong className="text-primary">$27 USD</strong>{" "}
                  — el resto se cobra después de la 2ª clase.
                </p>
              </div>

              {/* Includes */}
              <div className="px-8 py-8">
                <p className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-5">
                  Todo incluido
                </p>
                <ul className="space-y-3 mb-8">
                  {INCLUDES.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm md:text-base">{item}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/#inversion">
                  <Button size="lg" className="w-full text-base md:text-lg h-14 font-bold">
                    Reservar cupo — $27 USD hoy
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>

                <p className="text-center text-xs text-muted-foreground mt-4">
                  Los $27 USD se descuentan del precio final · 100% reembolsables
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Guarantee */}
        <section className="py-12 px-4 bg-muted/30 border-y">
          <div className="container mx-auto max-w-2xl text-center">
            <Shield className="w-10 h-10 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Garantía de 10 días</h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
              Si durante los primeros 10 días del curso la familia siente que no era lo que esperaba,
              devolvemos el <strong className="text-foreground">100% del valor pagado</strong> sin ninguna pregunta.
              Incluyendo los $27 de reserva.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-20 px-4">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Preguntas frecuentes</h2>
            <div className="space-y-5">
              {[
                {
                  q: "¿Por qué hay una reserva de $27 USD?",
                  a: "La reserva garantiza el cupo de tu hijo en el grupo de máximo 5 alumnos. Se descuenta del precio total y es 100% reembolsable. El resto se cobra recién después de la 2ª clase, cuando ya verificaste que funciona.",
                },
                {
                  q: "¿Puedo pagar en mi moneda local?",
                  a: "Sí. Aceptamos pagos en pesos chilenos, mexicanos, colombianos, soles peruanos y más. Escríbenos por WhatsApp al +56 9 6475 4219 y te enviamos el precio exacto en tu moneda.",
                },
                {
                  q: "¿Puedo pagar en cuotas?",
                  a: "Sí. Puedes pagar en 3 cuotas de $89 USD sin interés. También ofrecemos cuotas en moneda local según el país.",
                },
                {
                  q: "¿Qué pasa si mi hijo no puede asistir a alguna clase?",
                  a: "Recibirá la grabación dentro de las 24 horas siguientes y puede agendar una tutoría de recuperación gratuita. La asistencia mínima para certificado es 8 de 10 clases.",
                },
                {
                  q: "¿Hay descuento por hermanos?",
                  a: "Sí, el segundo hermano tiene un descuento especial. Contáctanos por WhatsApp para coordinar.",
                },
              ].map(({ q, a }) => (
                <div key={q} className="border rounded-xl p-6">
                  <h3 className="font-semibold text-base md:text-lg mb-2">{q}</h3>
                  <p className="text-muted-foreground text-sm md:text-base">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-muted/30 border-t">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">¿Tienes dudas antes de inscribirte?</h2>
            <p className="text-muted-foreground mb-6">
              Escríbenos por WhatsApp. Respondemos en menos de 2 horas en días hábiles.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" asChild>
                <Link href="/#inversion">
                  Reservar cupo — $27 USD
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://wa.me/56964754219" target="_blank" rel="noopener noreferrer">
                  Preguntar por WhatsApp
                </a>
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8 text-sm text-muted-foreground">
              <Link href="/cursos/inteligencia-artificial" className="hover:text-foreground underline underline-offset-2">Ver detalle del programa</Link>
              <Link href="/clase-gratis" className="hover:text-foreground underline underline-offset-2">Prueba una clase gratis</Link>
              <Link href="/resultados" className="hover:text-foreground underline underline-offset-2">Ver resultados de alumnos</Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
