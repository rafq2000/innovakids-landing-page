"use client"

import { useState } from "react"
import { Lock, Loader2, Award, Copy, Check, Ban, RotateCcw, ExternalLink, Plus } from "lucide-react"

type Certificate = {
  code: string
  student_name: string
  course_name: string
  level: string | null
  hours: number | null
  completion_date: string
  issued_at: string
  instructor: string | null
  revoked: boolean
}

const COURSES = [
  "Creador Audiovisual con IA",
  "Creador de Juegos y Programación con IA",
  "Vibe Explorer",
  "Vibe Director",
]
const INSTRUCTORS = ["Ricardo Farías", "Valentina", "Lorena", "Jaime Orellana", "Damián"]

function today(): string {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`
}

function verifyUrl(code: string): string {
  const origin = typeof window !== "undefined" ? window.location.origin : "https://www.innovakidslatam.com"
  return `${origin}/verificar/${code}`
}

export default function CertificadosAdmin() {
  const [password, setPassword] = useState("")
  const [authed, setAuthed] = useState(false)
  const [certs, setCerts] = useState<Certificate[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [copied, setCopied] = useState("")

  // form
  const [studentName, setStudentName] = useState("")
  const [courseName, setCourseName] = useState(COURSES[0])
  const [level, setLevel] = useState("")
  const [hours, setHours] = useState(10)
  const [completionDate, setCompletionDate] = useState(today())
  const [instructor, setInstructor] = useState(INSTRUCTORS[0])
  const [creating, setCreating] = useState(false)
  const [lastCreated, setLastCreated] = useState<Certificate | null>(null)

  async function call(action: string, extra: Record<string, unknown> = {}) {
    const res = await fetch("/api/admin/certificates", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password, action, ...extra }),
    })
    const data = await res.json()
    if (!res.ok) throw new Error(data.error || "Error")
    return data
  }

  async function login(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError("")
    try {
      const data = await call("list")
      setCerts(data.certificates || [])
      setAuthed(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error")
    } finally {
      setLoading(false)
    }
  }

  async function refresh() {
    try {
      const data = await call("list")
      setCerts(data.certificates || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error")
    }
  }

  async function create(e: React.FormEvent) {
    e.preventDefault()
    setCreating(true)
    setError("")
    setLastCreated(null)
    try {
      const data = await call("create", {
        studentName,
        courseName,
        level: level || null,
        hours,
        completionDate,
        instructor: instructor || null,
      })
      setLastCreated(data.certificate)
      setStudentName("")
      await refresh()
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error")
    } finally {
      setCreating(false)
    }
  }

  async function toggleRevoke(c: Certificate) {
    setError("")
    try {
      await call(c.revoked ? "unrevoke" : "revoke", { code: c.code })
      await refresh()
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error")
    }
  }

  function copy(text: string, key: string) {
    navigator.clipboard.writeText(text)
    setCopied(key)
    setTimeout(() => setCopied(""), 1500)
  }

  if (!authed) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-paper px-4">
        <form onSubmit={login} className="w-full max-w-sm rounded-2xl border border-ink/10 bg-paper-card p-8">
          <div className="mb-6 flex items-center gap-3">
            <Lock className="h-6 w-6 text-terracotta" />
            <h1 className="font-display text-xl font-semibold text-ink">Certificados · Admin</h1>
          </div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña de administrador"
            className="w-full rounded-lg border border-ink/15 bg-paper px-4 py-3 text-ink outline-none focus:border-terracotta"
          />
          {error && <p className="mt-3 text-sm text-destructive">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-terracotta px-4 py-3 font-semibold text-paper-card hover:bg-terracotta-hover disabled:opacity-50"
          >
            {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Lock className="h-5 w-5" />}
            Entrar
          </button>
        </form>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-paper px-4 py-10">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex items-center gap-3">
          <Award className="h-7 w-7 text-terracotta" />
          <h1 className="font-display text-2xl font-semibold text-ink">Emitir certificados</h1>
        </div>

        {error && (
          <div className="mb-6 rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">
            {error}
          </div>
        )}

        {/* Formulario de emisión */}
        <form onSubmit={create} className="rounded-2xl border border-ink/10 bg-paper-card p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Nombre del alumno (como irá en el diploma)">
              <input required value={studentName} onChange={(e) => setStudentName(e.target.value)} className={inputCls} placeholder="Martín Fuentes" />
            </Field>
            <Field label="Curso">
              <input required list="courses" value={courseName} onChange={(e) => setCourseName(e.target.value)} className={inputCls} />
              <datalist id="courses">{COURSES.map((c) => <option key={c} value={c} />)}</datalist>
            </Field>
            <Field label="Nivel (opcional)">
              <input value={level} onChange={(e) => setLevel(e.target.value)} className={inputCls} placeholder="Vibe Explorer" />
            </Field>
            <Field label="Horas académicas">
              <input type="number" min={1} value={hours} onChange={(e) => setHours(Number(e.target.value))} className={inputCls} />
            </Field>
            <Field label="Fecha de egreso">
              <input type="date" required value={completionDate} onChange={(e) => setCompletionDate(e.target.value)} className={inputCls} />
            </Field>
            <Field label="Docente que certifica">
              <input list="instructors" value={instructor} onChange={(e) => setInstructor(e.target.value)} className={inputCls} />
              <datalist id="instructors">{INSTRUCTORS.map((i) => <option key={i} value={i} />)}</datalist>
            </Field>
          </div>
          <button
            type="submit"
            disabled={creating}
            className="mt-5 inline-flex items-center gap-2 rounded-lg bg-terracotta px-5 py-2.5 font-semibold text-paper-card hover:bg-terracotta-hover disabled:opacity-50"
          >
            {creating ? <Loader2 className="h-5 w-5 animate-spin" /> : <Plus className="h-5 w-5" />}
            Emitir certificado
          </button>
        </form>

        {/* Resultado recién creado */}
        {lastCreated && (
          <div className="mt-4 rounded-2xl border border-sage/40 bg-sage/8 p-6">
            <p className="text-sm font-semibold text-sage">✓ Certificado emitido para {lastCreated.student_name}</p>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <code className="rounded-md bg-paper px-3 py-1.5 font-mono text-lg text-ink">{lastCreated.code}</code>
              <button onClick={() => copy(lastCreated.code, "code")} className={pillBtn}>
                {copied === "code" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />} Copiar código
              </button>
              <button onClick={() => copy(verifyUrl(lastCreated.code), "url")} className={pillBtn}>
                {copied === "url" ? <Check className="h-4 w-4" /> : <ExternalLink className="h-4 w-4" />} Copiar link de verificación
              </button>
            </div>
            <p className="mt-3 text-xs text-ink-muted">
              Pega el código en el diploma (bajo el QR) y el link en el QR. El apoderado podrá validarlo en {verifyUrl(lastCreated.code)}
            </p>
          </div>
        )}

        {/* Lista */}
        <div className="mt-10">
          <h2 className="mb-3 font-display text-lg font-semibold text-ink">
            Certificados emitidos ({certs.length})
          </h2>
          <div className="overflow-hidden rounded-2xl border border-ink/10 bg-paper-card">
            {certs.length === 0 ? (
              <p className="px-6 py-8 text-center text-sm text-ink-muted">Aún no hay certificados emitidos.</p>
            ) : (
              <div className="divide-y divide-ink/8">
                {certs.map((c) => (
                  <div key={c.code} className="flex flex-wrap items-center gap-3 px-5 py-4">
                    <div className="min-w-0 flex-1">
                      <p className={`truncate font-medium ${c.revoked ? "text-ink-muted line-through" : "text-ink"}`}>
                        {c.student_name}
                      </p>
                      <p className="truncate text-xs text-ink-muted">
                        {c.course_name} · {c.completion_date} · <span className="font-mono">{c.code}</span>
                        {c.revoked && <span className="ml-2 font-semibold text-amber-600">ANULADO</span>}
                      </p>
                    </div>
                    <button onClick={() => copy(verifyUrl(c.code), `l-${c.code}`)} className={pillBtn}>
                      {copied === `l-${c.code}` ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />} Link
                    </button>
                    <button
                      onClick={() => toggleRevoke(c)}
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium ${
                        c.revoked
                          ? "bg-sage/15 text-sage hover:bg-sage/25"
                          : "bg-destructive/10 text-destructive hover:bg-destructive/20"
                      }`}
                    >
                      {c.revoked ? <RotateCcw className="h-4 w-4" /> : <Ban className="h-4 w-4" />}
                      {c.revoked ? "Reactivar" : "Anular"}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

const inputCls =
  "w-full rounded-lg border border-ink/15 bg-paper px-3 py-2.5 text-ink outline-none focus:border-terracotta"
const pillBtn =
  "inline-flex items-center gap-1.5 rounded-full border border-ink/15 bg-paper px-3 py-1.5 text-sm font-medium text-ink-soft hover:border-terracotta hover:text-terracotta"

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-ink-muted">{label}</span>
      {children}
    </label>
  )
}
