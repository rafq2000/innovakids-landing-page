"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { FAQSection } from "@/components/faq-section"
import { EXPLORER_CLASSES, MAKER_CORE, TRACKS } from "@/lib/curriculum-data"
import { COHORT } from "@/lib/site-config"
import type { CountryConfig } from "@/lib/countries-config"

interface ProgramPageContentProps {
    country?: CountryConfig
}

/* ============================================================
   useInView — entrance observer
   ============================================================ */
function useInView<T extends HTMLElement>(opts: IntersectionObserverInit = { threshold: 0.15 }) {
    const ref = useRef<T | null>(null)
    const [inView, setInView] = useState(false)
    useEffect(() => {
        const el = ref.current
        if (!el) return
        const io = new IntersectionObserver(
            ([e]) => {
                if (e.isIntersecting) {
                    setInView(true)
                    io.disconnect()
                }
            },
            opts,
        )
        io.observe(el)
        return () => io.disconnect()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return { ref, inView }
}

/* ============================================================
   TOOLS & REQUIREMENTS
   ============================================================ */
const TOOLS_EXPLORER = [
    { k: "01", name: "ChatGPT / Claude", note: "Razonamiento · escritura" },
    { k: "02", name: "Suno AI", note: "Composición músical" },
    { k: "03", name: "Midjourney / Flux", note: "Arte · imagen generativa" },
    { k: "04", name: "ElevenLabs", note: "Voz clonada · narración" },
    { k: "05", name: "Cursor + Claude Code", note: "Vibe Coding · apps" },
    { k: "06", name: "NotebookLM", note: "Estudio · resúmenes" },
]

const TOOLS_MAKER = [
    { k: "07", name: "GitHub + Vercel", note: "Deploy · publicación" },
    { k: "08", name: "Hugging Face", note: "Modelos · Spaces · APIs" },
    { k: "09", name: "v0.app", note: "UI generativa" },
    { k: "10", name: "Groq / Cerebras", note: "LLM rápido (1-2 s)" },
    { k: "11", name: "n8n", note: "Automatización · workflows" },
    { k: "12", name: "Telegram Bot", note: "Bots conversacionales" },
]

const REQUIREMENTS = [
    { k: "A", t: "Un computador", d: "Cualquier laptop o PC. No necesita ser potente ni nuevo — si corre Zoom, sirve." },
    { k: "B", t: "Internet estable", d: "Suficiente para una videollamada fluida. Wi-Fi doméstico normal es más que suficiente." },
    { k: "C", t: "Ganas de crear", d: "Cero experiencia previa. Partimos desde cero y llegamos a construir proyectos reales." },
]

/* ============================================================
   COMPONENT
   ============================================================ */
export function ProgramPageContent({ country }: ProgramPageContentProps) {
    const hero = useInView<HTMLDivElement>({ threshold: 0.2 })
    const explorerRef = useInView<HTMLDivElement>({ threshold: 0.05 })
    const makerCoreRef = useInView<HTMLDivElement>({ threshold: 0.05 })
    const tracksRef = useInView<HTMLDivElement>({ threshold: 0.05 })
    const toolsRef = useInView<HTMLDivElement>({ threshold: 0.2 })
    const reqsRef = useInView<HTMLDivElement>({ threshold: 0.2 })
    const closerRef = useInView<HTMLDivElement>({ threshold: 0.2 })

    const reservationPrice = country?.reservationPriceDisplay ?? "$27 USD"

    return (
        <>
            <Navigation countryCode={country?.code} />

            <main className="min-h-screen bg-[#FAF7EF] text-[#1A1714]">

                {/* =========================================================
                    HERO
                    ========================================================= */}
                <section className="relative overflow-hidden border-b border-[#1A1714]/12 pt-32 md:pt-40 pb-24 md:pb-32">
                    <div
                        aria-hidden
                        className="absolute inset-0 pointer-events-none opacity-[0.05]"
                        style={{
                            backgroundImage: "radial-gradient(rgba(26,23,20,0.5) 1px, transparent 1px)",
                            backgroundSize: "3px 3px",
                        }}
                    />
                    <div
                        aria-hidden
                        className="absolute -top-32 -right-40 w-[520px] h-[520px] rounded-full pp-halo-drift pointer-events-none"
                        style={{ background: "radial-gradient(circle, rgba(201,99,66,0.28), transparent 70%)" }}
                    />

                    <div
                        ref={hero.ref}
                        className={`relative max-w-[1200px] mx-auto px-6 md:px-10 transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                            hero.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                        }`}
                    >
                        <div className="flex items-center justify-between mb-16 md:mb-24 pb-5 border-b border-[#1A1714]/15">
                            <div className="flex items-center gap-4">
                                <span className="font-mono-accent text-[10px] md:text-[11px] uppercase tracking-[0.32em] text-[#B5522F] font-semibold">
                                    Programa completo
                                </span>
                                <span className="hidden md:inline-block w-10 h-px bg-[#1A1714]/30" />
                                <span className="hidden md:inline-block font-mono-accent text-[10px] uppercase tracking-[0.28em] text-[#1A1714]/55">
                                    2 niveles · 20 clases
                                </span>
                            </div>
                            <span className="font-mono-accent text-[10px] uppercase tracking-[0.24em] text-[#1A1714]/50">
                                Cohorte {COHORT.nameShort}
                            </span>
                        </div>

                        <div className="grid grid-cols-12 gap-8 md:gap-12 items-end">
                            <div className="col-span-12 md:col-span-2 order-2 md:order-1">
                                <span
                                    className="block font-display italic text-[#B5522F] leading-[0.85]"
                                    style={{
                                        fontSize: "clamp(6rem, 14vw, 12rem)",
                                        fontVariationSettings: '"opsz" 144, "SOFT" 100',
                                    }}
                                    aria-hidden
                                >
                                    II
                                </span>
                            </div>

                            <div className="col-span-12 md:col-span-10 order-1 md:order-2">
                                <h1
                                    className="font-display leading-[0.95] tracking-[-0.025em] text-[#1A1714] mb-8"
                                    style={{
                                        fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
                                        fontVariationSettings: '"opsz" 144, "SOFT" 100',
                                    }}
                                >
                                    Dos niveles para ir de{" "}
                                    <em className="italic text-[#B5522F]">consumidor a creador</em>.
                                </h1>
                                <p className="font-display text-lg md:text-xl leading-[1.5] text-[#1A1714]/70 max-w-[58ch]">
                                    Nivel 1 <strong>(Explorer)</strong>: fundamentos de IA generativa en 10 clases.
                                    Nivel 2 <strong>(Maker)</strong>: 5 misiones core + un track especializado
                                    donde construye proyectos publicados en internet.
                                </p>
                            </div>
                        </div>

                        <dl className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-5 divide-x divide-[#1A1714]/12 border-y border-[#1A1714]/12">
                            {[
                                { n: "20", l: "Clases totales" },
                                { n: "60'", l: "Por clase" },
                                { n: "2×", l: "Por semana" },
                                { n: "5", l: "Niños por grupo" },
                                { n: "6", l: "Tracks a elegir" },
                            ].map((s, i) => (
                                <div key={i} className="py-6 md:py-8 px-5 md:px-8">
                                    <dt
                                        className="font-display italic text-[#1A1714] leading-none mb-2 tabular-nums"
                                        style={{
                                            fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                                            fontVariationSettings: '"opsz" 144, "SOFT" 100',
                                        }}
                                    >
                                        {s.n}
                                    </dt>
                                    <dd className="font-mono-accent text-[9px] md:text-[10px] uppercase tracking-[0.24em] text-[#1A1714]/55">
                                        {s.l}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </section>

                {/* =========================================================
                    NIVEL 1 · VIBE EXPLORER · 10 CLASES
                    ========================================================= */}
                <section className="relative py-24 md:py-36 border-b border-[#1A1714]/12">
                    <div ref={explorerRef.ref} className="max-w-[1200px] mx-auto px-6 md:px-10">

                        <div className="flex items-baseline justify-between gap-6 mb-14 md:mb-20 pb-5 border-b border-[#1A1714]/15">
                            <div className="flex items-center gap-5">
                                <div className="h-px w-12 bg-[#C96342]" />
                                <p className="font-mono-accent text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-[#B5522F] font-semibold">
                                    Nivel 01 · Vibe Explorer · 10 clases
                                </p>
                            </div>
                            <p className="hidden md:block font-mono-accent text-[10px] uppercase tracking-[0.22em] text-[#1A1714]/50">
                                Edad: 8-17 años
                            </p>
                        </div>

                        <ol className="divide-y divide-[#1A1714]/12 border-y border-[#1A1714]/12">
                            {EXPLORER_CLASSES.map((c, i) => (
                                <li
                                    key={c.num}
                                    className={`group grid grid-cols-12 gap-4 md:gap-8 items-start py-7 md:py-9 transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                                        explorerRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                                    }`}
                                    style={{ transitionDelay: `${i * 60}ms` }}
                                >
                                    <div className="col-span-2 md:col-span-1">
                                        <span
                                            className="font-display italic text-[#B5522F]/80 group-hover:text-[#B5522F] leading-none block tabular-nums transition-colors text-2xl md:text-3xl"
                                            style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
                                        >
                                            {c.num}
                                        </span>
                                    </div>

                                    <div className="col-span-10 md:col-span-7">
                                        <h3
                                            className="font-display text-[#1A1714] leading-[1.05] tracking-[-0.015em] mb-2 text-xl md:text-2xl"
                                            style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
                                        >
                                            {c.title}
                                        </h3>
                                        <p className="font-display text-[15px] md:text-base leading-[1.6] text-[#1A1714]/68 max-w-[62ch]">
                                            {c.desc}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ol>

                        <div className="mt-10 flex items-center justify-between text-[10px] uppercase tracking-[0.24em] text-[#1A1714]/45 font-mono-accent">
                            <span>· 10 clases · 5 semanas · proyecto final de identidad</span>
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    NIVEL 2 · MAKER CORE · 5 MISIONES
                    ========================================================= */}
                <section className="relative py-24 md:py-36 border-b border-[#1A1714]/12 bg-[#F2EDE0]/60">
                    <div ref={makerCoreRef.ref} className="max-w-[1200px] mx-auto px-6 md:px-10">

                        <div className="flex items-baseline justify-between gap-6 mb-14 md:mb-20 pb-5 border-b border-[#1A1714]/15">
                            <div className="flex items-center gap-5">
                                <div className="h-px w-12 bg-[#C96342]" />
                                <p className="font-mono-accent text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-[#B5522F] font-semibold">
                                    Nivel 02 · Maker Core · 5 misiones
                                </p>
                            </div>
                            <p className="hidden md:block font-mono-accent text-[10px] uppercase tracking-[0.22em] text-[#1A1714]/50">
                                Edad: 11-17 años · Todos hacen estas 5 primero
                            </p>
                        </div>

                        <p className="font-display text-lg md:text-xl leading-[1.5] text-[#1A1714]/70 max-w-[60ch] mb-14">
                            Antes de elegir su track, cada alumno configura sus herramientas, publica
                            su primera app, crea un bot y automatiza un workflow. Todo vivo en internet.
                        </p>

                        <ol className="divide-y divide-[#1A1714]/12 border-y border-[#1A1714]/12">
                            {MAKER_CORE.map((m, i) => (
                                <li
                                    key={m.num}
                                    className={`group grid grid-cols-12 gap-4 md:gap-8 items-start py-7 md:py-9 transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                                        makerCoreRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                                    }`}
                                    style={{ transitionDelay: `${i * 60}ms` }}
                                >
                                    <div className="col-span-2 md:col-span-1">
                                        <span
                                            className="font-display italic text-[#B5522F]/80 group-hover:text-[#B5522F] leading-none block tabular-nums transition-colors text-2xl md:text-3xl"
                                            style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
                                        >
                                            {m.num}
                                        </span>
                                    </div>

                                    <div className="col-span-10 md:col-span-7">
                                        <h3
                                            className="font-display text-[#1A1714] leading-[1.05] tracking-[-0.015em] mb-2 text-xl md:text-2xl"
                                            style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
                                        >
                                            {m.title}
                                        </h3>
                                        <p className="font-display text-[15px] md:text-base leading-[1.6] text-[#1A1714]/68 max-w-[62ch]">
                                            {m.desc}
                                        </p>
                                    </div>

                                    <div className="col-span-12 md:col-span-4 md:text-right md:border-l md:border-[#1A1714]/10 md:pl-6">
                                        <p className="font-mono-accent text-[9px] md:text-[10px] uppercase tracking-[0.24em] text-[#1A1714]/50 mb-1">
                                            Loot
                                        </p>
                                        <p
                                            className="font-display italic text-[#1A1714] leading-tight text-sm md:text-base"
                                            style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
                                        >
                                            {m.loot}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </section>

                {/* =========================================================
                    NIVEL 2 · 6 TRACKS ESPECIALIZADOS
                    ========================================================= */}
                <section className="relative py-24 md:py-36 border-b border-[#1A1714]/12">
                    <div ref={tracksRef.ref} className="max-w-[1200px] mx-auto px-6 md:px-10">

                        <div className="flex items-baseline justify-between gap-6 mb-14 md:mb-20 pb-5 border-b border-[#1A1714]/15">
                            <div className="flex items-center gap-5">
                                <div className="h-px w-12 bg-[#C96342]" />
                                <p className="font-mono-accent text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-[#B5522F] font-semibold">
                                    Nivel 02 · 6 Tracks · 5 misiones cada uno
                                </p>
                            </div>
                            <p className="hidden md:block font-mono-accent text-[10px] uppercase tracking-[0.22em] text-[#1A1714]/50">
                                El alumno elige 1 según su pasión
                            </p>
                        </div>

                        <p className="font-display text-lg md:text-xl leading-[1.5] text-[#1A1714]/70 max-w-[60ch] mb-14">
                            Después de las 5 misiones core, cada alumno elige un track y construye
                            un proyecto final publicado en internet que sus amigos pueden usar.
                        </p>

                        <div className="space-y-16">
                            {TRACKS.map((track, ti) => (
                                <div
                                    key={track.id}
                                    id={track.id}
                                    className={`scroll-mt-24 transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                                        tracksRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                                    }`}
                                    style={{ transitionDelay: `${ti * 100}ms` }}
                                >
                                    {/* Track header */}
                                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#1A1714]/12">
                                        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: track.color }} />
                                        <h3 className="font-display text-2xl md:text-3xl tracking-tight" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}>
                                            {track.subtitle}
                                        </h3>
                                        <span className="font-mono-accent text-[10px] uppercase tracking-wider ml-auto" style={{ color: track.color }}>
                                            {track.name}
                                        </span>
                                    </div>

                                    <div className="grid md:grid-cols-12 gap-8 mb-4">
                                        <div className="md:col-span-4">
                                            <p className="text-sm text-[#1A1714]/65 leading-relaxed mb-3">{track.audience}</p>
                                            <div className="p-4 bg-[#1A1714]/[0.03] border border-[#1A1714]/10 rounded-[3px]">
                                                <p className="text-[10px] uppercase tracking-wider font-semibold mb-1" style={{ color: track.color }}>
                                                    Proyecto final
                                                </p>
                                                <p className="text-sm text-[#1A1714] leading-relaxed">{track.finalProject}</p>
                                            </div>
                                        </div>

                                        <ol className="md:col-span-8 divide-y divide-[#1A1714]/8">
                                            {track.missions.map((m) => (
                                                <li key={m.num} className="py-4 flex items-start gap-5">
                                                    <span className="text-xs font-semibold tabular-nums shrink-0 w-6 pt-0.5" style={{ color: track.color }}>
                                                        {m.num}
                                                    </span>
                                                    <div>
                                                        <span className="font-display text-base md:text-lg text-[#1A1714] leading-snug">
                                                            {m.title}
                                                        </span>
                                                        <p className="text-sm text-[#1A1714]/60 mt-1">{m.desc}</p>
                                                        <p className="text-xs mt-1.5 font-mono-accent uppercase tracking-wider" style={{ color: track.color }}>
                                                            Loot: {m.loot}
                                                        </p>
                                                    </div>
                                                </li>
                                            ))}
                                        </ol>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    HERRAMIENTAS
                    ========================================================= */}
                <section className="relative py-24 md:py-32 border-b border-[#1A1714]/12 bg-[#F2EDE0]/60">
                    <div ref={toolsRef.ref} className="max-w-[1200px] mx-auto px-6 md:px-10">

                        <div className="flex items-baseline justify-between gap-6 mb-10 md:mb-14 pb-5 border-b border-[#1A1714]/15">
                            <div className="flex items-center gap-5">
                                <div className="h-px w-12 bg-[#C96342]" />
                                <p className="font-mono-accent text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-[#B5522F] font-semibold">
                                    Herramientas
                                </p>
                            </div>
                        </div>

                        <h3 className="font-display text-2xl md:text-3xl tracking-tight mb-10" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}>
                            Explorer
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-0 border border-[#1A1714]/12 bg-[#FAF7EF] mb-14">
                            {TOOLS_EXPLORER.map((t, i) => (
                                <div
                                    key={t.name}
                                    className={`relative p-6 md:p-8 border-r border-b border-[#1A1714]/10 last:border-r-0 group transition-all duration-[800ms] ${
                                        toolsRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                                    }`}
                                    style={{ transitionDelay: `${i * 90}ms` }}
                                >
                                    <span className="font-display italic text-[#B5522F] leading-none block mb-3 text-xl" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}>
                                        {t.k}
                                    </span>
                                    <h4 className="font-display text-[#1A1714] leading-tight tracking-[-0.015em] mb-1.5 text-lg" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}>
                                        {t.name}
                                    </h4>
                                    <p className="font-mono-accent text-[10px] uppercase tracking-[0.22em] text-[#1A1714]/55">
                                        {t.note}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <h3 className="font-display text-2xl md:text-3xl tracking-tight mb-10" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}>
                            Maker
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-0 border border-[#1A1714]/12 bg-[#FAF7EF]">
                            {TOOLS_MAKER.map((t, i) => (
                                <div
                                    key={t.name}
                                    className={`relative p-6 md:p-8 border-r border-b border-[#1A1714]/10 last:border-r-0 group transition-all duration-[800ms] ${
                                        toolsRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                                    }`}
                                    style={{ transitionDelay: `${(i + 6) * 90}ms` }}
                                >
                                    <span className="font-display italic text-[#B5522F] leading-none block mb-3 text-xl" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}>
                                        {t.k}
                                    </span>
                                    <h4 className="font-display text-[#1A1714] leading-tight tracking-[-0.015em] mb-1.5 text-lg" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}>
                                        {t.name}
                                    </h4>
                                    <p className="font-mono-accent text-[10px] uppercase tracking-[0.22em] text-[#1A1714]/55">
                                        {t.note}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    REQUISITOS
                    ========================================================= */}
                <section className="relative py-24 md:py-32 border-b border-[#1A1714]/12">
                    <div ref={reqsRef.ref} className="max-w-[1200px] mx-auto px-6 md:px-10">

                        <div className="grid grid-cols-12 gap-8 md:gap-12 mb-14 md:mb-20">
                            <div className="col-span-12 md:col-span-5">
                                <div className="flex items-center gap-5 mb-6">
                                    <div className="h-px w-12 bg-[#C96342]" />
                                    <p className="font-mono-accent text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-[#B5522F] font-semibold">
                                        Requisitos
                                    </p>
                                </div>
                                <h2
                                    className="font-display leading-[0.98] tracking-[-0.02em] text-[#1A1714]"
                                    style={{
                                        fontSize: "clamp(2rem, 4vw, 3.5rem)",
                                        fontVariationSettings: '"opsz" 144, "SOFT" 100',
                                    }}
                                >
                                    ¿Qué necesita <em className="italic text-[#B5522F]">tu hijo</em> para empezar?
                                </h2>
                            </div>
                            <div className="col-span-12 md:col-span-7 md:pt-10">
                                <p className="font-display text-lg md:text-xl leading-[1.55] text-[#1A1714]/70 max-w-[52ch]">
                                    Nada de equipos costosos, nada de instalaciones complicadas. Tres cosas básicas
                                    — y desde el primer día está creando junto a sus instructores.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-y border-[#1A1714]/12">
                            {REQUIREMENTS.map((r, i) => (
                                <div
                                    key={r.k}
                                    className={`relative p-8 md:p-10 md:border-r border-b md:border-b-0 border-[#1A1714]/12 last:border-r-0 last:border-b-0 transition-all duration-[900ms] ${
                                        reqsRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                                    }`}
                                    style={{ transitionDelay: `${i * 120}ms` }}
                                >
                                    <span
                                        className="font-display italic text-[#B5522F] leading-none block mb-6"
                                        style={{
                                            fontSize: "clamp(3rem, 6vw, 4.5rem)",
                                            fontVariationSettings: '"opsz" 144, "SOFT" 100',
                                        }}
                                    >
                                        {r.k}
                                    </span>
                                    <h3
                                        className="font-display text-[#1A1714] leading-tight tracking-[-0.015em] mb-3 text-xl md:text-2xl"
                                        style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
                                    >
                                        {r.t}
                                    </h3>
                                    <p className="font-display text-[15px] leading-[1.6] text-[#1A1714]/65">
                                        {r.d}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <FAQSection />

                {/* =========================================================
                    CLOSING CTA
                    ========================================================= */}
                <section className="relative py-24 md:py-36 bg-[#1A1714] text-[#FAF7EF] overflow-hidden">
                    <div
                        aria-hidden
                        className="absolute inset-0 pointer-events-none opacity-[0.08] mix-blend-screen"
                        style={{
                            backgroundImage: "radial-gradient(rgba(255,255,255,0.55) 1px, transparent 1px)",
                            backgroundSize: "3px 3px",
                        }}
                    />
                    <div
                        aria-hidden
                        className="absolute -bottom-32 -left-32 w-[520px] h-[520px] rounded-full pp-halo-drift pointer-events-none"
                        style={{ background: "radial-gradient(circle, rgba(201,99,66,0.32), transparent 70%)" }}
                    />

                    <div
                        ref={closerRef.ref}
                        className={`relative max-w-[1100px] mx-auto px-6 md:px-10 transition-all duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                            closerRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                        }`}
                    >
                        <div className="flex items-center justify-between mb-12 pb-5 border-b border-[#FAF7EF]/15">
                            <span className="font-mono-accent text-[10px] uppercase tracking-[0.28em] text-[#B5522F] font-semibold">
                                Reserva · 2 clases de prueba
                            </span>
                        </div>

                        <div className="grid grid-cols-12 gap-8 md:gap-12 items-end">
                            <div className="col-span-12 md:col-span-8">
                                <h2
                                    className="font-display leading-[0.95] tracking-[-0.025em] mb-6"
                                    style={{
                                        fontSize: "clamp(2.5rem, 5.5vw, 5rem)",
                                        fontVariationSettings: '"opsz" 144, "SOFT" 100',
                                    }}
                                >
                                    ¿Quieres que tu hijo sea{" "}
                                    <em className="italic text-[#B5522F]">el siguiente</em>?
                                </h2>
                                <p className="font-display text-lg md:text-xl leading-[1.55] text-[#FAF7EF]/72 max-w-[54ch]">
                                    Reserva con <span className="text-[#FAF7EF] font-semibold">{reservationPrice}</span>.
                                    Toma dos clases completas. Si no te convence — o no le gusta a tu hijo — te
                                    devolvemos todo. Sin formularios, sin preguntas.
                                </p>
                            </div>

                            <div className="col-span-12 md:col-span-4 md:text-right">
                                <Link
                                    href="/#sesion-estrategica"
                                    className="group relative inline-flex items-center gap-3 bg-[#C96342] hover:bg-[#9A4428] text-[#FAF7EF] px-8 md:px-10 py-5 md:py-6 rounded-[3px] transition-colors"
                                >
                                    <span
                                        className="font-display italic leading-none text-lg md:text-xl"
                                        style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
                                    >
                                        Reservar por {reservationPrice}
                                    </span>
                                    <span aria-hidden className="inline-block transition-transform duration-500 group-hover:translate-x-1.5">
                                        →
                                    </span>
                                </Link>
                                <p className="font-mono-accent text-[10px] uppercase tracking-[0.22em] text-[#FAF7EF]/45 mt-4">
                                    Sin compromiso · devolución garantizada
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
            <WhatsAppButton />

            <style
                dangerouslySetInnerHTML={{
                    __html: `
                        @keyframes ppHaloDrift {
                            0%, 100% { transform: translate(0, 0) scale(1);      opacity: 0.65; }
                            50%      { transform: translate(40px, 30px) scale(1.12); opacity: 0.95; }
                        }
                        .pp-halo-drift { animation: ppHaloDrift 11s ease-in-out infinite; }

                        @media (prefers-reduced-motion: reduce) {
                            .pp-halo-drift { animation: none !important; }
                        }
                    `,
                }}
            />
        </>
    )
}
