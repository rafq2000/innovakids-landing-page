"use client"

import { useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { trackCTAClick } from "@/lib/gtag"

export function HeroLeadForm() {
  const [name, setName] = useState("")
  const [whatsapp, setWhatsapp] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !whatsapp) return

    // Fire-and-forget to Supabase
    try {
      const supabase = createClient()
      supabase
        .from("booking_leads")
        .insert({
          first_name: name,
          phone: whatsapp,
          country_code: "UNKNOWN",
          country_name: "Hero form",
          child_age: "unknown",
        })
        .then(() => {})
    } catch {}

    trackCTAClick("hero_lead_form")
    setSubmitted(true)

    // Scroll to full form
    setTimeout(() => {
      document.getElementById("sesion-estrategica")?.scrollIntoView({ behavior: "smooth" })
    }, 600)
  }

  if (submitted) {
    return (
      <div className="flex items-center gap-3 px-5 py-4 bg-[var(--terracotta)]/10 border border-[var(--terracotta)]/20 rounded-sm">
        <span className="text-[var(--terracotta)] text-lg">✓</span>
        <p className="text-sm text-[var(--ink)]">
          Datos guardados. Completa tu reserva abajo.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-end">
      <div className="flex-1 min-w-0">
        <label className="block font-mono-accent text-[9px] uppercase tracking-[0.18em] text-[var(--ink-muted)] mb-1.5">
          Tu nombre
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="María"
          required
          className="w-full bg-transparent border-0 border-b border-[var(--ink)]/20 py-2 text-base text-[var(--ink)] placeholder:text-[var(--ink)]/30 focus:outline-none focus:border-[var(--terracotta)] transition-colors"
        />
      </div>
      <div className="flex-1 min-w-0">
        <label className="block font-mono-accent text-[9px] uppercase tracking-[0.18em] text-[var(--ink-muted)] mb-1.5">
          WhatsApp
        </label>
        <input
          type="tel"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
          placeholder="+56 9 1234 5678"
          required
          className="w-full bg-transparent border-0 border-b border-[var(--ink)]/20 py-2 text-base text-[var(--ink)] placeholder:text-[var(--ink)]/30 focus:outline-none focus:border-[var(--terracotta)] transition-colors"
        />
      </div>
      <button
        type="submit"
        className="shrink-0 bg-[#C96342] hover:bg-[#9A4428] text-[#FAF7EF] px-6 py-3 text-sm font-semibold rounded-sm transition-colors"
      >
        Reservar clase gratis →
      </button>
    </form>
  )
}
