import { type NextRequest, NextResponse } from "next/server"
import { saveEnrollmentAndSendWelcome } from "@/lib/enrollment"

export async function POST(request: NextRequest) {
  try {
    const { orderID, studentName, parentEmail, paymentOption } = await request.json()

    // Validate orderID format (PayPal order IDs are alphanumeric)
    if (!orderID || typeof orderID !== "string" || !/^[A-Z0-9]{10,30}$/i.test(orderID)) {
      return NextResponse.json({ error: "Order ID inv\u00e1lido" }, { status: 400 })
    }

    const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID
    const clientSecret = process.env.PAYPAL_CLIENT_SECRET
    const apiUrl = process.env.PAYPAL_API_URL || "https://api-m.paypal.com"

    if (!clientId || !clientSecret) {
      return NextResponse.json({ error: "PayPal no está configurado" }, { status: 500 })
    }

    const auth = Buffer.from(`${clientId}:${clientSecret}`).toString("base64")

    const response = await fetch(`${apiUrl}/v2/checkout/orders/${orderID}/capture`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${auth}`,
      },
    })

    const data = await response.json()

    if (!response.ok) {
      console.error("[v0] PayPal capture error:", data)
      throw new Error(data.message || "Error al capturar")
    }

    // Send welcome email after successful capture (non-blocking)
    // SECURITY: Use the ACTUAL captured amount from PayPal, not the client-sent value
    if (data.status === "COMPLETED" && studentName && parentEmail) {
      const capturedAmount = parseFloat(
        data.purchase_units?.[0]?.payments?.captures?.[0]?.amount?.value || "0"
      )

      if (capturedAmount <= 0) {
        console.error("[paypal] Capture succeeded but amount is 0 — possible tampering", { orderID, data })
        return NextResponse.json({ error: "Monto capturado inv\u00e1lido" }, { status: 400 })
      }

      saveEnrollmentAndSendWelcome({
        studentName,
        parentEmail,
        paymentMethod: "paypal",
        amount: capturedAmount,
        paymentId: orderID,
        paymentOption: paymentOption || "unknown",
      }).catch((err) => console.error("[paypal] Welcome email error:", err))
    }

    return NextResponse.json(data)
  } catch (error: any) {
    console.error("[v0] Capture error:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
