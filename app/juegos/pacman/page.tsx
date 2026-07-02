"use client"

import { useEffect, useRef, useCallback, useState } from "react"
import Link from "next/link"

const CELL = 20
const COLS = 21
const ROWS = 23
const W = COLS * CELL
const H = ROWS * CELL

// 0=empty, 1=wall, 2=dot, 3=power, 4=ghost-house
const BASE_MAP = [
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,1],
  [1,3,1,1,2,1,1,1,2,2,1,2,2,1,1,1,2,1,1,3,1],
  [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
  [1,2,1,1,2,1,2,1,1,1,1,1,1,1,2,1,2,1,1,2,1],
  [1,2,2,2,2,1,2,2,2,2,1,2,2,2,2,1,2,2,2,2,1],
  [1,1,1,1,2,1,1,1,0,0,1,0,0,1,1,1,2,1,1,1,1],
  [0,0,0,1,2,1,0,0,0,0,0,0,0,0,0,1,2,1,0,0,0],
  [1,1,1,1,2,1,0,1,1,4,4,4,1,1,0,1,2,1,1,1,1],
  [0,0,0,0,2,0,0,1,4,4,4,4,4,1,0,0,2,0,0,0,0],
  [1,1,1,1,2,1,0,1,1,1,1,1,1,1,0,1,2,1,1,1,1],
  [0,0,0,1,2,1,0,0,0,0,0,0,0,0,0,1,2,1,0,0,0],
  [1,1,1,1,2,1,0,1,1,1,1,1,1,1,0,1,2,1,1,1,1],
  [1,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,1],
  [1,2,1,1,2,1,1,1,2,2,1,2,2,1,1,1,2,1,1,2,1],
  [1,3,2,1,2,2,2,2,2,2,0,2,2,2,2,2,2,1,2,3,1],
  [1,1,2,1,2,1,2,1,1,1,1,1,1,1,2,1,2,1,2,1,1],
  [1,2,2,2,2,1,2,2,2,2,1,2,2,2,2,1,2,2,2,2,1],
  [1,2,1,1,1,1,1,1,2,2,1,2,2,1,1,1,1,1,1,2,1],
  [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
]

type Dir = { x: number; y: number }
const DIRS: Record<string, Dir> = {
  ArrowUp: { x: 0, y: -1 }, ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 }, ArrowRight: { x: 1, y: 0 },
}

const GHOST_COLORS = ["#FF0000", "#FFB8FF", "#00FFFF", "#FFB852"]

