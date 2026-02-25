import type { CountryConfig } from "@/lib/countries-config"

interface CountrySEOContentProps {
    country: CountryConfig
}

const countryContent: Record<string, { h2: string; intro: string; sections: { h3: string; text: string }[] }> = {
    cl: {
        h2: "Cursos de IA para Niños en Chile: La Guía Completa para Padres Chilenos 2026",
        intro:
            "¿Buscas cursos de inteligencia artificial para niños en Chile? En InnovaKids llevamos más de 2 años formando a niños y adolescentes chilenos de 8 a 17 años en Santiago, Viña del Mar, Concepción, La Serena y todo el país. Somos la academia online de IA para niños más grande de Latinoamérica, con estudiantes activos en Chile.",
        sections: [
            {
                h3: "¿Por Qué los Niños Chilenos Deben Aprender IA Ahora?",
                text: "Chile es uno de los países con mayor penetración digital de América Latina. Según el Ministerio de Educación chileno, las habilidades tecnológicas son ya parte del currículo nacional. Sin embargo, la inteligencia artificial va más allá del currículum escolar: es la habilidad del siglo XXI. Los niños chilenos que aprenden IA hoy tendrán una ventaja competitiva enorme en el mercado laboral del 2030-2040. Nuestros cursos de IA para niños en Chile están adaptados a los horarios escolares chilenos (jornada escolar completa) y al contexto educativo national.",
            },
            {
                h3: "Nuestras Clases de IA para Niños en Santiago y Todo Chile",
                text: "Impartimos clases de inteligencia artificial online en vivo para niños de Santiago, Viña del Mar, Valparaíso, Concepción y más ciudades. Los horarios son completamente flexibles y se adaptan a tu rutina familiar. Cada grupo tiene máximo 5 niños chilenos, lo que garantiza atención personalizada. Puedes pagar con Webpay, Mercado Pago, tarjeta de crédito o débito chilena o transferencia bancaria en pesos chilenos.",
            },
            {
                h3: "Qué Crean los Niños Chilenos en Nuestro Programa",
                text: "En 5 semanas de clases de IA en Chile, tu hijo crea: su primera app funcional con ChatGPT, arte original con Midjourney, música con IA, un videojuego y una presentación final de su proyecto. Nuestros graduados chilenos tienen un portafolio digital real que pueden mostrar en su colegio o en sus redes sociales. Más de 100 familias chilenas ya confían en InnovaKids.",
            },
            {
                h3: "Preguntas Frecuentes: Cursos de IA para Niños en Chile",
                text: "¿Se puede pagar en pesos chilenos? Sí, aceptamos pago en CLP directamente con Webpay o transferencia. ¿El horario se adapta a colegios chilenos? Absolutamente, coordinamos en base al horario escolar de tu hijo. ¿Tienen clases para niños de Santiago Centro, Las Condes, Vitacura? Sí, todas las clases son online, da igual la comuna. ¿Tienen garantía? Sí, 10 días de garantía total de satisfacción.",
            },
        ],
    },
    mx: {
        h2: "Cursos de IA para Niños en México: Clases de Inteligencia Artificial Online para Mexicanos 2026",
        intro:
            "InnovaKids es el curso de inteligencia artificial para niños más completo de México. Atendemos a familias en Ciudad de México (CDMX), Guadalajara, Monterrey, Puebla, Tijuana y todo el país. Nuestros alumnos mexicanos de 8 a 17 años aprenden a crear apps, videojuegos y arte con IA en grupos de máximo 5 estudiantes.",
        sections: [
            {
                h3: "¿Por Qué los Niños en México Necesitan Aprender Inteligencia Artificial?",
                text: "México es la economía más grande del mundo hispanohablante y uno de los países con mayor crecimiento tech de América Latina. Monterrey y Guadalajara son hubs tecnológicos de clase mundial. Los niños mexicanos que aprenden IA hoy están preparándose para ser los ingenieros, emprendedores y creadores de las empresas tech del futuro. Según el Banco de México y el INEGI, la demanda de talento tech en México crecerá 300% para 2030.",
            },
            {
                h3: "Clases de IA para Niños en CDMX, Guadalajara, Monterrey y Más Ciudades",
                text: "Damos clases de inteligencia artificial online para niños en todas las zonas horarias de México. Ya seas de CDMX, Guadalajara, Monterrey, Puebla, Cancún o Tijuana, tenemos un horario que se ajusta a tu familia. Nuestros instructores manejan el acento y los modismos mexicanos, haciendo las clases más cercanas y divertidas para los niños mexicanos. Aceptamos pago con OXXO Pay, SPEI, tarjeta de crédito, Mercado Pago o PayPal en pesos mexicanos.",
            },
            {
                h3: "Resultados Reales de Niños Mexicanos en InnovaKids",
                text: "Niños mexicanos de 9 a 16 años han creado sus primeras apps funcionales, cuentas de Instagram con arte generativo y prototipos de startups usando inteligencia artificial. El resultado más frecuente: padres que nos dicen que su hijo ya no quiere solo jugar videojuegos, sino crearlos. Más de 80 familias mexicanas formen parte de nuestra comunidad InnovaKids.",
            },
            {
                h3: "Preguntas Frecuentes: Cursos de IA para Niños en México",
                text: "¿Se puede pagar en pesos mexicanos? Sí, aceptamos MXN directamente por OXXO Pay o SPEI. ¿Los horarios funcionan para niños en zona CDMX y norte? Sí, tenemos turnos mañana, tarde y noche. ¿Los profesores son mexicanos? Nuestros instructores hablan con acento latinoamericano y entienden el contexto educativo mexicano. ¿Tienen garantía? Sí, 10 días de garantía completa.",
            },
        ],
    },
    co: {
        h2: "Cursos de IA para Niños en Colombia: Inteligencia Artificial Online en Bogotá, Medellín y Todo el País",
        intro:
            "InnovaKids ofrece los mejores cursos de inteligencia artificial para niños en Colombia. Atendemos familias en Bogotá, Medellín, Cali, Barranquilla, Cartagena y todo el territorio nacional. Nuestros alumnos colombianos de 8 a 17 años aprenden a crear con IA en grupos exclusivos de 5 estudiantes, con clases en vivo y horarios flex.",
        sections: [
            {
                h3: "¿Por Qué los Niños Colombianos Deben Aprender IA?",
                text: "Colombia tiene una de las economías con mayor crecimiento digital de América del Sur. Medellín fue elegida como 'Ciudad del Año' por el NYT por su transformación tecnológica. Bogotá concentra el mayor número de startups tech del país. Los niños colombianos que dominen la inteligencia artificial tendrán acceso a oportunidades globales desde Bogotá, Medellín o Cali. El Ministerio TIC de Colombia está invirtiendo millones en formación digital: tu hijo puede estar a la vanguardia.",
            },
            {
                h3: "Clases de IA para Niños en Bogotá, Medellín, Cali y Más",
                text: "Todos nuestros cursos de IA para niños en Colombia son 100% online y en vivo. No importa si estás en Bogotá DC, Medellín, Cali, Barranquilla o en cualquier municipio colombiano: si tienes internet, tu hijo puede aprender. Los pagos se pueden hacer con Nequi, Daviplata, PSE, tarjeta de crédito o Mercado Pago. Aceptamos pesos colombianos (COP).",
            },
            {
                h3: "Proyectos Reales de Niños Colombianos con IA",
                text: "Nuestros alumnos colombianos han creado: cuentas de TikTok con arte generativo, apps para organizar sus tareas escolares, música original compuesta con IA y presentaciones para sus colegios. La metodología Vibe Coding es 100% práctica desde la primera clase. Las familias colombianas destacan la atención personalizada por el tamaño reducido de los grupos.",
            },
            {
                h3: "Preguntas: Cursos de IA para Niños en Colombia",
                text: "¿Aceptan pago con Nequi o Daviplata? Sí, aceptamos los principales medios de pago colombianos. ¿Los horarios se adaptan al huso horario Colombia (UTC-5)? Absolutamente, tenemos múltiples opciones. ¿Pueden los niños de municipios fuera de Bogotá o Medellín tomar las clases? Sí, solo necesitan internet. ¿Tienen garantía? 10 días de garantía total sin preguntas.",
            },
        ],
    },
    ar: {
        h2: "Cursos de IA para Chicos en Argentina: Inteligencia Artificial para Niños en Buenos Aires y Todo el País",
        intro:
            "InnovaKids es la escuela líder de inteligencia artificial para chicos en Argentina. Atendemos familias en Buenos Aires, Córdoba, Rosario, Mendoza, La Plata y todo el país. Nuestros alumnos argentinos de 8 a 17 años aprenden a crear con IA en grupos de máximo 5 chicos, con clases en vivo y metodología 100% práctica.",
        sections: [
            {
                h3: "¿Por Qué los Chicos Argentinos Necesitan Aprender Inteligencia Artificial?",
                text: "Argentina tiene una de las comunidades tech más vibrantes de América Latina. Buenos Aires es la capital startup de la región y Córdoba se está consolidando como hub de software. Los chicos argentinos que aprendan IA hoy tendrán acceso a trabajos remotos bien pagados en empresas globales desde los 18 años. El pensamiento computacional es la habilidad más demandada en el mercado laboral argentino del futuro.",
            },
            {
                h3: "Clases de IA para Chicos en Buenos Aires, Córdoba, Rosario y Más",
                text: "Ofrecemos clases de inteligencia artificial online para chicos en CABA, GBA, Córdoba, Rosario, Mendoza y todo el interior argentino. El pago se puede hacer con Mercado Pago, transferencia bancaria CBU o PayPal. Usamos el vocabulario argentino en nuestras clases: decimos 'chicos' no 'niños', y nuestros instructores conocen el contexto educativo argentino. Grupos de 5 chicos para máxima atención.",
            },
            {
                h3: "Resultados de Chicos Argentinos en InnovaKids",
                text: "Chicos de Buenos Aires, Córdoba y Rosario han creado sus primeras apps, arte digital para sus redes sociales y presentaciones para ferias de ciencias escolares usando inteligencia artificial. Padres argentinos nos dicen que sus hijos pasaron de consumir contenido a crearlo, y eso cambió su actitud frente al mundo digital.",
            },
            {
                h3: "Preguntas Frecuentes: IA para Chicos en Argentina",
                text: "¿Se puede pagar con Mercado Pago en pesos argentinos? Sí, aceptamos ARS con actualización del tipo de cambio mensual. ¿Los horarios funcionan para Buenos Aires y el interior? Tenemos turnos tarde y noche. ¿Sirve para chicos de entre 8 y 17 años? Sí, tenemos grupos separados por rango de edad. ¿Hay garantía? 10 días de garantía completa.",
            },
        ],
    },
    pe: {
        h2: "Cursos de IA para Niños en Perú: Clases de Inteligencia Artificial Online en Lima, Arequipa y Todo el País",
        intro:
            "InnovaKids es la academia de inteligencia artificial para niños más reconocida de Perú. Atendemos familias en Lima, Arequipa, Trujillo, Cusco, Piura y todo el territorio peruano. Nuestros alumnos peruanos de 8 a 17 años aprenden con IA en grupos de 5 con clases en vivo y pago con Yape y Plin.",
        sections: [
            {
                h3: "¿Por Qué los Niños Peruanos Deben Aprender IA Ahora?",
                text: "Perú es uno de los países con mayor crecimiento económico de América del Sur y Lima se está consolidando como hub de innovación tech. Empresas como Interbank, BCP y Belcorp están invirtiendo millones en transformación digital. Los niños peruanos que aprendan inteligencia artificial hoy serán los líderes tech del país en la próxima década. El Ministerio de Educación del Perú ya incluye habilidades digitales en el currículo nacional.",
            },
            {
                h3: "Clases de IA para Niños en Lima, Arequipa, Trujillo y Más",
                text: "Nuestros cursos de inteligencia artificial para niños en Perú son 100% online y en vivo. Da igual si estás en San Isidro, Miraflores, Surco (Lima), Arequipa, Trujillo, Cusco o cualquier provincia peruana: solo necesitas internet. Los pagos se hacen con Yape, Plin, tarjeta de crédito, PayPal o Mercado Pago. Grupos de máximo 5 niños peruanos por clase.",
            },
            {
                h3: "Proyectos de Niños Peruanos con Inteligencia Artificial",
                text: "Niños peruanos de Lima y Arequipa han creado sus primeras aplicaciones móviles, arte digital con Midjourney y música original con IA. Una estudiante de 12 años de Lima presentó su proyecto de IA en su colegio y ganó el primer lugar en la feria de ciencias. Eso es lo que logra InnovaKids: resultados concretos y memorables.",
            },
            {
                h3: "Preguntas Frecuentes: Cursos de IA para Niños en Perú",
                text: "¿Se puede pagar con Yape o Plin? Sí, son uno de nuestros medios de pago favoritos en Perú. ¿Los horarios funcionan para Lima y provincias? Sí, el huso horario Perú (UTC-5) está bien cubierto. ¿Pueden los niños de Arequipa, Trujillo o Cusco unirse? Sí, clases 100% online. ¿Hay garantía? 10 días de garantía sin complicaciones.",
            },
        ],
    },
    es: {
        h2: "Cursos de IA para Niños en España: Actividades Extraescolares de Inteligencia Artificial 2026",
        intro:
            "InnovaKids ofrece cursos de inteligencia artificial para niños en España, perfectos como actividad extraescolar para alumnos de 8 a 17 años en Madrid, Barcelona, Valencia, Sevilla, Bilbao y toda la Península. Clases online en vivo, grupos de 5 alumnos y pago con Bizum o tarjeta.",
        sections: [
            {
                h3: "¿Por Qué los Niños Españoles Deben Aprender IA Como Extraescolar?",
                text: "España aprobó la Estrategia Nacional de Inteligencia Artificial y empresas como Inditex, Telefónica y BBVA ya están implementando IA en todos sus procesos. Las universidades españolas más prestigiosas (UPM, UPC, Complutense) tienen ya grados y másteres de IA. Los niños que empiecen a aprender inteligencia artificial hoy como actividad extraescolar tendrán una ventaja enorme en el acceso a estas carreras del futuro. Es la extraescolar más valiosa del mercado español.",
            },
            {
                h3: "Clases de IA para Niños en Madrid, Barcelona, Valencia y Toda España",
                text: "Ofrecemos clases de inteligencia artificial para niños en toda España de forma online. Es el complemento perfecto para las actividades extraescolares de cualquier colegio madrileño, barcelonés o de cualquier ciudad. Los horarios se adaptan al calendario escolar español (septiembre a junio). El pago es fácil con Bizum, tarjeta bancaria española o PayPal en euros.",
            },
            {
                h3: "Qué Aprenden los Niños Españoles en Nuestros Cursos de IA",
                text: "Nuestros alumnos españoles de 8 a 17 años aprenden a usar ChatGPT, Midjourney, Suno AI y más herramientas para crear apps, arte digital, música y videojuegos. Es el complemento perfecto para el colegio: fomenta el pensamiento crítico, la creatividad y las competencias digitales que exige la LOMLOE. Varios padres españoles nos dicen que es la mejor actividad extraescolar que han encontrado.",
            },
            {
                h3: "Preguntas Frecuentes: IA para Niños en España",
                text: "¿Se puede pagar con Bizum? Sí, Bizum es uno de nuestros métodos favoritos para España. ¿Los horarios funcionan con el horario escolar español? Totalmente, tenemos tarde-noche (16:00-21:00 España). ¿Es compatible con otras extraescolares? Sí, solo son 10 clases en 5 semanas. ¿Hay garantía? 10 días de garantía, si no te convence te devolvemos el 100%.",
            },
        ],
    },
    us: {
        h2: "Clases de IA para Niños Latinos en USA: Cursos de Inteligencia Artificial en Español en Estados Unidos",
        intro:
            "InnovaKids es el curso de inteligencia artificial para niños latinos en USA más completo del mercado. Atendemos a familias hispanas en Miami, Los Angeles, Houston, New York, Chicago y todo Estados Unidos. Clases 100% en español para niños de 8 a 17 años que quieren aprender IA sin barreras del idioma.",
        sections: [
            {
                h3: "¿Por Qué los Niños Latinos en USA Deben Aprender IA?",
                text: "Los latinos son el grupo etario de mayor crecimiento en Estados Unidos y ya representan el 19% de los trabajadores tecnológicos. Sin embargo, hay una brecha: menos del 8% de los ingenieros tech en Silicon Valley son latinos. InnovaKids cierra esa brecha, formando a niños hispanos en las habilidades de IA que demanda el mercado tech americano, en el idioma con el que se sienten más cómodos: el español.",
            },
            {
                h3: "Clases de IA en Español para Niños Latinos en Miami, LA, Houston, New York y Más",
                text: "Damos clases de inteligencia artificial para niños latinos en todos los husos horarios de Estados Unidos, desde la costa Este (Miami, New York) hasta la costa Oeste (Los Angeles, San Francisco). El pago se hace con tarjeta de crédito americana, Zelle o PayPal en dólares USD. No hay barreras: las clases son 100% en español.",
            },
            {
                h3: "La Ventaja Bilingüe: IA en Español para Niños Hispanohablantes en USA",
                text: "Un niño latino que aprende IA en español tiene una ventaja única: puede trabajar y crear para dos de los mercados más grandes del mundo (EEUU y América Latina). Nuestros alumnos latinos en USA han creado apps bilingües, contenido en español e inglés para redes sociales, y prototipos de startups enfocadas en la comunidad hispana. Eso es diferenciación real en el mercado.",
            },
            {
                h3: "Preguntas: IA para Niños Latinos en Estados Unidos",
                text: "¿Las clases son en español? Sí, 100% en español. ¿Pueden pagar con Zelle? Sí, aceptamos Zelle, tarjeta de crédito americana y PayPal. ¿Los horarios funcionan en distintos time zones de USA? Sí, tenemos turnos para EST, CST y PST. ¿Tienen garantía? 10 días de garantía completa, sin preguntas.",
            },
        ],
    },
}

