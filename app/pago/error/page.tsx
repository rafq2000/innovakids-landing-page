import { XCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Error en el Pago | InnovaKids",
  robots: { index: false, follow: false },
}

export default function PagoErrorPage() {
  return (
    <>
    <Navigation />
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-6 flex justify-center">
          <XCircle className="h-20 w-20 text-red-500" />
        </div>

        <h1 className="text-3xl font-bold mb-4">Pago No Completado</h1>

        <p className="text-lg text-muted-foreground mb-6">
          Hubo un problema al procesar tu pago. No se realizó ningún cargo a tu tarjeta.
        </p>

        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <p className="text-sm text-red-800">
            <strong>¿Qué puedes hacer?</strong>
          </p>
          <ul className="text-sm text-red-700 mt-2 space-y-1 text-left">
            <li>• Verifica los datos de tu tarjeta</li>
            <li>• Asegúrate de tener fondos suficientes</li>
            <li>• Intenta con otra tarjeta</li>
            <li>• Contáctanos por WhatsApp si persiste</li>
          </ul>
        </div>

        <div className="space-y-3">
          <Button asChild className="w-full">
            <Link href="/pagar">Intentar nuevamente</Link>
          </Button>
          <a
            href="https://wa.me/56922450492?text=Hola%2C%20tuve%20un%20error%20al%20pagar"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full border border-green-500 text-green-700 hover:bg-green-50 rounded-lg px-4 py-3 font-semibold text-sm text-center transition-colors"
          >
            Escribir por WhatsApp
          </a>
          <Button asChild variant="outline" className="w-full bg-transparent">
            <Link href="/">Volver al inicio</Link>
          </Button>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}
