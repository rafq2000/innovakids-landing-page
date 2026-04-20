import { generateHreflangs } from "@/lib/seo-config";
import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata: Metadata = {
    title: "Inteligencia Artificial para Niños · Guía 2026 | InnovaKids",
    description:
        "Guía completa 2026 de IA para niños 8-17 años: qué es, herramientas, actividades en casa y cómo elegir curso. Probado por 527 familias en 9 países. Lee ya.",
    keywords: [
        "inteligencia artificial para niños",
        "ia para niños guia",
        "que es la ia para niños",
        "herramientas ia niños 2026",
        "curso ia niños guía padres",
    ],
    alternates: {
        canonical: "https://www.innovakidslatam.com/blog/inteligencia-artificial-para-ninos",
        languages: generateHreflangs("home"),
    },
    openGraph: {
        title: "Inteligencia Artificial para Niños · Guía Completa 2026 | InnovaKids",
        description:
            "Todo lo que necesitas saber sobre IA para niños 8-17: herramientas, actividades en casa y cómo elegir curso. Probado por 527 familias.",
        url: "https://www.innovakidslatam.com/blog/inteligencia-artificial-para-ninos",
        siteName: "InnovaKids",
        type: "article",
        locale: "es_419",
        images: [{
            url: "https://www.innovakidslatam.com/hero-child-learning-ai.jpg",
            width: 1200,
            height: 630,
            alt: "Inteligencia artificial para niños - Guía completa 2026 InnovaKids",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Inteligencia Artificial para Niños · Guía 2026 | InnovaKids",
        description:
            "Todo sobre IA para niños 8-17: herramientas, actividades en casa y cómo elegir curso. Probado por 527 familias.",
        images: ["https://www.innovakidslatam.com/hero-child-learning-ai.jpg"],
    },
}

const tocItems = [
    { id: "que-es-ia", label: "¿Qué es la IA?" },
    { id: "por-que-aprender", label: "¿Por qué aprender ahora?" },
    { id: "edad-ideal", label: "Edad ideal" },
    { id: "herramientas", label: "Top 10 herramientas" },
    { id: "actividades", label: "Actividades en casa" },
    { id: "elegir-curso", label: "Cómo elegir curso" },
    { id: "faq", label: "Preguntas frecuentes" },
]

export default function BlogPostPage() {
    return (
        <>
            <Navigation />
            <main className="min-h-screen bg-[#FAF7EF] text-[#1A1714]">
                {/* Header */}
                <header className="pt-32 pb-16 px-6 md:px-10 border-b border-[#1A1714]/12">
                    <div className="max-w-[1100px] mx-auto">
                        <nav aria-label="Breadcrumb" className="mb-10 text-[12px] tracking-[0.2em] uppercase text-[#1A1714]/55">
                            <Link href="/" className="hover:text-[#C96342] transition-colors">InnovaKids</Link>
                            <span className="mx-3" aria-hidden>/</span>
                            <Link href="/blog" className="hover:text-[#C96342] transition-colors">Blog</Link>
                            <span className="mx-3" aria-hidden>/</span>
                            <span className="text-[#1A1714]">Guía de IA para niños</span>
                        </nav>

                        <div className="flex items-center gap-3 mb-6">
                            <span className="h-px w-10 bg-[#C96342]" aria-hidden />
                            <span className="text-[11px] tracking-[0.28em] uppercase text-[#C96342] font-semibold">
                                Guía para padres · 15 min de lectura
                            </span>
                        </div>

                        <h1
                            className="text-5xl md:text-7xl leading-[0.98] tracking-[-0.02em] text-[#1A1714] max-w-[22ch]"
                            style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                        >
                            Inteligencia Artificial para Niños:
                            <em className="italic text-[#C96342]"> guía completa</em> para padres 2026.
                        </h1>

                        <div className="mt-10 flex flex-wrap items-center gap-6 text-[13px] text-[#1A1714]/60">
                            <span>Marzo 2026</span>
                            <span aria-hidden>·</span>
                            <span>Equipo InnovaKids</span>
                            <span aria-hidden>·</span>
                            <span>15 min de lectura</span>
                        </div>
                    </div>
                </header>

                <div className="max-w-[1100px] mx-auto px-6 md:px-10 py-20 grid lg:grid-cols-12 gap-12">
                    {/* Sticky TOC */}
                    <aside className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-32">
                            <p className="text-[11px] tracking-[0.28em] uppercase text-[#C96342] font-semibold mb-5">
                                Tabla de contenidos
                            </p>
                            <nav className="space-y-3 text-[14px] text-[#1A1714]/70 border-l border-[#1A1714]/12 pl-4">
                                {tocItems.map((item, i) => (
                                    <Link
                                        key={item.id}
                                        href={`#${item.id}`}
                                        className="block hover:text-[#C96342] transition-colors"
                                    >
                                        <span className="text-[#C96342] font-semibold mr-2">0{i + 1}</span>
                                        {item.label}
                                    </Link>
                                ))}
                            </nav>

                            <div className="mt-10 border-t border-[#1A1714]/12 pt-6">
                                <p
                                    className="text-xl leading-tight mb-3 text-[#1A1714]"
                                    style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                                >
                                    ¿Quieres que tu hijo aprenda IA?
                                </p>
                                <p className="text-[13px] text-[#1A1714]/65 leading-relaxed mb-4">
                                    Clases en vivo, grupos de 5 y certificado al finalizar.
                                </p>
                                <Link
                                    href="/clase-gratis"
                                    className="inline-flex items-center gap-2 bg-[#C96342] hover:bg-[#A8502F] text-[#FAF7EF] px-5 py-3 font-semibold text-[13px] tracking-wide transition-colors"
                                >
                                    Agendar clase gratis
                                    <span aria-hidden>→</span>
                                </Link>
                            </div>
                        </div>
                    </aside>

                    {/* Content */}
                    <article
                        className="lg:col-span-9 prose prose-lg max-w-none font-serif
                            prose-headings:text-[#1A1714] prose-headings:font-normal
                            prose-h2:text-3xl prose-h2:sm:text-4xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b prose-h2:border-[#1A1714]/15 prose-h2:scroll-mt-32
                            prose-h3:text-[#A8502F] prose-h3:text-xl prose-h3:mt-10
                            prose-p:font-sans prose-p:text-[#1A1714]/85 prose-p:text-lg prose-p:leading-[1.75]
                            prose-strong:text-[#1A1714]
                            prose-a:text-[#C96342] prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
                            prose-li:font-sans prose-li:text-[#1A1714]/85
                            prose-li:marker:text-[#C96342]
                            prose-ol:font-sans prose-ul:font-sans"
                    >
                        <p className="lead text-2xl leading-[1.45] text-[#1A1714]/85 font-sans">
                            La inteligencia artificial ya no es ciencia ficción. Tu hijo la usa todos los días sin saberlo:
                            cuando YouTube le recomienda un video, cuando el corrector del celular le sugiere palabras,
                            cuando juega contra la máquina en un videojuego.
                        </p>
                        <p>
                            La diferencia es que hoy, por primera vez, un niño de 8 años puede <strong>CREAR con IA</strong>, no solo consumirla.
                            Puede generar arte, componer música, programar videojuegos y clonar su propia voz — todo con herramientas que
                            hasta hace 2 años solo existían en laboratorios de investigación.
                        </p>

                        <aside className="not-prose my-12 border-l-2 border-[#C96342] pl-6 py-2">
                            <p
                                className="text-lg leading-[1.6] text-[#1A1714]/85"
                                style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                            >
                                Esta guía te explica todo lo que necesitas saber como padre: qué es la IA a un nivel comprensible,
                                por qué importa (mucho), herramientas gratuitas para empezar, y cómo asegurar que tu hijo no se quede atrás.
                            </p>
                        </aside>

                        <h2 id="que-es-ia">1. ¿Qué es la inteligencia artificial explicada para niños?</h2>
                        <p>
                            Imagina que le enseñas a un perro a sentarse. Le muestras el gesto muchas veces, le das premio cuando lo hace bien,
                            y eventualmente el perro "aprende". La IA funciona parecido, pero en vez de un perro es un programa de computador,
                            y en vez de galletas son datos.
                        </p>

                        <h3>La analogía del Pincel Mágico</h3>
                        <p>
                            En InnovaKids usamos esta analogía: <strong>"La IA es como un pincel muy poderoso. El pincel no pinta cuadros solo
                            — necesita a un artista que lo use. Tu hijo es el artista. La IA es el pincel."</strong>
                        </p>

                        <h2 id="por-que-aprender">2. ¿Por qué deberían aprender IA en 2026?</h2>
                        <p>
                            Según el Foro Económico Mundial, para 2030 se crearán 97 millones de nuevos empleos relacionados con IA.
                        </p>
                        <p>
                            Cuando hablamos de "aprender IA", muchos padres piensan en programación compleja. Pero la IA de 2026 no requiere
                            nada de eso para usarla. Lo que realmente aprende un niño es:
                        </p>
                        <ul>
                            <li><strong>Pensamiento crítico:</strong> evaluar si lo que generó la IA es bueno o necesita mejoras.</li>
                            <li><strong>Comunicación clara:</strong> saber pedirle cosas a la máquina (prompt engineering).</li>
                            <li><strong>Creatividad aumentada:</strong> crear cosas que antes le tomarían semanas, en minutos.</li>
                        </ul>

                        <h2 id="edad-ideal">3. ¿A qué edad puede un niño aprender IA?</h2>

                        <div className="not-prose my-10 grid md:grid-cols-2 border border-[#1A1714]/12 divide-y md:divide-y-0 md:divide-x divide-[#1A1714]/12">
                            <div className="p-8">
                                <p className="text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold mb-4">
                                    8–10 años
                                </p>
                                <h4
                                    className="text-2xl leading-tight text-[#1A1714] mb-3"
                                    style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                                >
                                    La edad de la curiosidad
                                </h4>
                                <p className="text-[15px] text-[#1A1714]/70 leading-relaxed">
                                    Esponjas creativas. Quieren ver resultados rápidos. Ideal para crear arte, música e historias.
                                </p>
                            </div>
                            <div className="p-8">
                                <p className="text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold mb-4">
                                    11–14 años
                                </p>
                                <h4
                                    className="text-2xl leading-tight text-[#1A1714] mb-3"
                                    style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                                >
                                    La edad de los proyectos
                                </h4>
                                <p className="text-[15px] text-[#1A1714]/70 leading-relaxed">
                                    Pueden sostener proyectos complejos. Ideal para programar videojuegos con asistencia de IA.
                                </p>
                            </div>
                        </div>

                        <p>
                            ¿Tu hijo tiene entre 8 y 14 años? Nuestros cursos están diseñados específicamente para estas etapas.{" "}
                            <Link href="/cursos/inteligencia-artificial">Ver programa de estudios InnovaKids →</Link>
                        </p>

                        <h2 id="herramientas">4. Las 10 mejores herramientas de IA para niños</h2>
                        <p>Estas son las herramientas que usamos en nuestras clases:</p>
                        <ol>
                            <li><strong>ChatGPT (OpenAI):</strong> el estándar de oro. Ideal para lluvia de ideas y escribir historias.</li>
                            <li><strong>Midjourney:</strong> la mejor calidad de imagen. Para niños artistas.</li>
                            <li><strong>Leonardo.ai:</strong> alternativa gratuita y muy potente para generación de imágenes.</li>
                            <li><strong>Suno.ai:</strong> crea canciones completas (letra, voz, música) en segundos. ¡A los niños les encanta!</li>
                            <li><strong>ElevenLabs:</strong> clonación de voz. Pueden hacer que su computador hable con su propia voz.</li>
                            <li><strong>Scratch + IA:</strong> extensiones de IA para la plataforma de programación más popular.</li>
                            <li><strong>Canva Magic Studio:</strong> diseño gráfico asistido por IA.</li>
                            <li><strong>Luma Dream Machine:</strong> para crear videos cortos y animaciones 3D.</li>
                            <li><strong>NotebookLM:</strong> para estudiantes más grandes, convierte apuntes en podcasts.</li>
                            <li><strong>V0 (Vercel):</strong> para crear interfaces de sitios web describiéndolas (avanzado).</li>
                        </ol>

                        <h2 id="actividades">5. Actividades de IA para hacer en casa</h2>
                        <p>Prueba esta actividad hoy mismo:</p>
                        <h3>Actividad: "El Cuento Infinito"</h3>
                        <p><strong>Herramienta:</strong> ChatGPT (Gratis)</p>
                        <p><strong>Pasos:</strong></p>
                        <ol>
                            <li>Tu hijo elige un tema (ej: dinosaurios en el espacio).</li>
                            <li>Le pide a la IA: "Escribe el inicio de una historia sobre dinosaurios espaciales, pero detente en la parte más emocionante".</li>
                            <li>Tu hijo lee y escribe qué pasa después.</li>
                            <li>Le pide a la IA: "Continúa la historia basándote en lo que escribí".</li>
                        </ol>

                        <h2 id="elegir-curso">6. Cómo elegir un buen curso de IA</h2>
                        <p>No todos los cursos son iguales. Busca esto:</p>
                        <ul>
                            <li><strong>Clases en vivo:</strong> los videos grabados aburren a los niños. Necesitan interacción.</li>
                            <li><strong>Grupos pequeños:</strong> máximo 5–8 alumnos. Si son 30, tu hijo es invisible.</li>
                            <li><strong>Proyectos, no teoría:</strong> deben terminar la clase con algo creado (una imagen, un juego).</li>
                            <li><strong>Seguridad:</strong> instructores capacitados que enseñen uso ético.</li>
                        </ul>

                        <h2 id="faq">7. Preguntas frecuentes</h2>
                        <h3>¿Es segura la IA para niños?</h3>
                        <p>
                            Sí, bajo supervisión. Plataformas como ChatGPT tienen filtros, pero la supervisión parental y la educación sobre
                            seguridad digital son clave. Eso es lo primero que enseñamos.
                        </p>
                        <h3>¿Mi hijo necesita saber programar?</h3>
                        <p>
                            No. La IA permite crear software usando lenguaje natural (español). Es el mejor momento para entrar a la
                            tecnología sin barreras técnicas.
                        </p>

                        {/* Editorial CTA */}
                        <aside className="not-prose mt-20 border-t border-b border-[#1A1714]/12 py-12">
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
                                        ¿Listo para transformar el futuro de tu hijo?
                                    </h3>
                                    <p className="text-[15px] text-[#1A1714]/70 leading-relaxed max-w-[52ch]">
                                        Inscríbelo en Vibe Explorer. Diez clases en vivo, grupos de cinco, profesores expertos y garantía
                                        de satisfacción en las primeras dos sesiones.
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
                                        href="/cursos/inteligencia-artificial"
                                        className="inline-flex items-center justify-center gap-2 border border-[#1A1714] text-[#1A1714] hover:bg-[#1A1714] hover:text-[#FAF7EF] px-8 py-4 font-semibold text-base tracking-wide transition-colors"
                                    >
                                        Ver el programa completo
                                    </Link>
                                </div>
                            </div>
                        </aside>

                        {/* Related */}
                        <section className="not-prose mt-16">
                            <p className="text-[11px] tracking-[0.28em] uppercase text-[#C96342] font-semibold mb-6">
                                Sigue leyendo
                            </p>
                            <div className="grid md:grid-cols-2 gap-0 border-t border-[#1A1714]/12">
                                <Link
                                    href="/blog/metodologia-erica-pensamiento-computacional-ia-ninos"
                                    className="group border-b md:border-r border-[#1A1714]/12 py-8 md:pr-8 hover:bg-[#F2EDE0]/40 transition-colors"
                                >
                                    <p className="text-[11px] tracking-[0.22em] uppercase text-[#1A1714]/55 mb-3">Metodología</p>
                                    <h4
                                        className="text-2xl leading-tight text-[#1A1714] group-hover:text-[#C96342] transition-colors"
                                        style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                                    >
                                        Metodología ERICA: pensamiento computacional e IA
                                    </h4>
                                    <p className="mt-3 text-[14px] text-[#1A1714]/60 leading-relaxed">
                                        El marco pedagógico que usamos para desarrollar habilidades cognitivas reales.
                                    </p>
                                </Link>
                                <Link
                                    href="/blog"
                                    className="group border-b border-[#1A1714]/12 py-8 md:pl-8 hover:bg-[#F2EDE0]/40 transition-colors"
                                >
                                    <p className="text-[11px] tracking-[0.22em] uppercase text-[#1A1714]/55 mb-3">Archivo</p>
                                    <h4
                                        className="text-2xl leading-tight text-[#1A1714] group-hover:text-[#C96342] transition-colors"
                                        style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                                    >
                                        Todas las guías de InnovaKids
                                    </h4>
                                    <p className="mt-3 text-[14px] text-[#1A1714]/60 leading-relaxed">
                                        Explora artículos sobre IA, pedagogía y tecnología para familias.
                                    </p>
                                </Link>
                            </div>
                        </section>
                    </article>
                </div>
            </main>
            <Footer />
            <WhatsAppButton />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Inteligencia Artificial para Niños: Guía Completa 2026",
                        "image": "https://www.innovakidslatam.com/hero-child-bg.png",
                        "author": { "@type": "Organization", "name": "InnovaKids" },
                        "publisher": {
                            "@type": "Organization",
                            "name": "InnovaKids",
                            "logo": { "@type": "ImageObject", "url": "https://www.innovakidslatam.com/logo.png" },
                        },
                        "datePublished": "2026-02-01",
                        "dateModified": "2026-02-12",
                    }),
                }}
            />
        </>
    )
}
