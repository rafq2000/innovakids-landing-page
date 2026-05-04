import { generateHreflangs } from "@/lib/seo-config"
import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import Link from "next/link"

export const metadata: Metadata = {
    robots: { index: false, follow: true },
    title: "Cursos de IA para Niños en Uruguay (Guía 2026)",
    description:
        "Guía Completa: Lo que todo padre uruguayo debe saber antes de inscribir a su hijo en un curso de IA. Precios, herramientas, seguridad y mejores opciones.",
    keywords: [
        "guia cursos ia niños uruguay",
        "mejores cursos programacion niños uruguay",
        "comparativa escuelas ia uruguay",
        "consejos padres tecnologia uruguay",
    ],
    openGraph: {
        title: "Cursos de IA para Niños en Uruguay (Guía 2026)",
        description: "Todo lo que necesitas saber para elegir la mejor educación tecnológica para tu hijo en Uruguay.",
        url: "https://www.innovakidslatam.com/uy/blog/cursos-inteligencia-artificial-ninos-uruguay-guia",
        locale: "es_UY",
        type: "article",
        siteName: "Blog InnovaKids Uruguay",
    },
    alternates: {
        canonical: "https://www.innovakidslatam.com/uy/blog/cursos-inteligencia-artificial-ninos-uruguay-guia",
        languages: generateHreflangs("home"),
    },
}

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Cursos de Inteligencia Artificial para Niños en Uruguay 2026: Guía Completa",
    description: "Guía definitiva de cursos de IA para niños en Uruguay. Comparamos precios, metodologías y resultados.",
    author: { "@type": "Organization", name: "InnovaKids" },
    publisher: { "@type": "Organization", name: "InnovaKids", url: "https://www.innovakidslatam.com" },
    datePublished: "2026-01-01",
    dateModified: "2026-01-08",
}

const advantages = [
    "Alta conectividad a internet (Plan Ceibal)",
    "Familiaridad con tecnología desde temprana edad",
    "Sistema educativo de calidad",
    "Cultura de innovación",
]
const opportunities = [
    "Pocos cursos especializados en IA para niños",
    "Alta demanda de habilidades tecnológicas",
    "Mercado laboral tech en crecimiento",
    "Startups uruguayas exitosas",
]

const pillars = [
    { title: "Herramientas reales", desc: "ChatGPT, Midjourney, DALL·E, Suno AI — las mismas herramientas que usan los profesionales." },
    { title: "Proyectos prácticos", desc: "Los niños aprenden creando: chatbots, arte, música, videojuegos y apps funcionales." },
    { title: "Grupos pequeños", desc: "Máximo 5 niños por clase para garantizar atención personalizada." },
    { title: "Ética y seguridad", desc: "Enseñanza responsable sobre los límites y riesgos de la IA." },
]

const comparisonRows: [string, string, string][] = [
    ["Precio", "US$267 (10 clases)", "US$150-400"],
    ["Alumnos por clase", "Máximo 5", "15-30"],
    ["Herramientas IA", "10+ profesionales", "1-3 básicas"],
    ["Metodología", "100% práctica", "Teoría + práctica"],
    ["Garantía", "10 días devolución", "Sin garantía"],
    ["Soporte", "WhatsApp 24/7", "Solo en clase"],
]

const whyInnova = [
    { title: "Resultados comprobados", desc: "187+ niños uruguayos graduados con proyectos reales: videojuegos, apps, arte generativo y más." },
    { title: "Atención personalizada", desc: "Máximo 5 niños por clase. Tu hijo no será uno más en una clase masiva." },
    { title: "Horarios flexibles", desc: "Nos adaptamos a la agenda de las familias uruguayas. Clases en horarios convenientes." },
    { title: "Garantía total", desc: "10 días de garantía. Si no te convence, devolvemos el 100% de tu dinero." },
]

const faqs = [
    { q: "¿Qué edad debe tener mi hijo?", a: "El curso está diseñado para niños de 8 a 14 años. Agrupamos por edades similares." },
    { q: "¿Necesita conocimientos previos?", a: "No, partimos desde cero. Solo necesita saber leer, escribir y usar una computadora básicamente." },
    { q: "¿Cómo son las clases online?", a: "Clases en vivo por Zoom con máximo 5 niños. Interactivas y 100% prácticas." },
    { q: "¿Qué pasa si no me convence?", a: "Tenés 10 días de garantía. Si no estás satisfecho, devolvemos el 100% de tu dinero." },
    { q: "¿Cómo puedo pagar desde Uruguay?", a: "Aceptamos tarjeta de crédito, débito internacional y transferencia bancaria. US$267 el programa completo." },
]

