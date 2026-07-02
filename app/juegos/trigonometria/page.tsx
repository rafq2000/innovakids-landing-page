"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import Link from "next/link"

const LESSONS = [
  {
    id: "angles",
    title: "¿Qué es un ángulo?",
    explanation: "Un ángulo es la abertura entre dos líneas que se juntan en un punto (vértice). Se mide en grados (°). Un ángulo recto mide 90°, un llano 180° y uno completo 360°.",
    interactive: "angle",
  },
  {
    id: "triangle",
    title: "Triángulo rectángulo",
    explanation: "Un triángulo rectángulo tiene un ángulo de 90°. Sus lados se llaman: Hipotenusa (el más largo, frente al ángulo recto), Cateto opuesto (frente al ángulo que estamos midiendo) y Cateto adyacente (junto al ángulo).",
    interactive: "triangle",
  },
  {
    id: "sin",
    title: "Seno (sin)",
    explanation: "El seno de un ángulo es la razón entre el cateto opuesto y la hipotenusa:\n\nsin(α) = Cateto Opuesto / Hipotenusa\n\nEjemplo: Si el cateto opuesto mide 3 y la hipotenusa 5, entonces sin(α) = 3/5 = 0.6",
    interactive: "trig",
    func: "sin",
  },
  {
    id: "cos",
    title: "Coseno (cos)",
    explanation: "El coseno de un ángulo es la razón entre el cateto adyacente y la hipotenusa:\n\ncos(α) = Cateto Adyacente / Hipotenusa\n\nEjemplo: Si el cateto adyacente mide 4 y la hipotenusa 5, entonces cos(α) = 4/5 = 0.8",
    interactive: "trig",
    func: "cos",
  },
  {
    id: "tan",
    title: "Tangente (tan)",
    explanation: "La tangente es la razón entre el cateto opuesto y el cateto adyacente:\n\ntan(α) = Cateto Opuesto / Cateto Adyacente\n\nEjemplo: Si el opuesto mide 3 y el adyacente 4, entonces tan(α) = 3/4 = 0.75",
    interactive: "trig",
    func: "tan",
  },
  {
    id: "unit-circle",
    title: "Círculo unitario",
    explanation: "El círculo unitario tiene radio 1 y centro en el origen. Para cualquier ángulo α:\n• cos(α) = coordenada X del punto en el círculo\n• sin(α) = coordenada Y del punto en el círculo\n\nMueve el ángulo para ver cómo cambian seno y coseno.",
    interactive: "circle",
  },
]

