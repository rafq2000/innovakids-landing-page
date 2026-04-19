"use client"

import { useState } from "react"
import { faqs } from "@/lib/faq-data"

export function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <section
      id="faq"
      className="bg-[#F5F1E8] text-[#2F2F2C] py-28 md:py-40 border-t border-[#2F2F2C]/10"
    >
      <div className="max-w-[1100px] mx-auto px-6 md:px-10">

        {/* Eyebrow */}
        <div className="flex items-center gap-5 mb-16">
          <div className="h-px w-12 bg-[#C96342]" />
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold">
            Preguntas · Respuestas
          </p>
        </div>

        {/* Oversized editorial headline */}
        <h2
          className="text-6xl sm:text-7xl md:text-8xl lg:text-[104px] leading-[0.95] tracking-[-0.025em] font-normal mb-24 max-w-[16ch]"
          style={{ fontFamily: "'Charter', 'Georgia', serif" }}
        >
          Todo lo que te preguntas,{" "}
          <em className="italic text-[#C96342]">respondido</em>.
        </h2>

        {/* Q&A list — full-width, editorial */}
        <ul className="border-t border-[#2F2F2C]/20">
          {faqs.map((faq: any, i: number) => {
            const open = openIdx === i
            return (
              <li key={i} className="border-b border-[#2F2F2C]/20">
                <button
                  onClick={() => setOpenIdx(open ? null : i)}
                  className="w-full py-8 md:py-10 flex items-start gap-6 md:gap-10 text-left group"
                  aria-expanded={open}
                >
                  <span className="text-xs text-[#C96342] font-semibold tabular-nums tracking-[0.15em] shrink-0 w-10 md:w-14 pt-3">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className={`flex-1 text-2xl md:text-4xl leading-[1.1] tracking-[-0.01em] transition-colors ${
                      open ? "text-[#C96342]" : "text-[#2F2F2C] group-hover:text-[#C96342]"
                    }`}
                    style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                  >
                    {faq.question}
                  </h3>
                  <span
                    className={`text-3xl font-light leading-none shrink-0 pt-2 transition-transform ${
                      open ? "text-[#C96342] rotate-45" : "text-[#2F2F2C]/50"
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                {open && (
                  <div className="pb-12 md:pb-16 pl-16 md:pl-24 pr-8 md:pr-16 animate-fadeIn">
                    <p
                      className="text-lg md:text-xl text-[#5A5751] leading-[1.6] max-w-[62ch]"
                      style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                )}
              </li>
            )
          })}
        </ul>

        {/* Minimal closing line — no boxes */}
        <div className="mt-24 md:mt-32 grid md:grid-cols-12 gap-10 items-baseline">
          <p
            className="md:col-span-6 text-4xl md:text-5xl leading-[1.05] tracking-[-0.02em]"
            style={{ fontFamily: "'Charter', 'Georgia', serif" }}
          >
            ¿Algo más?{" "}
            <em className="italic text-[#C96342]">Conversemos.</em>
          </p>
          <div className="md:col-span-6 flex flex-col items-start gap-5">
            <a
              href="#sesion-estrategica"
              className="text-lg md:text-xl text-[#2F2F2C] hover:text-[#C96342] underline underline-offset-[6px] decoration-[#C96342]/40 hover:decoration-[#C96342] decoration-1 transition-colors"
              style={{ fontFamily: "'Charter', 'Georgia', serif" }}
            >
              Agendar evaluación gratuita →
            </a>
            <a
              href="https://wa.me/56964754219?text=Hola%2C%20tengo%20una%20pregunta%20que%20no%20está%20en%20las%20FAQs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg md:text-xl text-[#2F2F2C] hover:text-[#C96342] underline underline-offset-[6px] decoration-[#2F2F2C]/20 hover:decoration-[#C96342] decoration-1 transition-colors"
              style={{ fontFamily: "'Charter', 'Georgia', serif" }}
            >
              Escribir por WhatsApp →
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
