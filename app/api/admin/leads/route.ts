import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json()

    if (!ADMIN_PASSWORD || password !== ADMIN_PASSWORD) {
      return NextResponse.json({ error: "Contrasena incorrecta" }, { status: 401 })
    }

    const supabaseUrl = process.env.SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json({ error: "Error de configuracion" }, { status: 500 })
    }

    const supabase = createClient(supabaseUrl, supabaseKey)

    // Fetch all tables in parallel
    const [bookingRes, enrollmentRes, scheduleRes, waitlistRes] = await Promise.all([
      supabase
        .from("booking_leads")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(500),
      supabase
        .from("enrollments")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(500),
      supabase
        .from("schedule_preferences")
        .select("*")
        .order("updated_at", { ascending: false })
        .limit(500),
      supabase
        .from("course_waitlist")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(500),
    ])

    return NextResponse.json({
      booking_leads: bookingRes.data || [],
      enrollments: enrollmentRes.data || [],
      schedule_preferences: scheduleRes.data || [],
      course_waitlist: waitlistRes.data || [],
    })
  } catch (err) {
    console.error("[admin/leads] Error:", err)
    return NextResponse.json({ error: "Error interno" }, { status: 500 })
  }
}
