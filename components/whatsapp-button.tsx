"use client"

import { useState, useEffect } from "react"
import { MessageCircle, X } from "lucide-react"
import { trackWhatsAppClick } from "@/lib/gtag"

export function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasInteracted) setShowTooltip(true)
    }, 15000)
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
    <div className="fixed bottom-6 right-6 z-[99999] flex flex-col items-end gap-3">
      {showTooltip && (
        <div className="relative bg-[#FAF7EF] text-[#2F2F2C] border border-[#2F2F2C]/15 shadow-xl rounded-sm p-4 max-w-[280px] animate-fadeIn">
          <button
            onClick={dismiss}
            className="absolute -top-2 -right-2 w-6 h-6 bg-[#2F2F2C] rounded-full flex items-center justify-center text-[#FAF7EF] hover:bg-[#C96342] transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-3 h-3" />
          </button>
          <p
            className="text-base font-normal mb-1.5 leading-snug"
            style={{ fontFamily: "'Charter', 'Georgia', serif" }}
          >
            ¿Tu hijo tiene 8–17 años?
          </p>
          <p className="text-xs text-[#5A5751] leading-relaxed">
            Averigua si califica para los cupos de la próxima cohorte.
          </p>
        </div>
      )}

      <button
        onClick={handleClick}
        className="relative w-14 h-14 rounded-full bg-[#C96342] hover:bg-[#A8502F] text-[#FAF7EF] shadow-lg flex items-center justify-center transition-colors"
        aria-label="Contactar por WhatsApp"
      >
        <span className="absolute inset-0 rounded-full border border-[#C96342] animate-ping opacity-60" />
        <MessageCircle className="w-6 h-6 relative z-10" />
      </button>
    </div>
  )
}

export default WhatsAppButton
