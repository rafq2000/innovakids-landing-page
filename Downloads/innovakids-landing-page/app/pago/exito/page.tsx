import { redirect } from "next/navigation"

export const metadata = {
  title: "Pago Exitoso | InnovaKids",
  robots: { index: false, follow: false },
}

export default function PagoExitoPage() {
  redirect("/gracias")
}
