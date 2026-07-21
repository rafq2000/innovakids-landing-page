import Link from "next/link"
import type { CountryConfig } from "@/lib/countries-config"
import { COHORT, PRICING } from "@/lib/site-config"

interface PricingSectionProps {
  country?: CountryConfig
}

export function PricingSection({ country }: PricingSectionProps) {
  // Primary price is always USD. For non-USD countries we also show the
  // approximate local-currency figure underneath so parents see what they'll
  // actually be charged in their card's currency.
  const price = `$${PRICING.full}`
  const currencyCode = "USD"

  const localApprox = (() => {
    if (!country) return null
    if (country.currency === "USD") return null
    const rate = country.priceLocal / PRICING.full
    const local = Math.round((PRICING.full * rate) / 100) * 100
    return `aprox. ${country.currencySymbol}${local.toLocaleString()} ${country.currency}`
  })()

  const features = [
    "10 clases en vivo 1 a 1 por módulo",
    "Certificado digital Vibe Explorer",
    "Acceso a 15+ herramientas de IA premium",
    "Soporte 24/7 por Discord y WhatsApp",
    "Proyecto final con certificado de graduación",
  ]

  return (
    <section
      id="pricing"
      className="bg-[#F5F1E8] text-[#2F2F2C] py-28 md:py-40 border-t border-[#2F2F2C]/10"
    >
      <div className="max-w-[1100px] mx-auto px-6 md:px-10">

        <div className="flex items-center gap-5 mb-20">
          <div className="h-px w-12 bg-[#C96342]" />
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#B5522F] font-semibold">
            Inversión · Cohorte 2026
          </p>
        </div>

        <h2
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[88px] leading-[0.98] tracking-[-0.02em] font-normal mb-8 max-w-[14ch]"
        >
          Un fundamento, una <em className="italic text-[#B5522F]">cifra</em>.
        </h2>

        <p className="text-lg md:text-xl text-[#5A5751] max-w-[52ch] leading-relaxed mb-24">
          No manejamos planes complejos. Un solo programa, un solo precio,
          todo incluido.
        </p>

        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          {/* Left: the offer */}
          <div className="md:col-span-5">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#B5522F] font-semibold mb-5">
              Nivel 01 · Vibe Explorer
            </p>
            <h3
              className="font-display text-4xl md:text-5xl leading-[1.05] tracking-tight mb-8 font-normal"
            >
              El fundamento obligatorio para dominar la IA.
            </h3>
            <div className="flex items-baseline gap-3 mb-2">
              <span
                className="font-display text-7xl md:text-[88px] leading-none font-normal text-[#2F2F2C]"
              >
                {price}
              </span>
              <span className="text-base text-[#5A5751] uppercase tracking-widest">
                {currencyCode}
              </span>
            </div>
            {localApprox && (
              <p className="text-sm text-[#5A5751] mb-2 italic">{localApprox}</p>
            )}
            <p className="text-sm text-[#5A5751] mb-4">
              Pago único · sin mensualidades · sin letra chica.
            </p>
            <p className="text-sm text-[#2F2F2C] mb-10 border-l-2 border-[#C96342] pl-3">
              <strong className="font-semibold">${PRICING.earlyDecision} USD</strong> si confirmas la
              inscripción dentro de las <strong className="font-semibold">48 horas</strong> posteriores
              a tu Sesión de Diagnóstico gratuita.
            </p>

            <Link
              href="/pagar?option=explorer"
              className="group inline-flex items-center justify-center gap-3 bg-[#C96342] hover:bg-[#9A4428] text-[#FAF7EF] px-8 py-4 text-base font-semibold rounded-sm shadow-[0_10px_30px_-12px_rgba(201,99,66,0.55)] hover:shadow-[0_14px_40px_-12px_rgba(201,99,66,0.7)] transition-all duration-300"
            >
              <span>Inscribir a mi hijo</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>→</span>
            </Link>

            <div
              className="mt-5 flex items-center gap-4 text-[11px] uppercase tracking-[0.16em] text-[#5A5751]"
                >
              <span className="flex items-center gap-1.5">
                <span className="relative flex w-2 h-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C96342] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C96342]"></span>
                </span>
                <span><strong className="text-[#2F2F2C] font-semibold">{COHORT.totalSpots}</strong> cupos por cohorte · clases 1 a 1</span>
              </span>
              <span className="opacity-40">·</span>
              <span>Pago seguro 🔒</span>
            </div>

            <p className="mt-4 text-sm text-[#5A5751]">
              ¿Vienen hermanos o un grupo de amigos? Escríbenos por WhatsApp y te contamos las promociones para grupos.
            </p>
          </div>

          {/* Right: what's included */}
          <div className="md:col-span-7 md:pl-8 md:border-l border-[#2F2F2C]/12">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#B5522F] font-semibold mb-8">
              Qué incluye
            </p>
            <ul className="divide-y divide-[#2F2F2C]/12">
              {features.map((f, i) => (
                <li key={i} className="py-5 flex items-baseline gap-6">
                  <span className="text-xs text-[#B5522F] font-semibold tabular-nums shrink-0 w-6">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="font-display text-base md:text-lg text-[#2F2F2C] leading-snug"
                  >
                    {f}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bonuses */}
        <div className="mt-24 pt-12 border-t border-[#2F2F2C]/12">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#B5522F] font-semibold mb-2">
                Bonos incluidos
              </p>
              <p
                className="text-sm text-[#5A5751] leading-relaxed"
                    >
                Solo para esta cohorte. No se cobran aparte.
              </p>
            </div>
            <div className="md:col-span-8 grid sm:grid-cols-2 gap-6">
              {[
                { tag: "Bono 01", title: "Guía para padres: cómo usar IA en casa" },
                { tag: "Bono 02", title: "Acceso al grupo privado de familias" },
                { tag: "Bono 03", title: "30 prompts probados para tareas escolares" },
                { tag: "Bono 04", title: "Sesión 1:1 con mentor (primera semana)" },
              ].map((b, i) => (
                <div key={i} className="border-t border-[#2F2F2C]/12 pt-4">
                  <div
                    className="flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-[#B5522F] font-semibold mb-2"
                            >
                    <span>{b.tag}</span>
                    <span className="text-[#5A5751] opacity-60">incluido</span>
                  </div>
                  <p
                    className="font-display text-base md:text-lg text-[#2F2F2C] leading-snug"
                  >
                    {b.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Guarantee */}
        <div className="mt-20 pt-12 border-t border-[#2F2F2C]/12 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#B5522F] font-semibold">
              Garantía
            </p>
          </div>
          <div className="md:col-span-8">
            <p
              className="font-display text-2xl md:text-3xl leading-tight tracking-tight mb-4"
            >
              10 días para probar sin riesgo.
            </p>
            <p className="text-base text-[#5A5751] leading-relaxed max-w-[52ch]">
              Si en los primeros diez días no estás convencido de lo que ves en
              tu hijo, te devolvemos el total. Sin preguntas.
            </p>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-[#2F2F2C]/12 text-center">
          <a
            href="https://wa.me/56964754219?text=Hola%2C%20necesito%20ayuda%20para%20elegir%20el%20plan%20perfecto%20para%20mi%20hijo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base text-[#2F2F2C] hover:text-[#B5522F] underline underline-offset-4 decoration-[#2F2F2C]/20 hover:decoration-[#C96342] transition-colors"
          >
            ¿Dudas? Escríbenos por WhatsApp →
          </a>
        </div>
      </div>
    </section>
  )
}
