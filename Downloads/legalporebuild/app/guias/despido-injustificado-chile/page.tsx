import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calculator, Scale, CheckCircle, AlertTriangle, Clock, FileText, ArrowRight, ShieldAlert } from "lucide-react"
import { FAQStructuredData, BreadcrumbStructuredData, ArticleStructuredData, HowToStructuredData } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Despido Injustificado Chile 2026 — Guía Completa: Derechos, Plazos e Indemnización",
  description:
    "¿Te despidieron injustificadamente? Conoce tus derechos: indemnización con recargo del 30%-80%, plazo de 60 días para demandar, cómo calcular tu finiquito. Guía actualizada 2026.",
  keywords: [
    "despido injustificado chile 2026",
    "indemnizacion despido injustificado",
    "demanda laboral chile",
    "plazo demanda despido",
    "recargo indemnizacion",
    "derechos trabajador despido",
    "autodespido chile",
    "finiquito despido injustificado",
    "abogado laboral despido",
    "carta despido chile",
  ],
  alternates: { canonical: "/guias/despido-injustificado-chile" },
  openGraph: {
    title: "Despido Injustificado Chile 2026 — Tus Derechos",
    description: "Indemnización, plazos, cómo demandar. Guía completa actualizada.",
    url: "https://legalpo.cl/guias/despido-injustificado-chile",
    type: "article",
  },
}

const faqs = [
  { question: "¿Cuánto tiempo tengo para demandar por despido injustificado?", answer: "Tienes 60 días hábiles (lunes a sábado) desde la fecha del despido para interponer la demanda ante el Juzgado de Letras del Trabajo. Este plazo es fatal e improrrogable." },
  { question: "¿Cuánto me corresponde de indemnización?", answer: "Si el despido es declarado injustificado, recibes: indemnización por años de servicio (1 mes por año, tope 11 años) + recargo del 30% al 80% según la causal invocada + indemnización sustitutiva del aviso previo (1 mes de sueldo) + vacaciones proporcionales." },
  { question: "¿Qué es el recargo por despido injustificado?", answer: "Es un aumento sobre la indemnización por años de servicio: 30% si la causal es necesidades de la empresa (art. 161), 50% si es una causal del art. 159 (vencimiento plazo, etc.) aplicada indebidamente, y 80% si se invocaron causales del art. 160 (falta probidad, etc.) sin fundamento." },
  { question: "¿Qué es el autodespido?", answer: "Es cuando el trabajador pone término al contrato por incumplimiento grave del empleador (acoso, no pago de cotizaciones, rebaja unilateral de sueldo). El trabajador tiene los mismos derechos que un despido injustificado." },
  { question: "¿Me pueden despedir estando con licencia médica?", answer: "No te pueden despedir por necesidades de la empresa mientras estés con licencia médica. Si lo hacen, el despido es nulo (despido nulo por fuero de enfermedad). Tendrías derecho a remuneraciones desde el despido hasta la sentencia." },
  { question: "¿Necesito abogado para demandar?", answer: "Es altamente recomendable, aunque no obligatorio. Puedes solicitar abogado gratuito en la Corporación de Asistencia Judicial o en la Oficina de Defensa Laboral de tu comuna." },
]

export default function DespidoInjustificadoGuiaPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <BreadcrumbStructuredData items={[
        { name: "Inicio", url: "https://legalpo.cl" },
        { name: "Guías Legales", url: "https://legalpo.cl/guias" },
        { name: "Despido Injustificado Chile", url: "https://legalpo.cl/guias/despido-injustificado-chile" },
      ]} />
      <ArticleStructuredData
        headline="Despido Injustificado Chile 2026 — Guía Completa"
        description="Derechos, indemnización con recargo, plazos para demandar. Actualizado 2026."
        datePublished="2026-01-20"
        dateModified="2026-03-22"
      />
      <HowToStructuredData
        name="Cómo demandar por despido injustificado en Chile"
        description="Pasos para interponer una demanda laboral por despido injustificado."
        totalTime="P60D"
        steps={[
          { name: "Revisar carta de despido", text: "Verifica la causal invocada, la fecha y que se hayan pagado las cotizaciones al día." },
          { name: "No firmar finiquito sin revisar", text: "No firmes ante notario hasta verificar que los montos sean correctos." },
          { name: "Calcular indemnización", text: "Usa una calculadora de finiquito para saber cuánto te corresponde." },
          { name: "Buscar asesoría legal", text: "Consulta con un abogado laboral o la Corporación de Asistencia Judicial." },
          { name: "Presentar demanda", text: "Interpón la demanda dentro de 60 días hábiles en el Juzgado de Letras del Trabajo." },
        ]}
      />
      <FAQStructuredData faqs={faqs} />

      <section className="py-16 bg-slate-900 text-white">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/20 border border-red-400/40 text-red-300 mb-6 text-sm font-medium">
            <ShieldAlert className="h-4 w-4" /> Plazo fatal: 60 días hábiles para demandar
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Despido Injustificado Chile <span className="text-red-400">2026</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Guía completa sobre tus derechos: indemnización con recargo del 30%-80%, autodespido, plazos, y cómo demandar paso a paso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/calculators/finiquito">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white gap-2">
                <Calculator className="h-5 w-5" /> Calcular Finiquito Gratis
              </Button>
            </Link>
            <Link href="/abogado-laboral">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 gap-2">
                <Scale className="h-5 w-5" /> Abogado Laboral IA
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">¿Cuándo es Injustificado un Despido?</h2>
          <p className="text-lg text-slate-700 mb-6">
            Un despido es injustificado cuando el empleador invoca una causal legal que <strong>no puede probar</strong> en juicio, o cuando directamente no cumple con los requisitos legales del despido. En Chile, el Código del Trabajo establece causales taxativas (artículos 159, 160 y 161).
          </p>

          <h2 className="text-3xl font-bold mb-6 mt-12">Tabla de Recargos sobre Indemnización</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-4 text-left">Causal Invocada</th>
                  <th className="p-4 text-left">Artículo</th>
                  <th className="p-4 text-center">Recargo</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td className="p-4">Necesidades de la empresa</td><td className="p-4">Art. 161</td><td className="p-4 text-center font-bold text-amber-600">+30%</td></tr>
                <tr className="border-b bg-slate-50"><td className="p-4">Vencimiento plazo, conclusión trabajo</td><td className="p-4">Art. 159</td><td className="p-4 text-center font-bold text-orange-600">+50%</td></tr>
                <tr className="border-b"><td className="p-4">Falta probidad, conductas graves</td><td className="p-4">Art. 160</td><td className="p-4 text-center font-bold text-red-600">+80%</td></tr>
                <tr className="bg-slate-50"><td className="p-4">Sin carta de despido o sin causal</td><td className="p-4">—</td><td className="p-4 text-center font-bold text-red-600">+80%</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold mb-6 mt-12">Pasos para Demandar</h2>
          <div className="space-y-4 mb-8">
            {[
              { step: "1", title: "Revisa tu carta de despido", desc: "Verifica la causal, que sea dentro de plazo y que las cotizaciones estén al día. Si no hay carta, el despido es automáticamente injustificado." },
              { step: "2", title: "No firmes el finiquito sin revisar", desc: "Tienes derecho a ratificarlo ante la Inspección del Trabajo o notario. No firmes si los montos no son correctos." },
              { step: "3", title: "Calcula cuánto te corresponde", desc: "Usa nuestra calculadora gratuita para estimar tu indemnización con recargo." },
              { step: "4", title: "Busca asesoría legal", desc: "Consulta con abogado laboral. La Corporación de Asistencia Judicial ofrece servicio gratuito." },
              { step: "5", title: "Presenta la demanda dentro de 60 días hábiles", desc: "El plazo corre desde la separación del cargo. Es fatal: si se pasa, pierdes el derecho a demandar." },
            ].map(item => (
              <div key={item.step} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold flex-shrink-0">{item.step}</div>
                <div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold mb-6 mt-12">Preguntas Frecuentes</h2>
          <div className="space-y-4 mb-12">
            {faqs.map((faq, idx) => (
              <Card key={idx}>
                <CardHeader><CardTitle className="text-lg">{faq.question}</CardTitle></CardHeader>
                <CardContent><p className="text-slate-600">{faq.answer}</p></CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-red-50 border border-red-200 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">¿Te despidieron? Actúa rápido</h2>
            <p className="text-slate-600 mb-6">Tienes solo 60 días hábiles. Calcula tu finiquito y consulta con nuestro abogado IA ahora.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/calculators/finiquito">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white gap-2">
                  <Calculator className="h-5 w-5" /> Calcular Finiquito
                </Button>
              </Link>
              <Link href="/despido-injustificado">
                <Button size="lg" variant="outline" className="gap-2">
                  <ArrowRight className="h-5 w-5" /> Asesoría Despido
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
