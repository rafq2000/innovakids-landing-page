"use client"

import { useState, useCallback } from "react"
import Link from "next/link"

// Piece types
type PieceType = "K" | "Q" | "R" | "B" | "N" | "P"
type PieceColor = "w" | "b"
type Piece = { type: PieceType; color: PieceColor } | null
type Board = Piece[][]
type Pos = [number, number]

const PIECE_SYMBOLS: Record<string, string> = {
  wK: "♔", wQ: "♕", wR: "♖", wB: "♗", wN: "♘", wP: "♙",
  bK: "♚", bQ: "♛", bR: "♜", bB: "♝", bN: "♞", bP: "♟",
}

const PIECE_NAMES: Record<PieceType, string> = {
  K: "Rey", Q: "Dama", R: "Torre", B: "Alfil", N: "Caballo", P: "Peón",
}

const LESSONS = [
  { piece: "P" as PieceType, title: "El Peón", desc: "Avanza 1 casilla (2 desde inicio). Captura en diagonal. Es la pieza más numerosa (8 por bando).", value: 1 },
  { piece: "N" as PieceType, title: "El Caballo", desc: "Se mueve en 'L': 2 casillas en una dirección y 1 perpendicular. ¡Es la única pieza que puede saltar sobre otras!", value: 3 },
  { piece: "B" as PieceType, title: "El Alfil", desc: "Se mueve en diagonal, cualquier cantidad de casillas. Cada alfil permanece siempre en casillas del mismo color.", value: 3 },
  { piece: "R" as PieceType, title: "La Torre", desc: "Se mueve en línea recta (horizontal o vertical), cualquier cantidad de casillas. Muy poderosa en filas y columnas abiertas.", value: 5 },
  { piece: "Q" as PieceType, title: "La Dama", desc: "Combina el movimiento de Torre + Alfil. Es la pieza más poderosa del tablero.", value: 9 },
  { piece: "K" as PieceType, title: "El Rey", desc: "Se mueve 1 casilla en cualquier dirección. Si te hacen jaque mate (el rey no puede escapar), pierdes la partida.", value: "∞" },
]

function initialBoard(): Board {
  const board: Board = Array.from({ length: 8 }, () => Array(8).fill(null))
  const backRank: PieceType[] = ["R", "N", "B", "Q", "K", "B", "N", "R"]
  for (let c = 0; c < 8; c++) {
    board[0][c] = { type: backRank[c], color: "b" }
    board[1][c] = { type: "P", color: "b" }
    board[6][c] = { type: "P", color: "w" }
    board[7][c] = { type: backRank[c], color: "w" }
  }
  return board
}

function inBounds(r: number, c: number) { return r >= 0 && r < 8 && c >= 0 && c < 8 }

function getLegalMoves(board: Board, row: number, col: number): Pos[] {
  const piece = board[row][col]
  if (!piece) return []
  const moves: Pos[] = []
  const { type, color } = piece
  const dir = color === "w" ? -1 : 1

  const addIfValid = (r: number, c: number, captureOnly = false, moveOnly = false) => {
    if (!inBounds(r, c)) return false
    const target = board[r][c]
    if (target && target.color === color) return false
    if (captureOnly && !target) return false
    if (moveOnly && target) return false
    if (!captureOnly || target) moves.push([r, c])
    return !target // can continue sliding
  }

  const slide = (dr: number, dc: number) => {
    for (let i = 1; i < 8; i++) {
      if (!addIfValid(row + dr * i, col + dc * i)) break
    }
  }

  switch (type) {
    case "P":
      addIfValid(row + dir, col, false, true)
      if ((color === "w" && row === 6) || (color === "b" && row === 1)) {
        if (!board[row + dir][col]) addIfValid(row + dir * 2, col, false, true)
      }
      addIfValid(row + dir, col - 1, true)
      addIfValid(row + dir, col + 1, true)
      break
    case "N":
      for (const [dr, dc] of [[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]]) {
        addIfValid(row + dr, col + dc)
      }
      break
    case "B": slide(-1, -1); slide(-1, 1); slide(1, -1); slide(1, 1); break
    case "R": slide(-1, 0); slide(1, 0); slide(0, -1); slide(0, 1); break
    case "Q": slide(-1,-1); slide(-1,1); slide(1,-1); slide(1,1); slide(-1,0); slide(1,0); slide(0,-1); slide(0,1); break
    case "K":
      for (let dr = -1; dr <= 1; dr++)
        for (let dc = -1; dc <= 1; dc++)
          if (dr || dc) addIfValid(row + dr, col + dc)
      break
  }
  return moves
}

