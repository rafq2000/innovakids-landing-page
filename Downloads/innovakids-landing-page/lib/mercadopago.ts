import { MercadoPagoConfig, Preference } from "mercadopago"

// Initialize Mercado Pago client
const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN || "TEST-00000000-0000-0000-0000-000000000000",
  options: { timeout: 5000 },
})

export const mercadoPagoClient = new Preference(client)
