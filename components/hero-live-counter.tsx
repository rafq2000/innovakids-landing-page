import { SOCIAL_PROOF } from "@/lib/site-config"

export function HeroLiveCounter() {
  return (
    <span className="inline-flex items-center gap-3 font-mono-accent text-[11px] uppercase tracking-[0.18em] text-[var(--ink-soft)]">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--terracotta)] live-dot" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--terracotta)]" />
      </span>
      <span className="tabular-nums text-[var(--ink)] text-sm normal-case tracking-normal font-display">
        +{SOCIAL_PROOF.graduates}
      </span>
      familias nos eligieron
    </span>
  )
}
