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

    console.log("[v0] Contact submission saved successfully!")
    return { success: true }
  } catch (error) {
    console.error("[v0] Error saving contact submission:", error)
    return { success: false, error: "Error al enviar el mensaje. Por favor intenta nuevamente." }
  }
}
