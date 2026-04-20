import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Confianza y Seguridad Infantil · IA Segura | InnovaKids",
    description:
        "Aulas 100% monitoreadas, docentes certificados y entornos virtuales seguros para niños 8-17 años. Política de protección al menor. Reserva tu clase gratis.",
    keywords: [
        "confianza seguridad innovakids",
        "proteccion menor ia",
        "curso ia niños seguro",
        "seguridad infantil clases online",
        "aulas monitoreadas niños",
    ],
    alternates: {
        canonical: "https://www.innovakidslatam.com/confianza-y-seguridad",
    },
    openGraph: {
        title: "Confianza y Seguridad Infantil · InnovaKids LATAM",
        description:
            "Compromiso absoluto con la seguridad infantil: aulas monitoreadas, docentes certificados y entornos virtuales seguros.",
        url: "https://www.innovakidslatam.com/confianza-y-seguridad",
        siteName: "InnovaKids",
        type: "website",
        locale: "es_419",
        images: [{
            url: "https://www.innovakidslatam.com/hero-child-learning-ai.jpg",
            width: 1200,
            height: 630,
            alt: "Confianza y seguridad infantil en cursos online de IA - InnovaKids",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Confianza y Seguridad Infantil · IA Segura | InnovaKids",
        description:
            "Aulas monitoreadas, docentes certificados y entornos virtuales seguros para niños 8-17 años.",
        images: ["https://www.innovakidslatam.com/hero-child-learning-ai.jpg"],
    },
}

const pillars = [
    {
        label: "Aulas monitoreadas en vivo",
        intro:
            "Todas nuestras sesiones vía Meet/Zoom son monitoreadas por el equipo académico. Política de Cero Tolerancia al bullying y al comportamiento inadecuado.",
        items: [
            "Chats filtrados por moderadores",
            "Bloqueo de pantalla compartida no autorizada",
            "Reporte inmediato de incidencias a padres",
        ],
    },
    {
        label: "Docentes investigados",
        intro:
            "Cada facilitador pasa por un riguroso proceso de selección: validación de antecedentes, pruebas psicológicas y entrevistas focalizadas en docencia infantil.",
        items: [
            "Validación de antecedentes locales e internacionales",
            "Certificación en metodologías infantiles",
            "Monitoreo continuo de calidad (NPS Estudiantil)",
        ],
    },
    {
        label: "Protección de datos personales",
        intro:
            "Cumplimos con las regulaciones internacionales más estrictas sobre datos de menores (COPPA compliant). No vendemos, no prestamos y no cedemos información de nuestros alumnos.",
        items: [
            "Correos y números encriptados",
            "Consentimiento explícito parental",
            "Sin publicidad dentro de las plataformas de estudio",
        ],
    },
    {
        label: "Entornos IA cerrados",
        intro:
            "Las herramientas de IA están configuradas en modalidad educativa (walled gardens). Los prompts están limitados para evitar que la IA genere contenido inapropiado o violento.",
        items: [
            "Filtros de contenido estrictos",
            "Suscripciones administradas por el cuerpo docente",
            "Revisión de proyectos antes de exposición pública",
        ],
    },
]

export default function SecurityPage() {
    return (
        <>
            <Navigation />
            <main className="min-h-screen bg-[#FAF7EF] text-[#1A1714]">
                <section className="pt-32 pb-16">
                    <div className="max-w-[1100px] mx-auto px-6 md:px-10">
                        <nav aria-label="Breadcrumb" className="mb-10 text-[12px] tracking-[0.2em] uppercase text-[#1A1714]/55">
                            <Link href="/" className="hover:text-[#C96342] transition-colors">InnovaKids</Link>
                            <span className="mx-3" aria-hidden>/</span>
                            <span className="text-[#1A1714]">Confianza y seguridad</span>
                        </nav>

                        <header className="mb-20 pb-16 border-b border-[#1A1714]/12">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="h-px w-10 bg-[#C96342]" aria-hidden />
                                <span className="text-[11px] tracking-[0.28em] uppercase text-[#C96342] font-semibold">
                                    Compromiso absoluto · protección al menor
                                </span>
                            </div>
                            <h1
                                className="text-5xl md:text-7xl leading-[0.98] tracking-[-0.02em] text-[#1A1714] max-w-[20ch]"
                                style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                            >
                                Seguridad <em className="italic text-[#C96342]">infantil</em> por diseño.
                            </h1>
                            <p className="mt-8 text-xl text-[#1A1714]/70 leading-relaxed max-w-[58ch]">
                                Nuestra prioridad número uno es garantizar un entorno digital 100% seguro, auditado e
                                inspirador para todos nuestros alumnos.
                            </p>
                        </header>

                        <ol className="not-prose border-t border-[#1A1714]/12">
                            {pillars.map((p, i) => (
                                <li key={p.label} className="py-12 border-b border-[#1A1714]/12 grid md:grid-cols-12 gap-8 md:gap-12">
                                    <div className="md:col-span-4">
                                        <p className="text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold">
                                            Pilar 0{i + 1}
                                        </p>
                                        <h2
                                            className="mt-3 text-3xl md:text-4xl leading-[1.05] text-[#1A1714]"
                                            style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                                        >
                                            {p.label}
                                        </h2>
                                    </div>
                                    <div className="md:col-span-8">
                                        <p className="text-[17px] text-[#1A1714]/80 leading-[1.7]">{p.intro}</p>
                                        <ul className="mt-6 border-t border-[#1A1714]/12">
                                            {p.items.map((item, j) => (
                                                <li key={item} className="grid grid-cols-[auto_1fr] gap-6 py-4 border-b border-[#1A1714]/12 items-baseline">
                                                    <span className="text-[11px] uppercase tracking-[0.24em] text-[#C96342] font-semibold">
                                                        {String(j + 1).padStart(2, "0")}
                                                    </span>
                                                    <span className="text-[15px] md:text-base text-[#1A1714]/85 leading-relaxed">
                                                        {item}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </li>
                            ))}
                        </ol>

                        <aside className="mt-20 border-t border-b border-[#1A1714]/12 py-12">
                            <div className="grid md:grid-cols-12 gap-10 items-start">
                                <div className="md:col-span-7">
                                    <div className="flex items-center gap-3 mb-5">
                                        <span className="h-px w-10 bg-[#C96342]" aria-hidden />
                                        <span className="text-[11px] tracking-[0.28em] uppercase text-[#C96342] font-semibold">
                                            ¿Dudas específicas?
                                        </span>
                                    </div>
                                    <h3
                                        className="text-3xl md:text-4xl leading-[1.05] tracking-tight text-[#1A1714] mb-4"
                                        style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                                    >
                                        Hablemos antes de inscribir.
                                    </h3>
                                    <p className="text-[15px] text-[#1A1714]/70 leading-relaxed max-w-[52ch]">
                                        Agenda una evaluación gratuita de 30 minutos con nuestro equipo. Resolvemos todas
                                        tus preguntas sobre protocolo, docentes y protección de datos.
                                    </p>
                                </div>
                                <div className="md:col-span-5 flex flex-col gap-3 md:justify-self-end w-full md:w-auto">
                                    <Link
                                        href="/clase-gratis"
                                        className="inline-flex items-center justify-center gap-2 bg-[#C96342] hover:bg-[#A8502F] text-[#FAF7EF] px-8 py-4 font-semibold text-base tracking-wide transition-colors"
                                    >
                                        Agendar conversación
                                        <span aria-hidden>→</span>
                                    </Link>
                                    <Link
                                        href="/privacidad"
                                        className="inline-flex items-center justify-center gap-2 border border-[#1A1714]/20 hover:border-[#C96342] text-[#1A1714] px-8 py-4 font-semibold text-base tracking-wide transition-colors"
                                    >
                                        Leer política de privacidad
                                    </Link>
                                </div>
                            </div>
                        </aside>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
