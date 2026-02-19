"use client"

import { useEffect, useState } from "react"

export function HeroCountdown() {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

    useEffect(() => {
        const startDate = new Date("2026-03-09T00:00:00")
        const updateCountdown = () => {
            const now = new Date()
            const diff = startDate.getTime() - now.getTime()
            if (diff > 0) {
                setTimeLeft({
                    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((diff % (1000 * 60)) / 1000),
                })
            }
        }
        updateCountdown()
        const interval = setInterval(updateCountdown, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="flex justify-center gap-4 sm:gap-8">
            {[
                { value: timeLeft.days, label: "días" },
                { value: timeLeft.hours, label: "horas" },
                { value: timeLeft.minutes, label: "min" },
                { value: timeLeft.seconds, label: "seg" },
            ].map((item, i) => (
                <div
                    key={i}
                    className="relative group/item"
                >
                    <div
                        className="text-center px-4 sm:px-6 py-4 rounded-2xl transition-all duration-300 hover:scale-105"
                        style={{
                            background: "rgba(77, 208, 225, 0.05)",
                            border: "1px solid rgba(77, 208, 225, 0.2)",
                        }}
                    >
                        <div className="text-3xl sm:text-4xl md:text-5xl font-bold font-premium bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
                            {item.value.toString().padStart(2, "0")}
                        </div>
                        <div className="text-gray-500 text-xs sm:text-sm uppercase mt-2 tracking-wider">
                            {item.label}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
