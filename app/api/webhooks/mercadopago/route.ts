import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"
import { createHmac } from "crypto"
import { saveEnrollmentAndSendWelcome } from "@/lib/enrollment"

export const dynamic = 'force-dynamic'

function verifyMercadoPagoSignature(request: NextRequest, body: any): boolean {
  const webhookSecret = process.env.MERCADOPAGO_WEBHOOK_SECRET
  if (!webhookSecret) {
    console.warn("[mercadopago] MERCADOPAGO_WEBHOOK_SECRET not set — skipping HMAC verification")
    return true // Graceful degradation: allow if not configured
  }

  const xSignature = request.headers.get("x-signature")
  const xRequestId = request.headers.get("x-request-id")

  if (!xSignature || !xRequestId) {
    console.error("[mercadopago] Missing x-signature or x-request-id headers")
    return false
  }

  // Parse ts and v1 from x-signature header: "ts=TIMESTAMP,v1=HASH"
  const parts: Record<string, string> = {}
  for (const part of xSignature.split(",")) {
    const [key, ...valueParts] = part.split("=")
    parts[key.trim()] = valueParts.join("=").trim()
  }

  const ts = parts["ts"]
  const v1 = parts["v1"]

  if (!ts || !v1) {
    console.error("[mercadopago] Invalid x-signature format:", xSignature)
    return false
  }

  // Build the manifest string per MP docs
  const dataId = body?.data?.id ? String(body.data.id) : ""
  const manifest = `id:${dataId};request-id:${xRequestId};ts:${ts};`

  const hmac = createHmac("sha256", webhookSecret)
  hmac.update(manifest)
  const expectedHash = hmac.digest("hex")

  if (expectedHash !== v1) {
    console.error("[mercadopago] HMAC mismatch", { expected: expectedHash, received: v1 })
    return false
  }

  return true
}

export async function POST(request: NextRequest) {
  try {
    const supabaseUrl = process.env.SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!supabaseUrl || !supabaseKey) {
      console.warn("Missing Supabase credentials in MercadoPago webhook")
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 })
    }

    const supabase = createClient(supabaseUrl, supabaseKey)
    const body = await request.json()

    // Verify HMAC signature if webhook secret is configured
    if (!verifyMercadoPagoSignature(request, body)) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 })
    }

    console.log("[mercadopago] Webhook received:", body.type, body.data?.id)

    // Mercado Pago sends notifications for different events
    if (body.type === "payment") {
      const paymentId = body.data.id

      // Validate paymentId is numeric (MercadoPago IDs are always numbers)
      if (!paymentId || !/^\d{1,20}$/.test(String(paymentId))) {
        console.error("[mercadopago] Invalid payment ID:", paymentId)
        return NextResponse.json({ error: "Invalid payment ID" }, { status: 400 })
      }

      // Fetch payment details from Mercado Pago API
      const response = await fetch(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
        headers: {
          Authorization: `Bearer ${process.env.MERCADOPAGO_ACCESS_TOKEN}`,
        },
      })

      const payment = await response.json()

      // Check for duplicate webhook (idempotency)
      const { data: existingPayment } = await supabase
        .from("payments")
        .select("id")
        .eq("payment_id", payment.id)
        .limit(1)

      if (existingPayment && existingPayment.length > 0) {
        console.log("[mercadopago] Duplicate webhook for payment:", payment.id)
        return NextResponse.json({ received: true, duplicate: true })
      }

      // Store payment in database
      const { error } = await supabase.from("payments").upsert({
        payment_id: payment.id,
        external_reference: payment.external_reference,
        status: payment.status,
        amount: payment.transaction_amount,
        currency: payment.currency_id,
        payer_email: payment.payer.email,
        payment_method: payment.payment_method_id,
        created_at: new Date().toISOString(),
      }, { onConflict: "payment_id" })

      if (error) {
        console.error("[mercadopago] Error storing payment:", error)
      }

      // Send welcome email on approved payments
      if (payment.status === "approved" && payment.payer?.email) {
        const refParts = (payment.external_reference || "").split("-")
        const studentName = payment.payer.first_name
          ? `${payment.payer.first_name} ${payment.payer.last_name || ""}`.trim()
          : payment.payer.email.split("@")[0]

        saveEnrollmentAndSendWelcome({
          studentName,
          parentEmail: payment.payer.email,
          paymentMethod: "mercadopago",
          amount: payment.transaction_amount,
          paymentId: String(payment.id),
          paymentOption: refParts[0] || "unknown",
        }).catch((err) => console.error("[mercadopago] Welcome email error:", err))
      }
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error("[mercadopago] Webhook error:", error)
    return NextResponse.json({ error: "Webhook error" }, { status: 400 })
  }
}
