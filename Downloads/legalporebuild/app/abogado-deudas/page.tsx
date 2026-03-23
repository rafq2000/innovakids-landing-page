import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { CreditCard, Calculator, CheckCircle, Clock, Scale, FileText, MessageCircle, Shield, Gavel, XCircle, AlertTriangle, DollarSign, ArrowRight } from "lucide-react"
import QuizQuiebra from "./quiz-quiebra"
import EmbargoClient from "@/app/calculators/embargo-sueldo/embargo-client"
import { FAQStructuredData, LegalServiceStructuredData, BreadcrumbStructuredData } from "@/components/structured-data"

export const metadata: Metadata = {
    title: "Abogado Deudas Chile 2026 | Ley de Quiebras, Embargos y DICOM | LegalPO",
    description: "🛡️ ABOGADO DEUDAS. ¿Te demandaron? ¿Tienes DICOM? Guía definitiva: Ley de Quiebras (20.720), Tercerías, Eliminación de DICOM y Calculadora de Embargo GRATIS.",
    keywords: [
        "abogado deudas chile",
        "ley de quiebras persona natural",
        "defensa deudores chile",
        "tercerias de posesion",
        "embargo de bienes",
        "salir de dicom gratis",
        "prescripcion deudas",
        "renegociacion deudas",
        "abogado quiebras",
        "como evitar embargo",
    ],
    openGraph: {
        title: "Abogado Deudas Chile | Soluciones Legales a tu Insolvencia",
        description: "Recupera tu tranquilidad. Guía completa sobre Ley de Quiebras, Embargos y Prescripción. Herramientas gratis incluidas.",
        type: "website",
    },
}

const faqs = [
    { question: "¿En qué consiste la Ley de Quiebras (20.720)?", answer: "Es un procedimiento legal que permite a personas y empresas declarar su insolvencia. Si cumples los requisitos, puedes entregar tus bienes (aunque sean pocos) para pagar lo que alcances, y el resto de la deuda SE EXTINGUE legalmente, quedando limpio de DICOM." },
    { question: "¿Qué es una Tercería de Posesión?", answer: "Es una defensa clave cuando te quieren embargar bienes que no son tuyos (por ejemplo, si vives con tus padres o pareja y la deuda es tuya). Se prueba que los bienes son de un tercero para evitar el remate." },
    { question: "¿Cuándo prescriben realmente las deudas?", answer: "La acción ejecutiva (para embargarte) prescribe en 3 años desde que se hace exigible (usualmente desde que dejas de pagar). La acción ordinaria en 5 años. OJO: La prescripción debe ser DECLARADA por un juez, no es automática." },
    { question: "¿Me pueden embargar si no tengo nada a mi nombre?", answer: "Si no tienes bienes registrales (casa, auto) a tu nombre, podrían intentar embargar los bienes muebles de tu domicilio (TV, muebles), presumiendo que son tuyos. Ahí es donde entra la Tercería de Posesión." },
    { question: "¿Cómo borro mis antecedentes comerciales (Dicom)?", answer: "1) Pagando la deuda. 2) Si la deuda prescribió (declarado por juez). 3) Si te acogiste a la Ley de Quiebras y obtuviste la Resolución de Término." },
]

