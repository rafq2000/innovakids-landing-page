"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle, Clock, Loader2 } from "lucide-react"

const COUNTRIES = [
  { id: "CL", label: "Chile", utc: "UTC-4" },
  { id: "AR", label: "Argentina", utc: "UTC-3" },
  { id: "CO", label: "Colombia", utc: "UTC-5" },
  { id: "MX", label: "México", utc: "UTC-6" },
  { id: "PE", label: "Perú", utc: "UTC-5" },
  { id: "EC", label: "Ecuador", utc: "UTC-5" },
  { id: "BO", label: "Bolivia", utc: "UTC-4" },
  { id: "PY", label: "Paraguay", utc: "UTC-4" },
  { id: "UY", label: "Uruguay", utc: "UTC-3" },
  { id: "VE", label: "Venezuela", utc: "UTC-4" },
  { id: "CR", label: "Costa Rica", utc: "UTC-6" },
  { id: "PA", label: "Panamá", utc: "UTC-5" },
  { id: "GT", label: "Guatemala", utc: "UTC-6" },
  { id: "SV", label: "El Salvador", utc: "UTC-6" },
  { id: "HN", label: "Honduras", utc: "UTC-6" },
  { id: "NI", label: "Nicaragua", utc: "UTC-6" },
  { id: "DO", label: "Rep. Dominicana", utc: "UTC-4" },
  { id: "PR", label: "Puerto Rico", utc: "UTC-4" },
  { id: "US", label: "Estados Unidos (Este)", utc: "UTC-5" },
  { id: "US-W", label: "Estados Unidos (Oeste)", utc: "UTC-8" },
  { id: "ES", label: "España", utc: "UTC+2" },
  { id: "BR", label: "Brasil", utc: "UTC-3" },
]

const DAYS = [
  { id: "lunes", label: "Lunes" },
  { id: "martes", label: "Martes" },
  { id: "miercoles", label: "Miércoles" },
  { id: "jueves", label: "Jueves" },
  { id: "viernes", label: "Viernes" },
]

// Horarios base en hora Chile (UTC-4): 10:00 a 21:00
const CHILE_SLOTS = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
const CHILE_UTC = -4

function parseUtcOffset(utc: string): number {
  const match = utc.match(/UTC([+-]\d+)/)
  return match ? parseInt(match[1]) : -4
}

function formatHour(h: number): string {
  const normalized = ((h % 24) + 24) % 24
  return `${String(normalized).padStart(2, "0")}:00`
}

function getLocalSlots(countryUtc: string) {
  const offset = parseUtcOffset(countryUtc)
  const diff = offset - CHILE_UTC
  return CHILE_SLOTS.map((chileHour) => {
    const localHour = ((chileHour + diff) % 24 + 24) % 24
    const localEnd = ((chileHour + 1 + diff) % 24 + 24) % 24
    return {
      id: `${formatHour(chileHour)}-${formatHour(chileHour + 1)}`,
      label: `${formatHour(localHour)} - ${formatHour(localEnd)}`,
    }
  })
}

type Schedule = Record<string, string[]>

