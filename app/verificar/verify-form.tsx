"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search, Loader2 } from "lucide-react"

function clientNormalize(raw: string): string {
  return raw
    .toUpperCase()
    .replace(/[\s–—]+/g, "-")
    .replace(/[^A-Z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 24)
}

export function VerifyForm({ initialCode = "" }: { initialCode?: string }) {
  const router = useRouter()
  const [code, setCode] = useState(initialCode)
  const [loading, setLoading] = useState(false)

  function submit(e: React.FormEvent) {
    e.preventDefault()
    const clean = clientNormalize(code)
    if (!clean) return
    setLoading(true)
    router.push(`/verificar/${clean}`)
  }

  return (
    <form onSubmit={submit} className="w-full max-w-xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          inputMode="text"
          autoCapitalize="characters"
          spellCheck={false}
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="IK-2026-XXXXX"
          aria-label="Código del certificado"
          className="flex-1 rounded-lg border border-ink/15 bg-paper-card px-4 py-3.5 text-lg font-mono tracking-wide text-ink placeholder:text-ink-muted/50 outline-none focus:border-terracotta focus:ring-2 focus:ring-terracotta/25"
        />
        <button
          type="submit"
          disabled={loading || !code.trim()}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-terracotta px-6 py-3.5 text-base font-semibold text-paper-card transition-colors hover:bg-terracotta-hover disabled:opacity-50"
        >
          {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Search className="h-5 w-5" />}
          Verificar
        </button>
      </div>
      <p className="mt-3 text-sm text-ink-muted">
        El código aparece en el diploma del alumno (bajo el código QR).
      </p>
    </form>
  )
}
