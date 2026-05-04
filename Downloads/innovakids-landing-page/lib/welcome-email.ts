const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://www.innovakidslatam.com"

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

export function buildWelcomeEmailHtml({
  studentName,
  parentEmail,
  amount,
  paymentId,
}: {
  studentName: string
  parentEmail: string
  amount?: number
  paymentId?: string
}) {
  const safeStudentName = escapeHtml(studentName)
  const safeParentEmail = escapeHtml(parentEmail)
  const bienvenidaUrl = `${APP_URL}/bienvenida`
  const horariosUrl = `${APP_URL}/mis-horarios?email=${encodeURIComponent(parentEmail)}&student=${encodeURIComponent(studentName)}`
  const isPartial = (amount || 0) <= 30 && (amount || 0) > 0
  const paymentUrl = `${APP_URL}/pagar?option=remaining&email=${encodeURIComponent(parentEmail)}`

  const partialPaymentBlock = isPartial ? `
      <div style="background:#FEF3C7;border:2px solid #F59E0B;border-radius:12px;padding:24px;margin:0 0 24px;">
        <h3 style="color:#92400E;font-size:18px;margin:0 0 8px;font-weight:700;">
          &#9888; Importante: tu pago es una reserva
        </h3>
        <p style="color:#78350F;font-size:14px;margin:0 0 12px;line-height:1.6;">
          Reservaste tu cupo con <strong>$${amount} USD</strong>. Para confirmar tu lugar en la
          <strong>Cohorte Mayo 2026</strong>, debes completar el pago restante de <strong>$240 USD</strong>
          antes de la semana del 18 de mayo.
        </p>
        <a href="${paymentUrl}" style="display:inline-block;background:#F59E0B;color:#78350F;text-decoration:none;padding:14px 32px;border-radius:8px;font-weight:700;font-size:16px;">
          Completar mi pago ($240 USD)
        </a>
      </div>` : ""

  const confirmationText = isPartial
    ? `Tu reserva de <strong>$${amount} USD</strong> ha sido recibida. Tu cupo est&aacute; separado en la <strong>Cohorte Mayo 2026</strong> del Programa Vibe Explorer de InnovaKids.`
    : `Tu pago ha sido confirmado exitosamente. Ya eres parte de la <strong>Cohorte Mayo 2026</strong> del Programa Vibe Explorer de InnovaKids.`

  const footerText = isPartial
    ? `Este correo fue enviado a ${safeParentEmail} porque realizaste una reserva en el programa.`
    : `Este correo fue enviado a ${safeParentEmail} porque completaste el pago del programa.`

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bienvenidos a InnovaKids</title>
</head>
<body style="margin:0;padding:0;background:#FAF7EF;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;">
  <div style="max-width:600px;margin:0 auto;background:#ffffff;border:1px solid #e8e0d0;">

    <!-- Header -->
    <div style="background:#1A1714;padding:32px 40px;text-align:center;">
      <h1 style="margin:0;color:#FAF7EF;font-size:28px;font-weight:700;letter-spacing:-0.5px;">
        InnovaKids
      </h1>
      <p style="margin:8px 0 0;color:#C96342;font-size:12px;letter-spacing:3px;text-transform:uppercase;font-weight:600;">
        Programa Vibe Explorer
      </p>
    </div>

    <!-- Body -->
    <div style="padding:40px;">

      <h2 style="color:#1A1714;font-size:24px;margin:0 0 16px;font-weight:700;">
        &#127881; Bienvenido/a, ${safeStudentName}!
      </h2>
      <p style="color:#444;font-size:16px;line-height:1.6;margin:0 0 24px;">
        ${confirmationText}
      </p>
      ${amount ? `<div style="background:#F0FDF4;border:1px solid #BBF7D0;border-radius:8px;padding:16px;margin:0 0 24px;">
        <p style="color:#166534;font-size:14px;margin:0;line-height:1.5;">
          <strong>Comprobante:</strong> $${amount} USD${paymentId ? ` &middot; Ref: ${escapeHtml(paymentId)}` : ""}${isPartial ? " &middot; <em>Reserva parcial</em>" : " &middot; <em>Pago completo</em>"}
        </p>
      </div>` : ""}
      ${partialPaymentBlock}

      <!-- CTA principal: Horarios -->
      <div style="background:#FFF3ED;border:2px solid #C96342;border-radius:12px;padding:24px;margin:0 0 24px;text-align:center;">
        <h3 style="color:#C96342;font-size:18px;margin:0 0 8px;font-weight:700;">
          &#128197; Paso obligatorio: elige tus horarios
        </h3>
        <p style="color:#666;font-size:14px;margin:0 0 16px;line-height:1.5;">
          Para organizar los grupos, necesitamos que nos indiques <strong>m&iacute;nimo 3 d&iacute;as</strong> y <strong>2 horarios por d&iacute;a</strong> en los que tu hijo/a pueda asistir.
        </p>
        <a href="${horariosUrl}" style="display:inline-block;background:#C96342;color:#ffffff;text-decoration:none;padding:14px 32px;border-radius:8px;font-weight:700;font-size:16px;">
          Seleccionar mis horarios
        </a>
      </div>

      <!-- Secundario: Kit -->
      <p style="color:#666;font-size:14px;line-height:1.6;margin:0 0 24px;">
        Tambi&eacute;n puedes <a href="${bienvenidaUrl}" style="color:#C96342;font-weight:600;">descargar tu Kit de Bienvenida</a> con 8 documentos esenciales: carta, gu&iacute;a de padres, calendario, reglamento, manual de IA segura, 200 prompts y m&aacute;s.
      </p>

      <!-- Contacto directo -->
      <div style="background:#1A1714;border-radius:12px;padding:24px;margin:0 0 24px;text-align:center;">
        <h3 style="color:#FAF7EF;font-size:18px;margin:0 0 8px;font-weight:700;">
          &#128222; Contacto directo de administraci&oacute;n
        </h3>
        <p style="color:#ccc;font-size:14px;margin:0 0 16px;line-height:1.5;">
          Desde este momento puedes comunicarte con nosotros directamente:
        </p>
        <a href="https://wa.me/56922450492" style="display:inline-block;background:#25D366;color:#ffffff;text-decoration:none;padding:14px 32px;border-radius:8px;font-weight:700;font-size:16px;">
          WhatsApp +56 9 2245 0492
        </a>
      </div>

      <!-- Garantia -->
      <div style="background:#F0FDF4;border:1px solid #BBF7D0;border-radius:8px;padding:16px;margin:0 0 24px;text-align:center;">
        <p style="color:#166534;font-size:14px;margin:0;line-height:1.5;">
          &#128170; <strong>Garant&iacute;a de 10 d&iacute;as:</strong> Si no te convence el programa, te devolvemos el 100% de tu pago. Sin preguntas.
        </p>
      </div>

      <!-- Próximos pasos -->
      <h3 style="color:#1A1714;font-size:18px;margin:0 0 16px;font-weight:700;">
        Pr&oacute;ximos pasos
      </h3>
      <table style="width:100%;border-collapse:collapse;">
        <tr>
          <td style="padding:12px 16px;border-bottom:1px solid #eee;vertical-align:top;width:36px;">
            <span style="color:#C96342;font-weight:700;font-size:14px;">01</span>
          </td>
          <td style="padding:12px 16px;border-bottom:1px solid #eee;">
            <strong style="color:#1A1714;">Selecciona tus horarios</strong><br>
            <span style="color:#666;font-size:14px;">M&iacute;nimo 3 d&iacute;as con 2 horarios cada uno. Es obligatorio.</span>
          </td>
        </tr>
        ${isPartial ? `<tr>
          <td style="padding:12px 16px;border-bottom:1px solid #eee;vertical-align:top;">
            <span style="color:#C96342;font-weight:700;font-size:14px;">02</span>
          </td>
          <td style="padding:12px 16px;border-bottom:1px solid #eee;">
            <strong style="color:#1A1714;">Completa tu pago</strong><br>
            <span style="color:#666;font-size:14px;">Paga los $240 USD restantes antes de la semana del 18 de mayo.</span>
          </td>
        </tr>` : ""}
        <tr>
          <td style="padding:12px 16px;border-bottom:1px solid #eee;vertical-align:top;">
            <span style="color:#C96342;font-weight:700;font-size:14px;">${isPartial ? "03" : "02"}</span>
          </td>
          <td style="padding:12px 16px;border-bottom:1px solid #eee;">
            <strong style="color:#1A1714;">Descarga tu Kit de Bienvenida</strong><br>
            <span style="color:#666;font-size:14px;">Lee los documentos antes de la semana del 18 de mayo.</span>
          </td>
        </tr>
        <tr>
          <td style="padding:12px 16px;vertical-align:top;">
            <span style="color:#C96342;font-weight:700;font-size:14px;">${isPartial ? "04" : "03"}</span>
          </td>
          <td style="padding:12px 16px;">
            <strong style="color:#1A1714;">Escr&iacute;benos por WhatsApp</strong><br>
            <span style="color:#666;font-size:14px;">Al +56 9 2245 0492 para cualquier duda.</span>
          </td>
        </tr>
      </table>
    </div>

    <!-- Footer -->
    <div style="background:#F8F4EB;padding:24px 40px;text-align:center;border-top:1px solid #e8e0d0;">
      <p style="color:#999;font-size:13px;margin:0 0 8px;line-height:1.5;">
        InnovaKids Latam &middot; Programa de IA para ni&ntilde;os y adolescentes
      </p>
      <p style="color:#bbb;font-size:12px;margin:0 0 8px;">
        ${footerText}
      </p>
      <p style="margin:0;">
        <a href="mailto:innovakidslatam@gmail.com?subject=Desuscribirme" style="color:#bbb;font-size:11px;text-decoration:underline;">
          Cancelar suscripci&oacute;n
        </a>
      </p>
    </div>

  </div>
</body>
</html>`
}
