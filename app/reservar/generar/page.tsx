import type { Metadata } from "next"
import { ReservaLinkGenerator } from "@/components/reserva-link-generator"

export const metadata: Metadata = {
  title: "Generar link de reserva — InnovaKids (uso interno)",
  description: "Genera un link de reserva con 48 horas de urgencia desde el momento de envío.",
  robots: { index: false, follow: false },
}

export default function GenerarReservaPage() {
  return (
    <main className="min-h-screen bg-[#F5F1E8] text-[#2F2F2C] flex items-center justify-center px-6 py-14 md:py-20">
      <ReservaLinkGenerator />
    </main>
  )
}
