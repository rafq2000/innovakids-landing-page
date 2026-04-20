"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { FAQSection } from "@/components/faq-section"
import type { CountryConfig } from "@/lib/countries-config"

interface ProgramPageContentProps {
    country?: CountryConfig
}

/* ============================================================
   useInView — entrance observer (shared helper)
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
   DATA — 10 clases · herramientas · requisitos
   ============================================================ */
const CLASSES = [
    { n: "I",     num: "01", title: "Exploradores de la IA",           desc: "Introducción al mundo de la IA y sus posibilidades. Qué es, cómo funciona, cómo ya cambió el mundo.", proj: "Mapa mental de IA" },
    { n: "II",    num: "02", title: "El Prompt Perfecto",              desc: "El arte de escribir instrucciones claras. Aprenden a comunicarse con la IA como si fuera un colaborador.", proj: "Biblioteca de prompts" },
    { n: "III",   num: "03", title: "Voces y personajes que hablan",   desc: "Crean voces sintéticas y personajes con identidad propia. Dan vida a un avatar con voz personalizada.", proj: "Avatar con voz propia" },
    { n: "IV",    num: "04", title: "Música con IA",                   desc: "Componen canciones originales sin saber tocar ningún instrumento — con letra, melodía y producción.", proj: "Canción original" },
    { n: "V",     num: "05", title: "Cómics e historias visuales",     desc: "Diseñan novelas gráficas completas con arte generado por IA y un guion que les pertenece.", proj: "Cómic de 6 páginas" },
    { n: "VI",    num: "06", title: "Videos con IA + avatar digital",  desc: "Producen videos profesionales con su propio avatar. Edición, voz, imagen y storyboard con IA.", proj: "Video con avatar" },
    { n: "VII",   num: "07", title: "Vibe Coding: apps, web y juegos", desc: "Construyen aplicaciones funcionales, sitios y minijuegos usando IA como copiloto de código.", proj: "Mini videojuego" },
    { n: "VIII",  num: "08", title: "Estudio con IA — tutor personal", desc: "Convierten la IA en un tutor 1:1: resúmenes, flashcards, pruebas simuladas y planes de estudio.", proj: "Sistema de estudio" },
    { n: "IX",    num: "09", title: "Ética — sesgos, fake news, riesgos", desc: "Aprenden a detectar información falsa, entender sesgos en los modelos y usar IA de forma responsable.", proj: "Detector de fake news" },
    { n: "X",     num: "10", title: "Proyecto final — mi creación",    desc: "Integran todo lo aprendido en un proyecto único que forma parte de su portafolio profesional.", proj: "Portafolio completo" },
]

const TOOLS = [
    { k: "01", name: "ChatGPT",         note: "Razonamiento · escritura" },
    { k: "02", name: "Google AI Studio", note: "Modelos Gemini · prompts" },
    { k: "03", name: "Suno AI",         note: "Composición musical" },
    { k: "04", name: "Canva AI",        note: "Arte · diseño · cómic" },
    { k: "05", name: "NotebookLM",      note: "Estudio · resúmenes" },
    { k: "06", name: "InVideo",         note: "Video · avatar digital" },
]

const REQUIREMENTS = [
    { k: "A", t: "Un computador",   d: "Cualquier laptop o PC. No necesita ser potente ni nuevo — si corre Zoom, sirve." },
    { k: "B", t: "Internet estable", d: "Suficiente para una videollamada fluida. Wi-Fi doméstico normal es más que suficiente." },
    { k: "C", t: "Ganas de crear",  d: "Cero experiencia previa. Partimos desde cero y llegamos a construir proyectos reales en 5 semanas." },
]

/* ============================================================
   COMPONENT
   ============================================================ */
