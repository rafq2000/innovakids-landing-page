import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
    title: "Cursos Online Tecnología Niños 8-17 años 2026 | InnovaKids",
    description:
        "Cursos online de tecnología para niños y adolescentes 8-17 años en 2026: IA, programación y videojuegos. Grupos reducidos de 5 y clases en vivo. Inscripciones abiertas.",
    keywords: [
        "cursos online tecnologia niños",
        "cursos niños 10 a 12 años",
        "cursos adolescentes 14 a 17",
        "cursos online ia programacion videojuegos",
        "cursos tecnologia niños 2026",
    ],
    alternates: {
        canonical: "https://www.innovakidslatam.com/blog/cursos-online-tecnologia-ninos-adolescentes",
    },
    openGraph: {
        title: "Cursos Online de Tecnología para Niños y Adolescentes 8-17 · 2026 | InnovaKids",
        description:
            "Cursos especializados para chicos 8-17 años. IA, programación web y creación de videojuegos con clases en vivo y grupos reducidos de 5.",
        url: "https://www.innovakidslatam.com/blog/cursos-online-tecnologia-ninos-adolescentes",
        siteName: "InnovaKids",
        type: "article",
        locale: "es_419",
        images: [{
            url: "https://www.innovakidslatam.com/kids-learning-ai-on-computer.jpg",
            width: 1200,
            height: 630,
            alt: "Cursos online de tecnología para niños y adolescentes 8-17 años - InnovaKids",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Cursos Online Tecnología Niños 8-17 años 2026 | InnovaKids",
        description:
            "IA, programación y videojuegos para niños 8-17. Grupos reducidos de 5 y clases en vivo. Inscripciones abiertas.",
        images: ["https://www.innovakidslatam.com/kids-learning-ai-on-computer.jpg"],
    },
}

export default function CursosAdolescentesPage() {
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
                        <span className="text-[#1A1714]">Cursos para niños y adolescentes</span>
                    </nav>

                    <header className="mb-16 pb-16 border-b border-[#1A1714]/12">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="h-px w-10 bg-[#C96342]" aria-hidden />
                            <span className="text-[11px] tracking-[0.28em] uppercase text-[#C96342] font-semibold">
                                Guía definitiva · 7 min de lectura
                            </span>
                        </div>

                        <h1
                            className="text-5xl md:text-7xl leading-[0.98] tracking-[-0.02em] text-[#1A1714] max-w-[22ch]"
                            style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                        >
                            El mejor <em className="italic text-[#C96342]">curso online</em> para niños y adolescentes 8 a 17.
                        </h1>

                        <div className="mt-10 flex flex-wrap items-center gap-6 text-[13px] text-[#1A1714]/60">
                            <span>4.9/5 reseñas de padres</span>
                            <span aria-hidden>·</span>
                            <span>Equipo InnovaKids</span>
                            <span aria-hidden>·</span>
                            <span>7 min de lectura</span>
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
                            Llega un momento en el que los juegos de computadora ya no son suficientes y las escuelas tradicionales se quedan muy atrás
                            de la frontera tecnológica. Todos los días miles de padres buscan en internet <strong>cursos online para niños</strong>
                            intentando preparar a sus hijos.
                        </p>

                        <p>
                            Ya sea que busques <strong>cursos para niños de 10 a 12 años</strong> para despertar su curiosidad temprana, o
                            <strong> cursos para adolescentes de 14 a 17 años</strong> (que suelen frustrarse si el material es demasiado infantil),
                            aquí desglosamos la metodología 2026 que realmente funciona.
                        </p>

                        <h2>El reto de enseñar tecnología según la edad</h2>
                        <p>
                            No puedes enseñar programación a un preadolescente de la misma forma que a un niño pequeño. Es el error número uno de
                            muchas academias de "robótica clásica".
                        </p>

                        <h3>Cursos para niños de 8 a 12 años</h3>
                        <p>
                            A esta edad sus mentes son esponjas hipervisuales. La frustración bloquea el aprendizaje. Por eso el enfoque debe ser
                            <strong> crear resultados rápidos y sorprendentes</strong>. Con plataformas asistidas por IA, los chicos de 10 a 12 años
                            crean mini juegos interactivos o escriben e ilustran sus propios cuentos en apenas unas horas de práctica a la semana.
                        </p>

                        <h3>Cursos para adolescentes de 14 a 17 años</h3>
                        <p>
                            Buscar cursos para adolescentes (Bogotá, Ciudad de México o Miami) significa lidiar con jóvenes que exigen propósito.
                            Si no sienten que están construyendo algo "pro", se aburrirán y abandonarán.
                        </p>
                        <p>En esta franja de edad implementamos <strong>Vibe Enterprise</strong> e <strong>Incubadora Tech</strong>. Se trata de clases 100% online y en vivo donde:</p>
                        <ul>
                            <li>Configuran herramientas avanzadas (ChatGPT Pro, Midjourney, generadores de código).</li>
                            <li>Diseñan una <em>landing page</em> para un intento de startup real.</li>
                            <li>Exploran el desarrollo de videojuegos con IA, en vez de copiar código de un manual.</li>
                            <li>Usan la IA como tutor personal ("Neuro-AI Learning") para rendir mejor en bachillerato.</li>
                        </ul>
                    </div>

                    <aside className="not-prose my-16 border-l-2 border-[#C96342] pl-8 py-4">
                        <p className="text-[11px] tracking-[0.28em] uppercase text-[#C96342] font-semibold mb-3">
                            Online y en vivo
                        </p>
                        <p
                            className="text-xl md:text-2xl leading-[1.4] text-[#1A1714]"
                            style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                        >
                            A veces la mejor academia no está en el barrio vecino. InnovaKids opera 100% digital, conectando a tu hijo desde
                            cualquier país hispano (o desde EE. UU.) con clases en micropantallas de apenas
                            <em className="italic text-[#C96342]"> 5 alumnos</em> junto a expertos top.
                        </p>
                    </aside>

                    <div
                        className="prose prose-lg max-w-none font-serif
                            prose-headings:text-[#1A1714] prose-headings:font-normal
                            prose-h2:text-3xl prose-h2:sm:text-4xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b prose-h2:border-[#1A1714]/15
                            prose-p:font-sans prose-p:text-[#1A1714]/85 prose-p:text-lg prose-p:leading-[1.75]
                            prose-strong:text-[#1A1714]
                            prose-a:text-[#C96342] prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
                            prose-li:font-sans prose-li:text-[#1A1714]/85
                            prose-li:marker:text-[#C96342]
                            prose-ol:font-sans"
                    >
                        <h2>Cursos prácticos 2026: ¿qué construyen exactamente?</h2>
                        <p>En InnovaKids descartamos la teoría estéril. Este es el currículum con el que salen listos al mundo real:</p>
                        <ol>
                            <li><strong>Proyectos multiplataforma:</strong> uso ético y proactivo de IA para programar y acelerar tareas del día a día.</li>
                            <li><strong>El superpoder del Vibe Coding:</strong> dirigir a la computadora para que cree el software complejo mientras ellos deciden la arquitectura. Ideal para que se empoderen financieramente pronto.</li>
                            <li><strong>Portafolio digital:</strong> no terminan con un diploma, terminan con tres apps/juegos publicados accesibles mediante URLs. Algo de qué enorgullecerse con sus amigos y potenciar su perfil universitario.</li>
                        </ol>

                        <h2>Reserva segura: elimina el riesgo como padre</h2>
                        <p>
                            Apostar por la educación online siempre da dudas, más si tratas con adolescentes. Por eso el programa solo requiere
                            <strong> US$27 (CLP 25.000, MXN 540, COP 113.000)</strong> para reservar el cupo.
                        </p>
                        <p>
                            Y algo crucial: cuentas con <strong>10 días de garantía incondicional</strong>. Tu hijo asiste a las dos primeras clases
                            reales (nada de videos pregrabados: profesor en vivo en Zoom o Meet). Si no le apasiona, se reembolsa el pago el mismo día.
                            Si le fascina, pagas el resto sin presiones.
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
                                    No dejes que se queden atrás.
                                </h3>
                                <p className="text-[15px] text-[#1A1714]/70 leading-relaxed max-w-[52ch]">
                                    Inscribe a tu hijo en el curso online de tecnología más premiado y práctico de 2026. Solo 5 cupos por horario.
                                    Garantía de 10 días.
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
                    <section className="mt-16">
                        <p className="text-[11px] tracking-[0.28em] uppercase text-[#C96342] font-semibold mb-6">Sigue leyendo</p>
                        <div className="grid md:grid-cols-2 gap-0 border-t border-[#1A1714]/12">
                            <Link
                                href="/blog/inteligencia-artificial-para-ninos"
                                className="group border-b md:border-r border-[#1A1714]/12 py-8 md:pr-8 hover:bg-[#F2EDE0]/40 transition-colors"
                            >
                                <p className="text-[11px] tracking-[0.22em] uppercase text-[#1A1714]/55 mb-3">Guía</p>
                                <h3
                                    className="text-2xl leading-tight text-[#1A1714] group-hover:text-[#C96342] transition-colors"
                                    style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                                >
                                    Inteligencia artificial para niños: guía 2026
                                </h3>
                                <p className="mt-3 text-[14px] text-[#1A1714]/60 leading-relaxed">
                                    Herramientas, actividades y cómo elegir el curso ideal.
                                </p>
                            </Link>
                            <Link
                                href="/ia-ninos-por-edad"
                                className="group border-b border-[#1A1714]/12 py-8 md:pl-8 hover:bg-[#F2EDE0]/40 transition-colors"
                            >
                                <p className="text-[11px] tracking-[0.22em] uppercase text-[#1A1714]/55 mb-3">Por edad</p>
                                <h3
                                    className="text-2xl leading-tight text-[#1A1714] group-hover:text-[#C96342] transition-colors"
                                    style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                                >
                                    IA para niños según su edad
                                </h3>
                                <p className="mt-3 text-[14px] text-[#1A1714]/60 leading-relaxed">
                                    Qué herramientas y cursos son ideales para cada etapa.
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