function AngleCanvas({ angle, setAngle }: { angle: number; setAngle: (a: number) => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const dragging = useRef(false)

  const draw = useCallback((ctx: CanvasRenderingContext2D, a: number) => {
    const w = ctx.canvas.width, h = ctx.canvas.height
    const cx = w / 2, cy = h / 2, r = Math.min(w, h) * 0.35
    ctx.clearRect(0, 0, w, h)

    // Arc
    ctx.beginPath()
    ctx.arc(cx, cy, r * 0.3, 0, -a * Math.PI / 180, true)
    ctx.strokeStyle = "#e94560"
    ctx.lineWidth = 2
    ctx.stroke()

    // Lines
    ctx.beginPath()
    ctx.moveTo(cx, cy)
    ctx.lineTo(cx + r, cy)
    ctx.strokeStyle = "#666"
    ctx.lineWidth = 2
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(cx, cy)
    ctx.lineTo(cx + r * Math.cos(-a * Math.PI / 180), cy + r * Math.sin(-a * Math.PI / 180))
    ctx.strokeStyle = "#0f3460"
    ctx.lineWidth = 3
    ctx.stroke()

    // Label
    ctx.fillStyle = "#e94560"
    ctx.font = "bold 20px sans-serif"
    ctx.fillText(`${Math.round(a)}°`, cx + 15, cy - 15)

    // Type
    let tipo = ""
    if (a < 90) tipo = "Agudo"
    else if (a === 90) tipo = "Recto"
    else if (a < 180) tipo = "Obtuso"
    else if (a === 180) tipo = "Llano"
    else tipo = "Reflejo"
    ctx.fillStyle = "#333"
    ctx.font = "16px sans-serif"
    ctx.fillText(`Tipo: ${tipo}`, 10, 25)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")!
    draw(ctx, angle)
  }, [angle, draw])

  const handleMove = (clientX: number, clientY: number) => {
    if (!dragging.current) return
    const canvas = canvasRef.current!
    const rect = canvas.getBoundingClientRect()
    const x = clientX - rect.left - canvas.width / 2
    const y = clientY - rect.top - canvas.height / 2
    let a = -Math.atan2(y, x) * 180 / Math.PI
    if (a < 0) a += 360
    setAngle(Math.round(a))
  }

  return (
    <div>
      <canvas
        ref={canvasRef} width={300} height={300}
        className="border rounded-lg bg-white cursor-pointer w-full max-w-[300px]"
        onMouseDown={() => { dragging.current = true }}
        onMouseUp={() => { dragging.current = false }}
        onMouseLeave={() => { dragging.current = false }}
        onMouseMove={(e) => handleMove(e.clientX, e.clientY)}
        onTouchStart={() => { dragging.current = true }}
        onTouchEnd={() => { dragging.current = false }}
        onTouchMove={(e) => { const t = e.touches[0]; handleMove(t.clientX, t.clientY) }}
      />
      <input
        type="range" min={0} max={360} value={angle} onChange={e => setAngle(Number(e.target.value))}
        className="w-full max-w-[300px] mt-2 accent-[#e94560]"
      />
    </div>
  )
}

function TriangleCanvas({ angle }: { angle: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")!
    const w = canvas.width, h = canvas.height
    ctx.clearRect(0, 0, w, h)

    const a = Math.max(10, Math.min(80, angle)) * Math.PI / 180
    const base = 200, opp = base * Math.tan(a), hyp = base / Math.cos(a)
    const ox = 50, oy = h - 50
    const scale = Math.min(1, (w - 100) / base, (h - 100) / opp)

    const bx = ox + base * scale, ty = oy - opp * scale

    // Triangle
    ctx.beginPath()
    ctx.moveTo(ox, oy)
    ctx.lineTo(bx, oy)
    ctx.lineTo(bx, ty)
    ctx.closePath()
    ctx.strokeStyle = "#0f3460"
    ctx.lineWidth = 3
    ctx.stroke()

    // Right angle marker
    const m = 15
    ctx.beginPath()
    ctx.moveTo(bx - m, oy)
    ctx.lineTo(bx - m, oy - m)
    ctx.lineTo(bx, oy - m)
    ctx.strokeStyle = "#e94560"
    ctx.lineWidth = 2
    ctx.stroke()

    // Labels
    ctx.font = "bold 14px sans-serif"
    ctx.fillStyle = "#e94560"
    ctx.fillText(`α = ${angle}°`, ox + 30, oy - 8)
    ctx.fillStyle = "#0f3460"
    ctx.fillText(`Adyacente`, ox + base * scale / 2 - 30, oy + 20)
    ctx.fillText(`Opuesto`, bx + 8, oy - opp * scale / 2)

    // Hypotenuse
    ctx.save()
    ctx.translate((ox + bx) / 2, (oy + ty) / 2)
    ctx.rotate(-Math.atan2(opp * scale, base * scale))
    ctx.fillStyle = "#22c55e"
    ctx.fillText(`Hipotenusa`, -35, -8)
    ctx.restore()

    // Values
    const sinV = Math.sin(a).toFixed(3), cosV = Math.cos(a).toFixed(3), tanV = Math.tan(a).toFixed(3)
    ctx.fillStyle = "#333"
    ctx.font = "13px sans-serif"
    ctx.fillText(`sin(${angle}°) = ${sinV}`, 10, 20)
    ctx.fillText(`cos(${angle}°) = ${cosV}`, 10, 38)
    ctx.fillText(`tan(${angle}°) = ${tanV}`, 10, 56)
  }, [angle])

  return (
    <canvas ref={canvasRef} width={350} height={300}
      className="border rounded-lg bg-white w-full max-w-[350px]" />
  )
}

