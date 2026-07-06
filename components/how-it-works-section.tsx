import { SOCIAL_PROOF } from "@/lib/site-config"

export function HowItWorksSection() {
  return (
    <section className="relative bg-[#F5F1E8] text-[var(--ink)] overflow-hidden">
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 py-20 md:py-28">

        {/* ============ PATH-TO-BOOK (3 steps) ============ */}
        <div className="grid grid-cols-12 gap-10 mb-16 md:mb-20">
          <div className="col-span-12 md:col-span-4">
            <p className="font-mono-accent text-[10px] uppercase tracking-[0.28em] text-[var(--ink-muted)] mb-6">
              Así funciona
            </p>
            <h2 className="font-display text-4xl md:text-5xl leading-[1] tracking-[-0.03em]">
              Empieza en tres pasos,{" "}
              <em className="italic text-[var(--terracotta)]" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}>
                tu hijo crea desde el día 1
              </em>.
            </h2>
          </div>
          <ol className="col-span-12 md:col-span-8 grid sm:grid-cols-3 gap-8 md:gap-4">
            {[
              { n: "01", t: "Agendas", d: "Eliges un horario. Toma entre 30 y 45 minutos, sin compromiso." },
              { n: "02", t: "Probamos", d: "Tu hijo prueba una clase en vivo con el profe y otros niños." },
              { n: "03", t: "Decides", d: "Si le gusta, reservamos su cupo. Si no, quedas con un diagnóstico claro." },
            ].map((s) => (
              <li key={s.n} className="pt-6 border-t-2 border-[var(--ink)]">
                <p className="font-mono-accent text-xs text-[var(--terracotta)] tracking-[0.2em] mb-4">
                  {s.n}
                </p>
                <h3 className="font-display text-2xl md:text-3xl mb-3 text-[var(--ink)]">
                  {s.t}
                </h3>
                <p className="text-base text-[var(--ink-muted)] leading-[1.55] max-w-[28ch]">
                  {s.d}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* ============ COMPACT TRUST STATS ============ */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-[var(--ink)]/15">
          {[
            { n: String(SOCIAL_PROOF.graduates), l: "Graduados" },
            { n: String(SOCIAL_PROOF.rating), l: "Valoración" },
            { n: `${SOCIAL_PROOF.countries}`, l: "Países" },
            { n: `${SOCIAL_PROOF.guaranteeDays}`, l: "Días garantía" },
          ].map((s) => (
            <div key={s.l} className="flex flex-col">
              <span className="font-display text-4xl md:text-5xl leading-none tabular-nums text-[var(--ink)]">
                {s.n}
              </span>
              <span className="font-mono-accent text-[10px] uppercase tracking-[0.22em] text-[var(--ink-muted)] mt-3">
                {s.l}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection
