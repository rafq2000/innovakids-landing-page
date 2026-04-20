import { generateHreflangs } from "@/lib/seo-config";
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Curso de Emprendimiento con IA para Niños 8-17 años | InnovaKids",
    description:
        "Tu hijo crea su primera startup con IA. Educación financiera y negocios digitales para niños y adolescentes 8-17 años. Grupos de 5. Clase gratis.",
    keywords: [
        "curso emprendimiento niños",
        "educacion financiera niños ia",
        "startups para adolescentes",
        "emprendimiento juvenil online",
        "negocios digitales para jovenes",
        "curso crear emprendedores",
        "negocios con ia para niños",
        "curso startups adolescentes",
    ],
    alternates: {
        canonical: "https://www.innovakidslatam.com/curso-emprendimiento-ninos",
        languages: generateHreflangs("global", "/curso-emprendimiento-ninos"),
    },
    openGraph: {
        title: "Curso de Emprendimiento con IA para Niños y Adolescentes | InnovaKids",
        description:
            "Tu hijo lanza su primera startup con IA. Educación financiera, negocios digitales y pitch deck. Clases en vivo, grupos de 5. Reserva tu clase gratis.",
        url: "https://www.innovakidslatam.com/curso-emprendimiento-ninos",
        siteName: "InnovaKids",
        type: "website",
        locale: "es_419",
        images: [{
            url: "https://www.innovakidslatam.com/hero-child-learning-ai.jpg",
            width: 1200,
            height: 630,
            alt: "Curso de Emprendimiento y Startups con IA para Niños 8-17 años",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Curso de Emprendimiento con IA para Niños 8-17 | InnovaKids",
        description:
            "Tu hijo lanza su primera startup con IA. Educación financiera y negocios digitales. Grupos de 5. Clase gratis.",
        images: ["https://www.innovakidslatam.com/hero-child-learning-ai.jpg"],
    },
    robots: { index: true, follow: true },
}

const faqs = [
    { q: "¿Qué aprenderá mi hijo sobre emprendimiento con IA?", a: "Aprenderá a identificar problemas reales, crear soluciones tecnológicas usando IA, validar ideas de negocio, crear un MVP (Producto Mínimo Viable) y presentar su startup. Todo con herramientas de IA que aceleran cada etapa." },
    { q: "¿A qué edad pueden empezar a emprender?", a: "Desde los 8 años. Adaptamos los conceptos a cada edad: los más pequeños aprenden a crear soluciones creativas, y los adolescentes trabajan con modelos de negocio reales y presentaciones a inversores simulados." },
    { q: "¿Les enseñan sobre dinero y finanzas?", a: "Sí. Incluimos módulos de educación financiera básica: ahorro, inversión, presupuestos y cómo generar ingresos con proyectos digitales. Todo contextualizado para su edad." },
    { q: "¿Qué tipo de startups crean los niños?", a: "Desde apps que resuelven problemas de su comunidad, hasta tiendas online, juegos monetizables y servicios digitales. Los proyectos finales son presentados en un Demo Day." },
    { q: "¿Tiene aplicación real en el futuro profesional?", a: "El emprendimiento con IA es una de las habilidades más demandadas. Estudios de Harvard y Stanford muestran que la mentalidad emprendedora desarrollada temprano es el mayor predictor de éxito profesional." },
]

const pillars = [
    { kicker: "Descubrir", title: "Detectar problemas", desc: "Entrenamos la mirada: cómo ver oportunidades donde otros solo ven molestias." },
    { kicker: "Validar", title: "Prototipar con IA", desc: "De idea a MVP funcional en días, no meses, usando IA como equipo." },
    { kicker: "Vender", title: "Propuesta de valor", desc: "Aprenden a explicar qué venden y a quién, sin humo y sin clichés." },
    { kicker: "Escalar", title: "Finanzas y pitch", desc: "Presupuesto, precio, pitch deck y Demo Day frente a inversores simulados." },
]

const countries = [
    { code: "cl", name: "Chile" }, { code: "mx", name: "México" }, { code: "co", name: "Colombia" },
    { code: "ar", name: "Argentina" }, { code: "pe", name: "Perú" }, { code: "es", name: "España" },
    { code: "ec", name: "Ecuador" }, { code: "bo", name: "Bolivia" }, { code: "cr", name: "Costa Rica" },
    { code: "do", name: "Rep. Dominicana" }, { code: "us", name: "EE.UU." }, { code: "ve", name: "Venezuela" },
]

export default function EntrepreneurshipPage() {
    const courseSchema = {
        "@context": "https://schema.org",
        "@type": "Course",
        name: "Curso de Emprendimiento con IA para Niños y Adolescentes",
        description: "Educación financiera, creación de startups, desarrollo de MVP y presentación a inversores usando Inteligencia Artificial. Para niños y adolescentes de 8 a 17 años.",
        provider: { "@type": "Organization", name: "InnovaKids", url: "https://www.innovakidslatam.com" },
        educationalLevel: "Beginner",
        audience: { "@type": "EducationalAudience", educationalRole: "student", audienceType: "Children and Adolescents aged 8-17" },
        courseMode: "online",
        inLanguage: "es",
        url: "https://www.innovakidslatam.com/curso-emprendimiento-ninos",
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
                            <span className="text-[#1A1714]/75 normal-case tracking-normal">Emprendimiento con IA</span>
                        </nav>

                        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-end">
                            <div className="md:col-span-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="h-px w-10 bg-[#C96342]" aria-hidden />
                                    <span className="text-[11px] tracking-[0.28em] uppercase text-[#C96342] font-semibold">
                                        Nivel 04 · Especialización para 8 a 17 años
                                    </span>
                                </div>
                                <h1
                                    className="text-5xl sm:text-6xl md:text-7xl leading-[0.95] tracking-[-0.02em]"
                                    style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                                >
                                    Emprendimiento con <em className="italic text-[#C96342]">IA</em>.
                                </h1>
                                <p className="mt-8 text-lg md:text-xl text-[#1A1714]/70 leading-relaxed max-w-2xl font-light">
                                    De consumidor a fundador. Tu hijo detecta un problema, construye un MVP con IA
                                    y lo presenta en un Demo Day real. Mentalidad emprendedora desde temprano.
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
                                La mejor universidad del mundo no enseña lo que se aprende emprendiendo a los 12.
                            </h2>
                            <p className="text-lg text-[#1A1714]/70 leading-relaxed mb-8">
                                Harvard y Stanford lo documentan hace años: la mentalidad emprendedora temprana es
                                el mayor predictor de éxito profesional. Y con IA, el costo de intentarlo cayó a
                                cero.
                            </p>
                            <ul className="space-y-5 border-t border-[#1A1714]/12 pt-8">
                                {[
                                    "Piensa en términos de problema → solución",
                                    "Aprende educación financiera básica",
                                    "Construye un MVP funcional con IA",
                                    "Presenta su idea frente a inversores simulados",
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
                                La especialización founder
                            </p>
                            <h3
                                className="text-3xl leading-tight mb-5"
                                style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                            >
                                De idea a pitch en cuatro etapas.
                            </h3>
                            <p className="text-[#1A1714]/70 leading-relaxed mb-10">
                                Este no es un curso de "motivación emprendedora". Es ejecución guiada semana a semana.
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
                                Cómo lanza su primera startup.
                            </h2>
                            <p className="mt-6 text-lg text-[#1A1714]/70 leading-relaxed">
                                El Nivel 01 es la puerta de entrada obligatoria. Después desbloquea la especialización
                                emprendedora.
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
                                    Base de Vibe Coding, prompt engineering y uso crítico de herramientas IA.
                                </p>
                                <ul className="space-y-3 text-[#1A1714]/85 mb-8 text-sm">
                                    <li className="flex gap-3"><span className="text-[#C96342]">→</span> Vibe Coding — prototipar ideas</li>
                                    <li className="flex gap-3"><span className="text-[#C96342]">→</span> Análisis de datos básico con IA</li>
                                    <li className="flex gap-3"><span className="text-[#C96342]">→</span> Comunicación y presentación</li>
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
                                    Vibe Founders (Especialidad)
                                </h3>
                                <p className="text-[#1A1714]/70 mb-6 leading-relaxed">
                                    Programa avanzado con Demo Day frente a inversores simulados.
                                </p>
                                <ul className="space-y-3 text-[#1A1714]/60 mb-8 text-sm">
                                    <li className="flex gap-3"><span className="text-[#1A1714]/40">◦</span> Modelado financiero con IA</li>
                                    <li className="flex gap-3"><span className="text-[#1A1714]/40">◦</span> Construcción de pitch deck</li>
                                    <li className="flex gap-3"><span className="text-[#1A1714]/40">◦</span> Demo Day con mentores reales</li>
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
                                { href: "/curso-creador-contenido-ia", kicker: "Nivel 03", title: "Creador de contenido", desc: "Cine y YouTube con IA." },
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
