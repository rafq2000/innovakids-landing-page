import type { Metadata } from "next"
import EmbargoClient from "./embargo-client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Scale, HeartHandshake, ShieldCheck, CircleHelp, CheckCircle2 } from "lucide-react"
import { CalculatorStructuredData, FAQStructuredData } from "@/components/structured-data"
export const metadata: Metadata = {
    title: "Calculadora Embargo de Sueldo Chile | Cuánto me pueden quitar",
    description:
        "Calcula el límite legal de embargo de tu sueldo en Chile (Art. 57). Herramienta gratuita para saber cuánto dinero te pueden retener por deudas.",
    keywords: [
        "calculadora embargo sueldo chile",
        "limite embargo sueldo",
        "cuanto me pueden embargar",
        "embargo 56 uf",
        "calculo retencion judicial sueldo",
    ],
    openGraph: {
        title: "Calculadora de Embargo Sueldo Chile",
        description: "¿Tienes dudas? Calcula cuánto de tu sueldo es inembargable por ley.",
        type: "website",
        url: "https://www.legalpo.cl/calculators/embargo-sueldo",
    },
}

export default function EmbargoPage() {
    const faqs = [
        {
            question: "¿Cuánto es lo máximo que me pueden embargar?",
            answer: "Por regla general (deudas de comercio), las remuneraciones son inembargables hasta 56 UF. Todo lo que exceda ese monto puede ser embargado.",
        },
        {
            question: "¿Me pueden embargar el sueldo mínimo?",
            answer: "No. El sueldo mínimo y cualquier monto bajo las 56 UF está protegido por ley contra embargos de deudas comerciales.",
        },
        {
            question: "¿Qué pasa con la pensión de alimentos?",
            answer: "Es la excepción. Por pensión de alimentos se puede embargar hasta el 50% de las rentas, sin aplicar el límite de las 56 UF de protección.",
        },
    ]

    return (
        <div className="min-h-screen bg-slate-50">
            <CalculatorStructuredData
                name="Calculadora de Embargo de Sueldo Chile"
                description="Herramienta para calcular los montos inembargables del sueldo según el Código del Trabajo chileno."
                url="https://legalpo.cl/calculators/embargo-sueldo"
            />
            <FAQStructuredData faqs={faqs} />

            <main className="container mx-auto px-4 py-12 max-w-6xl">
                <EmbargoClient />

                <section className="mt-16 grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <ShieldCheck className="h-6 w-6 text-red-600" />
                                ¿Cómo funciona el Embargo de Sueldo en Chile?
                            </h2>
                            <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-left shadow-sm mb-8">
                                <h2 className="text-xl font-bold text-slate-900 mb-2 flex items-center">
                                    <CheckCircle2 className="h-5 w-5 text-red-600 mr-2" />
                                    ¿Cuál es el límite inembargable de mi sueldo?
                                </h2>
                                <p className="text-slate-700">
                                    En Chile, para deudas comunes (créditos de consumo, retail, tarjetas), el sueldo es <strong>inembargable por ley hasta un monto equivalente a 56 Unidades de Fomento (UF)</strong> (aproximadamente $2.100.000). Esto significa que <strong>todo lo que ganes por debajo de ese monto está completamente protegido</strong> y no puede ser retenido ni embargado por instituciones financieras. Solo pueden embargarte el dinero que exceda, o supere, ese tope de las 56 UF mensuales.
                                </p>
                            </div>

                            <h3 className="text-xl font-semibold mt-6 mb-3">Marco Legal protector</h3>
                            <div className="prose prose-slate max-w-none text-slate-700">
                                <p>
                                    El miedo al embargo es común, pero la ley chilena protege el sustento mínimo del trabajador. El <strong>Artículo 57 del Código del Trabajo</strong> establece límites claros para evitar que quedes sin el ingreso básico para vivir junto a tu familia.
                                </p>
                                <ul className="list-disc pl-5 mt-2 space-y-2">
                                    <li><strong>Si ganas menos de 56 UF líquidas:</strong> No te pueden tocar ni un solo peso de tu liquidación por concepto de embargo de retail o banco.</li>
                                    <li><strong>Si ganas más de 56 UF:</strong> Pueden retener única y excluvivamente la suma de dinero que está por encima de la línea base protegida legalmente.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <CircleHelp className="h-6 w-6 text-red-600" />
                                Preguntas Frecuentes
                            </h2>
                            <Accordion type="single" collapsible className="w-full bg-white rounded-lg shadow-sm border px-4">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="text-left font-medium">
                                        ¿Me tienen que avisar antes de embargar?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-slate-600">
                                        Sí. Debe existir un juicio ejecutivo y una orden judicial notificada a tu empleador. Tu jefe no puede retener tu sueldo "porque lo llamó el banco", debe haber una orden de un tribunal.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger className="text-left font-medium">
                                        ¿Qué hago si me embargaron más de lo legal?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-slate-600">
                                        Debes contactar a un abogado urgentemente para presentar una "Tercería" o un incidente de nulidad procesal por error en el cálculo. El tribunal corregirá el monto si se prueba el error.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>

                    <aside className="space-y-6">
                        <Card className="bg-blue-50 border-blue-200">
                            <CardContent className="pt-6">
                                <div className="flex flex-col items-center text-center space-y-3">
                                    <div className="p-3 bg-blue-100 rounded-full">
                                        <HeartHandshake className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <h3 className="font-bold text-blue-900">¿Deudas de Alimentos?</h3>
                                    <p className="text-sm text-blue-700">
                                        Recuerda: Si la deuda es por pensión alimenticia, estas reglas NO aplican. El juez puede ordenar retener hasta el 50% de tu sueldo.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="bg-slate-100 pb-3">
                                <CardTitle className="text-lg flex items-center gap-2">
                                    <Scale className="h-5 w-5 text-slate-600" />
                                    Marco Legal
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="pt-4 text-sm text-slate-600">
                                <p>
                                    <strong>Art. 57 Código del Trabajo:</strong> "Las remuneraciones de los trabajadores... serán inembargables en lo que no exceda de cincuenta y seis unidades de fomento."
                                </p>
                            </CardContent>
                        </Card>
                    </aside>
                </section>
            </main>
        </div>
    )
}
