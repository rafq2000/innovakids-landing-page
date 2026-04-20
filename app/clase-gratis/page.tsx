import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { CalendlySection } from "@/components/calendly-section"
import Link from "next/link"
import { ArrowLeft, Clock, Video, Users, Star } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  // 59 chars · keyword-first · Gratis trigger · brand
  title: "Clase Gratis de IA para Niños 8-17 · Agenda Hoy | InnovaKids",
  // 151 chars · proof + differentiator + CTA
  description:
    "Clase gratis de IA para niños 8-17 años: sesión diagnóstica de 20 min con demo en vivo. Sin compromiso, cupos limitados. 527 familias. Agenda hoy.",
  keywords: [
    "clase gratis ia niños",
    "sesion diagnostica innovakids",
    "prueba gratis curso ia",
    "clase prueba inteligencia artificial niños",
    "clase gratis innovakids",
    "agenda clase gratis ia",
  ],
  openGraph: {
    title: "Clase Gratis de IA para Niños 8-17 · InnovaKids LATAM",
    description:
      "Sesión diagnóstica gratuita de 20 min. Tu hijo descubre su potencial con IA en vivo. Sin costo, sin compromiso. Cupos limitados.",
    type: "website",
    url: "https://www.innovakidslatam.com/clase-gratis",
    siteName: "InnovaKids",
    locale: "es_419",
    images: [
      {
        url: "https://www.innovakidslatam.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Clase gratis de IA para niños 8-17 años - Sesión diagnóstica InnovaKids",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clase Gratis de IA para Niños 8-17 · Agenda Hoy | InnovaKids",
    description:
      "Sesión diagnóstica gratuita de 20 min con demo en vivo. Sin compromiso, cupos limitados. Agenda hoy.",
    images: ["https://www.innovakidslatam.com/og-image.png"],
  },
  alternates: {
    canonical: "https://www.innovakidslatam.com/clase-gratis",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Sesion Diagnostica Gratuita - Curso de IA para Ninos | InnovaKids",
  description:
    "Sesion diagnostica gratuita de 20 minutos para evaluar el potencial de tu hijo con Inteligencia Artificial. Incluye demostracion en vivo y plan personalizado.",
  eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "VirtualLocation",
    url: "https://www.innovakidslatam.com/clase-gratis",
  },
  organizer: {
    "@type": "Organization",
    name: "InnovaKids",
    url: "https://www.innovakidslatam.com",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/LimitedAvailability",
    url: "https://www.innovakidslatam.com/clase-gratis",
    validFrom: "2026-01-01",
  },
  performer: {
    "@type": "Organization",
    name: "InnovaKids",
  },
  image: "https://www.innovakidslatam.com/og-image.png",
  isAccessibleForFree: true,
}

const benefits = [
  {
    title: "Demostración de IA en vivo",
    description: "Tu hijo experimenta cómo funcionan las herramientas de IA de forma práctica y guiada.",
  },
  {
    title: "Evaluación personalizada",
    description: "Analizamos el nivel e intereses y recomendamos el mejor camino de aprendizaje para él o ella.",
  },
  {
    title: "Reunión informativa para padres",
    description: "Conoce el programa completo, la metodología ERICA y los resultados reales de nuestras familias.",
  },
  {
    title: "Resolución de todas tus dudas",
    description: "Responderemos preguntas sobre horarios, precios, garantías y metodología, sin presión de venta.",
  },
]

const testimonials = [
  { quote: "Mi hijo quedó fascinado con la sesión. En 20 minutos ya quería inscribirse al curso completo.", author: "Carolina M.", city: "Santiago, Chile" },
  { quote: "Excelente la evaluación. Nos dieron un plan personalizado para mi hija de 10 años.", author: "Roberto P.", city: "CDMX, México" },
  { quote: "Sin presión de venta, súper profesionales. Recomendadísimo.", author: "Lucía G.", city: "Bogotá, Colombia" },
]

export default function ClaseGratisPage() {
  return (
    <>
      <Navigation />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-[#FAF7EF] pt-28 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-[#1A1714]/55 font-semibold hover:text-[#C96342] transition-colors mb-10"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Volver al inicio
          </Link>

          {/* Editorial hero */}
          <header className="max-w-3xl mb-16 border-b border-[#1A1714]/12 pb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-[#C96342]" aria-hidden />
              <span className="text-[11px] tracking-[0.22em] uppercase text-[#C96342] font-semibold">
                100% Gratis · Cupos limitados
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[0.98] text-[#1A1714] tracking-tight text-balance mb-7">
              Una sesión diagnóstica de 20 minutos que le abrirá la puerta a tu hijo al mundo de la IA.
            </h1>
            <p className="text-lg md:text-xl text-[#1A1714]/70 leading-relaxed text-pretty font-light max-w-2xl">
              Evaluamos su nivel, le mostramos herramientas reales en vivo y salen con un plan de aprendizaje
              personalizado. Sin costo. Sin compromiso.
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-[11px] tracking-[0.22em] uppercase text-[#C96342] font-semibold">
                  Qué incluye
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl leading-tight text-[#1A1714] tracking-tight text-balance mb-10">
                Una conversación diseñada para que te lleves respuestas, no una venta.
              </h2>

              <ol className="divide-y divide-[#1A1714]/12 border-y border-[#1A1714]/12">
                {benefits.map((item, i) => (
                  <li key={item.title} className="flex gap-6 py-7">
                    <span className="font-serif text-3xl text-[#C96342] leading-none shrink-0 w-12">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-serif text-xl text-[#1A1714] mb-2 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-[#1A1714]/70 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              {/* Logistics grid */}
              <dl className="grid grid-cols-2 gap-x-8 gap-y-8 mt-14 border-t border-[#1A1714]/12 pt-10">
                {[
                  { icon: Clock, label: "Duración", value: "20 minutos" },
                  { icon: Video, label: "Modalidad", value: "Online vía Zoom" },
                  { icon: Users, label: "Edades", value: "8 a 17 años" },
                  { icon: Star, label: "Precio", value: "USD $0" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label}>
                    <div className="flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-[#C96342] font-semibold mb-2">
                      <Icon className="w-3.5 h-3.5" strokeWidth={2.5} />
                      {label}
                    </div>
                    <dd className="font-serif text-2xl text-[#1A1714] leading-tight">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Testimonials rail */}
            <aside className="lg:col-span-5">
              <div className="sticky top-28 bg-[#F2EDE0] p-8 lg:p-10 border-l-2 border-[#C96342]">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[11px] tracking-[0.22em] uppercase text-[#C96342] font-semibold">
                    Testimonios
                  </span>
                </div>
                <h3 className="font-serif text-2xl text-[#1A1714] mb-8 leading-tight">
                  Lo que cuentan las familias tras la sesión.
                </h3>
                <div className="space-y-8">
                  {testimonials.map((t) => (
                    <figure key={t.author} className="border-t border-[#1A1714]/15 pt-6 first:border-t-0 first:pt-0">
                      <blockquote className="font-serif text-lg text-[#1A1714] leading-snug italic">
                        &ldquo;{t.quote}&rdquo;
                      </blockquote>
                      <figcaption className="mt-3 text-[11px] tracking-[0.18em] uppercase text-[#1A1714]/55 font-semibold">
                        {t.author} · {t.city}
                      </figcaption>
                    </figure>
                  ))}
                </div>

                <div className="mt-10 pt-6 border-t border-[#1A1714]/15">
                  <p className="text-sm text-[#1A1714]/75 leading-relaxed">
                    <strong className="text-[#1A1714]">+527 familias</strong> ya confiaron en InnovaKids.
                    Agenda hoy y asegura tu cupo.
                  </p>
                </div>
              </div>
            </aside>
          </div>

          {/* WhatsApp CTA */}
          <section className="border-y-2 border-[#1A1714]/15 py-12 mb-4">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7">
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-px w-10 bg-[#C96342]" aria-hidden />
                  <span className="text-[11px] tracking-[0.22em] uppercase text-[#C96342] font-semibold">
                    Canal directo
                  </span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl leading-tight text-[#1A1714] tracking-tight text-balance">
                  ¿Prefieres conversar por WhatsApp antes de agendar?
                </h2>
                <p className="mt-4 text-[#1A1714]/70 leading-relaxed">
                  Nuestro equipo académico responde de 9am a 8pm hora LATAM. Sin bots.
                </p>
              </div>
              <div className="md:col-span-5 md:text-right">
                <a
                  href="https://wa.me/56964754219?text=Hola,%20quiero%20agendar%20una%20sesi%C3%B3n%20diagn%C3%B3stica%20gratuita%20para%20mi%20hijo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1EB055] text-white px-8 py-5 text-base font-semibold tracking-wide transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M20.52 3.48A11.86 11.86 0 0 0 12.02 0C5.43 0 .08 5.35.07 11.94a11.92 11.92 0 0 0 1.6 5.96L0 24l6.24-1.63a11.94 11.94 0 0 0 5.78 1.47h.01c6.58 0 11.93-5.35 11.94-11.93a11.85 11.85 0 0 0-3.45-8.43zM12.03 21.79h-.01a9.92 9.92 0 0 1-5.05-1.38l-.36-.21-3.7.97.99-3.6-.24-.37a9.9 9.9 0 1 1 18.36-5.27c0 5.47-4.45 9.86-9.99 9.86zm5.46-7.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.47-2.4-1.48-.89-.8-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.21 5.1 4.5.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
                  </svg>
                  Hablar por WhatsApp
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* Calendly Booking Section */}
        <CalendlySection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
