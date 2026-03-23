import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calculator, Scale, CheckCircle, AlertTriangle, DollarSign, Clock, FileText, ArrowRight } from "lucide-react"
import { FAQStructuredData, BreadcrumbStructuredData, ArticleStructuredData } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Pensión de Alimentos Chile 2026 — Guía Completa + Calculadora Gratis",
  description:
    "Todo sobre pensión de alimentos en Chile 2026. Mínimos legales, cómo demandar, cómo calcular el monto, tablas actualizadas. Calculadora gratis + asesoría legal con IA.",
  keywords: [
    "pension de alimentos chile 2026",
    "como calcular pension alimenticia",
    "pension minima alimentos chile",
    "demanda pension alimentos",
    "cuanto es la pension de alimentos",
    "ley pension alimentos chile",
    "calculadora pension alimenticia",
    "hasta que edad se paga pension",
    "pension alimentos porcentaje sueldo",
    "abogado pension alimentos gratis",
  ],
  alternates: { canonical: "/guias/pension-alimentos-chile" },
  openGraph: {
    title: "Pensión de Alimentos Chile 2026 — Guía Completa",
    description: "Mínimos legales, cómo demandar, cómo calcular. Calculadora gratis.",
    url: "https://legalpo.cl/guias/pension-alimentos-chile",
    type: "article",
  },
}

const faqs = [
  { question: "¿Cuánto es la pensión mínima de alimentos en Chile 2026?", answer: "El mínimo legal es el 40% del ingreso mínimo remuneracional por cada hijo. Con el sueldo mínimo 2026 de $500.000, el mínimo por hijo es $200.000 aproximadamente. Si hay más de un hijo, se suma proporcionalmente." },
  { question: "¿Hasta qué edad se paga pensión de alimentos?", answer: "Hasta los 21 años, o hasta los 28 si el hijo estudia una profesión u oficio. Después de los 28 años solo procede si existe incapacidad física o mental que impida sustentarse." },
  { question: "¿Qué porcentaje del sueldo corresponde a pensión?", answer: "No hay un porcentaje fijo por ley. El juez determina el monto considerando las necesidades del hijo y la capacidad económica del alimentante. En la práctica, suele oscilar entre el 30% y 50% del sueldo líquido." },
  { question: "¿Cómo demando pensión de alimentos?", answer: "Debes presentar una demanda en el Tribunal de Familia de tu comuna. Puedes hacerlo con abogado (que puede ser de la Corporación de Asistencia Judicial, gratuito) o sin abogado si el monto solicitado no supera el mínimo legal." },
  { question: "¿Qué pasa si no paga la pensión?", answer: "El alimentante puede enfrentar: arresto nocturno (hasta 15 días), retención de sueldo directo del empleador, suspensión de licencia de conducir, arraigo nacional (no puede salir del país) y registro de deudor de alimentos." },
  { question: "¿Se puede rebajar la pensión de alimentos?", answer: "Sí, mediante una demanda de rebaja ante el Tribunal de Familia. Debe acreditarse un cambio sustancial en las circunstancias: pérdida de empleo, disminución de ingresos, nuevos hijos, etc." },
]

export default function PensionAlimentosGuiaPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <BreadcrumbStructuredData items={[
        { name: "Inicio", url: "https://legalpo.cl" },
        { name: "Guías Legales", url: "https://legalpo.cl/guias" },
        { name: "Pensión de Alimentos Chile", url: "https://legalpo.cl/guias/pension-alimentos-chile" },
      ]} />
      <ArticleStructuredData
        headline="Pensión de Alimentos Chile 2026 — Guía Completa"
        description="Todo sobre pensión de alimentos en Chile 2026. Mínimos legales, cómo demandar, tablas actualizadas."
        datePublished="2026-01-15"
        dateModified="2026-03-22"
      />
      <FAQStructuredData faqs={faqs} />

      <section className="py-16 bg-slate-900 text-white">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Pensión de Alimentos Chile <span className="text-emerald-400">2026</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Guía definitiva: montos mínimos, cómo demandar, cómo calcular, qué pasa si no pagan. Todo actualizado a la legislación vigente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/calculators/pension-alimentos">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white gap-2">
                <Calculator className="h-5 w-5" /> Calcular Pensión Gratis
              </Button>
            </Link>
            <Link href="/">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 gap-2">
                <Scale className="h-5 w-5" /> Consultar Abogado IA
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">¿Qué es la Pensión de Alimentos?</h2>
          <p className="text-lg text-slate-700 mb-6">
            La pensión de alimentos es una obligación legal que tiene un padre o madre de contribuir económicamente a la mantención de sus hijos. Cubre alimentación, educación, salud, vestuario, vivienda y recreación. En Chile está regulada por la <strong>Ley 14.908</strong> y el <strong>Código Civil</strong>.
          </p>

          <h2 className="text-3xl font-bold mb-6 mt-12">Montos Mínimos 2026</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><DollarSign className="h-5 w-5 text-emerald-600" /> Mínimo por hijo</CardTitle></CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-emerald-600">$200.000</p>
                <p className="text-slate-600 mt-2">40% del ingreso mínimo remuneracional ($500.000 en 2026)</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="flex items-center gap-2"><AlertTriangle className="h-5 w-5 text-amber-600" /> Tope máximo</CardTitle></CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-amber-600">50%</p>
                <p className="text-slate-600 mt-2">Del ingreso total del alimentante (máximo legal destinado a pensiones)</p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold mb-6 mt-12">Cómo Demandar Pensión de Alimentos</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "Reunir documentos", desc: "Certificado de nacimiento del hijo, comprobante de domicilio, antecedentes de ingresos del demandado (si los tienes)." },
              { step: "2", title: "Presentar demanda", desc: "En el Tribunal de Familia de tu comuna. Puedes ir con abogado de la Corporación de Asistencia Judicial (gratis) o particular." },
              { step: "3", title: "Audiencia preparatoria", desc: "El juez cita a ambas partes. Aquí se puede llegar a un acuerdo (conciliación). Si no, se fija audiencia de juicio." },
              { step: "4", title: "Sentencia y pago", desc: "El juez fija el monto. Se puede ordenar retención directa del sueldo del alimentante por su empleador." },
            ].map(item => (
              <div key={item.step} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold flex-shrink-0">{item.step}</div>
                <div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold mb-6 mt-12">Consecuencias del No Pago</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              "Arresto nocturno (hasta 15 días)",
              "Retención directa de sueldo",
              "Suspensión licencia de conducir",
              "Arraigo nacional (no puede viajar)",
              "Registro Nacional de Deudores",
              "Embargo de bienes",
            ].map(item => (
              <div key={item} className="flex items-center gap-2 p-3 bg-red-50 rounded-lg border border-red-200">
                <AlertTriangle className="h-4 w-4 text-red-600 flex-shrink-0" />
                <span className="text-red-800 font-medium">{item}</span>
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

          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">¿Necesitas calcular la pensión o asesoría?</h2>
            <p className="text-slate-600 mb-6">Usa nuestra calculadora gratuita o consulta con nuestro abogado IA 24/7.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/calculators/pension-alimentos">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 gap-2">
                  <Calculator className="h-5 w-5" /> Calculadora de Pensión
                </Button>
              </Link>
              <Link href="/abogado-familia">
                <Button size="lg" variant="outline" className="gap-2">
                  <ArrowRight className="h-5 w-5" /> Abogado de Familia
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
