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
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "527",
      "bestRating": "5",
      "worstRating": "1",
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

        {/* 5 - PRECIO + GARANTIA + VALOR */}
        <section
          id="inversion"
          className="bg-[#1A1714] text-[#FAF7EF] py-20 md:py-28 overflow-hidden"
        >
          <div className="max-w-[1100px] mx-auto px-6 md:px-10">
            <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">

              {/* Precio con anclaje */}
              <div className="md:col-span-5">
                <p className="font-mono-accent text-[10px] uppercase tracking-[0.28em] text-[#C96342] font-semibold mb-4">
                  Inversión única
                </p>
                <p className="font-mono-accent text-lg text-[#FAF7EF]/40 line-through mb-1">
                  $797 USD
                </p>
                <p
                  className="font-display italic leading-[0.88] tracking-[-0.04em] text-[#FAF7EF] mb-1"
                  style={{ fontSize: "clamp(4rem, 10vw, 7rem)", fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
                >
                  ${priceToday}<span className="text-[#C96342]">.</span>
                </p>
                <p className="font-mono-accent text-[11px] uppercase tracking-[0.22em] text-[#FAF7EF]/55 mb-2">
                  USD pago único o 3 cuotas de ${installments}
                </p>
                <p className="text-sm text-[#C96342] mb-6">
                  $26.70 por clase · Menos que una clase particular
                </p>

                {/* CTA principal: Reserva $27 */}
                <a
                  href="#sesion-estrategica"
                  className="group inline-flex items-center gap-3 bg-[#C96342] hover:bg-[#9A4428] text-[#FAF7EF] px-7 py-4 text-base font-semibold rounded-sm shadow-[0_10px_30px_-12px_rgba(201,99,66,0.55)] hover:shadow-[0_14px_40px_-12px_rgba(201,99,66,0.7)] transition-all duration-300 w-full sm:w-auto justify-center"
                >
                  <span>Reservar por $27 USD</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>&#8594;</span>
                </a>
                <p className="mt-3 text-xs text-[#FAF7EF]/50">
                  100% reembolsable · Pagas el resto solo si te convence
                </p>

                {/* CTA secundario */}
                <a
                  href="#sesion-estrategica"
                  className="inline-flex items-center gap-2 mt-4 text-sm text-[#FAF7EF]/70 hover:text-[#C96342] transition-colors"
                >
                  O agenda una clase gratis primero &#8594;
                </a>
              </div>

              {/* Que incluye (RESULTADOS, no features) + Garantía */}
              <div className="md:col-span-7 md:border-l md:border-[#FAF7EF]/15 md:pl-10">
                <ul className="space-y-4 mb-8">
                  {[
                    "10 clases en vivo de 60 min (2 por semana, 5 semanas)",
                    "Grupos de máximo 5 niños: el profesor conoce a tu hijo por nombre",
                    "3 niveles: Básico (fundamentos IA) + Intermedio (apps y bots) + Avanzado (track a elección)",
                    "Crea proyectos reales: videojuegos, música, arte, apps publicadas en internet",
                    "Todas las clases grabadas para que las pueda reveer cuando quiera",
                    "Mentor 1:1 disponible si se traba en algún proyecto",
                    "Soporte por WhatsApp para ti y tu hijo durante todo el programa",
                    "Certificado digital verificable al completar cada nivel",
                    "Herramientas pro: ChatGPT, Claude, Suno, Cursor y más (incluidas)",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[15px] text-[#FAF7EF]/80 leading-relaxed">
                      <span className="text-[#C96342] mt-[2px] shrink-0">&#10003;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Garantía prominente con escudo */}
                <div className="p-6 bg-[#FAF7EF]/[0.08] border border-[#C96342]/30 rounded-[3px]">
                  <div className="flex items-center gap-4 mb-3">
                    <svg className="w-8 h-8 text-[#C96342] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                    <div>
                      <p className="font-display text-lg text-[#FAF7EF]" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}>
                        Garantía total de 10 días
                      </p>
                      <p className="text-sm text-[#FAF7EF]/60">
                        Si después de 2 clases tu hijo no está emocionado, devolvemos el 100%. Un WhatsApp basta.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Comparación de valor */}
                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                  <div className="p-3 bg-[#FAF7EF]/[0.04] rounded-[3px]">
                    <p className="font-mono-accent text-[9px] uppercase tracking-wider text-[#FAF7EF]/40 mb-1">Tutor particular</p>
                    <p className="font-display text-lg text-[#FAF7EF]/50 line-through">$500+</p>
                  </div>
                  <div className="p-3 bg-[#FAF7EF]/[0.04] rounded-[3px]">
                    <p className="font-mono-accent text-[9px] uppercase tracking-wider text-[#FAF7EF]/40 mb-1">Campamento tech</p>
                    <p className="font-display text-lg text-[#FAF7EF]/50 line-through">$800+</p>
                  </div>
                  <div className="p-3 bg-[#C96342]/20 border border-[#C96342]/30 rounded-[3px]">
                    <p className="font-mono-accent text-[9px] uppercase tracking-wider text-[#C96342] mb-1">InnovaKids</p>
                    <p className="font-display text-lg text-[#FAF7EF]">$267</p>
                  </div>
                </div>
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
      {/* Sticky CTA mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#1A1714]/95 backdrop-blur-sm border-t border-[#FAF7EF]/10 p-3 flex items-center gap-3">
        <a
          href="#sesion-estrategica"
          className="flex-1 bg-[#C96342] hover:bg-[#9A4428] text-[#FAF7EF] py-3.5 text-center text-sm font-semibold rounded-sm shadow-lg transition-colors"
        >
          Agendar clase gratis
        </a>
        <a
          href="https://wa.me/56964754219?text=Hola%2C%20quiero%20info%20del%20curso%20de%20IA%20para%20mi%20hijo"
          className="shrink-0 bg-[#25D366] text-white p-3.5 rounded-sm"
          aria-label="WhatsApp"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492l4.634-1.215A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-2.09 0-4.02-.66-5.608-1.783l-.402-.239-4.17 1.093 1.113-4.063-.263-.418A9.72 9.72 0 012.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75z"/></svg>
        </a>
      </div>
      <WhatsAppButton />
      <ExitIntentPopup />
    </>
  )
}