function getAllMoves(board: Board, color: PieceColor): { from: Pos; to: Pos }[] {
  const moves: { from: Pos; to: Pos }[] = []
  for (let r = 0; r < 8; r++)
    for (let c = 0; c < 8; c++)
      if (board[r][c]?.color === color)
        for (const to of getLegalMoves(board, r, c))
          moves.push({ from: [r, c], to })
  return moves
}

function evalBoard(board: Board): number {
  const values: Record<PieceType, number> = { P: 1, N: 3, B: 3, R: 5, Q: 9, K: 0 }
  let score = 0
  for (let r = 0; r < 8; r++)
    for (let c = 0; c < 8; c++) {
      const p = board[r][c]
      if (p) score += (p.color === "b" ? 1 : -1) * values[p.type]
    }
  return score
}

function aiMove(board: Board): { from: Pos; to: Pos } | null {
  const moves = getAllMoves(board, "b")
  if (moves.length === 0) return null

  // Simple AI: evaluate captures and center control
  let best = moves[0]
  let bestScore = -Infinity
  for (const move of moves) {
    const newBoard = board.map(r => [...r])
    const captured = newBoard[move.to[0]][move.to[1]]
    newBoard[move.to[0]][move.to[1]] = newBoard[move.from[0]][move.from[1]]
    newBoard[move.from[0]][move.from[1]] = null

    let score = evalBoard(newBoard)
    // Bonus for captures
    if (captured) {
      const vals: Record<PieceType, number> = { P: 10, N: 30, B: 30, R: 50, Q: 90, K: 900 }
      score += vals[captured.type]
    }
    // Center control bonus
    const [tr, tc] = move.to
    score += (3.5 - Math.abs(tr - 3.5)) * 0.1 + (3.5 - Math.abs(tc - 3.5)) * 0.1
    // Randomness
    score += Math.random() * 2

    if (score > bestScore) { bestScore = score; best = move }
  }
  return best
}

type Mode = "learn" | "play"

