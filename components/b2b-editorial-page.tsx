"use client"

import { useEffect, useRef, useState } from "react"

/* ============================================================
   Types
   ============================================================ */

export interface B2BEditorialPageProps {
  pill: string
  numeral: string
  headline: { pre: string; emphasis: string; post: string }
  lead: string
  stats: { n: string; l: string }[]
  offer: {
    title: string
    items: { k: string; t: string; d: string }[]
  }
  process: { n: string; t: string; d: string }[]
  closing: { title: string; sub: string; cta: string; href: string }
  /** Optional pricing indication */
  pricing?: string
}

/* ============================================================
   Reveal hook
   ============================================================ */

function useInView<T extends HTMLElement>(threshold = 0.18) {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { threshold },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])
  return { ref, inView }
}

/* ============================================================
   Atoms
   ============================================================ */

const DotLeader = () => (
  <span
    aria-hidden
    className="flex-1 mx-3 translate-y-[-2px] opacity-30"
    style={{
      height: 2,
      background:
        "radial-gradient(circle, #1A1714 1px, transparent 1px) 0 0 / 6px 6px repeat-x",
    }}
  />
)

/* ============================================================
   Component
   ============================================================ */

export function B2BEditorialPage({
  pill,
  numeral,
  headline,
  lead,
  stats,
  offer,
  process,
  closing,
  pricing,
}: B2BEditorialPageProps) {
  const [formData, setFormData] = useState({ name: "", institution: "", email: "", role: "", message: "" })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const { ref: heroRef, inView: heroIn } = useInView<HTMLDivElement>(0.1)
  const { ref: offerRef, inView: offerIn } = useInView<HTMLDivElement>(0.15)
  const { ref: procRef, inView: procIn } = useInView<HTMLDivElement>(0.2)
  const { ref: closeRef, inView: closeIn } = useInView<HTMLDivElement>(0.2)

  return (
    <div className="bg-[#FAF7EF] text-[#1A1714] pt-28 pb-32">
      {/* —— HERO / MASTHEAD —— */}
      <section className="max-w-[1180px] mx-auto px-6 md:px-10">
        <div
          ref={heroRef}
          className="relative border-b border-[#1A1714]/12 pb-16 md:pb-24"
          style={{
            opacity: heroIn ? 1 : 0,
            transform: heroIn ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 800ms cubic-bezier(.2,.8,.2,1), transform 800ms cubic-bezier(.2,.8,.2,1)",
          }}
        >
          {/* masthead line */}
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <span
                className="font-display italic text-[#C96342]"
                style={{ fontSize: "1.75rem", fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
              >
                IK
              </span>
              <span className="font-mono-accent text-[10px] uppercase tracking-[0.32em] text-[#1A1714]/55">
                InnovaKids Latam · B2B
              </span>
            </div>
            <span className="font-mono-accent text-[10px] uppercase tracking-[0.28em] text-[#C96342]">
              {pill}
            </span>
          </div>

          {/* giant roman numeral */}
          <div className="grid md:grid-cols-12 gap-10 md:gap-12 items-start">
            <div className="md:col-span-2">
              <span
                aria-hidden
                className="font-display italic leading-none text-[#C96342]/25 select-none block"
                style={{
                  fontSize: "clamp(6rem, 14vw, 11rem)",
                  fontVariationSettings: '"opsz" 144, "SOFT" 100',
                }}
              >
                {numeral}
              </span>
            </div>

            <div className="md:col-span-10">
              <h1
                className="font-display text-[#1A1714] leading-[0.98] tracking-[-0.025em]"
                style={{
                  fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
                  fontVariationSettings: '"opsz" 144, "SOFT" 100',
                }}
              >
                {headline.pre}{" "}
                <em className="italic text-[#C96342]">{headline.emphasis}</em>{" "}
                {headline.post}
              </h1>

              <p className="mt-10 text-lg md:text-xl text-[#1A1714]/75 leading-relaxed max-w-[58ch]">
                {lead}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* —— STATS LEDGER —— */}
      <section className="max-w-[1180px] mx-auto px-6 md:px-10 mt-16 md:mt-20">
        <ul className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#1A1714]/12 border-y border-[#1A1714]/12">
          {stats.map((s, i) => (
            <li key={i} className="py-8 md:py-10 md:px-10 flex items-baseline gap-5">
              <span className="font-mono-accent text-[10px] uppercase tracking-[0.28em] text-[#C96342]/70 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p
                  className="font-display italic text-[#1A1714] leading-none tabular-nums"
                  style={{
                    fontSize: "clamp(2.25rem, 4vw, 3rem)",
                    fontVariationSettings: '"opsz" 144, "SOFT" 100',
                  }}
                >
                  {s.n}
                </p>
                <p className="mt-2 font-mono-accent text-[11px] uppercase tracking-[0.22em] text-[#1A1714]/65">
                  {s.l}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* —— OFFER · EDITORIAL CATALOG —— */}
      <section
        ref={offerRef}
        className="max-w-[1180px] mx-auto px-6 md:px-10 mt-28 md:mt-36"
        style={{
          opacity: offerIn ? 1 : 0,
          transform: offerIn ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 800ms cubic-bezier(.2,.8,.2,1), transform 800ms cubic-bezier(.2,.8,.2,1)",
        }}
      >
        <div className="flex items-center gap-4 mb-10">
          <span className="h-px w-12 bg-[#C96342]" />
          <span className="font-mono-accent text-[10px] uppercase tracking-[0.32em] text-[#C96342] font-semibold">
            Catálogo · N.º 02
          </span>
        </div>

        <h2
          className="font-display leading-[1] tracking-[-0.02em] mb-14 md:mb-20 max-w-[22ch]"
          style={{
            fontSize: "clamp(2rem, 4.5vw, 3.75rem)",
            fontVariationSettings: '"opsz" 144, "SOFT" 100',
          }}
        >
          {offer.title}.
        </h2>

        <ol className="divide-y divide-[#1A1714]/15 border-y border-[#1A1714]/15">
          {offer.items.map((it, i) => (
            <li
              key={i}
              className="grid grid-cols-12 gap-5 md:gap-10 py-10 md:py-12 items-start"
              style={{
                opacity: offerIn ? 1 : 0,
                transform: offerIn ? "translateY(0)" : "translateY(14px)",
                transition: `opacity 700ms ease ${200 + i * 120}ms, transform 700ms ease ${200 + i * 120}ms`,
              }}
            >
              <span className="col-span-2 md:col-span-1 font-mono-accent text-xs text-[#C96342] font-semibold tabular-nums tracking-wider">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="col-span-10 md:col-span-3">
                <p className="font-mono-accent text-[10px] uppercase tracking-[0.28em] text-[#C96342] mb-2">
                  {it.k}
                </p>
                <h3
                  className="font-display text-[#1A1714] leading-[1.1] tracking-[-0.01em]"
                  style={{
                    fontSize: "clamp(1.5rem, 2.2vw, 1.9rem)",
                    fontVariationSettings: '"opsz" 144, "SOFT" 100',
                  }}
                >
                  {it.t}
                </h3>
              </div>

              <div className="col-span-12 md:col-span-7 md:col-start-6 flex items-center">
                <p className="text-base md:text-lg text-[#1A1714]/75 leading-relaxed max-w-[54ch]">
                  {it.d}
                </p>
              </div>

              <div className="hidden md:flex col-span-1 items-center justify-end">
                <span className="font-mono-accent text-[10px] uppercase tracking-[0.22em] text-[#C96342]/60">
                  incluido
                </span>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* —— PROCESS · 3 STEPS —— */}
      <section
        ref={procRef}
        className="max-w-[1180px] mx-auto px-6 md:px-10 mt-32 md:mt-40"
      >
        <div className="flex items-center gap-4 mb-10">
          <span className="h-px w-12 bg-[#C96342]" />
          <span className="font-mono-accent text-[10px] uppercase tracking-[0.32em] text-[#C96342] font-semibold">
            Proceso · N.º 03
          </span>
        </div>

        <h2
          className="font-display leading-[1] tracking-[-0.02em] mb-14 max-w-[18ch]"
          style={{
            fontSize: "clamp(2rem, 4.5vw, 3.75rem)",
            fontVariationSettings: '"opsz" 144, "SOFT" 100',
          }}
        >
          Tres pasos <em className="italic text-[#C96342]">en sesenta días</em>.
        </h2>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-0 md:divide-x divide-[#1A1714]/12 border-y border-[#1A1714]/12">
          {process.map((p, i) => (
            <li
              key={i}
              className="py-10 md:py-12 md:px-10 flex flex-col gap-4"
              style={{
                opacity: procIn ? 1 : 0,
                transform: procIn ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 700ms ease ${i * 140}ms, transform 700ms ease ${i * 140}ms`,
              }}
            >
              <span
                className="font-display italic text-[#C96342]/70 leading-none"
                style={{
                  fontSize: "clamp(2rem, 3vw, 2.75rem)",
                  fontVariationSettings: '"opsz" 144, "SOFT" 100',
                }}
              >
                {p.n}
              </span>
              <h3
                className="font-display text-[#1A1714] leading-[1.1] tracking-[-0.01em]"
                style={{
                  fontSize: "clamp(1.35rem, 2vw, 1.6rem)",
                  fontVariationSettings: '"opsz" 144, "SOFT" 100',
                }}
              >
                {p.t}
              </h3>
              <p className="text-base text-[#1A1714]/70 leading-relaxed">{p.d}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* —— PRICING INDICATION —— */}
      {pricing && (
        <section className="max-w-[1180px] mx-auto px-6 md:px-10 mt-20 md:mt-28">
          <div className="p-8 md:p-10 bg-[#F2EDE0] border border-[#1A1714]/12 rounded-[3px]">
            <p className="font-mono-accent text-[10px] uppercase tracking-[0.28em] text-[#C96342] font-semibold mb-3">
              Referencia de inversion
            </p>
            <p className="font-display text-2xl md:text-3xl leading-tight text-[#1A1714]" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}>
              {pricing}
            </p>
            <p className="mt-3 text-sm text-[#1A1714]/55">
              Precio final depende del volumen y duracion. Solicita una propuesta personalizada.
            </p>
          </div>
        </section>
      )}

      {/* —— CONTACT FORM —— */}
      <section id="contacto-b2b" className="max-w-[1180px] mx-auto px-6 md:px-10 mt-20 md:mt-28">
        <div className="flex items-center gap-4 mb-10">
          <span className="h-px w-12 bg-[#C96342]" />
          <span className="font-mono-accent text-[10px] uppercase tracking-[0.32em] text-[#C96342] font-semibold">
            Contacto institucional
          </span>
        </div>

        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5">
            <h2
              className="font-display leading-[1] tracking-[-0.02em] mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
            >
              Cuente con <em className="italic text-[#C96342]">nosotros</em>.
            </h2>
            <p className="text-base text-[#1A1714]/70 leading-relaxed mb-8 max-w-[38ch]">
              Complete el formulario y le enviaremos una propuesta personalizada en 48 horas habiles.
            </p>
            <p className="text-sm text-[#1A1714]/50">
              Tambien puede escribirnos por{" "}
              <a
                href={closing.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C96342] underline underline-offset-2"
              >
                WhatsApp
              </a>
            </p>
          </div>

          <div className="md:col-span-7">
            {formSubmitted ? (
              <div className="p-8 bg-[#F2EDE0] border border-[#1A1714]/12 rounded-[3px] text-center">
                <p className="font-display text-2xl text-[#1A1714] mb-3">Recibido.</p>
                <p className="text-base text-[#1A1714]/65">Le contactaremos en 48 horas habiles con una propuesta personalizada.</p>
              </div>
            ) : (
              <form
                onSubmit={async (e) => {
                  e.preventDefault()
                  try {
                    const { createClient } = await import("@/lib/supabase/client")
                    const supabase = createClient()
                    supabase.from("booking_leads").insert({
                      first_name: formData.name,
                      email: formData.email,
                      phone: "",
                      country_code: "B2B",
                      country_name: formData.institution,
                      child_age: formData.role,
                      source: `b2b-form-${pill.toLowerCase().replace(/\s/g, "-")}`,
                    }).then(() => {})
                  } catch {}
                  setFormSubmitted(true)
                }}
                className="space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-mono-accent text-[10px] uppercase tracking-[0.18em] text-[#C96342] font-semibold mb-2">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="font-display w-full bg-transparent border-0 border-b border-[#1A1714]/20 py-3 text-lg text-[#1A1714] placeholder:text-[#1A1714]/30 focus:border-[#C96342] transition-colors"
                      placeholder="Maria Garcia"
                    />
                  </div>
                  <div>
                    <label className="block font-mono-accent text-[10px] uppercase tracking-[0.18em] text-[#C96342] font-semibold mb-2">
                      Institucion
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.institution}
                      onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                      className="font-display w-full bg-transparent border-0 border-b border-[#1A1714]/20 py-3 text-lg text-[#1A1714] placeholder:text-[#1A1714]/30 focus:border-[#C96342] transition-colors"
                      placeholder="Colegio San Patricio"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-mono-accent text-[10px] uppercase tracking-[0.18em] text-[#C96342] font-semibold mb-2">
                      Email institucional
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="font-display w-full bg-transparent border-0 border-b border-[#1A1714]/20 py-3 text-lg text-[#1A1714] placeholder:text-[#1A1714]/30 focus:border-[#C96342] transition-colors"
                      placeholder="mgarcia@colegio.cl"
                    />
                  </div>
                  <div>
                    <label className="block font-mono-accent text-[10px] uppercase tracking-[0.18em] text-[#C96342] font-semibold mb-2">
                      Cargo
                    </label>
                    <input
                      type="text"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="font-display w-full bg-transparent border-0 border-b border-[#1A1714]/20 py-3 text-lg text-[#1A1714] placeholder:text-[#1A1714]/30 focus:border-[#C96342] transition-colors"
                      placeholder="Directora academica"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-mono-accent text-[10px] uppercase tracking-[0.18em] text-[#C96342] font-semibold mb-2">
                    Mensaje (opcional)
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={3}
                    className="font-display w-full bg-transparent border-0 border-b border-[#1A1714]/20 py-3 text-lg text-[#1A1714] placeholder:text-[#1A1714]/30 focus:border-[#C96342] transition-colors resize-none"
                    placeholder="Numero de estudiantes, fechas, presupuesto..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 bg-[#1A1714] text-[#FAF7EF] font-mono-accent text-[11px] uppercase tracking-[0.24em] px-8 py-4 rounded-[2px] transition-all duration-300 hover:bg-[#C96342]"
                >
                  Solicitar propuesta
                  <span aria-hidden>&#8594;</span>
                </button>
                <p className="text-xs text-[#1A1714]/40">
                  Su informacion es confidencial y se usa solo para enviarle la propuesta.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* —— CLOSING · CTA RECEIPT —— */}
      <section
        ref={closeRef}
        className="max-w-[980px] mx-auto px-6 md:px-10 mt-32 md:mt-40"
        style={{
          opacity: closeIn ? 1 : 0,
          transform: closeIn ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 800ms cubic-bezier(.2,.8,.2,1), transform 800ms cubic-bezier(.2,.8,.2,1)",
        }}
      >
        <div
          className="relative bg-[#F2EDE0] border border-[#1A1714]/15 rounded-[3px] p-10 md:p-16 text-center"
          style={{ boxShadow: "0 40px 80px -50px rgba(26,23,20,0.35)" }}
        >
          <span className="font-mono-accent text-[10px] uppercase tracking-[0.32em] text-[#C96342] mb-6 block">
            Siguiente paso
          </span>

          <h2
            className="font-display leading-[1] tracking-[-0.02em] mb-6"
            style={{
              fontSize: "clamp(2rem, 4.8vw, 4rem)",
              fontVariationSettings: '"opsz" 144, "SOFT" 100',
            }}
          >
            {closing.title}
          </h2>

          <p className="text-base md:text-lg text-[#1A1714]/75 leading-relaxed max-w-[54ch] mx-auto mb-10">
            {closing.sub}
          </p>

          <a
            href={closing.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#1A1714] text-[#FAF7EF] font-mono-accent text-[12px] uppercase tracking-[0.24em] px-8 py-4 rounded-[2px] transition-all duration-300 hover:bg-[#C96342]"
            style={{ boxShadow: "0 20px 40px -20px rgba(26,23,20,0.5)" }}
          >
            {closing.cta}
            <span aria-hidden className="text-base">→</span>
          </a>

          <div className="mt-10 pt-8 border-t border-[#1A1714]/12 flex items-center justify-center gap-3">
            <DotLeader />
            <span
              className="font-display italic text-[#C96342]"
              style={{ fontSize: "1.5rem", fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
            >
              IK
            </span>
            <span className="font-mono-accent text-[10px] uppercase tracking-[0.28em] text-[#1A1714]/55">
              InnovaKids Latam
            </span>
            <DotLeader />
          </div>
        </div>
      </section>
    </div>
  )
}

export default B2BEditorialPage
