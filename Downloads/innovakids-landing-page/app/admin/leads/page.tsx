"use client"

import { useState, useMemo } from "react"
import {
  Lock,
  Loader2,
  Download,
  RefreshCw,
  Users,
  CreditCard,
  Calendar,
  Clock,
  AlertTriangle,
  CheckCircle,
  Search,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  MessageCircle,
} from "lucide-react"

// ── Types ──────────────────────────────────────────────────────────
type BookingLead = {
  id: string
  first_name: string
  phone: string
  country_code: string
  country_name: string
  child_age: string
  created_at: string
}

type Enrollment = {
  id: string
  student_name: string
  parent_email: string
  payment_method: string
  amount: number
  payment_id: string | null
  payment_option: string | null
  is_partial_payment: boolean
  remaining_paid: boolean
  remaining_paid_at: string | null
  welcome_email_sent: boolean
  welcome_email_sent_at: string | null
  schedule_submitted: boolean
  schedule_submitted_at: string | null
  payment_reminder_count: number | null
  payment_reminder_last_at: string | null
  schedule_reminder_count: number | null
  schedule_reminder_last_at: string | null
  created_at: string
}

type SchedulePref = {
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

type WaitlistEntry = {
  id: string
  first_name: string
  last_name: string
  email: string
  phone: string | null
  country_code: string | null
  course_name: string
  child_age: string | null
  created_at: string
}

type DashboardData = {
  booking_leads: BookingLead[]
  enrollments: Enrollment[]
  schedule_preferences: SchedulePref[]
  course_waitlist: WaitlistEntry[]
}

type Tab = "pipeline" | "leads" | "enrollments" | "waitlist"

// ── Helpers ────────────────────────────────────────────────────────
function formatDate(d: string | null) {
  if (!d) return "-"
  return new Date(d).toLocaleDateString("es-CL", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  })
}

function whatsappLink(phone: string) {
  return `https://wa.me/${phone.replace(/[^0-9]/g, "")}`
}

function Badge({ color, children }: { color: string; children: React.ReactNode }) {
  const colors: Record<string, string> = {
    green: "bg-green-100 text-green-800",
    yellow: "bg-yellow-100 text-yellow-800",
    red: "bg-red-100 text-red-800",
    blue: "bg-blue-100 text-blue-800",
    gray: "bg-gray-100 text-gray-600",
    orange: "bg-orange-100 text-orange-800",
  }
  return (
    <span className={`inline-flex items-center text-[11px] font-semibold px-2 py-0.5 rounded-full ${colors[color] || colors.gray}`}>
      {children}
    </span>
  )
}

// ── Pipeline logic ─────────────────────────────────────────────────
type PipelineStage = "lead" | "partial_payment" | "pending_remaining" | "paid" | "schedule_done" | "ready"

function getStage(enrollment: Enrollment, hasSchedule: boolean): PipelineStage {
  if (hasSchedule && !enrollment.is_partial_payment) return "ready"
  if (hasSchedule && enrollment.is_partial_payment && enrollment.remaining_paid) return "ready"
  if (hasSchedule) return "schedule_done"
  if (!enrollment.is_partial_payment) return "paid"
  if (enrollment.is_partial_payment && enrollment.remaining_paid) return "paid"
  if (enrollment.is_partial_payment && !enrollment.remaining_paid) return "pending_remaining"
  return "partial_payment"
}

const STAGE_CONFIG: Record<PipelineStage, { label: string; color: string; icon: typeof CheckCircle }> = {
  lead: { label: "Lead", color: "gray", icon: Users },
  partial_payment: { label: "Reserva $27", color: "yellow", icon: CreditCard },
  pending_remaining: { label: "Falta pago", color: "red", icon: AlertTriangle },
  paid: { label: "Pagado", color: "blue", icon: CreditCard },
  schedule_done: { label: "Horarios OK", color: "orange", icon: Calendar },
  ready: { label: "Listo", color: "green", icon: CheckCircle },
}

