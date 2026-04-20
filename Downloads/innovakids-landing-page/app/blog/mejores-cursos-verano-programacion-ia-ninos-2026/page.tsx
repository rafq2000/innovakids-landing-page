import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Mejores Cursos de Verano Programación e IA Niños 2026 | InnovaKids",
    description:
        "Mejores cursos de verano de programación e IA para niños 8-17 años en 2026: comparamos precios, metodologías y resultados reales. 527 familias. Lee ya.",
    keywords: [
        "cursos verano niños 2026",
        "cursos verano programacion niños",
        "cursos verano ia niños",
        "mejores cursos verano tecnologia",
        "campamento ia programacion niños",
    ],
    alternates: {
        canonical: "https://www.innovakidslatam.com/blog/mejores-cursos-verano-programacion-ia-ninos-2026",
    },
    openGraph: {
        title: "Mejores Cursos de Verano · Programación e IA para Niños 2026 | InnovaKids",
        description:
            "Comparativa honesta: programación tradicional vs IA para niños 8-17 años. Precios, metodologías y resultados reales.",
        url: "https://www.innovakidslatam.com/blog/mejores-cursos-verano-programacion-ia-ninos-2026",
        siteName: "InnovaKids",
        type: "article",
        locale: "es_419",
        images: [{
            url: "https://www.innovakidslatam.com/hero-child-learning-ai.jpg",
            width: 1200,
            height: 630,
            alt: "Mejores cursos de verano de programación e IA para niños 2026 - InnovaKids",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Mejores Cursos de Verano Programación e IA Niños 2026",
        description:
            "Comparativa honesta 2026: programación vs IA para niños 8-17. Precios, metodologías y resultados reales.",
        images: ["https://www.innovakidslatam.com/hero-child-learning-ai.jpg"],
    },
}

const authorSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Mejores Cursos de Verano de Programación e IA para Niños (2026)",
    "author": {
        "@type": "Person",
        "name": "Rafael Quiroz",
        "jobTitle": "Director Académico, InnovaKids Latam",
        "url": "https://www.linkedin.com/in/rafaelquirozm/",
    },
    "publisher": {
        "@type": "Organization",
        "name": "InnovaKids",
        "url": "https://www.innovakidslatam.com",
    },
    "datePublished": "2026-03-11",
    "dateModified": "2026-03-11",
    "mainEntityOfPage": "https://www.innovakidslatam.com/blog/mejores-cursos-verano-programacion-ia-ninos-2026",
}

const comparisons = [
    {
        criteria: "Habilidad principal desarrollada",
        traditional: "Sintaxis de código (Scratch, Python básico)",
        innovakids: "Pensamiento computacional + creatividad aplicada con IA",
    },
    {
        criteria: "Proyecto final del alumno",
        traditional: "Ejercicios guiados o un minijuego en Scratch",
        innovakids: "App funcional, videojuego, libro ilustrado o startup propia",
    },
    {
        criteria: "Tamaño del grupo",
        traditional: "15 a 30 alumnos por clase",
        innovakids: "Máximo 5 alumnos por sesión",
    },
    {
        criteria: "Modalidad",
        traditional: "Presencial (transporte y horarios fijos)",
        innovakids: "100% online en vivo con horarios flexibles",
    },
    {
        criteria: "Rango de edad",
        traditional: "Generalmente 7 a 12 años",
        innovakids: "8 a 17 años (niños y adolescentes)",
    },
    {
        criteria: "Duración",
        traditional: "1 a 2 semanas intensivas",
        innovakids: "5 semanas para retención de largo plazo",
    },
    {
        criteria: "Garantía de satisfacción",
        traditional: "Generalmente no ofrecen",
        innovakids: "10 días con devolución completa",
    },
    {
        criteria: "Herramientas de IA avanzadas",
        traditional: "No incluyen (o solo superficial)",
        innovakids: "ChatGPT, DALL·E, Midjourney, Suno, Python + IA",
    },
]

