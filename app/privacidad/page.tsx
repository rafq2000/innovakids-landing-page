import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata = {
    title: "Política de Privacidad - InnovaKids LATAM",
    description: "Conoce cómo protegemos tu información y utilizamos tu correo electrónico",
}

const sections = [
    {
        id: "uso-email",
        label: "Uso de tu correo electrónico",
        body: (
            <>
                <p className="text-[17px] text-[#1A1714]/85 leading-[1.75]">
                    Al proporcionar tu dirección de correo electrónico en nuestro sitio web, aceptas que InnovaKids
                    LATAM pueda utilizarla para:
                </p>
                <ul className="mt-5 space-y-3 border-t border-[#1A1714]/12">
                    {[
                        "Enviarte información sobre nuestros cursos de Inteligencia Artificial para niños",
                        "Compartir contenido educativo y recursos gratuitos",
                        "Notificarte sobre fechas de inicio de nuevos grupos",
                        "Enviarte promociones y ofertas especiales",
                        "Comunicarte novedades relevantes sobre InnovaKids",
                    ].map((item) => (
                        <li key={item} className="py-3 border-b border-[#1A1714]/12 text-[16px] text-[#1A1714]/80 leading-relaxed grid grid-cols-[auto_1fr] gap-4">
                            <span className="text-[#C96342] leading-none mt-1">—</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </>
        ),
    },
    {
        id: "proteccion",
        label: "Protección de tus datos",
        body: (
            <p className="text-[17px] text-[#1A1714]/85 leading-[1.75]">
                Nos comprometemos a proteger tu información personal. Tu correo electrónico nunca será vendido, alquilado
                o compartido con terceros para fines comerciales sin tu consentimiento explícito. Utilizamos medidas de
                seguridad apropiadas para proteger tu información contra acceso no autorizado.
            </p>
        ),
    },
    {
        id: "darse-de-baja",
        label: "Derecho a darte de baja",
        body: (
            <>
                <p className="text-[17px] text-[#1A1714]/85 leading-[1.75]">
                    Respetamos tu decisión si decides no recibir más comunicaciones. Tienes derecho a darte de baja en
                    cualquier momento:
                </p>
                <ul className="mt-5 space-y-3 border-t border-[#1A1714]/12">
                    <li className="py-3 border-b border-[#1A1714]/12 text-[16px] text-[#1A1714]/80 leading-relaxed grid grid-cols-[auto_1fr] gap-4">
                        <span className="text-[#C96342] leading-none mt-1">—</span>
                        <span>Haciendo clic en "Cancelar suscripción" que aparece en todos nuestros correos.</span>
                    </li>
                    <li className="py-3 border-b border-[#1A1714]/12 text-[16px] text-[#1A1714]/80 leading-relaxed grid grid-cols-[auto_1fr] gap-4">
                        <span className="text-[#C96342] leading-none mt-1">—</span>
                        <span>
                            Enviando un correo a{" "}
                            <a href="mailto:innovakidslatam@gmail.com" className="text-[#C96342] font-semibold hover:underline">
                                innovakidslatam@gmail.com
                            </a>{" "}
                            con el asunto "Baja de lista".
                        </span>
                    </li>
                    <li className="py-3 border-b border-[#1A1714]/12 text-[16px] text-[#1A1714]/80 leading-relaxed grid grid-cols-[auto_1fr] gap-4">
                        <span className="text-[#C96342] leading-none mt-1">—</span>
                        <span>
                            Contactándonos por WhatsApp al{" "}
                            <a href="tel:+56964754219" className="text-[#C96342] font-semibold hover:underline">
                                +56 9 6475 4219
                            </a>
                            .
                        </span>
                    </li>
                </ul>
                <p className="text-[15px] text-[#1A1714]/70 leading-relaxed mt-6">
                    Procesaremos tu solicitud en un plazo máximo de 48 horas.
                </p>
            </>
        ),
    },
    {
        id: "consentimiento",
        label: "Consentimiento",
        body: (
            <p className="text-[17px] text-[#1A1714]/85 leading-[1.75]">
                Al proporcionar tu correo electrónico a través de nuestros formularios, descargas de material gratuito o
                solicitudes de información, confirmas que has leído y aceptado esta Política de Privacidad, y consientes
                el uso de tu correo electrónico según lo descrito anteriormente.
            </p>
        ),
    },
    {
        id: "contacto",
        label: "Contacto",
        body: (
            <>
                <p className="text-[17px] text-[#1A1714]/85 leading-[1.75]">
                    Si tienes preguntas sobre esta Política de Privacidad o el manejo de tus datos, contáctanos:
                </p>
                <dl className="mt-6 border-t border-[#1A1714]/12">
                    <div className="py-4 border-b border-[#1A1714]/12 grid grid-cols-[140px_1fr] gap-4 items-baseline">
                        <dt className="text-[11px] uppercase tracking-[0.24em] text-[#C96342] font-semibold">Email</dt>
                        <dd className="text-[16px] text-[#1A1714]/85">
                            <a href="mailto:innovakidslatam@gmail.com" className="text-[#C96342] font-semibold hover:underline">
                                innovakidslatam@gmail.com
                            </a>
                        </dd>
                    </div>
                    <div className="py-4 border-b border-[#1A1714]/12 grid grid-cols-[140px_1fr] gap-4 items-baseline">
                        <dt className="text-[11px] uppercase tracking-[0.24em] text-[#C96342] font-semibold">Teléfono</dt>
                        <dd className="text-[16px] text-[#1A1714]/85">
                            <a href="tel:+56964754219" className="text-[#C96342] font-semibold hover:underline">
                                +56 9 6475 4219
                            </a>
                        </dd>
                    </div>
                    <div className="py-4 border-b border-[#1A1714]/12 grid grid-cols-[140px_1fr] gap-4 items-baseline">
                        <dt className="text-[11px] uppercase tracking-[0.24em] text-[#C96342] font-semibold">Dirección</dt>
                        <dd className="text-[16px] text-[#1A1714]/85">Diagonal Oriente 1620, Providencia, Chile</dd>
                    </div>
                </dl>
            </>
        ),
    },
]

export default function PrivacyPage() {
    return (
        <>
            <Navigation />
            <main className="min-h-screen bg-[#FAF7EF] text-[#1A1714] pt-32 pb-20">
                <div className="max-w-[1100px] mx-auto px-6 md:px-10">
                    <nav aria-label="Breadcrumb" className="mb-10 text-[12px] tracking-[0.2em] uppercase text-[#1A1714]/55">
                        <Link href="/" className="hover:text-[#C96342] transition-colors">InnovaKids</Link>
                        <span className="mx-3" aria-hidden>/</span>
                        <span className="text-[#1A1714]">Privacidad</span>
                    </nav>

                    <header className="mb-16 pb-16 border-b border-[#1A1714]/12">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="h-px w-10 bg-[#C96342]" aria-hidden />
                            <span className="text-[11px] tracking-[0.28em] uppercase text-[#C96342] font-semibold">
                                Documento legal · última actualización: marzo 2026
                            </span>
                        </div>
                        <h1
                            className="text-5xl md:text-6xl leading-[1] tracking-[-0.02em] text-[#1A1714] max-w-[20ch]"
                            style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                        >
                            Política de <em className="italic text-[#C96342]">Privacidad</em>.
                        </h1>
                        <p className="mt-8 text-xl text-[#1A1714]/70 leading-relaxed max-w-[60ch]">
                            Tu privacidad es importante. Aquí explicamos qué datos pedimos, para qué los usamos y cómo
                            puedes controlarlos.
                        </p>
                    </header>

                    <div className="grid lg:grid-cols-12 gap-12">
                        <aside className="lg:col-span-3">
                            <div className="lg:sticky lg:top-32">
                                <p className="text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold mb-4">
                                    Secciones
                                </p>
                                <ol className="space-y-3 border-l border-[#1A1714]/15">
                                    {sections.map((s, i) => (
                                        <li key={s.id} className="pl-4">
                                            <a
                                                href={`#${s.id}`}
                                                className="text-[14px] text-[#1A1714]/75 hover:text-[#C96342] transition-colors leading-snug block"
                                            >
                                                <span className="text-[#C96342]/70 mr-2">0{i + 1}</span>
                                                {s.label}
                                            </a>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </aside>

                        <div className="lg:col-span-9 space-y-16">
                            {sections.map((s, i) => (
                                <section key={s.id} id={s.id}>
                                    <p className="text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold mb-4">
                                        Sección 0{i + 1}
                                    </p>
                                    <h2
                                        className="text-3xl md:text-4xl tracking-tight text-[#1A1714] mb-6 pb-4 border-b border-[#1A1714]/15"
                                        style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                                    >
                                        {s.label}
                                    </h2>
                                    {s.body}
                                </section>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
