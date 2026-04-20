import { generateHreflangs } from "@/lib/seo-config"
import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import Link from "next/link"

export const metadata: Metadata = {
    robots: { index: false, follow: true },
    title: "Cursos de IA para Niños en Venezuela (Guía 2026)",
    description:
        "Guía Completa: Lo que todo padre venezolano debe saber antes de inscribir a su hijo en un curso de IA. Precios, herramientas, seguridad y mejores opciones.",
    keywords: [
        "guia cursos ia niños venezuela",
        "mejores cursos programacion niños venezuela",
        "comparativa escuelas ia venezuela",
        "consejos padres tecnologia venezuela",
    ],
    openGraph: {
        title: "Cursos de IA para Niños en Venezuela (Guía 2026)",
        description: "Todo lo que necesitas saber para elegir la mejor educación tecnológica para tu hijo en Venezuela.",
        url: "https://www.innovakidslatam.com/ve/blog/cursos-inteligencia-artificial-ninos-venezuela-guia",
        locale: "es_VE",
        type: "article",
        siteName: "Blog InnovaKids Venezuela",
    },
    alternates: {
        canonical: "https://www.innovakidslatam.com/ve/blog/cursos-inteligencia-artificial-ninos-venezuela-guia",
        languages: generateHreflangs("home"),
    },
}

const perks = [
    "Grupos de máximo 5 niños (atención personalizada)",
    "Clases en vivo (no videos pregrabados)",
    "Horarios adaptados a Venezuela (GMT-4)",
    "Pagos en USD vía Zelle, PayPal, Binance",
    "Garantía de 10 días (devolución completa)",
    "Certificación oficial + portfolio",
]

