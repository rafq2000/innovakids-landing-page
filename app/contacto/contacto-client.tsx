"use client"

import { Navigation } from "@/components/navigation"
import Link from "next/link"
import { ContactForm } from "@/components/contact-form"

export default function ContactoClient() {
    const whatsappNumber = "56964754219"
    const whatsappMessage = encodeURIComponent(
        "Hola, me gustaría obtener más información sobre el curso de IA para niños",
    )

    const openCalendly = () => {
        if (typeof window !== "undefined" && (window as any).Calendly) {
            ;(window as any).Calendly.initPopupWidget({
                url: "https://calendly.com/innovakidslatam/reunion-informativa-innovakids?hide_gdpr_banner=1&hide_event_type_details=1&primary_color=C96342",
            })
        }
    }

    return (
        <div className="min-h-screen bg-[#FAF7EF] text-[#1A1714]">
            <Navigation />
            <main className="pt-32 pb-20">
                <div className="max-w-[1100px] mx-auto px-6 md:px-10">
                    <nav aria-label="Breadcrumb" className="mb-10 text-[12px] tracking-[0.2em] uppercase text-[#1A1714]/55">
                        <Link href="/" className="hover:text-[#C96342] transition-colors">InnovaKids</Link>
                        <span className="mx-3" aria-hidden>/</span>
                        <span className="text-[#1A1714]">Contacto</span>
                    </nav>

                    <header className="mb-16 pb-16 border-b border-[#1A1714]/12">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="h-px w-10 bg-[#C96342]" aria-hidden />
                            <span className="text-[11px] tracking-[0.28em] uppercase text-[#C96342] font-semibold">
                                Hablemos
                            </span>
                        </div>
                        <h1
                            className="text-5xl md:text-7xl leading-[0.98] tracking-[-0.02em] text-[#1A1714] max-w-[18ch]"
                            style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                        >
                            <em className="italic text-[#C96342]">Contacto</em>.
                        </h1>
                        <p className="mt-8 text-xl text-[#1A1714]/70 leading-relaxed max-w-[52ch]">
                            Estamos aquí para responder todas tus preguntas — elige el canal que te resulte más cómodo.
                        </p>
                    </header>

                    <div className="grid lg:grid-cols-12 gap-12">
                        {/* Left: channels */}
                        <aside className="lg:col-span-5 space-y-12">
                            {/* WhatsApp */}
                            <section>
                                <p className="text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold mb-4">
                                    Canal directo
                                </p>
                                <h2
                                    className="text-3xl md:text-4xl leading-[1.05] text-[#1A1714] mb-4"
                                    style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                                >
                                    Hablemos por WhatsApp
                                </h2>
                                <p className="text-[15px] text-[#1A1714]/70 leading-relaxed mb-6">
                                    Respuesta en tiempo real para resolver dudas específicas de tu hijo.
                                </p>
                                <a
                                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 bg-[#C96342] hover:bg-[#A8502F] text-[#FAF7EF] px-8 py-4 font-semibold text-base tracking-wide transition-colors"
                                >
                                    Abrir WhatsApp
                                    <span aria-hidden>→</span>
                                </a>
                            </section>

                            {/* Info table */}
                            <dl className="border-t border-[#1A1714]/12">
                                <div className="py-5 border-b border-[#1A1714]/12 grid grid-cols-[120px_1fr] gap-4 items-baseline">
                                    <dt className="text-[11px] uppercase tracking-[0.24em] text-[#C96342] font-semibold">Email</dt>
                                    <dd>
                                        <a href="mailto:innovakidslatam@gmail.com" className="text-[16px] text-[#1A1714] hover:text-[#C96342] transition-colors">
                                            innovakidslatam@gmail.com
                                        </a>
                                        <p className="text-[13px] text-[#1A1714]/55 mt-1">Respondemos en 24 horas.</p>
                                    </dd>
                                </div>
                                <div className="py-5 border-b border-[#1A1714]/12 grid grid-cols-[120px_1fr] gap-4 items-baseline">
                                    <dt className="text-[11px] uppercase tracking-[0.24em] text-[#C96342] font-semibold">Teléfono</dt>
                                    <dd>
                                        <a href="tel:+56964754219" className="text-[16px] text-[#1A1714] hover:text-[#C96342] transition-colors">
                                            +56 9 6475 4219
                                        </a>
                                        <p className="text-[13px] text-[#1A1714]/55 mt-1">Lun — Sáb · 08:00 — 20:00.</p>
                                    </dd>
                                </div>
                                <div className="py-5 border-b border-[#1A1714]/12 grid grid-cols-[120px_1fr] gap-4 items-baseline">
                                    <dt className="text-[11px] uppercase tracking-[0.24em] text-[#C96342] font-semibold">Oficina</dt>
                                    <dd>
                                        <p className="text-[16px] text-[#1A1714]">Diagonal Oriente 1620</p>
                                        <p className="text-[13px] text-[#1A1714]/55 mt-1">Providencia, Chile.</p>
                                    </dd>
                                </div>
                            </dl>

                            {/* Calendly block */}
                            <section>
                                <p className="text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold mb-4">
                                    Sesión estratégica
                                </p>
                                <h3
                                    className="text-2xl md:text-3xl leading-[1.1] text-[#1A1714] mb-3"
                                    style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                                >
                                    ¿Listo para que tu hijo aprenda IA?
                                </h3>
                                <p className="text-[15px] text-[#1A1714]/70 leading-relaxed mb-6">
                                    Agenda una sesión gratuita de 30 minutos con nuestro equipo.
                                </p>
                                <button
                                    onClick={openCalendly}
                                    className="inline-flex items-center justify-center gap-2 border border-[#1A1714]/20 hover:border-[#C96342] text-[#1A1714] hover:text-[#C96342] px-8 py-4 font-semibold text-base tracking-wide transition-colors"
                                >
                                    Agendar sesión gratuita
                                </button>
                            </section>
                        </aside>

                        {/* Right: form */}
                        <div className="lg:col-span-7">
                            <div className="border border-[#1A1714]/12 p-8 md:p-10 bg-[#F2EDE0]/40">
                                <p className="text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold mb-4">
                                    Escríbenos
                                </p>
                                <h2
                                    className="text-3xl md:text-4xl leading-[1.05] text-[#1A1714] mb-3"
                                    style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                                >
                                    Envíanos un mensaje
                                </h2>
                                <p className="text-[15px] text-[#1A1714]/70 leading-relaxed mb-8">
                                    Completa el formulario y te responderemos a la brevedad.
                                </p>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
