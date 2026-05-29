-- Run this in your Supabase SQL Editor to create the required tables

-- 1. Enrollments table: stores every confirmed payment + welcome email status
CREATE TABLE IF NOT EXISTS enrollments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  student_name TEXT NOT NULL,
  parent_email TEXT NOT NULL,
  payment_method TEXT NOT NULL, -- 'paypal', 'mercadopago', 'stripe'
  amount NUMERIC NOT NULL DEFAULT 0,
  payment_id TEXT,
  payment_option TEXT,
  welcome_email_sent BOOLEAN DEFAULT FALSE,
  welcome_email_sent_at TIMESTAMPTZ,
  schedule_submitted BOOLEAN DEFAULT FALSE,
  schedule_submitted_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for quick lookups by email
CREATE INDEX IF NOT EXISTS idx_enrollments_email ON enrollments(parent_email);

-- 2. Schedule preferences table: stores the student's preferred days/times
CREATE TABLE IF NOT EXISTS schedule_preferences (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  parent_email TEXT UNIQUE NOT NULL,
  student_name TEXT NOT NULL,
  schedule JSONB NOT NULL, -- { "lunes": ["09:00-10:00", "15:00-16:00"], "miercoles": [...], ... }
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for quick lookups
CREATE INDEX IF NOT EXISTS idx_schedule_email ON schedule_preferences(parent_email);

-- 3. Enable Row Level Security (optional but recommended)
ALTER TABLE enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE schedule_preferences ENABLE ROW LEVEL SECURITY;

-- Allow service role full access (your server-side code uses service role key)
CREATE POLICY "Service role full access" ON enrollments FOR ALL USING (true);
CREATE POLICY "Service role full access" ON schedule_preferences FOR ALL USING (true);
