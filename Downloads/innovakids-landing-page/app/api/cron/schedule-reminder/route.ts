import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"
import { sendGmail } from "@/lib/gmail"

export const dynamic = "force-dynamic"

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://www.innovakidslatam.com"

function escapeHtml(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
}

function buildScheduleReminderHtml(studentName: string, parentEmail: string) {
  const safeStudentName = escapeHtml(studentName)
  const horariosUrl = `${APP_URL}/mis-horarios?email=${encodeURIComponent(parentEmail)}&student=${encodeURIComponent(studentName)}`

  return `<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#FAF7EF;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;">
  <div style="max-width:600px;margin:0 auto;background:#ffffff;border:1px solid #e8e0d0;">
    <div style="background:#1A1714;padding:32px 40px;text-align:center;">
      <h1 style="margin:0;color:#FAF7EF;font-size:28px;font-weight:700;">InnovaKids</h1>
      <p style="margin:8px 0 0;color:#C96342;font-size:12px;letter-spacing:3px;text-transform:uppercase;font-weight:600;">Recordatorio de horarios</p>
    </div>
    <div style="padding:40px;">
      <h2 style="color:#1A1714;font-size:24px;margin:0 0 16px;font-weight:700;">
        ${safeStudentName}, a&uacute;n no seleccionaste tus horarios
      </h2>
      <p style="color:#444;font-size:16px;line-height:1.6;margin:0 0 24px;">
        Para poder asignarte al grupo ideal de la <strong>Cohorte Mayo 2026</strong>,
        necesitamos que completes el formulario de horarios. Solo toma 2 minutos.
      </p>

      <div style="background:#FFF3ED;border:2px solid #C96342;border-radius:12px;padding:24px;margin:0 0 24px;text-align:center;">
        <p style="color:#666;font-size:14px;margin:0 0 16px;line-height:1.5;">
          Elige <strong>m&iacute;nimo 3 d&iacute;as</strong> con <strong>2 horarios por d&iacute;a</strong>.
          Sin esto, no podemos ubicarte en un grupo.
        </p>
        <a href="${horariosUrl}" style="display:inline-block;background:#C96342;color:#ffffff;text-decoration:none;padding:16px 40px;border-radius:8px;font-weight:700;font-size:18px;">
          Seleccionar mis horarios ahora
        </a>
      </div>

      <p style="color:#999;font-size:13px;line-height:1.5;">
        Si ya completaste tus horarios, ignora este mensaje.
        Dudas? Escr&iacute;benos al <a href="https://wa.me/56922450492" style="color:#C96342;">+56 9 2245 0492</a>.
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

  // Find enrollments where schedule hasn't been submitted
  // Only for enrollments created more than 24h ago (give them time first)
  const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()

  const { data: pendingSchedules, error } = await supabase
    .from("enrollments")
    .select("id, student_name, parent_email, created_at, schedule_reminder_count")
    .or("schedule_submitted.is.null,schedule_submitted.eq.false")
    .lt("created_at", twentyFourHoursAgo)
    .or("schedule_reminder_count.is.null,schedule_reminder_count.lt.2")

  if (error) {
    console.error("[cron/schedule-reminder] Error fetching:", error)
    return NextResponse.json({ error: "Database error" }, { status: 500 })
  }

  if (!pendingSchedules || pendingSchedules.length === 0) {
    return NextResponse.json({ message: "No pending schedule reminders", sent: 0 })
  }

  let sent = 0
  const errors: string[] = []

  for (const enrollment of pendingSchedules) {
    try {
      // Check if they actually completed schedule via schedule_preferences table
      const { data: scheduleData } = await supabase
        .from("schedule_preferences")
        .select("id")
        .eq("parent_email", enrollment.parent_email)
        .limit(1)

      if (scheduleData && scheduleData.length > 0) {
        // They completed it - mark enrollment
        await supabase
          .from("enrollments")
          .update({ schedule_submitted: true, schedule_submitted_at: new Date().toISOString() })
          .eq("id", enrollment.id)
        continue
      }

      const html = buildScheduleReminderHtml(enrollment.student_name, enrollment.parent_email)
      await sendGmail({
        to: enrollment.parent_email,
        subject: `${enrollment.student_name}, elige tus horarios para InnovaKids - Es obligatorio`,
        html,
      })

      const currentCount = enrollment.schedule_reminder_count || 0
      await supabase
        .from("enrollments")
        .update({
          schedule_reminder_count: currentCount + 1,
          schedule_reminder_last_at: new Date().toISOString(),
        })
        .eq("id", enrollment.id)

      sent++
    } catch (err: any) {
      console.error(`[cron/schedule-reminder] Error for ${enrollment.parent_email}:`, err.message)
      errors.push(enrollment.parent_email)
    }
  }

  // Notify admin
  if (sent > 0) {
    try {
      await sendGmail({
        to: "innovakidslatam@gmail.com",
        subject: `Recordatorio de horarios enviado: ${sent} emails`,
        html: `<h2>Resumen de recordatorios de horarios</h2>
<p><strong>Enviados:</strong> ${sent}</p>
<p><strong>Total pendientes:</strong> ${pendingSchedules.length}</p>
${errors.length > 0 ? `<p><strong>Errores:</strong> ${errors.join(", ")}</p>` : ""}
<p><strong>Fecha:</strong> ${new Date().toLocaleString("es-CL", { timeZone: "America/Santiago" })}</p>`,
      })
    } catch (_) {}
  }

  return NextResponse.json({ message: "Schedule reminders sent", sent, total: pendingSchedules.length, errors })
}
