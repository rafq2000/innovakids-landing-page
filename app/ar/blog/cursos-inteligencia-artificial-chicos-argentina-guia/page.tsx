import { generateHreflangs } from "@/lib/seo-config"
import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import Link from "next/link"

export const metadata: Metadata = {
    robots: { index: false, follow: true },
    title: "Cursos de IA para Chicos en Argentina (Guía 2026)",
    description:
        "Guía Completa: Lo que todo padre argentino debe saber antes de inscribir a su hijo en un curso de IA. Precios en pesos, herramientas, seguridad y mejores opciones.",
    keywords: [
        "guia cursos ia chicos argentina",
        "mejores cursos programacion chicos argentina",
        "comparativa escuelas ia argentina",
        "consejos padres tecnologia argentina",
    ],
    openGraph: {
        title: "Cursos de IA para Chicos en Argentina (Guía 2026)",
        description: "Todo lo que necesitas saber para elegir la mejor educación tecnológica para tu hijo en Argentina.",
        url: "https://www.innovakidslatam.com/ar/blog/cursos-inteligencia-artificial-chicos-argentina-guia",
        locale: "es_AR",
        type: "article",
        siteName: "Blog InnovaKids Argentina",
    },
    alternates: {
        canonical: "https://www.innovakidslatam.com/ar/blog/cursos-inteligencia-artificial-chicos-argentina-guia",
        languages: generateHreflangs("home"),
    },
}

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Cursos de Inteligencia Artificial para Chicos en Argentina: Guía Completa 2026",
    description: "Guía definitiva sobre cursos de IA para chicos en Argentina. Comparativa, precios y qué aprenden.",
    author: { "@type": "Organization", name: "InnovaKids" },
    publisher: { "@type": "Organization", name: "InnovaKids", url: "https://www.innovakidslatam.com" },
    datePublished: "2026-01-08",
    dateModified: "2026-01-08",
}

const comparisonRows: [string, string, string][] = [
    ["Chicos por clase", "Máximo 5", "15-30"],
    ["Clases totales", "10 clases", "4-8 clases"],
    ["Proyectos reales", "10 proyectos", "1-3 ejercicios"],
    ["Herramientas", "10+ IAs profesionales", "1-2 básicas"],
    ["Garantía", "10 días devolución", "Sin garantía"],
    ["Precio", "US$267", "US$150-400"],
    ["Certificado", "Internacional", "Local o ninguno"],
]

const projects = [
    "Chatbot con Vibe IA (ChatGPT)",
    "Arte digital con Vibe Art",
    "Canción original con Vibe Music",
    "Programación de juegos con Vibe Coding",
    "Avatar parlante (Digital Twin)",
    "Videos de cine con Vibe Cinema",
    "Técnicas de estudio (Vibe Study)",
    "Seguridad digital (Cyber Ethics)",
    "Comic ilustrado (Storytelling)",
    "Proyecto final (The Vibe Project)",
]

const faqs = [
    { q: "¿Mi hijo necesita saber programar?", a: "No. El curso está diseñado para principiantes absolutos. Empezamos desde cero." },
    { q: "¿Las clases son en vivo o grabadas?", a: "Son en vivo vía Zoom, con grupos de máximo 5 chicos. También quedan grabadas para ver después." },
    { q: "¿Qué pasa si mi hijo falta a una clase?", a: "Todas las clases quedan grabadas con acceso de por vida." },
    { q: "¿Cómo puedo pagar desde Argentina?", a: "Aceptamos PayPal, tarjetas de crédito internacionales y transferencia bancaria." },
]

