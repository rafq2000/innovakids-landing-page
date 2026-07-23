-- Certificados de egreso verificables (InnovaKids)
-- Correr UNA vez en el SQL editor de Supabase.
CREATE TABLE IF NOT EXISTS public.certificates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code TEXT UNIQUE NOT NULL,              -- ej. IK-2026-7QK4M (se dicta por teléfono)
  student_name TEXT NOT NULL,            -- nombre tal como aparece en el diploma
  course_name TEXT NOT NULL,            -- ej. "Creador Audiovisual con IA"
  level TEXT,                            -- ej. "Vibe Explorer"
  hours INTEGER DEFAULT 10,             -- horas académicas
  completion_date DATE NOT NULL,        -- fecha de egreso
  issued_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  instructor TEXT,                      -- docente que certifica
  revoked BOOLEAN DEFAULT FALSE,        -- para anular sin borrar (auditable)
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE UNIQUE INDEX IF NOT EXISTS idx_certificates_code ON public.certificates(code);
CREATE INDEX IF NOT EXISTS idx_certificates_student ON public.certificates(student_name);

-- RLS activada SIN política pública: la tabla solo se lee/escribe desde el
-- servidor con la service-role key (getCertificateByCode / issueCertificate).
-- El navegador nunca la toca directamente.
ALTER TABLE public.certificates ENABLE ROW LEVEL SECURITY;

COMMENT ON TABLE public.certificates IS 'Certificados de egreso verificables en /verificar/<code>';
COMMENT ON COLUMN public.certificates.code IS 'Código público único que valida el certificado';
COMMENT ON COLUMN public.certificates.revoked IS 'TRUE anula el certificado sin borrar el registro';
