import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"
import { sendGmail } from "@/lib/gmail"

function escapeHtml(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
}

export async function POST(request: NextRequest) {
  try {
    const { parentName, email, whatsapp, studentName, studentAge, country, timezone, cohort, schedule } = await request.json()

    if (!parentName || !email || !whatsapp || !studentName || !studentAge || !country) {
      return NextResponse.json({ error: "Faltan datos requeridos" }, { status: 400 })
    }

    // Basic input validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Email inv\u00e1lido" }, { status: 400 })
    }
    const age = typeof studentAge === "number" ? studentAge : parseInt(studentAge)
    if (isNaN(age) || age < 8 || age > 17) {
      return NextResponse.json({ error: "Edad inv\u00e1lida" }, { status: 400 })
    }

    // Validate schedule only for current cohort (not "posterior")
    if (cohort !== "posterior") {
      const validDays = Object.entries(schedule || {}).filter(
        ([, slots]) => Array.isArray(slots) && (slots as string[]).length >= 2
      )
      if (validDays.length < 3) {
        return NextResponse.json(
          { error: "Debes seleccionar al menos 3 d\u00edas con 2 horarios cada uno" },
          { status: 400 }
        )
      }
    }

    const supabaseUrl = process.env.SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!supabaseUrl || !supabaseKey) {
      console.error("[schedule] Missing Supabase credentials")
      return NextResponse.json({ error: "Error de configuraci\u00f3n del servidor" }, { status: 500 })
    }

    const supabase = createClient(supabaseUrl, supabaseKey)

    // Upsert schedule preferences
    const { error } = await supabase.from("schedule_preferences").upsert(
      {
        parent_email: email,
        parent_name: parentName,
        student_name: studentName,
        student_age: studentAge,
        whatsapp: whatsapp,
        country: country,
        timezone: timezone || "UTC-4",
        cohort: cohort || "mayo-2026",
        schedule: cohort === "posterior" ? {} : (schedule || {}),
        updated_at: new Date().toISOString(),
      },
      { onConflict: "parent_email" }
    )

    if (error) {
      console.error("[schedule] Supabase error:", error)
      return NextResponse.json({ error: "Error al guardar los horarios" }, { status: 500 })
    }

    // Also update the enrollment record if it exists
    await supabase
      .from("enrollments")
      .update({
        schedule_submitted: true,
        schedule_submitted_at: new Date().toISOString(),
        whatsapp: whatsapp,
      })
      .eq("parent_email", email)

    // Send confirmation email (non-blocking)
    const safeStudentName = escapeHtml(studentName)
    sendGmail({
      to: email,
      subject: `Horarios recibidos - ${studentName} ya tiene su lugar en InnovaKids`,
      html: `<!DOCTYPE html>
<html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#FAF7EF;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;">
<div style="max-width:600px;margin:0 auto;background:#fff;border:1px solid #e8e0d0;">
  <div style="background:#1A1714;padding:24px 40px;text-align:center;">
    <h1 style="margin:0;color:#FAF7EF;font-size:24px;font-weight:700;">InnovaKids</h1>
  </div>
  <div style="padding:32px 40px;">
    <h2 style="color:#1A1714;font-size:22px;margin:0 0 16px;">Horarios recibidos correctamente</h2>
    <p style="color:#444;font-size:15px;line-height:1.6;margin:0 0 20px;">
      Recibimos la disponibilidad de <strong>${safeStudentName}</strong> (${timezone}).
      Te asignaremos al grupo ideal y te avisaremos por email y WhatsApp antes del inicio.
    </p>
    <div style="background:#F0FDF4;border:1px solid #BBF7D0;border-radius:8px;padding:16px;margin:0 0 20px;">
      <p style="color:#166534;font-size:14px;margin:0;">
        <strong>Pa&iacute;s:</strong> ${escapeHtml(country)} &middot;
        <strong>Zona:</strong> ${escapeHtml(timezone)} &middot;
        <strong>Cohorte:</strong> ${cohort === "posterior" ? "Curso posterior" : "Mayo 2026"}
      </p>
    </div>
    <p style="color:#999;font-size:13px;">
      Dudas? Escr&iacute;benos al <a href="https://wa.me/56922450492" style="color:#C96342;">+56 9 2245 0492</a>.
    </p>
  </div>
  <div style="background:#F8F4EB;padding:16px 40px;text-align:center;border-top:1px solid #e8e0d0;">
    <p style="color:#999;font-size:11px;margin:0;">InnovaKids Latam</p>
  </div>
</div>
</body></html>`,
    }).catch((err) => console.error("[schedule] Confirmation email error:", err))

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[schedule] Error:", error)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
