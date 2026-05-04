import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

export const dynamic = "force-dynamic"

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization")
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const supabaseUrl = process.env.SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.json({ error: "Supabase not configured" }, { status: 500 })
  }

  const supabase = createClient(supabaseUrl, supabaseKey)
  const results: string[] = []

  // Check and report enrollments table
  const { error: e1 } = await supabase.from("enrollments").select("id").limit(1)
  if (e1?.code === "42P01") {
    results.push("enrollments: NO EXISTE - debes crearla en Supabase SQL Editor")
  } else if (e1) {
    results.push(`enrollments: error ${e1.code} - ${e1.message}`)
  } else {
    results.push("enrollments: OK")
  }

  // Check schedule_preferences table
  const { error: e2 } = await supabase.from("schedule_preferences").select("id").limit(1)
  if (e2?.code === "42P01") {
    results.push("schedule_preferences: NO EXISTE - debes crearla en Supabase SQL Editor")
  } else if (e2) {
    results.push(`schedule_preferences: error ${e2.code} - ${e2.message}`)
  } else {
    results.push("schedule_preferences: OK")
  }

  // Check Gmail config
  results.push(process.env.GMAIL_APP_PASSWORD ? "gmail: OK" : "gmail: FALTA GMAIL_APP_PASSWORD")
  results.push(process.env.GMAIL_USER ? `gmail_user: ${process.env.GMAIL_USER}` : "gmail_user: usando default innovakidslatam@gmail.com")

  // Check payment configs
  results.push(process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID ? "paypal: OK" : "paypal: NO CONFIGURADO")
  results.push(process.env.MERCADOPAGO_ACCESS_TOKEN ? "mercadopago: OK" : "mercadopago: NO CONFIGURADO")

  return NextResponse.json({
    status: "setup check",
    results,
    sql_to_run: `-- Pega esto en Supabase SQL Editor si las tablas no existen:

CREATE TABLE IF NOT EXISTS enrollments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  student_name TEXT NOT NULL,
  parent_email TEXT NOT NULL,
  payment_method TEXT NOT NULL,
  amount NUMERIC NOT NULL DEFAULT 0,
  payment_id TEXT,
  payment_option TEXT,
  welcome_email_sent BOOLEAN DEFAULT FALSE,
  welcome_email_sent_at TIMESTAMPTZ,
  schedule_submitted BOOLEAN DEFAULT FALSE,
  schedule_submitted_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_enrollments_email ON enrollments(parent_email);

CREATE TABLE IF NOT EXISTS schedule_preferences (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  parent_email TEXT UNIQUE NOT NULL,
  student_name TEXT NOT NULL,
  schedule JSONB NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_schedule_email ON schedule_preferences(parent_email);

ALTER TABLE enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE schedule_preferences ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Service role full access" ON enrollments;
CREATE POLICY "Service role full access" ON enrollments FOR ALL USING (true);
DROP POLICY IF EXISTS "Service role full access" ON schedule_preferences;
CREATE POLICY "Service role full access" ON schedule_preferences FOR ALL USING (true);`,
  })
}
