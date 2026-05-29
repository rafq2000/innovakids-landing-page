"use client"

import { useState } from "react"
import { EXPLORER_CLASSES, MAKER_CORE, TRACKS } from "@/lib/curriculum-data"

type Tab = "explorer" | "maker-core" | (typeof TRACKS)[number]["id"]

export function CurriculumSection() {
  const [active, setActive] = useState<Tab>("explorer")

  return (
    <section
      id="temario"
      className="bg-[#F5F1E8] text-[#2F2F2C] py-28 md:py-40"
    >
      <div className="max-w-[1100px] mx-auto px-6 md:px-10">

        {/* Masthead */}
        <div className="flex items-center gap-5 mb-20">
          <div className="h-px w-12 bg-[#C96342]" />
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold">
            Currículum · 2 niveles
          </p>
        </div>

        <h2
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[88px] leading-[0.98] tracking-[-0.02em] font-normal mb-8 max-w-[16ch]"
        >
          De consumidor a{" "}
          <em className="italic text-[#C96342]">creador</em>.
        </h2>

        <p className="text-lg md:text-xl text-[#5A5751] max-w-[56ch] leading-relaxed mb-20">
          Todos empiezan en <strong className="text-[#2F2F2C]">Vibe Explorer</strong> (10 clases).
          Después pasan a <strong className="text-[#2F2F2C]">Vibe Maker</strong>: 5 misiones
          core + un track especializado según su pasión.
        </p>

        {/* ─── LEVEL TABS ─── */}
        <div className="flex flex-wrap gap-0 border-y border-[#2F2F2C]/15 mb-16">
          {/* Explorer */}
          <button
            onClick={() => setActive("explorer")}
            className={`text-left py-5 px-5 md:px-7 border-r border-[#2F2F2C]/10 transition-colors ${
              active === "explorer" ? "bg-[#C96342]/8" : "hover:bg-[#2F2F2C]/[0.03]"
            }`}
          >
            <span className="block text-[10px] text-[#C96342] font-semibold tracking-wider mb-1">
              NIVEL 01
            </span>
            <span className={`font-display block text-base md:text-lg tracking-tight ${
              active === "explorer" ? "text-[#C96342]" : "text-[#2F2F2C]"
            }`}>
              Vibe Explorer
            </span>
          </button>

          {/* Maker Core */}
          <button
            onClick={() => setActive("maker-core")}
            className={`text-left py-5 px-5 md:px-7 border-r border-[#2F2F2C]/10 transition-colors ${
              active === "maker-core" ? "bg-[#C96342]/8" : "hover:bg-[#2F2F2C]/[0.03]"
            }`}
          >
            <span className="block text-[10px] text-[#C96342] font-semibold tracking-wider mb-1">
              NIVEL 02
            </span>
            <span className={`font-display block text-base md:text-lg tracking-tight ${
              active === "maker-core" ? "text-[#C96342]" : "text-[#2F2F2C]"
            }`}>
              Maker Core
            </span>
          </button>

          {/* Track tabs */}
          {TRACKS.map((track) => (
            <button
              key={track.id}
              onClick={() => setActive(track.id)}
              className={`text-left py-5 px-4 md:px-5 border-r border-[#2F2F2C]/10 last:border-r-0 transition-colors ${
                active === track.id ? "bg-[#C96342]/8" : "hover:bg-[#2F2F2C]/[0.03]"
              }`}
            >
              <span className="block text-[10px] font-semibold tracking-wider mb-1" style={{ color: track.color }}>
                TRACK
              </span>
              <span className={`font-display block text-sm md:text-base tracking-tight ${
                active === track.id ? "text-[#C96342]" : "text-[#2F2F2C]"
              }`}>
                {track.subtitle}
              </span>
            </button>
          ))}
        </div>

        {/* ─── CONTENT ─── */}
        {active === "explorer" && (
          <ExplorerContent />
        )}

        {active === "maker-core" && (
          <MakerCoreContent />
        )}

        {TRACKS.map((track) =>
          active === track.id ? (
            <TrackContent key={track.id} track={track} />
          ) : null
        )}

        <p className="text-sm text-[#5A5751] italic mt-16 pt-10 border-t border-[#2F2F2C]/12">
          Cada clase/misión dura 60 minutos en vivo. Nivel 1: 10 clases (5 semanas).
          Nivel 2: 10 misiones (5 core + 5 del track elegido).
        </p>
      </div>
    </section>
  )
}

/* ─── SUB-COMPONENTS ─── */

