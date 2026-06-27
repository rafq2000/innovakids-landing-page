import { EXPLORER_CLASSES } from "@/lib/curriculum-data"

export function CurriculumSection() {
  return (
    <section
      id="temario"
      className="bg-[#F5F1E8] text-[#2F2F2C] py-28 md:py-40"
    >
      <div className="max-w-[1100px] mx-auto px-6 md:px-10">

        {/* Masthead */}
        <div className="flex items-center gap-5 mb-20">
          <div className="h-px w-12 bg-[#C96342]" />
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold">
            Currículum · 10 clases
          </p>
        </div>

        <h2
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[88px] leading-[0.98] tracking-[-0.02em] font-normal mb-8 max-w-[16ch]"
        >
          De consumidor a{" "}
          <em className="italic text-[#C96342]">creador</em>.
        </h2>

        <p className="text-lg md:text-xl text-[#5A5751] max-w-[56ch] leading-relaxed mb-20">
          En 10 clases en vivo tu hijo domina IA generativa, prompts, voz,
          música, arte, código y ética digital. Termina con un proyecto propio
          que puede mostrar con orgullo.
        </p>

        {/* ─── EXPLORER CONTENT ─── */}
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold mb-5">
              Vibe Explorer · 10 clases
            </p>
            <h3 className="font-display text-3xl md:text-4xl leading-tight tracking-tight mb-6">
              Fundamentos &amp; Creatividad con IA
            </h3>
            <p className="text-base text-[#5A5751] leading-relaxed">
              Tu hijo aprende a usar IA como herramienta creativa: genera arte,
              música, historias, código y su primer proyecto completo.
            </p>
            <p className="mt-4 text-sm text-[#5A5751]">
              <strong className="text-[#2F2F2C]">Edad:</strong> 8-17 años
            </p>
          </div>

          <ol className="md:col-span-8 divide-y divide-[#2F2F2C]/12">
            {EXPLORER_CLASSES.map((cls) => (
              <li key={cls.num} className="py-5 flex items-start gap-6">
                <span className="text-xs text-[#C96342] font-semibold tabular-nums shrink-0 w-6 pt-0.5">
                  {cls.num}
                </span>
                <div>
                  <span className="font-display text-base md:text-lg text-[#2F2F2C] leading-snug">
                    {cls.title}
                  </span>
                  <p className="text-sm text-[#5A5751] mt-1">{cls.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <p className="text-sm text-[#5A5751] italic mt-16 pt-10 border-t border-[#2F2F2C]/12">
          Cada clase dura 60 minutos en vivo. El programa completo son 5 semanas (2 clases por semana).
        </p>
      </div>
    </section>
  )
}
