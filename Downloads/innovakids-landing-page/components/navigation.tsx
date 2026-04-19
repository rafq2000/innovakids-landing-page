"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

interface NavigationProps {
  countryCode?: string
}

export function Navigation({ countryCode }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const calendlyUrl =
    "https://calendly.com/innovakidslatam/reunion-informativa-innovakids?hide_gdpr_banner=1&hide_event_type_details=1&primary_color=C96342"

  const basePath = countryCode ? `/${countryCode}` : ""

  const navLinks = [
    { href: `${basePath}/programa`, label: "Programa" },
    { href: `${basePath}/metodologia-aprender-creando`, label: "Metodología" },
    { href: `${basePath}/resultados`, label: "Resultados" },
    { href: "/blog", label: "Blog" },
  ]

  return (
    <nav
      className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "top-0 bg-[#F5F1E8]/95 backdrop-blur-md border-b border-[#2F2F2C]/10 shadow-[0_4px_20px_-12px_rgba(26,23,20,0.15)]"
          : "top-[44px] md:top-[40px] bg-[#FAF7EF]/90 backdrop-blur-sm border-b border-[#2F2F2C]/8"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-14 md:h-16">
          <a href="/" className="flex items-baseline gap-1.5 group" aria-label="InnovaKids - Inicio">
            <span className="font-display text-[22px] md:text-[26px] leading-none tracking-[-0.02em] text-[#1A1714]">
              Innova<em className="not-italic font-semibold text-[#C96342]">kids</em>
            </span>
            <span className="font-mono-accent text-[8px] md:text-[9px] uppercase tracking-[0.18em] text-[#1A1714]/55 hidden sm:inline pb-0.5">
              latam
            </span>
          </a>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#2F2F2C] hover:text-[#C96342] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#C96342] hover:bg-[#A8502F] text-[#FAF7EF] px-5 py-2.5 text-sm font-semibold rounded-sm transition-colors"
            >
              Agendar evaluación
            </a>
          </div>

          <button
            className="md:hidden text-[#2F2F2C] p-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-sm hover:bg-[#2F2F2C]/5 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-[#2F2F2C]/10 animate-fadeIn">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[#2F2F2C] hover:text-[#C96342] hover:bg-[#2F2F2C]/5 py-3 px-3 rounded-sm min-h-[44px] flex items-center transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center bg-[#C96342] hover:bg-[#A8502F] text-[#FAF7EF] px-5 py-3 text-sm font-semibold rounded-sm mt-3 transition-colors"
              >
                Agendar evaluación
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
