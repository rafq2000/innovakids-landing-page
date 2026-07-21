const teamMembers = [
  {
    name: "Equipo Acad\u00e9mico",
    role: "Instructores certificados",
    bio: "Profesionales de tecnolog\u00eda con formaci\u00f3n pedag\u00f3gica. Cada instructor da clases 1 a 1, un alumno a la vez.",
    initials: "EA",
  },
  {
    name: "Equipo de Soporte",
    role: "Atenci\u00f3n a familias",
    bio: "Disponibles por WhatsApp de 9:00 a 20:00 (GMT-4). Respuesta promedio: 5 minutos.",
    initials: "ES",
  },
  {
    name: "Metodolog\u00eda ERICA",
    role: "Dise\u00f1o curricular",
    bio: "Programa de 50 clases calibrado por edad. Actualizado cada cohorte con las \u00faltimas herramientas de IA.",
    initials: "ME",
  },
]

export function TeamSection() {
  return (
    <section className="relative bg-[#FAF7EF] text-[var(--ink)] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-20 md:py-28">

        {/* ============ HEADER ============ */}
        <div className="rise rise-1 mb-14 md:mb-20 max-w-2xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-[var(--terracotta)]" />
            <p className="font-mono-accent text-[10px] uppercase tracking-[0.28em] text-[var(--terracotta)]">
              Qui{"\u00e9"}nes somos
            </p>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-[56px] leading-[0.95] tracking-[-0.03em] text-[var(--ink)] mb-5">
            Un equipo que entiende{" "}
            <em
              className="italic text-[var(--terracotta)]"
              style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
            >
              a tus hijos.
            </em>
          </h2>
          <p
            className="text-lg md:text-xl leading-[1.45] text-[var(--ink-soft)] max-w-[48ch]"
          >
            Instructores con experiencia en tecnolog{"\u00eda"} y educaci{"\u00f3"}n. Conocemos a cada alumno por nombre.
          </p>
        </div>

        {/* ============ TEAM CARDS ============ */}
        <div className="rise rise-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-14 md:mb-20">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="group bg-[var(--paper)] border border-[var(--ink)]/12 rounded-sm p-7 md:p-9 flex flex-col gap-6 transition-shadow duration-300 hover:shadow-[0_20px_60px_-20px_rgba(26,23,20,0.15)]"
            >
              {/* Avatar placeholder */}
              <div className="w-16 h-16 rounded-sm bg-[var(--ink)] flex items-center justify-center shrink-0">
                <span className="font-mono-accent text-sm uppercase tracking-[0.18em] text-[var(--paper)]">
                  {member.initials}
                </span>
              </div>

              <div className="flex flex-col gap-3 flex-1">
                <div>
                  <h3 className="font-display text-xl md:text-2xl text-[var(--ink)] leading-tight mb-1">
                    {member.name}
                  </h3>
                  <p className="font-mono-accent text-[10px] uppercase tracking-[0.2em] text-[var(--terracotta)]">
                    {member.role}
                  </p>
                </div>
                <p
                  className="text-base leading-[1.55] text-[var(--ink-muted)]"
                      >
                  {member.bio}
                </p>
              </div>

              {/* Decorative divider */}
              <div className="h-px w-full bg-[var(--ink)]/10 mt-auto" />
            </article>
          ))}
        </div>

        {/* ============ TRUST FOOTER ============ */}
        <div className="rise rise-3 pt-8 border-t border-[var(--ink)]/12">
          <p
            className="text-center text-sm md:text-base text-[var(--ink-muted)] leading-relaxed"
          >
            Empresa constituida en Chile {"\u00b7"} RUT 78.388.703-7 {"\u00b7"} M{"\u00e1"}s de 527 familias conf{"\u00ed"}an en nosotros
          </p>
        </div>
      </div>
    </section>
  )
}

export default TeamSection
