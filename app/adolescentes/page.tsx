import type { Metadata } from "next"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { CalendlySection } from "@/components/calendly-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { faqs } from "@/lib/faq-data"
import { COHORT, SOCIAL_PROOF } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Cursos de IA para Adolescentes (14-17) | Apps Reales, Portafolio y Certificado | InnovaKids",
  description:
    "Curso de Inteligencia Artificial para adolescentes 14-17 anos. Crean apps reales, portafolio universitario y startups con IA. Clases en vivo, grupos de 5, certificado. Clase gratis.",
  keywords: [
    "cursos de ia para adolescentes",
    "curso ia adolescentes",
    "programacion para jovenes con ia",
    "bootcamp ia adolescentes",
    "curso ia 14-17 anos",
    "ia para adolescentes",
    "inteligencia artificial para jovenes",
    "vibe coding adolescentes",
  ],
  alternates: {
    canonical: "https://www.innovakidslatam.com/adolescentes",
  },
  openGraph: {
    title: "Cursos de IA para Adolescentes (14-17) | InnovaKids Pro",
    description:
      "Deja de ser usuario. Aprende a crear apps, contenido y startups con IA. Grupos de 5, portafolio real y certificado.",
    url: "https://www.innovakidslatam.com/adolescentes",
    type: "website",
    locale: "es_419",
    images: [{
      url: "https://www.innovakidslatam.com/kids-creating-ai-projects.jpg",
      width: 1200,
      height: 630,
      alt: "Adolescentes creando proyectos con IA - InnovaKids Pro Track",
    }],
  },
  robots: { index: true, follow: true },
}

const tracks = [
  {
    num: "01",
    title: "Vibe Coding",
    desc: "Describe una app en lenguaje natural y la IA la construye. Tu la diriges, la publicas y la muestras.",
    tag: "Programacion",
  },
  {
    num: "02",
    title: "Startup con IA",
    desc: "Detecta un problema real, valida la idea, construye el MVP y prepara un pitch. Metodologia Silicon Valley.",
    tag: "Emprendimiento",
  },
  {
    num: "03",
    title: "Creador Visual",
    desc: "Peliculas, shorts virales y contenido profesional. De la idea al trailer en una semana.",
    tag: "Cine y contenido",
  },
]

const proofs = [
  { quote: "Mi hijo de 16 construyo su primera app en la segunda semana. Ahora quiere estudiar ingenieria.", name: "Marcela R.", role: "Madre, Chile" },
  { quote: "Le cambio la perspectiva. Antes solo consumia contenido, ahora lo crea.", name: "Fernando A.", role: "Padre, Mexico" },
  { quote: "El portafolio que armo le sirvio para postular a una beca de tecnologia.", name: "Patricia L.", role: "Madre, Colombia" },
]

