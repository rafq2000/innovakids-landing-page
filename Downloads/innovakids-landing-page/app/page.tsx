import type { Metadata } from "next"
import { HeroSection } from "@/components/hero-section"
import { Navigation } from "@/components/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CalendlySection } from "@/components/calendly-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { ExitIntentPopup } from "@/components/exit-intent-popup"
import { generateHreflangs } from "@/lib/seo-config"
import { faqs } from "@/lib/faq-data"
import { COHORT, SOCIAL_PROOF } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Cursos de IA para Ninos y Adolescentes (8-17 anos) | 4.9 Clase Gratis | InnovaKids",
  description:
    "Clases en vivo de Inteligencia Artificial para ninos y adolescentes 8-17 anos. Crean videojuegos, apps y arte con IA. Grupos de max. 5 alumnos. 527 graduados en 9 paises. 4.9. 1a clase gratis.",
  keywords: [
    "mi hijo se queda atras en la era de la ia",
    "como evitar que mi hijo se quede atras con la ia",
    "curso inteligencia artificial ninos",
    "curso ia para ninos",
    "cursos de ia para ninos",
    "curso de inteligencia artificial para ninos",
    "clases de inteligencia artificial para ninos",
    "ia para ninos",
    "curso ia para adolescentes",
    "escuela online de inteligencia artificial",
    "academia ia ninos",
    "vibe coding para ninos",
    "innovakids",
    "innova kids",
  ],
  alternates: {
    canonical: "https://www.innovakidslatam.com",
    languages: generateHreflangs("home"),
  },
  openGraph: {
    title: "Cursos de IA para Ninos y Adolescentes (8-17 anos) | 4.9 Clase Gratis | InnovaKids",
    description:
      "Clases de IA en vivo para ninos 8-17 anos. Crean videojuegos, apps y arte con Inteligencia Artificial. Max. 5 alumnos. 527 graduados. 4.9. Reserva tu 1a clase gratis hoy",
    url: "https://www.innovakidslatam.com",
    type: "website",
    locale: "es_419",
    images: [{
      url: "https://www.innovakidslatam.com/hero-child-learning-ai.jpg",
      width: 1200,
      height: 630,
      alt: "Curso de Inteligencia Artificial para Ninos y Adolescentes 8-17 anos - InnovaKids"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cursos de IA para Ninos y Adolescentes (8-17 anos) | 4.9 | InnovaKids",
    description:
      "Clases de IA para ninos 8-17 anos. Crean videojuegos, apps y arte con IA. Grupos de 5. 527 graduados. 4.9. Primera clase gratis.",
    images: ["https://www.innovakidslatam.com/hero-child-learning-ai.jpg"],
  },
}

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq: any) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "InnovaKids",
    "alternateName": ["InnovaKids LATAM", "Cursos IA Ninos"],
    "url": "https://www.innovakidslatam.com",
    "description": "Academia lider para que ninos y adolescentes de 8 a 17 anos aprendan Inteligencia Artificial a tiempo y no se queden atras. LATAM y Espana.",
    "inLanguage": "es",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.innovakidslatam.com/blog?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "InnovaKids", "item": "https://www.innovakidslatam.com" }
    ]
  }

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Curso de Inteligencia Artificial para Ninos y Adolescentes - Que No Se Quede Atras | InnovaKids",
    "description": "Para que tu hijo aprenda IA a tiempo y no se quede atras en la era de la IA. En 5 semanas crea apps, videojuegos y proyectos con IA, y llega preparado al colegio, la universidad y el trabajo. 8-17 anos. Grupos de 5. Garantia de 10 dias.",
    "url": "https://www.innovakidslatam.com",
    "image": "https://www.innovakidslatam.com/hero-child-learning-ai.jpg",
    "provider": {
      "@type": "Organization",
      "name": "InnovaKids",
      "url": "https://www.innovakidslatam.com",
    },
    "educationalLevel": "Beginner",
    "coursePrerequisites": "Ninguno",
    "numberOfLessons": 10,
    "timeRequired": "P5W",
    "inLanguage": "es",
    "courseMode": "online",
    "offers": {
      "@type": "Offer",
      "price": "267",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": "https://www.innovakidslatam.com",
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1",
    },
  }

  const priceToday = 267
  const installments = Math.round(priceToday / 3)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <Navigation />
      <main className="min-h-screen bg-background">

        {/* 1 - HERO: hook + promesa + CTA primario */}
        <HeroSection />

        {/* 2 - 3 PASOS + STATS: como funciona + prueba social compacta */}
        <HowItWorksSection />

        {/* 3 - TESTIMONIOS: prueba social (padres reales) */}
        <TestimonialsSection />

        {/* 4 - CONVERSION: formulario Calendly (antes estaba en posicion 8) */}
        <CalendlySection />

        {/* 5 - PRECIO + GARANTIA: tarjeta compacta */}
        <section
          id="inversion"
          className="bg-[#1A1714] text-[#FAF7EF] py-20 md:py-28 overflow-hidden"
        >
          <div className="max-w-[1100px] mx-auto px-6 md:px-10">
            <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">

              {/* Precio */}
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
                  className="group inline-flex items-center gap-3 bg-[#C96342] hover:bg-[#9A4428] text-[#FAF7EF] px-7 py-4 text-base font-semibold rounded-sm shadow-[0_10px_30px_-12px_rgba(201,99,66,0.55)] hover:shadow-[0_14px_40px_-12px_rgba(201,99,66,0.7)] transition-all duration-300"
                >
                  <span>Agendar clase gratis</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>&#8594;</span>
                </a>
              </div>

              {/* Que incluye + Garantia */}
              <div className="md:col-span-7 md:border-l md:border-[#FAF7EF]/15 md:pl-10">
                <ul className="space-y-4 mb-8">
                  {[
                    "10 clases en vivo (5 semanas, 2 por semana)",
                    "Grupos de maximo 5 ninos",
                    "4 habilidades: estudiar, programar, crear y manejar agentes IA",
                    "Mentor 1:1 cuando lo necesite",
                    "Soporte por WhatsApp para ti y tu hijo",
                    "Certificado digital verificable",
                    "Acceso a grabaciones de cada clase",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[15px] text-[#FAF7EF]/80 leading-relaxed">
                      <span className="text-[#C96342] mt-[2px] shrink-0">&#10003;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Garantia compacta */}
                <div className="p-5 bg-[#FAF7EF]/[0.06] border border-[#FAF7EF]/12 rounded-[3px]">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-display italic text-2xl text-[#C96342]" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}>10</span>
                    <p className="font-mono-accent text-[10px] uppercase tracking-[0.24em] text-[#C96342] font-semibold">
                      Dias de garantia total
                    </p>
                  </div>
                  <p className="text-sm text-[#FAF7EF]/60 leading-relaxed">
                    Si no le gusta a tu hijo o no aprende a usar la IA, te devolvemos el dinero. Un mensaje por WhatsApp basta.
                  </p>
                </div>

                {/* Reserva $27 */}
                <p className="mt-5 font-mono-accent text-[10px] uppercase tracking-[0.22em] text-[#FAF7EF]/45">
                  Reserva con USD 27 hoy. El resto se paga despues de la 2a clase.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6 - FAQ: cierre de objeciones */}
        <FAQSection />

        {/* 7 - CURSOS ESPECIALIZADOS: links internos SEO */}
        <section
          className="bg-[#F5F1E8] text-[#2F2F2C] py-28 md:py-40 border-t border-[#2F2F2C]/10"
          aria-label="Cursos especializados"
        >
          <div className="max-w-[1100px] mx-auto px-6 md:px-10">
            <div className="flex items-center gap-5 mb-16">
              <div className="h-px w-12 bg-[#C96342]" />
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold">
                Despues del Nivel 01
              </p>
            </div>

            <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-end mb-20">
              <h2
                className="md:col-span-7 text-5xl sm:text-6xl md:text-7xl leading-[0.98] tracking-[-0.02em] font-normal"
                style={{ fontFamily: "'Charter', 'Georgia', serif" }}
              >
                Elige su <em className="italic text-[#C96342]">camino</em>.
              </h2>
              <p className="md:col-span-5 text-lg text-[#5A5751] leading-relaxed max-w-[40ch]">
                Al completar el fundamento, tu hijo se especializa en el area
                que mas le apasiona.
              </p>
            </div>

            <ul className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#2F2F2C]/12 border-y border-[#2F2F2C]/12">
              {[
                {
                  href: "/curso-creacion-videojuegos-ninos",
                  number: "02",
                  title: "Videojuegos con IA",
                  desc: "Crea juegos en vez de solo consumirlos.",
                },
                {
                  href: "/curso-creador-contenido-ia",
                  number: "03",
                  title: "Creador de Contenido y Cine IA",
                  desc: "Aprende el nuevo lenguaje digital.",
                },
                {
                  href: "/curso-emprendimiento-ninos",
                  number: "04",
                  title: "Emprendimiento con IA",
                  desc: "Empieza a tiempo, mas opciones manana.",
                },
              ].map((c) => (
                <li key={c.href}>
                  <a
                    href={c.href}
                    className="group block py-10 md:px-8 transition-colors hover:bg-[#EDE6D3]"
                  >
                    <p className="text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold mb-6">
                      Nivel {c.number}
                    </p>
                    <h3
                      className="text-2xl md:text-3xl leading-tight tracking-tight mb-4 group-hover:text-[#C96342] transition-colors"
                      style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                    >
                      {c.title}
                    </h3>
                    <p className="text-base text-[#5A5751] leading-relaxed mb-8 max-w-[32ch]">
                      {c.desc}
                    </p>
                    <span className="text-sm font-semibold text-[#C96342] underline underline-offset-4 decoration-[#C96342]/30 group-hover:decoration-[#C96342]">
                      Ver curso &#8594;
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Links adicionales */}
            <div className="mt-12 pt-8 border-t border-[#2F2F2C]/12 flex flex-wrap gap-6 text-sm">
              <a href="/programa" className="text-[#2F2F2C] hover:text-[#C96342] underline underline-offset-4 decoration-[#2F2F2C]/20 hover:decoration-[#C96342] transition-colors font-display">
                Ver curriculum completo &#8594;
              </a>
              <a href="/resultados" className="text-[#2F2F2C] hover:text-[#C96342] underline underline-offset-4 decoration-[#2F2F2C]/20 hover:decoration-[#C96342] transition-colors font-display">
                Ver resultados &#8594;
              </a>
              <a href="/colegios" className="text-[#2F2F2C] hover:text-[#C96342] underline underline-offset-4 decoration-[#2F2F2C]/20 hover:decoration-[#C96342] transition-colors font-display">
                Para colegios &#8594;
              </a>
              <a href="/empresas" className="text-[#2F2F2C] hover:text-[#C96342] underline underline-offset-4 decoration-[#2F2F2C]/20 hover:decoration-[#C96342] transition-colors font-display">
                Para empresas &#8594;
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </main>
      <WhatsAppButton />
      <ExitIntentPopup />
    </>
  )
}
