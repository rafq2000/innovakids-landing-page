"use client"

import { useState } from "react"
import { Lock, Loader2, Download, RefreshCw } from "lucide-react"

type ScheduleEntry = {
  id: string
  parent_name: string
  parent_email: string
  whatsapp: string
  student_name: string
  student_age: number
  country: string
  timezone: string
  cohort: string
  schedule: Record<string, string[]>
  updated_at: string
}

const DAY_LABELS: Record<string, string> = {
  lunes: "Lun",
  martes: "Mar",
  miercoles: "Mié",
  jueves: "Jue",
  viernes: "Vie",
}

export default function AdminHorariosPage() {
  const [password, setPassword] = useState("")
  const [authenticated, setAuthenticated] = useState(false)
  const [data, setData] = useState<ScheduleEntry[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [savedPassword, setSavedPassword] = useState("")

  const fetchData = async (pw?: string) => {
    const pass = pw || savedPassword
    setLoading(true)
    setError("")

    try {
      const res = await fetch("/api/admin/horarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: pass }),
      })

      const json = await res.json()

      if (!res.ok) {
        throw new Error(json.error || "Error al cargar")
      }

      setData(json.data || [])
      setAuthenticated(true)
      setSavedPassword(pass)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    fetchData(password)
  }

  const exportCSV = () => {
    const headers = [
      "Padre/Madre",
      "Email",
      "WhatsApp",
      "Alumno/a",
      "Edad",
      "País",
      "Zona horaria",
      "Cohorte",
      "Horarios",
      "Fecha registro",
    ]

    const rows = data.map((d) => {
      const scheduleStr = Object.entries(d.schedule || {})
        .filter(([, slots]) => slots.length > 0)
        .map(([day, slots]) => `${DAY_LABELS[day] || day}: ${slots.join(", ")}`)
        .join(" | ")

      return [
        d.parent_name,
        d.parent_email,
        d.whatsapp,
        d.student_name,
        d.student_age,
        d.country,
        d.timezone,
        d.cohort,
        scheduleStr,
        new Date(d.updated_at).toLocaleString("es-CL"),
      ]
        .map((v) => `"${String(v).replace(/"/g, '""')}"`)
        .join(",")
    })

    const csv = [headers.join(","), ...rows].join("\n")
    const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `horarios_innovakids_${new Date().toISOString().slice(0, 10)}.csv`
    a.click()
    URL.revokeObjectURL(url)
  }

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <form onSubmit={handleLogin} className="bg-white rounded-xl shadow-lg p-8 w-full max-w-sm">
          <div className="flex items-center justify-center w-14 h-14 bg-gray-100 rounded-full mx-auto mb-6">
            <Lock className="w-6 h-6 text-gray-600" />
          </div>
          <h1 className="text-xl font-bold text-center mb-2">Admin - Horarios</h1>
          <p className="text-sm text-gray-500 text-center mb-6">Ingresa la contraseña para continuar</p>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
            className="w-full border rounded-lg px-4 py-3 text-sm mb-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            autoFocus
          />

          {error && <p className="text-sm text-red-600 mb-4">{error}</p>}

          <button
            type="submit"
            disabled={loading || !password}
            className="w-full bg-gray-900 text-white rounded-lg py-3 text-sm font-semibold hover:bg-gray-800 disabled:bg-gray-300 transition-colors"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin mx-auto" /> : "Entrar"}
          </button>
        </form>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold">Horarios registrados</h1>
            <p className="text-sm text-gray-500">{data.length} registro(s)</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => fetchData()}
              className="inline-flex items-center gap-2 text-sm border rounded-lg px-4 py-2 hover:bg-gray-50 transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              Actualizar
            </button>
            <button
              onClick={exportCSV}
              className="inline-flex items-center gap-2 text-sm bg-green-600 text-white rounded-lg px-4 py-2 hover:bg-green-700 transition-colors"
            >
              <Download className="w-4 h-4" />
              Exportar CSV
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        {data.length === 0 ? (
          <div className="bg-white rounded-xl border p-12 text-center">
            <p className="text-gray-500">No hay registros de horarios todavía.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {data.map((entry) => (
              <div key={entry.id || entry.parent_email} className="bg-white rounded-xl border p-5">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Padre/Madre</p>
                    <p className="font-medium">{entry.parent_name}</p>
                    <p className="text-sm text-gray-500">{entry.parent_email}</p>
                    <a
                      href={`https://wa.me/${entry.whatsapp?.replace(/[^0-9]/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-green-600 hover:underline"
                    >
                      {entry.whatsapp}
                    </a>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Alumno/a</p>
                    <p className="font-medium">{entry.student_name}</p>
                    <p className="text-sm text-gray-500">{entry.student_age} años</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">País / Zona</p>
                    <p className="font-medium">{entry.country}</p>
                    <p className="text-sm text-gray-500">{entry.timezone}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Cohorte</p>
                    <p className="font-medium">{entry.cohort === "mayo-2026" ? "Junio 2026" : "Posterior"}</p>
                    <p className="text-sm text-gray-500">
                      {new Date(entry.updated_at).toLocaleDateString("es-CL", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>

                {entry.schedule && Object.keys(entry.schedule).length > 0 && (
                  <div className="border-t pt-4">
                    <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-2">
                      Disponibilidad (hora Chile UTC-4)
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {Object.entries(entry.schedule)
                        .filter(([, slots]) => Array.isArray(slots) && slots.length > 0)
                        .map(([day, slots]) => (
                          <div key={day} className="bg-blue-50 border border-blue-200 rounded-lg px-3 py-2">
                            <p className="text-xs font-bold text-blue-800 mb-1">{DAY_LABELS[day] || day}</p>
                            <div className="flex flex-wrap gap-1">
                              {(slots as string[]).map((slot) => (
                                <span
                                  key={slot}
                                  className="text-xs bg-blue-100 text-blue-700 rounded px-2 py-0.5"
                                >
                                  {slot}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