export function ProgramPageContent({ country }: ProgramPageContentProps) {
    const hero = useInView<HTMLDivElement>({ threshold: 0.2 })
    const catalog = useInView<HTMLDivElement>({ threshold: 0.05 })
    const tools = useInView<HTMLDivElement>({ threshold: 0.2 })
    const reqs = useInView<HTMLDivElement>({ threshold: 0.2 })
    const closer = useInView<HTMLDivElement>({ threshold: 0.2 })

    const reservationPrice = country?.reservationPriceDisplay ?? "$27 USD"

    return (
        <>
            <Navigation countryCode={country?.code} />

            <main className="min-h-screen bg-[#FAF7EF] text-[#1A1714]">

                {/* =========================================================
                    HERO EDITORIAL
                    ========================================================= */}
                <section className="relative overflow-hidden border-b border-[#1A1714]/12 pt-32 md:pt-40 pb-24 md:pb-32">
                    {/* grano sutil */}
                    <div
                        aria-hidden
                        className="absolute inset-0 pointer-events-none opacity-[0.05]"
                        style={{
                            backgroundImage: "radial-gradient(rgba(26,23,20,0.5) 1px, transparent 1px)",
                            backgroundSize: "3px 3px",
                        }}
                    />
                    {/* halo terracota */}
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
                        {/* masthead */}
                        <div className="flex items-center justify-between mb-16 md:mb-24 pb-5 border-b border-[#1A1714]/15">
                            <div className="flex items-center gap-4">
                                <span className="font-mono-accent text-[10px] md:text-[11px] uppercase tracking-[0.32em] text-[#C96342] font-semibold">
                                    Programa · Vol. I
                                </span>
                                <span className="hidden md:inline-block w-10 h-px bg-[#1A1714]/30" />
                                <span className="hidden md:inline-block font-mono-accent text-[10px] uppercase tracking-[0.28em] text-[#1A1714]/55">
                                    Módulo Vibe Explorer · 10 clases
                                </span>
                            </div>
                            <span className="font-mono-accent text-[10px] uppercase tracking-[0.24em] text-[#1A1714]/50">
                                Cohorte 27·abr·2026
                            </span>
                        </div>

                        <div className="grid grid-cols-12 gap-8 md:gap-12 items-end">
                            {/* Numeral lateral */}
                            <div className="col-span-12 md:col-span-2 order-2 md:order-1">
                                <span
                                    className="block font-display italic text-[#C96342] leading-[0.85]"
                                    style={{
                                        fontSize: "clamp(6rem, 14vw, 12rem)",
                                        fontVariationSettings: '"opsz" 144, "SOFT" 100',
                                    }}
                                    aria-hidden
                                >
                                    I
                                </span>
                            </div>

                            {/* Headline */}
                            <div className="col-span-12 md:col-span-10 order-1 md:order-2">
                                <h1
                                    className="font-display leading-[0.95] tracking-[-0.025em] text-[#1A1714] mb-8"
                                    style={{
                                        fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
                                        fontVariationSettings: '"opsz" 144, "SOFT" 100',
                                    }}
                                >
                                    Esto es exactamente lo que tu hijo{" "}
                                    <em className="italic text-[#C96342]">va a crear</em>{" "}
                                    en cinco semanas.
                                </h1>
                                <p
                                    className="text-lg md:text-xl leading-[1.5] text-[#1A1714]/70 max-w-[58ch]"
                                    style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                                >
                                    Cada clase termina con un proyecto real que puede mostrar con orgullo. Cero
                                    teoría aburrida, cero tareas, cero exámenes. Solo crear — desde el primer día.
                                </p>
                            </div>
                        </div>

                        {/* stat ledger */}
                        <dl className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 divide-x divide-[#1A1714]/12 border-y border-[#1A1714]/12">
                            {[
                                { n: "10", l: "Clases en vivo" },
                                { n: "60'", l: "Minutos por clase" },
                                { n: "2×", l: "Clases por semana" },
                                { n: "5",  l: "Niños por grupo" },
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
                    CATÁLOGO · 10 CLASES
                    ========================================================= */}
                <section className="relative py-24 md:py-36 border-b border-[#1A1714]/12">
                    <div ref={catalog.ref} className="max-w-[1200px] mx-auto px-6 md:px-10">

                        {/* section head */}
                        <div className="flex items-baseline justify-between gap-6 mb-14 md:mb-20 pb-5 border-b border-[#1A1714]/15">
                            <div className="flex items-center gap-5">
                                <div className="h-px w-12 bg-[#C96342]" />
                                <p className="font-mono-accent text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold">
                                    Lámina A · Las 10 clases
                                </p>
                            </div>
                            <p
                                className="hidden md:block font-display italic text-lg md:text-2xl text-[#1A1714]/65 tracking-[-0.01em] max-w-[36ch] text-right"
                                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
                            >
                                Cada línea es una clase. Cada clase termina con un proyecto entregable.
                            </p>
                        </div>

                        {/* catalog rows */}
                        <ol className="divide-y divide-[#1A1714]/12 border-y border-[#1A1714]/12">
                            {CLASSES.map((c, i) => (
                                <li
                                    key={c.num}
                                    className={`group grid grid-cols-12 gap-4 md:gap-8 items-start py-7 md:py-9 transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                                        catalog.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                                    }`}
                                    style={{ transitionDelay: `${i * 60}ms` }}
                                >
                                    {/* roman numeral */}
                                    <div className="col-span-2 md:col-span-1">
                                        <span
                                            className="font-display italic text-[#C96342]/80 group-hover:text-[#C96342] leading-none block tabular-nums transition-colors"
                                            style={{
                                                fontSize: "clamp(1.5rem, 2.6vw, 2.25rem)",
                                                fontVariationSettings: '"opsz" 144, "SOFT" 100',
                                            }}
                                        >
                                            {c.n}
                                        </span>
                                        <span className="font-mono-accent text-[9px] uppercase tracking-[0.22em] text-[#1A1714]/45 mt-1 block">
                                            Clase {c.num}
                                        </span>
                                    </div>

                                    {/* title + description */}
                                    <div className="col-span-10 md:col-span-7">
                                        <h3
                                            className="font-display text-[#1A1714] leading-[1.05] tracking-[-0.015em] mb-2"
                                            style={{
                                                fontSize: "clamp(1.35rem, 2vw, 1.85rem)",
                                                fontVariationSettings: '"opsz" 144, "SOFT" 100',
                                            }}
                                        >
                                            {c.title}
                                        </h3>
                                        <p
                                            className="text-[15px] md:text-base leading-[1.6] text-[#1A1714]/68 max-w-[62ch]"
                                            style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                                        >
                                            {c.desc}
                                        </p>
                                    </div>

                                    {/* project deliverable — right column */}
                                    <div className="col-span-12 md:col-span-4 md:text-right md:border-l md:border-[#1A1714]/10 md:pl-6">
                                        <p className="font-mono-accent text-[9px] md:text-[10px] uppercase tracking-[0.24em] text-[#1A1714]/50 mb-1">
                                            Proyecto entregable
                                        </p>
                                        <p
                                            className="font-display italic text-[#1A1714] leading-tight"
                                            style={{
                                                fontSize: "clamp(1rem, 1.3vw, 1.15rem)",
                                                fontVariationSettings: '"opsz" 144, "SOFT" 100',
                                            }}
                                        >
                                            {c.proj}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ol>

                        {/* footer bar */}
                        <div className="mt-10 flex items-center justify-between text-[10px] uppercase tracking-[0.24em] text-[#1A1714]/45 font-mono-accent">
                            <span>· 10 entregables · portafolio verificable</span>
                            <span className="hidden md:inline">Ref · PRG-IK-VOL-I</span>
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    HERRAMIENTAS
                    ========================================================= */}
                <section className="relative py-24 md:py-32 border-b border-[#1A1714]/12 bg-[#F2EDE0]/60">
                    <div ref={tools.ref} className="max-w-[1200px] mx-auto px-6 md:px-10">

                        <div className="flex items-baseline justify-between gap-6 mb-10 md:mb-14 pb-5 border-b border-[#1A1714]/15">
                            <div className="flex items-center gap-5">
                                <div className="h-px w-12 bg-[#C96342]" />
                                <p className="font-mono-accent text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold">
                                    Lámina B · Herramientas
                                </p>
                            </div>
                            <p
                                className="hidden md:block font-display italic text-base md:text-xl text-[#1A1714]/65 tracking-[-0.01em] max-w-[42ch] text-right"
                                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
                            >
                                Seis plataformas profesionales que tu hijo domina al terminar.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-0 border border-[#1A1714]/12 bg-[#FAF7EF]">
                            {TOOLS.map((t, i) => (
                                <div
                                    key={t.name}
                                    className={`relative p-6 md:p-8 border-r border-b border-[#1A1714]/10 last:border-r-0 group transition-all duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                                        tools.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                                    }`}
                                    style={{ transitionDelay: `${i * 90}ms` }}
                                >
                                    <span
                                        className="font-display italic text-[#C96342] leading-none block mb-3"
                                        style={{
                                            fontSize: "clamp(1.25rem, 1.8vw, 1.6rem)",
                                            fontVariationSettings: '"opsz" 144, "SOFT" 100',
                                        }}
                                    >
                                        {t.k}
                                    </span>
                                    <h4
                                        className="font-display text-[#1A1714] leading-tight tracking-[-0.015em] mb-1.5"
                                        style={{
                                            fontSize: "clamp(1.15rem, 1.5vw, 1.4rem)",
                                            fontVariationSettings: '"opsz" 144, "SOFT" 100',
                                        }}
                                    >
                                        {t.name}
                                    </h4>
                                    <p className="font-mono-accent text-[10px] uppercase tracking-[0.22em] text-[#1A1714]/55">
                                        {t.note}
                                    </p>

                                    {/* micro underline on hover */}
                                    <span
                                        aria-hidden
                                        className="absolute bottom-4 left-6 md:left-8 right-6 md:right-8 h-px bg-[#C96342] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    REQUISITOS
                    ========================================================= */}
                <section className="relative py-24 md:py-32 border-b border-[#1A1714]/12">
                    <div ref={reqs.ref} className="max-w-[1200px] mx-auto px-6 md:px-10">

                        <div className="grid grid-cols-12 gap-8 md:gap-12 mb-14 md:mb-20">
                            <div className="col-span-12 md:col-span-5">
                                <div className="flex items-center gap-5 mb-6">
                                    <div className="h-px w-12 bg-[#C96342]" />
                                    <p className="font-mono-accent text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold">
                                        Lámina C · Requisitos
                                    </p>
                                </div>
                                <h2
                                    className="font-display leading-[0.98] tracking-[-0.02em] text-[#1A1714]"
                                    style={{
                                        fontSize: "clamp(2rem, 4vw, 3.5rem)",
                                        fontVariationSettings: '"opsz" 144, "SOFT" 100',
                                    }}
                                >
                                    ¿Qué necesita <em className="italic text-[#C96342]">tu hijo</em> para empezar?
                                </h2>
                            </div>
                            <div className="col-span-12 md:col-span-7 md:pt-10">
                                <p
                                    className="text-lg md:text-xl leading-[1.55] text-[#1A1714]/70 max-w-[52ch]"
                                    style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                                >
                                    Nada de equipos costosos, nada de instalaciones complicadas. Tres cosas básicas
                                    — y desde el primer día está creando junto a sus instructores.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-y border-[#1A1714]/12">
                            {REQUIREMENTS.map((r, i) => (
                                <div
                                    key={r.k}
                                    className={`relative p-8 md:p-10 md:border-r border-b md:border-b-0 border-[#1A1714]/12 last:border-r-0 last:border-b-0 transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                                        reqs.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                                    }`}
                                    style={{ transitionDelay: `${i * 120}ms` }}
                                >
                                    <span
                                        className="font-display italic text-[#C96342] leading-none block mb-6"
                                        style={{
                                            fontSize: "clamp(3rem, 6vw, 4.5rem)",
                                            fontVariationSettings: '"opsz" 144, "SOFT" 100',
                                        }}
                                    >
                                        {r.k}
                                    </span>
                                    <h3
                                        className="font-display text-[#1A1714] leading-tight tracking-[-0.015em] mb-3"
                                        style={{
                                            fontSize: "clamp(1.3rem, 1.8vw, 1.65rem)",
                                            fontVariationSettings: '"opsz" 144, "SOFT" 100',
                                        }}
                                    >
                                        {r.t}
                                    </h3>
                                    <p
                                        className="text-[15px] leading-[1.6] text-[#1A1714]/65"
                                        style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                                    >
                                        {r.d}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* =========================================================
                    FAQ (ya editorial)
                    ========================================================= */}
                <FAQSection />

                {/* =========================================================
                    CLOSING · CTA RECEIPT
                    ========================================================= */}
                <section className="relative py-24 md:py-36 bg-[#1A1714] text-[#FAF7EF] overflow-hidden">
                    {/* grano */}
                    <div
                        aria-hidden
                        className="absolute inset-0 pointer-events-none opacity-[0.08] mix-blend-screen"
                        style={{
                            backgroundImage: "radial-gradient(rgba(255,255,255,0.55) 1px, transparent 1px)",
                            backgroundSize: "3px 3px",
                        }}
                    />
                    {/* halo terracota */}
                    <div
                        aria-hidden
                        className="absolute -bottom-32 -left-32 w-[520px] h-[520px] rounded-full pp-halo-drift pointer-events-none"
                        style={{ background: "radial-gradient(circle, rgba(201,99,66,0.32), transparent 70%)" }}
                    />

                    <div
                        ref={closer.ref}
                        className={`relative max-w-[1100px] mx-auto px-6 md:px-10 transition-all duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                            closer.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                        }`}
                    >
                        <div className="flex items-center justify-between mb-12 pb-5 border-b border-[#FAF7EF]/15">
                            <span className="font-mono-accent text-[10px] uppercase tracking-[0.28em] text-[#C96342] font-semibold">
                                Reserva · 2 clases de prueba
                            </span>
                            <span className="font-mono-accent text-[10px] uppercase tracking-[0.24em] text-[#FAF7EF]/45">
                                Ref · CLOSE-PRG-I
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
                                    <em className="italic text-[#C96342]">el siguiente</em>?
                                </h2>
                                <p
                                    className="text-lg md:text-xl leading-[1.55] text-[#FAF7EF]/72 max-w-[54ch]"
                                    style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                                >
                                    Reserva con <span className="text-[#FAF7EF] font-semibold">{reservationPrice}</span>.
                                    Toma dos clases completas. Si no te convence — o no le gusta a tu hijo — te
                                    devolvemos todo. Sin formularios, sin preguntas.
                                </p>
                            </div>

                            <div className="col-span-12 md:col-span-4 md:text-right">
                                <Link
                                    href="/#sesion-estrategica"
                                    className="group relative inline-flex items-center gap-3 bg-[#C96342] hover:bg-[#A8502F] text-[#FAF7EF] px-8 md:px-10 py-5 md:py-6 rounded-[3px] transition-colors"
                                >
                                    <span
                                        className="font-display italic leading-none"
                                        style={{
                                            fontSize: "clamp(1.1rem, 1.6vw, 1.35rem)",
                                            fontVariationSettings: '"opsz" 144, "SOFT" 100',
                                        }}
                                    >
                                        Reservar por {reservationPrice}
                                    </span>
                                    <span
                                        aria-hidden
                                        className="inline-block transition-transform duration-500 group-hover:translate-x-1.5"
                                    >
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

            {/* ============================================================
                KEYFRAMES
                ============================================================ */}
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
