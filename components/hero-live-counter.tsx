"use client"

import { useEffect, useState } from "react"

export function HeroLiveCounter() {
    const [viewers, setViewers] = useState(0)

    useEffect(() => {
        // Simulate live viewers
        const baseViewers = Math.floor(Math.random() * 15) + 25
        setViewers(baseViewers)

        const interval = setInterval(() => {
            setViewers(prev => {
                const change = Math.random() > 0.5 ? 1 : -1
                return Math.max(20, Math.min(50, prev + change))
            })
        }, 5000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 animate-fadeIn"
            style={{ animationDelay: "1s" }}
        >
            <span className="live-indicator text-sm text-gray-300">
                <span className="font-semibold text-white">{viewers}</span> familias viendo ahora
            </span>
        </div>
    )
}
