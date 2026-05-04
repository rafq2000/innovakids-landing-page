import { Clock } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Pago Pendiente | InnovaKids",
  robots: { index: false, follow: false },
}

export default function PagoPendientePage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-6 flex justify-center">
          <Clock className="h-20 w-20 text-yellow-500" />
        </div>

        <h1 className="text-3xl font-bold mb-4">Pago Pendiente</h1>

        <p className="text-lg text-muted-foreground mb-6">
          Tu pago est\u00e1 siendo procesado. Te notificaremos por email cuando se confirme.
        </p>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <p className="text-sm text-yellow-800">
            <strong>Informaci\u00f3n importante:</strong>
          </p>
          <ul className="text-sm text-yellow-700 mt-2 space-y-1 text-left">
            <li>El proceso puede tomar hasta 48 horas</li>
            <li>Recibir\u00e1s un email de confirmaci\u00f3n</li>
            <li>No es necesario realizar otro pago</li>
          </ul>
        </div>

        <div className="space-y-3">
          <a
            href="https://wa.me/56922450492?text=Hola%2C%20mi%20pago%20aparece%20como%20pendiente"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full border border-green-500 text-green-700 hover:bg-green-50 rounded-lg px-4 py-3 font-semibold text-sm transition-colors"
          >
            Escribir por WhatsApp si tienes dudas
          </a>
          <Button asChild className="w-full">
            <Link href="/">Volver al inicio</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
