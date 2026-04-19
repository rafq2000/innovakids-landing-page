"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Loader2, CheckCircle2 } from "lucide-react"
import { sendContactEmail } from "@/app/actions/contact"
import { trackFormSubmit } from "@/lib/gtag"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")
  const [showCustomCode, setShowCustomCode] = useState(false)
  const [customCode, setCustomCode] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    const formData = new FormData(e.currentTarget)
    const countryCode = showCustomCode ? customCode : formData.get("countryCode")
    const phone = formData.get("phone")
    const whatsapp = `${countryCode} ${phone}`

    formData.set("whatsapp", whatsapp)

    try {
      const result = await sendContactEmail(formData)

      if (result.success) {
        setIsSuccess(true)
        trackFormSubmit()
          ; (e.target as HTMLFormElement).reset()
        setShowCustomCode(false)
        setCustomCode("")
        setTimeout(() => setIsSuccess(false), 5000)
      } else {
        setError(result.error || "Error al enviar el mensaje")
      }
    } catch (err) {
      console.error("[v0] Error:", err)
      setError("Error al enviar el mensaje. Por favor intenta nuevamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-white">
            Nombre completo *
          </Label>
          <Input
            id="name"
            name="name"
            required
            placeholder="Tu nombre"
            className="bg-[#0a1628] border-[#2a3952] text-white placeholder:text-gray-500"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-white">
            Email *
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="tu@email.com"
            className="bg-[#0a1628] border-[#2a3952] text-white placeholder:text-gray-500"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="whatsapp" className="text-white">
          WhatsApp *
        </Label>
        <div className="flex gap-2">
          {!showCustomCode ? (
            <select
              name="countryCode"
              required={!showCustomCode}
              onChange={(e) => {
                if (e.target.value === "otro") {
                  setShowCustomCode(true)
                }
              }}
              className="bg-[#0a1628] border border-[#2a3952] text-white rounded-md px-3 py-2 w-36"
              aria-label="Código de país"
            >
              <option value="+56">🇨🇱 Chile +56</option>
              <option value="+54">🇦🇷 Argentina +54</option>
              <option value="+57">🇨🇴 Colombia +57</option>
              <option value="+52">🇲🇽 México +52</option>
              <option value="+34">🇪🇸 España +34</option>
              <option value="+51">🇵🇪 Perú +51</option>
              <option value="+58">🇻🇪 Venezuela +58</option>
              <option value="+593">🇪🇨 Ecuador +593</option>
              <option value="+591">🇧🇴 Bolivia +591</option>
              <option value="+598">🇺🇾 Uruguay +598</option>
              <option value="+595">🇵🇾 Paraguay +595</option>
              <option value="+507">🇵🇦 Panamá +507</option>
              <option value="+506">🇨🇷 Costa Rica +506</option>
              <option value="+505">🇳🇮 Nicaragua +505</option>
              <option value="+504">🇭🇳 Honduras +504</option>
              <option value="+503">🇸🇻 El Salvador +503</option>
              <option value="+502">🇬🇹 Guatemala +502</option>
              <option value="+53">🇨🇺 Cuba +53</option>
              <option value="+1-809">🇩🇴 Rep. Dominicana +1-809</option>
              <option value="+1-787">🇵🇷 Puerto Rico +1-787</option>
              <option value="+1">🇺🇸 USA +1</option>
              <option value="otro">🌎 Otro país</option>
            </select>
          ) : (
            <div className="flex gap-2 w-36">
              <Input
                type="text"
                value={customCode}
                onChange={(e) => setCustomCode(e.target.value)}
                placeholder="+XX"
                required
                className="bg-[#0a1628] border-[#2a3952] text-white placeholder:text-gray-500 w-20"
              />
              <button
                type="button"
                onClick={() => {
                  setShowCustomCode(false)
                  setCustomCode("")
                }}
                className="text-[#4DD0E1] hover:text-[#3BBFD1] text-sm"
              >
                ✕
              </button>
            </div>
          )}
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="9 1234 5678"
            className="bg-[#0a1628] border-[#2a3952] text-white placeholder:text-gray-500 flex-1"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-white">
          Mensaje *
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="Cuéntanos cómo podemos ayudarte..."
          rows={5}
          className="bg-[#0a1628] border-[#2a3952] text-white placeholder:text-gray-500 resize-none"
        />
      </div>

      {error && <p className="text-red-400 text-sm">{error}</p>}

      {isSuccess && (
        <div className="flex items-center gap-2 text-green-400 bg-green-400/10 p-3 rounded-lg">
          <CheckCircle2 className="w-5 h-5" />
          <p className="text-sm">¡Mensaje enviado exitosamente! Te responderemos pronto.</p>
        </div>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#4DD0E1] hover:bg-[#3BBFD1] text-[#0a1628] font-bold text-lg py-6"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Enviando...
          </>
        ) : (
          "Enviar mensaje"
        )}
      </Button>
    </form>
  )
}
