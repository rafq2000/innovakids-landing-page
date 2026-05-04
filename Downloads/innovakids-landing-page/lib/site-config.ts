/**
 * Single source of truth for cohort dates, pricing, and site-wide constants.
 * Import from here instead of hardcoding dates/prices in components.
 */

/* ─── COHORT DATES ─────────────────────────────────────── */

export const COHORT = {
  name: "Mayo 2026",
  nameShort: "mayo 2026",
  startDate: "18 de Mayo del 2026",
  startDateShort: "18 de mayo",
  startDateCompact: "18.05",
  registrationCloseDate: "Sáb. 17.05",
  registrationCloseDateLong: "17 de mayo",
  /** ISO 8601 — used by countdown timer */
  startISO: "2026-05-18T00:00:00-04:00",
  nextCohort: "septiembre",
  totalSpots: 15,
  spotsRemaining: 7,
  groupSize: 5,
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
