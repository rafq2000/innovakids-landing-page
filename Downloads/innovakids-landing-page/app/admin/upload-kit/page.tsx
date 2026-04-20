"use client"

import type React from "react"
import { useState } from "react"

export default function UploadKitPage() {
    const [file, setFile] = useState<File | null>(null)
    const [uploading, setUploading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState("")
    const [uploadedUrl, setUploadedUrl] = useState("")

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0]
        if (selectedFile && selectedFile.type === "application/pdf") {
            setFile(selectedFile)
            setError("")
        } else {
            setError("Por favor selecciona un archivo PDF válido")
            setFile(null)
        }
    }

    const handleUpload = async () => {
        if (!file) return

        setUploading(true)
        setError("")
        setSuccess(false)

        try {
            const formData = new FormData()
            formData.append("file", file)

            const uploadResponse = await fetch("/api/upload-kit", {
                method: "POST",
                body: formData,
            })

            if (!uploadResponse.ok) {
                throw new Error("Error al subir el archivo")
            }

            const { url } = await uploadResponse.json()
            setUploadedUrl(url)
            setSuccess(true)
        } catch (err) {
            setError(err instanceof Error ? err.message : "Error al subir el archivo")
        } finally {
            setUploading(false)
        }
    }

    return (
        <div className="min-h-screen bg-[#FAF7EF] text-[#1A1714] py-16 px-6">
            <div className="max-w-[760px] mx-auto">
                <div className="flex items-center gap-3 mb-6">
                    <span className="h-px w-10 bg-[#C96342]" aria-hidden />
                    <span className="text-[11px] tracking-[0.28em] uppercase text-[#C96342] font-semibold">
                        Admin · subida interna
                    </span>
                </div>
                <h1
                    className="text-4xl md:text-5xl leading-[1] tracking-[-0.02em] text-[#1A1714] mb-4"
                    style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                >
                    Subir <em className="italic text-[#C96342]">Kit del Padre Moderno</em>.
                </h1>
                <p className="text-[16px] text-[#1A1714]/70 leading-relaxed mb-12 max-w-[56ch]">
                    Sube el PDF que los padres descargarán al registrarse. Se guarda en Vercel Blob y queda disponible
                    para el formulario.
                </p>

                <section className="border border-[#1A1714]/12 p-8 md:p-10 bg-[#F2EDE0]/40">
                    {!success ? (
                        <div className="space-y-6">
                            <div className="border-2 border-dashed border-[#1A1714]/20 hover:border-[#C96342] transition-colors p-12 text-center">
                                <input
                                    type="file"
                                    accept=".pdf"
                                    onChange={handleFileChange}
                                    className="hidden"
                                    id="file-upload"
                                />
                                <label htmlFor="file-upload" className="cursor-pointer block">
                                    <p className="text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold mb-4">
                                        Arrastra o haz clic
                                    </p>
                                    <p
                                        className="text-2xl md:text-3xl text-[#1A1714] mb-2"
                                        style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                                    >
                                        {file ? file.name : "Seleccionar PDF"}
                                    </p>
                                    <p className="text-[13px] text-[#1A1714]/60">Solo archivos PDF · máx. 10MB</p>
                                </label>
                            </div>

                            {error && (
                                <div className="border border-[#C96342]/40 bg-[#C96342]/5 p-4">
                                    <p className="text-[14px] text-[#A8502F]">{error}</p>
                                </div>
                            )}

                            <button
                                onClick={handleUpload}
                                disabled={!file || uploading}
                                className="w-full inline-flex items-center justify-center gap-2 bg-[#C96342] hover:bg-[#A8502F] disabled:bg-[#1A1714]/20 disabled:cursor-not-allowed text-[#FAF7EF] px-8 py-4 font-semibold text-base tracking-wide transition-colors"
                            >
                                {uploading ? "Subiendo…" : "Subir PDF"}
                                {!uploading && <span aria-hidden>→</span>}
                            </button>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            <p className="text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold">
                                Listo
                            </p>
                            <h2
                                className="text-3xl md:text-4xl leading-[1.05] text-[#1A1714]"
                                style={{ fontFamily: "'Charter', 'Georgia', serif" }}
                            >
                                PDF subido exitosamente.
                            </h2>
                            <p className="text-[15px] text-[#1A1714]/70">
                                El Kit del Padre Moderno está listo para descargar.
                            </p>
                            <div className="border-t border-b border-[#1A1714]/12 py-4">
                                <p className="text-[11px] uppercase tracking-[0.24em] text-[#1A1714]/55 font-semibold mb-2">
                                    URL del archivo
                                </p>
                                <p className="text-[#C96342] text-[13px] break-all font-mono">{uploadedUrl}</p>
                            </div>
                            <button
                                onClick={() => {
                                    setSuccess(false)
                                    setFile(null)
                                    setUploadedUrl("")
                                }}
                                className="inline-flex items-center justify-center gap-2 border border-[#1A1714]/20 hover:border-[#C96342] text-[#1A1714] px-8 py-4 font-semibold text-base tracking-wide transition-colors"
                            >
                                Subir otro archivo
                            </button>
                        </div>
                    )}
                </section>

                <section className="mt-10 border-l-2 border-[#C96342] pl-6 py-2">
                    <p className="text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold mb-3">
                        Instrucciones
                    </p>
                    <ol className="space-y-2 text-[14px] text-[#1A1714]/80 list-decimal list-inside">
                        <li>Selecciona tu archivo PDF del Kit del Padre Moderno.</li>
                        <li>Haz clic en "Subir PDF" y espera a que se complete.</li>
                        <li>El archivo se guarda en Vercel Blob y estará disponible automáticamente.</li>
                        <li>Los padres lo descargarán al registrarse en el formulario.</li>
                    </ol>
                </section>
            </div>
        </div>
    )
}