export function CountrySEOContent({ country }: CountrySEOContentProps) {
    const content = countryContent[country.code]

    // Fallback genérico para países sin contenido específico
    if (!content) {
        return (
            <section className="py-16 bg-background/50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto prose prose-invert">
                        <h2 className="text-3xl font-bold text-white mb-6">
                            Cursos de IA para {country.childTerm} en {country.name}: Innovación Digital Online
                        </h2>
                        <p className="text-gray-300 text-lg">
                            InnovaKids es la escuela #1 de inteligencia artificial para {country.childTerm} en {country.name}.
                            Grupos de máximo 5 alumnos, clases en vivo y garantía de 10 días. Tu hijo aprende a crear apps,
                            arte y música con IA en 5 semanas.
                        </p>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className="py-16 bg-background/50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">{content.h2}</h2>

                    <p className="text-gray-300 text-lg leading-relaxed mb-10 text-center max-w-3xl mx-auto">
                        {content.intro}
                    </p>

                    <div className="space-y-8">
                        {content.sections.map((section, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8">
                                <h3 className="text-xl md:text-2xl font-bold text-primary mb-4">{section.h3}</h3>
                                <p className="text-gray-300 leading-relaxed">{section.text}</p>
                            </div>
                        ))}
                    </div>

                    {/* Country CTA */}
                    <div className="mt-10 text-center p-6 bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/30 rounded-2xl">
                        <p className="text-white font-semibold text-lg mb-2">
                            {country.flag} ¿Listo para inscribir a tu hijo en {country.name}?
                        </p>
                        <p className="text-gray-400 text-sm">
                            Agenda una evaluación gratuita hoy. Sin compromisos. Garantía de 10 días.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