export default function AbogadoDeudasPage() {
    return (
        <div className="min-h-screen bg-slate-900 text-white font-sans">
            <BreadcrumbStructuredData items={[
                { name: "Inicio", url: "https://legalpo.cl" },
                { name: "Abogado Deudas", url: "https://legalpo.cl/abogado-deudas" },
            ]} />
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900/40 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                <div className="container max-w-6xl mx-auto px-4 relative z-10 text-center">
                    <Badge className="mb-6 bg-amber-500/20 text-amber-300 border-amber-500/30 px-4 py-1 text-sm rounded-full">
                        <Shield className="w-4 h-4 mr-2" />
                        Defensa Deudores y Ley de Quiebras
                    </Badge>
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight bg-gradient-to-r from-white via-amber-100 to-amber-400 bg-clip-text text-transparent">
                        Recupera tu Tranquilidad Financiera
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                        No dejes que las deudas controlen tu vida. Especialistas en <strong>Ley de Quiebras, Tercerías y Prescripción</strong>.
                    </p>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-xl hover:bg-white/10 transition-colors">
                            <Gavel className="w-8 h-8 text-amber-400 mx-auto mb-2" />
                            <div className="font-bold">Ley de Quiebras</div>
                            <div className="text-sm text-slate-400">Borrón y cuenta nueva</div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-xl hover:bg-white/10 transition-colors">
                            <Shield className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                            <div className="font-bold">Defensa Embargo</div>
                            <div className="text-sm text-slate-400">Protege tus bienes</div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-xl hover:bg-white/10 transition-colors">
                            <Clock className="w-8 h-8 text-green-400 mx-auto mb-2" />
                            <div className="font-bold">Prescripción</div>
                            <div className="text-sm text-slate-400">Extingue deudas antiguas</div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-xl hover:bg-white/10 transition-colors">
                            <XCircle className="w-8 h-8 text-red-400 mx-auto mb-2" />
                            <div className="font-bold">Salir de DICOM</div>
                            <div className="text-sm text-slate-400">Limpieza legal</div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/">
                            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-lg px-8 h-12 shadow-lg shadow-amber-900/20">
                                <MessageCircle className="h-5 w-5 mr-2" />
                                Hablar con Abogado IA
                            </Button>
                        </Link>
                        <Link href="#quiz">
                            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 text-lg px-8 h-12">
                                <CheckCircle className="h-5 w-5 mr-2" />
                                ¿Califico para Quiebra?
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Quiz Section */}
            <section id="quiz" className="py-20 bg-slate-50 text-slate-900">
                <div className="container max-w-4xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">¿Es la Ley de Quiebras para ti?</h2>
                        <p className="text-lg text-slate-600">Responde este breve diagnóstico y descubre si puedes eliminar tus deudas legalmente.</p>
                    </div>
                    <QuizQuiebra />
                </div>
            </section>

            {/* Interactive Calculator Integration */}
            <section className="py-20 bg-white border-y border-slate-200">
                <div className="container max-w-5xl mx-auto px-4">
                    <div className="mb-12 text-center">
                        <Badge className="bg-red-100 text-red-700 border-red-200 mb-3 hover:bg-red-200">Herramienta Gratuita</Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Calculadora de Embargo</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Muchos clientes llegan con miedo a perderlo todo. Usa nuestra herramienta para saber exactamente cuánto de tu sueldo es intocable por ley.
                        </p>
                    </div>
                    {/* Reuse existing client component */}
                    <EmbargoClient />
                </div>
            </section>

            {/* Skyscraper Content - Guía Definitiva */}
            <section className="py-24 bg-slate-900">
                <div className="container max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl md:4xl font-bold mb-12 text-center bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">
                        Guía Definitiva: Defensa de Deudas en Chile
                    </h2>

                    <div className="space-y-12">
                        {/* Ley de Quiebras */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
                            <h3 className="text-2xl font-bold text-amber-400 mb-4 flex items-center gap-2">
                                <Gavel className="h-6 w-6" /> 1. Ley de Quiebras (Ley 20.720)
                            </h3>
                            <p className="text-slate-300 mb-4 leading-relaxed">
                                Conocida legalmente como "Procedimiento de Liquidación Voluntaria", esta ley es el "botón de reinicio" financiero.
                                Está diseñada para personas que ya no pueden pagar sus deudas (insolvencia).
                            </p>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-start gap-3 text-slate-300">
                                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                    <span><strong>Extinción Total:</strong> Al terminar el proceso, los saldos de tus deudas se eliminan legalmente.</span>
                                </li>
                                <li className="flex items-start gap-3 text-slate-300">
                                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                    <span><strong>Adiós DICOM:</strong> Con la resolución de término, tienes derecho a que te borren de todos los registros de morosidad.</span>
                                </li>
                                <li className="flex items-start gap-3 text-slate-300">
                                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                    <span><strong>Suspensión de Juicios:</strong> Se paralizan los embargos y juicios ejecutivos en tu contra.</span>
                                </li>
                            </ul>
                            <div className="bg-amber-500/10 border border-amber-500/20 p-4 rounded-lg">
                                <p className="text-amber-200 text-sm">
                                    <strong>Requisito Clave:</strong> Debes tener más de una deuda vencida y estar dispuesto a entregar tus bienes (si los tienes) al liquidador.
                                </p>
                            </div>
                        </div>

                        {/* Tercerías */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
                            <h3 className="text-2xl font-bold text-blue-400 mb-4 flex items-center gap-2">
                                <Shield className="h-6 w-6" /> 2. Defensa ante Embargos: La Tercería
                            </h3>
                            <p className="text-slate-300 mb-4 leading-relaxed">
                                Un error común es pensar que "si no tengo nada a mi nombre, no me pueden hacer nada".
                                <strong> Falso.</strong> El receptor judicial puede embargar bienes del domicilio donde vives (casa de tus padres, pareja, abuelos), presumiendo que son tuyos.
                            </p>
                            <h4 className="font-semibold text-white mb-2">¿Cómo funciona la Tercería de Posesión?</h4>
                            <p className="text-slate-300 mb-4">
                                Es una demanda que interpone el verdadero dueño de los bienes (tu mamá, tu pareja) contra el banco y contra ti, diciéndole al juez:
                                <em> "Estos bienes son míos, no del deudor. No los embarguen."</em>
                            </p>
                            <p className="text-slate-300">
                                Es la herramienta más efectiva para salvar los muebles, electrodomésticos y enseres de la casa familiar.
                            </p>
                        </div>

                        {/* Prescripción */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
                            <h3 className="text-2xl font-bold text-green-400 mb-4 flex items-center gap-2">
                                <Clock className="h-6 w-6" /> 3. La Prescripción de Deudas
                            </h3>
                            <p className="text-slate-300 mb-4 leading-relaxed">
                                Las deudas no son eternas. Si el acreedor (banco/empresa) dejó pasar el tiempo sin demandarte o abandonó el juicio,
                                la deuda puede declararse "prescrita".
                            </p>
                            <div className="grid md:grid-cols-2 gap-4 mt-6">
                                <Card className="bg-slate-800 border-slate-700">
                                    <CardContent className="p-4">
                                        <div className="font-bold text-white mb-1">Pagaré / Letra</div>
                                        <div className="text-2xl font-bold text-amber-500">1 Año</div>
                                        <div className="text-xs text-slate-400">Desde vencimiento</div>
                                    </CardContent>
                                </Card>
                                <Card className="bg-slate-800 border-slate-700">
                                    <CardContent className="p-4">
                                        <div className="font-bold text-white mb-1">Acción Ejecutiva</div>
                                        <div className="text-2xl font-bold text-amber-500">3 Años</div>
                                        <div className="text-xs text-slate-400">Regla general deudas bancarias</div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-20 bg-slate-950">
                <div className="container max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-10">Preguntas Frecuentes sobre Deudas</h2>
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`faq-${i}`} className="border-white/10 px-4 mb-4 bg-white/5 rounded-lg overflow-hidden">
                                <AccordionTrigger className="text-left text-white hover:text-amber-400 py-4 px-2 text-lg font-medium">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-slate-300 pb-6 px-2 text-base leading-relaxed">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 bg-amber-600 text-white text-center">
                <div className="container px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">No enfrentes a los bancos solo</h2>
                    <p className="text-xl max-w-2xl mx-auto mb-8 text-amber-100">
                        Tenemos las herramientas legales para proteger tu patrimonio y ayudarte a empezar de cero.
                    </p>
                    <Link href="/">
                        <Button size="lg" className="bg-white text-amber-700 hover:bg-amber-50 font-bold text-lg px-8 h-14 shadow-xl">
                            Consulta Gratis con Abogado IA
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Internal Linking */}
            <section className="py-12 bg-slate-100">
                <div className="container max-w-5xl mx-auto px-4">
                    <h2 className="text-2xl font-bold mb-6 text-center">Recursos Relacionados</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        <Link href="/dicom-chile" className="block p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition border hover:border-emerald-300">
                            <h3 className="font-bold mb-2">DICOM Chile 2026</h3>
                            <p className="text-slate-600 text-sm">Cómo salir de DICOM, prescripción, tus derechos.</p>
                        </Link>
                        <Link href="/calculators/embargo-sueldo" className="block p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition border hover:border-emerald-300">
                            <h3 className="font-bold mb-2">Calculadora Embargo de Sueldo</h3>
                            <p className="text-slate-600 text-sm">Calcula cuánto te pueden embargar legalmente.</p>
                        </Link>
                        <Link href="/abogado-laboral" className="block p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition border hover:border-blue-300">
                            <h3 className="font-bold mb-2">Abogado Laboral</h3>
                            <p className="text-slate-600 text-sm">Finiquitos, despidos, Ley Karin.</p>
                        </Link>
                    </div>
                </div>
            </section>
            <LegalServiceStructuredData name="LegalPO - Abogado Deudas y Quiebras" description="Expertos en Ley de Quiebras, Tercerías y Prescripción de deudas en Chile." serviceType={["Derecho Concursal", "Prescripción Deudas", "Ley de Quiebras"]} priceRange="Consulta Gratis" url="https://legalpo.cl/abogado-deudas" />
            <FAQStructuredData faqs={faqs} />
        </div>
    )
}
