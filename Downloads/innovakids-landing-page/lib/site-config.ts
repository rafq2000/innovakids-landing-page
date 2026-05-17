/**
 * Single source of truth for cohort dates, pricing, and site-wide constants.
 * Import from here instead of hardcoding dates/prices in components.
 */

/* ─── COHORT DATES ─────────────────────────────────────── */

export const COHORT = {
  name: "Junio 2026",
  nameShort: "junio 2026",
  startDate: "8 de Junio del 2026",
  startDateShort: "8 de junio",
  startDateCompact: "08.06",
  registrationCloseDate: "Sáb. 07.06",
  registrationCloseDateLong: "7 de junio",
  /** ISO 8601 — used by countdown timer */
  startISO: "2026-06-08T00:00:00-04:00",
  nextCohort: "septiembre",
  totalSpots: 15,
  spotsRemaining: 4,
  groupSize: 5,
  /** Urgency message shown across CTAs */
  urgencyMessage: "Las plazas se agotan rápido",
} as const

/* ─── PRICING ──────────────────────────────────────────── */

export const PRICING = {
  /** Full price in USD */
  full: 267,
  /** Reservation deposit in USD */
  reservation: 27,
  /** Remaining balance after 2 classes */
  remainder: 240,
  /** "Regular" / anchor price for value stack */
  regularAnchor: 797,
  /** Number of installments */
  installments: 3,
} as const
