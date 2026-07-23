import { type NextRequest, NextResponse } from "next/server"
import { issueCertificate, listCertificates, setRevoked } from "@/lib/certificates"

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD

function unauthorized() {
  return NextResponse.json({ error: "Contrasena incorrecta" }, { status: 401 })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { password, action } = body

    if (!ADMIN_PASSWORD || password !== ADMIN_PASSWORD) {
      return unauthorized()
    }

    if (action === "list") {
      const certificates = await listCertificates()
      return NextResponse.json({ certificates })
    }

    if (action === "create") {
      const result = await issueCertificate({
        studentName: body.studentName,
        courseName: body.courseName,
        level: body.level,
        hours: typeof body.hours === "number" ? body.hours : Number(body.hours) || 10,
        completionDate: body.completionDate,
        instructor: body.instructor,
      })
      if (!result.ok) {
        return NextResponse.json({ error: result.error, needsTable: result.needsTable }, { status: 400 })
      }
      return NextResponse.json({ certificate: result.certificate })
    }

    if (action === "revoke" || action === "unrevoke") {
      const res = await setRevoked(body.code, action === "revoke")
      if (!res.ok) return NextResponse.json({ error: res.error }, { status: 400 })
      return NextResponse.json({ ok: true })
    }

    return NextResponse.json({ error: "Accion desconocida" }, { status: 400 })
  } catch (err) {
    console.error("[admin/certificates] Error:", err)
    return NextResponse.json({ error: "Error interno" }, { status: 500 })
  }
}
