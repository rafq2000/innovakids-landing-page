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
    ec: {
        h2: "IA para Niños en Ecuador: Cursos Online en Vivo 2026",
        intro:
            "InnovaKids forma niños ecuatorianos de 8 a 17 años en inteligencia artificial. Clases en vivo, grupos de 5 alumnos y pago directo en dólares americanos (USD). Ideal como curso vacacional o extraescolar todo el año.",
        sections: [
            {
                h3: "Por Qué Aprender IA en Ecuador",
                text: "Ecuador está viviendo una revolución digital acelerada. Ciudades como Quito, Guayaquil y Cuenca concentran cada vez más startups y centros de innovación tecnológica.\n\nLa ventaja de Ecuador: al usar dólar americano, tus hijos pueden trabajar para mercados globales sin sufrir devaluaciones. Aprender IA hoy les da acceso directo a oportunidades internacionales desde cualquier provincia del país.",
            },
            {
                h3: "Cómo Funcionan las Clases",
                text: "100% online y en vivo. Funciona perfecto como **curso vacacional** en febrero-marzo o julio-agosto, y también como actividad extracurricular durante el año escolar.\n\nPago en USD -- sin conversiones ni complicaciones. Aceptamos tarjeta de crédito/débito, PayPal y transferencia bancaria. Da igual si estás en Quito, Guayaquil, Cuenca o cualquier cantón.",
            },
            {
                h3: "Resultados Reales de Alumnos Ecuatorianos",
                text: "Niños ecuatorianos han creado apps funcionales para resolver problemas locales, arte digital publicado en redes sociales y música original compuesta con IA.\n\nLa metodología Vibe Coding permite que desde la primera clase tu hijo esté creando, no solo mirando. En 5 semanas construye un portafolio digital completo que puede presentar en su colegio o compartir con familia y amigos.",
            },
            {
                h3: "Preguntas Frecuentes en Ecuador",
                text: "**¿Se paga en dólares?** Sí, el precio está en USD -- sin conversión ni cargos extra.\n\n**¿Funciona como curso vacacional?** Absolutamente, muchas familias lo eligen para las vacaciones de la Sierra o de la Costa.\n\n**¿Los horarios se adaptan al huso horario Ecuador (UTC-5)?** Sí, tenemos múltiples turnos disponibles.\n\n**¿Tienen garantía?** 10 días de garantía completa. Si no te convence, devolvemos el 100%.",
            },
        ],
    },
    uy: {
        h2: "IA para Chiquilines en Uruguay: Clases Online en Vivo 2026",
        intro:
            "InnovaKids forma chiquilines uruguayos de 8 a 17 años en inteligencia artificial. Grupos de 5 alumnos, clases en vivo y pago con Mercado Pago en pesos uruguayos.",
        sections: [
            {
                h3: "Por Qué Aprender IA en Uruguay",
                text: "Uruguay lidera la conectividad digital en América Latina gracias al Plan Ceibal y una infraestructura de fibra óptica que llega a todo el país. Los chiquilines uruguayos ya nacen conectados.\n\nPero hay una diferencia enorme entre usar tecnología y crearla. InnovaKids les enseña a ser creadores: a programar con IA, generar arte, componer música y construir apps reales. Uruguay tiene el talento -- nosotros les damos las herramientas.",
            },
            {
                h3: "Cómo Funcionan las Clases",
                text: "100% online y en vivo. Con internet desde Montevideo, Punta del Este, Salto o cualquier departamento del interior, tu hijo puede participar.\n\nPagos con **Mercado Pago en UYU**, tarjeta de crédito/débito o PayPal. Grupos de máximo 5 alumnos para atención personalizada real.",
            },
            {
                h3: "Proyectos Reales",
                text: "Chiquilines uruguayos han creado videojuegos originales, aplicaciones para organizar tareas del liceo y arte digital que publicaron en sus redes.\n\nLo que más destacan las familias: el cambio de actitud. Pasan de consumir pantallas a crear con ellas. Eso es lo que hace la diferencia a largo plazo.",
            },
            {
                h3: "Preguntas Frecuentes en Uruguay",
                text: "**¿Se puede pagar en pesos uruguayos?** Sí, aceptamos UYU con Mercado Pago o tarjeta local.\n\n**¿Los horarios funcionan con el huso horario de Uruguay (UTC-3)?** Sí, tenemos turnos de tarde y noche adaptados.\n\n**¿Necesitan experiencia previa?** No, empezamos desde cero. Solo necesitan ganas de crear.\n\n**¿Hay garantía?** 10 días de garantía total sin preguntas.",
            },
        ],
    },
    cr: {
        h2: "IA para Niños en Costa Rica: Clases Online en Vivo 2026",
        intro:
            "InnovaKids forma niños ticos de 8 a 17 años en inteligencia artificial. Grupos de 5 alumnos, clases en vivo y pago con SINPE Móvil en colones.",
        sections: [
            {
                h3: "Por Qué Aprender IA en Costa Rica",
                text: "Costa Rica es el país centroamericano con mayor inversión en educación y tecnología. Intel, Amazon y Microsoft ya tienen operaciones importantes en el país, y la demanda de talento tech no para de crecer.\n\nLos ticos que dominen IA hoy tendrán acceso a empleos de clase mundial sin salir del país. InnovaKids les da esa ventaja competitiva desde los 8 años.",
            },
            {
                h3: "Cómo Funcionan las Clases",
                text: "Clases 100% online y en vivo. Desde San José, Heredia, Alajuela, Cartago o cualquier provincia, solo necesitas internet.\n\nPago fácil con **SINPE Móvil en colones (CRC)**, tarjeta de crédito/débito o PayPal. Sin complicaciones. Grupos de máximo 5 alumnos.",
            },
            {
                h3: "Resultados Reales",
                text: "Niños ticos han creado sus primeras aplicaciones funcionales, arte generativo para Instagram y proyectos de ciencias potenciados con IA.\n\nNuestra metodología es 100% práctica: desde la primera clase están creando, no solo escuchando teoría. En 5 semanas tienen un portafolio digital real.",
            },
            {
                h3: "Preguntas Frecuentes en Costa Rica",
                text: "**¿Se puede pagar con SINPE Móvil?** Sí, es uno de nuestros métodos de pago principales en Costa Rica.\n\n**¿Los horarios funcionan con el huso horario de Costa Rica (UTC-6)?** Sí, tenemos turnos adaptados.\n\n**¿Mi hijo necesita saber programar?** No, empezamos desde cero con Vibe Coding.\n\n**¿Tienen garantía?** 10 días de garantía completa. Si no te convence, devolvemos todo.",
            },
        ],
    },
    ve: {
        h2: "IA para Chamos en Venezuela: Clases Online en Vivo 2026",
        intro:
            "InnovaKids forma chamos venezolanos de 8 a 17 años en inteligencia artificial. Grupos de 5 alumnos, clases en vivo y pago en dólares (USD).",
        sections: [
            {
                h3: "Por Qué Aprender IA en Venezuela",
                text: "Venezuela tiene uno de los talentos humanos más brillantes de Latinoamérica. Miles de profesionales venezolanos trabajan en las mejores empresas tech del mundo.\n\nPero la oportunidad empieza temprano. Los chamos que aprendan IA hoy podrán generar ingresos en dólares desde cualquier ciudad del país, trabajando para mercados internacionales. Es la habilidad más valiosa que puedes darle a tu hijo en este momento.",
            },
            {
                h3: "Cómo Funcionan las Clases",
                text: "100% online y en vivo. Funciona desde Caracas, Maracaibo, Valencia, Barquisimeto o cualquier estado -- solo necesitas una conexión a internet estable.\n\nPago en **USD** por PayPal, Zelle o tarjeta de crédito internacional. Sin complicaciones cambiarias. Grupos de máximo 5 alumnos.",
            },
            {
                h3: "Resultados Reales",
                text: "Chamos venezolanos han creado aplicaciones, arte digital para redes sociales y prototipos de emprendimientos digitales usando IA.\n\nLo más valioso: aprenden habilidades que tienen demanda global inmediata. Un chamo de 14 años puede aprender a crear con IA hoy y estar generando valor para empresas internacionales en pocos años.",
            },
            {
                h3: "Preguntas Frecuentes en Venezuela",
                text: "**¿En qué moneda se paga?** En dólares americanos (USD), por PayPal, Zelle o tarjeta internacional.\n\n**¿Funciona con el internet de Venezuela?** Sí, nuestras clases están optimizadas para conexiones variables. Solo necesitas poder hacer videollamada.\n\n**¿Los horarios se adaptan al huso horario Venezuela (UTC-4)?** Sí, tenemos múltiples opciones.\n\n**¿Hay garantía?** 10 días de garantía total. Sin riesgo.",
            },
        ],
    },
    pa: {
        h2: "IA para Niños en Panamá: Clases Online en Vivo 2026",
        intro:
            "InnovaKids forma niños panameños de 8 a 17 años en inteligencia artificial. Grupos de 5 alumnos, clases en vivo y pago directo en dólares (USD) desde el Hub de las Américas.",
        sections: [
            {
                h3: "Por Qué Aprender IA en Panamá",
                text: "Panamá es el **Hub de las Américas** -- conecta negocios entre Norte y Sudamérica. La Zona Libre de Colón, el Canal y el sector financiero demandan cada vez más talento tecnológico.\n\nLos niños panameños que dominen IA hoy tendrán acceso a uno de los mercados laborales más dinámicos de la región. Ciudad de Panamá ya es sede de oficinas regionales de Google, Dell y Uber.",
            },
            {
                h3: "Cómo Funcionan las Clases",
                text: "100% online y en vivo. Desde Ciudad de Panamá, David, Colón o cualquier provincia, solo necesitas internet.\n\nPago en **USD** -- Panamá usa el dólar, así que no hay conversión. Aceptamos tarjeta de crédito/débito, PayPal y Yappy. Grupos de máximo 5 alumnos.",
            },
            {
                h3: "Proyectos Reales",
                text: "Niños panameños han construido apps funcionales, videojuegos originales y presentaciones con arte generativo para sus colegios.\n\nNuestra metodología Vibe Coding permite que cada niño avance a su ritmo dentro del grupo. En 5 semanas tienen un portafolio digital que demuestra lo que son capaces de crear.",
            },
            {
                h3: "Preguntas Frecuentes en Panamá",
                text: "**¿Se paga en dólares?** Sí, el precio es en USD sin conversión ni cargos extra.\n\n**¿Los horarios funcionan con el huso horario Panamá (UTC-5)?** Sí, tenemos turnos de tarde y noche.\n\n**¿Aceptan Yappy?** Sí, es uno de nuestros métodos disponibles en Panamá.\n\n**¿Tienen garantía?** 10 días de garantía completa sin preguntas.",
            },
        ],
    },
    do: {
        h2: "IA para Niños en República Dominicana: Clases Online 2026",
        intro:
            "InnovaKids forma niños dominicanos de 8 a 17 años en inteligencia artificial. Grupos de 5 alumnos, clases en vivo y pago en pesos dominicanos o dólares.",
        sections: [
            {
                h3: "Por Qué Aprender IA en República Dominicana",
                text: "República Dominicana tiene una de las economías de mayor crecimiento del Caribe. Santo Domingo se está posicionando como centro de nearshoring tecnológico para empresas estadounidenses.\n\nLos niños dominicanos que aprendan IA hoy podrán acceder a empleos remotos de alto valor sin emigrar. Es una inversión en su futuro con retorno concreto.",
            },
            {
                h3: "Cómo Funcionan las Clases",
                text: "Clases 100% online y en vivo. Desde Santo Domingo, Santiago, Punta Cana o cualquier provincia, solo necesitas internet.\n\nPago en **DOP (pesos dominicanos)** o **USD** -- como prefieras. Aceptamos tarjeta de crédito, PayPal y transferencia. Grupos de máximo 5 alumnos.",
            },
            {
                h3: "Resultados Reales",
                text: "Niños dominicanos han creado sus primeras aplicaciones móviles, arte digital y música original compuesta con inteligencia artificial.\n\nLas familias valoran especialmente que las clases son en español, con profesores latinoamericanos que entienden la cultura y el humor de los chicos. No es un curso gringo traducido -- es pensado para nosotros.",
            },
            {
                h3: "Preguntas Frecuentes en República Dominicana",
                text: "**¿Se puede pagar en pesos dominicanos?** Sí, aceptamos DOP y también USD.\n\n**¿Los horarios funcionan con el huso horario RD (UTC-4)?** Sí, tenemos opciones de tarde y noche.\n\n**¿Necesitan experiencia previa?** No, empezamos desde cero.\n\n**¿Hay garantía?** 10 días de garantía completa. Si no te convence, devolvemos todo.",
            },
        ],
    },
    hn: {
        h2: "IA para Niños en Honduras: Clases Online en Vivo 2026",
        intro:
            "InnovaKids forma niños hondureños de 8 a 17 años en inteligencia artificial. Grupos de 5 alumnos, clases en vivo y pago accesible desde Tegucigalpa, San Pedro Sula o cualquier departamento.",
        sections: [
            {
                h3: "Por Qué Aprender IA en Honduras",
                text: "Honduras está apostando fuerte por la transformación digital. Tegucigalpa y San Pedro Sula concentran cada vez más empresas de tecnología y call centers de nivel internacional.\n\nPero la oportunidad más grande es el trabajo remoto. Un niño hondureño que domine IA puede trabajar para empresas de USA o Europa sin salir del país. InnovaKids le da esa base desde temprano.",
            },
            {
                h3: "Cómo Funcionan las Clases",
                text: "100% online y en vivo. Desde Tegucigalpa, San Pedro Sula, La Ceiba o cualquier departamento -- solo necesitas internet.\n\nPago con tarjeta de crédito/débito, PayPal o transferencia en USD. Grupos de máximo 5 alumnos para atención personalizada.",
            },
            {
                h3: "Resultados Reales",
                text: "Niños hondureños han creado aplicaciones, videojuegos y arte digital que presentaron en sus colegios y compartieron en redes sociales.\n\nLa metodología es completamente práctica. No hay exámenes ni memorización: tu hijo aprende creando proyectos reales que puede mostrar con orgullo.",
            },
            {
                h3: "Preguntas Frecuentes en Honduras",
                text: "**¿Cómo se paga desde Honduras?** Con tarjeta de crédito/débito, PayPal o transferencia en USD.\n\n**¿Los horarios funcionan para Honduras (UTC-6)?** Sí, tenemos turnos adaptados a Centroamérica.\n\n**¿Mi hijo necesita experiencia previa?** No, partimos desde cero.\n\n**¿Hay garantía?** 10 días de garantía total. Sin riesgo.",
            },
        ],
    },
    sv: {
        h2: "IA para Niños en El Salvador: Clases Online en Vivo 2026",
        intro:
            "InnovaKids forma niños salvadoreños de 8 a 17 años en inteligencia artificial. Grupos de 5 alumnos, clases en vivo y pago en dólares americanos (USD).",
        sections: [
            {
                h3: "Por Qué Aprender IA en El Salvador",
                text: "El Salvador es una economía dolarizada con una apuesta fuerte por la innovación tecnológica. San Salvador se está posicionando como hub tech centroamericano.\n\nLos niños salvadoreños que aprendan IA hoy tendrán acceso directo a mercados internacionales en su propia moneda (USD). No necesitan emigrar para acceder a oportunidades de primer mundo.",
            },
            {
                h3: "Cómo Funcionan las Clases",
                text: "100% online y en vivo. Desde San Salvador, Santa Ana, San Miguel o cualquier departamento, solo necesitas internet.\n\nPago en **USD** -- sin conversiones porque El Salvador ya usa el dólar. Aceptamos tarjeta de crédito/débito y PayPal. Grupos de máximo 5 alumnos.",
            },
            {
                h3: "Resultados Reales",
                text: "Niños salvadoreños han creado apps funcionales, arte generativo y música original con inteligencia artificial.\n\nEn 10 clases (5 semanas) construyen un portafolio digital completo. Varios padres nos cuentan que sus hijos ahora quieren estudiar carreras tech -- el curso les abrió los ojos a un mundo de posibilidades.",
            },
            {
                h3: "Preguntas Frecuentes en El Salvador",
                text: "**¿Se paga en dólares?** Sí, precio directo en USD sin conversión.\n\n**¿Los horarios funcionan para El Salvador (UTC-6)?** Sí, tenemos turnos de tarde y noche para Centroamérica.\n\n**¿Necesitan computador especial?** No, cualquier computador con internet y navegador web funciona.\n\n**¿Hay garantía?** 10 días de garantía completa. Sin preguntas.",
            },
        ],
    },
    gt: {
        h2: "IA para Patojos en Guatemala: Clases Online en Vivo 2026",
        intro:
            "InnovaKids forma patojos guatemaltecos de 8 a 17 años en inteligencia artificial. Grupos de 5 alumnos, clases en vivo y pago en quetzales (GTQ) o dólares.",
        sections: [
            {
                h3: "Por Qué Aprender IA en Guatemala",
                text: "Guatemala tiene la economía más grande de Centroamérica y una población joven enorme. Ciudad de Guatemala y Xela concentran universidades y empresas tech que necesitan talento digital.\n\nLos patojos que aprendan IA ahora serán los primeros de su generación en dominar estas herramientas. Eso les da una ventaja competitiva enorme en el mercado laboral guatemalteco y regional.",
            },
            {
                h3: "Cómo Funcionan las Clases",
                text: "Clases 100% online y en vivo. Desde Ciudad de Guatemala, Xela, Antigua, Cobán o cualquier departamento, solo necesitas internet.\n\nPago en **quetzales (GTQ)** o **USD** -- como prefieras. Aceptamos tarjeta de crédito/débito y PayPal. Grupos de máximo 5 alumnos.",
            },
            {
                h3: "Resultados Reales",
                text: "Patojos guatemaltecos han creado videojuegos, aplicaciones y arte digital usando herramientas de inteligencia artificial.\n\nLo que más valoran las familias: los patojos dejan de ser consumidores pasivos de tecnología y se convierten en creadores. Esa transformación de mentalidad es el resultado más importante del curso.",
            },
            {
                h3: "Preguntas Frecuentes en Guatemala",
                text: "**¿Se puede pagar en quetzales?** Sí, aceptamos GTQ además de USD.\n\n**¿Los horarios funcionan para Guatemala (UTC-6)?** Sí, cubrimos Centroamérica con turnos de tarde y noche.\n\n**¿Sirve para patojos de 8 años?** Sí, tenemos grupos separados por edad para que cada patojo aprenda a su ritmo.\n\n**¿Hay garantía?** 10 días de garantía total sin preguntas.",
            },
        ],
    },
    py: {
        h2: "IA para Niños en Paraguay: Clases Online en Vivo 2026",
        intro:
            "InnovaKids forma niños paraguayos de 8 a 17 años en inteligencia artificial. Grupos de 5 alumnos, clases en vivo y pago en guaraníes (PYG) o dólares.",
        sections: [
            {
                h3: "Por Qué Aprender IA en Paraguay",
                text: "Paraguay tiene una de las poblaciones más jóvenes de Sudamérica y una economía en crecimiento sostenido. Asunción y Ciudad del Este están atrayendo inversión tech y centros de innovación.\n\nLos niños paraguayos que dominen IA hoy podrán acceder a trabajos remotos internacionales y emprender en el mercado digital. Es la habilidad con mayor retorno de inversión que puedes darle a tu hijo.",
            },
            {
                h3: "Cómo Funcionan las Clases",
                text: "100% online y en vivo. Desde Asunción, Ciudad del Este, Encarnación o cualquier departamento, solo necesitas internet.\n\nPago en **guaraníes (PYG)** o **USD** -- como te resulte más cómodo. Aceptamos tarjeta de crédito/débito, PayPal y transferencia. Grupos de máximo 5 alumnos.",
            },
            {
                h3: "Proyectos Reales",
                text: "Niños paraguayos han creado apps móviles, arte digital para redes sociales y presentaciones interactivas para sus colegios.\n\nEn solo 5 semanas, tu hijo construye un portafolio digital real. No es teoría: es práctica desde el primer día con herramientas de IA que las empresas más grandes del mundo ya están usando.",
            },
            {
                h3: "Preguntas Frecuentes en Paraguay",
                text: "**¿Se puede pagar en guaraníes?** Sí, aceptamos PYG además de USD.\n\n**¿Los horarios funcionan para Paraguay (UTC-4)?** Sí, tenemos turnos adaptados.\n\n**¿Necesitan experiencia previa en programación?** No, la metodología Vibe Coding empieza desde cero.\n\n**¿Hay garantía?** 10 días de garantía completa. Si no te convence, devolvemos el 100%.",
            },
        ],
    },
    bo: {
        h2: "IA para Niños en Bolivia: Clases Online en Vivo 2026",
        intro:
            "InnovaKids forma niños bolivianos de 8 a 17 años en inteligencia artificial. Grupos de 5 alumnos, clases en vivo y pago en bolivianos (BOB) o dólares.",
        sections: [
            {
                h3: "Por Qué Aprender IA en Bolivia",
                text: "Bolivia está dando pasos firmes hacia la digitalización. La Paz y Santa Cruz concentran el ecosistema emprendedor y las principales universidades del país.\n\nLos niños bolivianos que aprendan IA hoy tendrán una ventaja enorme: podrán trabajar para mercados internacionales desde Bolivia, accediendo a salarios en dólares con costo de vida local. InnovaKids les da esa base desde los 8 años.",
            },
            {
                h3: "Cómo Funcionan las Clases",
                text: "Clases 100% online y en vivo. Desde La Paz, Santa Cruz, Cochabamba, Sucre o cualquier departamento, solo necesitas internet.\n\nPago en **bolivianos (BOB)** o **USD** -- elige lo que te convenga. Aceptamos tarjeta de crédito/débito, PayPal y transferencia. Grupos de máximo 5 alumnos.",
            },
            {
                h3: "Resultados Reales",
                text: "Niños bolivianos han creado sus primeras aplicaciones, arte digital y composiciones musicales usando herramientas de IA.\n\nLa metodología es práctica desde la primera clase. Tu hijo no memoriza conceptos: crea proyectos reales que puede mostrar a su familia, amigos y profesores. Eso genera confianza y motivación genuina.",
            },
            {
                h3: "Preguntas Frecuentes en Bolivia",
                text: "**¿Se puede pagar en bolivianos?** Sí, aceptamos BOB y también USD.\n\n**¿Los horarios funcionan para Bolivia (UTC-4)?** Sí, tenemos opciones adaptadas al huso horario boliviano.\n\n**¿Mi hijo necesita saber programar?** No, empezamos desde cero con Vibe Coding.\n\n**¿Hay garantía?** 10 días de garantía total. Sin riesgo.",
            },
        ],
    },
    ni: {
        h2: "IA para Niños en Nicaragua: Clases Online en Vivo 2026",
        intro:
            "InnovaKids forma niños nicaragüenses de 8 a 17 años en inteligencia artificial. Grupos de 5 alumnos, clases en vivo y pago en córdobas (NIO) o dólares.",
        sections: [
            {
                h3: "Por Qué Aprender IA en Nicaragua",
                text: "Nicaragua tiene una generación joven con hambre de oportunidades. Managua y León concentran universidades y centros de formación tecnológica que están creciendo rápidamente.\n\nLa IA permite que un niño nicaragüense compita en igualdad de condiciones con cualquier niño del mundo. Solo necesita internet y las habilidades correctas. InnovaKids le da esas habilidades desde temprano.",
            },
            {
                h3: "Cómo Funcionan las Clases",
                text: "100% online y en vivo. Desde Managua, León, Granada, Estelí o cualquier departamento, solo necesitas conexión a internet.\n\nPago en **córdobas (NIO)** o **USD** -- como prefieras. Aceptamos tarjeta de crédito/débito y PayPal. Grupos de máximo 5 alumnos para atención personalizada.",
            },
            {
                h3: "Resultados Reales",
                text: "Niños nicaragüenses han creado aplicaciones móviles, videojuegos y arte digital con herramientas de inteligencia artificial.\n\nEl curso dura 5 semanas (10 clases) y al final tu hijo tiene un portafolio digital real. No es teoría abstracta: es crear desde el primer día cosas que puede tocar, mostrar y de las que sentirse orgulloso.",
            },
            {
                h3: "Preguntas Frecuentes en Nicaragua",
                text: "**¿Se puede pagar en córdobas?** Sí, aceptamos NIO además de USD.\n\n**¿Los horarios funcionan para Nicaragua (UTC-6)?** Sí, cubrimos Centroamérica con múltiples turnos.\n\n**¿Qué necesita mi hijo para empezar?** Un computador con internet y ganas de crear. Nada más.\n\n**¿Hay garantía?** 10 días de garantía completa sin preguntas.",
            },
        ],
    },
    pr: {
        h2: "IA para Niños en Puerto Rico: Clases Online en Vivo 2026",
        intro:
            "InnovaKids forma niños puertorriqueños de 8 a 17 años en inteligencia artificial. Clases 100% en español, grupos de 5 alumnos y pago en dólares (USD).",
        sections: [
            {
                h3: "Por Qué Aprender IA en Puerto Rico",
                text: "Puerto Rico tiene una ventaja única: acceso al mercado americano con cultura e idioma hispano. Los niños boricuas que dominen IA pueden crear para dos mundos simultáneamente.\n\nSan Juan y la zona metro concentran empresas tech y startups que buscan talento bilingüe. La **ventaja bilingüe** de Puerto Rico es un superpoder cuando se combina con habilidades de IA. Tu hijo puede crear apps, contenido y soluciones para 600 millones de hispanohablantes y 330 millones de angloparlantes.",
            },
            {
                h3: "Cómo Funcionan las Clases",
                text: "100% online y en vivo, en español. Desde San Juan, Ponce, Mayagüez, Bayamón o cualquier municipio de la isla, solo necesitas internet.\n\nPago en **USD** -- sin conversiones. Aceptamos tarjeta de crédito americana, PayPal y Zelle. Grupos de máximo 5 alumnos.",
            },
            {
                h3: "La Ventaja Bilingüe Boricua",
                text: "Un niño puertorriqueño que aprende IA en español tiene acceso a dos de los mercados más grandes del mundo. Puede crear contenido en inglés y español, desarrollar apps bilingües y entender la cultura de ambos lados.\n\nNuestros alumnos boricuas han creado proyectos que mezclan lo mejor de ambos mundos. Esa versatilidad cultural + habilidades tech es una combinación imbatible para el mercado laboral del futuro.",
            },
            {
                h3: "Preguntas Frecuentes en Puerto Rico",
                text: "**¿Las clases son en español?** Sí, 100% en español. Perfecto para familias que quieren que sus hijos dominen tech en su idioma.\n\n**¿Se paga en dólares?** Sí, precio en USD como en el mainland.\n\n**¿Aceptan Zelle?** Sí, Zelle, tarjeta americana y PayPal.\n\n**¿Hay garantía?** 10 días de garantía completa. Sin riesgo.",
            },
        ],
    },
    gq: {
        h2: "IA para Niños en Guinea Ecuatorial: Clases Online en Vivo 2026",
        intro:
            "InnovaKids forma niños ecuatoguineanos de 8 a 17 años en inteligencia artificial. El único país hispanohablante de África, con clases en español, grupos de 5 alumnos y pago en dólares (USD).",
        sections: [
            {
                h3: "Por Qué Aprender IA en Guinea Ecuatorial",
                text: "Guinea Ecuatorial es el único país de África donde el español es idioma oficial. Eso abre una puerta enorme: tus hijos pueden conectarse con todo el ecosistema tech hispanohablante global.\n\nMalabo y Bata están creciendo en conectividad digital. Los niños ecuatoguineanos que aprendan IA hoy serán pioneros en su país, con habilidades que les permitirán trabajar para mercados internacionales desde casa.",
            },
            {
                h3: "Cómo Funcionan las Clases",
                text: "100% online y en vivo, en español. Desde Malabo, Bata o cualquier punto del país con internet, tu hijo puede participar.\n\nPago en **USD** por tarjeta de crédito internacional o PayPal. Grupos de máximo 5 alumnos. El huso horario de Guinea Ecuatorial (UTC+1) es compatible con nuestros turnos de mañana.",
            },
            {
                h3: "Resultados Reales",
                text: "Nuestros alumnos han creado aplicaciones funcionales, arte digital y música original con herramientas de IA. Todo en español y con relevancia global.\n\nEn 10 clases (5 semanas), tu hijo construye un portafolio digital completo. Es la formación tech más accesible y efectiva disponible en español para familias en Guinea Ecuatorial.",
            },
            {
                h3: "Preguntas Frecuentes en Guinea Ecuatorial",
                text: "**¿Las clases son en español?** Sí, 100% en español -- somos una escuela hispanohablante.\n\n**¿Cómo se paga desde Guinea Ecuatorial?** Con tarjeta de crédito internacional o PayPal en USD.\n\n**¿El horario funciona con UTC+1?** Sí, nuestros turnos de mañana (hora Latinoamérica) coinciden con la tarde en Guinea Ecuatorial.\n\n**¿Hay garantía?** 10 días de garantía completa. Si no te convence, devolvemos el 100%.",
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
                        <p className="text-[11px] uppercase tracking-[0.28em] text-[#B5522F] font-semibold">
                            Guía local · {country.name}
                        </p>
                    </div>
                    <h2
                        className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.02] tracking-[-0.02em] font-normal mb-8 max-w-[28ch]"
                    >
                        Cursos de IA para <em className="italic text-[#B5522F]">{country.childTerm}</em> en {country.name}.
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
                    <p className="text-[11px] uppercase tracking-[0.28em] text-[#B5522F] font-semibold">
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
                                <span className="font-mono-accent text-[11px] tracking-[0.22em] text-[#B5522F] font-semibold">
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
                            {country.flag} ¿Listo para inscribir a tu hijo en <em className="italic text-[#B5522F]">{country.name}</em>?
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