// ── Component ──────────────────────────────────────────────────────
export default function AdminLeadsPage() {
  const [password, setPassword] = useState("")
  const [authenticated, setAuthenticated] = useState(false)
  const [data, setData] = useState<DashboardData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [savedPassword, setSavedPassword] = useState("")
  const [activeTab, setActiveTab] = useState<Tab>("pipeline")
  const [search, setSearch] = useState("")
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set())

  const fetchData = async (pw?: string) => {
    const pass = pw || savedPassword
    setLoading(true)
    setError("")
    try {
      const res = await fetch("/api/admin/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: pass }),
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json.error || "Error al cargar")
      setData(json)
      setAuthenticated(true)
      setSavedPassword(pass)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const toggleRow = (id: string) => {
    setExpandedRows((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  // ── Computed data ────────────────────────────────────────────────
  const scheduleEmails = useMemo(() => {
    if (!data) return new Set<string>()
    return new Set(data.schedule_preferences.map((s) => s.parent_email))
  }, [data])

  const pipeline = useMemo(() => {
    if (!data) return []
    return data.enrollments.map((e) => ({
      ...e,
      stage: getStage(e, scheduleEmails.has(e.parent_email)),
      schedule: data.schedule_preferences.find((s) => s.parent_email === e.parent_email),
    }))
  }, [data, scheduleEmails])

  const filteredPipeline = useMemo(() => {
    if (!search) return pipeline
    const q = search.toLowerCase()
    return pipeline.filter(
      (e) =>
        e.student_name.toLowerCase().includes(q) ||
        e.parent_email.toLowerCase().includes(q) ||
        e.payment_method.toLowerCase().includes(q)
    )
  }, [pipeline, search])

  const stats = useMemo(() => {
    if (!data) return null
    const totalRevenue = data.enrollments.reduce((sum, e) => sum + (e.amount || 0), 0)
    const stages = pipeline.reduce(
      (acc, e) => {
        acc[e.stage] = (acc[e.stage] || 0) + 1
        return acc
      },
      {} as Record<string, number>
    )
    return {
      totalLeads: data.booking_leads.length,
      totalEnrollments: data.enrollments.length,
      totalRevenue,
      totalWaitlist: data.course_waitlist.length,
      stages,
    }
  }, [data, pipeline])

  // ── Export CSV ───────────────────────────────────────────────────
  const exportCSV = () => {
    if (!data) return
    const headers = [
      "Etapa",
      "Alumno",
      "Email",
      "Metodo Pago",
      "Monto",
      "Pago Parcial",
      "Restante Pagado",
      "Email Bienvenida",
      "Horarios",
      "Reminders Pago",
      "Reminders Horario",
      "Fecha",
    ]
    const rows = pipeline.map((e) =>
      [
        STAGE_CONFIG[e.stage].label,
        e.student_name,
        e.parent_email,
        e.payment_method,
        e.amount,
        e.is_partial_payment ? "Si" : "No",
        e.remaining_paid ? "Si" : "No",
        e.welcome_email_sent ? "Si" : "No",
        e.schedule ? "Si" : "No",
        e.payment_reminder_count || 0,
        e.schedule_reminder_count || 0,
        new Date(e.created_at).toLocaleString("es-CL"),
      ]
        .map((v) => `"${String(v).replace(/"/g, '""')}"`)
        .join(",")
    )
    const csv = [headers.join(","), ...rows].join("\n")
    const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `leads_innovakids_${new Date().toISOString().slice(0, 10)}.csv`
    a.click()
    URL.revokeObjectURL(url)
  }

  // ── Login ───────────────────────────────────────────────────────
  if (!authenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            fetchData(password)
          }}
          className="bg-white rounded-xl shadow-lg p-8 w-full max-w-sm"
        >
          <div className="flex items-center justify-center w-14 h-14 bg-gray-100 rounded-full mx-auto mb-6">
            <Lock className="w-6 h-6 text-gray-600" />
          </div>
          <h1 className="text-xl font-bold text-center mb-2">Dashboard de Leads</h1>
          <p className="text-sm text-gray-500 text-center mb-6">Ingresa la contraseña para continuar</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contrasena"
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

  if (!data || !stats) return null

  // ── Dashboard ───────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b px-4 md:px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <h1 className="text-xl font-bold">Dashboard de Leads</h1>
            <p className="text-sm text-gray-500">
              {stats.totalEnrollments} inscritos · ${stats.totalRevenue.toLocaleString()} USD recaudado
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => fetchData()}
              disabled={loading}
              className="inline-flex items-center gap-2 text-sm border rounded-lg px-3 py-2 hover:bg-gray-50 transition-colors"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
              Actualizar
            </button>
            <button
              onClick={exportCSV}
              className="inline-flex items-center gap-2 text-sm bg-green-600 text-white rounded-lg px-3 py-2 hover:bg-green-700 transition-colors"
            >
              <Download className="w-4 h-4" />
              CSV
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4 md:p-6 space-y-6">
        {/* KPI Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          <div className="bg-white rounded-xl border p-4">
            <div className="flex items-center gap-2 text-gray-500 mb-1">
              <Users className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">Leads</span>
            </div>
            <p className="text-2xl font-bold">{stats.totalLeads}</p>
            <p className="text-xs text-gray-400">Reuniones agendadas</p>
          </div>
          <div className="bg-white rounded-xl border p-4">
            <div className="flex items-center gap-2 text-gray-500 mb-1">
              <CreditCard className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">Inscritos</span>
            </div>
            <p className="text-2xl font-bold">{stats.totalEnrollments}</p>
            <p className="text-xs text-gray-400">${stats.totalRevenue.toLocaleString()} USD</p>
          </div>
          <div className="bg-white rounded-xl border p-4">
            <div className="flex items-center gap-2 text-gray-500 mb-1">
              <Calendar className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">Horarios</span>
            </div>
            <p className="text-2xl font-bold">{data.schedule_preferences.length}</p>
            <p className="text-xs text-gray-400">Formularios completados</p>
          </div>
          <div className="bg-white rounded-xl border p-4">
            <div className="flex items-center gap-2 text-gray-500 mb-1">
              <Clock className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">Waitlist</span>
            </div>
            <p className="text-2xl font-bold">{stats.totalWaitlist}</p>
            <p className="text-xs text-gray-400">Esperando cupo</p>
          </div>
        </div>

        {/* Pipeline funnel */}
        <div className="bg-white rounded-xl border p-4 md:p-5">
          <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">Pipeline</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
            {(Object.keys(STAGE_CONFIG) as PipelineStage[]).map((stage) => {
              const config = STAGE_CONFIG[stage]
              const count = stats.stages[stage] || 0
              const Icon = config.icon
              return (
                <div
                  key={stage}
                  className={`rounded-lg p-3 text-center border ${
                    count > 0 ? "border-gray-200" : "border-dashed border-gray-200"
                  }`}
                >
                  <Icon className="w-5 h-5 mx-auto mb-1 text-gray-400" />
                  <p className="text-2xl font-bold">{count}</p>
                  <Badge color={config.color}>{config.label}</Badge>
                </div>
              )
            })}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 bg-gray-100 rounded-lg p-1">
          {([
            { id: "pipeline" as Tab, label: "Pipeline", count: stats.totalEnrollments },
            { id: "leads" as Tab, label: "Leads", count: stats.totalLeads },
            { id: "enrollments" as Tab, label: "Pagos", count: stats.totalEnrollments },
            { id: "waitlist" as Tab, label: "Waitlist", count: stats.totalWaitlist },
          ]).map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 text-sm py-2 px-3 rounded-md font-medium transition-colors ${
                activeTab === tab.id ? "bg-white shadow-sm text-gray-900" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.label}
              <span className="ml-1 text-xs text-gray-400">({tab.count})</span>
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar por nombre, email..."
            className="w-full border rounded-lg pl-10 pr-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
        </div>

        {/* Pipeline tab */}
        {activeTab === "pipeline" && (
          <div className="space-y-2">
            {filteredPipeline.length === 0 ? (
              <div className="bg-white rounded-xl border p-12 text-center">
                <p className="text-gray-500">No hay inscripciones.</p>
              </div>
            ) : (
              filteredPipeline.map((e) => {
                const config = STAGE_CONFIG[e.stage]
                const expanded = expandedRows.has(e.id)
                return (
                  <div key={e.id} className="bg-white rounded-xl border overflow-hidden">
                    <button
                      onClick={() => toggleRow(e.id)}
                      className="w-full text-left p-4 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <Badge color={config.color}>{config.label}</Badge>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-sm truncate">{e.student_name}</p>
                          <p className="text-xs text-gray-500 truncate">{e.parent_email}</p>
                        </div>
                        <div className="hidden sm:block text-right">
                          <p className="text-sm font-bold">${e.amount} USD</p>
                          <p className="text-xs text-gray-400">{e.payment_method}</p>
                        </div>
                        <div className="hidden md:flex items-center gap-1.5">
                          <span
                            title="Email bienvenida"
                            className={`w-2 h-2 rounded-full ${e.welcome_email_sent ? "bg-green-500" : "bg-gray-300"}`}
                          />
                          <span
                            title="Horarios"
                            className={`w-2 h-2 rounded-full ${e.schedule ? "bg-green-500" : "bg-gray-300"}`}
                          />
                          <span
                            title="Pago completo"
                            className={`w-2 h-2 rounded-full ${
                              !e.is_partial_payment || e.remaining_paid ? "bg-green-500" : "bg-red-400"
                            }`}
                          />
                        </div>
                        <span className="text-xs text-gray-400 hidden sm:block">{formatDate(e.created_at)}</span>
                        {expanded ? (
                          <ChevronUp className="w-4 h-4 text-gray-400 shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />
                        )}
                      </div>
                    </button>

                    {expanded && (
                      <div className="border-t px-4 py-4 bg-gray-50 text-sm space-y-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div>
                            <p className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold mb-1">Pago</p>
                            <p className="font-medium">${e.amount} USD via {e.payment_method}</p>
                            {e.payment_id && <p className="text-xs text-gray-400 truncate">Ref: {e.payment_id}</p>}
                            {e.is_partial_payment && (
                              <p className={`text-xs font-semibold mt-1 ${e.remaining_paid ? "text-green-600" : "text-red-600"}`}>
                                {e.remaining_paid ? "Restante pagado" : "Falta pago restante ($240)"}
                              </p>
                            )}
                          </div>
                          <div>
                            <p className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold mb-1">Email</p>
                            <p className={e.welcome_email_sent ? "text-green-700" : "text-red-600"}>
                              {e.welcome_email_sent ? "Enviado" : "No enviado"}
                            </p>
                            {e.welcome_email_sent_at && (
                              <p className="text-xs text-gray-400">{formatDate(e.welcome_email_sent_at)}</p>
                            )}
                          </div>
                          <div>
                            <p className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold mb-1">Horarios</p>
                            {e.schedule ? (
                              <>
                                <p className="text-green-700">Completados</p>
                                <p className="text-xs text-gray-400">{e.schedule.country} · {e.schedule.timezone}</p>
                              </>
                            ) : (
                              <p className="text-orange-600">Pendiente</p>
                            )}
                          </div>
                          <div>
                            <p className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold mb-1">Reminders</p>
                            <p className="text-xs">
                              Pago: {e.payment_reminder_count || 0}/3
                              {e.payment_reminder_last_at && ` (${formatDate(e.payment_reminder_last_at)})`}
                            </p>
                            <p className="text-xs">
                              Horario: {e.schedule_reminder_count || 0}/2
                              {e.schedule_reminder_last_at && ` (${formatDate(e.schedule_reminder_last_at)})`}
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-2 pt-2 border-t">
                          <a
                            href={`mailto:${e.parent_email}`}
                            className="inline-flex items-center gap-1 text-xs text-blue-600 hover:underline"
                          >
                            <ExternalLink className="w-3 h-3" />
                            Email
                          </a>
                          {e.schedule?.whatsapp && (
                            <a
                              href={whatsappLink(e.schedule.whatsapp)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-xs text-green-600 hover:underline"
                            >
                              <MessageCircle className="w-3 h-3" />
                              WhatsApp
                            </a>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )
              })
            )}
          </div>
        )}

        {/* Leads tab */}
        {activeTab === "leads" && (
          <div className="bg-white rounded-xl border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">Nombre</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">WhatsApp</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">Pais</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">Edad hijo</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">Fecha</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">Convirtio?</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {(search
                    ? data.booking_leads.filter(
                        (l) =>
                          l.first_name?.toLowerCase().includes(search.toLowerCase()) ||
                          l.phone?.includes(search)
                      )
                    : data.booking_leads
                  ).map((lead) => {
                    const converted = data.enrollments.some(
                      (e) => e.parent_email && lead.phone && e.student_name?.toLowerCase().includes(lead.first_name?.toLowerCase())
                    )
                    return (
                      <tr key={lead.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-medium">{lead.first_name || "-"}</td>
                        <td className="px-4 py-3">
                          {lead.phone ? (
                            <a
                              href={whatsappLink(lead.phone)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-green-600 hover:underline"
                            >
                              {lead.phone}
                            </a>
                          ) : "-"}
                        </td>
                        <td className="px-4 py-3">{lead.country_name || lead.country_code || "-"}</td>
                        <td className="px-4 py-3">{lead.child_age || "-"}</td>
                        <td className="px-4 py-3 text-gray-500">{formatDate(lead.created_at)}</td>
                        <td className="px-4 py-3">
                          {converted ? <Badge color="green">Si</Badge> : <Badge color="gray">No</Badge>}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Enrollments tab */}
        {activeTab === "enrollments" && (
          <div className="bg-white rounded-xl border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">Alumno</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">Email</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">Monto</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">Metodo</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">Tipo</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">Fecha</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {(search
                    ? data.enrollments.filter(
                        (e) =>
                          e.student_name?.toLowerCase().includes(search.toLowerCase()) ||
                          e.parent_email?.toLowerCase().includes(search.toLowerCase())
                      )
                    : data.enrollments
                  ).map((e) => (
                    <tr key={e.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium">{e.student_name}</td>
                      <td className="px-4 py-3 text-gray-500">{e.parent_email}</td>
                      <td className="px-4 py-3 font-bold">${e.amount}</td>
                      <td className="px-4 py-3">{e.payment_method}</td>
                      <td className="px-4 py-3">
                        {e.is_partial_payment ? (
                          e.remaining_paid ? (
                            <Badge color="green">Reserva + Completado</Badge>
                          ) : (
                            <Badge color="red">Reserva (falta pago)</Badge>
                          )
                        ) : (
                          <Badge color="green">Pago completo</Badge>
                        )}
                      </td>
                      <td className="px-4 py-3 text-gray-500">{formatDate(e.created_at)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Waitlist tab */}
        {activeTab === "waitlist" && (
          <div className="bg-white rounded-xl border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">Nombre</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">Email</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">Curso</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">Edad</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">Fecha</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {(search
                    ? data.course_waitlist.filter(
                        (w) =>
                          `${w.first_name} ${w.last_name}`.toLowerCase().includes(search.toLowerCase()) ||
                          w.email?.toLowerCase().includes(search.toLowerCase())
                      )
                    : data.course_waitlist
                  ).map((w) => (
                    <tr key={w.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium">
                        {w.first_name} {w.last_name}
                      </td>
                      <td className="px-4 py-3 text-gray-500">{w.email}</td>
                      <td className="px-4 py-3">{w.course_name}</td>
                      <td className="px-4 py-3">{w.child_age || "-"}</td>
                      <td className="px-4 py-3 text-gray-500">{formatDate(w.created_at)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
