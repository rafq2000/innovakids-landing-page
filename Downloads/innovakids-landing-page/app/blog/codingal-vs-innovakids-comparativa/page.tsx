import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
    title: "Codingal vs InnovaKids 2026 · ¿Cuál Es Mejor? | InnovaKids",
    description:
        "Codingal vs InnovaKids 2026: comparativa honesta de precios, metodología y garantías del mejor curso de IA y programación para niños 8-17. Lee el análisis.",
    keywords: [
        "codingal vs innovakids",
        "mejor curso programacion niños 2026",
        "comparativa cursos ia niños",
        "codingal opiniones",
        "alternativa codingal",
    ],
    alternates: {
        canonical: "https://www.innovakidslatam.com/blog/codingal-vs-innovakids-comparativa",
    },
    openGraph: {
        title: "Codingal vs InnovaKids 2026 · Comparativa Definitiva | InnovaKids",
        description:
            "Análisis honesto: Codingal vs InnovaKids. Precios, metodologías y garantías del mejor curso de IA y programación para niños 8-17.",
        url: "https://www.innovakidslatam.com/blog/codingal-vs-innovakids-comparativa",
        siteName: "InnovaKids",
        type: "article",
        locale: "es_419",
        images: [{
            url: "https://www.innovakidslatam.com/children-using-ai-educational-tools.jpg",
            width: 1200,
            height: 630,
            alt: "Codingal vs InnovaKids 2026 - Comparativa de cursos de IA y programación para niños",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Codingal vs InnovaKids 2026 · ¿Cuál Es Mejor? | InnovaKids",
        description:
            "Comparativa honesta: precios, metodología y garantías del mejor curso de IA y programación para niños 8-17 años.",
        images: ["https://www.innovakidslatam.com/children-using-ai-educational-tools.jpg"],
    },
}

const comparisonRows = [
    {
        label: "Duración del curso",
        codingal: "Variables (muchos planes anuales)",
        innovakids: "Ciclos intensivos de 5 a 10 semanas",
    },
    {
        label: "Enfoque principal",
        codingal: "Programación tradicional, bloque a bloque",
        innovakids: "Programación asistida por IA generativa (apps reales)",
    },
    {
        label: "Edades meta",
        codingal: "5 a 18 años",
        innovakids: "8 a 17 años (separados por nivel)",
    },
    {
        label: "Inversión",
        codingal: "Membresías prolongadas / alto volumen",
        innovakids: "Desde US$267 pago único, sin mensualidades sorpresa",
    },
    {
        label: "Garantía",
        codingal: "Limitada según plan contratado",
        innovakids: "10 días de satisfacción, devolución íntegra",
    },
]

export default function CodingalVsInnovakidsPage() {
    return (
        <div className="min-h-screen bg-[#FAF7EF] text-[#1A1714]">
            <Navigation />

            <article className="pt-32 pb-16">
                <div className="max-w-[1100px] mx-auto px-6 md:px-10">
                    <nav aria-label="Breadcrumb" className="mb-10 text-[12px] tracking-[0.2em] uppercase text-[#1A1714]/55">
                        <Link href="/" className="hover:text-[#C96342] transition-colors">InnovaKids</Link>
                        <span className="mx-3" aria-hidden>/</span>
                        <Link href="/blog" className="hover:text-[#C96342] transition-colors">Blog</Link>
                        <span className="mx-3" aria-hidden>/</span>
                        <span className="text-[#1A1714]">Codingal vs InnovaKids</span>
                    </nav>

                    <header className="mb-16 pb-16 border-b border-[#1A1714]/12">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="h-px w-10 bg-[#C96342]" aria-hidden />
                            <span className="text-[11px] tracking-[0.28em] uppercase text-[#C96342] font-semibold">
                                Comparativa · 6 min de lectura
                            </span>
                        </div>

                        <h1
                            className="text-5xl md:text-7xl leading-[0.98] tracking-[-0.02em] text-[#1A1714] max-w-[22ch]"
                            style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                        >
                            Codingal vs InnovaKids: el <em className="italic text-[#C96342]">mejor curso</em> de programación online.
                        </h1>

                        <div className="mt-10 flex flex-wrap items-center gap-6 text-[13px] text-[#1A1714]/60">
                            <span>Actualizado en marzo 2026</span>
                            <span aria-hidden>·</span>
                            <span>Equipo InnovaKids</span>
                        </div>
                    </header>

                    <div className="grid lg:grid-cols-12 gap-12">
                        <div
                            className="lg:col-span-9 prose prose-lg max-w-none font-serif
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
                                Si estás buscando <strong>el mejor curso de programación online para niños y adolescentes (8 a 17 años)</strong>,
                                probablemente te has cruzado con dos de las opciones más populares en el mercado latinoamericano: <strong>Codingal</strong> e <strong>InnovaKids</strong>.
                            </p>

                            <p>
                                Ambas plataformas prometen enseñar a los chicos las habilidades del futuro. Pero ¿cuál es realmente la inversión
                                más inteligente en este 2026? ¿Cuál metodología mantendrá a tu hijo enganchado sin frustrarse? En este artículo
                                analizamos a fondo <strong>Codingal vs InnovaKids</strong> para que tomes la mejor decisión.
                            </p>

                            <h2>1. Metodología: teoría tradicional vs. Vibe Coding</h2>
                            <p>La mayor diferencia entre ambas academias radica en <em>cómo</em> enseñan.</p>

                            <h3>El enfoque de Codingal</h3>
                            <p>
                                Codingal utiliza un enfoque tradicional de enseñanza de código por bloques (como Scratch) y luego transiciones
                                a lenguajes como Python. Sus clases para niños de 8 a 14 años suelen centrarse en la sintaxis, enseñando bucles,
                                variables y algoritmos paso a paso. Es una excelente metodología técnica, pero muchos padres reportan que para
                                algunos adolescentes puede resultar repetitiva o "como la escuela" si el niño no tiene un genuino amor previo
                                por las matemáticas o la lógica dura.
                            </p>

                            <h3>El enfoque de InnovaKids (Vibe Coding)</h3>
                            <p>
                                InnovaKids revolucionó el sector en 2025/2026 aplicando la metodología <strong>"Vibe Coding"</strong>.
                                InnovaKids entiende que la inteligencia artificial de hoy escribe código mejor y más rápido que cualquier humano.
                                Por ende, en InnovaKids, el niño o adolescente <strong>aprende a dirigir a la IA para crear</strong>.
                            </p>
                            <ul>
                                <li>En vez de memorizar código durante semanas para hacer que un botón cambie de color…</li>
                                <li>Los estudiantes dirigen a la IA como su copiloto para <strong>crear videojuegos 3D, aplicaciones reales y sitios web profesionales</strong> en tiempo récord.</li>
                                <li>Promueve habilidades de <em>liderazgo, prompt engineering y diseño estructural</em>, las verdaderas habilidades del futuro laboral.</li>
                            </ul>

                            <h2>2. Tamaño de las clases y personalización</h2>
                            <p>
                                El éxito online depende brutalmente del tamaño del grupo. Ningún niño atiende en Zoom si es "uno más del montón".
                            </p>

                            <div className="not-prose my-10 border border-[#1A1714]/12 divide-y divide-[#1A1714]/12">
                                <div className="p-6 md:p-8">
                                    <p className="text-[11px] uppercase tracking-[0.28em] text-[#1A1714]/55 font-semibold mb-3">Codingal</p>
                                    <p className="text-[15px] text-[#1A1714]/75 leading-relaxed font-sans">
                                        Muchos de sus cursos de introducción o clases grupales pueden tener números variados, a veces grandes.
                                        Tienen opciones "1 a 1", pero suelen incrementar agresivamente el precio mensual del programa.
                                    </p>
                                </div>
                                <div className="p-6 md:p-8 bg-[#F2EDE0]/40">
                                    <p className="text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold mb-3">InnovaKids</p>
                                    <p className="text-[15px] text-[#1A1714]/85 leading-relaxed font-sans">
                                        <strong>Estrictamente 5 alumnos por clase</strong> online en vivo, con cámara y micrófono encendidos.
                                        Atención ultra-personalizada y compañerismo sin que nadie quede atrás.
                                    </p>
                                </div>
                            </div>

                            <h2>3. Comparación directa: costos y duración</h2>
                            <p>Elegir el mejor curso de programación online también es un factor de viabilidad económica.</p>

                            <div className="not-prose my-10 overflow-x-auto">
                                <table className="w-full border-collapse text-left min-w-[600px] font-sans">
                                    <thead>
                                        <tr className="border-y-2 border-[#1A1714]">
                                            <th className="py-4 pr-4 text-[11px] tracking-[0.22em] uppercase text-[#1A1714] font-semibold">Característica</th>
                                            <th className="py-4 px-4 text-[11px] tracking-[0.22em] uppercase text-[#1A1714]/70 font-semibold">Codingal</th>
                                            <th className="py-4 pl-4 text-[11px] tracking-[0.22em] uppercase text-[#C96342] font-semibold">InnovaKids</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {comparisonRows.map((row) => (
                                            <tr key={row.label} className="border-b border-[#1A1714]/12 align-top">
                                                <td className="py-5 pr-4 text-[15px] text-[#1A1714] font-semibold">{row.label}</td>
                                                <td className="py-5 px-4 text-[14px] text-[#1A1714]/65 leading-relaxed">{row.codingal}</td>
                                                <td className="py-5 pl-4 text-[14px] text-[#1A1714] leading-relaxed font-medium">{row.innovakids}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <h2>4. Profesores y expertos</h2>
                            <p>
                                <strong>Codingal</strong> cuenta con docentes verificados globalmente, principalmente enfocados en las bases
                                teóricas de la informática y preparación para competencias y olimpíadas de código.
                            </p>
                            <p>
                                <strong>InnovaKids</strong> utiliza a desarrolladores, <em>prompt engineers</em> y creativos digitales activos
                                en la industria tecnológica. Sus docentes enseñan lo que se usa "hoy en Silicon Valley". El profesor funciona
                                como un director de proyecto, guiando a los adolescentes a no solo "aprender código", sino a lanzar una marca,
                                un juego o monetizar una app.
                            </p>

                            <h2>Conclusión: ¿cuál elegir en 2026?</h2>
                            <p>La decisión depende de hacia dónde quieres llevar a tu hijo.</p>
                            <ul>
                                <li>
                                    Si tu hijo desea volverse un ingeniero de software purista que programe línea por línea el backend de un
                                    banco (perfil extremadamente matemático), <strong>Codingal</strong> ofrece buenos caminos estructurales de
                                    largo plazo.
                                </li>
                                <li>
                                    Si quieres que tu hijo desarrolle <strong>creatividad exponencial</strong>, aprenda las habilidades prácticas
                                    de IA que exigen todas las empresas hoy, cree sus propias apps/startups de inmediato y se divierta en grupos
                                    de 5 personas, <strong>InnovaKids</strong> es indiscutiblemente la ganadora de esta época.
                                </li>
                            </ul>
                            <p>
                                El avance de la IA nos dictamina que <em>saber "programar a mano" será secundario; saber dirigir a una
                                inteligencia artificial para programar apps será el superpoder del futuro cercano.</em>
                            </p>
                        </div>

                        {/* Aside: conversion panel */}
                        <aside className="lg:col-span-3">
                            <div className="lg:sticky lg:top-32 border-t border-[#1A1714]/12 pt-8">
                                <p className="text-[11px] tracking-[0.28em] uppercase text-[#C96342] font-semibold mb-4">
                                    Reserva con riesgo cero
                                </p>
                                <p
                                    className="text-2xl leading-tight mb-4 text-[#1A1714]"
                                    style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                                >
                                    ¿Te convence la metodología de InnovaKids?
                                </p>
                                <p className="text-[14px] text-[#1A1714]/65 leading-relaxed mb-6">
                                    Grupos estrictos de 5 alumnos. Clases en vivo. Garantía de 10 días.
                                </p>
                                <Link
                                    href="/clase-gratis"
                                    className="inline-flex w-full items-center justify-center gap-2 bg-[#C96342] hover:bg-[#A8502F] text-[#FAF7EF] px-6 py-4 font-semibold text-[14px] tracking-wide transition-colors"
                                >
                                    Agendar clase gratis
                                    <span aria-hidden>→</span>
                                </Link>
                                <Link
                                    href="/cursos/inteligencia-artificial"
                                    className="mt-3 inline-flex w-full items-center justify-center gap-2 border border-[#1A1714] text-[#1A1714] hover:bg-[#1A1714] hover:text-[#FAF7EF] px-6 py-4 font-semibold text-[14px] tracking-wide transition-colors"
                                >
                                    Ver el programa
                                </Link>
                            </div>
                        </aside>
                    </div>

                    {/* Related */}
                    <section className="mt-24 pt-12 border-t border-[#1A1714]/12">
                        <p className="text-[11px] tracking-[0.28em] uppercase text-[#C96342] font-semibold mb-6">
                            Sigue leyendo
                        </p>
                        <div className="grid md:grid-cols-2 gap-0 border-t border-[#1A1714]/12">
                            <Link
                                href="/blog/mejores-cursos-verano-programacion-ia-ninos-2026"
                                className="group border-b md:border-r border-[#1A1714]/12 py-8 md:pr-8 hover:bg-[#F2EDE0]/40 transition-colors"
                            >
                                <p className="text-[11px] tracking-[0.22em] uppercase text-[#1A1714]/55 mb-3">Comparativa</p>
                                <h3
                                    className="text-2xl leading-tight text-[#1A1714] group-hover:text-[#C96342] transition-colors"
                                    style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                                >
                                    Mejores cursos de verano: programación vs. IA (2026)
                                </h3>
                                <p className="mt-3 text-[14px] text-[#1A1714]/60 leading-relaxed">
                                    Análisis honesto de cursos de verano de programación e inteligencia artificial para niños.
                                </p>
                            </Link>
                            <Link
                                href="/blog/cursos-online-tecnologia-ninos-adolescentes"
                                className="group border-b border-[#1A1714]/12 py-8 md:pl-8 hover:bg-[#F2EDE0]/40 transition-colors"
                            >
                                <p className="text-[11px] tracking-[0.22em] uppercase text-[#1A1714]/55 mb-3">Guía</p>
                                <h3
                                    className="text-2xl leading-tight text-[#1A1714] group-hover:text-[#C96342] transition-colors"
                                    style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                                >
                                    Cursos online de tecnología para niños y adolescentes
                                </h3>
                                <p className="mt-3 text-[14px] text-[#1A1714]/60 leading-relaxed">
                                    La guía definitiva para elegir el mejor curso online según la edad de tu hijo.
                                </p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            <Footer />
        </div>
    )
}