function HorariosForm() {
  const searchParams = useSearchParams()
  const emailParam = searchParams.get("email") || ""
  const studentParam = searchParams.get("student") || ""

  const [parentName, setParentName] = useState("")
  const [email, setEmail] = useState(emailParam)
  const [whatsapp, setWhatsapp] = useState("")
  const [studentName, setStudentName] = useState(studentParam)
  const [studentAge, setStudentAge] = useState("")
  const [country, setCountry] = useState("")
  const [cohort, setCohort] = useState<"mayo-2026" | "posterior">("mayo-2026")
  const [schedule, setSchedule] = useState<Schedule>({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const selectedCountry = COUNTRIES.find((c) => c.id === country)
  const localSlots = selectedCountry ? getLocalSlots(selectedCountry.utc) : []

  const toggleSlot = (day: string, slot: string) => {
    setSchedule((prev) => {
      const daySlots = prev[day] || []
      if (daySlots.includes(slot)) {
        return { ...prev, [day]: daySlots.filter((s) => s !== slot) }
      }
      return { ...prev, [day]: [...daySlots, slot] }
    })
  }

  const selectedDays = Object.entries(schedule).filter(([, slots]) => slots.length >= 2)
  const formComplete = parentName && email && whatsapp && studentName && studentAge && country
  const isValid = formComplete && (cohort === "posterior" || selectedDays.length >= 3)

  const handleSubmit = async () => {
    if (!isValid) return
    setLoading(true)
    setError("")

    try {
      const res = await fetch("/api/schedule", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          parentName,
          email,
          whatsapp,
          studentName,
          studentAge: parseInt(studentAge),
          country,
          timezone: selectedCountry?.utc || "UTC-4",
          cohort,
          schedule: cohort === "posterior" ? {} : schedule,
        }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || "Error al guardar")
      }

      setSuccess(true)
    } catch (err: any) {
      setError(err.message || "Error al guardar los horarios. Intenta de nuevo.")
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="text-center py-16">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h2 className="text-3xl font-bold mb-4">¡Listo! Recibimos tus horarios</h2>
        <p className="text-lg text-muted-foreground max-w-md mx-auto mb-6">
          Con tu disponibilidad, te asignaremos al grupo que mejor se ajuste. Te confirmaremos el día y hora exacta de sus 2 clases semanales por email y WhatsApp.
        </p>
        <p className="text-sm text-muted-foreground">
          Cualquier duda, escríbenos al{" "}
          <a href="https://wa.me/56922450492" className="text-primary font-semibold underline">
            +56 9 2245 0492
          </a>
        </p>
      </div>
    )
  }

  return (
    <div>
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/30 px-4 py-2 rounded-full text-sm font-semibold mb-5">
          <Clock className="w-4 h-4" />
          Paso obligatorio después del pago
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance leading-tight">
          Elige los horarios para las clases de tu hijo/a
        </h1>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
          Tu hijo/a tendrá <strong className="text-foreground">2 clases por semana</strong>. Para asignarlo al mejor grupo, necesitamos que marques tu disponibilidad: <strong className="text-foreground">mínimo 3 días</strong> con{" "}
          <strong className="text-foreground">al menos 2 franjas horarias por día</strong>.
        </p>
      </div>

      {/* Datos del padre/madre */}
      <div className="bg-card border rounded-xl p-5 md:p-6 mb-6">
        <h3 className="font-semibold text-lg mb-4">Datos del padre/madre</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="parentName" className="block text-sm font-semibold mb-2">Nombre completo</label>
            <input
              id="parentName"
              type="text"
              value={parentName}
              onChange={(e) => setParentName(e.target.value)}
              placeholder="Nombre y apellido del padre/madre"
              className="w-full border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="parentEmail" className="block text-sm font-semibold mb-2">Email</label>
            <input
              id="parentEmail"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              className="w-full border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="whatsapp" className="block text-sm font-semibold mb-2">WhatsApp (con código de país)</label>
            <input
              id="whatsapp"
              type="tel"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              placeholder={selectedCountry ? (
                country === "MX" ? "+52 55 1234 5678" :
                country === "AR" ? "+54 11 1234 5678" :
                country === "CO" ? "+57 300 123 4567" :
                country === "ES" ? "+34 612 345 678" :
                country === "PE" ? "+51 912 345 678" :
                country === "BR" ? "+55 11 91234 5678" :
                country === "US" || country === "US-W" ? "+1 555 123 4567" :
                "+56 9 1234 5678"
              ) : "+56 9 1234 5678"}
              className="w-full border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none"
              required
            />
          </div>
        </div>
      </div>

      {/* Datos del estudiante */}
      <div className="bg-card border rounded-xl p-5 md:p-6 mb-6">
        <h3 className="font-semibold text-lg mb-4">Datos del estudiante</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="studentName" className="block text-sm font-semibold mb-2">Nombre completo del alumno/a</label>
            <input
              id="studentName"
              type="text"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              placeholder="Nombre y apellido"
              className="w-full border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="studentAge" className="block text-sm font-semibold mb-2">Edad</label>
            <select
              id="studentAge"
              value={studentAge}
              onChange={(e) => setStudentAge(e.target.value)}
              className="w-full border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none bg-background"
              required
            >
              <option value="">Selecciona la edad</option>
              {[8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map((age) => (
                <option key={age} value={age}>
                  {age} años
                </option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="country" className="block text-sm font-semibold mb-2">País de residencia</label>
            <select
              id="country"
              value={country}
              onChange={(e) => { setCountry(e.target.value); setSchedule({}) }}
              className="w-full border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none bg-background"
              required
            >
              <option value="">Selecciona tu país</option>
              {COUNTRIES.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.label} ({c.utc})
                </option>
              ))}
            </select>
            {selectedCountry && (
              <p className="text-xs text-muted-foreground mt-1">
                Zona horaria: <strong>{selectedCountry.utc}</strong>
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Seleccion de cohorte */}
      <div className="bg-card border rounded-xl p-5 md:p-6 mb-6">
        <h3 className="font-semibold text-lg mb-4">Curso al que te inscribes</h3>
        <div className="grid sm:grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setCohort("mayo-2026")}
            className={`p-4 rounded-lg border-2 text-left transition-all ${
              cohort === "mayo-2026"
                ? "border-primary bg-primary/5"
                : "border-border hover:border-primary/30"
            }`}
          >
            <p className="font-semibold">Cohorte Junio 2026</p>
            <p className="text-sm text-muted-foreground">Inicio: semana del 29 de junio</p>
          </button>
          <button
            type="button"
            onClick={() => setCohort("posterior")}
            className={`p-4 rounded-lg border-2 text-left transition-all ${
              cohort === "posterior"
                ? "border-primary bg-primary/5"
                : "border-border hover:border-primary/30"
            }`}
          >
            <p className="font-semibold">Curso posterior</p>
            <p className="text-sm text-muted-foreground">Sin fecha definida aún</p>
          </button>
        </div>
      </div>

      {/* Schedule section - only for mayo-2026 */}
      {cohort === "posterior" && formComplete && (
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6 text-center">
          <p className="text-blue-800 font-medium">
            Cuando se defina la fecha del próximo curso, te contactaremos para elegir horarios.
          </p>
        </div>
      )}

      {/* Validation indicator */}
      {formComplete && cohort === "mayo-2026" && (
        <div className="bg-card border rounded-xl p-4 mb-6">
          <div className="flex items-center gap-3 text-sm">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                selectedDays.length >= 3
                  ? "bg-green-100 text-green-700"
                  : "bg-orange-100 text-orange-700"
              }`}
            >
              {selectedDays.length}/3
            </div>
            <span className="text-muted-foreground">
              {selectedDays.length >= 3 ? (
                <span className="text-green-700 font-semibold">
                  ¡Perfecto! Ya puedes confirmar tus horarios.
                </span>
              ) : (
                <>
                  Te faltan <strong>{3 - selectedDays.length}</strong> día(s). Marca al menos 2 franjas horarias en cada día.
                </>
              )}
            </span>
          </div>
        </div>
      )}

      {/* Schedule grid */}
      {cohort === "mayo-2026" && !country && (
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6 text-center">
          <p className="text-sm text-amber-800 font-medium">
            Selecciona tu país arriba para ver los horarios disponibles en tu zona horaria.
          </p>
        </div>
      )}
      {cohort === "mayo-2026" && country && <div className="space-y-4 mb-8">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-2">
          <p className="text-sm text-blue-800 font-medium">
            Los horarios se muestran en <strong>hora de {selectedCountry?.label} ({selectedCountry?.utc})</strong>.
          </p>
        </div>
        {DAYS.map((day) => {
          const daySlots = schedule[day.id] || []
          const isComplete = daySlots.length >= 2
          return (
            <div
              key={day.id}
              className={`bg-card border rounded-xl p-5 transition-colors ${
                isComplete ? "border-green-300 bg-green-50/50" : ""
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-lg">{day.label}</h3>
                <span
                  className={`text-xs px-2 py-1 rounded-full font-medium ${
                    daySlots.length === 0
                      ? "bg-muted text-muted-foreground"
                      : isComplete
                        ? "bg-green-100 text-green-700"
                        : "bg-orange-100 text-orange-700"
                  }`}
                >
                  {daySlots.length} horario{daySlots.length !== 1 ? "s" : ""}
                  {daySlots.length > 0 && !isComplete && " (min. 2)"}
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-2">
                {localSlots.map((slot) => {
                  const selected = daySlots.includes(slot.id)
                  return (
                    <button
                      key={slot.id}
                      type="button"
                      onClick={() => toggleSlot(day.id, slot.id)}
                      aria-pressed={selected}
                      aria-label={`${day.label} ${slot.label}`}
                      className={`text-xs py-3 px-2 rounded-lg border transition-all font-medium ${
                        selected
                          ? "bg-primary text-primary-foreground border-primary shadow-sm"
                          : "bg-background border-border hover:border-primary/50 hover:bg-primary/5"
                      }`}
                    >
                      {slot.label}
                    </button>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>}

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
          {error}
        </div>
      )}

      <Button
        onClick={handleSubmit}
        disabled={!isValid || loading}
        className="w-full h-14 text-lg font-bold"
        size="lg"
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Guardando...
          </>
        ) : (
          "Confirmar mis horarios"
        )}
      </Button>

      {!isValid && formComplete && cohort === "mayo-2026" && (
        <p className="text-center text-sm text-orange-600 mt-3">
          Faltan horarios: marca al menos 3 días con 2 franjas cada uno para que podamos asignarte grupo.
        </p>
      )}

      {!formComplete && (
        <p className="text-center text-sm text-muted-foreground mt-3">
          Completa todos los campos de arriba para continuar.
        </p>
      )}
    </div>
  )
}

export default function MisHorariosPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-3xl mx-auto">
            <Suspense fallback={<div className="text-center py-20">Cargando...</div>}>
              <HorariosForm />
            </Suspense>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
