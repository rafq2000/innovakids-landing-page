"use client"

import { useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { trackBookingConfirmed } from "@/lib/gtag"

/**
 * Fires the booking_confirmed GA4 / Google Ads conversion once when /gracias
 * mounts (i.e., after Calendly redirects the user here). Using a client-only
 * component keeps the page itself server-rendered.
 */
export function GraciasTracker() {
    const searchParams = useSearchParams()

    useEffect(() => {
        const eventId = searchParams.get("event_type_uuid") ?? searchParams.get("invitee_uuid") ?? undefined
        trackBookingConfirmed({ eventId })
    }, [searchParams])

    return null
}
