"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Play, Music, Gamepad2, Mic, Palette, BookOpen } from "lucide-react"
import Image from "next/image"

// Project data based on strategy examples
const projects = [
    {
        id: 1,
        title: "El Mundo Submarino",
        student: "Santiago",
        age: 10,
        country: "🇨🇴",
        category: "Arte",
        tool: "Midjourney",
        image: "/projects/art-1.jpg", // Placeholder path
        description: "Obra de arte generativa",
        icon: Palette,
        color: "bg-pink-500",
    },
    {
        id: 2,
        title: "EcoAdventure Game",
        student: "Tomás",
        age: 9,
        country: "🇨🇱",
        category: "Videojuegos",
        tool: "ChatGPT + Coding",
        image: "/projects/game-1.jpg",
        description: "Videojuego de plataformas",
        icon: Gamepad2,
        color: "bg-cyan-500",
    },
    {
        id: 3,
        title: "Himno del Futuro",
        student: "Valentina",
        age: 11,
        country: "🇦🇷",
        category: "Música",
        tool: "Suno AI",
        image: "/projects/music-1.jpg",
        description: "Canción original pop",
        icon: Music,
        color: "bg-purple-500",
    },
    {
        id: 4,
        title: "Narración de Cuento",
        student: "Matias",
        age: 8,
        country: "🇲🇽",
        category: "Voz",
        tool: "ElevenLabs",
        image: "/projects/voice-1.jpg",
        description: "Clonación de voz",
        icon: Mic,
        color: "bg-orange-500",
    },
    {
        id: 5,
        title: "Sistema Solar 3D",
        student: "Lucas",
        age: 12,
        country: "🇪🇸",
        category: "Estudio",
        tool: "Luma AI",
        image: "/projects/study-1.jpg",
        description: "Modelo 3D para ciencias",
        icon: BookOpen,
        color: "bg-emerald-500",
    },
    {
        id: 6,
        title: "Cómic Espacial",
        student: "Sofía",
        age: 10,
        country: "🇵🇪",
        category: "Arte",
        tool: "Midjourney",
        image: "/projects/art-2.jpg",
        description: "Novela gráfica de 4 páginas",
        icon: Palette,
        color: "bg-pink-500",
    },
    // Add more to reach ~8 minimum as per strategy
    {
        id: 7,
        title: "Asistente de Tareas",
        student: "Daniel",
        age: 13,
        country: "🇨🇴",
        category: "Vibe Coding",
        tool: "Python + GPT",
        image: "/projects/code-1.jpg",
        description: "App de productividad",
        icon: Gamepad2, // Reusing icon for code
        color: "bg-blue-500",
    },
    {
        id: 8,
        title: "Trailer de Película",
        student: "Emma",
        age: 11,
        country: "🇺🇾",
        category: "Video",
        tool: "Runway",
        image: "/projects/video-1.jpg",
        description: "Teaser cinematográfico",
        icon: Play,
        color: "bg-red-500",
    }
]

const categories = ["Todos", "Arte", "Música", "Videojuegos", "Voz", "Estudio"]

export function ProjectsGallery() {
    const [filter, setFilter] = useState("Todos")

    const filteredProjects = filter === "Todos"
        ? projects
        : projects.filter(p => p.category === filter || (filter === "Videojuegos" && p.category === "Vibe Coding") || (filter === "Video" && p.category === "Video"))

    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 mb-4">
                        Proyectos Reales de Alumnos
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Cada proyecto fue creado por un niño durante las clases, con la guía del instructor.
                    </p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${filter === cat
                                    ? "bg-[#4ECDC4] text-white shadow-lg scale-105"
                                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Gallery */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="group relative bg-card border rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 h-full flex flex-col">
                                    {/* Image Placeholder area - In real implementation use Next/Image with valid src */}
                                    <div className="aspect-[4/3] bg-muted relative overflow-hidden flex items-center justify-center">
                                        <div className={`absolute inset-0 opacity-10 ${project.color}`} />
                                        <project.icon className={`w-12 h-12 ${project.color.replace('bg-', 'text-')} opacity-50`} />
                                        <span className="sr-only">Project preview</span>
                                    </div>

                                    <div className="p-5 flex flex-col flex-1">
                                        <div className="flex items-start justify-between mb-2">
                                            <Badge variant="secondary" className="text-xs font-normal">
                                                {project.category}
                                            </Badge>
                                            <span className="text-xs text-muted-foreground">{project.tool}</span>
                                        </div>

                                        <h3 className="font-bold text-lg text-card-foreground mb-1">{project.title}</h3>
                                        <p className="text-sm text-muted-foreground mb-4 flex-1">{project.description}</p>

                                        <div className="pt-4 border-t flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <div className={`w-6 h-6 rounded-full ${project.color} flex items-center justify-center text-[10px] text-white font-bold`}>
                                                    {project.student.charAt(0)}
                                                </div>
                                                <span className="text-sm font-medium text-card-foreground">
                                                    {project.student}, {project.age}
                                                </span>
                                            </div>
                                            <span className="text-lg">{project.country}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}