export default function BlogVenezuelaGuiaPage() {
    return (
        <>
            <Navigation />
            <WhatsAppButton />
            <main className="min-h-screen bg-[#FAF7EF] text-[#1A1714]">
                <article className="pt-32 pb-20">
                    <div className="max-w-[1100px] mx-auto px-6 md:px-10">
                        <nav aria-label="Breadcrumb" className="mb-10 text-[12px] tracking-[0.2em] uppercase text-[#1A1714]/55">
                            <Link href="/" className="hover:text-[#C96342] transition-colors">InnovaKids</Link>
                            <span className="mx-3" aria-hidden>/</span>
                            <Link href="/ve" className="hover:text-[#C96342] transition-colors">Venezuela</Link>
                            <span className="mx-3" aria-hidden>/</span>
                            <span className="text-[#1A1714]">Guía de cursos de IA</span>
                        </nav>

                        <header className="mb-16 pb-16 border-b border-[#1A1714]/12">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="h-px w-10 bg-[#C96342]" aria-hidden />
                                <span className="text-[11px] tracking-[0.28em] uppercase text-[#C96342] font-semibold">
                                    Guía educativa · 8 min de lectura
                                </span>
                            </div>

                            <h1
                                className="text-5xl md:text-7xl leading-[0.98] tracking-[-0.02em] text-[#1A1714] max-w-[22ch]"
                                style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                            >
                                Vibe Coding en <em className="italic text-[#C96342]">Venezuela</em>: guía completa para padres 2026.
                            </h1>

                            <p className="mt-8 text-xl text-[#1A1714]/70 leading-relaxed max-w-[60ch]">
                                La inteligencia artificial está transformando el mundo, y Venezuela no es la excepción. Aquí te explicamos
                                todo lo que necesitas saber sobre los cursos de IA para niños disponibles en el país.
                            </p>

                            <p className="mt-6 text-[13px] text-[#1A1714]/60">
                                Actualizado: marzo 2026
                            </p>
                        </header>

                        <div
                            className="prose prose-lg max-w-none font-serif
                                prose-headings:text-[#1A1714] prose-headings:font-normal
                                prose-h2:text-3xl prose-h2:sm:text-4xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b prose-h2:border-[#1A1714]/15
                                prose-p:font-sans prose-p:text-[#1A1714]/85 prose-p:text-lg prose-p:leading-[1.75]
                                prose-strong:text-[#1A1714]
                                prose-a:text-[#C96342] prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
                                prose-li:font-sans prose-li:text-[#1A1714]/85
                                prose-li:marker:text-[#C96342]
                                prose-ul:font-sans"
                        >
                            <h2>¿Qué es el Vibe Coding y por qué aprenderlo?</h2>
                            <p>
                                El <strong>Vibe Coding</strong> es escribir código usando lenguaje natural y asistido por inteligencia artificial.
                                Ya no hace falta memorizar sintaxis compleja. Hoy un niño en Venezuela puede decirle a la IA: "crea un juego de
                                naves espaciales", y la IA genera el código base.
                            </p>
                            <p>
                                En Venezuela, a pesar de los desafíos, el talento tecnológico sigue creciendo y el Vibe Coding es una oportunidad
                                única de desarrollo profesional internacional.
                            </p>

                            <h2>¿Por qué enseñar IA a los niños venezolanos?</h2>
                            <p>
                                En un mundo cada vez más digitalizado, los niños que dominen la IA tendrán una ventaja competitiva enorme.
                                Venezuela tiene un potencial increíble de talento joven que puede destacar globalmente.
                            </p>
                            <ul>
                                <li>Preparación para trabajos remotos bien pagados en dólares.</li>
                                <li>Desarrollo de pensamiento lógico y creativo.</li>
                                <li>Habilidades transferibles a cualquier carrera futura.</li>
                                <li>Oportunidades de becas internacionales.</li>
                            </ul>

                            <h2>¿Qué edad es ideal para empezar?</h2>
                            <p>
                                Los cursos de InnovaKids están diseñados para niños de <strong>8 a 14 años</strong>. Esta es la edad perfecta porque
                                los niños ya tienen capacidad de abstracción pero mantienen la curiosidad y creatividad necesarias.
                            </p>

                            <h2>¿Cuánto cuestan los cursos de IA en Venezuela?</h2>
                            <p>Los precios varían según la calidad y modalidad:</p>
                            <ul>
                                <li><strong>Academias tradicionales:</strong> US$400-800 por módulo.</li>
                                <li><strong>Cursos grabados:</strong> US$50-150 (sin interacción).</li>
                                <li><strong>InnovaKids:</strong> US$297 por 10 clases en vivo en grupos de 5.</li>
                            </ul>

                            <h2>¿Por qué InnovaKids es la mejor opción?</h2>
                        </div>

                        <ul className="not-prose my-10 border-t border-[#1A1714]/12">
                            {perks.map((perk, i) => (
                                <li key={perk} className="grid grid-cols-[auto_1fr] gap-6 py-5 border-b border-[#1A1714]/12 items-baseline">
                                    <span className="text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold">
                                        0{i + 1}
                                    </span>
                                    <span className="text-[15px] md:text-base text-[#1A1714]/85 leading-relaxed">{perk}</span>
                                </li>
                            ))}
                        </ul>

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
                                        ¿Listo para que tu hijo domine la IA?
                                    </h3>
                                    <p className="text-[15px] text-[#1A1714]/70 leading-relaxed max-w-[52ch]">
                                        Agenda una evaluación gratuita de 30 minutos con nuestro equipo.
                                    </p>
                                </div>
                                <div className="md:col-span-5 flex flex-col gap-3 md:justify-self-end w-full md:w-auto">
                                    <Link
                                        href="/clase-gratis"
                                        className="inline-flex items-center justify-center gap-2 bg-[#C96342] hover:bg-[#A8502F] text-[#FAF7EF] px-8 py-4 font-semibold text-base tracking-wide transition-colors"
                                    >
                                        Agendar evaluación gratis
                                        <span aria-hidden>→</span>
                                    </Link>
                                </div>
                            </div>
                        </aside>
                    </div>
                </article>
            </main>
            <Footer />
        </>
    )
}
