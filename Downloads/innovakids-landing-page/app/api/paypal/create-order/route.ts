import { type NextRequest, NextResponse } from "next/server"

// Only allow these exact amounts — prevents $0.01 attacks
const VALID_AMOUNTS = [20, 27, 50, 120, 177, 180, 240, 267, 360, 480, 494, 691, 788]

export async function POST(request: NextRequest) {
  try {
    const { amount } = await request.json()

    const numericAmount = parseFloat(amount)
    if (!VALID_AMOUNTS.includes(numericAmount)) {
      console.error(`[paypal] Invalid amount attempted: ${amount}`)
      return NextResponse.json({ error: "Monto no v\u00e1lido" }, { status: 400 })
    }

    const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID
    const clientSecret = process.env.PAYPAL_CLIENT_SECRET
    const apiUrl = process.env.PAYPAL_API_URL || "https://api-m.paypal.com"

    if (!clientId || !clientSecret) {
      return NextResponse.json({ error: "PayPal no est\u00e1 configurado" }, { status: 500 })
    }

    const auth = Buffer.from(`${clientId}:${clientSecret}`).toString("base64")

    const response = await fetch(`${apiUrl}/v2/checkout/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${auth}`,
      },
      body: JSON.stringify({
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: {
              currency_code: "USD",
              value: numericAmount.toFixed(2),
            },
          },
        ],
        application_context: {
          brand_name: "Innovakids",
          landing_page: "NO_PREFERENCE",
          user_action: "PAY_NOW",
          shipping_preference: "NO_SHIPPING",
        },
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      console.error("[paypal] Create order error:", data)
      throw new Error(data.message || "Error al crear orden")
    }

    return NextResponse.json(data)
  } catch (error: any) {
    console.error("[paypal] Create order error:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