function UnitCircleCanvas({ angle, setAngle }: { angle: number; setAngle: (a: number) => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const dragging = useRef(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")!
    const w = canvas.width, h = canvas.height
    const cx = w / 2, cy = h / 2, r = Math.min(w, h) * 0.35
    ctx.clearRect(0, 0, w, h)

    // Axes
    ctx.strokeStyle = "#ccc"
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.moveTo(0, cy); ctx.lineTo(w, cy)
    ctx.moveTo(cx, 0); ctx.lineTo(cx, h)
    ctx.stroke()

    // Circle
    ctx.beginPath()
    ctx.arc(cx, cy, r, 0, Math.PI * 2)
    ctx.strokeStyle = "#0f3460"
    ctx.lineWidth = 2
    ctx.stroke()

    const rad = angle * Math.PI / 180
    const px = cx + r * Math.cos(rad)
    const py = cy - r * Math.sin(rad)

    // Cos line (horizontal)
    ctx.beginPath()
    ctx.moveTo(cx, cy); ctx.lineTo(px, cy)
    ctx.strokeStyle = "#3b82f6"
    ctx.lineWidth = 3
    ctx.stroke()

    // Sin line (vertical)
    ctx.beginPath()
    ctx.moveTo(px, cy); ctx.lineTo(px, py)
    ctx.strokeStyle = "#e94560"
    ctx.lineWidth = 3
    ctx.stroke()

    // Radius
    ctx.beginPath()
    ctx.moveTo(cx, cy); ctx.lineTo(px, py)
    ctx.strokeStyle = "#22c55e"
    ctx.lineWidth = 2
    ctx.stroke()

    // Point
    ctx.beginPath()
    ctx.arc(px, py, 5, 0, Math.PI * 2)
    ctx.fillStyle = "#0f3460"
    ctx.fill()

    // Arc
    ctx.beginPath()
    ctx.arc(cx, cy, 25, 0, -rad, rad > 0)
    ctx.strokeStyle = "#e94560"
    ctx.lineWidth = 1.5
    ctx.stroke()

    // Labels
    ctx.font = "bold 13px sans-serif"
    ctx.fillStyle = "#3b82f6"
    ctx.fillText(`cos = ${Math.cos(rad).toFixed(3)}`, 10, 20)
    ctx.fillStyle = "#e94560"
    ctx.fillText(`sin = ${Math.sin(rad).toFixed(3)}`, 10, 38)
    ctx.fillStyle = "#333"
    ctx.fillText(`${angle}°`, cx + 30, cy - 5)
  }, [angle])

  const handleMove = (clientX: number, clientY: number) => {
    if (!dragging.current) return
    const canvas = canvasRef.current!
    const rect = canvas.getBoundingClientRect()
    const scaleX = canvas.width / rect.width
    const scaleY = canvas.height / rect.height
    const x = (clientX - rect.left) * scaleX - canvas.width / 2
    const y = (clientY - rect.top) * scaleY - canvas.height / 2
    let a = -Math.atan2(y, x) * 180 / Math.PI
    if (a < 0) a += 360
    setAngle(Math.round(a))
  }

  return (
    <div>
      <canvas
        ref={canvasRef} width={350} height={350}
        className="border rounded-lg bg-white cursor-pointer w-full max-w-[350px]"
        onMouseDown={() => { dragging.current = true }}
        onMouseUp={() => { dragging.current = false }}
        onMouseLeave={() => { dragging.current = false }}
        onMouseMove={(e) => handleMove(e.clientX, e.clientY)}
        onTouchStart={() => { dragging.current = true }}
        onTouchEnd={() => { dragging.current = false }}
        onTouchMove={(e) => { const t = e.touches[0]; handleMove(t.clientX, t.clientY) }}
      />
      <input
        type="range" min={0} max={360} value={angle} onChange={e => setAngle(Number(e.target.value))}
        className="w-full max-w-[350px] mt-2 accent-[#e94560]"
      />
    </div>
  )
}

