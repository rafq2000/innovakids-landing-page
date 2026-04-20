import { generateHreflangs } from "@/lib/seo-config";
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Curso de Creador de Contenido con IA para Niños 8-17 | InnovaKids",
    description:
        "Tu hijo crea contenido para YouTube y TikTok con IA. Edición de video y storytelling. Para niños y adolescentes 8-17 años. Clase gratis.",
    keywords: [
        "curso creador contenido niños",
        "curso youtube niños ia",
        "cine con inteligencia artificial niños",
        "curso tiktok adolescentes",
        "edicion video ia niños",
        "curso creacion contenido digital",
        "curso contenido digital niños",
        "curso cine ia para adolescentes",
    ],
    alternates: {
        canonical: "https://www.innovakidslatam.com/curso-creador-contenido-ia",
        languages: generateHreflangs("global", "/curso-creador-contenido-ia"),
    },
    openGraph: {
        title: "Curso de Creador de Contenido con IA para Niños y Adolescentes | InnovaKids",
        description:
            "Tu hijo pasa de CONSUMIR a CREAR contenido pro con IA: YouTube, cine, redes sociales. Clases en vivo, grupos de 5. Reserva tu clase gratis.",
        url: "https://www.innovakidslatam.com/curso-creador-contenido-ia",
        siteName: "InnovaKids",
        type: "website",
        locale: "es_419",
        images: [{
            url: "https://www.innovakidslatam.com/hero-child-learning-ai.jpg",
            width: 1200,
            height: 630,
            alt: "Curso de Creador de Contenido con IA para Niños 8-17 años",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Curso de Contenido con IA para Niños 8-17 | InnovaKids",
        description:
            "Tu hijo crea contenido pro para YouTube y TikTok con IA en 5 semanas. Grupos de 5. Clase gratis de prueba.",
        images: ["https://www.innovakidslatam.com/hero-child-learning-ai.jpg"],
    },
    robots: { index: true, follow: true },
}

const faqs = [
    { q: "¿Qué herramientas de IA usarán para crear contenido?", a: "Usamos herramientas de IA para edición de video, generación de efectos visuales, creación de guiones, diseño de thumbnails y producción musical. Todo adaptado a la edad y nivel del estudiante." },
    { q: "¿Mi hijo necesita una cámara profesional?", a: "No. Con un celular o la cámara de su computador es suficiente para empezar. La IA nos ayuda a mejorar la calidad de producción sin equipo costoso." },
    { q: "¿Es seguro para niños crear contenido en redes sociales?", a: "Enseñamos creación de contenido responsable y seguridad digital. Los proyectos se comparten en un entorno controlado y enseñamos a los padres cómo supervisar las publicaciones." },
    { q: "¿Qué tipo de contenido aprenderán a crear?", a: "Cortometrajes, vlogs educativos, animaciones, podcasts y contenido para redes sociales. Todo con IA como asistente creativo para producir contenido de calidad profesional." },
    { q: "¿Tiene salida profesional este conocimiento?", a: "Absolutamente. La creación de contenido digital es una de las carreras con mayor crecimiento mundial. Aprender a usar IA para producción multimedia da una ventaja competitiva enorme." },
]

const pillars = [
    { kicker: "Guión", title: "Storytelling con IA", desc: "Desde la idea al guion estructurado, con asistencia de modelos de lenguaje." },
    { kicker: "Video", title: "Edición y FX", desc: "Edición no lineal, transiciones, color y efectos visuales asistidos por IA." },
    { kicker: "Audio", title: "Música y voz", desc: "Composición, locuciones y limpieza de audio con herramientas generativas." },
    { kicker: "Publicación", title: "YouTube y redes", desc: "Thumbnails, títulos, analítica básica y publicación responsable." },
]

const countries = [
    { code: "cl", name: "Chile" }, { code: "mx", name: "México" }, { code: "co", name: "Colombia" },
    { code: "ar", name: "Argentina" }, { code: "pe", name: "Perú" }, { code: "es", name: "España" },
    { code: "ec", name: "Ecuador" }, { code: "bo", name: "Bolivia" }, { code: "cr", name: "Costa Rica" },
    { code: "do", name: "Rep. Dominicana" }, { code: "us", name: "EE.UU." }, { code: "ve", name: "Venezuela" },
]

export default function CreatorPage() {
    const courseSchema = {
        "@context": "https://schema.org",
        "@type": "Course",
        name: "Curso de Creador de Contenido y Cine con IA para Niños y Adolescentes",
        description: "Producción de contenido digital, YouTube, cine y edición profesional usando Inteligencia Artificial. Para niños y adolescentes de 8 a 17 años.",
        provider: { "@type": "Organization", name: "InnovaKids", url: "https://www.innovakidslatam.com" },
        educationalLevel: "Beginner",
        audience: { "@type": "EducationalAudience", educationalRole: "student", audienceType: "Children and Adolescents aged 8-17" },
        courseMode: "online",
        inLanguage: "es",
        url: "https://www.innovakidslatam.com/curso-creador-contenido-ia",
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
                <section className="pt-32 pb-20 border-b border-[#1A1714]/12">
                    <div className="max-w-[1100px] mx-auto px-6 md:px-10">
                        <nav aria-label="Breadcrumb" className="text-[11px] tracking-[0.2em] uppercase text-[#1A1714]/55 font-semibold mb-10">
                            <Link href="/" className="hover:text-[#C96342]">Inicio</Link>
                            <span className="mx-2 text-[#1A1714]/30">/</span>
                            <Link href="/cursos/inteligencia-artificial" className="hover:text-[#C96342]">Cursos</Link>
                            <span className="mx-2 text-[#1A1714]/30">/</span>
                            <span className="text-[#1A1714]/75 normal-case tracking-normal">Creador de contenido con IA</span>
                        </nav>

                        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-end">
                            <div className="md:col-span-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="h-px w-10 bg-[#C96342]" aria-hidden />
                                    <span className="text-[11px] tracking-[0.28em] uppercase text-[#C96342] font-semibold">
                                        Nivel 03 · Especialización para 8 a 17 años
                                    </span>
                                </div>
                                <h1
                                    className="text-5xl sm:text-6xl md:text-7xl leading-[0.95] tracking-[-0.02em]"
                                    style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                                >
                                    Creador de <em className="italic text-[#C96342]">contenido</em> con IA.
                                </h1>
                                <p className="mt-8 text-lg md:text-xl text-[#1A1714]/70 leading-relaxed max-w-2xl font-light">
                                    De consumidor pasivo a productor con voz. Tu hijo aprende a escribir, grabar,
                                    editar y publicar contenido real con inteligencia artificial como asistente.
                                </p>
                            </div>
                            <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-3">
                                <Link
                                    href="#comenzar"
                                    className="inline-flex items-center justify-center gap-2 bg-[#C96342] hover:bg-[#A8502F] text-[#FAF7EF] px-7 py-4 font-semibold text-base tracking-wide transition-colors"
                                >
                                    Empezar ahora <span aria-hidden>→</span>
                                </Link>
                                <Link
                                    href="/clase-gratis"
                                    className="inline-flex items-center justify-center gap-2 border border-[#1A1714] text-[#1A1714] hover:bg-[#1A1714] hover:text-[#FAF7EF] px-7 py-4 font-semibold text-base tracking-wide transition-colors"
                                >
                                    Clase gratis
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-24 md:py-32 border-b border-[#1A1714]/12">
                    <div className="max-w-[1100px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12 md:gap-16 items-start">
                        <div className="md:col-span-6">
                            <p className="text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold mb-6">
                                El punto de partida
                            </p>
                            <h2
                                className="text-4xl md:text-5xl leading-[1.02] tracking-[-0.02em] mb-8"
                                style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                            >
                                La generación que crece mirando pantallas aprende aquí a hacerse escuchar.
                            </h2>
                            <p className="text-lg text-[#1A1714]/70 leading-relaxed mb-8">
                                Ya no se trata de prohibir YouTube ni TikTok. Se trata de que tu hijo aprenda el
                                oficio detrás: cómo se construye una idea, se graba, se edita y se comparte con
                                responsabilidad y criterio.
                            </p>
                            <ul className="space-y-5 border-t border-[#1A1714]/12 pt-8">
                                {[
                                    "Desarrolla comunicación y síntesis",
                                    "Aprende narrativa audiovisual real",
                                    "Entiende algoritmos y audiencia",
                                    "Construye un portafolio digital propio",
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-4 pb-5 border-b border-[#1A1714]/12 last:border-b-0">
                                        <span className="text-[#C96342] font-serif text-lg leading-none mt-1" aria-hidden>→</span>
                                        <span className="text-[#1A1714]/85 leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="md:col-span-6 bg-[#F2EDE0] p-10 md:p-12 border-l-2 border-[#C96342]">
                            <p className="text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold mb-6">
                                La especialización creativa
                            </p>
                            <h3
                                className="text-3xl leading-tight mb-5"
                                style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                            >
                                Cuatro pilares, un oficio real.
                            </h3>
                            <p className="text-[#1A1714]/70 leading-relaxed mb-10">
                                Los niños no aprenden "a usar una app" — aprenden el flujo profesional de producción.
                            </p>
                            <ol className="divide-y divide-[#1A1714]/15 border-y border-[#1A1714]/15">
                                {pillars.map((p, i) => (
                                    <li key={p.title} className="flex gap-5 py-5">
                                        <span className="font-serif text-2xl text-[#C96342] leading-none shrink-0 w-10">
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                        <div>
                                            <p className="text-[10px] uppercase tracking-[0.22em] text-[#C96342]/80 font-semibold mb-1.5">
                                                {p.kicker}
                                            </p>
                                            <h4 className="font-serif text-lg text-[#1A1714] leading-tight mb-1">{p.title}</h4>
                                            <p className="text-sm text-[#1A1714]/70 leading-relaxed">{p.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </section>

                <section id="comenzar" className="py-24 md:py-32 bg-[#F5F1E8] border-b border-[#1A1714]/12">
                    <div className="max-w-[1100px] mx-auto px-6 md:px-10">
                        <div className="max-w-3xl mb-16">
                            <p className="text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold mb-5">
                                El camino
                            </p>
                            <h2
                                className="text-4xl md:text-5xl leading-tight tracking-[-0.02em]"
                                style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                            >
                                Cómo empieza a crear contenido pro.
                            </h2>
                            <p className="mt-6 text-lg text-[#1A1714]/70 leading-relaxed">
                                El Nivel 01 es la puerta de entrada obligatoria. Después desbloquea la especialización
                                en contenido y cine.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <article className="bg-[#FAF7EF] border border-[#1A1714]/12 p-10">
                                <p className="text-[10px] uppercase tracking-[0.28em] text-[#C96342] font-semibold mb-4">
                                    Paso 01 · Obligatorio
                                </p>
                                <h3
                                    className="text-3xl leading-tight mb-4"
                                    style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                                >
                                    Vibe Explorer (Nivel 01)
                                </h3>
                                <p className="text-[#1A1714]/70 mb-6 leading-relaxed">
                                    Base de prompt engineering, generación multimedia y criterio creativo.
                                </p>
                                <ul className="space-y-3 text-[#1A1714]/85 mb-8 text-sm">
                                    <li className="flex gap-3"><span className="text-[#C96342]">→</span> Generación de imagen y video con IA</li>
                                    <li className="flex gap-3"><span className="text-[#C96342]">→</span> Prompt engineering creativo</li>
                                    <li className="flex gap-3"><span className="text-[#C96342]">→</span> Seguridad digital y autoría responsable</li>
                                </ul>
                                <Link
                                    href="/cursos/inteligencia-artificial"
                                    className="inline-flex items-center justify-center gap-2 bg-[#C96342] hover:bg-[#A8502F] text-[#FAF7EF] px-7 py-3.5 font-semibold text-sm tracking-wide transition-colors w-full"
                                >
                                    Empezar por el Nivel 01 <span aria-hidden>→</span>
                                </Link>
                            </article>

                            <article className="bg-[#FAF7EF] border border-[#1A1714]/12 p-10 opacity-80">
                                <p className="text-[10px] uppercase tracking-[0.28em] text-[#1A1714]/55 font-semibold mb-4">
                                    Paso 02 · Próximamente
                                </p>
                                <h3
                                    className="text-3xl leading-tight mb-4"
                                    style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                                >
                                    Vibe Creators (Especialidad)
                                </h3>
                                <p className="text-[#1A1714]/70 mb-6 leading-relaxed">
                                    Taller avanzado de producción audiovisual con IA.
                                </p>
                                <ul className="space-y-3 text-[#1A1714]/60 mb-8 text-sm">
                                    <li className="flex gap-3"><span className="text-[#1A1714]/40">◦</span> Cortometraje final con IA</li>
                                    <li className="flex gap-3"><span className="text-[#1A1714]/40">◦</span> Estrategia de canal y audiencia</li>
                                    <li className="flex gap-3"><span className="text-[#1A1714]/40">◦</span> Producción musical generativa</li>
                                </ul>
                                <button
                                    disabled
                                    className="inline-flex items-center justify-center gap-2 bg-[#EDE6D3] text-[#1A1714]/50 px-7 py-3.5 font-semibold text-sm tracking-wide w-full cursor-not-allowed"
                                >
                                    Requiere completar Nivel 01
                                </button>
                            </article>
                        </div>
                    </div>
                </section>

                <section className="py-24 md:py-32 border-b border-[#1A1714]/12">
                    <div className="max-w-[900px] mx-auto px-6 md:px-10">
                        <p className="text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold mb-5">
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

                <section className="py-24 md:py-28 bg-[#F5F1E8]">
                    <div className="max-w-[1100px] mx-auto px-6 md:px-10">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="h-px w-10 bg-[#C96342]" aria-hidden />
                            <span className="text-[11px] tracking-[0.28em] uppercase text-[#C96342] font-semibold">
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
                                { href: "/cursos/inteligencia-artificial", kicker: "Nivel 01", title: "Curso base de IA", desc: "Vibe Explorer — la puerta de entrada." },
                                { href: "/curso-creacion-videojuegos-ninos", kicker: "Nivel 02", title: "Videojuegos con IA", desc: "Crear en vez de solo jugar." },
                                { href: "/curso-emprendimiento-ninos", kicker: "Nivel 04", title: "Emprendimiento", desc: "Startups y negocios con IA." },
                            ].map((c) => (
                                <li key={c.href}>
                                    <Link href={c.href} className="group block py-10 md:px-8 transition-colors hover:bg-[#EDE6D3]">
                                        <p className="text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold mb-5">
                                            {c.kicker}
                                        </p>
                                        <h3
                                            className="text-2xl leading-tight mb-3 group-hover:text-[#C96342] transition-colors"
                                            style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                                        >
                                            {c.title}
                                        </h3>
                                        <p className="text-sm text-[#1A1714]/70 leading-relaxed mb-6">
                                            {c.desc}
                                        </p>
                                        <span className="text-sm font-semibold text-[#C96342] underline underline-offset-4 decoration-[#C96342]/30 group-hover:decoration-[#C96342]">
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
                                        className="text-sm text-[#1A1714]/65 hover:text-[#C96342] underline underline-offset-4 decoration-[#1A1714]/15 hover:decoration-[#C96342] transition-colors"
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
