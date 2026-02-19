"use client"

import { useState } from "react"
import { CheckCircle, Shield, Clock, ChevronDown, Sparkles } from "lucide-react"
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
  { code: "DO", name: "República Dominicana", timezone: "America/Santo_Domingo", flag: "🇩🇴" },
  { code: "UY", name: "Uruguay", timezone: "America/Montevideo", flag: "🇺🇾" },
  { code: "VE", name: "Venezuela", timezone: "America/Caracas", flag: "🇻🇪" },
  { code: "ES", name: "España", timezone: "Europe/Madrid", flag: "🇪🇸" },
  { code: "US", name: "Estados Unidos", timezone: "America/New_York", flag: "🇺🇸" },
  { code: "OTHER", name: "Otro", timezone: "America/Santiago", flag: "🌎" },
]

const AGE_RANGES = [
  { value: "8-10", label: "8-10 años" },
  { value: "11-14", label: "11-14 años" },
]

export function CalendlySection() {
  const [selectedCountry, setSelectedCountry] = useState<string>("CL")
  const [childAge, setChildAge] = useState<string>("")
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const selectedCountryData = LATIN_AMERICA_COUNTRIES.find((c) => c.code === selectedCountry)

  const handleBooking = async () => {
    if (!selectedCountryData || !childAge || !formData.name || !formData.whatsapp) return

    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const supabase = createClient()

      const { error: insertError } = await supabase.from("booking_leads").insert({
        first_name: formData.name,
        phone: formData.whatsapp,
        country_code: selectedCountry,
        country_name: selectedCountryData.name,
        timezone: selectedCountryData.timezone,
        child_age: childAge,
      })

      if (insertError) {
        console.error("Error saving lead:", insertError)
      }

      // Open Calendly with pre-filled data
      const calendlyUrl = new URL("https://calendly.com/innovakidslatam/reunion-informativa-innovakids")
      calendlyUrl.searchParams.set("name", formData.name)
      calendlyUrl.searchParams.set("a1", formData.whatsapp)
      calendlyUrl.searchParams.set("location", selectedCountryData.name)
      calendlyUrl.searchParams.set("hide_gdpr_banner", "1")
      calendlyUrl.searchParams.set("primary_color", "4dd0e1")

      // Use same tab to avoid popup blockers and perceived friction
      window.location.href = calendlyUrl.toString()
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Error desconocido")
    } finally {
      setIsSubmitting(false)
    }
  }

  const isFormValid = formData.name && formData.whatsapp && selectedCountry && childAge

  return (
    <section id="sesion-estrategica" className="bg-background py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#4DD0E1]/20 to-[#26C6DA]/20 border border-[#4DD0E1] rounded-full px-6 py-2.5 mb-6">
              <Sparkles className="w-5 h-5 text-[#4DD0E1]" />
              <span className="text-[#4DD0E1] font-semibold text-sm uppercase tracking-wide">
                Solo 30 segundos
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Agenda tu reunión
              <br />
              <span className="text-[#4DD0E1]">informativa gratis</span>
            </h2>

            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-8">
              <div className="flex flex-col items-center gap-2 bg-[#0f1f3a]/50 border border-[#4DD0E1]/20 rounded-xl p-4">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span className="text-xs font-medium text-gray-200">Evaluación</span>
              </div>
              <div className="flex flex-col items-center gap-2 bg-[#0f1f3a]/50 border border-[#4DD0E1]/20 rounded-xl p-4">
                <Clock className="w-6 h-6 text-[#4DD0E1]" />
                <span className="text-xs font-medium text-gray-200">20 min</span>
              </div>
              <div className="flex flex-col items-center gap-2 bg-[#0f1f3a]/50 border border-[#4DD0E1]/20 rounded-xl p-4">
                <Shield className="w-6 h-6 text-green-500" />
                <span className="text-xs font-medium text-gray-200">Sin compromiso</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <div className="space-y-6">
              {/* Campo 1: Nombre */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Tu nombre *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#4DD0E1] text-gray-800 font-medium"
                  placeholder="María García"
                />
              </div>

              {/* Campo 2: WhatsApp */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  WhatsApp (con código de país) *
                </label>
                <input
                  type="tel"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#4DD0E1] text-gray-800 font-medium"
                  placeholder="+56 9 1234 5678"
                />
              </div>

              {/* Campo 3: País */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  País *
                </label>
                <div className="relative">
                  <select
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    className="w-full px-4 py-3 pr-10 border-2 border-gray-200 rounded-lg appearance-none focus:outline-none focus:border-[#4DD0E1] text-gray-800 font-medium cursor-pointer"
                  >
                    {LATIN_AMERICA_COUNTRIES.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.flag} {country.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Campo 4: Edad del niño */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Edad de tu hijo/a *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {AGE_RANGES.map((age) => (
                    <button
                      key={age.value}
                      onClick={() => setChildAge(age.value)}
                      className={`px-4 py-3 rounded-lg border-2 transition-all font-medium ${childAge === age.value
                        ? "border-[#4DD0E1] bg-[#4DD0E1]/10 text-[#0a1628]"
                        : "border-gray-200 hover:border-[#4DD0E1]/50 text-gray-700"
                        }`}
                    >
                      {age.label}
                    </button>
                  ))}
                </div>
              </div>

              {submitError && (
                <div className="bg-red-50 border-2 border-red-500 rounded-lg p-4 text-center">
                  <p className="text-sm text-red-700">{submitError}</p>
                </div>
              )}

              <button
                onClick={handleBooking}
                disabled={!isFormValid || isSubmitting}
                className="w-full bg-gradient-to-r from-[#4DD0E1] to-[#26C6DA] hover:from-[#26C6DA] hover:to-[#4DD0E1] disabled:from-gray-300 disabled:to-gray-300 disabled:cursor-not-allowed text-[#0a1628] font-bold text-xl py-5 rounded-2xl transition-all shadow-lg hover:shadow-2xl hover:scale-[1.02] transform"
              >
                {isSubmitting ? (
                  "Abriendo calendario..."
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    Ver Horarios Disponibles →
                  </span>
                )}
              </button>

              <p className="text-center text-gray-500 text-sm">
                🔒 Tu información es confidencial y nunca será compartida
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

