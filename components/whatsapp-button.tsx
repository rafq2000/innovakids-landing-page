"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { trackWhatsAppClick } from "@/lib/gtag"

export function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasInteracted) setShowTooltip(true)
    }, 12000)
    return () => clearTimeout(timer)
  }, [hasInteracted])

  const handleClick = () => {
    setHasInteracted(true)
    setShowTooltip(false)
    trackWhatsAppClick()
    window.open(
      "https://wa.me/56964754219?text=Hola%2C%20quiero%20saber%20si%20mi%20hijo%20califica%20para%20InnovaKids",
      "_blank"
    )
  }

  const dismiss = (e: React.MouseEvent) => {
    e.stopPropagation()
    setShowTooltip(false)
    setHasInteracted(true)
  }

  return (
    <div className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-[99999] flex flex-col items-end gap-3">
      {showTooltip && (
        <div className="relative bg-[#FAF7EF] text-[#2F2F2C] border border-[#2F2F2C]/15 shadow-2xl rounded-lg p-4 pr-6 max-w-[300px] animate-fadeIn">
          <button
            onClick={dismiss}
            className="absolute -top-2 -right-2 w-6 h-6 bg-[#2F2F2C] rounded-full flex items-center justify-center text-[#FAF7EF] hover:bg-[#C96342] transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-3 h-3" />
          </button>
          <p
            className="text-base font-semibold mb-1.5 leading-snug"
            style={{ fontFamily: "'Charter', 'Georgia', serif" }}
          >
            👋 ¿Tu hijo tiene 8–17 años?
          </p>
          <p className="text-xs text-[#5A5751] leading-relaxed mb-2">
            Te respondemos en menos de 5 min por WhatsApp y te decimos si califica.
          </p>
          <p className="text-[10px] uppercase tracking-[0.18em] text-[#25D366] font-bold flex items-center gap-1.5">
            <span className="relative flex w-2 h-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]"></span>
            </span>
            En línea ahora
          </p>
        </div>
      )}

      <button
        onClick={handleClick}
        className="group relative w-16 h-16 md:w-[68px] md:h-[68px] rounded-full bg-[#25D366] hover:bg-[#1DA851] text-white shadow-[0_8px_30px_-4px_rgba(37,211,102,0.6)] hover:shadow-[0_12px_40px_-4px_rgba(37,211,102,0.75)] hover:scale-105 flex items-center justify-center transition-all duration-300"
        aria-label="Contactar por WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        <svg viewBox="0 0 32 32" className="w-8 h-8 md:w-9 md:h-9 relative z-10 fill-white" aria-hidden>
          <path d="M16.001 3.2c-7.069 0-12.8 5.731-12.8 12.8 0 2.262.591 4.482 1.715 6.435L3.2 28.8l6.516-1.706a12.78 12.78 0 0 0 6.285 1.6h.005c7.066 0 12.794-5.731 12.794-12.8 0-3.42-1.331-6.633-3.748-9.05A12.71 12.71 0 0 0 16.001 3.2zm0 23.471h-.004a10.65 10.65 0 0 1-5.426-1.484l-.39-.231-4.034 1.057 1.077-3.93-.254-.404a10.62 10.62 0 0 1-1.626-5.679c.001-5.876 4.785-10.66 10.66-10.66 2.846 0 5.521 1.11 7.532 3.124a10.59 10.59 0 0 1 3.124 7.541c-.003 5.876-4.787 10.66-10.659 10.66zm5.85-7.984c-.32-.16-1.896-.936-2.19-1.043-.293-.107-.508-.16-.722.16-.214.32-.829 1.043-1.016 1.258-.187.214-.374.241-.694.08-.32-.16-1.353-.499-2.578-1.59-.953-.85-1.596-1.9-1.783-2.221-.187-.32-.02-.493.14-.652.144-.143.32-.374.48-.561.16-.187.214-.32.32-.534.107-.214.054-.401-.026-.561-.08-.16-.722-1.738-.989-2.379-.26-.625-.524-.541-.722-.55l-.615-.011a1.18 1.18 0 0 0-.856.401c-.293.32-1.123 1.097-1.123 2.674 0 1.578 1.149 3.103 1.31 3.317.16.214 2.262 3.453 5.481 4.844.766.331 1.364.528 1.83.676.769.244 1.469.21 2.022.127.617-.092 1.896-.775 2.164-1.524.267-.749.267-1.391.187-1.524-.08-.133-.293-.214-.614-.374z"/>
        </svg>
      </button>
    </div>
  )
}

export default WhatsAppButton