function ExplorerContent() {
  return (
    <div className="grid md:grid-cols-12 gap-10 md:gap-16">
      <div className="md:col-span-4">
        <p className="text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold mb-5">
          Nivel 01 · 10 clases
        </p>
        <h3 className="font-display text-3xl md:text-4xl leading-tight tracking-tight mb-6">
          Fundamentos &amp; Creatividad con IA
        </h3>
        <p className="text-base text-[#5A5751] leading-relaxed">
          El punto de partida obligatorio. Tu hijo domina IA generativa, prompts,
          voz, música, arte, código y ética digital. Termina con un proyecto
          de identidad propio.
        </p>
        <p className="mt-4 text-sm text-[#5A5751]">
          <strong className="text-[#2F2F2C]">Edad:</strong> 8-17 años
        </p>
      </div>

      <ol className="md:col-span-8 divide-y divide-[#2F2F2C]/12">
        {EXPLORER_CLASSES.map((cls) => (
          <li key={cls.num} className="py-5 flex items-start gap-6">
            <span className="text-xs text-[#C96342] font-semibold tabular-nums shrink-0 w-6 pt-0.5">
              {cls.num}
            </span>
            <div>
              <span className="font-display text-base md:text-lg text-[#2F2F2C] leading-snug">
                {cls.title}
              </span>
              <p className="text-sm text-[#5A5751] mt-1">{cls.desc}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

function MakerCoreContent() {
  return (
    <div className="grid md:grid-cols-12 gap-10 md:gap-16">
      <div className="md:col-span-4">
        <p className="text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold mb-5">
          Nivel 02 · 5 misiones core
        </p>
        <h3 className="font-display text-3xl md:text-4xl leading-tight tracking-tight mb-6">
          Setup + herramientas + primer proyecto vivo
        </h3>
        <p className="text-base text-[#5A5751] leading-relaxed">
          Todos los alumnos de Vibe Maker completan estas 5 misiones antes de
          elegir su track. Crean una app, un bot y un workflow en vivo.
        </p>
        <p className="mt-4 text-sm text-[#5A5751]">
          <strong className="text-[#2F2F2C]">Edad:</strong> 11-17 años
        </p>
      </div>

      <ol className="md:col-span-8 divide-y divide-[#2F2F2C]/12">
        {MAKER_CORE.map((mission) => (
          <li key={mission.num} className="py-5 flex items-start gap-6">
            <span className="text-xs text-[#C96342] font-semibold tabular-nums shrink-0 w-6 pt-0.5">
              {mission.num}
            </span>
            <div>
              <span className="font-display text-base md:text-lg text-[#2F2F2C] leading-snug">
                {mission.title}
              </span>
              <p className="text-sm text-[#5A5751] mt-1">{mission.desc}</p>
              <p className="text-xs text-[#C96342] mt-2 font-mono-accent uppercase tracking-wider">
                Loot: {mission.loot}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

function TrackContent({ track }: { track: (typeof TRACKS)[number] }) {
  return (
    <div className="grid md:grid-cols-12 gap-10 md:gap-16">
      <div className="md:col-span-4">
        <p className="text-[11px] uppercase tracking-[0.28em] font-semibold mb-5" style={{ color: track.color }}>
          Track · 5 misiones
        </p>
        <h3 className="font-display text-3xl md:text-4xl leading-tight tracking-tight mb-6">
          {track.subtitle}
        </h3>
        <p className="text-base text-[#5A5751] leading-relaxed mb-4">
          {track.audience}
        </p>
        <div className="p-4 bg-[#2F2F2C]/[0.04] border border-[#2F2F2C]/10 rounded-[3px]">
          <p className="text-[10px] uppercase tracking-wider font-semibold mb-2" style={{ color: track.color }}>
            Proyecto final
          </p>
          <p className="text-sm text-[#2F2F2C] leading-relaxed">
            {track.finalProject}
          </p>
        </div>
      </div>

      <ol className="md:col-span-8 divide-y divide-[#2F2F2C]/12">
        {track.missions.map((mission) => (
          <li key={mission.num} className="py-5 flex items-start gap-6">
            <span className="text-xs font-semibold tabular-nums shrink-0 w-6 pt-0.5" style={{ color: track.color }}>
              {mission.num}
            </span>
            <div>
              <span className="font-display text-base md:text-lg text-[#2F2F2C] leading-snug">
                {mission.title}
              </span>
              <p className="text-sm text-[#5A5751] mt-1">{mission.desc}</p>
              <p className="text-xs mt-2 font-mono-accent uppercase tracking-wider" style={{ color: track.color }}>
                Loot: {mission.loot}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