export default function AjedrezPage() {
  const [mode, setMode] = useState<Mode>("learn")
  const [lessonIdx, setLessonIdx] = useState(0)
  const [board, setBoard] = useState<Board>(initialBoard)
  const [selected, setSelected] = useState<Pos | null>(null)
  const [legalMoves, setLegalMoves] = useState<Pos[]>([])
  const [turn, setTurn] = useState<PieceColor>("w")
  const [message, setMessage] = useState("")
  const [captured, setCaptured] = useState<{ w: Piece[]; b: Piece[] }>({ w: [], b: [] })

  const resetGame = useCallback(() => {
    setBoard(initialBoard())
    setSelected(null)
    setLegalMoves([])
    setTurn("w")
    setMessage("")
    setCaptured({ w: [], b: [] })
  }, [])

  const handleClick = (row: number, col: number) => {
    if (mode === "learn") {
      // In learn mode, just show moves
      const piece = board[row][col]
      if (piece) {
        setSelected([row, col])
        setLegalMoves(getLegalMoves(board, row, col))
      } else {
        setSelected(null)
        setLegalMoves([])
      }
      return
    }

    // Play mode
    if (turn !== "w") return

    if (selected) {
      const isLegal = legalMoves.some(m => m[0] === row && m[1] === col)
      if (isLegal) {
        const newBoard = board.map(r => [...r])
        const capturedPiece = newBoard[row][col]
        newBoard[row][col] = newBoard[selected[0]][selected[1]]
        newBoard[selected[0]][selected[1]] = null

        // Pawn promotion
        if (newBoard[row][col]?.type === "P" && row === 0) {
          newBoard[row][col] = { type: "Q", color: "w" }
        }

        if (capturedPiece) {
          setCaptured(prev => ({ ...prev, w: [...prev.w, capturedPiece] }))
          if (capturedPiece.type === "K") { setMessage("¡Ganaste! Capturaste al Rey"); setBoard(newBoard); setSelected(null); setLegalMoves([]); return }
        }

        setBoard(newBoard)
        setSelected(null)
        setLegalMoves([])
        setTurn("b")
        setMessage("Pensando...")

        // AI turn
        setTimeout(() => {
          const move = aiMove(newBoard)
          if (!move) { setMessage("¡Ganaste! La máquina no tiene movimientos"); return }
          const nb = newBoard.map(r => [...r])
          const cap = nb[move.to[0]][move.to[1]]
          nb[move.to[0]][move.to[1]] = nb[move.from[0]][move.from[1]]
          nb[move.from[0]][move.from[1]] = null

          // Pawn promotion
          if (nb[move.to[0]][move.to[1]]?.type === "P" && move.to[0] === 7) {
            nb[move.to[0]][move.to[1]] = { type: "Q", color: "b" }
          }

          if (cap) {
            setCaptured(prev => ({ ...prev, b: [...prev.b, cap] }))
            if (cap.type === "K") { setMessage("La máquina capturó tu Rey. ¡Perdiste!"); setBoard(nb); return }
          }
          setBoard(nb)
          setTurn("w")
          setMessage("Tu turno")
        }, 500)
      } else {
        // Select different piece
        const piece = board[row][col]
        if (piece?.color === "w") {
          setSelected([row, col])
          setLegalMoves(getLegalMoves(board, row, col))
        } else {
          setSelected(null)
          setLegalMoves([])
        }
      }
    } else {
      const piece = board[row][col]
      if (piece?.color === "w") {
        setSelected([row, col])
        setLegalMoves(getLegalMoves(board, row, col))
      }
    }
  }

  const lesson = LESSONS[lessonIdx]

  return (
    <main className="min-h-screen bg-[#F5F1E8] py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-[#0f3460] mb-4">♟️ Aprende Ajedrez</h1>

        {/* Mode toggle */}
        <div className="flex justify-center gap-2 mb-6">
          <button
            onClick={() => { setMode("learn"); resetGame() }}
            className={`px-5 py-2 rounded-lg font-semibold transition ${mode === "learn" ? "bg-[#0f3460] text-white" : "bg-white text-gray-600 hover:bg-gray-100"}`}
          >
            📖 Aprender
          </button>
          <button
            onClick={() => { setMode("play"); resetGame(); setMessage("Tu turno — mueves las blancas") }}
            className={`px-5 py-2 rounded-lg font-semibold transition ${mode === "play" ? "bg-[#e94560] text-white" : "bg-white text-gray-600 hover:bg-gray-100"}`}
          >
            🎮 Jugar vs Máquina
          </button>
        </div>

        {/* Learn mode */}
        {mode === "learn" && (
          <div className="bg-white rounded-2xl shadow-lg p-5 mb-4">
            <div className="flex gap-2 mb-4 flex-wrap">
              {LESSONS.map((l, i) => (
                <button
                  key={l.piece}
                  onClick={() => { setLessonIdx(i); setSelected(null); setLegalMoves([]) }}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${i === lessonIdx ? "bg-[#0f3460] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
                >
                  {PIECE_SYMBOLS["w" + l.piece]} {l.title}
                </button>
              ))}
            </div>
            <h3 className="font-bold text-lg text-[#0f3460]">{lesson.title}</h3>
            <p className="text-gray-600 text-sm mt-1 mb-2">{lesson.desc}</p>
            <p className="text-xs text-gray-400">Valor: {lesson.value} punto{lesson.value !== 1 && lesson.value !== "∞" ? "s" : ""}</p>
            <p className="text-xs text-[#e94560] mt-2">Haz clic en una pieza del tablero para ver sus movimientos posibles</p>
          </div>
        )}

        {/* Play mode info */}
        {mode === "play" && (
          <div className="bg-white rounded-xl shadow p-3 mb-4 text-center">
            <p className="text-sm font-medium text-gray-700">{message || "Haz clic en una pieza blanca para moverla"}</p>
            {captured.w.length > 0 && (
              <p className="text-xs text-gray-400 mt-1">
                Capturadas: {captured.w.map((p, i) => p && <span key={i}>{PIECE_SYMBOLS["b" + p.type]}</span>)}
              </p>
            )}
            <button onClick={resetGame} className="mt-2 text-xs text-[#e94560] underline">Reiniciar partida</button>
          </div>
        )}

        {/* Board */}
        <div className="flex justify-center">
          <div className="inline-block border-2 border-[#0f3460] rounded-lg overflow-hidden shadow-xl">
            {/* Column labels */}
            <div className="flex">
              <div className="w-5" />
              {["a","b","c","d","e","f","g","h"].map(l => (
                <div key={l} className="w-10 h-4 md:w-14 md:h-5 flex items-center justify-center text-[10px] text-gray-500 font-mono">{l}</div>
              ))}
              <div className="w-5" />
            </div>
            {board.map((row, r) => (
              <div key={r} className="flex">
                <div className="w-5 flex items-center justify-center text-[10px] text-gray-500 font-mono">{8 - r}</div>
                {row.map((piece, c) => {
                  const isLight = (r + c) % 2 === 0
                  const isSelected = selected && selected[0] === r && selected[1] === c
                  const isLegal = legalMoves.some(m => m[0] === r && m[1] === c)
                  const isCapture = isLegal && piece !== null

                  return (
                    <button
                      key={c}
                      onClick={() => handleClick(r, c)}
                      className={`w-10 h-10 md:w-14 md:h-14 flex items-center justify-center text-2xl md:text-4xl transition-colors relative
                        ${isLight ? "bg-[#f0d9b5]" : "bg-[#b58863]"}
                        ${isSelected ? "!bg-yellow-400/70" : ""}
                        ${isCapture ? "!bg-red-400/50" : ""}
                        hover:brightness-110 cursor-pointer
                      `}
                    >
                      {isLegal && !piece && (
                        <div className="absolute w-3 h-3 md:w-4 md:h-4 rounded-full bg-black/20" />
                      )}
                      {piece && (
                        <span className={`drop-shadow-sm ${piece.color === "w" ? "text-white [text-shadow:_1px_1px_2px_#333,_-1px_-1px_2px_#333]" : "text-gray-900"}`}>
                          {PIECE_SYMBOLS[piece.color + piece.type]}
                        </span>
                      )}
                    </button>
                  )
                })}
                <div className="w-5 flex items-center justify-center text-[10px] text-gray-500 font-mono">{8 - r}</div>
              </div>
            ))}
            <div className="flex">
              <div className="w-5" />
              {["a","b","c","d","e","f","g","h"].map(l => (
                <div key={l} className="w-10 h-4 md:w-14 md:h-5 flex items-center justify-center text-[10px] text-gray-500 font-mono">{l}</div>
              ))}
              <div className="w-5" />
            </div>
          </div>
        </div>

        {/* Piece info on click */}
        {selected && board[selected[0]][selected[1]] && (
          <div className="mt-4 bg-white rounded-xl p-4 shadow text-center">
            <p className="text-lg">
              <span className="text-3xl mr-2">{PIECE_SYMBOLS[board[selected[0]][selected[1]]!.color + board[selected[0]][selected[1]]!.type]}</span>
              <strong>{PIECE_NAMES[board[selected[0]][selected[1]]!.type]}</strong>
              <span className="text-gray-400 text-sm ml-2">({board[selected[0]][selected[1]]!.color === "w" ? "Blanca" : "Negra"})</span>
            </p>
            <p className="text-sm text-[#e94560] mt-1">{legalMoves.length} movimiento{legalMoves.length !== 1 ? "s" : ""} posible{legalMoves.length !== 1 ? "s" : ""}</p>
          </div>
        )}

        <div className="text-center mt-8">
          <Link href="/juegos" className="text-gray-500 hover:text-gray-700 text-sm underline">
            ← Volver a juegos
          </Link>
        </div>
      </div>
    </main>
  )
}
