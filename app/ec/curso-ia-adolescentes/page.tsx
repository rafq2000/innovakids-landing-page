import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { CheckCircle, Target, ArrowRight } from "lucide-react"
import { CalendlySection } from "@/components/calendly-section"
import { Footer } from "@/components/footer"
import { COHORT, SOCIAL_PROOF } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Curso de IA para Adolescentes (13-17) en Ecuador | InnovaKids",
  description:
    "Adolescentes ecuatorianos de 13 a 17 años crean apps, portafolio digital y proyectos reales con IA. Curso vacacional o regular, clases en vivo, 1 a 1. Pago en USD. Clase gratis.",
  keywords: [
    "curso ia adolescentes ecuador",
    "curso vacacional ia adolescentes quito",
    "inteligencia artificial para jóvenes ecuador",
    "curso ia adolescentes guayaquil",
    "curso tecnología adolescentes ecuador",
    "programación para jóvenes ecuador",
  ],
  alternates: {
    canonical: "https://www.innovakidslatam.com/ec/curso-ia-adolescentes",
  },
  openGraph: {
    title: "Curso de IA para Adolescentes (13-17) en Ecuador | InnovaKids",
    description:
      "Tu hijo adolescente crea apps, portafolio y proyectos reales con IA en 5 semanas. Curso vacacional o regular. Clases 1 a 1, en vivo. Clase gratis.",
    url: "https://www.innovakidslatam.com/ec/curso-ia-adolescentes",
    type: "website",
    locale: "es_EC",
    images: [{
      url: "https://www.innovakidslatam.com/kids-creating-ai-projects.jpg",
      width: 1200,
      height: 630,
      alt: "Adolescentes ecuatorianos creando proyectos con IA - InnovaKids",
    }],
  },
  robots: { index: true, follow: true },
}

const benefits = [
  {
    icon: Target,
    title: "Preparación universitaria",
    desc: "Tu hijo llega a la universidad con un portafolio de proyectos reales creados con IA. Ventaja real frente a otros postulantes.",
  },
  {
    icon: CheckCircle,
    title: "Curso vacacional o regular",
    desc: "Ideal como curso vacacional para adolescentes en Quito, Guayaquil o Cuenca. También disponible en período regular, 100% online.",
  },
  {
    icon: ArrowRight,
    title: "Primer empleo tech",
    desc: "Aprende Vibe Coding, crea apps publicadas y construye habilidades que las empresas tech en Ecuador y el mundo buscan hoy.",
  },
]

const projects = [
  "App funcional publicada con IA",
  "Portafolio digital profesional",
  "Startup MVP con metodología Silicon Valley",
  "Shorts y contenido visual con IA generativa",
  "Certificado digital verificable",
]