export default function ComparativaVeranoPage() {
    return (
        <main className="min-h-screen bg-[#FAF7EF] text-[#1A1714]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }} />
            <Navigation />

            <article className="pt-32 pb-16">
                <div className="max-w-[1100px] mx-auto px-6 md:px-10">
                    <nav aria-label="Breadcrumb" className="mb-10 text-[12px] tracking-[0.2em] uppercase text-[#1A1714]/55">
                        <Link href="/" className="hover:text-[#C96342] transition-colors">InnovaKids</Link>
                        <span className="mx-3" aria-hidden>/</span>
                        <Link href="/blog" className="hover:text-[#C96342] transition-colors">Blog</Link>
                        <span className="mx-3" aria-hidden>/</span>
                        <span className="text-[#1A1714]">Cursos de verano 2026</span>
                    </nav>

                    <header className="mb-16 pb-16 border-b border-[#1A1714]/12">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="h-px w-10 bg-[#C96342]" aria-hidden />
                            <span className="text-[11px] tracking-[0.28em] uppercase text-[#C96342] font-semibold">
                                Comparativa 2026 · 6 min de lectura
                            </span>
                        </div>

                        <h1
                            className="text-5xl md:text-7xl leading-[0.98] tracking-[-0.02em] text-[#1A1714] max-w-[22ch]"
                            style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                        >
                            Mejores cursos de verano: ¿programación tradicional o <em className="italic text-[#C96342]">inteligencia artificial</em>?
                        </h1>

                        <div className="mt-10 flex flex-wrap items-center gap-6 text-[13px] text-[#1A1714]/60">
                            <a
                                href="https://www.linkedin.com/in/rafaelquirozm/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#C96342] transition-colors"
                            >
                                Rafael Quiroz — Director Académico
                            </a>
                            <span aria-hidden>·</span>
                            <span>11 marzo 2026</span>
                            <span aria-hidden>·</span>
                            <span>6 min de lectura</span>
                        </div>
                    </header>

                    <div
                        className="prose prose-lg max-w-none font-serif
                            prose-headings:text-[#1A1714] prose-headings:font-normal
                            prose-h2:text-3xl prose-h2:sm:text-4xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b prose-h2:border-[#1A1714]/15
                            prose-h3:text-[#A8502F] prose-h3:text-xl prose-h3:mt-10
                            prose-p:font-sans prose-p:text-[#1A1714]/85 prose-p:text-lg prose-p:leading-[1.75]
                            prose-strong:text-[#1A1714]
                            prose-a:text-[#C96342] prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
                            prose-li:font-sans prose-li:text-[#1A1714]/85
                            prose-li:marker:text-[#C96342]
                            prose-ol:font-sans prose-ul:font-sans"
                    >
                        <p className="lead text-2xl leading-[1.45] text-[#1A1714]/85 font-sans">
                            Cada año, miles de padres en Latinoamérica y España buscan <strong>cursos de verano de programación para niños</strong> o
                            <strong> talleres tecnológicos para adolescentes</strong>. Pero en 2026, la pregunta ya no es "¿mi hijo debe aprender a programar?",
                            sino <strong>"¿debería aprender programación tradicional o inteligencia artificial?"</strong> En esta guía comparativa
                            analizamos ambas opciones con datos reales.
                        </p>

                        <h2>Cursos de verano de programación tradicional: ¿siguen vigentes?</h2>
                        <p>
                            Los cursos clásicos de programación para niños (Scratch, Code.org, Python básico) fueron pioneros en acercar la tecnología a
                            los menores. Enseñan <strong>lógica secuencial</strong>, <strong>bucles</strong> y <strong>condicionales</strong> mediante
                            programación por bloques. Son útiles para una primera aproximación al código, pero tienen limitaciones claras en el contexto de 2026:
                        </p>
                        <ul>
                            <li><strong>Grupos grandes</strong> (15-30 alumnos) con atención limitada por estudiante.</li>
                            <li><strong>Proyectos repetitivos:</strong> todos los alumnos hacen el mismo ejercicio guiado.</li>
                            <li><strong>Sin exposición a IA:</strong> no incluyen ChatGPT, modelos generativos ni prompt engineering.</li>
                            <li><strong>Modalidad presencial:</strong> dependen de transporte, horarios rígidos e infraestructura física.</li>
                        </ul>

                        <h2>Cursos de inteligencia artificial para niños: la nueva frontera</h2>
                        <p>
                            Un curso de <strong>inteligencia artificial para niños</strong> no reemplaza la programación: la <strong>potencia exponencialmente</strong>.
                            Los alumnos no solo aprenden a escribir código, sino a <strong>colaborar con modelos de IA</strong> para crear proyectos reales
                            en una fracción del tiempo. Esto se llama <strong>Vibe Coding</strong>: la habilidad de comunicarse eficientemente con sistemas
                            inteligentes para construir software, arte, música y narrativas.
                        </p>
                        <p>
                            En InnovaKids, nuestros alumnos de 8 a 17 años crean en 5 semanas lo que antes tomaba meses en un campamento tradicional:
                            <strong> apps funcionales, videojuegos originales, libros ilustrados con IA y hasta prototipos de startups</strong>.
                        </p>

                        <h2>Tabla comparativa: programación tradicional vs. InnovaKids IA</h2>
                    </div>

                    <div className="not-prose my-10 overflow-x-auto">
                        <table className="w-full border-collapse text-left min-w-[680px] font-sans">
                            <thead>
                                <tr className="border-y-2 border-[#1A1714]">
                                    <th className="py-4 pr-4 text-[11px] tracking-[0.22em] uppercase text-[#1A1714] font-semibold">Criterio</th>
                                    <th className="py-4 px-4 text-[11px] tracking-[0.22em] uppercase text-[#1A1714]/70 font-semibold">Programación tradicional</th>
                                    <th className="py-4 pl-4 text-[11px] tracking-[0.22em] uppercase text-[#C96342] font-semibold">InnovaKids (IA)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisons.map((row) => (
                                    <tr key={row.criteria} className="border-b border-[#1A1714]/12 align-top">
                                        <td className="py-5 pr-4 text-[15px] text-[#1A1714] font-semibold">{row.criteria}</td>
                                        <td className="py-5 px-4 text-[14px] text-[#1A1714]/65 leading-relaxed">{row.traditional}</td>
                                        <td className="py-5 pl-4 text-[14px] text-[#1A1714] leading-relaxed font-medium">{row.innovakids}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div
                        className="prose prose-lg max-w-none font-serif
                            prose-headings:text-[#1A1714] prose-headings:font-normal
                            prose-h2:text-3xl prose-h2:sm:text-4xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b prose-h2:border-[#1A1714]/15
                            prose-p:font-sans prose-p:text-[#1A1714]/85 prose-p:text-lg prose-p:leading-[1.75]
                            prose-strong:text-[#1A1714]
                            prose-a:text-[#C96342] prose-a:font-semibold prose-a:no-underline hover:prose-a:underline"
                    >
                        <h2>Veredicto: ¿cuál elegir en 2026?</h2>
                        <p>
                            Si tu hijo tiene entre 8 y 12 años y <strong>nunca ha tocado tecnología</strong>, un curso de programación tradicional con Scratch
                            puede ser una buena primera experiencia. Pero si buscas una <strong>formación con visión de futuro</strong> que desarrolle el
                            pensamiento computacional, la creatividad y las habilidades profesionales que el mercado laboral demandará en 5 años,
                            un <strong>curso de inteligencia artificial como InnovaKids es la inversión más inteligente</strong>.
                        </p>
                        <p>
                            Para adolescentes de 14 a 17 años, la decisión es aún más clara: los cursos de programación tradicional quedan cortos frente a
                            la revolución del <strong>Vibe Coding y el prompt engineering</strong>. Un adolescente que domina IA tiene ventaja competitiva
                            inmediata para becas, admisiones universitarias y emprendimientos.
                        </p>
                    </div>

                    {/* Editorial CTA */}
                    <aside className="mt-20 border-t border-b border-[#1A1714]/12 py-12">
                        <div className="grid md:grid-cols-12 gap-10 items-start">
                            <div className="md:col-span-7">
                                <div className="flex items-center gap-3 mb-5">
                                    <span className="h-px w-10 bg-[#C96342]" aria-hidden />
                                    <span className="text-[11px] tracking-[0.28em] uppercase text-[#C96342] font-semibold">Próximo paso</span>
                                </div>
                                <h3
                                    className="text-3xl md:text-4xl leading-[1.05] tracking-tight text-[#1A1714] mb-4"
                                    style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                                >
                                    ¿Listo para dar el siguiente paso?
                                </h3>
                                <p className="text-[15px] text-[#1A1714]/70 leading-relaxed max-w-[52ch]">
                                    Más de 500 familias en 9 países ya eligieron InnovaKids. Grupos de máximo 5 alumnos, clases 100% online
                                    y garantía de satisfacción de 10 días.
                                </p>
                            </div>
                            <div className="md:col-span-5 flex flex-col gap-3 md:justify-self-end w-full md:w-auto">
                                <Link
                                    href="/clase-gratis"
                                    className="inline-flex items-center justify-center gap-2 bg-[#C96342] hover:bg-[#A8502F] text-[#FAF7EF] px-8 py-4 font-semibold text-base tracking-wide transition-colors"
                                >
                                    Agendar clase gratis
                                    <span aria-hidden>→</span>
                                </Link>
                                <Link
                                    href="/blog/metodologia-erica-pensamiento-computacional-ia-ninos"
                                    className="inline-flex items-center justify-center gap-2 border border-[#1A1714] text-[#1A1714] hover:bg-[#1A1714] hover:text-[#FAF7EF] px-8 py-4 font-semibold text-base tracking-wide transition-colors"
                                >
                                    Conoce la metodología ERICA
                                </Link>
                            </div>
                        </div>
                    </aside>

                    {/* Related */}
                    <section className="mt-16">
                        <p className="text-[11px] tracking-[0.28em] uppercase text-[#C96342] font-semibold mb-6">Sigue leyendo</p>
                        <div className="grid md:grid-cols-2 gap-0 border-t border-[#1A1714]/12">
                            <Link
                                href="/blog/codingal-vs-innovakids-comparativa"
                                className="group border-b md:border-r border-[#1A1714]/12 py-8 md:pr-8 hover:bg-[#F2EDE0]/40 transition-colors"
                            >
                                <p className="text-[11px] tracking-[0.22em] uppercase text-[#1A1714]/55 mb-3">Comparativa</p>
                                <h3
                                    className="text-2xl leading-tight text-[#1A1714] group-hover:text-[#C96342] transition-colors"
                                    style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                                >
                                    Codingal vs InnovaKids: comparativa definitiva (2026)
                                </h3>
                                <p className="mt-3 text-[14px] text-[#1A1714]/60 leading-relaxed">
                                    Análisis honesto de las dos plataformas líderes en programación e IA para niños.
                                </p>
                            </Link>
                            <Link
                                href="/blog/inteligencia-artificial-para-ninos"
                                className="group border-b border-[#1A1714]/12 py-8 md:pl-8 hover:bg-[#F2EDE0]/40 transition-colors"
                            >
                                <p className="text-[11px] tracking-[0.22em] uppercase text-[#1A1714]/55 mb-3">Guía</p>
                                <h3
                                    className="text-2xl leading-tight text-[#1A1714] group-hover:text-[#C96342] transition-colors"
                                    style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                                >
                                    Inteligencia artificial para niños: guía 2026
                                </h3>
                                <p className="mt-3 text-[14px] text-[#1A1714]/60 leading-relaxed">
                                    Qué es, herramientas, actividades en casa y cómo elegir el curso ideal para 8-17.
                                </p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            <Footer />
        </main>
    )
}
