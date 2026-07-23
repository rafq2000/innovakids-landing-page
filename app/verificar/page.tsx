import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ShieldCheck, BadgeCheck, QrCode, Lock } from "lucide-react"
import { VerifyForm } from "./verify-form"

export const metadata: Metadata = {
  title: "Verificar Certificado · InnovaKids LATAM",
  description:
    "Valida la autenticidad de un certificado de egreso de InnovaKids. Ingresa el código del diploma y confirma alumno, curso, horas y fecha de egreso.",
  keywords: [
    "verificar certificado innovakids",
    "validar diploma ia niños",
    "certificado curso ia verificable",
    "autenticidad certificado innovakids",
  ],
  alternates: {
    canonical: "https://www.innovakidslatam.com/verificar",
  },
  openGraph: {
    title: "Verificación de Certificados · InnovaKids LATAM",
    description:
      "Sistema oficial de verificación de certificados de egreso. Ingresa el código del diploma para confirmar su autenticidad.",
    url: "https://www.innovakidslatam.com/verificar",
    siteName: "InnovaKids",
    type: "website",
    locale: "es_419",
  },
}

const steps = [
  {
    icon: QrCode,
    title: "Toma el código",
    body: "En el diploma, bajo el código QR, aparece un código único con el formato IK-AÑO-XXXXX.",
  },
  {
    icon: ShieldCheck,
    title: "Ingrésalo aquí",
    body: "Escríbelo o pégalo en el buscador. También puedes escanear el QR, que abre esta página con el código ya cargado.",
  },
  {
    icon: BadgeCheck,
    title: "Confirma los datos",
    body: "Verás alumno, curso, horas académicas y fecha de egreso — o un aviso si el certificado no es válido.",
  },
]

export default async function VerificarPage({
  searchParams,
}: {
  searchParams: Promise<{ code?: string }>
}) {
  const { code } = await searchParams

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-paper">
        {/* Hero + buscador */}
        <section className="px-4 pt-16 pb-12 sm:pt-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-terracotta/10">
              <ShieldCheck className="h-9 w-9 text-terracotta" />
            </div>
            <h1 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              Verificación de certificados
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg text-ink-soft">
              Confirma la autenticidad de un certificado de egreso de InnovaKids LATAM.
              Ingresa el código que aparece en el diploma.
            </p>
            <div className="mt-10">
              <VerifyForm initialCode={code ?? ""} />
            </div>
          </div>
        </section>

        {/* Cómo funciona */}
        <section className="px-4 pb-16">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-6 sm:grid-cols-3">
              {steps.map((s) => (
                <div
                  key={s.title}
                  className="rounded-2xl border border-ink/10 bg-paper-card p-6 text-left"
                >
                  <s.icon className="h-7 w-7 text-terracotta" />
                  <h2 className="mt-4 font-display text-lg font-semibold text-ink">{s.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{s.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex items-start gap-3 rounded-2xl border border-ink/10 bg-paper-warm/60 p-6">
              <Lock className="mt-0.5 h-5 w-5 flex-shrink-0 text-sage" />
              <p className="text-sm leading-relaxed text-ink-soft">
                Cada certificado se emite a nombre del alumno cuando completa su curso y queda
                registrado de forma permanente. La verificación es gratuita y no requiere cuenta.
                Si un empleador, colegio o institución te pidió validar un diploma de InnovaKids,
                esta es la vía oficial.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
