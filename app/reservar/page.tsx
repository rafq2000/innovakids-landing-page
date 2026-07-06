import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { ReservaExpress } from "@/components/reserva-express"

export const metadata: Metadata = {
  title: "Reserva tu cupo — InnovaKids",
  description:
    "Asegura el cupo de tu hijo en la cohorte de julio 2026. Depósito reembolsable con precio anticipado por tiempo limitado.",
  // Link para enviar por WhatsApp — no debe indexarse en buscadores.
  robots: { index: false, follow: false },
}

export default function ReservarPage() {
  return (
    <main className="min-h-screen bg-[#F5F1E8] text-[#2F2F2C] flex flex-col">
      <div className="w-full max-w-[1100px] mx-auto px-6 md:px-10 pt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#5A5751] hover:text-[#B5522F] transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver a la página principal
        </Link>
      </div>
      <div className="flex-1 flex items-center justify-center px-6 py-14 md:py-20">
        <ReservaExpress />
      </div>
    </main>
  )
}
