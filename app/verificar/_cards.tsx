import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BadgeCheck, XCircle, AlertTriangle, ArrowLeft, Clock, CalendarDays, GraduationCap, User } from "lucide-react"
import type { Certificate } from "@/lib/certificates"

const MONTHS = [
  "enero", "febrero", "marzo", "abril", "mayo", "junio",
  "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
]

export function formatDate(ymd: string): string {
  const [y, m, d] = (ymd || "").split("-").map(Number)
  if (!y || !m || !d) return ymd
  return `${d} de ${MONTHS[m - 1]} de ${y}`
}

export function formatIssued(iso: string): string {
  const dt = new Date(iso)
  if (isNaN(dt.getTime())) return ""
  return formatDate(
    `${dt.getUTCFullYear()}-${String(dt.getUTCMonth() + 1).padStart(2, "0")}-${String(dt.getUTCDate()).padStart(2, "0")}`,
  )
}

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-paper px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl">{children}</div>
      </main>
      <Footer />
    </>
  )
}

function BackLink() {
  return (
    <Link
      href="/verificar"
      className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-terracotta hover:text-terracotta-hover"
    >
      <ArrowLeft className="h-4 w-4" />
      Verificar otro certificado
    </Link>
  )
}

function Row({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex items-start gap-4 px-6 py-4">
      <Icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-ink-muted" />
      <div>
        <dt className="text-xs uppercase tracking-wider text-ink-muted">{label}</dt>
        <dd className="mt-0.5 text-base font-medium text-ink">{children}</dd>
      </div>
    </div>
  )
}

export function ValidCard({ certificate }: { certificate: Certificate }) {
  const c = certificate
  return (
    <div>
      <div className="flex flex-col items-center text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-sage/15">
          <BadgeCheck className="h-9 w-9 text-sage" />
        </div>
        <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-sage">Certificado válido</p>
        <p className="mt-1 text-sm text-ink-muted">Emitido oficialmente por InnovaKids LATAM</p>
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl border border-ink/10 bg-paper-card shadow-sm">
        <div className="border-b border-ink/10 bg-paper-warm/50 px-6 py-5 text-center">
          <p className="text-xs uppercase tracking-wider text-ink-muted">Este certificado acredita a</p>
          <p className="mt-1 font-display text-2xl font-semibold text-ink sm:text-3xl">{c.student_name}</p>
        </div>
        <dl className="divide-y divide-ink/8">
          <Row icon={GraduationCap} label="Curso">
            {c.course_name}
            {c.level ? (
              <span className="ml-2 rounded-full bg-terracotta/10 px-2.5 py-0.5 text-xs font-medium text-terracotta">
                {c.level}
              </span>
            ) : null}
          </Row>
          {c.hours ? <Row icon={Clock} label="Horas académicas">{c.hours} horas en vivo</Row> : null}
          <Row icon={CalendarDays} label="Fecha de egreso">{formatDate(c.completion_date)}</Row>
          {c.instructor ? <Row icon={User} label="Docente">{c.instructor}</Row> : null}
        </dl>
        <div className="border-t border-ink/10 bg-paper-warm/30 px-6 py-4 text-center">
          <p className="font-mono text-sm tracking-wide text-ink-soft">{c.code}</p>
          <p className="mt-1 text-xs text-ink-muted">
            Registrado el {formatIssued(c.issued_at)} · Verificación oficial InnovaKids
          </p>
        </div>
      </div>

      <BackLink />
    </div>
  )
}

export function RevokedCard({ code }: { code: string }) {
  return (
    <div className="text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-500/15">
        <AlertTriangle className="h-9 w-9 text-amber-600" />
      </div>
      <h1 className="mt-4 font-display text-2xl font-semibold text-ink">Certificado anulado</h1>
      <p className="mx-auto mt-3 max-w-md text-ink-soft">
        El código <span className="font-mono text-ink">{code}</span> existe en nuestros registros pero fue
        anulado y ya no es válido. Si crees que es un error, escríbenos.
      </p>
      <BackLink />
    </div>
  )
}

export function NotFoundCard({ code }: { code: string }) {
  return (
    <div className="text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10">
        <XCircle className="h-9 w-9 text-destructive" />
      </div>
      <h1 className="mt-4 font-display text-2xl font-semibold text-ink">Certificado no encontrado</h1>
      <p className="mx-auto mt-3 max-w-md text-ink-soft">
        No encontramos ningún certificado con el código{" "}
        <span className="font-mono text-ink">{code || "(vacío)"}</span>. Revisa que lo hayas escrito exactamente
        como aparece en el diploma (sin confundir letras y números).
      </p>
      <BackLink />
    </div>
  )
}
