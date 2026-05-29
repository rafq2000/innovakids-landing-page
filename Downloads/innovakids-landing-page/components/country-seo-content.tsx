import type { CountryConfig } from "@/lib/countries-config"

interface CountrySEOContentProps {
    country: CountryConfig
}

function renderFormattedText(text: string) {
    const paragraphs = text.split("\n\n")
    return paragraphs.map((p, i) => {
        const parts = p.split(/(\*\*[^*]+\*\*)/g)
        return (
            <p key={i} className={i > 0 ? "mt-4" : ""}>
                {parts.map((part, j) => {
                    if (part.startsWith("**") && part.endsWith("**")) {
                        return <strong key={j} className="text-[#2F2F2C] font-semibold">{part.slice(2, -2)}</strong>
                    }
                    return <span key={j}>{part}</span>
                })}
            </p>
        )
    })
}

const countryContent: Record<string, { h2: string; intro: string; sections: { h3: string; text: string }[] }> = {
    cl: {
        h2: "IA para Niños en Chile: Guía para Padres 2026",
        intro:
            "Llevamos +2 años formando niños y adolescentes chilenos de 8 a 17 años. Clases online en vivo, grupos de 5 alumnos y 10 días de garantía.",
        sections: [
            {
                h3: "Por Qué Aprender IA Ahora en Chile",
                text: "Chile lidera la adopción digital en LATAM. Pero la IA va más allá del currículo escolar -- es la habilidad que definirá el mercado laboral de tus hijos.\n\nLos niños que empiezan hoy llegan preparados al 2030. Nuestras clases se adaptan a la jornada escolar completa chilena.",
            },
            {
                h3: "Cómo Funcionan las Clases",
                text: "100% online y en vivo. Horarios flexibles que se adaptan a tu rutina familiar.\n\nCada grupo tiene máximo 5 alumnos -- atención personalizada real. Pagos en CLP con Webpay, Mercado Pago, tarjeta de crédito/débito o transferencia bancaria.",
            },
            {
                h3: "Qué Crea Tu Hijo en 5 Semanas",
                text: "En 10 clases tu hijo construye un portafolio digital real: su primera app funcional, arte original, música compuesta con IA, un videojuego y una presentación final de su proyecto.\n\nMás de 100 familias chilenas ya confían en InnovaKids.",
            },
            {
                h3: "Preguntas Frecuentes en Chile",
                text: "**¿Se puede pagar en pesos chilenos?** Sí, aceptamos CLP con Webpay o transferencia.\n\n**¿El horario se adapta al colegio?** Absolutamente, coordinamos según el horario escolar de tu hijo.\n\n**¿Las clases son online?** Sí, 100% online -- da igual la comuna o ciudad.\n\n**¿Tienen garantía?** 10 días de garantía total de satisfacción.",
            },
        ],
    },
    mx: {
        h2: "IA para Niños en México: Clases Online en Vivo 2026",
        intro:
            "InnovaKids forma niños mexicanos de 8 a 17 años en IA. Grupos de máximo 5 alumnos, clases en vivo y pago con OXXO, SPEI o tarjeta en pesos mexicanos.",
        sections: [
            {
                h3: "Por Qué Aprender IA en México",
                text: "México es la economía hispanohablante más grande del mundo, con hubs tech de clase mundial. La demanda de talento tech crecerá 300% para 2030.\n\nLos niños que dominan estas herramientas hoy serán los creadores y emprendedores del mañana.",
            },
            {
                h3: "Cómo Funcionan las Clases",
                text: "Clases online en vivo que cubren todas las zonas horarias de México. Nuestros instructores conocen el contexto educativo mexicano y hacen las clases cercanas y divertidas.\n\nAceptamos OXXO Pay, SPEI, tarjeta de crédito, Mercado Pago o PayPal en MXN.",
            },
            {
                h3: "Resultados Reales",
                text: "Niños de 9 a 16 años han creado apps funcionales, cuentas de Instagram con arte generativo y prototipos de startups.\n\nEl resultado más frecuente: padres que nos dicen que su hijo ya no quiere solo jugar videojuegos, sino crearlos.",
            },
            {
                h3: "Preguntas Frecuentes en México",
                text: "**¿Se puede pagar en pesos mexicanos?** Sí, aceptamos MXN por OXXO Pay o SPEI.\n\n**¿Los horarios funcionan para todo México?** Sí, tenemos turnos mañana, tarde y noche.\n\n**¿Los instructores conocen el contexto mexicano?** Sí, hablan con acento latinoamericano y entienden la realidad educativa local.\n\n**¿Tienen garantía?** 10 días de garantía completa.",
            },
        ],
    },
    co: {
        h2: "IA para Niños en Colombia: Clases Online en Vivo 2026",
        intro:
            "InnovaKids forma niños colombianos de 8 a 17 años en IA. Grupos de 5 alumnos, clases en vivo y pago con Nequi, Daviplata o PSE en pesos colombianos.",
        sections: [
            {
                h3: "Por Qué Aprender IA en Colombia",
                text: "Colombia tiene una de las economías con mayor crecimiento digital de Sudamérica. El Ministerio TIC está invirtiendo millones en formación digital.\n\nLos niños que dominen estas herramientas hoy tendrán acceso a oportunidades globales desde cualquier ciudad del país.",
            },
            {
                h3: "Cómo Funcionan las Clases",
                text: "100% online y en vivo. Si tienes internet, tu hijo puede aprender -- no importa el municipio.\n\nPagos con Nequi, Daviplata, PSE, tarjeta de crédito o Mercado Pago. Aceptamos COP.",
            },
            {
                h3: "Proyectos Reales de Alumnos Colombianos",
                text: "Nuestros alumnos han creado cuentas de TikTok con arte generativo, apps para organizar sus tareas y música original compuesta con IA.\n\nLa metodología Vibe Coding es 100% práctica desde la primera clase. Las familias destacan la atención personalizada por el tamaño reducido de los grupos.",
            },
            {
                h3: "Preguntas Frecuentes en Colombia",
                text: "**¿Aceptan Nequi o Daviplata?** Sí, aceptamos los principales medios de pago colombianos.\n\n**¿Los horarios se adaptan al huso horario Colombia (UTC-5)?** Absolutamente, tenemos múltiples opciones.\n\n**¿Solo necesitan internet?** Sí, las clases son 100% online.\n\n**¿Tienen garantía?** 10 días de garantía total sin preguntas.",
            },
        ],
    },
    ar: {
        h2: "IA para Chicos en Argentina: Clases Online en Vivo 2026",
        intro:
            "InnovaKids forma chicos argentinos de 8 a 17 años en IA. Grupos de 5 alumnos, clases en vivo y pago con Mercado Pago en ARS.",
        sections: [
            {
                h3: "Por Qué Aprender IA en Argentina",
                text: "Argentina tiene una de las comunidades tech más vibrantes de LATAM. Buenos Aires es la capital startup de la región.\n\nLos chicos que aprendan IA hoy tendrán acceso a trabajos remotos bien pagados en empresas globales desde los 18 años.",
            },
            {
                h3: "Cómo Funcionan las Clases",
                text: "Clases online en vivo para chicos de todo el país. Usamos el vocabulario argentino: decimos 'chicos', no 'niños'.\n\nPagos con Mercado Pago, transferencia CBU o PayPal. Grupos de 5 chicos para máxima atención.",
            },
            {
                h3: "Resultados Reales",
                text: "Chicos argentinos han creado sus primeras apps, arte digital para redes sociales y presentaciones para ferias de ciencias escolares.\n\nPadres nos dicen que sus hijos pasaron de consumir contenido a crearlo, y eso cambió su actitud frente al mundo digital.",
            },
            {
                h3: "Preguntas Frecuentes en Argentina",
                text: "**¿Se puede pagar con Mercado Pago en ARS?** Sí, con actualización del tipo de cambio mensual.\n\n**¿Los horarios funcionan para todo el país?** Sí, tenemos turnos tarde y noche.\n\n**¿Sirve para chicos de 8 a 17?** Sí, tenemos grupos separados por rango de edad.\n\n**¿Hay garantía?** 10 días de garantía completa.",
            },
        ],
    },
    pe: {
        h2: "IA para Niños en Perú: Clases Online en Vivo 2026",
        intro:
            "InnovaKids forma niños peruanos de 8 a 17 años en IA. Grupos de 5 alumnos, clases en vivo y pago con Yape o Plin en soles.",
        sections: [
            {
                h3: "Por Qué Aprender IA en Perú",
                text: "Lima se está consolidando como hub de innovación tech en Sudamérica. Empresas como Interbank y BCP están invirtiendo millones en transformación digital.\n\nLos niños que empiezan hoy serán los líderes tech del país en la próxima década.",
            },
            {
                h3: "Cómo Funcionan las Clases",
                text: "100% online y en vivo. Solo necesitas internet -- da igual si estás en Lima, Arequipa, Cusco o cualquier provincia.\n\nPagos con Yape, Plin, tarjeta de crédito, PayPal o Mercado Pago. Grupos de máximo 5 alumnos.",
            },
            {
                h3: "Proyectos Reales de Alumnos Peruanos",
                text: "Niños peruanos han creado aplicaciones móviles, arte digital con Midjourney y música original con IA.\n\nUna alumna de 12 años presentó su proyecto en el colegio y ganó el primer lugar en la feria de ciencias. Resultados concretos y memorables.",
            },
            {
                h3: "Preguntas Frecuentes en Perú",
                text: "**¿Se puede pagar con Yape o Plin?** Sí, son uno de nuestros medios de pago favoritos en Perú.\n\n**¿Los horarios funcionan para todo el país?** Sí, el huso horario Perú (UTC-5) está bien cubierto.\n\n**¿Las clases son online?** Sí, 100% online desde cualquier provincia.\n\n**¿Hay garantía?** 10 días de garantía sin complicaciones.",
            },
        ],
    },
    es: {
        h2: "IA para Niños en España: La Mejor Extraescolar Tech 2026",
        intro:
            "InnovaKids es la extraescolar de IA para niños de 8 a 17 años en España. Clases online en vivo, grupos de 5 alumnos y pago con Bizum o tarjeta en euros.",
        sections: [
            {
                h3: "Por Qué Elegir IA Como Extraescolar",
                text: "España aprobó la Estrategia Nacional de IA. Empresas como Inditex, Telefónica y BBVA ya usan IA en todos sus procesos.\n\nLas universidades más prestigiosas (UPM, UPC, Complutense) tienen grados y másteres de IA. Los niños que empiezan hoy llegan con ventaja a estas carreras.",
            },
            {
                h3: "Cómo Funcionan las Clases",
                text: "Online y en vivo, complemento perfecto para cualquier colegio. Horarios adaptados al calendario escolar español (septiembre a junio), de 16:00 a 21:00.\n\nPago fácil con Bizum, tarjeta bancaria española o PayPal en euros.",
            },
            {
                h3: "Qué Aprende Tu Hijo",
                text: "Usan ChatGPT, Midjourney, Suno AI y más herramientas para crear apps, arte digital, música y videojuegos. Fomenta pensamiento crítico, creatividad y las competencias digitales que exige la LOMLOE.\n\nVarios padres nos dicen que es la mejor extraescolar que han encontrado.",
            },
            {
                h3: "Preguntas Frecuentes en España",
                text: "**¿Se puede pagar con Bizum?** Sí, es uno de nuestros métodos favoritos para España.\n\n**¿Los horarios funcionan con el calendario escolar?** Totalmente, tarde-noche (16:00-21:00).\n\n**¿Es compatible con otras extraescolares?** Sí, solo son 10 clases en 5 semanas.\n\n**¿Hay garantía?** 10 días. Si no te convence, te devolvemos el 100%.",
            },
        ],
    },
    us: {
        h2: "IA en Español para Niños Latinos en USA 2026",
        intro:
            "InnovaKids forma niños hispanos de 8 a 17 años en IA, 100% en español. Clases en vivo, grupos de 5 alumnos y pago con Zelle o tarjeta en USD.",
        sections: [
            {
                h3: "Por Qué los Niños Latinos en USA Deben Aprender IA",
                text: "Los latinos son el grupo de mayor crecimiento en USA, pero menos del 8% de los ingenieros tech en Silicon Valley son hispanos. InnovaKids cierra esa brecha.\n\nFormamos niños en las habilidades que demanda el mercado tech americano, en el idioma con el que se sienten más cómodos: el español.",
            },
            {
                h3: "Cómo Funcionan las Clases",
                text: "Clases online en vivo que cubren todos los husos horarios de USA, desde la costa Este hasta la costa Oeste. 100% en español, sin barreras.\n\nPago con tarjeta de crédito americana, Zelle o PayPal en USD.",
            },
            {
                h3: "La Ventaja Bilingüe",
                text: "Un niño latino que aprende IA en español puede crear para dos de los mercados más grandes del mundo: EEUU y América Latina.\n\nNuestros alumnos han creado apps bilingües, contenido para redes en dos idiomas y prototipos de startups enfocadas en la comunidad hispana. Diferenciación real.",
            },
            {
                h3: "Preguntas Frecuentes en USA",
                text: "**¿Las clases son en español?** Sí, 100% en español.\n\n**¿Pueden pagar con Zelle?** Sí, aceptamos Zelle, tarjeta americana y PayPal.\n\n**¿Los horarios funcionan en distintos time zones?** Sí, tenemos turnos para EST, CST y PST.\n\n**¿Tienen garantía?** 10 días de garantía completa, sin preguntas.",
            },
        ],
    },
}

