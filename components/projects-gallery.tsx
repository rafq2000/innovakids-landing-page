"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Play, Pause, Music, Gamepad2, Palette, Film, ExternalLink } from "lucide-react"
import Image from "next/image"

const projects = [
    {
        id: 1,
        title: "Pac-Man",
        student: "Tomás",
        age: 9,
        country: "🇨🇱",
        category: "Videojuegos",
        tool: "ChatGPT + Claude",
        description: "Recreó el clásico arcade completo: fantasmas con IA, power-ups y sistema de puntaje.",
        icon: Gamepad2,
        color: "bg-yellow-500",
        type: "game" as const,
        href: "/juegos/pacman",
        image: "/projects/pacman-project.png",
    },
    {
        id: 2,
        title: "Ajedrez con IA",
        student: "Daniel",
        age: 14,
        country: "🇨🇴",
        category: "Videojuegos",
        tool: "Claude + Algoritmos",
        description: "Motor de ajedrez funcional con 3 niveles de dificultad y detección de jaque mate.",
        icon: Gamepad2,
        color: "bg-emerald-500",
        type: "game" as const,
        href: "/juegos/ajedrez",
        image: "/projects/ajedrez-project.png",
    },
    {
        id: 3,
        title: "Trigonometría Interactiva",
        student: "Lucas",
        age: 15,
        country: "🇪🇸",
        category: "Educación",
        tool: "Claude + Canvas API",
        description: "App educativa que visualiza seno, coseno y tangente en tiempo real con animaciones.",
        icon: Gamepad2,
        color: "bg-blue-500",
        type: "game" as const,
        href: "/juegos/trigonometria",
        image: "/projects/trigo-project.png",
    },
    {
        id: 4,
        title: "Hola IA",
        student: "Valentina",
        age: 11,
        country: "🇦🇷",
        category: "Música",
        tool: "Suno AI",
        description: "Canción pop original sobre inteligencia artificial. Compuso letra y eligió el estilo.",
        icon: Music,
        color: "bg-purple-500",
        type: "audio" as const,
        audioSrc: "/projects/cancion-hola-ia.mp3",
        image: "/projects/cancion-project.png",
    },
    {
        id: 5,
        title: "La Aventura de Max",
        student: "Matías",
        age: 13,
        country: "🇲🇽",
        category: "Video",
        tool: "Kling AI + CapCut",
        description: "Cortometraje animado de un perro que vive una aventura por la ciudad. 6 escenas con IA.",
        icon: Film,
        color: "bg-red-500",
        type: "video" as const,
        videoSrc: "/projects/aventura-max.mp4",
        image: "/projects/video-project.png",
    },
    {
        id: 6,
        title: "Mundo Fantástico",
        student: "Sofía",
        age: 10,
        country: "🇵🇪",
        category: "Arte",
        tool: "ChatGPT Image",
        description: "Serie de 6 ilustraciones de un mundo fantástico con dragones y castillos flotantes.",
        icon: Palette,
        color: "bg-pink-500",
        type: "image" as const,
        image: "/projects/arte-project.png",
    },
]

const categories = ["Todos", "Videojuegos", "Música", "Video", "Arte", "Educación"]

function AudioPlayer({ src }: { src: string }) {
    const [playing, setPlaying] = useState(false)
    const audioRef = useRef<HTMLAudioElement>(null)

    const toggle = () => {
        if (!audioRef.current) return
        if (playing) { audioRef.current.pause() } else { audioRef.current.play() }
        setPlaying(!playing)
    }

    return (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
            <audio ref={audioRef} src={src} onEnded={() => setPlaying(false)} />
            <button onClick={toggle} aria-label={playing ? "Pausar audio" : "Reproducir audio"} className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                {playing ? <Pause className="w-6 h-6 text-purple-600" /> : <Play className="w-6 h-6 text-purple-600 ml-1" />}
            </button>
        </div>
    )
}

function VideoPlayer({ src, poster }: { src: string; poster?: string }) {
    const [playing, setPlaying] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)

    const toggle = () => {
        if (!videoRef.current) return
        if (playing) { videoRef.current.pause() } else { videoRef.current.play() }
        setPlaying(!playing)
    }

    return (
        <div className="absolute inset-0">
            {/* preload="none" + poster: el mp4 (~40 MB) ya no se descarga al cargar la home, solo al dar play */}
            <video ref={videoRef} src={src} poster={poster} preload="none" className="w-full h-full object-cover" onEnded={() => setPlaying(false)} playsInline muted />
            <div className={`absolute inset-0 flex items-center justify-center bg-black/30 ${playing ? "opacity-0 hover:opacity-100" : "opacity-100"} transition-opacity cursor-pointer`} onClick={toggle}>
                <button aria-label={playing ? "Pausar video" : "Reproducir video"} className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                    {playing ? <Pause className="w-6 h-6 text-red-600" /> : <Play className="w-6 h-6 text-red-600 ml-1" />}
                </button>
            </div>
        </div>
    )
}