export default function AdolescentesPage() {
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Curso de IA para Adolescentes 14-17 | InnovaKids Pro",
    "description": "Vibe Coding, apps reales y portafolio universitario para jovenes 14-17 anos. Clases en vivo, grupos de 5.",
    "url": "https://www.innovakidslatam.com/adolescentes",
    "image": "https://www.innovakidslatam.com/kids-creating-ai-projects.jpg",
    "provider": { "@type": "Organization", "name": "InnovaKids", "url": "https://www.innovakidslatam.com" },
    "educationalLevel": "Intermediate",
    "typicalAgeRange": "14-17",
    "inLanguage": "es",
    "courseMode": "online",
    "offers": {
      "@type": "Offer",
      "price": "267",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
    },
  }

  const priceToday = 267
  const installments = Math.round(priceToday / 3)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <Navigation />
      <main className="min-h-screen">

        {/* ============ HERO — habla al teen, no al padre ============ */}
        <section className="relative bg-[#1A1714] text-[#FAF7EF] overflow-hidden">
          {/* Grain overlay */}
          <svg aria-hidden className="absolute inset-0 w-full h-full opacity-[0.06] mix-blend-screen pointer-events-none">
            <filter id="teen-grain"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" /><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.9 0" /></filter>
            <rect width="100%" height="100%" filter="url(#teen-grain)" />
          </svg>

          {/* Decorative accent */}
          <div
            aria-hidden
            className="absolute -right-10 top-1/2 -translate-y-1/2 font-display italic leading-none select-none pointer-events-none"
            style={{ fontSize: "clamp(14rem, 28vw, 30rem)", color: "rgba(201,99,66,0.06)", fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
          >
            PRO
          </div>

          {/* Top strip */}
          <div className="relative z-20 border-b border-[#FAF7EF]/10">
            <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-3 flex items-center justify-between text-[11px] font-mono-accent tracking-[0.14em] uppercase text-[#FAF7EF]/60">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C96342]" />
                <span className="text-[#C96342] font-semibold">Pro Track</span>
                <span className="hidden sm:inline">&#183; 14 a 17 anos</span>
              </span>
              <span>{COHORT.spotsRemaining} cupos restantes</span>
            </div>
          </div>

          <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 pt-24 md:pt-32 pb-20 md:pb-28">
            {/* Kicker */}
            <div className="flex items-center gap-4 mb-8">
              <span className="font-display italic text-xl text-[#C96342]" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}>14-17</span>
              <div className="h-px flex-1 max-w-[60px] bg-[#FAF7EF]/20" />
              <p className="font-mono-accent text-[10px] uppercase tracking-[0.32em] text-[#FAF7EF]/50">
                Grupo Profesionales
              </p>
            </div>

            {/* H1 — habla al teen directamente */}
            <h1 className="font-display text-[44px] sm:text-[64px] md:text-[80px] lg:text-[96px] leading-[0.92] tracking-[-0.035em] text-[#FAF7EF] max-w-[16ch] mb-8">
              Deja de{" "}
              <em className="italic text-[#FAF7EF]/40" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}>usar</em>{" "}
              la IA.
              <br />
              Aprende a{" "}
              <em className="italic text-[#C96342]" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}>crear</em>{" "}
              con ella.
            </h1>

            {/* Subtitulo */}
            <p className="text-lg md:text-xl leading-[1.45] text-[#FAF7EF]/70 max-w-[48ch] mb-8">
              En 5 semanas lanzas tu primera app, armas un portafolio real y llegas a la universidad con ventaja. Clases en vivo, grupos de 5.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-8">
              <a
                href="#sesion-estrategica"
                className="group inline-flex items-center gap-3 bg-[#C96342] hover:bg-[#9A4428] text-[#FAF7EF] px-7 py-4 text-base font-semibold rounded-sm shadow-[0_10px_30px_-12px_rgba(201,99,66,0.55)] transition-all duration-300"
              >
                <span>Agendar clase gratis</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>&#8594;</span>
              </a>
              <a
                href="#tracks"
                className="inline-flex items-center gap-2 px-2 py-3 text-[#FAF7EF]/70 hover:text-[#FAF7EF] transition-colors"
              >
                Ver las 3 especialidades <span aria-hidden>&#8595;</span>
              </a>
            </div>

            {/* Trust stats */}
            <div className="flex items-center gap-5 text-[11px] font-mono-accent uppercase tracking-[0.16em] text-[#FAF7EF]/40">
              <span>&#9733; {SOCIAL_PROOF.rating}/5</span>
              <span>&#183;</span>
              <span>{SOCIAL_PROOF.graduates} graduados</span>
              <span className="hidden sm:inline">&#183;</span>
              <span className="hidden sm:inline">{SOCIAL_PROOF.guaranteeDays} dias garantia</span>
            </div>

            {/* Specs */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-x-5 gap-y-8 py-10 md:py-12 mt-10 border-t border-[#FAF7EF]/15">
              {[
                ["Formato", "10 clases en vivo"],
                ["Duracion", "5 semanas"],
                ["Grupos", "Max. 5 jovenes"],
                ["Edad", "14 - 17 anos"],
                ["Modalidad", "100% online"],
              ].map(([k, v], i) => (
                <div key={k} className="flex flex-col gap-2">
                  <span className="font-mono-accent text-[9px] uppercase tracking-[0.18em] text-[#C96342]">
                    {String(i + 1).padStart(2, "0")} &#183; {k}
                  </span>
                  <span className="font-display text-lg md:text-xl text-[#FAF7EF] leading-tight">
                    {v}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ SOBRE EL NOMBRE ============ */}
        <section className="bg-[#FAF7EF] text-[#1A1714] py-12 border-b border-[#1A1714]/10">
          <div className="max-w-[1100px] mx-auto px-6 md:px-10">
            <p className="text-center text-base text-[#1A1714]/60 leading-relaxed max-w-[60ch] mx-auto">
              Si, se llama Innova<strong className="text-[#C96342] font-semibold">Kids</strong>.
              Pero el track <strong className="text-[#1A1714] font-semibold">Pro (14-17)</strong> es nivel pre-universitario.
              Misma academia, nivel completamente distinto.
            </p>
          </div>
        </section>

        {/* ============ 3 TRACKS ============ */}
        <section id="tracks" className="bg-[#FAF7EF] text-[#1A1714] py-24 md:py-32">
          <div className="max-w-[1100px] mx-auto px-6 md:px-10">
            <div className="flex items-center gap-4 mb-12">
              <span className="h-px w-10 bg-[#C96342]" />
              <p className="font-mono-accent text-[10px] uppercase tracking-[0.28em] text-[#C96342] font-semibold">
                3 especialidades despues del fundamento
              </p>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[0.96] tracking-[-0.03em] mb-16 max-w-[18ch]">
              Elige tu{" "}
              <em className="italic text-[#C96342]" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}>camino</em>.
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {tracks.map((t) => (
                <article key={t.num} className="border border-[#1A1714]/12 rounded-[3px] p-7 md:p-9 flex flex-col">
                  <p className="font-mono-accent text-[10px] uppercase tracking-[0.24em] text-[#C96342] font-semibold mb-2">{t.tag}</p>
                  <h3 className="font-display text-2xl md:text-3xl leading-tight tracking-tight mb-4 text-[#1A1714]">{t.title}</h3>
                  <p className="text-[15px] text-[#1A1714]/65 leading-relaxed flex-1">{t.desc}</p>
                  <div className="mt-6 pt-5 border-t border-[#1A1714]/10">
                    <span className="font-display italic text-4xl text-[#C96342]/30" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}>{t.num}</span>
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-8 text-sm text-[#1A1714]/50">
              Todos parten por el Modulo 01 (Vibe Explorer). Despues de las 10 clases base, eligen especialidad.
            </p>
          </div>
        </section>

        {/* ============ TESTIMONIOS TEEN ============ */}
        <section className="bg-[#F5F1E8] text-[#1A1714] py-24 md:py-32 border-t border-[#1A1714]/10">
          <div className="max-w-[1100px] mx-auto px-6 md:px-10">
            <div className="flex items-center gap-4 mb-12">
              <span className="h-px w-10 bg-[#C96342]" />
              <p className="font-mono-accent text-[10px] uppercase tracking-[0.28em] text-[#C96342] font-semibold">
                Padres de adolescentes
              </p>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[0.96] tracking-[-0.03em] mb-16 max-w-[16ch]">
              Lo que dicen los padres de{" "}
              <em className="italic text-[#C96342]" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}>teens</em>.
            </h2>

            <div className="space-y-12">
              {proofs.map((p, i) => (
                <article key={i} className="grid md:grid-cols-12 gap-6 items-start pt-8 border-t border-[#1A1714]/12">
                  <span className="md:col-span-1 text-[11px] text-[#C96342] font-semibold tracking-wider font-mono-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="md:col-span-8">
                    <p className="font-display text-2xl md:text-3xl leading-[1.1] tracking-[-0.01em] text-[#1A1714]">
                      <span className="text-[#C96342]">&ldquo;</span>{p.quote}<span className="text-[#C96342]">&rdquo;</span>
                    </p>
                  </div>
                  <div className="md:col-span-3 md:text-right">
                    <p className="font-semibold text-sm text-[#1A1714]">{p.name}</p>
                    <p className="text-xs text-[#1A1714]/50 mt-0.5">{p.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============ CONVERSION — Calendly ============ */}
        <CalendlySection />

        {/* ============ PRECIO COMPACTO ============ */}
        <section className="bg-[#1A1714] text-[#FAF7EF] py-20 md:py-28">
          <div className="max-w-[1100px] mx-auto px-6 md:px-10">
            <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
              <div className="md:col-span-5">
                <p className="font-mono-accent text-[10px] uppercase tracking-[0.28em] text-[#C96342] font-semibold mb-4">
                  Inversion unica
                </p>
                <p
                  className="font-display italic leading-[0.88] tracking-[-0.04em] text-[#FAF7EF] mb-3"
                  style={{ fontSize: "clamp(4rem, 10vw, 7rem)", fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
                >
                  ${priceToday}<span className="text-[#C96342]">.</span>
                </p>
                <p className="font-mono-accent text-[11px] uppercase tracking-[0.22em] text-[#FAF7EF]/55 mb-6">
                  USD pago unico o 3 cuotas de ${installments}
                </p>
                <a
                  href="#sesion-estrategica"
                  className="group inline-flex items-center gap-3 bg-[#C96342] hover:bg-[#9A4428] text-[#FAF7EF] px-7 py-4 text-base font-semibold rounded-sm transition-all duration-300"
                >
                  <span>Agendar clase gratis</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>&#8594;</span>
                </a>
              </div>
              <div className="md:col-span-7 md:border-l md:border-[#FAF7EF]/15 md:pl-10">
                <ul className="space-y-4 mb-8">
                  {[
                    "10 clases en vivo (5 semanas)",
                    "Grupos de maximo 5 jovenes",
                    "Vibe Coding: crea apps reales publicadas",
                    "Portafolio universitario con proyectos documentados",
                    "Certificado digital verificable",
                    "Mentor 1:1 y soporte por WhatsApp",
                    "Acceso a grabaciones",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[15px] text-[#FAF7EF]/80 leading-relaxed">
                      <span className="text-[#C96342] mt-[2px] shrink-0">&#10003;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="p-5 bg-[#FAF7EF]/[0.06] border border-[#FAF7EF]/12 rounded-[3px]">
                  <p className="font-mono-accent text-[10px] uppercase tracking-[0.24em] text-[#C96342] font-semibold mb-2">
                    Garantia {SOCIAL_PROOF.guaranteeDays} dias
                  </p>
                  <p className="text-sm text-[#FAF7EF]/60 leading-relaxed">
                    Si no le convence, devolucion total. Un mensaje por WhatsApp basta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <FAQSection />

        <Footer />
      </main>
      <WhatsAppButton />
    </>
  )
}
