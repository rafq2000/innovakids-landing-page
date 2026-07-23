import "server-only"
import { createClient } from "@supabase/supabase-js"

/**
 * Certificados de egreso verificables.
 * Cada alumno que completa un curso recibe un código único (ej. IK-2026-7QK4M)
 * que cualquiera puede validar en /verificar/<código>.
 *
 * La verificación se hace SIEMPRE del lado del servidor con la service-role key
 * (nunca se expone al navegador) y solo devuelve campos seguros.
 */

export type Certificate = {
  code: string
  student_name: string
  course_name: string
  level: string | null
  hours: number | null
  completion_date: string // YYYY-MM-DD
  issued_at: string // ISO
  instructor: string | null
  revoked: boolean
}

export type CertLookup =
  | { status: "valid"; certificate: Certificate }
  | { status: "revoked"; certificate: Certificate }
  | { status: "not_found" }
  | { status: "unconfigured" } // faltan env vars o la tabla no existe

// Alfabeto sin caracteres ambiguos (sin 0/O, 1/I/L) para dictar por teléfono.
const CODE_ALPHABET = "ABCDEFGHJKMNPQRSTUVWXYZ23456789"
const PG_UNDEFINED_TABLE = "42P01"

function serviceClient() {
  const url = process.env.SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !key) return null
  return createClient(url, key)
}

/** Normaliza lo que teclea el usuario: mayúsculas, sin espacios, guiones consistentes. */
export function normalizeCode(raw: string): string {
  return (raw || "")
    .toUpperCase()
    .replace(/[\s–—]+/g, "-") // espacios y guiones largos → guion
    .replace(/[^A-Z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 24)
}

function randomBlock(len: number): string {
  let out = ""
  for (let i = 0; i < len; i++) {
    out += CODE_ALPHABET[Math.floor(Math.random() * CODE_ALPHABET.length)]
  }
  return out
}

/** Genera un código tipo IK-2026-7QK4M garantizando que no exista ya. */
export async function generateUniqueCode(year: number): Promise<string> {
  const supabase = serviceClient()
  for (let attempt = 0; attempt < 12; attempt++) {
    const code = `IK-${year}-${randomBlock(5)}`
    if (!supabase) return code
    const { data, error } = await supabase
      .from("certificates")
      .select("code")
      .eq("code", code)
      .limit(1)
    if (error) return code // si la tabla falla, devolvemos igual (el insert avisará)
    if (!data || data.length === 0) return code
  }
  // Fallback ultra-improbable: bloque más largo
  return `IK-${year}-${randomBlock(8)}`
}

/** Búsqueda pública para /verificar/<code>. Solo lectura, campos seguros. */
export async function getCertificateByCode(rawCode: string): Promise<CertLookup> {
  const supabase = serviceClient()
  if (!supabase) return { status: "unconfigured" }

  const code = normalizeCode(rawCode)
  if (!code) return { status: "not_found" }

  const { data, error } = await supabase
    .from("certificates")
    .select("code, student_name, course_name, level, hours, completion_date, issued_at, instructor, revoked")
    .eq("code", code)
    .limit(1)
    .maybeSingle()

  if (error) {
    if (error.code === PG_UNDEFINED_TABLE) return { status: "unconfigured" }
    console.error("[certificates] lookup error:", error.message)
    return { status: "not_found" }
  }
  if (!data) return { status: "not_found" }

  const certificate = data as Certificate
  return { status: certificate.revoked ? "revoked" : "valid", certificate }
}

export type IssueInput = {
  studentName: string
  courseName: string
  level?: string | null
  hours?: number | null
  completionDate: string // YYYY-MM-DD
  instructor?: string | null
}

export type IssueResult =
  | { ok: true; certificate: Certificate }
  | { ok: false; error: string; needsTable?: boolean }

export async function issueCertificate(input: IssueInput): Promise<IssueResult> {
  const supabase = serviceClient()
  if (!supabase) return { ok: false, error: "Supabase no configurado (faltan env vars)." }

  const studentName = (input.studentName || "").trim()
  const courseName = (input.courseName || "").trim()
  const completionDate = (input.completionDate || "").trim()
  if (!studentName || !courseName || !completionDate) {
    return { ok: false, error: "Faltan datos: nombre, curso y fecha de egreso son obligatorios." }
  }

  const year = Number(completionDate.slice(0, 4)) || new Date().getFullYear()
  const code = await generateUniqueCode(year)

  const row = {
    code,
    student_name: studentName,
    course_name: courseName,
    level: input.level?.trim() || null,
    hours: input.hours ?? 10,
    completion_date: completionDate,
    instructor: input.instructor?.trim() || null,
    revoked: false,
  }

  const { data, error } = await supabase.from("certificates").insert(row).select().single()
  if (error) {
    if (error.code === PG_UNDEFINED_TABLE) {
      return { ok: false, error: "La tabla 'certificates' no existe todavía. Córrela una vez (ver scripts/certificates.sql).", needsTable: true }
    }
    return { ok: false, error: error.message }
  }
  return { ok: true, certificate: data as Certificate }
}

export async function setRevoked(rawCode: string, revoked: boolean): Promise<{ ok: boolean; error?: string }> {
  const supabase = serviceClient()
  if (!supabase) return { ok: false, error: "Supabase no configurado." }
  const code = normalizeCode(rawCode)
  const { error } = await supabase.from("certificates").update({ revoked }).eq("code", code)
  if (error) return { ok: false, error: error.message }
  return { ok: true }
}

export async function listCertificates(limit = 500): Promise<Certificate[]> {
  const supabase = serviceClient()
  if (!supabase) return []
  const { data, error } = await supabase
    .from("certificates")
    .select("code, student_name, course_name, level, hours, completion_date, issued_at, instructor, revoked")
    .order("issued_at", { ascending: false })
    .limit(limit)
  if (error) return []
  return (data as Certificate[]) || []
}
