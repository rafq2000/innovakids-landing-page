const N8N_BASE_URL = process.env.N8N_WEBHOOK_URL

interface PaymentNotification {
  studentName: string
  parentEmail: string
  amount: number
  paymentMethod: "paypal" | "mercadopago"
  paymentId: string
  paymentOption: string
}

/**
 * Notifica a n8n que se confirmo un pago.
 * n8n se encarga del canal WhatsApp: kit bienvenida, actualizar lead, Chatwoot.
 * La landing se encarga del canal email: welcome email, Supabase, admin notification.
 * Non-blocking: nunca falla la respuesta al usuario por esto.
 */
export async function notifyN8nPayment(data: PaymentNotification): Promise<void> {
  const tipo = data.amount <= 30 ? "deposito" : "completo"

  if (!N8N_BASE_URL) {
    console.error("[n8n] N8N_WEBHOOK_URL not configured — skipping payment notification")
    return
  }

  try {
    await fetch(`${N8N_BASE_URL}/webhook/innovakids-paypal`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        studentName: data.studentName,
        parentEmail: data.parentEmail,
        amount: data.amount,
        paymentMethod: data.paymentMethod,
        paymentId: data.paymentId,
        paymentOption: data.paymentOption,
        tipo,
        source: "landing",
        timestamp: new Date().toISOString(),
      }),
      signal: AbortSignal.timeout(5000),
    })
    console.log(`[n8n] Payment notification sent: ${data.paymentMethod} $${data.amount} (${tipo})`)
  } catch (err) {
    // Non-blocking: log but never throw
    console.error("[n8n] Failed to notify payment (non-critical):", err)
  }
}
