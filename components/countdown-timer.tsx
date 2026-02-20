"use client"

import { useEffect, useState } from "react"

interface CountdownTimerProps {
  targetDate?: string // ISO format: "2026-03-09T23:59:00-03:00"
  label?: string
}

export function CountdownTimer({ targetDate, label = "Cierra en" }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const deadline = targetDate ? new Date(targetDate) : (() => {
      const d = new Date()
      d.setDate(d.getDate() + 7)
      return d
    })()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = deadline.getTime() - now

      if (distance < 0) {
        clearInterval(timer)
        return
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const isUrgent = timeLeft.days === 0 && timeLeft.hours < 24

  return (
    <div className="flex flex-col gap-3 justify-center items-center">
      <span className="text-gray-400 text-sm font-medium uppercase tracking-wide">{label} 😱</span>
      <div className="flex gap-2 justify-center items-center">
        <div className="text-center">
          <div className={`bg-[#0a1628] rounded-lg px-3 py-2 min-w-[60px] ${isUrgent ? "animate-pulse" : ""}`}>
            <span className={`text-2xl font-bold ${isUrgent ? "text-red-500" : "text-[#4DD0E1]"}`}>
              {String(timeLeft.days).padStart(2, "0")}
            </span>
          </div>
          <span className="text-xs text-gray-400 mt-1 block">Días</span>
        </div>
        <span className={`text-2xl font-bold ${isUrgent ? "text-red-500" : "text-[#4DD0E1]"}`}>:</span>
        <div className="text-center">
          <div className={`bg-[#0a1628] rounded-lg px-3 py-2 min-w-[60px] ${isUrgent ? "animate-pulse" : ""}`}>
            <span className={`text-2xl font-bold ${isUrgent ? "text-red-500" : "text-[#4DD0E1]"}`}>
              {String(timeLeft.hours).padStart(2, "0")}
            </span>
          </div>
          <span className="text-xs text-gray-400 mt-1 block">Horas</span>
        </div>
        <span className={`text-2xl font-bold ${isUrgent ? "text-red-500" : "text-[#4DD0E1]"}`}>:</span>
        <div className="text-center">
          <div className={`bg-[#0a1628] rounded-lg px-3 py-2 min-w-[60px] ${isUrgent ? "animate-pulse" : ""}`}>
            <span className={`text-2xl font-bold ${isUrgent ? "text-red-500" : "text-[#4DD0E1]"}`}>
              {String(timeLeft.minutes).padStart(2, "0")}
            </span>
          </div>
          <span className="text-xs text-gray-400 mt-1 block">Min</span>
        </div>
        <span className={`text-2xl font-bold ${isUrgent ? "text-red-500" : "text-[#4DD0E1]"}`}>:</span>
        <div className="text-center">
          <div className={`bg-[#0a1628] rounded-lg px-3 py-2 min-w-[60px] ${isUrgent ? "animate-pulse" : ""}`}>
            <span className={`text-2xl font-bold ${isUrgent ? "text-red-500" : "text-[#4DD0E1]"}`}>
              {String(timeLeft.seconds).padStart(2, "0")}
            </span>
          </div>
          <span className="text-xs text-gray-400 mt-1 block">Seg</span>
        </div>
      </div>
    </div>
  )
}
