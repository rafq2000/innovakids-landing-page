import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
    // TARGET: "escuela de inteligencia artificial para niños" (GSC pos ~28, sin página dedicada)
    // + "escuela de tecnología para niños" (pos ~11.5)
    title: "Escuela de Inteligencia Artificial para Niños Online (8-17) | InnovaKids",
    description:
        "Escuela de inteligencia artificial para niños y adolescentes de 8 a 17 años: clases online en vivo 1 a 1, proyectos reales con IA y diagnóstico gratis. Toda LATAM y España.",
    keywords: [
        "escuela de inteligencia artificial para niños",
        "escuela de tecnología para niños",
        "academia de inteligencia artificial para niños",
        "escuela ia niños online",
        "escuela de inteligencia artificial para adolescentes",
    ],
    alternates: {
        canonical: "https://www.innovakidslatam.com/blog/escuela-inteligencia-artificial-ninos",
    },
    openGraph: {
        title: "Escuela de Inteligencia Artificial para Niños Online (8-17) | InnovaKids",
        description:
            "Clases online en vivo 1 a 1: tu hijo aprende IA creando videojuegos, música y apps reales. Sesión de Diagnóstico gratis.",
        url: "https://www.innovakidslatam.com/blog/escuela-inteligencia-artificial-ninos",
        siteName: "InnovaKids",
        type: "article",
        locale: "es_419",
        images: [{
            url: "https://www.innovakidslatam.com/kids-learning-ai-on-computer.jpg",
            width: 1200,
            height: 630,
            alt: "Escuela de inteligencia artificial para niños online - InnovaKids",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Escuela de Inteligencia Artificial para Niños Online (8-17) | InnovaKids",
        description:
            "Clases online en vivo 1 a 1: tu hijo aprende IA creando proyectos reales. Diagnóstico gratis.",
        images: ["https://www.innovakidslatam.com/kids-learning-ai-on-computer.jpg"],
    },
}

export default function EscuelaIAPage() {
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
                        <span className="text-[#1A1714]">Escuela de IA para niños</span>
                    </nav>

                    <header className="mb-16 pb-16 border-b border-[#1A1714]/12">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="h-px w-10 bg-[#C96342]" aria-hidden />
                            <span className="text-[11px] tracking-[0.28em] uppercase text-[#B5522F] font-semibold">
                                Guía para padres · 6 min de lectura
                            </span>
                        </div>

                        <h1
                            className="text-5xl md:text-7xl leading-[0.98] tracking-[-0.02em] text-[#1A1714] max-w-[22ch]"
                            style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                        >
                            La <em className="italic text-[#B5522F]">escuela de inteligencia artificial</em> para niños, 100% online.
                        </h1>

                        <div className="mt-10 flex flex-wrap items-center gap-6 text-[13px] text-[#1A1714]/60">
                            <span>Equipo InnovaKids</span>
                            <span aria-hidden>·</span>
                            <span>Actualizado julio 2026</span>
                            <span aria-hidden>·</span>
                            <span>8 a 17 años · toda LATAM y España</span>
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
                            Cuando un padre busca una <strong>escuela de inteligencia artificial para niños</strong>, casi siempre encuentra dos
                            extremos: academias de robótica tradicionales que enseñan tecnología de hace diez años, o apps de videos pregrabados
                            donde nadie corrige a su hijo. Una escuela de verdad es otra cosa.
                        </p>

                        <h2>Qué debería tener una escuela de IA para niños</h2>
                        <p>
                            Antes de matricular a tu hijo en cualquier programa, exige estas cuatro cosas. Son las que separan una escuela seria
                            de un curso genérico:
                        </p>
                        <ul>
                            <li><strong>Clases en vivo, no videos:</strong> un profesor real que ve lo que tu hijo hace y lo corrige en el momento.</li>
                            <li><strong>Currículum por edades:</strong> no es lo mismo enseñarle a un niño de 8 que a un adolescente de 16.</li>
                            <li><strong>Proyectos que existen al final:</strong> un videojuego jugable, una canción, una app — no un diploma de asistencia.</li>
                            <li><strong>Herramientas de verdad:</strong> las mismas que usa la industria (ChatGPT, Gemini, Claude, Suno, CapCut), con guía de uso seguro.</li>
                        </ul>

                        <h2>Cómo funciona InnovaKids como escuela online</h2>
                        <p>
                            InnovaKids es una <strong>escuela online de inteligencia artificial para niños y adolescentes de 8 a 17 años</strong>,
                            presente en toda Latinoamérica y España. El programa de entrada, Vibe Explorer, son 10 clases en vivo donde cada
                            alumno trabaja <strong>1 a 1 con su profesor</strong> — tu hijo es el único alumno de la clase.
                        </p>
                        <p>
                            En esas 10 clases el niño pasa de consumir pantallas a crear con ellas: escribe e ilustra su primer cuento con IA,
                            compone música, diseña arte digital y termina creando su primer videojuego real con Vibe Coding (darle instrucciones
                            a la IA en español para que escriba el código por él).
                        </p>

                        <h3>¿Y si busco una "escuela de tecnología" más general?</h3>
                        <p>
                            La IA se comió a la escuela de tecnología clásica. Programación, diseño, video, música: hoy todas esas habilidades
                            pasan por saber dirigir inteligencia artificial. Por eso un programa de IA bien hecho cubre lo que antes
                            necesitaba cuatro talleres distintos. Si comparas opciones, revisa nuestra
                            {" "}<Link href="/blog/cursos-online-tecnologia-ninos-adolescentes">guía de cursos online de tecnología para niños</Link>.
                        </p>

                        <h2>Edades: de 8 a 17, con caminos distintos</h2>
                        <p>
                            El requisito es tener entre 8 y 17 años. Un niño de 8 parte con proyectos visuales de resultado rápido; un
                            adolescente de 15 va directo a crear cosas "pro" que puede mostrar. Tenemos una guía completa de
                            {" "}<Link href="/ia-ninos-por-edad">qué puede aprender tu hijo según su edad</Link> y un
                            {" "}<Link href="/adolescentes">programa enfocado en adolescentes</Link>.
                        </p>

                        <h2>Cómo se entra: primero un diagnóstico, no una matrícula</h2>
                        <p>
                            No inscribimos a ciegas. El primer paso es una <strong>Sesión de Diagnóstico gratuita</strong> de 30 a 45 minutos por
                            videollamada: el profesor conoce a tu hijo, ve su nivel y sus intereses, y te dice con honestidad por dónde partir.
                            Van juntos el niño y el adulto. Si les hace sentido, reservan el cupo con USD 27 (reembolsables) y el resto se paga
                            después de la segunda clase, con 10 días de garantía total.
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
                                    Conoce la escuela por dentro.
                                </h3>
                                <p className="text-[15px] text-[#1A1714]/70 leading-relaxed max-w-[52ch]">
                                    Agenda la Sesión de Diagnóstico gratuita: 30-45 minutos, el profe conoce a tu hijo y te da una
                                    recomendación honesta. Sin compromiso.
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
                                    href="/programa"
                                    className="inline-flex items-center justify-center gap-2 border border-[#1A1714] text-[#1A1714] hover:bg-[#1A1714] hover:text-[#FAF7EF] px-8 py-4 font-semibold text-base tracking-wide transition-colors"
                                >
                                    Ver el programa completo
                                </Link>
                            </div>
                        </div>
                    </aside>

                    {/* Related */}
                    <section className="mt-16">
                        <p className="text-[11px] tracking-[0.28em] uppercase text-[#B5522F] font-semibold mb-6">Sigue leyendo</p>
                        <div className="grid md:grid-cols-2 gap-0 border-t border-[#1A1714]/12">
                            <Link
                                href="/blog/tutoriales-inteligencia-artificial-ninos"
                                className="group border-b md:border-r border-[#1A1714]/12 py-8 md:pr-8 hover:bg-[#F2EDE0]/40 transition-colors"
                            >
                                <p className="text-[11px] tracking-[0.22em] uppercase text-[#1A1714]/55 mb-3">Práctico</p>
                                <h3
                                    className="text-2xl leading-tight text-[#1A1714] group-hover:text-[#B5522F] transition-colors"
                                    style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                                >
                                    Tutoriales de inteligencia artificial para niños
                                </h3>
                                <p className="mt-3 text-[14px] text-[#1A1714]/60 leading-relaxed">
                                    7 proyectos paso a paso, gratis, para partir hoy en casa.
                                </p>
                            </Link>
                            <Link
                                href="/blog/inteligencia-artificial-para-ninos"
                                className="group border-b border-[#1A1714]/12 py-8 md:pl-8 hover:bg-[#F2EDE0]/40 transition-colors"
                            >
                                <p className="text-[11px] tracking-[0.22em] uppercase text-[#1A1714]/55 mb-3">Guía</p>
                                <h3
                                    className="text-2xl leading-tight text-[#1A1714] group-hover:text-[#B5522F] transition-colors"
                                    style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                                >
                                    Inteligencia artificial para niños: guía 2026
                                </h3>
                                <p className="mt-3 text-[14px] text-[#1A1714]/60 leading-relaxed">
                                    Qué es, por qué aprenderla y cómo elegir el curso ideal.
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
