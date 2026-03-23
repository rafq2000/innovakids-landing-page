import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calculator, Scale, Users, FileText, ArrowRight, AlertTriangle } from "lucide-react"
import { FAQStructuredData, BreadcrumbStructuredData, ArticleStructuredData } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Herencia Chile 2026 — Guía Completa: Posesión Efectiva, Cómo Repartir + Calculadora",
  description:
    "Todo sobre herencias en Chile 2026. Posesión efectiva paso a paso, cómo se reparte la herencia, impuesto, plazos. Calculadora de herencia gratis + asesoría legal IA.",
  keywords: [
    "herencia chile 2026",
    "posesion efectiva chile",
    "como repartir herencia",
    "herederos legales chile",
    "impuesto herencia chile",
    "calculadora herencia chile",
    "testamento chile",
    "posesion efectiva registro civil",
    "cuarta de mejoras",
    "legitima rigorosa chile",
  ],
  alternates: { canonical: "/guias/herencia-chile" },
  openGraph: {
    title: "Herencia Chile 2026 — Guía Completa + Calculadora",
    description: "Posesión efectiva, cómo repartir, impuesto, plazos. Todo actualizado.",
    url: "https://legalpo.cl/guias/herencia-chile",
    type: "article",
  },
}

const faqs = [
  { question: "¿Qué es la posesión efectiva?", answer: "Es un trámite legal obligatorio para que los herederos puedan disponer de los bienes del fallecido. Si no hay testamento, se hace en el Registro Civil. Si hay testamento, se tramita en tribunales." },
  { question: "¿Cuánto cuesta la posesión efectiva?", answer: "En el Registro Civil (sin testamento) es gratuita. Si hay testamento, se tramita en tribunales y tiene costos de abogado y notaría, que varían según el caso." },
  { question: "¿Cómo se reparte la herencia sin testamento?", answer: "Sin testamento, la ley chilena establece un orden de prioridad: 1° cónyuge e hijos, 2° padres, 3° hermanos, 4° otros parientes colaterales hasta el 6° grado. El cónyuge recibe el doble de lo que recibe cada hijo, con un mínimo de 1/4 de la herencia." },
  { question: "¿Cuánto es el impuesto a la herencia?", answer: "El impuesto va del 1% al 25% según el monto heredado. Existe una exención para herencias menores a 600 UTM (aprox. $40 millones). Cónyuge e hijos tienen tramos más favorables." },
  { question: "¿Qué pasa si un heredero no quiere firmar?", answer: "Se puede solicitar judicialmente la partición de bienes. Un juez partidor designado repartirá los bienes según la ley, independientemente de la voluntad de ese heredero." },
  { question: "¿Tiene plazo la posesión efectiva?", answer: "No hay plazo fatal para tramitarla, pero es recomendable hacerla lo antes posible. El impuesto a la herencia genera intereses si se paga después de 2 años desde el fallecimiento." },
]

export default function HerenciaGuiaPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <BreadcrumbStructuredData items={[
        { name: "Inicio", url: "https://legalpo.cl" },
        { name: "Guías Legales", url: "https://legalpo.cl/guias" },
        { name: "Herencia Chile", url: "https://legalpo.cl/guias/herencia-chile" },
      ]} />
      <ArticleStructuredData
        headline="Herencia Chile 2026 — Guía Completa"
        description="Posesión efectiva, cómo repartir, impuesto, plazos. Calculadora de herencia gratis."
        datePublished="2026-01-25"
        dateModified="2026-03-22"
      />
      <FAQStructuredData faqs={faqs} />

      <section className="py-16 bg-slate-900 text-white">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Herencia en Chile <span className="text-purple-400">2026</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Guía definitiva: posesión efectiva, cómo se reparte, impuestos, testamento. Todo lo que necesitas saber actualizado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/calculators/herencia">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white gap-2">
                <Calculator className="h-5 w-5" /> Calcular Herencia Gratis
              </Button>
            </Link>
            <Link href="/abogado-herencias">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 gap-2">
                <Scale className="h-5 w-5" /> Abogado Herencias IA
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">¿Cómo se Reparte la Herencia en Chile?</h2>
          <p className="text-lg text-slate-700 mb-6">
            El Código Civil chileno divide la herencia en <strong>mitad legitimaria</strong> (para herederos forzosos), <strong>cuarta de mejoras</strong> (puede favorecer a algún heredero) y <strong>cuarta de libre disposición</strong> (el testador la destina libremente).
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-emerald-200">
              <CardHeader><CardTitle className="text-emerald-700">Mitad Legitimaria</CardTitle></CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-emerald-600 mb-2">50%</p>
                <p className="text-slate-600">Se reparte obligatoriamente entre cónyuge e hijos en partes iguales (cónyuge recibe el doble).</p>
              </CardContent>
            </Card>
            <Card className="border-purple-200">
              <CardHeader><CardTitle className="text-purple-700">Cuarta de Mejoras</CardTitle></CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-purple-600 mb-2">25%</p>
                <p className="text-slate-600">Solo puede destinarse a herederos forzosos (cónyuge, hijos, padres). Requiere testamento.</p>
              </CardContent>
            </Card>
            <Card className="border-blue-200">
              <CardHeader><CardTitle className="text-blue-700">Libre Disposición</CardTitle></CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-blue-600 mb-2">25%</p>
                <p className="text-slate-600">El testador puede dejarla a quien quiera, incluso a personas no emparentadas.</p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold mb-6">Posesión Efectiva: Paso a Paso</h2>
          <div className="space-y-4 mb-8">
            {[
              { step: "1", title: "Obtener certificado de defunción", desc: "En el Registro Civil o en línea en registrocivil.cl." },
              { step: "2", title: "Reunir documentos de herederos", desc: "Certificados de nacimiento y matrimonio que acrediten el parentesco." },
              { step: "3", title: "Inventario de bienes", desc: "Listar todos los bienes del fallecido: propiedades, vehículos, cuentas bancarias, inversiones." },
              { step: "4", title: "Solicitar posesión efectiva", desc: "Sin testamento: en registrocivil.cl (gratis). Con testamento: ante el juez civil con abogado." },
              { step: "5", title: "Inscribir en el CBR", desc: "Una vez concedida, inscribir las propiedades en el Conservador de Bienes Raíces a nombre de los herederos." },
              { step: "6", title: "Pagar impuesto a la herencia", desc: "Dentro de 2 años del fallecimiento para evitar intereses. Declarar ante el SII." },
            ].map(item => (
              <div key={item.step} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold flex-shrink-0">{item.step}</div>
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

          <div className="bg-purple-50 border border-purple-200 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">¿Necesitas calcular una herencia?</h2>
            <p className="text-slate-600 mb-6">Usa nuestra calculadora gratuita o consulta con nuestro abogado especialista en herencias.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/calculators/herencia">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white gap-2">
                  <Calculator className="h-5 w-5" /> Calculadora de Herencia
                </Button>
              </Link>
              <Link href="/abogado-herencias">
                <Button size="lg" variant="outline" className="gap-2">
                  <ArrowRight className="h-5 w-5" /> Abogado Herencias
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