export default function ArgentinaBlogGuiaPage() {
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
                            <Link href="/ar" className="hover:text-[#C96342] transition-colors">Argentina</Link>
                            <span className="mx-3" aria-hidden>/</span>
                            <span className="text-[#1A1714]">Guía de cursos de IA</span>
                        </nav>

                        <header className="mb-16 pb-16 border-b border-[#1A1714]/12">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="h-px w-10 bg-[#C96342]" aria-hidden />
                                <span className="text-[11px] tracking-[0.28em] uppercase text-[#C96342] font-semibold">
                                    Guía Argentina · 12 min de lectura
                                </span>
                            </div>

                            <h1
                                className="text-5xl md:text-7xl leading-[0.98] tracking-[-0.02em] text-[#1A1714] max-w-[22ch]"
                                style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                            >
                                Vibe Coding en <em className="italic text-[#C96342]">Argentina</em>: guía completa para padres 2026.
                            </h1>

                            <p className="mt-8 text-xl text-[#1A1714]/70 leading-relaxed max-w-[60ch]">
                                Si estás buscando el mejor curso de IA para tu hijo en Argentina, esta guía te va a ayudar a tomar la
                                decisión correcta. Analizamos opciones, precios, metodologías y qué deberías buscar en un programa de calidad.
                            </p>

                            <div className="mt-10 flex flex-wrap items-center gap-6 text-[13px] text-[#1A1714]/60">
                                <span>Marzo 2026</span>
                                <span aria-hidden>·</span>
                                <span>Equipo InnovaKids</span>
                                <span aria-hidden>·</span>
                                <span>12 min de lectura</span>
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
                                prose-ul:font-sans prose-ol:font-sans"
                        >
                            <h2>¿Qué es el Vibe Coding y por qué aprenderlo?</h2>
                            <p>
                                El <strong>Vibe Coding</strong> es escribir código usando lenguaje natural y asistido por inteligencia artificial.
                                Ya no hace falta memorizar sintaxis compleja. Hoy, un chico en Argentina puede decirle a la IA:
                                "creá un juego de naves espaciales", y la IA genera el código base.
                            </p>
                            <p>
                                En Argentina, la demanda de perfiles tecnológicos sigue volando y el Vibe Coding es la habilidad del futuro.
                            </p>
                        </div>

                        <aside className="not-prose my-12 border-l-2 border-[#C96342] pl-6 py-2">
                            <p className="text-[11px] tracking-[0.28em] uppercase text-[#C96342] font-semibold mb-2">Dato importante</p>
                            <p
                                className="text-lg leading-[1.6] text-[#1A1714]/85"
                                style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                            >
                                Los chicos que aprenden IA entre los 8 y 14 años tienen 3 veces más probabilidades de elegir carreras STEM
                                (ciencia, tecnología, ingeniería y matemáticas) según estudios de la Universidad de Stanford.
                            </p>
                        </aside>

                        <div
                            className="prose prose-lg max-w-none font-serif
                                prose-headings:text-[#1A1714] prose-headings:font-normal
                                prose-h2:text-3xl prose-h2:sm:text-4xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b prose-h2:border-[#1A1714]/15
                                prose-h3:text-[#A8502F] prose-h3:text-xl prose-h3:mt-10
                                prose-p:font-sans prose-p:text-[#1A1714]/85 prose-p:text-lg prose-p:leading-[1.75]
                                prose-strong:text-[#1A1714]
                                prose-a:text-[#C96342] prose-a:font-semibold prose-a:no-underline hover:prose-a:underline"
                        >
                            <h2>¿Qué debe incluir un buen curso de IA para chicos?</h2>
                            <p>No todos los cursos de IA son iguales. Estas son las características a buscar:</p>

                            <h3>1. Grupos reducidos</h3>
                            <p>
                                Un curso con 20 o 30 chicos por clase no funciona. La IA es un tema complejo que requiere atención personalizada.
                                Buscá programas con máximo 5 alumnos por grupo. Así cada chico puede hacer preguntas y recibir feedback individual.
                            </p>

                            <h3>2. Enfoque práctico</h3>
                            <p>
                                Los chicos aprenden haciendo, no escuchando. Un buen curso debe tener al menos 80% de práctica. Tu hijo debería
                                crear proyectos reales: chatbots, arte con IA, música, apps y hasta videojuegos.
                            </p>

                            <h3>3. Herramientas profesionales</h3>
                            <p>
                                Evitá cursos con herramientas "para chicos" simplificadas. Los mejores programas enseñan con las mismas
                                herramientas que usan los profesionales: ChatGPT, Claude, Midjourney, Cursor, etc.
                            </p>

                            <h3>4. Garantía de satisfacción</h3>
                            <p>
                                Un programa serio ofrece garantía de devolución. Si no estás satisfecho con las primeras clases, deberías poder
                                recuperar tu inversión.
                            </p>

                            <h2>Comparativa: InnovaKids vs. otros cursos en Argentina</h2>
                        </div>

                        <div className="not-prose my-10 overflow-x-auto">
                            <table className="w-full border-collapse text-left min-w-[560px] font-sans">
                                <thead>
                                    <tr className="border-y-2 border-[#1A1714]">
                                        <th className="py-4 pr-4 text-[11px] tracking-[0.22em] uppercase text-[#1A1714] font-semibold">Característica</th>
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
                                prose-h2:text-3xl prose-h2:sm:text-4xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b prose-h2:border-[#1A1714]/15
                                prose-p:font-sans prose-p:text-[#1A1714]/85 prose-p:text-lg prose-p:leading-[1.75]
                                prose-strong:text-[#1A1714]"
                        >
                            <h2>¿Qué proyectos crean los chicos en InnovaKids?</h2>
                            <p>En 10 semanas, tu hijo va a crear proyectos increíbles que puede mostrar a familia y amigos:</p>
                        </div>

                        <ul className="not-prose my-10 grid md:grid-cols-2 gap-x-8 gap-y-4 border-t border-[#1A1714]/12 pt-6">
                            {projects.map((p, i) => (
                                <li key={p} className="flex gap-4 items-baseline">
                                    <span className="text-[11px] uppercase tracking-[0.22em] text-[#C96342] font-semibold shrink-0">
                                        0{i < 9 ? i + 1 : ""}{i >= 9 ? i + 1 : ""}
                                    </span>
                                    <span className="text-[15px] text-[#1A1714]/85 leading-relaxed">{p}</span>
                                </li>
                            ))}
                        </ul>

                        <div
                            className="prose prose-lg max-w-none font-serif
                                prose-headings:text-[#1A1714] prose-headings:font-normal
                                prose-h2:text-3xl prose-h2:sm:text-4xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b prose-h2:border-[#1A1714]/15
                                prose-p:font-sans prose-p:text-[#1A1714]/85 prose-p:text-lg prose-p:leading-[1.75]"
                        >
                            <h2>Preguntas frecuentes</h2>
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

                        <div
                            className="prose prose-lg max-w-none font-serif
                                prose-headings:text-[#1A1714] prose-headings:font-normal
                                prose-h2:text-3xl prose-h2:sm:text-4xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b prose-h2:border-[#1A1714]/15
                                prose-p:font-sans prose-p:text-[#1A1714]/85 prose-p:text-lg prose-p:leading-[1.75]"
                        >
                            <h2>Conclusión: ¿vale la pena invertir en un curso de IA?</h2>
                            <p>
                                La respuesta corta es sí. La IA está transformando todas las industrias y los chicos que aprendan a usarla ahora
                                tendrán una ventaja enorme en el futuro.
                            </p>
                            <p>
                                Lo más importante es elegir un curso con grupos reducidos, enfoque práctico y garantía de satisfacción. No te
                                dejes llevar solo por el precio: un curso barato con 30 chicos por clase no le va a servir a tu hijo.
                            </p>
                        </div>

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
                                        ¿Querés que tu hijo aprenda IA de verdad?
                                    </h3>
                                    <p className="text-[15px] text-[#1A1714]/70 leading-relaxed max-w-[52ch]">
                                        Reservá una clase demo gratuita y conocé nuestra metodología. Sin compromiso.
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
                                        href="/ar/cursos-ia-chicos-argentina"
                                        className="inline-flex items-center justify-center gap-2 border border-[#1A1714] text-[#1A1714] hover:bg-[#1A1714] hover:text-[#FAF7EF] px-8 py-4 font-semibold text-base tracking-wide transition-colors"
                                    >
                                        Ver el programa
                                    </Link>
                                </div>
                            </div>
                        </aside>

                        {/* Related */}
                        <section className="mt-16">
                            <p className="text-[11px] tracking-[0.28em] uppercase text-[#C96342] font-semibold mb-6">
                                Sigue leyendo
                            </p>
                            <div className="grid md:grid-cols-2 gap-0 border-t border-[#1A1714]/12">
                                <Link
                                    href="/ar/cursos-ia-chicos-argentina"
                                    className="group border-b md:border-r border-[#1A1714]/12 py-8 md:pr-8 hover:bg-[#F2EDE0]/40 transition-colors"
                                >
                                    <p className="text-[11px] tracking-[0.22em] uppercase text-[#1A1714]/55 mb-3">Programa</p>
                                    <h3
                                        className="text-2xl leading-tight text-[#1A1714] group-hover:text-[#C96342] transition-colors"
                                        style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                                    >
                                        Cursos de IA para chicos en Argentina
                                    </h3>
                                    <p className="mt-3 text-[14px] text-[#1A1714]/60 leading-relaxed">
                                        Información completa sobre el programa.
                                    </p>
                                </Link>
                                <Link
                                    href="/ar/clases-ia-chicos-buenos-aires"
                                    className="group border-b border-[#1A1714]/12 py-8 md:pl-8 hover:bg-[#F2EDE0]/40 transition-colors"
                                >
                                    <p className="text-[11px] tracking-[0.22em] uppercase text-[#1A1714]/55 mb-3">Buenos Aires</p>
                                    <h3
                                        className="text-2xl leading-tight text-[#1A1714] group-hover:text-[#C96342] transition-colors"
                                        style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                                    >
                                        Clases de IA en Buenos Aires
                                    </h3>
                                    <p className="mt-3 text-[14px] text-[#1A1714]/60 leading-relaxed">
                                        Información específica para Buenos Aires.
                                    </p>
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
