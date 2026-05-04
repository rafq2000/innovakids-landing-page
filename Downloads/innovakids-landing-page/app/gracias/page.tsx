import type { Metadata } from "next"
import { Suspense } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { GraciasTracker } from "./gracias-tracker"
import { ReferralSection } from "./referral-section"

export const metadata: Metadata = {
    title: "Pago confirmado · InnovaKids",
    description:
        "Tu inscripcion esta confirmada. Revisa tu correo para el Kit de Bienvenida y selecciona tus horarios.",
    robots: { index: false, follow: false },
}

export default function GraciasPage() {
    return (
        <>
            <Navigation />
            <Suspense fallback={null}>
                <GraciasTracker />
            </Suspense>
            <main className="min-h-screen bg-[#FAF7EF] text-[#1A1714]">
                <section className="pt-32 pb-20">
                    <div className="max-w-[1100px] mx-auto px-6 md:px-10">
                        <div className="grid lg:grid-cols-12 gap-12 items-start">
                            <div className="lg:col-span-7">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="h-px w-10 bg-[#C96342]" aria-hidden />
                                    <span className="text-[11px] tracking-[0.28em] uppercase text-[#C96342] font-semibold">
                                        Pago confirmado
                                    </span>
                                </div>
                                <h1
                                    className="text-5xl md:text-7xl leading-[0.98] tracking-[-0.02em] text-[#1A1714] max-w-[20ch]"
                                    style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                                >
                                    Listo. Tu pago esta <em className="italic text-[#C96342]">confirmado</em>.
                                </h1>
                                <p className="mt-8 text-xl text-[#1A1714]/70 leading-relaxed max-w-[56ch]">
                                    Te enviamos un correo de bienvenida con tu Kit completo y los pasos para comenzar.
                                    Revisa tu bandeja de entrada (y spam) en los pr\u00f3ximos minutos.
                                </p>
                            </div>

                            <aside className="lg:col-span-5 border border-[#1A1714]/12 p-8 bg-[#F2EDE0]/40">
                                <p className="text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold mb-5">
                                    Próximos pasos
                                </p>
                                <ol className="border-t border-[#1A1714]/12">
                                    {[
                                        { k: "Revisa tu correo", v: "Te enviamos el Kit de Bienvenida con 8 documentos esenciales." },
                                        { k: "Selecciona tus horarios", v: "Elige m\u00ednimo 3 d\u00edas con 2 horarios. Es obligatorio para asignarte grupo." },
                                        { k: "Escr\u00edbenos por WhatsApp", v: "Al +56 9 2245 0492 para confirmar tu inscripci\u00f3n." },
                                    ].map((item, i) => (
                                        <li
                                            key={item.k}
                                            className="grid grid-cols-[auto_1fr] gap-5 py-5 border-b border-[#1A1714]/12 items-baseline"
                                        >
                                            <span className="text-[11px] uppercase tracking-[0.24em] text-[#C96342] font-semibold">
                                                0{i + 1}
                                            </span>
                                            <div>
                                                <p
                                                    className="text-xl text-[#1A1714]"
                                                    style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                                                >
                                                    {item.k}
                                                </p>
                                                <p className="text-[14px] text-[#1A1714]/70 mt-1 leading-relaxed">
                                                    {item.v}
                                                </p>
                                            </div>
                                        </li>
                                    ))}
                                </ol>
                            </aside>
                        </div>

                        <aside className="mt-20 border-t border-b border-[#1A1714]/12 py-12">
                            <div className="grid md:grid-cols-12 gap-10 items-start">
                                <div className="md:col-span-7">
                                    <div className="flex items-center gap-3 mb-5">
                                        <span className="h-px w-10 bg-[#C96342]" aria-hidden />
                                        <span className="text-[11px] tracking-[0.28em] uppercase text-[#C96342] font-semibold">
                                            Mientras esperas
                                        </span>
                                    </div>
                                    <h2
                                        className="text-3xl md:text-4xl leading-[1.05] tracking-tight text-[#1A1714] mb-4"
                                        style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                                    >
                                        Conoce cómo funciona el programa.
                                    </h2>
                                    <p className="text-[15px] text-[#1A1714]/70 leading-relaxed max-w-[52ch]">
                                        Mira el currículum completo y testimonios de familias que ya terminaron el
                                        programa.
                                    </p>
                                </div>
                                <div className="md:col-span-5 flex flex-col gap-3 md:justify-self-end w-full md:w-auto">
                                    <Link
                                        href="/mis-horarios"
                                        className="inline-flex items-center justify-center gap-2 bg-[#C96342] hover:bg-[#A8502F] text-[#FAF7EF] px-8 py-4 font-semibold text-base tracking-wide transition-colors"
                                    >
                                        Seleccionar mis horarios
                                        <span aria-hidden>→</span>
                                    </Link>
                                    <Link
                                        href="/bienvenida"
                                        className="inline-flex items-center justify-center gap-2 border border-[#1A1714]/20 hover:border-[#C96342] text-[#1A1714] px-8 py-4 font-semibold text-base tracking-wide transition-colors"
                                    >
                                        Ver Kit de Bienvenida
                                    </Link>
                                </div>
                            </div>
                        </aside>

                        {/* Referral program */}
                        <ReferralSection />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