export default function CursoIAAdolescentesEcuadorPage() {
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Curso de IA para Adolescentes en Ecuador | InnovaKids",
    description: "Curso de inteligencia artificial para adolescentes de 13 a 17 años en Ecuador. Apps reales, portafolio y proyectos con IA.",
    url: "https://www.innovakidslatam.com/ec/curso-ia-adolescentes",
    provider: { "@type": "Organization", name: "InnovaKids", url: "https://www.innovakidslatam.com" },
    educationalLevel: "Intermediate",
    typicalAgeRange: "13-17",
    inLanguage: "es",
    courseMode: "online",
    offers: { "@type": "Offer", price: "297", priceCurrency: "USD", availability: "https://schema.org/InStock" },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <Navigation />
      <main className="min-h-screen">

        {/* ============ HERO ============ */}
        <section className="relative bg-[#1A1714] text-[#FAF7EF] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A1714] via-[#1A1714] to-[#2a2420]" />
          <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 pt-28 md:pt-36 pb-20 md:pb-28">
            <p className="font-mono-accent text-[10px] uppercase tracking-[0.28em] text-[#B5522F] font-semibold mb-6">
              Adolescentes 13-17 años · Ecuador
            </p>

            <h1 className="font-display text-[40px] sm:text-[56px] md:text-[72px] leading-[0.94] tracking-[-0.03em] text-[#FAF7EF] max-w-[18ch] mb-8">
              Tu hijo adolescente{" "}
              <em className="italic text-[#B5522F]" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}>crea con IA</em>,
              <br />no solo la usa.
            </h1>

            <p className="text-lg md:text-xl leading-[1.5] text-[#FAF7EF]/70 max-w-[52ch] mb-8">
              En 5 semanas lanza su primera app, arma un portafolio profesional y llega preparado a la universidad.
              Clases en vivo, 1 a 1. Ideal como curso vacacional en Quito, Guayaquil o Cuenca.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-8">
              <a
                href="#sesion-estrategica"
                className="group inline-flex items-center gap-3 bg-[#C96342] hover:bg-[#9A4428] text-[#FAF7EF] px-7 py-4 text-base font-semibold rounded-sm shadow-[0_10px_30px_-12px_rgba(201,99,66,0.55)] transition-all duration-300"
              >
                <span>Agendar clase gratis</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="https://wa.me/56964754219?text=Hola%2C%20quiero%20info%20del%20curso%20de%20IA%20para%20adolescentes%20en%20Ecuador"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-2 py-3 text-[#FAF7EF]/70 hover:text-[#FAF7EF] transition-colors"
              >
                Escribir por WhatsApp
              </a>
            </div>

            <div className="flex items-center gap-5 text-[11px] font-mono-accent uppercase tracking-[0.16em] text-[#FAF7EF]/40">
              <span>&#9733; {SOCIAL_PROOF.rating}/5</span>
              <span>&#183;</span>
              <span>{SOCIAL_PROOF.graduates} graduados</span>
              <span>&#183;</span>
              <span>{COHORT.totalSpots} cupos por cohorte</span>
            </div>
          </div>
        </section>

        {/* ============ POR QUÉ ESTE CURSO ============ */}
        <section className="bg-[#FAF7EF] text-[#1A1714] py-20 md:py-28">
          <div className="max-w-[1100px] mx-auto px-6 md:px-10">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-[0.96] tracking-[-0.03em] mb-14 max-w-[20ch]">
              ¿Por qué IA para{" "}
              <em className="italic text-[#B5522F]" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}>adolescentes</em>?
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((b) => (
                <article key={b.title} className="border border-[#1A1714]/12 rounded-[3px] p-7 flex flex-col">
                  <b.icon className="w-6 h-6 text-[#B5522F] mb-4" />
                  <h3 className="font-display text-xl leading-tight tracking-tight mb-3 text-[#1A1714]">{b.title}</h3>
                  <p className="text-[15px] text-[#1A1714]/65 leading-relaxed">{b.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============ PROYECTOS QUE CONSTRUYEN ============ */}
        <section className="bg-[#F5F1E8] text-[#1A1714] py-20 md:py-28 border-t border-[#1A1714]/10">
          <div className="max-w-[1100px] mx-auto px-6 md:px-10">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-[0.96] tracking-[-0.03em] mb-12 max-w-[20ch]">
              Lo que tu hijo{" "}
              <em className="italic text-[#B5522F]" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}>construye</em>.
            </h2>

            <ul className="space-y-5">
              {projects.map((p) => (
                <li key={p} className="flex items-start gap-4 text-lg text-[#1A1714]/80 leading-relaxed">
                  <CheckCircle className="w-5 h-5 text-[#B5522F] mt-[3px] shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12 p-6 bg-[#1A1714]/[0.04] border border-[#1A1714]/10 rounded-[3px]">
              <p className="text-[15px] text-[#1A1714]/70 leading-relaxed">
                <strong className="text-[#1A1714] font-semibold">Familias en Quito, Guayaquil, Cuenca y Ambato</strong> ya confían en InnovaKids.
                100% online, sin importar en qué ciudad de Ecuador estés. Pago directo en USD.
              </p>
            </div>
          </div>
        </section>

        {/* ============ SPECS ============ */}
        <section className="bg-[#1A1714] text-[#FAF7EF] py-16 md:py-20">
          <div className="max-w-[1100px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-x-5 gap-y-8">
              {[
                ["Formato", "10 clases en vivo"],
                ["Duración", "5 semanas"],
                ["Clases", "1 a 1"],
                ["Edad", "13 - 17 años"],
                ["Precio", "$297 USD"],
              ].map(([k, v], i) => (
                <div key={k} className="flex flex-col gap-2">
                  <span className="font-mono-accent text-[9px] uppercase tracking-[0.18em] text-[#B5522F]">
                    {String(i + 1).padStart(2, "0")} &#183; {k}
                  </span>
                  <span className="font-display text-lg md:text-xl text-[#FAF7EF] leading-tight">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ CALENDLY ============ */}
        <CalendlySection />

        {/* ============ VOLVER ============ */}
        <section className="bg-[#FAF7EF] text-[#1A1714] py-12 border-t border-[#1A1714]/10">
          <div className="max-w-[1100px] mx-auto px-6 md:px-10 text-center">
            <Link href="/ec" className="inline-flex items-center gap-2 text-[#B5522F] hover:text-[#9A4428] font-semibold transition-colors">
              <ArrowRight className="w-4 h-4 rotate-180" />
              Volver a InnovaKids Ecuador
            </Link>
          </div>
        </section>

        <Footer />
      </main>
      <WhatsAppButton />
    </>
  )
}
