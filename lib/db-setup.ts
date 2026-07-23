import { createClient } from "@supabase/supabase-js"

let tablesChecked = false

export async function ensureTables() {
  if (tablesChecked) return

  const supabaseUrl = process.env.SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!supabaseUrl || !supabaseKey) return

  const supabase = createClient(supabaseUrl, supabaseKey)

  // Test if enrollments table exists by trying a simple select
  const { error: enrollErr } = await supabase.from("enrollments").select("id").limit(1)

  if (enrollErr?.code === "42P01") {
    // Table doesn't exist - create via SQL
    console.log("[db-setup] Creating enrollments table...")
    const { error } = await supabase.rpc("exec_sql", {
      sql: `
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
      `,
    })
    if (error) {
      console.warn("[db-setup] Could not create enrollments via RPC - create manually")
    }
  }

  const { error: schedErr } = await supabase.from("schedule_preferences").select("id").limit(1)

  if (schedErr?.code === "42P01") {
    console.log("[db-setup] Creating schedule_preferences table...")
    const { error: err2 } = await supabase.rpc("exec_sql", {
      sql: `
        CREATE TABLE IF NOT EXISTS schedule_preferences (
          id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
          parent_email TEXT UNIQUE NOT NULL,
          student_name TEXT NOT NULL,
          schedule JSONB NOT NULL,
          created_at TIMESTAMPTZ DEFAULT NOW(),
          updated_at TIMESTAMPTZ DEFAULT NOW()
        );
        CREATE INDEX IF NOT EXISTS idx_schedule_email ON schedule_preferences(parent_email);
      `,
    })
    if (err2) {
      console.warn("[db-setup] Could not create schedule_preferences via RPC - create manually")
    }
  }

  const { error: certErr } = await supabase.from("certificates").select("id").limit(1)

  if (certErr?.code === "42P01") {
    console.log("[db-setup] Creating certificates table...")
    const { error: err3 } = await supabase.rpc("exec_sql", {
      sql: `
        CREATE TABLE IF NOT EXISTS certificates (
          id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
          code TEXT UNIQUE NOT NULL,
          student_name TEXT NOT NULL,
          course_name TEXT NOT NULL,
          level TEXT,
          hours INTEGER DEFAULT 10,
          completion_date DATE NOT NULL,
          issued_at TIMESTAMPTZ DEFAULT NOW(),
          instructor TEXT,
          revoked BOOLEAN DEFAULT FALSE,
          created_at TIMESTAMPTZ DEFAULT NOW()
        );
        CREATE UNIQUE INDEX IF NOT EXISTS idx_certificates_code ON certificates(code);
      `,
    })
    if (err3) {
      console.warn("[db-setup] Could not create certificates via RPC - run scripts/006_create_certificates.sql manually")
    }
  }

  tablesChecked = true
}
