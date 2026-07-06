"use server"

import { mercadoPagoClient } from "@/lib/mercadopago"

const VALID_AMOUNTS = [27, 120, 177, 180, 240, 267, 270, 297, 360, 480, 494, 691, 788] as const

type PaymentOption =
  | "first"
  | "second"
  | "full"
  | "reserve"
  | "earlybird"
  | "complete"
  | "custom360"
  | "explorer"
  | "start_pack"
  | "pro_pack"
  | "university"
  | "promo180"
  | "restante177"
  | "remaining"
  | "promo27"
  | "promo267"
  | "promo240"
  | "promo120"
  | "promo480"
  | "pago240"
  | "pago480"

const paymentTitles: Record<PaymentOption, string> = {
  reserve: "InnovaKids - Reserva de Cupo",
  remaining: "InnovaKids - Pago Restante",
  full: "InnovaKids - Curso Completo",
  promo180: "InnovaKids - Pago Acordado $180",
  first: "InnovaKids - Reserva",
  second: "InnovaKids - Pago Restante",
  earlybird: "InnovaKids - Programa Completo",
  complete: "InnovaKids - Programa Completo",
  custom360: "InnovaKids - Pago Personalizado",
  explorer: "InnovaKids Explorer",
  start_pack: "Vibe Start Pack",
  pro_pack: "Vibe Pro Pack",
  university: "Academy University Pass",
  restante177: "InnovaKids - Pago Restante $177",
  promo27: "InnovaKids - Pago Acordado $27",
  promo267: "InnovaKids - Programa Completo $267 (Decisión Temprana)",
  promo240: "InnovaKids - Promoción $240",
  promo120: "InnovaKids - Pago Acordado $120",
  promo480: "InnovaKids - Programa Completo Premium $480",
  pago240: "InnovaKids - Curso Completo $240",
  pago480: "InnovaKids - Programa Premium $480",
}

const paymentDescriptions: Record<PaymentOption, string> = {
  reserve: "Reserva tu lugar en el Curso de IA para Niños",
  remaining: "Completa tu pago del Curso de IA para Niños",
  full: "Curso Completo de IA para Niños - 12 clases + Proyectos + Certificado",
  promo180: "Acceso Completo al Curso de IA para Niños - Precio Especial",
  first: "Reserva de cupo",
  second: "Pago restante del programa",
  earlybird: "Precio por decisión temprana - 48h tras la Sesión de Diagnóstico",
  complete: "Programa completo InnovaKids",
  custom360: "Pago único programa completo",
  explorer: "Módulo 1 Base - 10 Clases",
  start_pack: "Explorer + 1 Especialidad",
  pro_pack: "Explorer + 2 Especialidades",
  university: "Acceso Total 4 Módulos",
  restante177: "Pago restante de $177 USD",
  promo27: "Pago único de $27 USD",
  promo267: "Pago único de $267 USD - Precio por decisión temprana",
  promo240: "Pago único de $240 USD",
  promo120: "Pago especial de $120 USD",
  promo480: "Pago único de $480 USD - Acceso completo InnovaKids",
  pago240: "Pago único de $240 USD - Curso Completo InnovaKids",
  pago480: "Pago único de $480 USD - Programa Premium InnovaKids",
}

export async function createMercadoPagoCheckout(
  studentName: string,
  parentEmail: string,
  paymentOption: PaymentOption,
  amount: number,
) {
  if (!VALID_AMOUNTS.includes(amount as (typeof VALID_AMOUNTS)[number])) {
    return { success: false, error: "Monto no valido" }
  }

  try {
    const preference = await mercadoPagoClient.create({
      body: {
        items: [
          {
            id: `innovakids-${paymentOption}`,
            title: paymentTitles[paymentOption],
            description: paymentDescriptions[paymentOption],
            unit_price: amount,
            quantity: 1,
            currency_id: "USD",
          },
        ],
        payer: {
          email: parentEmail,
          name: studentName,
        },
        back_urls: {
          success: `${process.env.NEXT_PUBLIC_APP_URL}/gracias?method=mercadopago&amount=${amount}`,
          failure: `${process.env.NEXT_PUBLIC_APP_URL}/pago/error`,
          pending: `${process.env.NEXT_PUBLIC_APP_URL}/pago/pendiente`,
        },
        auto_return: "approved",
        statement_descriptor: "INNOVAKIDS",
        external_reference: `${paymentOption}-${parentEmail}-${Date.now()}`,
        notification_url: `${process.env.NEXT_PUBLIC_APP_URL}/api/webhooks/mercadopago`,
      },
    })

    return {
      success: true,
      checkoutUrl: preference.init_point,
      sandboxUrl: preference.sandbox_init_point,
    }
  } catch (error) {
    console.error("[v0] Mercado Pago error:", error)
    return {
      success: false,
      error: "Error al crear el checkout. Por favor intenta nuevamente.",
    }
  }
}
