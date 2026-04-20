/**
 * Google Ads / GA4 / gtag helpers.
 *
 * Window typings for `gtag` and `dataLayer` live in components/tracking-pixels.tsx
 * (declared as a global augmentation), so no redeclaration is needed here.
 *
 * All helpers are SSR-safe: they no-op if `window.gtag` is not available yet
 * (e.g. during SSR, or before next/script finishes loading afterInteractive).
 */

export const GOOGLE_ADS_ID = "AW-18090948342"
export const GA4_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA4_ID || ""

// Conversion labels from Google Ads (InnovaKids Latam account).
const FORM_SUBMIT_LABEL = `${GOOGLE_ADS_ID}/tRz6CN7N7JwcEPbtt7JD`
const WHATSAPP_CLICK_LABEL = `${GOOGLE_ADS_ID}/SuhVCNjN7JwcEPbtt7JD`
const CTA_CLICK_LABEL = `${GOOGLE_ADS_ID}/CozlCNvN7JwcEPbtt7JD`

function isGtagReady(): boolean {
    return typeof window !== "undefined" && typeof window.gtag === "function"
}

function isFbqReady(): boolean {
    return typeof window !== "undefined" && typeof window.fbq === "function"
}

/**
 * Thin wrapper so Meta Pixel calls are SSR-safe and silently no-op when the
 * pixel hasn't been initialized (e.g. NEXT_PUBLIC_FACEBOOK_PIXEL_ID not set).
 */
function trackMeta(event: string, params?: Record<string, unknown>): void {
    if (!isFbqReady()) return
    if (params) {
        window.fbq!("track", event, params)
    } else {
        window.fbq!("track", event)
    }
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

    if (isGtagReady()) {
        window.gtag("event", "conversion", {
            send_to: FORM_SUBMIT_LABEL,
            value: 93.0,
            currency: "USD",
        })
    }

    // Meta: generic contact lead
    trackMeta("Lead", {
        content_name: "contact_form",
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

    if (isGtagReady()) {
        window.gtag("event", "conversion", {
            send_to: WHATSAPP_CLICK_LABEL,
            value: 107.0,
            currency: "USD",
        })
    }

    // Meta: WhatsApp click is a high-intent contact
    trackMeta("Contact", {
        content_name: "whatsapp_click",
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

// ─────────────────────────────────────────────────────────────
// Funnel events — Calendly booking journey
// ─────────────────────────────────────────────────────────────

export interface CalendlyIntentPayload {
    country?: string
    childAge?: string
    source?: string
}

/**
 * Fires when the user submits the booking form and is about to be redirected
 * to Calendly. This is the "booking_intent" step — not yet confirmed.
 */
export function trackCalendlyIntent(payload: CalendlyIntentPayload = {}): void {
    pushToDataLayer({
        event: "calendly_intent",
        country: payload.country,
        child_age: payload.childAge,
        source: payload.source ?? "form",
    })

    if (isGtagReady()) {
        window.gtag("event", "begin_checkout", {
            currency: "USD",
            value: 50.0,
            items: [
                {
                    item_id: "strategic_session",
                    item_name: "Sesión estratégica gratis (30 min)",
                    item_category: "booking",
                    quantity: 1,
                },
            ],
            country: payload.country,
            child_age: payload.childAge,
            source: payload.source ?? "form",
        })
    }

    // Meta: booking intent (user about to hit Calendly)
    trackMeta("InitiateCheckout", {
        content_name: "strategic_session",
        content_category: "booking_intent",
        value: 50.0,
        currency: "USD",
        country: payload.country,
        child_age: payload.childAge,
    })
    trackMeta("Lead", {
        content_name: "booking_intent",
        value: 50.0,
        currency: "USD",
    })
}

/**
 * Fires once Calendly confirms the booking and redirects to /gracias.
 * This is the true "booking_confirmed" conversion event.
 */
export function trackBookingConfirmed(payload: { eventId?: string } = {}): void {
    pushToDataLayer({
        event: "booking_confirmed",
        event_id: payload.eventId,
    })

    if (isGtagReady()) {
        // GA4 event — high-value conversion
        window.gtag("event", "booking_confirmed", {
            currency: "USD",
            value: 150.0,
            event_id: payload.eventId,
        })

        // Also fire Google Ads conversion (reusing form_submit label until a
        // dedicated "booking_confirmed" conversion action is created in Ads)
        window.gtag("event", "conversion", {
            send_to: FORM_SUBMIT_LABEL,
            value: 150.0,
            currency: "USD",
        })
    }

    // Meta Pixel — Calendly-confirmed booking. Fires Schedule (native event)
    // + CompleteRegistration so it's immediately usable as a custom conversion
    // in Ads Manager without additional setup.
    trackMeta("Schedule", {
        content_name: "strategic_session",
        value: 150.0,
        currency: "USD",
        event_id: payload.eventId,
    })
    trackMeta("CompleteRegistration", {
        content_name: "booking_confirmed",
        value: 150.0,
        currency: "USD",
        status: "confirmed",
        event_id: payload.eventId,
    })
}

/**
 * Fires when a pricing CTA is clicked (any plan).
 */
export function trackPricingCTA(plan: string): void {
    pushToDataLayer({
        event: "pricing_cta_click",
        plan,
    })

    if (!isGtagReady()) return
    window.gtag("event", "select_item", {
        item_list_name: "pricing",
        items: [{ item_id: plan, item_name: plan, item_category: "pricing" }],
    })
}

/**
 * Fires on the final purchase (to be wired from the payment webhook or
 * a thank-you-after-payment page).
 */
export function trackPurchase(payload: {
    transactionId: string
    value: number
    currency?: string
}): void {
    pushToDataLayer({
        event: "purchase",
        transaction_id: payload.transactionId,
        value: payload.value,
        currency: payload.currency ?? "USD",
    })

    if (!isGtagReady()) return
    window.gtag("event", "purchase", {
        transaction_id: payload.transactionId,
        value: payload.value,
        currency: payload.currency ?? "USD",
    })
}
