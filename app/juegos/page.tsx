import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Juegos Educativos | InnovaKids",
  description: "Aprende jugando: Pac-Man, Trigonometría interactiva y Ajedrez. Juegos educativos gratuitos de InnovaKids.",
}

const juegos = [
  {
    title: "Pac-Man",
    description: "El clásico arcade. Mueve a Pac-Man, come los puntos y evita los fantasmas.",
    href: "/juegos/pacman",
    emoji: "👾",
    color: "from-yellow-400 to-amber-500",
  },
  {
    title: "Aprende Trigonometría",
    description: "Desde lo más básico: ángulos, triángulos, seno, coseno y tangente de forma visual e interactiva.",
    href: "/juegos/trigonometria",
    emoji: "📐",
    color: "from-blue-400 to-indigo-500",
  },
  {
    title: "Aprende Ajedrez",
    description: "Conoce las piezas, sus movimientos y practica jugando contra la máquina.",
    href: "/juegos/ajedrez",
    emoji: "♟️",
    color: "from-emerald-400 to-teal-500",
  },
]

export default function JuegosPage() {
  return (
    <main className="min-h-screen bg-[#F5F1E8] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
          Juegos Educativos
        </h1>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Aprende jugando con estas apps interactivas de InnovaKids
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {juegos.map((juego) => (
            <Link
              key={juego.href}
              href={juego.href}
              className="group block rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className={`bg-gradient-to-br ${juego.color} p-8 flex items-center justify-center`}>
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {juego.emoji}
                </span>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-2">{juego.title}</h2>
                <p className="text-gray-600 text-sm">{juego.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/" className="text-gray-500 hover:text-gray-700 text-sm underline">
            ← Volver a InnovaKids
          </Link>
        </div>
      </div>
    </main>
  )
}
