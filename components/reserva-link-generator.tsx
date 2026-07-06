"use client"

import { useEffect, useState } from "react"

/**
 * Generador de link de reserva con deadline anclado al momento de ENVÍO.
 *
 * Ricardo/Francisca abre esta página, obtiene un link con ?d=<now+48h> y lo
 * envía por WhatsApp. El contador del lead corre desde ese instante, sin
 * importar cuándo abra el link (verá el tiempo real restante).
 *
 * Cada vez que se genera un link nuevo, son 48h frescas desde ese momento.
 */

const WINDOW_HOURS = 48

export function ReservaLinkGenerator() {
  const [origin, setOrigin] = useState("")
  const [deadline, setDeadline] = useState<number | null>(null)
  const [copied, setCopied] = useState<"" | "link" | "msg">("")

  const generar = () => {
    setDeadline(Date.now() + WINDOW_HOURS * 3_600_000)
    setCopied("")
  }

  useEffect(() => {
    setOrigin(window.location.origin)
    setDeadline(Date.now() + WINDOW_HOURS * 3_600_000)
  }, [])

  const link = deadline ? `${origin}/reservar?d=${deadline}` : ""
  const vence = deadline
    ? new Date(deadline).toLocaleString("es-CL", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" })
    : ""

  const mensaje =
    `Hola 👋 Te dejo el link para reservar el cupo de tu hijo en InnovaKids.\n\n` +
    `Tiene precio especial de reserva por 48 horas — luego sube. Aquí lo aseguras:\n${link}`

  const copiar = async (texto: string, cual: "link" | "msg") => {
    try {
      await navigator.clipboard.writeText(texto)
      setCopied(cual)
      setTimeout(() => setCopied(""), 2000)
    } catch {
      /* noop */
    }
  }

  return (
    <div className="w-full max-w-[620px] mx-auto">
      <p className="text-[11px] uppercase tracking-[0.28em] text-[#B5522F] font-semibold mb-3">
        Uso interno · Generador de link de reserva
      </p>
      <h1 className="font-display text-3xl md:text-4xl leading-tight tracking-tight text-[#2F2F2C] mb-3 font-normal">
        Link de reserva con 48h desde ahora.
      </h1>
      <p className="text-sm text-[#5A5751] mb-8 max-w-[54ch]">
        Genera un link, cópialo y envíalo por WhatsApp. El contador de 48 horas del lead
        empieza en este instante — abra cuando abra, verá el tiempo real que le queda antes
        de que el precio suba de $27 a $30.
      </p>

      <div className="bg-[#FAF7EF] border border-[#2F2F2C]/12 rounded-2xl p-6 md:p-8 shadow-[0_20px_60px_-24px_rgba(47,47,44,0.35)]">
        <label className="text-[11px] uppercase tracking-[0.2em] text-[#5A5751] mb-2 block">
          Link para enviar
        </label>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            readOnly
            value={link}
            onFocus={(e) => e.currentTarget.select()}
            className="flex-1 bg-white border border-[#2F2F2C]/15 rounded-md px-3 py-2.5 text-sm text-[#2F2F2C] font-mono select-all"
          />
          <button
            onClick={() => copiar(link, "link")}
            className="shrink-0 bg-[#C96342] hover:bg-[#9A4428] text-[#FAF7EF] px-5 py-2.5 text-sm font-semibold rounded-md transition-colors"
          >
            {copied === "link" ? "¡Copiado!" : "Copiar link"}
          </button>
        </div>

        <p className="text-xs text-[#5A5751] mt-3">
          Vence: <strong className="text-[#2F2F2C]">{vence}</strong> · precio $27 hasta esa hora, luego $30.
        </p>

        <div className="mt-6 pt-6 border-t border-[#2F2F2C]/10">
          <label className="text-[11px] uppercase tracking-[0.2em] text-[#5A5751] mb-2 block">
            Mensaje listo para WhatsApp
          </label>
          <div className="bg-white border border-[#2F2F2C]/15 rounded-md px-3 py-3 text-sm text-[#2F2F2C] whitespace-pre-wrap leading-relaxed">
            {mensaje}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 mt-3">
            <button
              onClick={() => copiar(mensaje, "msg")}
              className="flex-1 border border-[#2F2F2C]/20 hover:border-[#C96342] text-[#2F2F2C] px-5 py-2.5 text-sm font-semibold rounded-md transition-colors"
            >
              {copied === "msg" ? "¡Copiado!" : "Copiar mensaje completo"}
            </button>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(mensaje)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-[#25D366] hover:bg-[#1da851] text-white px-5 py-2.5 text-sm font-semibold rounded-md transition-colors"
            >
              Abrir en WhatsApp
            </a>
          </div>
        </div>

        <button
          onClick={generar}
          className="mt-6 w-full text-sm text-[#B5522F] hover:text-[#9A4428] underline underline-offset-4"
        >
          ↻ Generar un link nuevo (reinicia las 48h)
        </button>
      </div>
    </div>
  )
}
