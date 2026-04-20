import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Metodología ERICA · Pensamiento Computacional IA Niños | InnovaKids",
    description:
        "Metodología ERICA: pensamiento computacional, Taxonomía de Bloom, STEM y seguridad digital para niños 8-17 años. Probada por 527 familias en 9 países.",
    keywords: [
        "metodologia erica",
        "pensamiento computacional niños",
        "metodologia ia niños",
        "stem ia niños",
        "taxonomia bloom ia niños",
    ],
    alternates: {
        canonical: "https://www.innovakidslatam.com/blog/metodologia-erica-pensamiento-computacional-ia-ninos",
    },
    openGraph: {
        title: "Metodología ERICA · Pensamiento Computacional e IA para Niños | InnovaKids",
        description:
            "Cómo la metodología activa ERICA desarrolla pensamiento algorítmico, creatividad digital y seguridad digital en niños 8-17 años.",
        url: "https://www.innovakidslatam.com/blog/metodologia-erica-pensamiento-computacional-ia-ninos",
        siteName: "InnovaKids",
        type: "article",
        locale: "es_419",
        images: [{
            url: "https://www.innovakidslatam.com/hero-child-learning-ai.jpg",
            width: 1200,
            height: 630,
            alt: "Metodología ERICA - Pensamiento computacional e IA para niños 8-17 años",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Metodología ERICA · Pensamiento Computacional IA Niños | InnovaKids",
        description:
            "Pensamiento computacional, Taxonomía de Bloom, STEM y seguridad digital para niños 8-17 años.",
        images: ["https://www.innovakidslatam.com/hero-child-learning-ai.jpg"],
    },
}

const authorSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Metodología ERICA: Pensamiento Computacional e IA para Niños",
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
    "mainEntityOfPage": "https://www.innovakidslatam.com/blog/metodologia-erica-pensamiento-computacional-ia-ninos",
}

const ladder = [
    { level: "Explorar", desc: "El alumno interactúa con una herramienta de IA por primera vez (ChatGPT, DALL·E). Nivel Bloom: recordar / comprender." },
    { level: "Reflexionar", desc: "Discusión guiada: ¿cómo funciona? ¿Qué datos usa? ¿Es justo y ético? Nivel Bloom: analizar / evaluar." },
    { level: "Imaginar", desc: "El alumno diseña su proyecto propio: historia, app o videojuego. Nivel Bloom: crear." },
    { level: "Construir", desc: "Desarrollo real con herramientas de IA y programación visual. Nivel Bloom: aplicar / crear." },
    { level: "Presentar", desc: "Demo Day: expone su creación, recibe feedback e itera. Nivel Bloom: evaluar / crear." },
]

