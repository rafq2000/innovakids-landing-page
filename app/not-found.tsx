import Link from "next/link"

const countries = [
    { code: "mx", name: "México" },
    { code: "co", name: "Colombia" },
    { code: "ar", name: "Argentina" },
    { code: "pe", name: "Perú" },
    { code: "cl", name: "Chile" },
    { code: "es", name: "España" },
    { code: "us", name: "USA" },
    { code: "ec", name: "Ecuador" },
]

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#FAF7EF] text-[#1A1714] flex items-center">
            <div className="max-w-[1100px] mx-auto px-6 md:px-10 py-24 w-full">
                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-5">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="h-px w-10 bg-[#C96342]" aria-hidden />
                            <span className="text-[11px] tracking-[0.28em] uppercase text-[#C96342] font-semibold">
                                Error 404
                            </span>
                        </div>
                        <p
                            className="text-[140px] md:text-[200px] leading-[0.85] tracking-[-0.04em] text-[#C96342]"
                            style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                        >
                            404
                        </p>
                    </div>

                    <div className="lg:col-span-7">
                        <h1
                            className="text-5xl md:text-6xl leading-[1] tracking-[-0.02em] text-[#1A1714]"
                            style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                        >
                            Página <em className="italic text-[#C96342]">no encontrada</em>.
                        </h1>
                        <p className="mt-6 text-xl text-[#1A1714]/70 leading-relaxed max-w-[52ch]">
                            Lo sentimos, la página que buscas no existe o ha sido movida. Te dejamos aquí los atajos más
                            útiles.
                        </p>

                        <div className="mt-10 grid sm:grid-cols-2 gap-px bg-[#1A1714]/12 border border-[#1A1714]/12">
                            <Link href="/" className="bg-[#FAF7EF] p-6 hover:bg-[#F2EDE0]/50 transition-colors group">
                                <p className="text-[11px] uppercase tracking-[0.24em] text-[#C96342]/70 group-hover:text-[#C96342] font-semibold mb-2">
                                    Volver
                                </p>
                                <p className="text-xl text-[#1A1714] mb-1" style={{ fontFamily: "'Charter', 'Georgia', serif" }}>
                                    Ir al inicio
                                </p>
                                <p className="text-[14px] text-[#1A1714]/70">Página principal InnovaKids.</p>
                            </Link>
                            <Link href="/#programa" className="bg-[#FAF7EF] p-6 hover:bg-[#F2EDE0]/50 transition-colors group">
                                <p className="text-[11px] uppercase tracking-[0.24em] text-[#C96342]/70 group-hover:text-[#C96342] font-semibold mb-2">
                                    Programa
                                </p>
                                <p className="text-xl text-[#1A1714] mb-1" style={{ fontFamily: "'Charter', 'Georgia', serif" }}>
                                    Ver el currículum
                                </p>
                                <p className="text-[14px] text-[#1A1714]/70">Cursos de IA para niños.</p>
                            </Link>
                        </div>

                        <section className="mt-12">
                            <p className="text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold mb-5">
                                Busca tu país
                            </p>
                            <ul className="flex flex-wrap gap-x-6 gap-y-3">
                                {countries.map((c) => (
                                    <li key={c.code}>
                                        <Link
                                            href={`/${c.code}`}
                                            className="text-[15px] text-[#1A1714]/80 hover:text-[#C96342] transition-colors"
                                        >
                                            {c.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <aside className="mt-16 pt-8 border-t border-[#1A1714]/12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                            <p className="text-[15px] text-[#1A1714]/70">¿Necesitas ayuda?</p>
                            <a
                                href="https://wa.me/56964754219?text=Hola%20InnovaKids%2C%20necesito%20ayuda"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-[#C96342] hover:bg-[#A8502F] text-[#FAF7EF] px-8 py-4 font-semibold text-base tracking-wide transition-colors"
                            >
                                Escribir por WhatsApp
                                <span aria-hidden>→</span>
                            </a>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    )
}
