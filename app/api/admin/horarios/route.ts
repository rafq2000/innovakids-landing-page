import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json()

    if (!ADMIN_PASSWORD || password !== ADMIN_PASSWORD) {
      return NextResponse.json({ error: "Contraseña incorrecta" }, { status: 401 })
    }

    const supabaseUrl = process.env.SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json({ error: "Error de configuración" }, { status: 500 })
    }

    const supabase = createClient(supabaseUrl, supabaseKey)

    const { data, error } = await supabase
      .from("schedule_preferences")
      .select("*")
      .order("updated_at", { ascending: false })

    if (error) {
      console.error("[admin/horarios] Supabase error:", error)
      return NextResponse.json({ error: "Error al obtener datos" }, { status: 500 })
    }

    return NextResponse.json({ data })
  } catch (err) {
    console.error("[admin/horarios] Error:", err)
    return NextResponse.json({ error: "Error interno" }, { status: 500 })
  }
}
