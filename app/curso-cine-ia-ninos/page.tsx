import { generateHreflangs } from "@/lib/seo-config";
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Vibe Director · Curso de Cine con IA para Niños 8-17 | InnovaKids",
    description:
        "Tu hijo dirige su primer cortometraje con IA: personajes, animación, voces, música y edición. 10 clases en vivo, grupos de 5. Prerrequisito: Vibe Explorer.",
    keywords: [
        "curso cine ia niños",
        "curso creación audiovisual ia niños",
        "crear películas con ia niños",
        "cortometraje con ia niños",
        "curso video ia para niños",
        "animación con ia niños",
        "kling ai niños",
        "curso capcut niños",
        "vibe director innovakids",
    ],
    alternates: {
        canonical: "https://www.innovakidslatam.com/curso-cine-ia-ninos",
        languages: generateHreflangs("global", "/curso-cine-ia-ninos"),
    },
    openGraph: {
        title: "Vibe Director · Tu Hijo Dirige su Primer Cortometraje con IA | InnovaKids",
        description:
            "De espectador a director: personajes consistentes, animación, voces, banda sonora y edición. Proyecto final: un cortometraje de 45-90 segundos hecho por él.",
        url: "https://www.innovakidslatam.com/curso-cine-ia-ninos",
        siteName: "InnovaKids",
        type: "website",
        locale: "es_419",
        images: [{
            url: "https://www.innovakidslatam.com/hero-child-learning-ai.jpg",
            width: 1200,
            height: 630,
            alt: "Vibe Director — Curso de Creación Audiovisual con IA para Niños 8-17 años",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Vibe Director · Cine con IA para Niños 8-17 | InnovaKids",
        description:
            "Tu hijo dirige su primer cortometraje con IA: imágenes, animación, voces, música y edición. Prerrequisito: Vibe Explorer.",
        images: ["https://www.innovakidslatam.com/hero-child-learning-ai.jpg"],
    },
    robots: { index: true, follow: true },
}

const clases = [
    { n: "01", titulo: "Instalación y setup de todas las herramientas", logro: "Genera su primera imagen con IA" },
    { n: "02", titulo: "Crear secuencias de imágenes consistentes", logro: "Su personaje en 6+ escenas diferentes" },
    { n: "03", titulo: "Dale vida a tus imágenes (imagen a video)", logro: "Anima la secuencia con Kling AI" },
    { n: "04", titulo: "Tu primer corto con IA", logro: "Video de 30-60 segundos completo" },
    { n: "05", titulo: "Voces, narración y efectos de sonido con IA", logro: "Diálogos de 2+ personajes" },
    { n: "06", titulo: "Música con IA: la banda sonora perfecta", logro: "Crea 3 tracks y elige el mejor" },
    { n: "07", titulo: "Personajes que hablan (lip-sync)", logro: "Escena de diálogo sincronizado" },
    { n: "08", titulo: "Animación y efectos visuales con IA", logro: "3 escenas cinematográficas" },
    { n: "09", titulo: "Edición completa en CapCut", logro: "Video completo combinando todo" },
    { n: "10", titulo: "Mi cortometraje (proyecto final)", logro: "Cortometraje de 45-90 seg terminado" },
]

const faqs = [
    {
        q: "¿Qué hace mi hijo en Vibe Director?",
        a: "Dirige su primer cortometraje de principio a fin: crea personajes consistentes con IA, los anima (imagen a video), les da voz y diálogos, compone la banda sonora, sincroniza labios (lip-sync), agrega efectos visuales y edita todo en CapCut. El proyecto final es un cortometraje de 45 a 90 segundos hecho completamente por él.",
    },
    {
        q: "¿Cuál es el prerrequisito para tomar este curso?",
        a: "Haber completado Vibe Explorer (el programa base de InnovaKids). Ahí tu hijo domina los fundamentos de IA generativa y prompt engineering que Vibe Director da por sabidos. Si aún no lo ha hecho, ese es el punto de partida.",
    },
    {
        q: "¿Qué herramientas de IA se usan?",
        a: "Herramientas reales de creación audiovisual: generación de imágenes con IA, Kling AI para animar (imagen a video), IA de voces y efectos de sonido, IA de música para la banda sonora, lip-sync y edición profesional en CapCut.",
    },
    {
        q: "¿Para qué edad es Vibe Director?",
        a: "Para niños y adolescentes de 8 a 17 años que ya completaron Vibe Explorer. Los grupos se separan por edad y son de máximo 5 alumnos, con clases en vivo.",
    },
    {
        q: "¿Cuánto dura el curso?",
        a: "Son 10 clases en vivo de 60 minutos, 2 veces por semana (5 semanas), igual que el programa base. Cada clase termina con un logro concreto: desde su primera imagen generada hasta el cortometraje final.",
    },
]

const countries = [
    { code: "cl", name: "Chile" }, { code: "mx", name: "México" }, { code: "co", name: "Colombia" },
    { code: "ar", name: "Argentina" }, { code: "pe", name: "Perú" }, { code: "es", name: "España" },
    { code: "ec", name: "Ecuador" }, { code: "bo", name: "Bolivia" }, { code: "cr", name: "Costa Rica" },
    { code: "do", name: "Rep. Dominicana" }, { code: "us", name: "EE.UU." }, { code: "ve", name: "Venezuela" },
]

export default function VibeDirectorPage() {
    const courseSchema = {
        "@context": "https://schema.org",
        "@type": "Course",
        name: "Vibe Director — Curso de Creación Audiovisual con IA para Niños y Adolescentes",
        description: "Curso de cine con IA: tu hijo crea personajes consistentes, los anima, agrega voces, música y edición, y dirige su primer cortometraje de 45-90 segundos. 10 clases en vivo para niños y adolescentes de 8 a 17 años.",
        provider: { "@type": "Organization", name: "InnovaKids", url: "https://www.innovakidslatam.com" },
        coursePrerequisites: "Vibe Explorer (programa base de IA de InnovaKids)",
        educationalLevel: "Intermediate",
        audience: { "@type": "EducationalAudience", educationalRole: "student", audienceType: "Children and Adolescents aged 8-17" },
        courseMode: "online",
        inLanguage: "es",
        url: "https://www.innovakidslatam.com/curso-cine-ia-ninos",
        syllabusSections: clases.map((c) => ({
            "@type": "Syllabus",
            name: `Clase ${c.n}: ${c.titulo}`,
            description: c.logro,
        })),
    }

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
    }

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Navigation />
            <main className="min-h-screen bg-[#FAF7EF] text-[#1A1714]">
                {/* Editorial hero */}
                <section className="pt-32 pb-20 border-b border-[#1A1714]/12">
                    <div className="max-w-[1100px] mx-auto px-6 md:px-10">
                        <nav aria-label="Breadcrumb" className="text-[11px] tracking-[0.2em] uppercase text-[#1A1714]/55 font-semibold mb-10">
                            <Link href="/" className="hover:text-[#B5522F]">Inicio</Link>
                            <span className="mx-2 text-[#1A1714]/30">/</span>
                            <Link href="/cursos/inteligencia-artificial" className="hover:text-[#B5522F]">Cursos</Link>
                            <span className="mx-2 text-[#1A1714]/30">/</span>
                            <span className="text-[#1A1714]/75 normal-case tracking-normal">Vibe Director</span>
                        </nav>

                        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-end">
                            <div className="md:col-span-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="h-px w-10 bg-[#C96342]" aria-hidden />
                                    <span className="text-[11px] tracking-[0.28em] uppercase text-[#B5522F] font-semibold">
                                        Especialización audiovisual · Prerrequisito: Vibe Explorer
                                    </span>
                                </div>
                                <h1
                                    className="text-5xl sm:text-6xl md:text-7xl leading-[0.95] tracking-[-0.02em]"
                                    style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                                >
                                    Vibe <em className="italic text-[#B5522F]">Director</em>: cine hecho por tu hijo.
                                </h1>
                                <p className="mt-8 text-lg md:text-xl text-[#1A1714]/70 leading-relaxed max-w-2xl font-light">
                                    Tu hijo no solo mira películas: las dirige. Personajes propios, animación,
                                    voces, banda sonora y edición — hasta estrenar su primer cortometraje.
                                </p>
                            </div>
                            <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-3">
                                <Link
                                    href="#temario"
                                    className="inline-flex items-center justify-center gap-2 bg-[#C96342] hover:bg-[#9A4428] text-[#FAF7EF] px-7 py-4 font-semibold text-base tracking-wide transition-colors"
                                >
                                    Ver las 10 clases <span aria-hidden>→</span>
                                </Link>
                                <Link
                                    href="/cursos/inteligencia-artificial"
                                    className="inline-flex items-center justify-center gap-2 border border-[#1A1714] text-[#1A1714] hover:bg-[#1A1714] hover:text-[#FAF7EF] px-7 py-4 font-semibold text-base tracking-wide transition-colors"
                                >
                                    Empezar por Vibe Explorer
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Temario: las 10 clases */}
                <section id="temario" className="py-24 md:py-32 border-b border-[#1A1714]/12">
                    <div className="max-w-[1100px] mx-auto px-6 md:px-10">
                        <div className="max-w-3xl mb-16">
                            <p className="text-[11px] uppercase tracking-[0.28em] text-[#B5522F] font-semibold mb-5">
                                El temario
                            </p>
                            <h2
                                className="text-4xl md:text-5xl leading-tight tracking-[-0.02em]"
                                style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                            >
                                10 clases. Cada una termina con algo hecho.
                            </h2>
                            <p className="mt-6 text-lg text-[#1A1714]/70 leading-relaxed">
                                Sin teoría vacía: en la primera clase ya genera su primera imagen, y en la
                                última estrena un cortometraje de 45 a 90 segundos dirigido por él.
                            </p>
                        </div>

                        <ol className="divide-y divide-[#1A1714]/12 border-y border-[#1A1714]/12">
                            {clases.map((c) => (
                                <li key={c.n} className="grid md:grid-cols-12 gap-3 md:gap-8 py-6 items-baseline">
                                    <span className="md:col-span-1 font-serif text-2xl text-[#B5522F] leading-none">
                                        {c.n}
                                    </span>
                                    <h3
                                        className="md:col-span-6 text-xl leading-snug"
                                        style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                                    >
                                        {c.titulo}
                                    </h3>
                                    <p className="md:col-span-5 text-sm text-[#1A1714]/70 leading-relaxed">
                                        <span className="text-[10px] uppercase tracking-[0.22em] text-[#B5522F]/80 font-semibold mr-2">Logro</span>
                                        {c.logro}
                                    </p>
                                </li>
                            ))}
                        </ol>
                    </div>
                </section>

                {/* Camino: prerequisito */}
                <section className="py-24 md:py-32 bg-[#F5F1E8] border-b border-[#1A1714]/12">
                    <div className="max-w-[1100px] mx-auto px-6 md:px-10">
                        <div className="max-w-3xl mb-16">
                            <p className="text-[11px] uppercase tracking-[0.28em] text-[#B5522F] font-semibold mb-5">
                                El camino
                            </p>
                            <h2
                                className="text-4xl md:text-5xl leading-tight tracking-[-0.02em]"
                                style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                            >
                                Primero explorador. Después director.
                            </h2>
                            <p className="mt-6 text-lg text-[#1A1714]/70 leading-relaxed">
                                Vibe Director da por sabidos los fundamentos de IA generativa y prompt engineering.
                                Por eso el prerrequisito es haber completado Vibe Explorer, el programa base.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <article className="bg-[#FAF7EF] border border-[#1A1714]/12 p-10">
                                <p className="text-[10px] uppercase tracking-[0.28em] text-[#B5522F] font-semibold mb-4">
                                    Paso 01 · Prerrequisito
                                </p>
                                <h3
                                    className="text-3xl leading-tight mb-4"
                                    style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                                >
                                    Vibe Explorer (programa base)
                                </h3>
                                <p className="text-[#1A1714]/70 mb-6 leading-relaxed">
                                    Los fundamentos que todo director necesita antes de rodar.
                                </p>
                                <ul className="space-y-3 text-[#1A1714]/85 mb-8 text-sm">
                                    <li className="flex gap-3"><span className="text-[#B5522F]">→</span> IA generativa y prompt engineering</li>
                                    <li className="flex gap-3"><span className="text-[#B5522F]">→</span> Arte, música y Vibe Coding</li>
                                    <li className="flex gap-3"><span className="text-[#B5522F]">→</span> Proyecto final presentado en vivo</li>
                                </ul>
                                <Link
                                    href="/cursos/inteligencia-artificial"
                                    className="inline-flex items-center justify-center gap-2 bg-[#C96342] hover:bg-[#9A4428] text-[#FAF7EF] px-7 py-3.5 font-semibold text-sm tracking-wide transition-colors w-full"
                                >
                                    Empezar por Vibe Explorer <span aria-hidden>→</span>
                                </Link>
                            </article>

                            <article className="bg-[#FAF7EF] border-2 border-[#C96342] p-10">
                                <p className="text-[10px] uppercase tracking-[0.28em] text-[#B5522F] font-semibold mb-4">
                                    Paso 02 · Especialización
                                </p>
                                <h3
                                    className="text-3xl leading-tight mb-4"
                                    style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                                >
                                    Vibe Director (este curso)
                                </h3>
                                <p className="text-[#1A1714]/70 mb-6 leading-relaxed">
                                    10 clases en vivo para pasar de generar imágenes a estrenar su cortometraje.
                                </p>
                                <ul className="space-y-3 text-[#1A1714]/85 mb-8 text-sm">
                                    <li className="flex gap-3"><span className="text-[#B5522F]">→</span> Personajes consistentes y animación con Kling AI</li>
                                    <li className="flex gap-3"><span className="text-[#B5522F]">→</span> Voces, lip-sync y banda sonora con IA</li>
                                    <li className="flex gap-3"><span className="text-[#B5522F]">→</span> Edición en CapCut y estreno del corto final</li>
                                </ul>
                                <a
                                    href="https://wa.me/56964754219?text=Hola%2C%20mi%20hijo%2Fa%20complet%C3%B3%20Vibe%20Explorer%20y%20me%20interesa%20Vibe%20Director"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 border border-[#1A1714] text-[#1A1714] hover:bg-[#1A1714] hover:text-[#FAF7EF] px-7 py-3.5 font-semibold text-sm tracking-wide transition-colors w-full"
                                >
                                    Ya completó Vibe Explorer → hablar por WhatsApp
                                </a>
                            </article>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-24 md:py-32 border-b border-[#1A1714]/12">
                    <div className="max-w-[900px] mx-auto px-6 md:px-10">
                        <p className="text-[11px] uppercase tracking-[0.28em] text-[#B5522F] font-semibold mb-5">
                            Preguntas frecuentes
                        </p>
                        <h2
                            className="text-4xl md:text-5xl leading-tight tracking-[-0.02em] mb-14"
                            style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                        >
                            Lo que los padres preguntan.
                        </h2>
                        <dl className="divide-y divide-[#1A1714]/12 border-y border-[#1A1714]/12">
                            {faqs.map((faq, i) => (
                                <div key={i} className="py-8">
                                    <dt
                                        className="text-xl md:text-2xl leading-snug text-[#1A1714] mb-3"
                                        style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                                    >
                                        {faq.q}
                                    </dt>
                                    <dd className="text-[#1A1714]/70 leading-relaxed">
                                        {faq.a}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </section>

                {/* Internal links */}
                <section className="py-24 md:py-28 bg-[#F5F1E8]">
                    <div className="max-w-[1100px] mx-auto px-6 md:px-10">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="h-px w-10 bg-[#C96342]" aria-hidden />
                            <span className="text-[11px] tracking-[0.28em] uppercase text-[#B5522F] font-semibold">
                                Otros caminos
                            </span>
                        </div>
                        <h2
                            className="text-3xl md:text-4xl leading-tight tracking-[-0.02em] mb-12 max-w-2xl"
                            style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                        >
                            Explora otras especializaciones.
                        </h2>
                        <ul className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#1A1714]/12 border-y border-[#1A1714]/12 mb-16">
                            {[
                                { href: "/cursos/inteligencia-artificial", kicker: "Programa base", title: "Vibe Explorer", desc: "La puerta de entrada: IA generativa desde cero." },
                                { href: "/curso-creacion-videojuegos-ninos", kicker: "Especialización", title: "Videojuegos con IA", desc: "De jugar a construir sus propios juegos." },
                                { href: "/curso-emprendimiento-ninos", kicker: "Especialización", title: "Emprendimiento", desc: "Startups y negocios con IA." },
                            ].map((c) => (
                                <li key={c.href}>
                                    <Link href={c.href} className="group block py-10 md:px-8 transition-colors hover:bg-[#EDE6D3]">
                                        <p className="text-[11px] uppercase tracking-[0.28em] text-[#B5522F] font-semibold mb-5">
                                            {c.kicker}
                                        </p>
                                        <h3
                                            className="text-2xl leading-tight mb-3 group-hover:text-[#B5522F] transition-colors"
                                            style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                                        >
                                            {c.title}
                                        </h3>
                                        <p className="text-sm text-[#1A1714]/70 leading-relaxed mb-6">
                                            {c.desc}
                                        </p>
                                        <span className="text-sm font-semibold text-[#B5522F] underline underline-offset-4 decoration-[#C96342]/30 group-hover:decoration-[#C96342]">
                                            Ver curso →
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className="pt-10 border-t border-[#1A1714]/12">
                            <p className="text-[11px] uppercase tracking-[0.22em] text-[#1A1714]/55 font-semibold mb-4">
                                Disponible en toda LATAM y España
                            </p>
                            <div className="flex flex-wrap gap-x-5 gap-y-2">
                                {countries.map((c) => (
                                    <Link
                                        key={c.code}
                                        href={`/${c.code}`}
                                        className="text-sm text-[#1A1714]/65 hover:text-[#B5522F] underline underline-offset-4 decoration-[#1A1714]/15 hover:decoration-[#C96342] transition-colors"
                                    >
                                        {c.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <WhatsAppButton />
        </>
    )
}
