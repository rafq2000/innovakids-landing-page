"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

/**
 * Reserva Express con urgencia real de 48 horas.
 *
 * Precio del depósito de reserva:
 *   - Antes del deadline: $27 USD  → /pagar?option=reserve
 *   - Después del deadline: $30 USD → /pagar?option=reserve30
 *
 * ¿De dónde sale el deadline?
 *   1. Si el link trae ?d=<unixMs>, se usa ese instante (deadline autoritativo
 *      que Francisca/Ricardo embeben al enviar el link a un lead específico).
 *   2. Si no, se usa ?h=<horas> (default 48) para arrancar un contador propio
 *      por dispositivo en la PRIMERA visita, guardado en localStorage para que
 *      no se reinicie al refrescar. Así un link genérico innovakidslatam.com/reservar
 *      igual crea urgencia por persona.
 */

const STORAGE_KEY = "ik_reserva_deadline_v1"

type T = { h: number; m: number; s: number; expired: boolean }

function fmt(ms: number): T {
  const diff = Math.max(0, ms - Date.now())
  return {
    h: Math.floor(diff / 3_600_000),
    m: Math.floor((diff % 3_600_000) / 60_000),
    s: Math.floor((diff % 60_000) / 1000),
    expired: diff <= 0,
  }
}

export function ReservaExpress() {
  const [deadline, setDeadline] = useState<number | null>(null)
  const [t, setT] = useState<T>({ h: 0, m: 0, s: 0, expired: false })

  useEffect(() => {
    const url = new URL(window.location.href)
    const dParam = url.searchParams.get("d")
    const hParam = Number(url.searchParams.get("h"))
    const windowHours = Number.isFinite(hParam) && hParam > 0 ? hParam : 48

    let dl: number
    if (dParam && Number.isFinite(Number(dParam))) {
      // Deadline autoritativo embebido en el link
      dl = Number(dParam)
    } else {
      // Contador por dispositivo: arranca en la primera visita
      const saved = Number(localStorage.getItem(STORAGE_KEY))
      if (saved && Number.isFinite(saved) && saved > Date.now() - windowHours * 3_600_000) {
        dl = saved
      } else {
        dl = Date.now() + windowHours * 3_600_000
        localStorage.setItem(STORAGE_KEY, String(dl))
      }
    }
    setDeadline(dl)
    setT(fmt(dl))
    const id = setInterval(() => setT(fmt(dl)), 1000)
    return () => clearInterval(id)
  }, [])

  const active = deadline !== null && !t.expired
  const price = active ? 27 : 30
  const payOption = active ? "reserve" : "reserve30"
  const pad = (n: number) => n.toString().padStart(2, "0")

  return (
    <div className="w-full max-w-[560px] mx-auto">
      {/* Badge de urgencia */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <span className="relative flex w-2.5 h-2.5">
          <span
            className={`absolute inline-flex h-full w-full rounded-full opacity-75 ${active ? "animate-ping bg-[#C96342]" : "bg-[#5A5751]"}`}
          />
          <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${active ? "bg-[#C96342]" : "bg-[#5A5751]"}`} />
        </span>
        <span className="font-mono-accent text-[11px] uppercase tracking-[0.22em] text-[#B5522F] font-semibold">
          {active ? "Precio de reserva anticipada · por tiempo limitado" : "La ventana de precio anticipado cerró"}
        </span>
      </div>

      <div className="bg-[#FAF7EF] border border-[#2F2F2C]/12 rounded-2xl p-8 md:p-10 shadow-[0_20px_60px_-24px_rgba(47,47,44,0.35)]">
        <p className="text-[11px] uppercase tracking-[0.28em] text-[#B5522F] font-semibold mb-4">
          Reserva de cupo · Cohorte Agosto 2026
        </p>
        <h1 className="font-display text-4xl md:text-5xl leading-[1.02] tracking-tight text-[#2F2F2C] mb-6 font-normal">
          Asegura el cupo de tu hijo hoy.
        </h1>

        {/* Precio dinámico */}
        <div className="flex items-baseline gap-3 mb-1">
          <span className="font-display text-6xl md:text-7xl leading-none text-[#2F2F2C]">${price}</span>
          <span className="text-base text-[#5A5751] uppercase tracking-widest">USD</span>
          {active && (
            <span className="text-lg text-[#5A5751] line-through decoration-[#C96342]/60 ml-1">$30</span>
          )}
        </div>
        <p className="text-sm text-[#5A5751] mb-8">
          {active
            ? "Depósito reembolsable para bloquear el cupo. Se descuenta del valor del programa."
            : "Depósito reembolsable para bloquear el cupo. Se descuenta del valor del programa."}
        </p>

        {/* Cuenta regresiva */}
        {active ? (
          <div className="mb-8" aria-live="polite">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#5A5751] mb-3">
              El precio sube a <strong className="text-[#2F2F2C]">$30 USD</strong> en:
            </p>
            <div className="flex items-end gap-4">
              {[
                { v: t.h, l: "HORAS" },
                { v: t.m, l: "MIN" },
                { v: t.s, l: "SEG" },
              ].map((it, i) => (
                <div key={i} className="flex flex-col items-start">
                  <span
                    suppressHydrationWarning
                    className="font-display text-5xl md:text-6xl leading-[0.85] tabular-nums text-[#2F2F2C]"
                  >
                    {pad(it.v)}
                  </span>
                  <span className="font-mono-accent text-[10px] text-[#5A5751] tracking-[0.25em] mt-1.5">
                    {it.l}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="mb-8 rounded-lg border border-[#2F2F2C]/12 bg-[#F5F1E8] px-4 py-3">
            <p className="text-sm text-[#5A5751]">
              El precio anticipado de $27 ya no está disponible. Puedes reservar tu cupo por{" "}
              <strong className="text-[#2F2F2C]">$30 USD</strong>.
            </p>
          </div>
        )}

        <Link
          href={`/pagar?option=${payOption}`}
          className="group inline-flex w-full items-center justify-center gap-3 bg-[#C96342] hover:bg-[#9A4428] text-[#FAF7EF] px-8 py-4 text-base font-semibold rounded-sm shadow-[0_10px_30px_-12px_rgba(201,99,66,0.55)] hover:shadow-[0_14px_40px_-12px_rgba(201,99,66,0.7)] transition-all duration-300"
        >
          <span>Reservar el cupo por ${price} USD</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
            →
          </span>
        </Link>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] uppercase tracking-[0.14em] text-[#5A5751]">
          <span>Depósito 100% reembolsable</span>
          <span className="opacity-40">·</span>
          <span>Garantía de 10 días</span>
          <span className="opacity-40">·</span>
          <span>Pago seguro 🔒</span>
        </div>
      </div>

      <p className="text-center text-sm text-[#5A5751] mt-6">
        ¿Dudas antes de reservar?{" "}
        <a
          href="https://wa.me/56964754219?text=Hola%2C%20quiero%20reservar%20el%20cupo%20de%20mi%20hijo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#B5522F] underline underline-offset-4 hover:text-[#9A4428]"
        >
          Escríbenos por WhatsApp →
        </a>
      </p>
    </div>
  )
}
