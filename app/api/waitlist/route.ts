import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"
import { sendGmail } from "@/lib/gmail"

function escapeHtml(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
}

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!supabaseUrl || !supabaseKey) {
      console.warn("Supabase credentials missing in waitlist route")
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 })
    }

    const body = await request.json()
    const { firstName, lastName, email, phone, countryCode, childAge, courseName } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !courseName) {
      return NextResponse.json({ error: "Faltan campos requeridos" }, { status: 400 })
    }

    const supabase = createClient(supabaseUrl, supabaseKey)

    const { data, error } = await supabase
      .from("course_waitlist")
      .insert([
        {
          email: email.toLowerCase(),
          first_name: firstName,
          last_name: lastName,
          phone: phone || null,
          country_code: countryCode || null,
          course_name: courseName,
          child_age: childAge || null,
        },
      ])
      .select()

    if (error) {
      console.error("[waitlist] Supabase error:", error)
      return NextResponse.json(
        { error: "Error al registrar en la lista de espera. Por favor intenta nuevamente." },
        { status: 500 },
      )
    }

    const safeName = escapeHtml(`${firstName} ${lastName}`)

    // Send confirmation email to user (non-blocking)
    sendGmail({
      to: email.toLowerCase(),
      subject: `${firstName}, quedaste en la lista de espera de InnovaKids`,
      html: `<!DOCTYPE html>
<html lang="es"><head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#FAF7EF;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;">
<div style="max-width:600px;margin:0 auto;background:#fff;border:1px solid #e8e0d0;">
  <div style="background:#1A1714;padding:24px 40px;text-align:center;">
    <h1 style="margin:0;color:#FAF7EF;font-size:24px;font-weight:700;">InnovaKids</h1>
  </div>
  <div style="padding:32px 40px;">
    <h2 style="color:#1A1714;font-size:22px;margin:0 0 16px;">Quedaste en la lista de espera</h2>
    <p style="color:#444;font-size:15px;line-height:1.6;margin:0 0 20px;">
      Hola ${safeName}, te confirmamos que quedaste registrado/a en la lista de espera para
      <strong>${escapeHtml(courseName)}</strong>.
    </p>
    <p style="color:#444;font-size:15px;line-height:1.6;margin:0 0 20px;">
      Te avisaremos por email en cuanto se abran los cupos. Mientras tanto, si tienes
      preguntas escr&iacute;benos por WhatsApp al
      <a href="https://wa.me/56964754219" style="color:#C96342;">+56 9 6475 4219</a>.
    </p>
  </div>
  <div style="background:#F8F4EB;padding:16px 40px;text-align:center;border-top:1px solid #e8e0d0;">
    <p style="color:#999;font-size:11px;margin:0;">InnovaKids Latam</p>
  </div>
</div>
</body></html>`,
    }).catch((err) => console.error("[waitlist] Confirmation email error:", err))

    // Notify admin (non-blocking)
    sendGmail({
      to: "innovakidslatam@gmail.com",
      subject: `Nueva lista de espera: ${firstName} ${lastName} — ${courseName}`,
      html: `<h2>Nuevo registro en lista de espera</h2>
<p><strong>Nombre:</strong> ${safeName}</p>
<p><strong>Email:</strong> ${escapeHtml(email)}</p>
<p><strong>Tel&eacute;fono:</strong> ${escapeHtml(phone || "N/A")}</p>
<p><strong>Edad hijo:</strong> ${escapeHtml(String(childAge || "N/A"))}</p>
<p><strong>Curso:</strong> ${escapeHtml(courseName)}</p>
<p><strong>Fecha:</strong> ${new Date().toLocaleString("es-CL", { timeZone: "America/Santiago" })}</p>`,
    }).catch((err) => console.error("[waitlist] Admin notification error:", err))

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("[waitlist] Error processing:", error)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