export default function UruguayBlogGuiaPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Navigation />
            <WhatsAppButton />

            <main className="min-h-screen bg-[#FAF7EF] text-[#1A1714]">
                <article className="pt-32 pb-16">
                    <div className="max-w-[1100px] mx-auto px-6 md:px-10">
                        <nav aria-label="Breadcrumb" className="mb-10 text-[12px] tracking-[0.2em] uppercase text-[#1A1714]/55">
                            <Link href="/" className="hover:text-[#C96342] transition-colors">InnovaKids</Link>
                            <span className="mx-3" aria-hidden>/</span>
                            <Link href="/uy" className="hover:text-[#C96342] transition-colors">Uruguay</Link>
                            <span className="mx-3" aria-hidden>/</span>
                            <span className="text-[#1A1714]">Guía de cursos de IA</span>
                        </nav>

                        <header className="mb-16 pb-16 border-b border-[#1A1714]/12">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="h-px w-10 bg-[#C96342]" aria-hidden />
                                <span className="text-[11px] tracking-[0.28em] uppercase text-[#C96342] font-semibold">
                                    Guía completa 2026 · 15 min de lectura
                                </span>
                            </div>

                            <h1
                                className="text-5xl md:text-7xl leading-[0.98] tracking-[-0.02em] text-[#1A1714] max-w-[22ch]"
                                style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                            >
                                Vibe Coding en <em className="italic text-[#C96342]">Uruguay</em>: guía completa para padres 2026.
                            </h1>

                            <p className="mt-8 text-xl text-[#1A1714]/70 leading-relaxed max-w-[60ch]">
                                Todo lo que necesitás saber para elegir el mejor curso de IA para tu hijo en Uruguay.
                            </p>

                            <div className="mt-10 flex flex-wrap items-center gap-6 text-[13px] text-[#1A1714]/60">
                                <span>Actualizado: marzo 2026</span>
                                <span aria-hidden>·</span>
                                <span>Equipo InnovaKids</span>
                                <span aria-hidden>·</span>
                                <span>15 min de lectura</span>
                            </div>
                        </header>

                        <aside className="not-prose my-12 border-l-2 border-[#C96342] pl-6 py-2">
                            <p className="text-[11px] tracking-[0.28em] uppercase text-[#C96342] font-semibold mb-2">
                                ¿Por qué enseñar IA a los niños uruguayos?
                            </p>
                            <p
                                className="text-lg leading-[1.6] text-[#1A1714]/85"
                                style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                            >
                                Uruguay es líder en tecnología educativa en América Latina gracias al Plan Ceibal. Sin embargo, la inteligencia
                                artificial está transformando el mundo más rápido que cualquier tecnología anterior. Los niños que aprendan a
                                crear con IA hoy serán los líderes del mañana.
                            </p>
                        </aside>

                        <div
                            className="prose prose-lg max-w-none font-serif
                                prose-headings:text-[#1A1714] prose-headings:font-normal
                                prose-h2:text-3xl prose-h2:sm:text-4xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b prose-h2:border-[#1A1714]/15
                                prose-p:font-sans prose-p:text-[#1A1714]/85 prose-p:text-lg prose-p:leading-[1.75]
                                prose-strong:text-[#1A1714]
                                prose-a:text-[#C96342] prose-a:font-semibold prose-a:no-underline hover:prose-a:underline"
                        >
                            <h2>1. Estado de la IA en la educación uruguaya</h2>
                            <p>
                                Uruguay ha sido pionero en tecnología educativa con el Plan Ceibal, pero la enseñanza específica de IA para niños
                                aún está en desarrollo. Esto representa una oportunidad única para que los niños uruguayos se adelanten a sus pares
                                regionales.
                            </p>
                        </div>

                        <div className="not-prose my-10 grid md:grid-cols-2 border border-[#1A1714]/12 divide-y md:divide-y-0 md:divide-x divide-[#1A1714]/12">
                            <div className="p-8">
                                <p className="text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold mb-4">Ventajas de Uruguay</p>
                                <ul className="space-y-2.5 text-[15px] text-[#1A1714]/80 leading-relaxed">
                                    {advantages.map((a) => <li key={a}>· {a}</li>)}
                                </ul>
                            </div>
                            <div className="p-8">
                                <p className="text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold mb-4">Oportunidades</p>
                                <ul className="space-y-2.5 text-[15px] text-[#1A1714]/80 leading-relaxed">
                                    {opportunities.map((o) => <li key={o}>· {o}</li>)}
                                </ul>
                            </div>
                        </div>

                        <div
                            className="prose prose-lg max-w-none font-serif
                                prose-headings:text-[#1A1714] prose-headings:font-normal
                                prose-h2:text-3xl prose-h2:sm:text-4xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b prose-h2:border-[#1A1714]/15
                                prose-p:font-sans prose-p:text-[#1A1714]/85 prose-p:text-lg prose-p:leading-[1.75]"
                        >
                            <h2>2. ¿Qué debe incluir un buen curso de IA?</h2>
                            <p>No todos los cursos de tecnología son iguales. Un curso de IA efectivo para niños debe incluir:</p>
                        </div>

                        <ul className="not-prose my-10 border-t border-[#1A1714]/12">
                            {pillars.map((pillar, i) => (
                                <li key={pillar.title} className="grid md:grid-cols-[1fr_2fr] gap-6 md:gap-12 py-8 border-b border-[#1A1714]/12">
                                    <div>
                                        <p className="text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold mb-2">
                                            0{i + 1}
                                        </p>
                                        <p
                                            className="text-2xl leading-tight text-[#1A1714]"
                                            style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                                        >
                                            {pillar.title}
                                        </p>
                                    </div>
                                    <p className="text-[15px] text-[#1A1714]/75 leading-relaxed">{pillar.desc}</p>
                                </li>
                            ))}
                        </ul>

                        <div
                            className="prose prose-lg max-w-none font-serif
                                prose-headings:text-[#1A1714] prose-headings:font-normal
                                prose-h2:text-3xl prose-h2:sm:text-4xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b prose-h2:border-[#1A1714]/15"
                        >
                            <h2>3. Comparativa de opciones en Uruguay</h2>
                        </div>

                        <div className="not-prose my-10 overflow-x-auto">
                            <table className="w-full border-collapse text-left min-w-[560px] font-sans">
                                <thead>
                                    <tr className="border-y-2 border-[#1A1714]">
                                        <th className="py-4 pr-4 text-[11px] tracking-[0.22em] uppercase text-[#1A1714] font-semibold">Aspecto</th>
                                        <th className="py-4 px-4 text-[11px] tracking-[0.22em] uppercase text-[#C96342] font-semibold">InnovaKids</th>
                                        <th className="py-4 pl-4 text-[11px] tracking-[0.22em] uppercase text-[#1A1714]/70 font-semibold">Otros cursos</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparisonRows.map(([aspect, innovakids, others]) => (
                                        <tr key={aspect} className="border-b border-[#1A1714]/12 align-top">
                                            <td className="py-5 pr-4 text-[15px] text-[#1A1714] font-semibold">{aspect}</td>
                                            <td className="py-5 px-4 text-[14px] text-[#1A1714] leading-relaxed font-medium">{innovakids}</td>
                                            <td className="py-5 pl-4 text-[14px] text-[#1A1714]/65 leading-relaxed">{others}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div
                            className="prose prose-lg max-w-none font-serif
                                prose-headings:text-[#1A1714] prose-headings:font-normal
                                prose-h2:text-3xl prose-h2:sm:text-4xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b prose-h2:border-[#1A1714]/15"
                        >
                            <h2>4. ¿Por qué InnovaKids es el #1 en Uruguay?</h2>
                        </div>

                        <div className="not-prose my-10 grid md:grid-cols-2 border border-[#1A1714]/12">
                            {whyInnova.map((item, i) => (
                                <div
                                    key={item.title}
                                    className={`p-8 border-[#1A1714]/12 ${i < 2 ? "border-b" : ""} ${i % 2 === 0 ? "md:border-r" : ""}`}
                                >
                                    <p className="text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold mb-4">
                                        0{i + 1}
                                    </p>
                                    <h4
                                        className="text-2xl leading-tight text-[#1A1714] mb-3"
                                        style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                                    >
                                        {item.title}
                                    </h4>
                                    <p className="text-[15px] text-[#1A1714]/70 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* FAQ */}
                        <div
                            className="prose prose-lg max-w-none font-serif
                                prose-headings:text-[#1A1714] prose-headings:font-normal
                                prose-h2:text-3xl prose-h2:sm:text-4xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b prose-h2:border-[#1A1714]/15"
                        >
                            <h2>5. Preguntas frecuentes</h2>
                        </div>

                        <dl className="not-prose my-10 border-t border-[#1A1714]/12">
                            {faqs.map((faq) => (
                                <div key={faq.q} className="grid md:grid-cols-[1fr_1.5fr] gap-6 md:gap-12 py-8 border-b border-[#1A1714]/12">
                                    <dt
                                        className="text-xl md:text-2xl leading-tight text-[#1A1714]"
                                        style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                                    >
                                        {faq.q}
                                    </dt>
                                    <dd className="text-[15px] text-[#1A1714]/75 leading-relaxed">{faq.a}</dd>
                                </div>
                            ))}
                        </dl>

                        {/* Editorial CTA */}
                        <aside className="mt-20 border-t border-b border-[#1A1714]/12 py-12">
                            <div className="grid md:grid-cols-12 gap-10 items-start">
                                <div className="md:col-span-7">
                                    <div className="flex items-center gap-3 mb-5">
                                        <span className="h-px w-10 bg-[#C96342]" aria-hidden />
                                        <span className="text-[11px] tracking-[0.28em] uppercase text-[#C96342] font-semibold">
                                            Próximo paso
                                        </span>
                                    </div>
                                    <h3
                                        className="text-3xl md:text-4xl leading-[1.05] tracking-tight text-[#1A1714] mb-4"
                                        style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                                    >
                                        Dale a tu hijo la ventaja del futuro.
                                    </h3>
                                    <p className="text-[15px] text-[#1A1714]/70 leading-relaxed max-w-[52ch]">
                                        Reservá una clase demo gratuita y descubrí por qué más de 187 familias uruguayas confían en InnovaKids.
                                    </p>
                                </div>
                                <div className="md:col-span-5 flex flex-col gap-3 md:justify-self-end w-full md:w-auto">
                                    <Link
                                        href="/clase-gratis"
                                        className="inline-flex items-center justify-center gap-2 bg-[#C96342] hover:bg-[#A8502F] text-[#FAF7EF] px-8 py-4 font-semibold text-base tracking-wide transition-colors"
                                    >
                                        Reservar clase demo gratis
                                        <span aria-hidden>→</span>
                                    </Link>
                                    <Link
                                        href="/uy/cursos-ia-ninos-uruguay"
                                        className="inline-flex items-center justify-center gap-2 border border-[#1A1714] text-[#1A1714] hover:bg-[#1A1714] hover:text-[#FAF7EF] px-8 py-4 font-semibold text-base tracking-wide transition-colors"
                                    >
                                        Ver el programa
                                    </Link>
                                </div>
                            </div>
                        </aside>

                        {/* Related */}
                        <section className="mt-16">
                            <p className="text-[11px] tracking-[0.28em] uppercase text-[#C96342] font-semibold mb-6">Sigue leyendo</p>
                            <div className="grid md:grid-cols-3 gap-0 border-t border-[#1A1714]/12">
                                <Link
                                    href="/uy/cursos-ia-ninos-uruguay"
                                    className="group border-b md:border-r border-[#1A1714]/12 py-8 md:pr-6 hover:bg-[#F2EDE0]/40 transition-colors"
                                >
                                    <p className="text-[11px] tracking-[0.22em] uppercase text-[#1A1714]/55 mb-3">Uruguay</p>
                                    <h4
                                        className="text-xl leading-tight text-[#1A1714] group-hover:text-[#C96342] transition-colors"
                                        style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                                    >
                                        Cursos IA niños Uruguay
                                    </h4>
                                </Link>
                                <Link
                                    href="/uy/clases-ia-ninos-montevideo"
                                    className="group border-b md:border-r border-[#1A1714]/12 py-8 md:px-6 hover:bg-[#F2EDE0]/40 transition-colors"
                                >
                                    <p className="text-[11px] tracking-[0.22em] uppercase text-[#1A1714]/55 mb-3">Montevideo</p>
                                    <h4
                                        className="text-xl leading-tight text-[#1A1714] group-hover:text-[#C96342] transition-colors"
                                        style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                                    >
                                        Clases IA Montevideo
                                    </h4>
                                </Link>
                                <Link
                                    href="/uy"
                                    className="group border-b border-[#1A1714]/12 py-8 md:pl-6 hover:bg-[#F2EDE0]/40 transition-colors"
                                >
                                    <p className="text-[11px] tracking-[0.22em] uppercase text-[#1A1714]/55 mb-3">País</p>
                                    <h4
                                        className="text-xl leading-tight text-[#1A1714] group-hover:text-[#C96342] transition-colors"
                                        style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                                    >
                                        InnovaKids Uruguay
                                    </h4>
                                </Link>
                            </div>
                        </section>
                    </div>
                </article>
            </main>

            <Footer />
        </>
    )
}
