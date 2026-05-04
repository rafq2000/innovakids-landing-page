import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"
import { sendGmail } from "@/lib/gmail"

export const dynamic = "force-dynamic"

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://www.innovakidslatam.com"

function escapeHtml(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
}

function buildReminderEmailHtml(studentName: string, parentEmail: string, reminderNumber: number) {
  const safeStudentName = escapeHtml(studentName)
  const paymentUrl = `${APP_URL}/pagar?option=remaining&email=${encodeURIComponent(parentEmail)}`

  const urgencyText = reminderNumber <= 1
    ? "Para confirmar su lugar en la <strong>Cohorte Mayo 2026</strong>, necesitamos que completes el pago restante de <strong>$240 USD</strong>."
    : reminderNumber === 2
      ? "Este es tu segundo recordatorio. El programa inicia la semana del 18 de mayo y a&uacute;n falta completar el pago de <strong>$240 USD</strong>."
      : "<strong>&Uacute;ltimo aviso:</strong> Si no completas el pago de <strong>$240 USD</strong> en las pr&oacute;ximas 48 horas, tu cupo podr&iacute;a ser liberado."

  return `<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#FAF7EF;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;">
  <div style="max-width:600px;margin:0 auto;background:#ffffff;border:1px solid #e8e0d0;">
    <div style="background:#1A1714;padding:32px 40px;text-align:center;">
      <h1 style="margin:0;color:#FAF7EF;font-size:28px;font-weight:700;">InnovaKids</h1>
      <p style="margin:8px 0 0;color:#C96342;font-size:12px;letter-spacing:3px;text-transform:uppercase;font-weight:600;">Recordatorio de pago</p>
    </div>
    <div style="padding:40px;">
      <h2 style="color:#1A1714;font-size:24px;margin:0 0 16px;font-weight:700;">
        Falta completar el pago de ${safeStudentName}
      </h2>
      <p style="color:#444;font-size:16px;line-height:1.6;margin:0 0 24px;">
        Reservaste el cupo de <strong>${safeStudentName}</strong> con $27 USD.
        ${urgencyText}
      </p>

      <div style="background:#FFF3ED;border:2px solid #C96342;border-radius:12px;padding:24px;margin:0 0 24px;text-align:center;">
        <h3 style="color:#C96342;font-size:20px;margin:0 0 8px;font-weight:700;">
          Completar pago: $240 USD
        </h3>
        <a href="${paymentUrl}" style="display:inline-block;background:#C96342;color:#ffffff;text-decoration:none;padding:16px 40px;border-radius:8px;font-weight:700;font-size:18px;">
          Pagar ahora
        </a>
      </div>

      <div style="background:#F8F4EB;border-radius:12px;padding:20px;margin:0 0 24px;">
        <p style="color:#666;font-size:14px;margin:0;line-height:1.6;">
          Si tienes dudas o necesitas un plan de pago, escr&iacute;benos directamente:
        </p>
        <p style="margin:12px 0 0;text-align:center;">
          <a href="https://wa.me/56922450492" style="display:inline-block;background:#25D366;color:#ffffff;text-decoration:none;padding:12px 28px;border-radius:8px;font-weight:700;font-size:14px;">
            WhatsApp +56 9 2245 0492
          </a>
        </p>
      </div>

      <p style="color:#999;font-size:13px;line-height:1.5;">
        Si ya completaste el pago, ignora este mensaje. Tu cupo est&aacute; confirmado.
      </p>
    </div>
    <div style="background:#F8F4EB;padding:20px 40px;text-align:center;border-top:1px solid #e8e0d0;">
      <p style="color:#999;font-size:12px;margin:0 0 4px;">InnovaKids Latam &middot; Programa de IA para ni&ntilde;os y adolescentes</p>
      <a href="mailto:innovakidslatam@gmail.com?subject=Desuscribirme" style="color:#bbb;font-size:11px;text-decoration:underline;">Cancelar suscripci&oacute;n</a>
    </div>
  </div>
</body>
</html>`
}

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization")
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const supabaseUrl = process.env.SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.json({ error: "Supabase not configured" }, { status: 500 })
  }

  const supabase = createClient(supabaseUrl, supabaseKey)

  // Find partial payments that haven't completed — allow up to 3 reminders
  const { data: pendingPayments, error } = await supabase
    .from("enrollments")
    .select("id, student_name, parent_email, payment_reminder_count, payment_reminder_last_at, created_at")
    .eq("is_partial_payment", true)
    .eq("remaining_paid", false)
    .or("payment_reminder_count.is.null,payment_reminder_count.lt.3")

  if (error) {
    console.error("[cron/payment-reminder] Error fetching:", error)
    return NextResponse.json({ error: "Database error" }, { status: 500 })
  }

  if (!pendingPayments || pendingPayments.length === 0) {
    return NextResponse.json({ message: "No pending reminders", sent: 0 })
  }

  // Only send if at least 48h since last reminder (or 72h since enrollment for first reminder)
  const now = Date.now()
  let sent = 0
  const errors: string[] = []

  for (const enrollment of pendingPayments) {
    try {
      const reminderCount = enrollment.payment_reminder_count || 0
      const lastReminder = enrollment.payment_reminder_last_at
        ? new Date(enrollment.payment_reminder_last_at).getTime()
        : 0
      const createdAt = new Date(enrollment.created_at).getTime()

      // First reminder: 72h after enrollment. Subsequent: 48h after last reminder
      const minWait = reminderCount === 0 ? 72 * 60 * 60 * 1000 : 48 * 60 * 60 * 1000
      const since = reminderCount === 0 ? createdAt : lastReminder
      if (now - since < minWait) continue

      // Double-check: did they pay the remaining?
      const { data: fullPayments } = await supabase
        .from("enrollments")
        .select("id")
        .eq("parent_email", enrollment.parent_email)
        .eq("is_partial_payment", false)
        .limit(1)

      if (fullPayments && fullPayments.length > 0) {
        await supabase
          .from("enrollments")
          .update({ remaining_paid: true, remaining_paid_at: new Date().toISOString() })
          .eq("id", enrollment.id)
        continue
      }

      const html = buildReminderEmailHtml(
        enrollment.student_name,
        enrollment.parent_email,
        reminderCount + 1
      )
      await sendGmail({
        to: enrollment.parent_email,
        subject: reminderCount >= 2
          ? `Ultimo aviso: ${enrollment.student_name}, completa tu pago de InnovaKids`
          : `${enrollment.student_name}, falta completar tu pago - InnovaKids`,
        html,
      })

      await supabase
        .from("enrollments")
        .update({
          payment_reminder_count: reminderCount + 1,
          payment_reminder_last_at: new Date().toISOString(),
          // Keep legacy field updated for compatibility
          reminder_sent: true,
          reminder_sent_at: new Date().toISOString(),
        })
        .eq("id", enrollment.id)

      sent++
    } catch (err: any) {
      console.error(`[cron/payment-reminder] Error for ${enrollment.parent_email}:`, err.message)
      errors.push(enrollment.parent_email)
    }
  }

  if (sent > 0) {
    try {
      await sendGmail({
        to: "innovakidslatam@gmail.com",
        subject: `Recordatorio de pagos enviado: ${sent} emails`,
        html: `<h2>Resumen de recordatorios de pago</h2>
<p><strong>Enviados:</strong> ${sent}</p>
<p><strong>Total pendientes:</strong> ${pendingPayments.length}</p>
${errors.length > 0 ? `<p><strong>Errores:</strong> ${errors.join(", ")}</p>` : ""}
<p><strong>Fecha:</strong> ${new Date().toLocaleString("es-CL", { timeZone: "America/Santiago" })}</p>`,
      })
    } catch (_) {}
  }

  return NextResponse.json({ message: "Reminders processed", sent, total: pendingPayments.length, errors })
}
