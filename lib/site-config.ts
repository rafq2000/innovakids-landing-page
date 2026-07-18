/**
 * Single source of truth for cohort dates, pricing, and site-wide constants.
 * Import from here instead of hardcoding dates/prices in components.
 */

/* ─── COHORT DATES ─────────────────────────────────────── */

export const COHORT = {
  name: "Agosto 2026",
  nameShort: "agosto 2026",
  startDate: "10 de agosto del 2026",
  startDateShort: "10 de agosto",
  startDateCompact: "10.08",
  registrationCloseDate: "Dom. 09.08",
  registrationCloseDateLong: "9 de agosto",
  /** ISO 8601 — used by countdown timer */
  startISO: "2026-08-10T00:00:00-04:00",
  nextCohort: "octubre",
  totalSpots: 15,
  groupSize: 5,
} as const

/* ─── PRICING ──────────────────────────────────────────── */

export const PRICING = {
  /** Full price in USD */
  full: 297,
  /** Early-decision price: enrolling within 48h after the diagnostic session */
  earlyDecision: 267,
  /** Hours after the diagnostic session during which earlyDecision applies */
  earlyDecisionWindowHours: 48,
  /** Reservation deposit in USD */
  reservation: 27,
  /** Remaining balance after 2 classes (early-decision flow: 27 + 240 = 267) */
  remainder: 240,
  /** Number of installments */
  installments: 3,
} as const

/* ─── SOCIAL PROOF ────────────────────────────────────── */

export const SOCIAL_PROOF = {
  graduates: 527,
  rating: 4.9,
  reviews: 127,
  countries: 9,
  guaranteeDays: 10,
} as const

/* ─── WHATSAPP ────────────────────────────────────────── */

export const WHATSAPP = {
  sales: "56964754219",
  support: "56922450492",
} as const

/* ─── SESSION ─────────────────────────────────────────── */

export const SESSION = {
  name: "Sesión diagnostica gratuita",
  duration: 30,
  durationText: "30 a 45 minutos",
} as const

/* ─── AGE GROUPS ──────────────────────────────────────── */

export const AGE_GROUPS = {
  full: "8-17",
  groups: [
    { range: "8-10", name: "Exploradores" },
    { range: "11-13", name: "Creadores" },
    { range: "14-17", name: "Profesionales" },
  ],
} as const

/* ─── CURRICULUM STRUCTURE ────────────────────────────── */

export const CURRICULUM = {
  levels: [
    { id: "explorer", name: "Vibe Explorer", classes: 10, weeks: 5, ageMin: 8 },
  ],
} as const
