/**
 * Google Ads / gtag helpers.
 *
 * Window typings for `gtag` and `dataLayer` live in components/tracking-pixels.tsx
 * (declared as a global augmentation), so no redeclaration is needed here.
 *
 * All helpers are SSR-safe: they no-op if `window.gtag` is not available yet
 * (e.g. during SSR, or before next/script finishes loading afterInteractive).
 */

export const GOOGLE_ADS_ID = "AW-18090948342"

// Conversion labels from Google Ads (InnovaKids Latam account).
const FORM_SUBMIT_LABEL = `${GOOGLE_ADS_ID}/tRz6CN7N7JwcEPbtt7JD`
const WHATSAPP_CLICK_LABEL = `${GOOGLE_ADS_ID}/SuhVCNjN7JwcEPbtt7JD`
const CTA_CLICK_LABEL = `${GOOGLE_ADS_ID}/CozlCNvN7JwcEPbtt7JD`

function isGtagReady(): boolean {
  return typeof window !== "undefined" && typeof window.gtag === "function"
}

function pushToDataLayer(event: Record<string, unknown>): void {
  if (typeof window === "undefined") return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push(event)
}

/**
 * Fires when the contact form is successfully submitted.
 * Uses the pre-existing Google Ads conversion label.
 */
export function trackFormSubmit(): void {
  pushToDataLayer({
    event: "form_submit",
    form_name: "contact_form",
  })

  if (!isGtagReady()) return
  window.gtag("event", "conversion", {
    send_to: FORM_SUBMIT_LABEL,
    value: 93.0,
    currency: "USD",
  })
}

/**
 * Fires when the user clicks the floating WhatsApp button.
 */
export function trackWhatsAppClick(): void {
  pushToDataLayer({
    event: "whatsapp_click",
  })

  if (!isGtagReady()) return
  window.gtag("event", "conversion", {
    send_to: WHATSAPP_CLICK_LABEL,
    value: 107.0,
    currency: "USD",
  })
}

/**
 * Generic CTA click event. Pass a descriptive name to identify which CTA fired.
 */
export function trackCTAClick(ctaName: string): void {
  pushToDataLayer({
    event: "cta_click",
    cta_name: ctaName,
  })

  if (!isGtagReady()) return
  window.gtag("event", "conversion", {
    send_to: CTA_CLICK_LABEL,
    value: 27.0,
    currency: "USD",
    cta_name: ctaName,
  })
}
