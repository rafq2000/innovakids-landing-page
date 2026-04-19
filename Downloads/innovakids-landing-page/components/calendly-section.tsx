"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { createClient } from "@/lib/supabase/client"

const LATIN_AMERICA_COUNTRIES = [
  { code: "AR", name: "Argentina", timezone: "America/Argentina/Buenos_Aires", flag: "🇦🇷" },
  { code: "BO", name: "Bolivia", timezone: "America/La_Paz", flag: "🇧🇴" },
  { code: "BR", name: "Brasil", timezone: "America/Sao_Paulo", flag: "🇧🇷" },
  { code: "CL", name: "Chile", timezone: "America/Santiago", flag: "🇨🇱" },
  { code: "CO", name: "Colombia", timezone: "America/Bogota", flag: "🇨🇴" },
  { code: "CR", name: "Costa Rica", timezone: "America/Costa_Rica", flag: "🇨🇷" },
  { code: "EC", name: "Ecuador", timezone: "America/Guayaquil", flag: "🇪🇨" },
  { code: "GT", name: "Guatemala", timezone: "America/Guatemala", flag: "🇬🇹" },
  { code: "HN", name: "Honduras", timezone: "America/Tegucigalpa", flag: "🇭🇳" },
  { code: "MX", name: "México", timezone: "America/Mexico_City", flag: "🇲🇽" },
  { code: "NI", name: "Nicaragua", timezone: "America/Managua", flag: "🇳🇮" },
  { code: "PA", name: "Panamá", timezone: "America/Panama", flag: "🇵🇦" },
  { code: "PY", name: "Paraguay", timezone: "America/Asuncion", flag: "🇵🇾" },
  { code: "PE", name: "Perú", timezone: "America/Lima", flag: "🇵🇪" },
  { code: "DO", name: "Rep. Dominicana", timezone: "America/Santo_Domingo", flag: "🇩🇴" },
  { code: "UY", name: "Uruguay", timezone: "America/Montevideo", flag: "🇺🇾" },
  { code: "VE", name: "Venezuela", timezone: "America/Caracas", flag: "🇻🇪" },
  { code: "ES", name: "España", timezone: "Europe/Madrid", flag: "🇪🇸" },
  { code: "US", name: "Estados Unidos", timezone: "America/New_York", flag: "🇺🇸" },
  { code: "OTHER", name: "Otro", timezone: "America/Santiago", flag: "🌎" },
]

const AGE_RANGES = [
  { value: "8-10", label: "8–10 años" },
  { value: "11-14", label: "11–14 años" },
]

