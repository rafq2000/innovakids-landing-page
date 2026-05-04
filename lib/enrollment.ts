import { createClient } from "@supabase/supabase-js"
import { sendGmail } from "@/lib/gmail"
import { buildWelcomeEmailHtml } from "@/lib/welcome-email"

interface EnrollmentData {
  studentName: string
  parentEmail: string
  paymentMethod: "paypal" | "mercadopago" | "manual"
  amount: number
  paymentId?: string
  paymentOption?: string
}

export async function saveEnrollmentAndSendWelcome(data: EnrollmentData) {
  const supabaseUrl = process.env.SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  // 1. Guardar inscripcion en Supabase
  if (supabaseUrl && supabaseKey) {
    try {
      const supabase = createClient(supabaseUrl, supabaseKey)
      const isPartial = data.amount <= 30 // $27 reserve = partial payment

      // If this is a remaining payment, mark the original enrollment as paid
      let isRemainingPayment = false
      if (!isPartial) {
        const { data: existing } = await supabase
          .from("enrollments")
          .select("id")
          .eq("parent_email", data.parentEmail)
          .eq("is_partial_payment", true)
          .eq("remaining_paid", false)
          .limit(1)

        if (existing && existing.length > 0) {
          isRemainingPayment = true
          await supabase
            .from("enrollments")
            .update({ remaining_paid: true, remaining_paid_at: new Date().toISOString() })
            .eq("id", existing[0].id)
        }
      }

      await supabase.from("enrollments").insert({
        student_name: data.studentName,
        parent_email: data.parentEmail,
        payment_method: data.paymentMethod,
        amount: data.amount,
        payment_id: data.paymentId || null,
        payment_option: data.paymentOption || null,
        is_partial_payment: isPartial,
        remaining_paid: false,
        welcome_email_sent: false,
        created_at: new Date().toISOString(),
      })
    } catch (err) {
      console.error("[enrollment] Error saving to Supabase:", err)
    }
  }

  // 2. Enviar email de bienvenida via Gmail
  let emailSent = false
  try {
    const html = buildWelcomeEmailHtml({
      studentName: data.studentName,
      parentEmail: data.parentEmail,
      amount: data.amount,
      paymentId: data.paymentId,
    })

    const partialPayment = data.amount <= 30
    const subject = partialPayment
      ? `${data.studentName}, tu reserva est\u00e1 confirmada - Completa tu pago para asegurar el cupo`
      : `Bienvenido/a a InnovaKids, ${data.studentName}! - Elige tus horarios`

    await sendGmail({
      to: data.parentEmail,
      subject,
      html,
    })
    emailSent = true
  } catch (err) {
    console.error("[enrollment] Error sending welcome email:", err)
  }

  // 3. Marcar email como enviado en Supabase
  if (emailSent && supabaseUrl && supabaseKey) {
    try {
      const supabase = createClient(supabaseUrl, supabaseKey)
      await supabase
        .from("enrollments")
        .update({ welcome_email_sent: true, welcome_email_sent_at: new Date().toISOString() })
        .eq("parent_email", data.parentEmail)
        .eq("student_name", data.studentName)
        .order("created_at", { ascending: false })
        .limit(1)
    } catch (err) {
      console.error("[enrollment] Error updating email status:", err)
    }
  }

  // 4. Notificar al admin
  try {
    await sendGmail({
      to: "innovakidslatam@gmail.com",
      subject: `Nueva inscripcion: ${data.studentName} - $${data.amount} USD (${data.paymentMethod})`,
      html: `<h2>Nueva inscripcion confirmada</h2>
<p><strong>Estudiante:</strong> ${data.studentName}</p>
<p><strong>Email padre:</strong> ${data.parentEmail}</p>
<p><strong>Metodo:</strong> ${data.paymentMethod}</p>
<p><strong>Monto:</strong> $${data.amount} USD</p>
<p><strong>Payment ID:</strong> ${data.paymentId || "N/A"}</p>
<p><strong>Fecha:</strong> ${new Date().toLocaleString("es-CL", { timeZone: "America/Santiago" })}</p>
<p>Email de bienvenida: ${emailSent ? "enviado correctamente" : "NO pudo ser enviado"}.</p>`,
    })
  } catch (err) {
    console.error("[enrollment] Error sending admin notification:", err)
  }

  return { emailSent }
}
