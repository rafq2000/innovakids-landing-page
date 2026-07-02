"use client"

import { useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { trackBookingConfirmed, trackPurchase } from "@/lib/gtag"

/**
 * Fires the booking_confirmed GA4 / Google Ads conversion once when /gracias
 * mounts. Also verifies that the user arrived via a payment flow (has query params).
 * If accessed directly without payment params, redirects to home.
 */
export function GraciasTracker() {
    const searchParams = useSearchParams()
    const router = useRouter()

    const method = searchParams.get("method")
    const eventId = searchParams.get("event_type_uuid") ?? searchParams.get("invitee_uuid")
    // Valid access: has payment method OR Calendly event params
    const verified = Boolean(method || eventId)

    useEffect(() => {
        if (!verified) {
            // No payment params — redirect to home
            router.replace("/")
            return
        }

        const orderId = searchParams.get("orderId")

        // Fire purchase tracking for payment methods (PayPal or MercadoPago)
        if (method) {
            const amount = parseFloat(searchParams.get("amount") ?? "0")
            if (amount > 0) {
                trackPurchase({ value: amount, currency: "USD", transactionId: orderId ?? "unknown" })
                // Fire Meta Pixel Purchase if available
                if (typeof window !== "undefined" && typeof (window as { fbq?: (...args: unknown[]) => void }).fbq === "function") {
                    (window as { fbq?: (...args: unknown[]) => void }).fbq!("track", "Purchase", { value: amount, currency: "USD" })
                }
            }
        }

        trackBookingConfirmed({ eventId: eventId ?? orderId ?? undefined })
    }, [verified, method, eventId, searchParams, router])

    if (!verified) {
        return (
            <div className="fixed inset-0 bg-[#FAF7EF] z-50 flex items-center justify-center">
                <p className="text-[#1A1714]/60 text-lg">Redirigiendo...</p>
            </div>
        )
    }

    return null
}
