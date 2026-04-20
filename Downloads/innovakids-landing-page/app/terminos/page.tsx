import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata = {
    title: "Términos y Condiciones - InnovaKids LATAM",
    description: "Lee nuestros términos y condiciones de servicio",
}

const sections: { id: string; label: string; body: React.ReactNode }[] = [
    {
        id: "aceptacion",
        label: "Aceptación de los términos",
        body: (
            <p>
                Al acceder y utilizar el sitio web de InnovaKids LATAM (www.innovakidslatam.com) y nuestros servicios
                educativos, aceptas estar sujeto a estos Términos y Condiciones. Si no estás de acuerdo con alguna parte
                de estos términos, no debes utilizar nuestros servicios.
            </p>
        ),
    },
    {
        id: "servicio",
        label: "Descripción del servicio",
        body: (
            <>
                <p>
                    InnovaKids LATAM ofrece cursos y programas educativos de Inteligencia Artificial para niños de 8 a 14
                    años. Nuestros servicios incluyen:
                </p>
                <ul className="mt-5 border-t border-[#1A1714]/12">
                    {[
                        "Clases en vivo online con grupos reducidos de máximo 5 alumnos",
                        "Acceso de por vida a grabaciones de las clases",
                        "Material educativo y recursos descargables",
                        "Comunidad privada para alumnos",
                        "Certificado de finalización del programa",
                        "Sesión diagnóstica gratuita",
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
        id: "pagos",
        label: "Pagos y facturación",
        body: (
            <dl className="border-t border-[#1A1714]/12">
                {[
                    {
                        k: "Precios",
                        v: "Todos los precios están expresados en dólares estadounidenses (USD). Sujetos a cambios sin previo aviso, pero sin afectar pedidos ya confirmados.",
                    },
                    {
                        k: "Métodos de pago",
                        v: "Aceptamos pagos a través de PayPal y Mercado Pago. Todas las transacciones son procesadas de forma segura.",
                    },
                    {
                        k: "Opciones de pago",
                        v: "Ofrecemos pago en una sola exhibición o en cuotas según disponibilidad en tu país.",
                    },
                    {
                        k: "Confirmación",
                        v: "Una vez realizado el pago, recibirás confirmación por correo con los detalles de tu compra y las instrucciones de acceso.",
                    },
                ].map(({ k, v }) => (
                    <div key={k} className="py-5 border-b border-[#1A1714]/12 grid md:grid-cols-[200px_1fr] gap-4 items-baseline">
                        <dt className="text-[11px] uppercase tracking-[0.24em] text-[#C96342] font-semibold">{k}</dt>
                        <dd className="text-[16px] text-[#1A1714]/80 leading-relaxed">{v}</dd>
                    </div>
                ))}
            </dl>
        ),
    },
    {
        id: "reembolso",
        label: "Política de reembolso",
        body: (
            <>
                <p>Ofrecemos una garantía de satisfacción del 100%:</p>
                <ul className="mt-5 border-t border-[#1A1714]/12">
                    {[
                        "Si después de la primera clase no estás satisfecho, puedes solicitar reembolso completo dentro de las 48 horas posteriores.",
                        "Para solicitarlo, contacta a innovakidslatam@gmail.com o WhatsApp +56 9 6475 4219.",
                        "Los reembolsos se procesan en 5-10 días hábiles al método de pago original.",
                        "Después del período de garantía no se realizan reembolsos, pero puedes transferir tu cupo a otro estudiante.",
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
        id: "ip",
        label: "Propiedad intelectual",
        body: (
            <>
                <p>
                    Todo el contenido del sitio web y los cursos (textos, gráficos, logos, videos, audios y software) es
                    propiedad de InnovaKids LATAM y está protegido por leyes de propiedad intelectual. Los usuarios
                    tienen derecho a:
                </p>
                <ul className="mt-5 border-t border-[#1A1714]/12">
                    {[
                        "Acceder y utilizar el contenido para su aprendizaje personal.",
                        "Descargar materiales para uso personal y no comercial.",
                    ].map((item) => (
                        <li key={item} className="py-3 border-b border-[#1A1714]/12 text-[16px] text-[#1A1714]/80 leading-relaxed grid grid-cols-[auto_1fr] gap-4">
                            <span className="text-[#C96342] leading-none mt-1">—</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
                <p className="mt-6">
                    <strong>Está prohibido</strong>: copiar, modificar, distribuir, vender o sublicenciar cualquier
                    contenido sin autorización escrita previa.
                </p>
            </>
        ),
    },
    {
        id: "responsabilidades",
        label: "Responsabilidades del usuario",
        body: (
            <>
                <p>Al utilizar nuestros servicios, te comprometes a:</p>
                <ul className="mt-5 border-t border-[#1A1714]/12">
                    {[
                        "Proporcionar información precisa y actualizada durante el registro.",
                        "Mantener la confidencialidad de tus credenciales de acceso.",
                        "No compartir el acceso al contenido del curso con terceros.",
                        "Utilizar el servicio de manera responsable y respetuosa.",
                        "Supervisar la participación de menores en las clases.",
                        "Asistir puntualmente a las clases programadas.",
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
        id: "cancelaciones",
        label: "Cancelaciones y reprogramaciones",
        body: (
            <dl className="border-t border-[#1A1714]/12">
                {[
                    {
                        k: "Por parte del alumno",
                        v: "Todas las sesiones quedan grabadas y disponibles de por vida. No es necesario notificar ausencias.",
                    },
                    {
                        k: "Por parte de InnovaKids",
                        v: "En caso excepcional de cancelar una clase, se reprogramará a la brevedad con al menos 24 horas de anticipación.",
                    },
                    {
                        k: "Transferencias",
                        v: "Puedes transferir tu cupo a otro estudiante notificando con 48 horas de anticipación al inicio del programa.",
                    },
                ].map(({ k, v }) => (
                    <div key={k} className="py-5 border-b border-[#1A1714]/12 grid md:grid-cols-[200px_1fr] gap-4 items-baseline">
                        <dt className="text-[11px] uppercase tracking-[0.24em] text-[#C96342] font-semibold">{k}</dt>
                        <dd className="text-[16px] text-[#1A1714]/80 leading-relaxed">{v}</dd>
                    </div>
                ))}
            </dl>
        ),
    },
    {
        id: "limitacion",
        label: "Limitación de responsabilidad",
        body: (
            <p>
                InnovaKids LATAM no se hace responsable por: daños indirectos, incidentales o consecuentes; pérdida de
                datos o interrupciones del servicio por causas fuera de nuestro control; resultados específicos del
                aprendizaje, ya que varían según el estudiante; problemas técnicos en el equipo o conexión del usuario;
                o uso indebido del contenido proporcionado en los cursos.
            </p>
        ),
    },
    {
        id: "privacidad",
        label: "Privacidad y protección de datos",
        body: (
            <p>
                El uso de tus datos personales está regido por nuestra{" "}
                <Link href="/privacidad" className="text-[#C96342] font-semibold hover:underline">
                    Política de Privacidad
                </Link>
                . Al aceptar estos términos, también aceptas nuestra política de privacidad.
            </p>
        ),
    },
    {
        id: "modificaciones",
        label: "Modificaciones",
        body: (
            <p>
                Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Las
                modificaciones entran en vigor inmediatamente tras su publicación. El uso continuado de los servicios
                constituye tu aceptación de los nuevos términos.
            </p>
        ),
    },
    {
        id: "contacto",
        label: "Contacto",
        body: (
            <dl className="border-t border-[#1A1714]/12">
                <div className="py-4 border-b border-[#1A1714]/12 grid grid-cols-[140px_1fr] gap-4 items-baseline">
                    <dt className="text-[11px] uppercase tracking-[0.24em] text-[#C96342] font-semibold">Email</dt>
                    <dd>
                        <a href="mailto:innovakidslatam@gmail.com" className="text-[16px] text-[#C96342] font-semibold hover:underline">
                            innovakidslatam@gmail.com
                        </a>
                    </dd>
                </div>
                <div className="py-4 border-b border-[#1A1714]/12 grid grid-cols-[140px_1fr] gap-4 items-baseline">
                    <dt className="text-[11px] uppercase tracking-[0.24em] text-[#C96342] font-semibold">WhatsApp</dt>
                    <dd>
                        <a href="https://wa.me/56964754219" className="text-[16px] text-[#C96342] font-semibold hover:underline">
                            +56 9 6475 4219
                        </a>
                    </dd>
                </div>
                <div className="py-4 border-b border-[#1A1714]/12 grid grid-cols-[140px_1fr] gap-4 items-baseline">
                    <dt className="text-[11px] uppercase tracking-[0.24em] text-[#C96342] font-semibold">Dirección</dt>
                    <dd className="text-[16px] text-[#1A1714]/85">Diagonal Oriente 1620, Providencia, Santiago, Chile</dd>
                </div>
            </dl>
        ),
    },
    {
        id: "ley",
        label: "Ley aplicable",
        body: (
            <p>
                Estos Términos y Condiciones se rigen por las leyes de Chile. Cualquier disputa relacionada estará sujeta
                a la jurisdicción exclusiva de los tribunales de Santiago, Chile.
            </p>
        ),
    },
]

export default function TermsPage() {
    return (
        <>
            <Navigation />
            <main className="min-h-screen bg-[#FAF7EF] text-[#1A1714] pt-32 pb-20">
                <div className="max-w-[1100px] mx-auto px-6 md:px-10">
                    <nav aria-label="Breadcrumb" className="mb-10 text-[12px] tracking-[0.2em] uppercase text-[#1A1714]/55">
                        <Link href="/" className="hover:text-[#C96342] transition-colors">InnovaKids</Link>
                        <span className="mx-3" aria-hidden>/</span>
                        <span className="text-[#1A1714]">Términos y condiciones</span>
                    </nav>

                    <header className="mb-16 pb-16 border-b border-[#1A1714]/12">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="h-px w-10 bg-[#C96342]" aria-hidden />
                            <span className="text-[11px] tracking-[0.28em] uppercase text-[#C96342] font-semibold">
                                Documento legal · última actualización: marzo 2026
                            </span>
                        </div>
                        <h1
                            className="text-5xl md:text-6xl leading-[1] tracking-[-0.02em] text-[#1A1714] max-w-[22ch]"
                            style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                        >
                            Términos y <em className="italic text-[#C96342]">Condiciones</em>.
                        </h1>
                        <p className="mt-8 text-xl text-[#1A1714]/70 leading-relaxed max-w-[60ch]">
                            Condiciones de uso de nuestros servicios, pagos, garantías, propiedad intelectual y ley
                            aplicable.
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
                                                className="text-[13px] text-[#1A1714]/75 hover:text-[#C96342] transition-colors leading-snug block"
                                            >
                                                <span className="text-[#C96342]/70 mr-2">
                                                    {String(i + 1).padStart(2, "0")}
                                                </span>
                                                {s.label}
                                            </a>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </aside>

                        <div className="lg:col-span-9 space-y-16 text-[17px] text-[#1A1714]/85 leading-[1.75]">
                            {sections.map((s, i) => (
                                <section key={s.id} id={s.id}>
                                    <p className="text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold mb-4">
                                        Sección {String(i + 1).padStart(2, "0")}
                                    </p>
                                    <h2
                                        className="text-3xl md:text-4xl tracking-tight text-[#1A1714] mb-6 pb-4 border-b border-[#1A1714]/15"
                                        style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                                    >
                                        {s.label}
                                    </h2>
                                    <div className="space-y-4">{s.body}</div>
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
