import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER || "innovakidslatam@gmail.com",
    pass: process.env.GMAIL_APP_PASSWORD,
  },
})

export async function sendGmail({
  to,
  subject,
  html,
}: {
  to: string
  subject: string
  html: string
}) {
  if (!process.env.GMAIL_APP_PASSWORD) {
    throw new Error("GMAIL_APP_PASSWORD not configured")
  }

  const info = await transporter.sendMail({
    from: `"InnovaKids" <${process.env.GMAIL_USER || "innovakidslatam@gmail.com"}>`,
    to,
    subject,
    html,
  })

  console.log("[gmail] Email sent:", info.messageId)
  return info
}
