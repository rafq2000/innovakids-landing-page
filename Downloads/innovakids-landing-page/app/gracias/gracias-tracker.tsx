"use client"

import { useEffect, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { trackBookingConfirmed } from "@/lib/gtag"

/**
 * Fires the booking_confirmed GA4 / Google Ads conversion once when /gracias
 * mounts. Also verifies that the user arrived via a payment flow (has query params).
 * If accessed directly without payment params, redirects to home.
 */
export function GraciasTracker() {
    const searchParams = useSearchParams()
    const router = useRouter()
    const [verified, setVerified] = useState(false)

    useEffect(() => {
        const method = searchParams.get("method")
        const orderId = searchParams.get("orderId")
        const eventId = searchParams.get("event_type_uuid") ?? searchParams.get("invitee_uuid")

        // Valid access: has payment method OR Calendly event params
        if (method || eventId) {
            setVerified(true)
            trackBookingConfirmed({ eventId: eventId ?? orderId ?? undefined })
        } else {
            // No payment params — redirect to home
            router.replace("/")
        }
    }, [searchParams, router])

    if (!verified) {
        return (
            <div className="fixed inset-0 bg-[#FAF7EF] z-50 flex items-center justify-center">
                <p className="text-[#1A1714]/60 text-lg">Redirigiendo...</p>
            </div>
        )
    }

    return null
}