export default function PacManPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const stateRef = useRef<{
    map: number[][]
    pac: { x: number; y: number; dir: Dir; nextDir: Dir; mouth: number; mouthDir: number }
    ghosts: { x: number; y: number; dir: Dir; color: string; scared: boolean; scaredTimer: number }[]
    score: number
    lives: number
    gameOver: boolean
    won: boolean
    dotsLeft: number
    powerTimer: number
    frame: number
  } | null>(null)
  const [score, setScore] = useState(0)
  const [lives, setLives] = useState(3)
  const [gameOver, setGameOver] = useState(false)
  const [won, setWon] = useState(false)
  const [started, setStarted] = useState(false)
  const animRef = useRef<number>(0)

  const initGame = useCallback(() => {
    const map = BASE_MAP.map(r => [...r])
    let dotsLeft = 0
    for (let r = 0; r < ROWS; r++)
      for (let c = 0; c < COLS; c++)
        if (map[r][c] === 2 || map[r][c] === 3) dotsLeft++

    stateRef.current = {
      map,
      pac: { x: 10, y: 15, dir: { x: 0, y: 0 }, nextDir: { x: 0, y: 0 }, mouth: 0, mouthDir: 1 },
      ghosts: [
        { x: 9, y: 9, dir: { x: -1, y: 0 }, color: GHOST_COLORS[0], scared: false, scaredTimer: 0 },
        { x: 10, y: 9, dir: { x: 1, y: 0 }, color: GHOST_COLORS[1], scared: false, scaredTimer: 0 },
        { x: 11, y: 9, dir: { x: 0, y: -1 }, color: GHOST_COLORS[2], scared: false, scaredTimer: 0 },
        { x: 10, y: 10, dir: { x: 0, y: 1 }, color: GHOST_COLORS[3], scared: false, scaredTimer: 0 },
      ],
      score: 0, lives: 3, gameOver: false, won: false, dotsLeft, powerTimer: 0, frame: 0,
    }
    setScore(0)
    setLives(3)
    setGameOver(false)
    setWon(false)
    setStarted(true)
  }, [])

  const canMove = useCallback((x: number, y: number, dir: Dir, map: number[][]) => {
    const nx = x + dir.x
    const ny = y + dir.y
    if (nx < 0 || nx >= COLS || ny < 0 || ny >= ROWS) return false
    const cell = map[ny][nx]
    return cell !== 1
  }, [])

  useEffect(() => {
    if (!started) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")!

    const handleKey = (e: KeyboardEvent) => {
      const s = stateRef.current
      if (!s || s.gameOver || s.won) return
      const dir = DIRS[e.key]
      if (dir) {
        e.preventDefault()
        s.pac.nextDir = dir
      }
    }
    window.addEventListener("keydown", handleKey)

    let lastMove = 0
    const loop = (time: number) => {
      const s = stateRef.current
      if (!s) return
      animRef.current = requestAnimationFrame(loop)

      if (time - lastMove < 120) {
        draw(ctx, s)
        return
      }
      lastMove = time

      if (s.gameOver || s.won) {
        draw(ctx, s)
        return
      }

      s.frame++
      // Pac mouth animation
      s.pac.mouth += s.pac.mouthDir * 0.15
      if (s.pac.mouth >= 0.8) s.pac.mouthDir = -1
      if (s.pac.mouth <= 0) s.pac.mouthDir = 1

      // Move pac
      if (canMove(s.pac.x, s.pac.y, s.pac.nextDir, s.map)) {
        s.pac.dir = s.pac.nextDir
      }
      if (canMove(s.pac.x, s.pac.y, s.pac.dir, s.map)) {
        s.pac.x += s.pac.dir.x
        s.pac.y += s.pac.dir.y
      }
      // Tunnel wrap
      if (s.pac.x < 0) s.pac.x = COLS - 1
      if (s.pac.x >= COLS) s.pac.x = 0

      // Eat dots
      const cell = s.map[s.pac.y][s.pac.x]
      if (cell === 2) { s.map[s.pac.y][s.pac.x] = 0; s.score += 10; s.dotsLeft-- }
      if (cell === 3) {
        s.map[s.pac.y][s.pac.x] = 0; s.score += 50; s.dotsLeft--
        s.ghosts.forEach(g => { g.scared = true; g.scaredTimer = 40 })
      }

      // Win check
      if (s.dotsLeft <= 0) { s.won = true; setWon(true) }

      // Move ghosts
      s.ghosts.forEach(g => {
        if (g.scaredTimer > 0) g.scaredTimer--
        if (g.scaredTimer <= 0) g.scared = false

        const possibleDirs = [{ x: 0, y: -1 }, { x: 0, y: 1 }, { x: -1, y: 0 }, { x: 1, y: 0 }]
          .filter(d => !(d.x === -g.dir.x && d.y === -g.dir.y))
          .filter(d => canMove(g.x, g.y, d, s.map))

        if (possibleDirs.length > 0) {
          if (g.scared) {
            g.dir = possibleDirs[Math.floor(Math.random() * possibleDirs.length)]
          } else {
            // Simple chase: prefer direction towards pac-man
            possibleDirs.sort((a, b) => {
              const da = Math.abs((g.x + a.x) - s.pac.x) + Math.abs((g.y + a.y) - s.pac.y)
              const db = Math.abs((g.x + b.x) - s.pac.x) + Math.abs((g.y + b.y) - s.pac.y)
              return da - db
            })
            g.dir = Math.random() < 0.7 ? possibleDirs[0] : possibleDirs[Math.floor(Math.random() * possibleDirs.length)]
          }
          g.x += g.dir.x
          g.y += g.dir.y
          if (g.x < 0) g.x = COLS - 1
          if (g.x >= COLS) g.x = 0
        }

        // Collision
        if (g.x === s.pac.x && g.y === s.pac.y) {
          if (g.scared) {
            g.x = 10; g.y = 9; g.scared = false; g.scaredTimer = 0; s.score += 200
          } else {
            s.lives--
            setLives(s.lives)
            if (s.lives <= 0) { s.gameOver = true; setGameOver(true) }
            else { s.pac.x = 10; s.pac.y = 15; s.pac.dir = { x: 0, y: 0 } }
          }
        }
      })

      setScore(s.score)
      draw(ctx, s)
    }

    const draw = (ctx: CanvasRenderingContext2D, s: NonNullable<typeof stateRef.current>) => {
      ctx.fillStyle = "#000"
      ctx.fillRect(0, 0, W, H)

      // Map
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          const v = s.map[r][c]
          const x = c * CELL, y = r * CELL
          if (v === 1) {
            ctx.fillStyle = "#1a1aff"
            ctx.fillRect(x + 1, y + 1, CELL - 2, CELL - 2)
          } else if (v === 2) {
            ctx.fillStyle = "#FFB8AE"
            ctx.beginPath()
            ctx.arc(x + CELL / 2, y + CELL / 2, 2, 0, Math.PI * 2)
            ctx.fill()
          } else if (v === 3) {
            ctx.fillStyle = "#FFB8AE"
            ctx.beginPath()
            ctx.arc(x + CELL / 2, y + CELL / 2, 6, 0, Math.PI * 2)
            ctx.fill()
          }
        }
      }

      // Pac-Man
      const px = s.pac.x * CELL + CELL / 2
      const py = s.pac.y * CELL + CELL / 2
      const angle = Math.atan2(s.pac.dir.y, s.pac.dir.x)
      ctx.fillStyle = "#FFFF00"
      ctx.beginPath()
      ctx.arc(px, py, CELL / 2 - 1, angle + s.pac.mouth, angle + Math.PI * 2 - s.pac.mouth)
      ctx.lineTo(px, py)
      ctx.fill()

      // Ghosts
      s.ghosts.forEach(g => {
        const gx = g.x * CELL + CELL / 2
        const gy = g.y * CELL + CELL / 2
        ctx.fillStyle = g.scared ? "#2121DE" : g.color
        // Ghost body
        ctx.beginPath()
        ctx.arc(gx, gy - 2, CELL / 2 - 1, Math.PI, 0)
        ctx.lineTo(gx + CELL / 2 - 1, gy + CELL / 2 - 1)
        for (let i = 0; i < 3; i++) {
          const bx = gx + CELL / 2 - 1 - (i * (CELL - 2) / 3)
          ctx.lineTo(bx - (CELL - 2) / 6, gy + CELL / 2 - 5)
          ctx.lineTo(bx - (CELL - 2) / 3, gy + CELL / 2 - 1)
        }
        ctx.fill()
        // Eyes
        ctx.fillStyle = "#FFF"
        ctx.beginPath()
        ctx.arc(gx - 3, gy - 3, 3, 0, Math.PI * 2)
        ctx.arc(gx + 3, gy - 3, 3, 0, Math.PI * 2)
        ctx.fill()
        ctx.fillStyle = g.scared ? "#FFF" : "#00F"
        ctx.beginPath()
        ctx.arc(gx - 3 + g.dir.x, gy - 3 + g.dir.y, 1.5, 0, Math.PI * 2)
        ctx.arc(gx + 3 + g.dir.x, gy - 3 + g.dir.y, 1.5, 0, Math.PI * 2)
        ctx.fill()
      })
    }

    animRef.current = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener("keydown", handleKey)
      cancelAnimationFrame(animRef.current)
    }
  }, [started, canMove])

  const handleTouch = (dir: string) => {
    const s = stateRef.current
    if (!s || s.gameOver || s.won) return
    const d = DIRS[dir]
    if (d) s.pac.nextDir = d
  }

  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      <div className="text-center mb-4">
        <h1 className="text-3xl font-bold text-yellow-400 mb-1">PAC-MAN</h1>
        <p className="text-white text-sm mb-2">
          Score: <span className="text-yellow-400 font-bold">{score}</span>
          {" · "}
          Vidas: <span className="text-red-400">{"❤️".repeat(lives)}</span>
        </p>
      </div>

      {!started && (
        <button
          onClick={initGame}
          className="mb-4 px-8 py-3 bg-yellow-400 text-black font-bold rounded-xl text-lg hover:bg-yellow-300 transition"
        >
          ¡JUGAR!
        </button>
      )}

      <canvas
        ref={canvasRef}
        width={W}
        height={H}
        className="border-2 border-blue-800 rounded"
        style={{ imageRendering: "pixelated", maxWidth: "100%", height: "auto" }}
      />

      {(gameOver || won) && (
        <div className="mt-4 text-center">
          <p className="text-2xl font-bold mb-3" style={{ color: won ? "#4ade80" : "#ef4444" }}>
            {won ? "¡GANASTE!" : "GAME OVER"}
          </p>
          <button
            onClick={initGame}
            className="px-6 py-2 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-300"
          >
            Jugar de nuevo
          </button>
        </div>
      )}

      {started && !gameOver && !won && (
        <div className="mt-4 grid grid-cols-3 gap-2 w-40 md:hidden">
          <div />
          <button onTouchStart={() => handleTouch("ArrowUp")} className="bg-gray-800 text-white rounded p-3 text-xl active:bg-gray-600">▲</button>
          <div />
          <button onTouchStart={() => handleTouch("ArrowLeft")} className="bg-gray-800 text-white rounded p-3 text-xl active:bg-gray-600">◀</button>
          <button onTouchStart={() => handleTouch("ArrowDown")} className="bg-gray-800 text-white rounded p-3 text-xl active:bg-gray-600">▼</button>
          <button onTouchStart={() => handleTouch("ArrowRight")} className="bg-gray-800 text-white rounded p-3 text-xl active:bg-gray-600">▶</button>
        </div>
      )}

      <Link href="/juegos" className="mt-6 text-gray-500 hover:text-gray-300 text-sm underline">
        ← Volver a juegos
      </Link>
    </main>
  )
}
