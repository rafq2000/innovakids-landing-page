import { generateHreflangs } from "@/lib/seo-config"
import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import Link from "next/link"

export const metadata: Metadata = {
    robots: { index: false, follow: true },
    title: "Cursos de IA para Niños en México (Guía 2026)",
    description:
        "Guía Completa: Lo que todo padre mexicano debe saber antes de inscribir a su hijo en un curso de IA. Precios en pesos, herramientas, seguridad y mejores opciones.",
    keywords: [
        "guia cursos ia niños mexico",
        "mejores cursos programacion niños mexico",
        "comparativa escuelas ia mexico",
        "consejos padres tecnologia mexico",
    ],
    openGraph: {
        title: "Cursos de IA para Niños en México (Guía 2026)",
        description: "Todo lo que necesitas saber para elegir la mejor educación tecnológica para tu hijo en México.",
        url: "https://www.innovakidslatam.com/mx/blog/cursos-inteligencia-artificial-ninos-mexico-guia",
        locale: "es_MX",
        type: "article",
        siteName: "Blog InnovaKids México",
    },
    alternates: {
        canonical: "https://www.innovakidslatam.com/mx/blog/cursos-inteligencia-artificial-ninos-mexico-guia",
        languages: generateHreflangs("home"),
    },
}

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Cursos de Inteligencia Artificial para Niños México: Guía Completa 2026",
    description:
        "Guía completa con comparativas, precios, herramientas y todo lo que necesitas saber sobre cursos de IA para niños en México.",
    author: { "@type": "Organization", name: "InnovaKids" },
    publisher: {
        "@type": "Organization",
        name: "InnovaKids",
        url: "https://www.innovakidslatam.com",
    },
    datePublished: "2026-01-01",
    dateModified: "2026-01-08",
}

const tocItems = [
    { id: "que-es", label: "¿Qué es el Vibe Coding?" },
    { id: "por-que", label: "Por qué aprender IA en 2026" },
    { id: "herramientas", label: "Mejores herramientas de IA" },
    { id: "edad", label: "¿A qué edad pueden empezar?" },
    { id: "comparativa", label: "Comparativa de programas en México" },
    { id: "primer-proyecto", label: "Qué crearán en el primer mes" },
    { id: "inversion", label: "Inversión y retorno educativo" },
    { id: "faq", label: "Preguntas frecuentes" },
]

const tools = [
    {
        name: "ChatGPT para niños",
        desc: "La herramienta más popular del mundo. Los niños aprenden a hacer preguntas efectivas, crear historias, resolver problemas matemáticos y hasta programar con ayuda de la IA.",
    },
    {
        name: "Midjourney y DALL-E",
        desc: "Generación de imágenes con IA. Los niños pueden crear ilustraciones profesionales, diseñar personajes para sus historias o generar arte para proyectos escolares.",
    },
    {
        name: "Suno AI para música",
        desc: "Composición musical con inteligencia artificial. Pueden crear canciones originales con letra, melodía y hasta voces generadas por IA.",
    },
    {
        name: "Cursor y Replit",
        desc: "Programación asistida por IA. Los niños pueden crear aplicaciones funcionales sin necesidad de conocimientos previos de código.",
    },
]

const comparisonRows = [
    { program: "InnovaKids", highlight: true, price: "US$297", classes: "10 en vivo", group: "5 niños", guarantee: "10 días" },
    { program: "Codingal", highlight: false, price: "US$300+", classes: "Variado", group: "1:1", guarantee: "No" },
    { program: "Platzi Kids", highlight: false, price: "US$297 /año", classes: "Grabadas", group: "N/A", guarantee: "14 días" },
    { program: "Código Kids MX", highlight: false, price: "US$150", classes: "8", group: "15 niños", guarantee: "No" },
]

const projectPlan = [
    { block: "Clase 1-2", label: "Vibe IA & Art", desc: "Chatbots y comics" },
    { block: "Clase 3-4", label: "Vibe Music & Voice", desc: "Canciones y voz" },
    { block: "Clase 5-6", label: "Vibe Cinema & Gen Art", desc: "Cine con IA" },
    { block: "Clase 7-8", label: "Vibe Coding & Study", desc: "Programación y estudio" },
    { block: "Clase 9-10", label: "Cyber Ethics & The Vibe Project", desc: "Ética digital y proyecto final" },
]

const includes = [
    "10 clases en vivo de 60 minutos cada una",
    "Grupos de máximo 5 niños (atención personalizada real)",
    "10 proyectos completos para su portfolio",
    "Acceso de por vida a grabaciones",
    "Certificado oficial internacional",
    "Garantía de 10 días (devolución completa)",
]

