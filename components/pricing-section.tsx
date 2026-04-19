import type { CountryConfig } from "@/lib/countries-config"

interface PricingSectionProps {
  country?: CountryConfig
}

export function PricingSection({ country }: PricingSectionProps) {
  const formatPrice = (amount: number) => {
    if (!country) return `$${amount}`
    if (country.currency === "USD" || country.currency === "EUR") {
      return `${country.currencySymbol}${amount}`
    }
    const rate = country.priceLocal / 297
    const local = Math.round((amount * rate) / 100) * 100
    return `${country.currencySymbol}${local.toLocaleString()}`
  }

  const currencyCode = country?.currency ?? "USD"
  const price = formatPrice(297)

  const features = [
    "10 clases en vivo, grupos máximo 5 niños",
    "Certificado digital Vibe Explorer",
    "Acceso a 15+ herramientas de IA premium",
    "Soporte 24/7 por Discord y WhatsApp",
    "Requisito de acceso a las 4 especialidades",
  ]

  return (
    <section
      id="inversion"
      className="bg-[#F5F1E8] text-[#2F2F2C] py-28 md:py-40 border-t border-[#2F2F2C]/10"
    >
      <div className="max-w-[1100px] mx-auto px-6 md:px-10">

        <div className="flex items-center gap-5 mb-20">
          <div className="h-px w-12 bg-[#C96342]" />
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold">
            Inversión · Cohorte 2026
          </p>
        </div>

        <h2
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[88px] leading-[0.98] tracking-[-0.02em] font-normal mb-8 max-w-[14ch]"
          style={{ fontFamily: "'Charter', 'Georgia', serif" }}
        >
          Un fundamento, una <em className="italic text-[#C96342]">cifra</em>.
        </h2>

        <p className="text-lg md:text-xl text-[#5A5751] max-w-[52ch] leading-relaxed mb-24">
          No manejamos planes complejos. Todos comienzan por el mismo módulo
          obligatorio; después eligen especialidad cuando estén listos.
        </p>

        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          {/* Left: the offer */}
          <div className="md:col-span-5">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold mb-5">
              Nivel 01 · Vibe Explorer
            </p>
            <h3
              className="text-4xl md:text-5xl leading-[1.05] tracking-tight mb-8 font-normal"
              style={{ fontFamily: "'Charter', 'Georgia', serif" }}
            >
              El fundamento obligatorio para dominar la IA.
            </h3>
            <div className="flex items-baseline gap-3 mb-4">
              <span
                className="text-7xl md:text-[88px] leading-none font-normal text-[#2F2F2C]"
                style={{ fontFamily: "'Charter', 'Georgia', serif" }}
              >
                {price}
              </span>
              <span className="text-base text-[#5A5751] uppercase tracking-widest">
                {currencyCode}
              </span>
            </div>
            <p className="text-sm text-[#5A5751] mb-10">
              Pago único. Sin mensualidades. Sin letra chica.
            </p>

            <a
              href="/pagar?option=explorer"
              className="inline-flex items-center justify-center bg-[#C96342] hover:bg-[#A8502F] text-[#FAF7EF] px-8 py-4 text-base font-semibold rounded-sm transition-colors"
            >
              Inscribir a mi hijo
            </a>
          </div>

          {/* Right: what's included */}
          <div className="md:col-span-7 md:pl-8 md:border-l border-[#2F2F2C]/12">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold mb-8">
              Qué incluye
            </p>
            <ul className="divide-y divide-[#2F2F2C]/12">
              {features.map((f, i) => (
                <li key={i} className="py-5 flex items-baseline gap-6">
                  <span className="text-xs text-[#C96342] font-semibold tabular-nums shrink-0 w-6">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="text-base md:text-lg text-[#2F2F2C] leading-snug"
                    style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                  >
                    {f}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Guarantee */}
        <div className="mt-24 pt-12 border-t border-[#2F2F2C]/12 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold">
              Garantía
            </p>
          </div>
          <div className="md:col-span-8">
            <p
              className="text-2xl md:text-3xl leading-tight tracking-tight mb-4"
              style={{ fontFamily: "'Charter', 'Georgia', serif" }}
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
            className="text-base text-[#2F2F2C] hover:text-[#C96342] underline underline-offset-4 decoration-[#2F2F2C]/20 hover:decoration-[#C96342] transition-colors"
          >
            ¿Dudas? Escríbenos por WhatsApp →
          </a>
        </div>
      </div>
    </section>
  )
}
