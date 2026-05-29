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
    "alternateName": ["InnovaKids LATAM"],
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
    "hasCourseInstance": [
      {
        "@type": "CourseInstance",
        "courseMode": "online",
        "startDate": "2026-06-08",
        "endDate": "2026-07-13",
        "courseWorkload": "PT10H",
        "instructor": {
          "@type": "Person",
          "name": "Rafael Quiroz",
        },
      },
    ],
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
                  Inversión única
                </p>
                <p
                  className="font-display italic leading-[0.88] tracking-[-0.04em] text-[#FAF7EF] mb-3"
                  style={{ fontSize: "clamp(4rem, 10vw, 7rem)", fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
                >
                  ${priceToday}<span className="text-[#C96342]">.</span>
                </p>
                <p className="font-mono-accent text-[11px] uppercase tracking-[0.22em] text-[#FAF7EF]/55 mb-6">
                  USD pago único o 3 cuotas de ${installments}
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
                    "Grupos de máximo 5 niños",
                    "3 niveles: Básico (Explorer) + Intermedio (Maker) + Avanzado (track)",
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
                      Días de garantía total
                    </p>
                  </div>
                  <p className="text-sm text-[#FAF7EF]/60 leading-relaxed">
                    Si no le gusta a tu hijo o no aprende a usar la IA, te devolvemos el dinero. Un mensaje por WhatsApp basta.
                  </p>
                </div>

                {/* Reserva $27 */}
                <p className="mt-5 font-mono-accent text-[10px] uppercase tracking-[0.22em] text-[#FAF7EF]/45">
                  Reserva con USD 27 hoy. El resto se paga después de la 2ª clase.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6 - FAQ: cierre de objeciones */}
        <FAQSection />

        {/* 7 - 3 NIVELES: Básico → Intermedio → Avanzado */}
        <section
          className="bg-[#F5F1E8] text-[#2F2F2C] py-28 md:py-40 border-t border-[#2F2F2C]/10"
          aria-label="3 niveles del programa"
        >
          <div className="max-w-[1100px] mx-auto px-6 md:px-10">
            <div className="flex items-center gap-5 mb-16">
              <div className="h-px w-12 bg-[#C96342]" />
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold">
                3 niveles progresivos
              </p>
            </div>

            <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-end mb-20">
              <h2
                className="md:col-span-7 font-display text-5xl sm:text-6xl md:text-7xl leading-[0.98] tracking-[-0.02em] font-normal"
              >
                Básico, intermedio y{" "}
                <em className="italic text-[#C96342]">avanzado</em>.
              </h2>
              <p className="md:col-span-5 text-lg text-[#5A5751] leading-relaxed max-w-[40ch]">
                Explorer (fundamentos) → Maker (herramientas reales) → Track especializado
                (proyecto final publicado).
              </p>
            </div>

            <ul className="grid md:grid-cols-3 gap-px bg-[#2F2F2C]/12 border border-[#2F2F2C]/12">
              {[
                { href: "/programa#estudio", color: "#2E7D6B", title: "Estudio", desc: "Hackea tu colegio: flashcards, transcripción, mapas mentales con IA." },
                { href: "/programa#emprender", color: "#C96342", title: "Emprender", desc: "Tu primer negocio: landing, catálogo, bot de ventas, redes sociales." },
                { href: "/programa#video", color: "#4A3B8C", title: "Video", desc: "Creador de contenido: guion, voz clonada, edición y canal publicado." },
                { href: "/programa#audio", color: "#B85A8C", title: "Audio", desc: "Música, podcast y voz: EP original, episodios y distribución." },
                { href: "/programa#transcribir", color: "#1F6FB0", title: "Transcribir", desc: "Procesar info: chat con PDF, resúmenes, extracción de datos." },
                { href: "/programa#programar", color: "#D17C2A", title: "Programar", desc: "Apps de verdad: JavaScript, API, multiplayer, base de datos." },
              ].map((t) => (
                <li key={t.href} className="bg-[#F5F1E8]">
                  <a
                    href={t.href}
                    className="group block py-8 px-6 md:px-8 transition-colors hover:bg-[#EDE6D3] h-full"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: t.color }} />
                      <p className="text-[11px] uppercase tracking-[0.28em] font-semibold" style={{ color: t.color }}>
                        Track
                      </p>
                    </div>
                    <h3
                      className="font-display text-2xl md:text-3xl leading-tight tracking-tight mb-3 group-hover:text-[#C96342] transition-colors"
                    >
                      {t.title}
                    </h3>
                    <p className="text-sm text-[#5A5751] leading-relaxed mb-6 max-w-[32ch]">
                      {t.desc}
                    </p>
                    <span className="text-sm font-semibold text-[#C96342] underline underline-offset-4 decoration-[#C96342]/30 group-hover:decoration-[#C96342]">
                      Ver misiones &#8594;
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Links adicionales */}
            <div className="mt-12 pt-8 border-t border-[#2F2F2C]/12 flex flex-wrap gap-6 text-sm">
              <a href="/programa" className="text-[#2F2F2C] hover:text-[#C96342] underline underline-offset-4 decoration-[#2F2F2C]/20 hover:decoration-[#C96342] transition-colors font-display">
                Ver currículum completo &#8594;
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
