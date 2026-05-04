"use client"

export function ReferralSection() {
    return (
        <aside className="mt-16 bg-[#1A1714] text-[#FAF7EF] p-8 md:p-12 rounded-[3px]">
            <div className="grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-8">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="h-px w-10 bg-[#C96342]" aria-hidden />
                        <span className="text-[11px] tracking-[0.28em] uppercase text-[#C96342] font-semibold">
                            Invita a un amigo
                        </span>
                    </div>
                    <h2
                        className="text-3xl md:text-4xl leading-[1.05] tracking-tight text-[#FAF7EF] mb-4"
                        style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                    >
                        Comparte InnovaKids y ambos <em className="italic text-[#C96342]">ganan</em>.
                    </h2>
                    <p className="text-[15px] text-[#FAF7EF]/70 leading-relaxed max-w-[52ch]">
                        Si otra familia se inscribe con tu enlace, tu hijo recibe una clase
                        extra gratis y ellos obtienen un descuento especial.
                    </p>
                </div>
                <div className="md:col-span-4 flex flex-col gap-4">
                    <div className="bg-[#FAF7EF]/10 border border-[#FAF7EF]/15 p-5 rounded-[3px]">
                        <p className="text-[10px] uppercase tracking-[0.24em] text-[#C96342] font-semibold mb-2">
                            Tu enlace personal
                        </p>
                        <p className="text-sm text-[#FAF7EF]/80 font-mono break-all mb-3">
                            innovakidslatam.com/?ref=amigo
                        </p>
                        <button
                            type="button"
                            className="w-full bg-[#C96342] hover:bg-[#A8502F] text-[#FAF7EF] px-5 py-3 text-sm font-semibold rounded-sm transition-colors"
                            onClick={() => {
                                navigator.clipboard?.writeText("https://www.innovakidslatam.com/?ref=amigo")
                            }}
                        >
                            Copiar enlace
                        </button>
                    </div>
                    <a
                        href="https://wa.me/?text=Mira%20este%20curso%20de%20IA%20para%20niños%20que%20estamos%20tomando%20→%20https://www.innovakidslatam.com/?ref=amigo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 border border-[#FAF7EF]/20 hover:border-[#C96342] text-[#FAF7EF] px-5 py-3 text-sm font-semibold rounded-sm transition-colors"
                    >
                        Compartir por WhatsApp
                    </a>
                </div>
            </div>
        </aside>
    )
}