export function ProjectsGallery() {
    const [filter, setFilter] = useState("Todos")
    const filteredProjects = filter === "Todos" ? projects : projects.filter(p => p.category === filter)

    return (
        <section className="py-20 bg-[#FAF7EF]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-6">
                    <Badge variant="secondary" className="mb-4 text-sm font-normal bg-[#C96342]/10 text-[#B5522F] border-0">
                        Creados por alumnos reales
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1A1714] mb-4">
                        Esto crearon en 5 semanas
                    </h2>
                    <p className="text-[#1A1714]/60 text-lg max-w-2xl mx-auto">
                        Juegos que puedes jugar, canciones que puedes escuchar, videos que puedes ver.
                        Cada proyecto fue creado por un alumno durante las clases.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((cat) => (
                        <button key={cat} onClick={() => setFilter(cat)} className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${filter === cat ? "bg-[#C96342] text-white shadow-lg scale-105" : "bg-white text-[#1A1714]/70 hover:bg-[#C96342]/10 border border-[#1A1714]/10"}`}>
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div key={project.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3 }}>
                                <div className="group relative bg-white border border-[#1A1714]/5 rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 h-full flex flex-col">
                                    <div className="aspect-[4/3] relative overflow-hidden bg-[#1A1714]/5">
                                        {project.type === "video" && "videoSrc" in project ? (
                                            <VideoPlayer src={(project as any).videoSrc} poster={project.image} />
                                        ) : (
                                            <>
                                                <Image src={project.image} alt={project.title} fill className="object-cover" />
                                                {project.type === "audio" && "audioSrc" in project && <AudioPlayer src={(project as any).audioSrc} />}
                                                {project.type === "game" && "href" in project && (
                                                    <a href={(project as any).href} className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                                                        <span className="px-6 py-3 rounded-full bg-white/90 text-[#1A1714] font-semibold shadow-lg hover:scale-105 transition-transform flex items-center gap-2">
                                                            <Gamepad2 className="w-5 h-5" /> Jugar ahora
                                                        </span>
                                                    </a>
                                                )}
                                            </>
                                        )}
                                        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1 text-xs font-medium text-[#1A1714] shadow-sm">{project.age} años</div>
                                    </div>

                                    <div className="p-5 flex flex-col flex-1">
                                        <div className="flex items-start justify-between mb-2">
                                            <Badge variant="secondary" className="text-xs font-normal bg-[#1A1714]/5 text-[#1A1714]/70 border-0">{project.category}</Badge>
                                            <span className="text-xs text-[#1A1714]/50">{project.tool}</span>
                                        </div>
                                        <h3 className="font-bold text-lg text-[#1A1714] mb-1">{project.title}</h3>
                                        <p className="text-sm text-[#1A1714]/60 mb-4 flex-1">{project.description}</p>
                                        <div className="pt-4 border-t border-[#1A1714]/5 flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <div className={`w-7 h-7 rounded-full ${project.color} flex items-center justify-center text-[11px] text-white font-bold`}>{project.student.charAt(0)}</div>
                                                <span className="text-sm font-medium text-[#1A1714]">{project.student}, {project.age} años</span>
                                            </div>
                                            <span className="text-lg">{project.country}</span>
                                        </div>
                                    </div>

                                    {project.type === "game" && <div className="absolute top-3 left-3 bg-[#C96342] text-white text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm"><ExternalLink className="w-3 h-3" />Jugable</div>}
                                    {project.type === "audio" && <div className="absolute top-3 left-3 bg-purple-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm"><Music className="w-3 h-3" />Escuchar</div>}
                                    {project.type === "video" && <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm"><Film className="w-3 h-3" />Ver video</div>}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                <div className="text-center mt-12">
                    <p className="text-[#1A1714]/60 mb-4">Tu hijo puede crear proyectos como estos en solo 5 semanas.</p>
                    <a href="#sesion-estrategica" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C96342] text-white font-semibold rounded-full shadow-[0_10px_30px_-12px_rgba(201,99,66,0.55)] hover:bg-[#9A4428] transition-colors">
                        Agendar clase gratis
                    </a>
                </div>
            </div>
        </section>
    )
}