const faqs = [
    { q: "¿Mi hijo necesita saber programar?", a: "No. El curso está diseñado para principiantes absolutos. Solo necesita saber leer, escribir y tener curiosidad." },
    { q: "¿Las clases son en vivo o grabadas?", a: "Son 100% en vivo con un instructor. Además, todas quedan grabadas por si necesitas verlas después." },
    { q: "¿Qué equipo necesita?", a: "Una computadora o laptop con conexión a internet. No se necesita software especial." },
    { q: "¿Puedo pagar en pesos mexicanos?", a: "Sí, aceptamos OXXO, Mercado Pago, tarjeta y PayPal. El precio en MXN es aproximadamente $3,600." },
    { q: "¿Qué pasa si mi hijo falta a una clase?", a: "Todas las clases quedan grabadas y puede ver la grabación. También puede coordinar recuperación con el instructor." },
    { q: "¿Cómo funciona la garantía?", a: "Si después de las primeras clases no quedas satisfecho, te devolvemos el 100% sin preguntas. Tienes 10 días." },
]

export default function GuiaCompletaPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Navigation />
            <WhatsAppButton />

            <main className="min-h-screen bg-[#FAF7EF] text-[#1A1714]">
                <article className="pt-32 pb-20">
                    <div className="max-w-[1100px] mx-auto px-6 md:px-10">
                        {/* Breadcrumb */}
                        <nav aria-label="Breadcrumb" className="mb-10 text-[12px] tracking-[0.2em] uppercase text-[#1A1714]/55">
                            <Link href="/" className="hover:text-[#C96342] transition-colors">InnovaKids</Link>
                            <span className="mx-3" aria-hidden>/</span>
                            <Link href="/mx" className="hover:text-[#C96342] transition-colors">México</Link>
                            <span className="mx-3" aria-hidden>/</span>
                            <span className="text-[#1A1714]">Guía de cursos de IA</span>
                        </nav>

                        {/* Header */}
                        <header className="mb-16 pb-16 border-b border-[#1A1714]/12">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="h-px w-10 bg-[#C96342]" aria-hidden />
                                <span className="text-[11px] tracking-[0.28em] uppercase text-[#C96342] font-semibold">
                                    Guía editorial · 15 min de lectura
                                </span>
                            </div>
                            <h1
                                className="text-5xl md:text-7xl leading-[0.98] tracking-[-0.02em] text-[#1A1714] max-w-[22ch]"
                                style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                            >
                                Vibe Coding en <em className="italic text-[#C96342]">México</em>: guía completa para padres 2026.
                            </h1>
                            <p className="mt-8 text-xl text-[#1A1714]/70 leading-relaxed max-w-[60ch]">
                                Todo lo que necesitas saber antes de inscribir a tu hijo en un curso de IA. Comparativas,
                                precios, herramientas y consejos editoriales sin rodeos.
                            </p>
                            <p className="mt-6 text-[13px] text-[#1A1714]/60">Actualizado: marzo 2026</p>
                        </header>

                        <div className="grid lg:grid-cols-12 gap-12">
                            {/* Sticky TOC */}
                            <aside className="lg:col-span-3">
                                <div className="lg:sticky lg:top-32">
                                    <p className="text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold mb-4">Índice</p>
                                    <ol className="space-y-3 border-l border-[#1A1714]/15">
                                        {tocItems.map((item, i) => (
                                            <li key={item.id} className="pl-4">
                                                <a href={`#${item.id}`} className="text-[14px] text-[#1A1714]/75 hover:text-[#C96342] transition-colors leading-snug block">
                                                    <span className="text-[#C96342]/70 mr-2">0{i + 1}</span>
                                                    {item.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ol>
                                </div>
                            </aside>

                            {/* Article body */}
                            <div className="lg:col-span-9">
                                <div
                                    className="prose prose-lg max-w-none font-serif
                                        prose-headings:text-[#1A1714] prose-headings:font-normal
                                        prose-h2:text-3xl prose-h2:sm:text-4xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b prose-h2:border-[#1A1714]/15
                                        prose-p:font-sans prose-p:text-[#1A1714]/85 prose-p:text-lg prose-p:leading-[1.75]
                                        prose-strong:text-[#1A1714]
                                        prose-a:text-[#C96342] prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
                                        prose-li:font-sans prose-li:text-[#1A1714]/85 prose-li:marker:text-[#C96342]
                                        [&>p:first-of-type]:first-letter:text-6xl [&>p:first-of-type]:first-letter:font-serif [&>p:first-of-type]:first-letter:text-[#C96342] [&>p:first-of-type]:first-letter:float-left [&>p:first-of-type]:first-letter:mr-3 [&>p:first-of-type]:first-letter:leading-[0.9]"
                                >
                                    <section id="que-es">
                                        <h2>¿Qué es el Vibe Coding?</h2>
                                        <p>
                                            El <strong>Vibe Coding</strong> no es solo escribir líneas de código. Es programar usando
                                            el lenguaje natural y la inteligencia artificial. Antes, para crear un videojuego, un niño
                                            necesitaba memorizar sintaxis compleja. Hoy, un niño en México puede decirle a la IA:
                                            "crea un juego donde un gato salte obstáculos", y la IA genera el código base.
                                        </p>
                                        <p>
                                            No se trata solo de <strong>consumir</strong> tecnología, sino de darle a tu hijo el poder
                                            de <strong>crear</strong> cualquier cosa que imagine en cuestión de minutos.
                                        </p>
                                    </section>

                                    <section id="por-que">
                                        <h2>¿Por qué tu hijo debe aprender IA en 2026?</h2>
                                        <p>
                                            El Foro Económico Mundial estima que el <strong>85% de los trabajos de 2030</strong> aún no
                                            existen. La mayoría requerirán habilidades relacionadas con la inteligencia artificial.
                                        </p>
                                    </section>
                                </div>

                                {/* Razones ladder */}
                                <ol className="not-prose my-12 border-t border-[#1A1714]/12">
                                    {[
                                        { title: "Ventaja competitiva", desc: "Los niños que dominen IA tendrán más oportunidades laborales reales." },
                                        { title: "Pensamiento crítico", desc: "Aprenden a cuestionar fuentes y verificar la información antes de usarla." },
                                        { title: "Creatividad amplificada", desc: "La IA potencia su imaginación, no la reemplaza." },
                                        { title: "Resolución de problemas", desc: "Desarrollan habilidades para descomponer y resolver desafíos complejos." },
                                        { title: "Uso responsable", desc: "Entienden los límites éticos y la ciudadanía digital." },
                                    ].map((r, i) => (
                                        <li key={r.title} className="grid grid-cols-[auto_1fr] gap-8 py-6 border-b border-[#1A1714]/12 items-baseline">
                                            <span className="text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold">0{i + 1}</span>
                                            <div>
                                                <p className="text-xl md:text-2xl text-[#1A1714]" style={{ fontFamily: "'Charter', 'Georgia', serif" }}>{r.title}</p>
                                                <p className="mt-1 text-[15px] text-[#1A1714]/75 leading-relaxed">{r.desc}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ol>

                                {/* Herramientas */}
                                <section id="herramientas" className="mt-16">
                                    <h2 className="text-3xl md:text-4xl mt-4 mb-6 pb-3 border-b border-[#1A1714]/15 text-[#1A1714]" style={{ fontFamily: "'Charter', 'Georgia', serif" }}>
                                        Mejores herramientas de IA que aprenderán
                                    </h2>
                                    <div className="grid sm:grid-cols-2 gap-px bg-[#1A1714]/12 border border-[#1A1714]/12 mt-6">
                                        {tools.map((t) => (
                                            <div key={t.name} className="bg-[#FAF7EF] p-6">
                                                <h3 className="text-xl text-[#1A1714] mb-2" style={{ fontFamily: "'Charter', 'Georgia', serif" }}>{t.name}</h3>
                                                <p className="text-[15px] text-[#1A1714]/75 leading-relaxed">{t.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                {/* Edad */}
                                <section id="edad" className="mt-16">
                                    <h2 className="text-3xl md:text-4xl mt-4 mb-6 pb-3 border-b border-[#1A1714]/15 text-[#1A1714]" style={{ fontFamily: "'Charter', 'Georgia', serif" }}>
                                        ¿A qué edad pueden empezar?
                                    </h2>
                                    <p className="text-lg text-[#1A1714]/85 leading-[1.75] mt-4">
                                        La edad ideal es entre los <strong>8 y 14 años</strong>. En este rango ya tienen lectura y
                                        escritura fluida, pero conservan alta plasticidad cerebral y curiosidad natural.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-px bg-[#1A1714]/12 border border-[#1A1714]/12 mt-8">
                                        <div className="bg-[#FAF7EF] p-8">
                                            <p className="text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold mb-3">8-10 años</p>
                                            <p className="text-[15px] text-[#1A1714]/80 leading-relaxed">
                                                Creatividad, arte con IA, historias interactivas y juegos simples guiados.
                                            </p>
                                        </div>
                                        <div className="bg-[#FAF7EF] p-8">
                                            <p className="text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold mb-3">11-14 años</p>
                                            <p className="text-[15px] text-[#1A1714]/80 leading-relaxed">
                                                Proyectos complejos: apps funcionales, automatizaciones y mini-startups.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                {/* Comparativa */}
                                <section id="comparativa" className="mt-16">
                                    <h2 className="text-3xl md:text-4xl mt-4 mb-6 pb-3 border-b border-[#1A1714]/15 text-[#1A1714]" style={{ fontFamily: "'Charter', 'Georgia', serif" }}>
                                        Comparativa: mejores cursos en México
                                    </h2>
                                    <p className="text-lg text-[#1A1714]/85 leading-[1.75] mt-4 mb-8">
                                        Analizamos los principales programas disponibles para familias mexicanas en 2026.
                                    </p>
                                    <div className="overflow-x-auto border border-[#1A1714]/12">
                                        <table className="w-full border-collapse text-sm">
                                            <thead>
                                                <tr className="border-b border-[#1A1714]/15">
                                                    {["Programa", "Precio", "Clases", "Grupo", "Garantía"].map((h) => (
                                                        <th key={h} className="text-left py-4 px-5 text-[11px] uppercase tracking-[0.22em] text-[#C96342] font-semibold">{h}</th>
                                                    ))}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {comparisonRows.map((row) => (
                                                    <tr key={row.program} className={`border-b border-[#1A1714]/10 last:border-b-0 ${row.highlight ? "bg-[#F2EDE0]/60" : ""}`}>
                                                        <td className="py-5 px-5">
                                                            <span className={`${row.highlight ? "text-[#C96342] font-semibold" : "text-[#1A1714]"}`} style={{ fontFamily: row.highlight ? "'Charter', 'Georgia', serif" : undefined }}>
                                                                {row.program}
                                                            </span>
                                                        </td>
                                                        <td className="py-5 px-5 text-[#1A1714]/80">{row.price}</td>
                                                        <td className="py-5 px-5 text-[#1A1714]/80">{row.classes}</td>
                                                        <td className="py-5 px-5 text-[#1A1714]/80">{row.group}</td>
                                                        <td className="py-5 px-5 text-[#1A1714]/80">{row.guarantee}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="mt-8 border-l-2 border-[#C96342] pl-6 py-2">
                                        <p className="text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold mb-3">Por qué destaca</p>
                                        <p className="text-[15px] text-[#1A1714]/85 leading-relaxed">
                                            Grupos de 5 niños (no 15-30), 10 proyectos reales para mostrar, garantía de 10 días con
                                            devolución completa, y soporte WhatsApp 24/7 en español.
                                        </p>
                                    </div>
                                </section>

                                {/* Primer proyecto */}
                                <section id="primer-proyecto" className="mt-16">
                                    <h2 className="text-3xl md:text-4xl mt-4 mb-6 pb-3 border-b border-[#1A1714]/15 text-[#1A1714]" style={{ fontFamily: "'Charter', 'Georgia', serif" }}>
                                        Qué crearán en el primer mes
                                    </h2>
                                    <p className="text-lg text-[#1A1714]/85 leading-[1.75] mt-4 mb-4">
                                        En InnovaKids los niños no esperan semanas para crear algo real. Desde la primera clase ya
                                        están construyendo proyectos tangibles.
                                    </p>
                                    <ol className="not-prose my-10 border-t border-[#1A1714]/12">
                                        {projectPlan.map((p, i) => (
                                            <li key={p.block} className="grid grid-cols-[auto_1fr] gap-6 md:gap-12 py-7 border-b border-[#1A1714]/12">
                                                <div>
                                                    <p className="text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold">{p.block}</p>
                                                    <p className="text-[11px] uppercase tracking-[0.2em] text-[#1A1714]/40 mt-1">Paso 0{i + 1}</p>
                                                </div>
                                                <div>
                                                    <p className="text-2xl md:text-3xl leading-tight text-[#1A1714]" style={{ fontFamily: "'Charter', 'Georgia', serif" }}>{p.label}</p>
                                                    <p className="mt-1 text-[15px] text-[#1A1714]/70">{p.desc}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ol>
                                </section>

                                {/* Inversion */}
                                <section id="inversion" className="mt-16">
                                    <h2 className="text-3xl md:text-4xl mt-4 mb-6 pb-3 border-b border-[#1A1714]/15 text-[#1A1714]" style={{ fontFamily: "'Charter', 'Georgia', serif" }}>
                                        Inversión y retorno educativo
                                    </h2>
                                    <p className="text-lg text-[#1A1714]/85 leading-[1.75] mt-4">
                                        Un curso de IA para niños en México va entre <strong>US$150 y US$500</strong>. La diferencia
                                        está en la calidad, el tamaño del grupo y el soporte.
                                    </p>
                                    <div className="mt-8 border border-[#1A1714]/12 p-8 bg-[#F2EDE0]/40">
                                        <p className="text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold mb-4">Qué obtiene tu hijo por US$297</p>
                                        <ul className="divide-y divide-[#1A1714]/12 border-y border-[#1A1714]/12">
                                            {includes.map((item, i) => (
                                                <li key={item} className="grid grid-cols-[auto_1fr] gap-6 py-4 items-baseline">
                                                    <span className="text-[11px] uppercase tracking-[0.24em] text-[#C96342] font-semibold">0{i + 1}</span>
                                                    <span className="text-[15px] text-[#1A1714]/85 leading-relaxed">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </section>

                                {/* FAQ */}
                                <section id="faq" className="mt-16">
                                    <h2 className="text-3xl md:text-4xl mt-4 mb-6 pb-3 border-b border-[#1A1714]/15 text-[#1A1714]" style={{ fontFamily: "'Charter', 'Georgia', serif" }}>
                                        Preguntas frecuentes
                                    </h2>
                                    <dl className="mt-8 border-t border-[#1A1714]/12">
                                        {faqs.map((f) => (
                                            <div key={f.q} className="py-7 border-b border-[#1A1714]/12 grid md:grid-cols-12 gap-4 md:gap-8">
                                                <dt className="md:col-span-5 text-[17px] text-[#1A1714]" style={{ fontFamily: "'Charter', 'Georgia', serif" }}>
                                                    {f.q}
                                                </dt>
                                                <dd className="md:col-span-7 text-[15px] text-[#1A1714]/75 leading-relaxed">{f.a}</dd>
                                            </div>
                                        ))}
                                    </dl>
                                </section>

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
                                                ¿Listo para dar el primer paso?
                                            </h3>
                                            <p className="text-[15px] text-[#1A1714]/70 leading-relaxed max-w-[52ch]">
                                                Agenda una evaluación gratuita de 30 minutos. Sin compromiso, cupos limitados.
                                            </p>
                                        </div>
                                        <div className="md:col-span-5 flex flex-col gap-3 md:justify-self-end w-full md:w-auto">
                                            <Link
                                                href="/#sesion-estrategica"
                                                className="inline-flex items-center justify-center gap-2 bg-[#C96342] hover:bg-[#A8502F] text-[#FAF7EF] px-8 py-4 font-semibold text-base tracking-wide transition-colors"
                                            >
                                                Agendar evaluación gratis
                                                <span aria-hidden>→</span>
                                            </Link>
                                            <Link
                                                href="/mx"
                                                className="inline-flex items-center justify-center gap-2 border border-[#1A1714]/20 hover:border-[#C96342] text-[#1A1714] px-8 py-4 font-semibold text-base tracking-wide transition-colors"
                                            >
                                                Ver InnovaKids México
                                            </Link>
                                        </div>
                                    </div>
                                </aside>

                                {/* Related links */}
                                <section className="mt-20">
                                    <p className="text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold mb-6">Seguir leyendo</p>
                                    <div className="grid md:grid-cols-3 gap-px bg-[#1A1714]/12 border border-[#1A1714]/12">
                                        {[
                                            { href: "/mx", title: "InnovaKids México", desc: "Página país completa" },
                                            { href: "/mx/cursos-ia-ninos-mexico", title: "Cursos IA niños México", desc: "Programa por ciudad" },
                                            { href: "/mx/clases-ia-ninos-cdmx", title: "Clases IA en CDMX", desc: "Clases en vivo para la capital" },
                                        ].map((l) => (
                                            <Link key={l.href} href={l.href} className="bg-[#FAF7EF] p-6 hover:bg-[#F2EDE0]/50 transition-colors group">
                                                <p className="text-[11px] uppercase tracking-[0.24em] text-[#C96342]/70 group-hover:text-[#C96342] font-semibold mb-2">Relacionado</p>
                                                <p className="text-xl text-[#1A1714] mb-1" style={{ fontFamily: "'Charter', 'Georgia', serif" }}>{l.title}</p>
                                                <p className="text-[14px] text-[#1A1714]/70">{l.desc}</p>
                                            </Link>
                                        ))}
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </article>
            </main>

            <Footer />
        </>
    )
}