export function CountrySEOContent({ country }: CountrySEOContentProps) {
    const content = countryContent[country.code]

    // Fallback genérico para países sin contenido específico
    if (!content) {
        return (
            <section className="bg-[#F5F1E8] text-[#2F2F2C] border-t border-[#2F2F2C]/10 py-24 md:py-32">
                <div className="max-w-[1100px] mx-auto px-6 md:px-10">
                    <div className="flex items-center gap-5 mb-10">
                        <div className="h-px w-12 bg-[#C96342]" />
                        <p className="text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold">
                            Guía local · {country.name}
                        </p>
                    </div>
                    <h2
                        className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.02] tracking-[-0.02em] font-normal mb-8 max-w-[28ch]"
                    >
                        Cursos de IA para <em className="italic text-[#C96342]">{country.childTerm}</em> en {country.name}.
                    </h2>
                    <p className="text-lg text-[#5A5751] leading-relaxed max-w-[62ch]">
                        InnovaKids es la escuela #1 de inteligencia artificial para {country.childTerm} en {country.name}.
                        Grupos de máximo 5 alumnos, clases en vivo y garantía de 10 días. Tu hijo aprende a crear apps,
                        arte y música con IA en 5 semanas.
                    </p>
                </div>
            </section>
        )
    }

    return (
        <section className="bg-[#F5F1E8] text-[#2F2F2C] border-t border-[#2F2F2C]/10 py-28 md:py-40">
            <div className="max-w-[1100px] mx-auto px-6 md:px-10">
                <div className="flex items-center gap-5 mb-12">
                    <div className="h-px w-12 bg-[#C96342]" />
                    <p className="text-[11px] uppercase tracking-[0.28em] text-[#C96342] font-semibold">
                        {country.flag} Guía local · {country.name}
                    </p>
                </div>

                <h2
                    className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.02] tracking-[-0.02em] font-normal mb-10 max-w-[32ch]"
                >
                    {content.h2}
                </h2>

                <p className="text-lg md:text-xl text-[#5A5751] leading-relaxed mb-20 max-w-[70ch]">
                    {content.intro}
                </p>

                <div className="divide-y divide-[#2F2F2C]/12 border-y border-[#2F2F2C]/12">
                    {content.sections.map((section, i) => (
                        <article key={i} className="grid md:grid-cols-12 gap-8 md:gap-12 py-12 md:py-16">
                            <div className="md:col-span-1">
                                <span className="font-mono-accent text-[11px] tracking-[0.22em] text-[#C96342] font-semibold">
                                    {(i + 1).toString().padStart(2, "0")}
                                </span>
                            </div>
                            <h3
                                className="font-display md:col-span-5 text-2xl md:text-3xl leading-[1.15] tracking-tight text-[#2F2F2C]"
                            >
                                {section.h3}
                            </h3>
                            <div className="md:col-span-6 text-base md:text-lg text-[#5A5751] leading-relaxed">
                                {renderFormattedText(section.text)}
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-20 flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-t border-[#2F2F2C]/12 pt-12">
                    <div>
                        <p
                            className="font-display text-2xl md:text-3xl leading-snug tracking-tight text-[#2F2F2C]"
                        >
                            {country.flag} ¿Listo para inscribir a tu hijo en <em className="italic text-[#C96342]">{country.name}</em>?
                        </p>
                        <p className="text-sm text-[#5A5751] mt-2">
                            Agenda una evaluación gratuita. Sin compromiso. Garantía de 10 días.
                        </p>
                    </div>
                    <a
                        href="#sesion-estrategica"
                        className="inline-flex items-center bg-[#C96342] hover:bg-[#9A4428] text-[#FAF7EF] px-7 py-4 text-base font-semibold rounded-sm transition-colors shrink-0"
                    >
                        Ver horarios disponibles →
                    </a>
                </div>
            </div>
        </section>
    )
}