export function CalendlySection() {
  const [selectedCountry, setSelectedCountry] = useState<string>("CL")
  const [childAge, setChildAge] = useState<string>("")
  const [formData, setFormData] = useState({ name: "", whatsapp: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const countryData = LATIN_AMERICA_COUNTRIES.find((c) => c.code === selectedCountry)

  const handleBooking = async () => {
    if (!countryData || !childAge || !formData.name || !formData.whatsapp) return
    setIsSubmitting(true)
    setSubmitError(null)
    try {
      const supabase = createClient()
      await supabase.from("booking_leads").insert({
        first_name: formData.name,
        phone: formData.whatsapp,
        country_code: selectedCountry,
        country_name: countryData.name,
        timezone: countryData.timezone,
        child_age: childAge,
      })
      const url = new URL(
        "https://calendly.com/innovakidslatam/reunion-informativa-innovakids"
      )
      url.searchParams.set("name", formData.name)
      url.searchParams.set("a1", formData.whatsapp)
      url.searchParams.set("location", countryData.name)
      url.searchParams.set("hide_gdpr_banner", "1")
      url.searchParams.set("primary_color", "C96342")
      window.location.href = url.toString()
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Error desconocido")
    } finally {
      setIsSubmitting(false)
    }
  }

  const isValid = formData.name && formData.whatsapp && selectedCountry && childAge

  return (
    <section
      id="sesion-estrategica"
      className="bg-[#F5F1E8] text-[#2F2F2C] py-28 md:py-40 border-t border-[#2F2F2C]/10"
    >
      <div className="max-w-[1100px] mx-auto px-6 md:px-10">

        <div className="flex items-center gap-5 mb-20">
          <div className="h-px w-12 bg-[#C96342]" />
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold">
            Agenda una evaluación
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-10 md:gap-20 items-start">

          {/* Left: copy */}
          <div className="md:col-span-5 md:sticky md:top-28">
            <h2
              className="text-5xl sm:text-6xl md:text-7xl leading-[0.98] tracking-[-0.02em] font-normal mb-8"
              style={{ fontFamily: "'Charter', 'Georgia', serif" }}
            >
              Treinta minutos, <em className="italic text-[#C96342]">sin compromiso</em>.
            </h2>
            <p className="text-lg text-[#5A5751] leading-relaxed max-w-[40ch] mb-10">
              Conversamos contigo, evaluamos el nivel de tu hijo y resolvemos
              tus dudas. Si es un fit, reservamos su cupo. Si no, quedas con un
              diagnóstico claro.
            </p>

            <dl className="space-y-5 text-sm">
              {[
                ["Duración", "30 minutos"],
                ["Formato", "Videollamada"],
                ["Costo", "Gratis, sin compromiso"],
              ].map(([k, v]) => (
                <div key={k} className="flex items-baseline gap-6 border-b border-[#2F2F2C]/12 pb-4">
                  <dt className="text-[11px] uppercase tracking-[0.18em] text-[#C96342] font-semibold w-24 shrink-0">
                    {k}
                  </dt>
                  <dd
                    className="text-lg text-[#2F2F2C]"
                    style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                  >
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right: form */}
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleBooking()
            }}
            className="md:col-span-7 space-y-8"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-[11px] uppercase tracking-[0.18em] text-[#C96342] font-semibold mb-3"
              >
                Tu nombre
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-transparent border-0 border-b border-[#2F2F2C]/25 py-3 text-xl text-[#2F2F2C] placeholder:text-[#2F2F2C]/30 focus:outline-none focus:border-[#C96342] transition-colors"
                style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                placeholder="María García"
                required
              />
            </div>

            <div>
              <label
                htmlFor="whatsapp"
                className="block text-[11px] uppercase tracking-[0.18em] text-[#C96342] font-semibold mb-3"
              >
                WhatsApp (con código de país)
              </label>
              <input
                id="whatsapp"
                type="tel"
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                className="w-full bg-transparent border-0 border-b border-[#2F2F2C]/25 py-3 text-xl text-[#2F2F2C] placeholder:text-[#2F2F2C]/30 focus:outline-none focus:border-[#C96342] transition-colors"
                style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                placeholder="+56 9 1234 5678"
                required
              />
            </div>

            <div>
              <label
                htmlFor="country"
                className="block text-[11px] uppercase tracking-[0.18em] text-[#C96342] font-semibold mb-3"
              >
                País
              </label>
              <div className="relative">
                <select
                  id="country"
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="w-full appearance-none bg-transparent border-0 border-b border-[#2F2F2C]/25 py-3 pr-8 text-xl text-[#2F2F2C] focus:outline-none focus:border-[#C96342] transition-colors cursor-pointer"
                  style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                >
                  {LATIN_AMERICA_COUNTRIES.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.flag} {c.name}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-[#5A5751] pointer-events-none" />
              </div>
            </div>

            <div>
              <span className="block text-[11px] uppercase tracking-[0.18em] text-[#C96342] font-semibold mb-3">
                Edad de tu hijo/a
              </span>
              <div className="flex flex-wrap gap-3">
                {AGE_RANGES.map((age) => {
                  const active = childAge === age.value
                  return (
                    <button
                      key={age.value}
                      type="button"
                      onClick={() => setChildAge(age.value)}
                      className={`px-6 py-3 rounded-sm border transition-colors ${
                        active
                          ? "border-[#C96342] bg-[#C96342] text-[#FAF7EF]"
                          : "border-[#2F2F2C]/25 text-[#2F2F2C] hover:border-[#C96342] hover:text-[#C96342]"
                      }`}
                      style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                    >
                      {age.label}
                    </button>
                  )
                })}
              </div>
            </div>

            {submitError && (
              <p className="text-sm text-[#B91C1C] border-l-2 border-[#B91C1C] pl-4 py-1">
                {submitError}
              </p>
            )}

            <div className="pt-6">
              <button
                type="submit"
                disabled={!isValid || isSubmitting}
                className="inline-flex items-center bg-[#C96342] hover:bg-[#A8502F] disabled:bg-[#2F2F2C]/20 disabled:cursor-not-allowed text-[#FAF7EF] px-8 py-4 text-base font-semibold rounded-sm transition-colors"
              >
                {isSubmitting ? "Abriendo calendario…" : "Ver horarios disponibles →"}
              </button>
              <p className="text-xs text-[#5A5751] mt-4">
                Tu información es confidencial y nunca será compartida.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
