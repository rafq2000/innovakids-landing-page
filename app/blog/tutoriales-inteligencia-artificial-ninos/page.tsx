import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
    // TARGET: "tutoriales de inteligencia artificial para niños" (GSC pos ~6.1, sin página dedicada)
    // + "inteligencia artificial básica para niños" (~9.4) + "enseñanza/aprendizaje de IA para niños" (~11-13.7)
    title: "Tutoriales de Inteligencia Artificial para Niños: 7 Paso a Paso Gratis | InnovaKids",
    description:
        "7 tutoriales de inteligencia artificial para niños, paso a paso y gratis: cuentos, música, arte, videojuegos y más. IA básica para niños de 8 a 17 años, explicada para partir hoy.",
    keywords: [
        "tutoriales de inteligencia artificial para niños",
        "inteligencia artificial básica para niños",
        "enseñanza de inteligencia artificial para niños",
        "aprendizaje de inteligencia artificial para niños",
        "tutorial ia niños gratis",
    ],
    alternates: {
        canonical: "https://www.innovakidslatam.com/blog/tutoriales-inteligencia-artificial-ninos",
    },
    openGraph: {
        title: "Tutoriales de Inteligencia Artificial para Niños: 7 Paso a Paso Gratis | InnovaKids",
        description:
            "Cuentos, música, arte y videojuegos con IA: 7 tutoriales gratis para que tu hijo cree su primer proyecto hoy.",
        url: "https://www.innovakidslatam.com/blog/tutoriales-inteligencia-artificial-ninos",
        siteName: "InnovaKids",
        type: "article",
        locale: "es_419",
        images: [{
            url: "https://www.innovakidslatam.com/kids-creating-ai-projects.jpg",
            width: 1200,
            height: 630,
            alt: "Tutoriales de inteligencia artificial para niños paso a paso - InnovaKids",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Tutoriales de Inteligencia Artificial para Niños: 7 Paso a Paso Gratis | InnovaKids",
        description:
            "7 tutoriales gratis de IA para niños de 8 a 17: cuentos, música, arte y videojuegos, paso a paso.",
        images: ["https://www.innovakidslatam.com/kids-creating-ai-projects.jpg"],
    },
}

const TUTORIALES = [
    {
        n: "01",
        titulo: "Su primer cuento ilustrado con IA",
        edad: "8-10 años · 30 min",
        pasos: "Pídele a ChatGPT o Gemini que escriba un cuento donde tu hijo sea el protagonista (él dicta la idea). Luego generen juntos las ilustraciones describiendo cada escena. Impriman el resultado: primer libro propio.",
    },
    {
        n: "02",
        titulo: "Una canción original con Suno",
        edad: "8-17 años · 20 min",
        pasos: "En Suno, tu hijo escribe de qué quiere que hable la canción y elige el estilo (reggaetón, rock, lo que sea). En minutos tiene un tema completo con su letra. Desafío: que haga el himno de la familia.",
    },
    {
        n: "03",
        titulo: "Arte digital con descripción de texto",
        edad: "8-13 años · 20 min",
        pasos: "Con un generador de imágenes, practiquen el arte del 'prompt': describir con detalle (luz, estilo, colores) hasta lograr la imagen imaginada. Es la habilidad base de toda la IA creativa.",
    },
    {
        n: "04",
        titulo: "Su primer mini videojuego con Vibe Coding",
        edad: "11-17 años · 45 min",
        pasos: "En el chat de una IA, tu hijo describe un juego simple ('una nave que esquiva meteoritos') y le pide el código HTML para jugarlo en el navegador. Lo guarda como archivo .html, lo abre, y a jugar. Luego pide cambios: más velocidad, otro color, puntaje.",
    },
    {
        n: "05",
        titulo: "Un quiz de estudio con NotebookLM",
        edad: "12-17 años · 25 min",
        pasos: "Suban los apuntes o el PDF de una materia a NotebookLM y pídanle un cuestionario de práctica. La IA se vuelve tutor personal: estudiar deja de ser releer y pasa a ser jugar contra sus propias preguntas.",
    },
    {
        n: "06",
        titulo: "Un video corto editado con CapCut",
        edad: "10-17 años · 40 min",
        pasos: "Con las funciones de IA de CapCut (subtítulos automáticos, cortes, efectos), tu hijo convierte clips del celular en un mini documental familiar con narración propia.",
    },
    {
        n: "07",
        titulo: "El detector de IA: ¿real o generado?",
        edad: "8-17 años · 15 min",
        pasos: "Busquen juntos 5 imágenes (algunas reales, otras generadas con IA) y jueguen a detectarlas: manos raras, textos borrosos, luces imposibles. Es la lección de pensamiento crítico más importante de esta década.",
    },
]

export default function TutorialesIAPage() {
    return (
        <div className="min-h-screen bg-[#FAF7EF] text-[#1A1714]">
            <Navigation />

            <article className="pt-32 pb-16">
                <div className="max-w-[1100px] mx-auto px-6 md:px-10">
                    <nav aria-label="Breadcrumb" className="mb-10 text-[12px] tracking-[0.2em] uppercase text-[#1A1714]/55">
                        <Link href="/" className="hover:text-[#B5522F] transition-colors">InnovaKids</Link>
                        <span className="mx-3" aria-hidden>/</span>
                        <Link href="/blog" className="hover:text-[#B5522F] transition-colors">Blog</Link>
                        <span className="mx-3" aria-hidden>/</span>
                        <span className="text-[#1A1714]">Tutoriales de IA para niños</span>
                    </nav>

                    <header className="mb-16 pb-16 border-b border-[#1A1714]/12">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="h-px w-10 bg-[#C96342]" aria-hidden />
                            <span className="text-[11px] tracking-[0.28em] uppercase text-[#B5522F] font-semibold">
                                Tutoriales gratis · 8 min de lectura
                            </span>
                        </div>

                        <h1
                            className="text-5xl md:text-7xl leading-[0.98] tracking-[-0.02em] text-[#1A1714] max-w-[24ch]"
                            style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                        >
                            7 <em className="italic text-[#B5522F]">tutoriales de inteligencia artificial</em> para niños, paso a paso.
                        </h1>

                        <div className="mt-10 flex flex-wrap items-center gap-6 text-[13px] text-[#1A1714]/60">
                            <span>Equipo InnovaKids</span>
                            <span aria-hidden>·</span>
                            <span>Actualizado julio 2026</span>
                            <span aria-hidden>·</span>
                            <span>Gratis · sin saber programar</span>
                        </div>
                    </header>

                    <div
                        className="prose prose-lg max-w-none font-serif
                            prose-headings:text-[#1A1714] prose-headings:font-normal
                            prose-h2:text-3xl prose-h2:sm:text-4xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b prose-h2:border-[#1A1714]/15
                            prose-h3:text-[#A8502F] prose-h3:text-xl prose-h3:mt-10
                            prose-p:font-sans prose-p:text-[#1A1714]/85 prose-p:text-lg prose-p:leading-[1.75]
                            prose-strong:text-[#1A1714]
                            prose-a:text-[#B5522F] prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
                            prose-li:font-sans prose-li:text-[#1A1714]/85
                            prose-li:marker:text-[#B5522F]
                            prose-ol:font-sans prose-ul:font-sans"
                    >
                        <p className="lead text-2xl leading-[1.45] text-[#1A1714]/85 font-sans">
                            La mejor <strong>enseñanza de inteligencia artificial para niños</strong> no parte con teoría: parte creando algo
                            que puedan mostrar orgullosos el mismo día. Estos 7 tutoriales son gratis, no requieren saber programar, y están
                            ordenados de más simple a más ambicioso.
                        </p>

                        <h2>Antes de partir: IA básica para niños en 3 ideas</h2>
                        <ul>
                            <li><strong>La IA es un ayudante que aprende de ejemplos</strong> — como un estudiante que leyó millones de libros y ahora responde preguntas.</li>
                            <li><strong>Se dirige con palabras:</strong> mientras mejor describes lo que quieres (el famoso "prompt"), mejor resultado obtienes. Esa es LA habilidad.</li>
                            <li><strong>Siempre con un adulto cerca:</strong> cuentas supervisadas y conversar sobre lo que crean. La IA es herramienta, no niñera.</li>
                        </ul>
                    </div>

                    {/* Tutoriales numerados */}
                    <section className="mt-16 space-y-0 border-t border-[#1A1714]/12">
                        {TUTORIALES.map((t) => (
                            <div key={t.n} className="grid md:grid-cols-12 gap-4 md:gap-10 py-10 border-b border-[#1A1714]/12">
                                <div className="md:col-span-1">
                                    <span className="font-mono text-[13px] text-[#B5522F] font-semibold">{t.n}</span>
                                </div>
                                <div className="md:col-span-4">
                                    <h3
                                        className="text-2xl leading-tight text-[#1A1714]"
                                        style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                                    >
                                        {t.titulo}
                                    </h3>
                                    <p className="mt-2 text-[12px] tracking-[0.18em] uppercase text-[#1A1714]/55">{t.edad}</p>
                                </div>
                                <div className="md:col-span-7">
                                    <p className="text-[16px] text-[#1A1714]/85 leading-[1.7]">{t.pasos}</p>
                                </div>
                            </div>
                        ))}
                    </section>

                    <div
                        className="prose prose-lg max-w-none font-serif mt-16
                            prose-headings:text-[#1A1714] prose-headings:font-normal
                            prose-h2:text-3xl prose-h2:sm:text-4xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b prose-h2:border-[#1A1714]/15
                            prose-p:font-sans prose-p:text-[#1A1714]/85 prose-p:text-lg prose-p:leading-[1.75]
                            prose-strong:text-[#1A1714]
                            prose-a:text-[#B5522F] prose-a:font-semibold prose-a:no-underline hover:prose-a:underline"
                    >
                        <h2>¿Y después de los tutoriales?</h2>
                        <p>
                            Estos proyectos encienden la chispa, pero el <strong>aprendizaje de inteligencia artificial para niños</strong> de
                            verdad necesita progresión y un profesor que corrija. Ahí es donde entra una
                            {" "}<Link href="/blog/escuela-inteligencia-artificial-ninos">escuela de IA para niños</Link>: en InnovaKids, 10
                            clases en vivo 1 a 1 llevan a tu hijo de estos primeros experimentos a crear su propio videojuego completo. Si
                            quieres más ideas caseras primero, mira las
                            {" "}<Link href="/blog/actividades-inteligencia-artificial-ninos-casa">12 actividades de IA para hacer en casa</Link>.
                        </p>
                    </div>

                    {/* Editorial CTA */}
                    <aside className="mt-20 border-t border-b border-[#1A1714]/12 py-12">
                        <div className="grid md:grid-cols-12 gap-10 items-start">
                            <div className="md:col-span-7">
                                <div className="flex items-center gap-3 mb-5">
                                    <span className="h-px w-10 bg-[#C96342]" aria-hidden />
                                    <span className="text-[11px] tracking-[0.28em] uppercase text-[#B5522F] font-semibold">Próximo paso</span>
                                </div>
                                <h3
                                    className="text-3xl md:text-4xl leading-[1.05] tracking-tight text-[#1A1714] mb-4"
                                    style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                                >
                                    De tutoriales sueltos a un camino real.
                                </h3>
                                <p className="text-[15px] text-[#1A1714]/70 leading-relaxed max-w-[52ch]">
                                    En la Sesión de Diagnóstico gratuita (30-45 min), el profe ve el nivel de tu hijo y te recomienda por
                                    dónde seguir. Sin compromiso.
                                </p>
                            </div>
                            <div className="md:col-span-5 flex flex-col gap-3 md:justify-self-end w-full md:w-auto">
                                <Link
                                    href="/#sesion-estrategica"
                                    className="inline-flex items-center justify-center gap-2 bg-[#C96342] hover:bg-[#9A4428] text-[#FAF7EF] px-8 py-4 font-semibold text-base tracking-wide transition-colors"
                                >
                                    Agendar diagnóstico gratis
                                    <span aria-hidden>→</span>
                                </Link>
                                <Link
                                    href="/descargar-guia-ia-ninos"
                                    className="inline-flex items-center justify-center gap-2 border border-[#1A1714] text-[#1A1714] hover:bg-[#1A1714] hover:text-[#FAF7EF] px-8 py-4 font-semibold text-base tracking-wide transition-colors"
                                >
                                    Descargar guía gratis de 7 herramientas
                                </Link>
                            </div>
                        </div>
                    </aside>

                    {/* Related */}
                    <section className="mt-16">
                        <p className="text-[11px] tracking-[0.28em] uppercase text-[#B5522F] font-semibold mb-6">Sigue leyendo</p>
                        <div className="grid md:grid-cols-2 gap-0 border-t border-[#1A1714]/12">
                            <Link
                                href="/blog/inteligencia-artificial-para-ninos"
                                className="group border-b md:border-r border-[#1A1714]/12 py-8 md:pr-8 hover:bg-[#F2EDE0]/40 transition-colors"
                            >
                                <p className="text-[11px] tracking-[0.22em] uppercase text-[#1A1714]/55 mb-3">Guía</p>
                                <h3
                                    className="text-2xl leading-tight text-[#1A1714] group-hover:text-[#B5522F] transition-colors"
                                    style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                                >
                                    Inteligencia artificial para niños: guía 2026
                                </h3>
                                <p className="mt-3 text-[14px] text-[#1A1714]/60 leading-relaxed">
                                    Qué es, por qué aprenderla y a qué edad partir.
                                </p>
                            </Link>
                            <Link
                                href="/blog/crear-videojuegos-con-ia-ninos-guia-completa"
                                className="group border-b border-[#1A1714]/12 py-8 md:pl-8 hover:bg-[#F2EDE0]/40 transition-colors"
                            >
                                <p className="text-[11px] tracking-[0.22em] uppercase text-[#1A1714]/55 mb-3">Proyecto estrella</p>
                                <h3
                                    className="text-2xl leading-tight text-[#1A1714] group-hover:text-[#B5522F] transition-colors"
                                    style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                                >
                                    Crear videojuegos con IA, guía completa
                                </h3>
                                <p className="mt-3 text-[14px] text-[#1A1714]/60 leading-relaxed">
                                    El proyecto favorito de los alumnos, explicado a fondo.
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