export default function TrigPage() {
  const [current, setCurrent] = useState(0)
  const [angle, setAngle] = useState(45)
  const lesson = LESSONS[current]

  return (
    <main className="min-h-screen bg-[#F5F1E8] py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-[#0f3460] mb-6">📐 Aprende Trigonometría</h1>

        {/* Progress */}
        <div className="flex gap-1 mb-6">
          {LESSONS.map((l, i) => (
            <button
              key={l.id}
              onClick={() => { setCurrent(i); setAngle(45) }}
              className={`flex-1 h-2 rounded-full transition-colors ${i <= current ? "bg-[#e94560]" : "bg-gray-300"}`}
            />
          ))}
        </div>

        {/* Lesson card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-[#0f3460] mb-3">
            {current + 1}. {lesson.title}
          </h2>
          <div className="text-gray-700 mb-6 whitespace-pre-line leading-relaxed text-sm">
            {lesson.explanation}
          </div>

          {/* Interactive */}
          <div className="flex justify-center">
            {lesson.interactive === "angle" && (
              <AngleCanvas angle={angle} setAngle={setAngle} />
            )}
            {lesson.interactive === "triangle" && (
              <div className="text-center">
                <input
                  type="range" min={10} max={80} value={angle} onChange={e => setAngle(Number(e.target.value))}
                  className="w-full max-w-[350px] mb-2 accent-[#e94560]"
                />
                <p className="text-sm text-gray-500 mb-2">α = {angle}°</p>
                <TriangleCanvas angle={angle} />
              </div>
            )}
            {lesson.interactive === "trig" && (
              <div className="text-center">
                <input
                  type="range" min={0} max={90} value={angle} onChange={e => setAngle(Number(e.target.value))}
                  className="w-full max-w-[350px] mb-2 accent-[#e94560]"
                />
                <p className="text-sm text-gray-500 mb-2">α = {angle}°</p>
                <TriangleCanvas angle={angle} />
                <div className="mt-3 p-3 bg-gray-50 rounded-lg text-left text-sm">
                  {lesson.func === "sin" && (
                    <p><strong className="text-[#e94560]">sin({angle}°)</strong> = {Math.sin(angle * Math.PI / 180).toFixed(4)}</p>
                  )}
                  {lesson.func === "cos" && (
                    <p><strong className="text-blue-500">cos({angle}°)</strong> = {Math.cos(angle * Math.PI / 180).toFixed(4)}</p>
                  )}
                  {lesson.func === "tan" && (
                    <p><strong className="text-green-600">tan({angle}°)</strong> = {angle === 90 ? "∞ (indefinida)" : Math.tan(angle * Math.PI / 180).toFixed(4)}</p>
                  )}
                </div>
              </div>
            )}
            {lesson.interactive === "circle" && (
              <UnitCircleCanvas angle={angle} setAngle={setAngle} />
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={() => { setCurrent(Math.max(0, current - 1)); setAngle(45) }}
            disabled={current === 0}
            className="px-5 py-2 bg-[#0f3460] text-white rounded-lg disabled:opacity-30 hover:bg-[#1a4a8a] transition"
          >
            ← Anterior
          </button>
          <span className="text-gray-500 text-sm">{current + 1} / {LESSONS.length}</span>
          <button
            onClick={() => { setCurrent(Math.min(LESSONS.length - 1, current + 1)); setAngle(45) }}
            disabled={current === LESSONS.length - 1}
            className="px-5 py-2 bg-[#e94560] text-white rounded-lg disabled:opacity-30 hover:bg-[#d63a55] transition"
          >
            Siguiente →
          </button>
        </div>

        <div className="text-center mt-8">
          <Link href="/juegos" className="text-gray-500 hover:text-gray-700 text-sm underline">
            ← Volver a juegos
          </Link>
        </div>
      </div>
    </main>
  )
}
