"use server"

import { createClient } from "@/lib/supabase/server"
import { sendGmail } from "@/lib/gmail"

function escapeHtml(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
}

export async function sendContactEmail(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const whatsapp = formData.get("whatsapp") as string
  const message = formData.get("message") as string

  // Validate required fields
  if (!name || !email || !message) {
    return { success: false, error: "Por favor completa todos los campos requeridos" }
  }

  try {
    const supabase = await createClient()

    const { error } = await supabase.from("contact_submissions").insert({
      name,
      email,
      whatsapp,
      message,
    })

    if (error) {
      console.error("[v0] Error saving to Supabase:", error)
      throw error
    }

    // Notify admin by email (non-blocking)
    sendGmail({
      to: "innovakidslatam@gmail.com",
      subject: `Nuevo mensaje de contacto: ${name}`,
      html: `<h2>Nuevo mensaje desde el formulario de contacto</h2>
<p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
<p><strong>Email:</strong> ${escapeHtml(email)}</p>
<p><strong>WhatsApp:</strong> ${escapeHtml(whatsapp || "No proporcionado")}</p>
<p><strong>Mensaje:</strong></p>
<p>${escapeHtml(message)}</p>
<p><strong>Fecha:</strong> ${new Date().toLocaleString("es-CL", { timeZone: "America/Santiago" })}</p>`,
    }).catch((err) => console.error("[contact] Error sending admin notification:", err))

    // Auto-response email to the user (non-blocking)
    sendGmail({
      to: email,
      subject: "Recibimos tu consulta - InnovaKids",
      html: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
<h2 style="color: #7c3aed;">Hola ${escapeHtml(name)},</h2>
<p>Recibimos tu mensaje y te responderemos pronto.</p>
<p>Mientras tanto, puedes agendar una <strong>clase gratuita</strong> para que tu hijo/a conozca nuestro programa:</p>
<p style="text-align: center; margin: 24px 0;">
  <a href="https://innovakidslatam.com/clase-gratis" style="background-color: #7c3aed; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold;">Agendar clase gratuita</a>
</p>
<p style="color: #666; font-size: 14px;">- Equipo InnovaKids</p>
</div>`,
    }).catch((err) => console.error("[contact] Error sending auto-response email:", err))

    // Notify n8n to enter WhatsApp bot pipeline (non-blocking)
    const n8nBaseUrl = process.env.N8N_WEBHOOK_URL
    if (n8nBaseUrl) {
      fetch(`${n8nBaseUrl}/webhook/innovakids-webhook`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "contact_form",
          name,
          email,
          phone: whatsapp,
          message,
          timestamp: new Date().toISOString(),
        }),
        signal: AbortSignal.timeout(5000),
      })
        .then(() => console.log("[n8n] Contact form notification sent"))
        .catch((err) => console.error("[n8n] Failed to notify contact form (non-critical):", err))
    } else {
      console.warn("[n8n] N8N_WEBHOOK_URL not configured — skipping contact form notification")
    }

    console.log("[v0] Contact submission saved successfully!")
    return { success: true }
  } catch (error) {
    console.error("[v0] Error saving contact submission:", error)
    return { success: false, error: "Error al enviar el mensaje. Por favor intenta nuevamente." }
  }
}
