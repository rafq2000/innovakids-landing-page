import { type NextRequest, NextResponse } from "next/server"
import { saveEnrollmentAndSendWelcome } from "@/lib/enrollment"

export async function POST(request: NextRequest) {
  try {
    // Protect with a secret to prevent abuse (spam relay)
    const authHeader = request.headers.get("authorization")
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { studentName, parentEmail, paymentMethod, amount, paymentId, paymentOption } =
      await request.json()

    if (!studentName || !parentEmail) {
      return NextResponse.json(
        { error: "studentName and parentEmail are required" },
        { status: 400 }
      )
    }

    const result = await saveEnrollmentAndSendWelcome({
      studentName,
      parentEmail,
      paymentMethod: paymentMethod || "manual",
      amount: amount || 0,
      paymentId,
      paymentOption,
    })

    return NextResponse.json({ success: true, emailSent: result.emailSent })
  } catch (error: any) {
    console.error("[welcome-email] Error:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