export default function MetodologiaERICAPage() {
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
                        <span className="text-[#1A1714]">Metodología ERICA</span>
                    </nav>

                    <header className="mb-16 pb-16 border-b border-[#1A1714]/12">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="h-px w-10 bg-[#C96342]" aria-hidden />
                            <span className="text-[11px] tracking-[0.28em] uppercase text-[#C96342] font-semibold">
                                Pedagogía &amp; STEM · 8 min de lectura
                            </span>
                        </div>

                        <h1
                            className="text-5xl md:text-7xl leading-[0.98] tracking-[-0.02em] text-[#1A1714] max-w-[22ch]"
                            style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                        >
                            Metodología ERICA: cómo desarrollamos el <em className="italic text-[#C96342]">pensamiento computacional</em>.
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
                            <span>8 min de lectura</span>
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
                            En InnovaKids no enseñamos "herramientas de IA" como si fueran un menú de aplicaciones. Nuestra misión es desarrollar el
                            <strong> pensamiento computacional</strong>, la <strong>creatividad digital</strong> y la <strong>seguridad digital infantil</strong>
                            — habilidades cognitivas que trascienden cualquier software. Para lograrlo diseñamos la <strong>Metodología ERICA</strong>.
                        </p>

                        <h2>¿Qué es el pensamiento computacional y por qué importa?</h2>
                        <p>
                            El <strong>pensamiento computacional</strong> (<em>computational thinking</em>) es un marco de resolución de problemas que
                            descompone desafíos complejos en pasos lógicos y manejables. No es "programar código": es la capacidad de
                            <strong> pensar algorítmicamente</strong>, identificar patrones y diseñar soluciones eficientes. La investigadora Jeannette Wing
                            (2006) lo definió como una competencia fundamental del siglo XXI, al mismo nivel que la lectura, la escritura y las matemáticas.
                        </p>
                        <p>En InnovaKids integramos los 4 pilares del pensamiento computacional en cada módulo:</p>
                        <ul>
                            <li><strong>Descomposición:</strong> dividir un problema grande en partes más pequeñas ("¿cómo hago un videojuego?" → personaje, escenario, reglas, puntos).</li>
                            <li><strong>Reconocimiento de patrones:</strong> encontrar similitudes entre problemas para reutilizar soluciones.</li>
                            <li><strong>Abstracción:</strong> enfocarse en lo relevante e ignorar los detalles que no lo son.</li>
                            <li><strong>Diseño algorítmico:</strong> crear una secuencia de pasos ordenados para resolver el problema.</li>
                        </ul>

                        <h2>Taxonomía de Bloom aplicada a la enseñanza de IA</h2>
                        <p>
                            La <strong>Taxonomía de Bloom</strong> establece una jerarquía de procesos cognitivos que guían la enseñanza:
                            <em> recordar → comprender → aplicar → analizar → evaluar → crear</em>. La mayoría de cursos de "tecnología para niños"
                            se quedan en los niveles inferiores (recordar comandos, seguir un tutorial). <strong>ERICA fue diseñada para llevar a
                            cada alumno directamente al nivel superior: crear.</strong>
                        </p>
                        <p>Nuestro ciclo pedagógico sigue esta escalera cognitiva:</p>
                    </div>

                    <ol className="not-prose my-12 border-t border-[#1A1714]/12">
                        {ladder.map((step, i) => (
                            <li key={step.level} className="grid grid-cols-[auto_1fr] gap-8 md:gap-16 py-8 border-b border-[#1A1714]/12">
                                <div>
                                    <p className="text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold mb-2">
                                        Paso 0{i + 1}
                                    </p>
                                    <p
                                        className="text-3xl md:text-4xl leading-none text-[#1A1714]"
                                        style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                                    >
                                        {step.level}
                                    </p>
                                </div>
                                <p className="text-[15px] md:text-base text-[#1A1714]/75 leading-relaxed pt-2">
                                    {step.desc}
                                </p>
                            </li>
                        ))}
                    </ol>

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
                        <h2>STEM + IA: la convergencia que los colegios necesitan</h2>
                        <p>
                            Las disciplinas <strong>STEM</strong> (ciencia, tecnología, ingeniería y matemáticas) evolucionan rápidamente hacia la
                            integración de <strong>inteligencia artificial</strong> como eje transversal. Organismos como la UNESCO y la OCDE ya
                            recomiendan incluir <strong>machine learning infantil</strong> y <strong>programación visual</strong> desde los 8 años.
                        </p>
                        <p>
                            En InnovaKids nuestros alumnos no solo "usan" IA: entienden cómo los modelos de <strong>machine learning</strong> reconocen
                            patrones, cómo los <strong>modelos generativos</strong> crean contenido y cuáles son los <strong>sesgos algorítmicos</strong>
                            que deben identificar. Esta comprensión profunda los convierte en ciudadanos digitales preparados, no en simples usuarios pasivos.
                        </p>

                        <h2>Seguridad digital infantil y control parental</h2>
                        <p>
                            El <strong>desarrollo cognitivo temprano</strong> en entornos digitales debe ir acompañado de un enfoque robusto en
                            <strong> seguridad digital infantil</strong>. En ERICA integramos módulos completos de:
                        </p>
                        <ul>
                            <li><strong>Privacidad de datos:</strong> qué nunca compartir en internet y por qué.</li>
                            <li><strong>Pensamiento crítico digital:</strong> identificación de deepfakes, desinformación y contenido generado por IA.</li>
                            <li><strong>Control parental activo:</strong> herramientas y guías para supervisar la experiencia educativa digital.</li>
                            <li><strong>Ética en IA:</strong> reflexión sobre sesgos, justicia y responsabilidad al usar herramientas de IA.</li>
                        </ul>

                        <h2>Resultados: del pensamiento algorítmico a la creación real</h2>
                        <p>
                            Después de 5 semanas de inmersión en nuestra metodología, el alumno no solo "sabe usar ChatGPT". Ha desarrollado capacidades
                            transferibles de <strong>pensamiento algorítmico</strong>, <strong>resolución creativa de problemas</strong> y
                            <strong> colaboración digital</strong>. Las evidencias de aprendizaje incluyen:
                        </p>
                        <ul>
                            <li>Un <strong>proyecto real funcionando</strong> (app, videojuego, libro ilustrado o startup).</li>
                            <li>Una <strong>presentación pública</strong> donde practican oratoria y storytelling.</li>
                            <li>Un <strong>portafolio digital</strong> con la evolución de sus iteraciones.</li>
                            <li><strong>Certificación InnovaKids</strong> que valida sus competencias en IA y pensamiento computacional.</li>
                        </ul>
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
                                    ¿Quieres que tu hijo desarrolle estas habilidades?
                                </h3>
                                <p className="text-[15px] text-[#1A1714]/70 leading-relaxed max-w-[52ch]">
                                    Agenda una clase gratis y conoce la Metodología ERICA en acción. Grupos de máximo 5 alumnos,
                                    clases en vivo y 100% online.
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
                                    href="/colegios"
                                    className="inline-flex items-center justify-center gap-2 border border-[#1A1714] text-[#1A1714] hover:bg-[#1A1714] hover:text-[#FAF7EF] px-8 py-4 font-semibold text-base tracking-wide transition-colors"
                                >
                                    InnovaKids para colegios
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
                                    Inteligencia artificial para niños: guía completa 2026
                                </h3>
                                <p className="mt-3 text-[14px] text-[#1A1714]/60 leading-relaxed">
                                    Herramientas, actividades en casa y cómo elegir el curso correcto.
                                </p>
                            </Link>
                            <Link
                                href="/blog"
                                className="group border-b border-[#1A1714]/12 py-8 md:pl-8 hover:bg-[#F2EDE0]/40 transition-colors"
                            >
                                <p className="text-[11px] tracking-[0.22em] uppercase text-[#1A1714]/55 mb-3">Archivo</p>
                                <h3
                                    className="text-2xl leading-tight text-[#1A1714] group-hover:text-[#C96342] transition-colors"
                                    style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                                >
                                    Todas las guías de InnovaKids
                                </h3>
                                <p className="mt-3 text-[14px] text-[#1A1714]/60 leading-relaxed">
                                    Artículos sobre IA, pedagogía y tecnología para familias.
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
