import type { Metadata } from "next"
import { getCertificateByCode, normalizeCode } from "@/lib/certificates"
import { Shell, ValidCard, RevokedCard, NotFoundCard } from "../_cards"

export const metadata: Metadata = {
  title: "Resultado de verificación · InnovaKids",
  // Los certificados individuales llevan nombre de menores: nunca indexar.
  robots: { index: false, follow: false },
}

export default async function VerificarCodePage({
  params,
}: {
  params: Promise<{ code: string }>
}) {
  const { code: rawCode } = await params
  const code = normalizeCode(decodeURIComponent(rawCode))
  const result = await getCertificateByCode(code)

  if (result.status === "valid") {
    return (
      <Shell>
        <ValidCard certificate={result.certificate} />
      </Shell>
    )
  }
  if (result.status === "revoked") {
    return (
      <Shell>
        <RevokedCard code={result.certificate.code} />
      </Shell>
    )
  }
  // not_found o unconfigured → mismo mensaje para el público
  return (
    <Shell>
      <NotFoundCard code={code} />
    </Shell>
  )
}
