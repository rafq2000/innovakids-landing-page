export type CountryCode = "mx" | "co" | "ar" | "es" | "cl" | "pe" | "ec" | "uy" | "cr" | "ve" | "us" | "pa" | "do" | "hn" | "sv" | "gt" | "py" | "bo" | "ni" | "pr" | "gq"

export interface CountryConfig {
  code: CountryCode
  name: string
  demonym: string
  childTerm: string // "niños" vs "chicos" vs "chavales"
  currency: string
  currencySymbol: string
  priceUSD: number
  priceLocal: number
  priceDisplay: string
  reservationPrice: number
  reservationPriceDisplay: string
  whatsapp: string
  timezone: string
  mainCity: string
  otherCities: string[]
  locale: string
  hreflang: string
  tone: string
  keywords: string[]
  longTailKeywords: string[]
  paymentMethods: string[]
  flag: string
  metaTitle: string
  metaDescription: string
  heroSubtext: string
  faqPaymentAnswer: string
}

export const countriesConfig: Record<CountryCode, CountryConfig> = {
  cl: {
    code: "cl",
    name: "Chile",
    demonym: "chilenos",
    childTerm: "niños",
    currency: "CLP",
    currencySymbol: "$",
    priceUSD: 267,
    priceLocal: 250000,
    priceDisplay: "$250.000 CLP",
    reservationPrice: 25000,
    reservationPriceDisplay: "$25.000 CLP",
    whatsapp: "+56964754219",
    timezone: "America/Santiago",
    mainCity: "Santiago",
    otherCities: ["Viña del Mar", "Valparaíso", "Concepción", "La Serena"],
    locale: "es_CL",
    hreflang: "es-CL",
    tone: "Prepáralos para el futuro digital",
    keywords: [
      "curso de ia para niños chile",
      "cursos ia para adolescentes chile",
      "clases inteligencia artificial niños santiago"
    ],
    longTailKeywords: [
      "mejor curso online de inteligencia artificial para niños chilenos",
      "donde estudiar programacion con ia niños en chile"
    ],
    paymentMethods: ["Tarjeta de crédito", "Tarjeta de débito", "PayPal"],
    flag: "🇨🇱",
    metaTitle: "Curso de IA para Niños en Chile | InnovaKids",
    metaDescription: "El mejor curso online de Inteligencia Artificial para niños y adolescentes de 8 a 17 años en Chile. Grupos de 5 alumnos. Tu hijo crea apps reales en vivo.",
    heroSubtext: "Familias en Santiago, Viña del Mar, Concepción y todo Chile ya aprenden con InnovaKids.",
    faqPaymentAnswer: "Proceso global y seguro: paga en 1 clic con cualquier tarjeta de crédito, débito o PayPal. La reserva es de $27 USD (aprox. $25.000 CLP). Solo pagas el resto después de las 2 primeras clases."
  },
  mx: {
    code: "mx",
    name: "México",
    demonym: "mexicanos",
    childTerm: "niños",
    currency: "MXN",
    currencySymbol: "$",
    priceUSD: 267,
    priceLocal: 5400,
    priceDisplay: "$5,400 MXN",
    reservationPrice: 540,
    reservationPriceDisplay: "$540 MXN",
    whatsapp: "+56964754219",
    timezone: "America/Mexico_City",
    mainCity: "CDMX",
    otherCities: ["Guadalajara", "Monterrey", "Puebla", "Tijuana"],
    locale: "es_MX",
    hreflang: "es-MX",
    tone: "Dale una ventaja competitiva a tu hijo",
    keywords: [
      "curso de ia para niños mexico",
      "cursos ia para adolescentes mexico",
      "clases de IA para niños cdmx"
    ],
    longTailKeywords: [
      "mejor curso online de inteligencia artificial para niños mexicanos",
      "donde aprenden IA mis hijos en méxico"
    ],
    paymentMethods: ["Tarjeta de crédito", "Tarjeta de débito", "PayPal"],
    flag: "🇲🇽",
    metaTitle: "Curso de IA para Niños en México | InnovaKids",
    metaDescription: "El mejor curso online de Inteligencia Artificial para niños y adolescentes de 8 a 17 años en México. Grupos de 5 alumnos. Tu hijo crea apps reales en vivo.",
    heroSubtext: "Familias en Ciudad de México, Guadalajara, Monterrey y todo México ya aprenden con InnovaKids.",
    faqPaymentAnswer: "Proceso global y seguro: paga en 1 clic con cualquier tarjeta de crédito, débito o PayPal. La reserva es de $27 USD (aprox. $540 MXN). Solo pagas el resto después de las 2 primeras clases."
  },
  co: {
    code: "co",
    name: "Colombia",
    demonym: "colombianos",
    childTerm: "niños",
    currency: "COP",
    currencySymbol: "$",
    priceUSD: 267,
    priceLocal: 1120000,
    priceDisplay: "$1.120.000 COP",
    reservationPrice: 113000,
    reservationPriceDisplay: "$113.000 COP",
    whatsapp: "+56964754219",
    timezone: "America/Bogota",
    mainCity: "Bogotá",
    otherCities: ["Medellín", "Cali", "Barranquilla", "Cartagena"],
    locale: "es_CO",
    hreflang: "es-CO",
    tone: "Impulsa su creatividad y espíritu innovador",
    keywords: [
      "curso de ia para niños colombia",
      "cursos ia para adolescentes colombia",
      "clases de IA para niños bogota"
    ],
    longTailKeywords: [
      "mejor curso online de inteligencia artificial para niños colombianos",
      "donde estudiar ia niños en colombia"
    ],
    paymentMethods: ["Tarjeta de crédito", "Tarjeta de débito", "PayPal"],
    flag: "🇨🇴",
    metaTitle: "Curso de IA para Niños en Colombia | InnovaKids",
    metaDescription: "El mejor curso online de Inteligencia Artificial para niños y adolescentes de 8 a 17 años en Colombia. Grupos de 5 alumnos. Tu hijo crea apps reales en vivo.",
    heroSubtext: "Familias en Bogotá, Medellín, Cali, Barranquilla y toda Colombia ya aprenden con InnovaKids.",
    faqPaymentAnswer: "Proceso global y seguro: paga en 1 clic con cualquier tarjeta de crédito, débito o PayPal. La reserva es de $27 USD (aprox. $113.000 COP). Solo pagas el resto después de las 2 primeras clases."
  },
  ar: {
    code: "ar",
    name: "Argentina",
    demonym: "argentinos",
    childTerm: "chicos",
    currency: "ARS",
    currencySymbol: "$",
    priceUSD: 267,
    priceLocal: 285000,
    priceDisplay: "$285.000 ARS (Aprox)",
    reservationPrice: 29000,
    reservationPriceDisplay: "$29.000 ARS (Aprox)",
    whatsapp: "+56964754219",
    timezone: "America/Argentina/Buenos_Aires",
    mainCity: "Buenos Aires",
    otherCities: ["Córdoba", "Rosario", "Mendoza", "La Plata"],
    locale: "es_AR",
    hreflang: "es-AR",
    tone: "Potencia su pensamiento crítico creando tecnología",
    keywords: [
      "curso de ia para chicos argentina",
      "cursos ia para adolescentes argentina",
      "clases ia para chicos buenos aires"
    ],
    longTailKeywords: [
      "mejor curso online de inteligencia artificial para chicos argentinos",
      "donde aprenden ia los chicos en argentina"
    ],
    paymentMethods: ["Tarjeta de crédito", "Tarjeta de débito", "PayPal"],
    flag: "🇦🇷",
    metaTitle: "Curso de IA para Chicos en Argentina | InnovaKids",
    metaDescription: "El mejor curso online de Inteligencia Artificial para chicos y adolescentes de 8 a 17 años en Argentina. Grupos de 5 alumnos. Tu hijo crea apps reales en vivo.",
    heroSubtext: "Familias en Buenos Aires, Córdoba, Rosario y toda Argentina ya aprenden con InnovaKids.",
    faqPaymentAnswer: "Proceso global y seguro: paga en 1 clic con cualquier tarjeta de crédito o débito internacional. El cobro seguro en plataforma procesa sin fricción. La reserva es de $27 USD. Solo pagas el resto después de las 2 primeras clases."
  },
  pe: {
    code: "pe",
    name: "Perú",
    demonym: "peruanos",
    childTerm: "niños",
    currency: "PEN",
    currencySymbol: "S/",
    priceUSD: 267,
    priceLocal: 1000,
    priceDisplay: "S/ 1.000 PEN",
    reservationPrice: 100,
    reservationPriceDisplay: "S/ 100 PEN",
    whatsapp: "+56964754219",
    timezone: "America/Lima",
    mainCity: "Lima",
    otherCities: ["Arequipa", "Trujillo", "Cusco", "Piura"],
    locale: "es_PE",
    hreflang: "es-PE",
    tone: "Educación tecnológica de clase mundial",
    keywords: [
      "curso de ia para niños peru",
      "cursos ia para adolescentes peru",
      "clases de IA para niños lima"
    ],
    longTailKeywords: [
      "mejor curso online de inteligencia artificial para niños peruanos",
      "donde estudiar ia niños en peru"
    ],
    paymentMethods: ["Tarjeta de crédito", "Tarjeta de débito", "PayPal"],
    flag: "🇵🇪",
    metaTitle: "Curso de IA para Niños en Perú | InnovaKids",
    metaDescription: "El mejor curso online de Inteligencia Artificial para niños y adolescentes de 8 a 17 años en Perú. Grupos de 5 alumnos. Tu hijo crea apps reales en vivo.",
    heroSubtext: "Familias en Lima, Arequipa, Trujillo y todo Perú ya aprenden con InnovaKids.",
    faqPaymentAnswer: "Proceso global y seguro: paga en 1 clic con cualquier tarjeta de crédito, débito o PayPal. La reserva es de $27 USD (aprox. S/ 100). Solo pagas el resto después de las 2 primeras clases."
  },
  es: {
    code: "es",
    name: "España",
    demonym: "españoles",
    childTerm: "niños",
    currency: "EUR",
    currencySymbol: "€",
    priceUSD: 267,
    priceLocal: 245,
    priceDisplay: "245€",
    reservationPrice: 25,
    reservationPriceDisplay: "25€",
    whatsapp: "+56964754219",
    timezone: "Europe/Madrid",
    mainCity: "Madrid",
    otherCities: ["Barcelona", "Valencia", "Sevilla", "Bilbao"],
    locale: "es_ES",
    hreflang: "es-ES",
    tone: "Formación tecnológica de alta calidad",
    keywords: [
      "curso de ia para niños españa",
      "cursos ia para adolescentes madrid",
      "clases inteligencia artificial niños barcelona"
    ],
    longTailKeywords: [
      "mejor curso online de inteligencia artificial para niños españoles",
      "donde estudiar programacion con ia niños en españa"
    ],
    paymentMethods: ["Tarjeta de crédito", "Tarjeta de débito", "PayPal"],
    flag: "🇪🇸",
    metaTitle: "Curso de IA para Niños en España | InnovaKids",
    metaDescription: "El mejor curso online de Inteligencia Artificial para niños y adolescentes de 8 a 17 años en España. Grupos de 5 alumnos. Tu hijo crea apps reales en vivo.",
    heroSubtext: "Familias en Madrid, Barcelona, Valencia, Sevilla y toda España ya aprenden con InnovaKids.",
    faqPaymentAnswer: "Proceso global y seguro: paga en 1 clic con cualquier tarjeta de crédito, débito o PayPal. La reserva es de solo 25€. Tu hijo prueba las 2 primeras clases y solo si te convence pagas el resto (220€)."
  },
  ec: {
    code: "ec",
    name: "Ecuador",
    demonym: "ecuatorianos",
    childTerm: "niños",
    currency: "USD",
    currencySymbol: "$",
    priceUSD: 267,
    priceLocal: 267,
    priceDisplay: "$267 USD",
    reservationPrice: 27,
    reservationPriceDisplay: "$27 USD",
    whatsapp: "+56964754219",
    timezone: "America/Guayaquil",
    mainCity: "Quito",
    otherCities: ["Guayaquil", "Cuenca", "Ambato"],
    locale: "es_EC",
    hreflang: "es-EC",
    tone: "Innovación y tecnología al alcance de tus hijos",
    keywords: [
      "curso de ia para niños ecuador",
      "cursos ia para adolescentes quito"
    ],
    longTailKeywords: [
      "mejor curso online de inteligencia artificial para niños en guayaquil"
    ],
    paymentMethods: ["Tarjeta de crédito", "Tarjeta de débito", "PayPal"],
    flag: "🇪🇨",
    metaTitle: "Curso de IA para Niños en Ecuador | InnovaKids",
    metaDescription: "El mejor curso online de Inteligencia Artificial para niños y adolescentes de 8 a 17 años en Ecuador. Grupos de 5 alumnos. Tu hijo crea apps reales en vivo.",
    heroSubtext: "Familias en Quito, Guayaquil, Cuenca y todo Ecuador ya aprenden con InnovaKids.",
    faqPaymentAnswer: "Proceso global y seguro: paga en 1 clic con cualquier tarjeta de crédito, débito o PayPal. La reserva es de solo $27 USD. Después de las 2 primeras clases pagas el resto."
  },
  uy: {
    code: "uy",
    name: "Uruguay",
    demonym: "uruguayos",
    childTerm: "chiquilines",
    currency: "UYU",
    currencySymbol: "$",
    priceUSD: 267,
    priceLocal: 11500,
    priceDisplay: "$11.500 UYU",
    reservationPrice: 1160,
    reservationPriceDisplay: "$1.160 UYU",
    whatsapp: "+56964754219",
    timezone: "America/Montevideo",
    mainCity: "Montevideo",
    otherCities: ["Punta del Este", "Salto", "Ciudad de la Costa"],
    locale: "es_UY",
    hreflang: "es-UY",
    tone: "Educación de calidad para el futuro",
    keywords: [
      "curso de ia para niños uruguay",
      "cursos ia para adolescentes montevideo"
    ],
    longTailKeywords: [
      "mejor curso online de programacion con ia para niños en uruguay"
    ],
    paymentMethods: ["Tarjeta de crédito", "Tarjeta de débito", "PayPal"],
    flag: "🇺🇾",
    metaTitle: "Curso de IA para Niños en Uruguay | InnovaKids",
    metaDescription: "El mejor curso online de Inteligencia Artificial para niños y adolescentes de 8 a 17 años en Uruguay. Grupos de 5 alumnos. Tu hijo crea apps reales en vivo.",
    heroSubtext: "Familias en Montevideo, Punta del Este y todo Uruguay ya aprenden con InnovaKids.",
    faqPaymentAnswer: "Proceso global y seguro: paga en 1 clic con cualquier tarjeta de crédito, débito o PayPal. La reserva es de $27 USD (aprox $1.160 UYU). Después de las 2 primeras clases pagas el resto."
  },
  cr: {
    code: "cr",
    name: "Costa Rica",
    demonym: "ticos",
    childTerm: "niños",
    currency: "CRC",
    currencySymbol: "₡",
    priceUSD: 267,
    priceLocal: 137000,
    priceDisplay: "₡137.000 CRC",
    reservationPrice: 14000,
    reservationPriceDisplay: "₡14.000 CRC",
    whatsapp: "+56964754219",
    timezone: "America/Costa_Rica",
    mainCity: "San José",
    otherCities: ["Heredia", "Alajuela", "Cartago"],
    locale: "es_CR",
    hreflang: "es-CR",
    tone: "Líderes en educación tecnológica",
    keywords: [
      "curso de ia para niños costa rica",
      "cursos ia para adolescentes san jose"
    ],
    longTailKeywords: [
      "mejor curso online de inteligencia artificial para niños en costa rica"
    ],
    paymentMethods: ["Tarjeta de crédito", "Tarjeta de débito", "PayPal"],
    flag: "🇨🇷",
    metaTitle: "Curso de IA para Niños en Costa Rica | InnovaKids",
    metaDescription: "El mejor curso online de Inteligencia Artificial para niños y adolescentes de 8 a 17 años en Costa Rica. Grupos de 5 alumnos. Tu hijo crea apps reales en vivo.",
    heroSubtext: "Familias en San José, Heredia, Alajuela y toda Costa Rica ya aprenden con InnovaKids.",
    faqPaymentAnswer: "Proceso global y seguro: paga en 1 clic con cualquier tarjeta de crédito, débito o PayPal. La reserva es de $27 USD (aprox ₡14.000 CRC)."
  },
  ve: {
    code: "ve",
    name: "Venezuela",
    demonym: "venezolanos",
    childTerm: "chamos",
    currency: "USD",
    currencySymbol: "$",
    priceUSD: 267,
    priceLocal: 267,
    priceDisplay: "$267 USD",
    reservationPrice: 27,
    reservationPriceDisplay: "$27 USD",
    whatsapp: "+56964754219",
    timezone: "America/Caracas",
    mainCity: "Caracas",
    otherCities: ["Maracaibo", "Valencia", "Barquisimeto"],
    locale: "es_VE",
    hreflang: "es-VE",
    tone: "Tecnología global y oportunidades de futuro",
    keywords: [
      "curso de ia para niños venezuela",
      "cursos ia para adolescentes caracas"
    ],
    longTailKeywords: [
      "mejor curso online de inteligencia artificial para niños en venezuela"
    ],
    paymentMethods: ["Tarjeta de crédito", "Tarjeta de débito", "PayPal"],
    flag: "🇻🇪",
    metaTitle: "Curso de IA para Niños en Venezuela | InnovaKids",
    metaDescription: "El mejor curso online de Inteligencia Artificial para niños y adolescentes de 8 a 17 años en Venezuela. Grupos de 5 alumnos. Tu hijo crea apps reales en vivo.",
    heroSubtext: "Familias en Caracas, Maracaibo, Valencia y toda Venezuela ya aprenden con InnovaKids.",
    faqPaymentAnswer: "Proceso global y seguro: paga en 1 clic con cualquier tarjeta de crédito o débito internacional. Procesamos el cobro de forma segura y sin fricción. La reserva es de $27 USD."
  },
  us: {
    code: "us",
    name: "Estados Unidos",
    demonym: "latinos",
    childTerm: "niños",
    currency: "USD",
    currencySymbol: "$",
    priceUSD: 267,
    priceLocal: 267,
    priceDisplay: "$267 USD",
    reservationPrice: 27,
    reservationPriceDisplay: "$27 USD",
    whatsapp: "+56964754219",
    timezone: "America/New_York",
    mainCity: "Miami",
    otherCities: ["Los Angeles", "Houston", "New York", "Chicago"],
    locale: "es_US",
    hreflang: "es-US",
    tone: "Vibe Coding: La ventaja bilingüe y tecnológica",
    keywords: [
      "curso de ia para niños latinos usa",
      "cursos ia para adolescentes español miami"
    ],
    longTailKeywords: [
      "mejor curso online de inteligencia artificial para niños hispanos en estados unidos"
    ],
    paymentMethods: ["Tarjeta de crédito", "Tarjeta de débito de USA", "PayPal"],
    flag: "🇺🇸",
    metaTitle: "Curso de IA para Niños en USA | InnovaKids",
    metaDescription: "El mejor curso online de Inteligencia Artificial en español para niños y adolescentes de 8 a 17 años en USA. Grupos de 5 alumnos. Tu hijo crea apps reales en vivo.",
    heroSubtext: "Familias latinas en Miami, California, Texas y todo USA ya aprenden con InnovaKids.",
    faqPaymentAnswer: "Proceso global y seguro: paga en 1 clic con cualquier tarjeta de crédito, débito de USA o PayPal. La reserva es de $27 USD."
  },
  pa: {
    code: "pa",
    name: "Panamá",
    demonym: "panameños",
    childTerm: "niños",
    currency: "USD",
    currencySymbol: "$",
    priceUSD: 267,
    priceLocal: 267,
    priceDisplay: "$267 USD",
    reservationPrice: 27,
    reservationPriceDisplay: "$27 USD",
    whatsapp: "+56964754219",
    timezone: "America/Panama",
    mainCity: "Ciudad de Panamá",
    otherCities: ["Colón", "David", "Santiago"],
    locale: "es_PA",
    hreflang: "es-PA",
    tone: "Innovación desde el Hub de las Américas",
    keywords: [
      "curso de ia para niños panama",
      "cursos ia para adolescentes panama"
    ],
    longTailKeywords: [
      "mejor curso online de inteligencia artificial para niños en panama"
    ],
    paymentMethods: ["Tarjeta de crédito", "Tarjeta de débito", "PayPal"],
    flag: "🇵🇦",
    metaTitle: "Curso de IA para Niños en Panamá | InnovaKids",
    metaDescription: "El mejor curso online de Inteligencia Artificial para niños y adolescentes de 8 a 17 años en Panamá. Grupos de 5 alumnos. Tu hijo crea apps reales en vivo.",
    heroSubtext: "Familias en Ciudad de Panamá, Colón y todo el país ya aprenden con InnovaKids.",
    faqPaymentAnswer: "Proceso global y seguro: paga en 1 clic con cualquier tarjeta de crédito, débito o PayPal. La reserva es de $27 USD."
  },
  do: {
    code: "do",
    name: "República Dominicana",
    demonym: "dominicanos",
    childTerm: "niños",
    currency: "DOP",
    currencySymbol: "RD$",
    priceUSD: 267,
    priceLocal: 15800,
    priceDisplay: "RD$ 15,800",
    reservationPrice: 1600,
    reservationPriceDisplay: "RD$ 1,600",
    whatsapp: "+56964754219",
    timezone: "America/Santo_Domingo",
    mainCity: "Santo Domingo",
    otherCities: ["Santiago de los Caballeros", "Punta Cana", "Puerto Plata"],
    locale: "es_DO",
    hreflang: "es-DO",
    tone: "Futuro tecnológico para el Caribe",
    keywords: [
      "curso de ia para niños republica dominicana",
      "cursos ia para adolescentes santo domingo"
    ],
    longTailKeywords: [
      "mejor curso online de inteligencia artificial para niños en republica dominicana"
    ],
    paymentMethods: ["Tarjeta de crédito", "Tarjeta de débito", "PayPal"],
    flag: "🇩🇴",
    metaTitle: "Curso de IA para Niños en R. Dominicana | InnovaKids",
    metaDescription: "El mejor curso online de Inteligencia Artificial para niños y adolescentes de 8 a 17 años en República Dominicana. Grupos de 5 alumnos. Tu hijo crea apps reales en vivo.",
    heroSubtext: "Familias en Santo Domingo, Santiago y todo el país ya aprenden con InnovaKids.",
    faqPaymentAnswer: "Proceso global y seguro: paga en 1 clic con cualquier tarjeta de crédito, débito o PayPal. La reserva es de $27 USD."
  },
  hn: {
    code: "hn",
    name: "Honduras",
    demonym: "hondureños",
    childTerm: "niños",
    currency: "HNL",
    currencySymbol: "L",
    priceUSD: 267,
    priceLocal: 6600,
    priceDisplay: "L 6,600",
    reservationPrice: 660,
    reservationPriceDisplay: "L 660",
    whatsapp: "+56964754219",
    timezone: "America/Tegucigalpa",
    mainCity: "Tegucigalpa",
    otherCities: ["San Pedro Sula", "La Ceiba", "Choluteca"],
    locale: "es_HN",
    hreflang: "es-HN",
    tone: "Oportunidades globales desde Honduras",
    keywords: [
      "curso de ia para niños honduras",
      "cursos ia para adolescentes honduras"
    ],
    longTailKeywords: [
      "mejor curso online de inteligencia artificial para niños en honduras"
    ],
    paymentMethods: ["Tarjeta de crédito", "Tarjeta de débito", "PayPal"],
    flag: "🇭🇳",
    metaTitle: "Curso de IA para Niños en Honduras | InnovaKids",
    metaDescription: "El mejor curso online de Inteligencia Artificial para niños y adolescentes de 8 a 17 años en Honduras. Grupos de 5 alumnos. Tu hijo crea apps reales en vivo.",
    heroSubtext: "Familias en Tegucigalpa, San Pedro Sula y todo el país ya aprenden con InnovaKids.",
    faqPaymentAnswer: "Proceso global y seguro: paga en 1 clic con cualquier tarjeta de crédito, débito o PayPal. La reserva es de $27 USD."
  },
  sv: {
    code: "sv",
    name: "El Salvador",
    demonym: "salvadoreños",
    childTerm: "niños",
    currency: "USD",
    currencySymbol: "$",
    priceUSD: 267,
    priceLocal: 267,
    priceDisplay: "$267 USD",
    reservationPrice: 27,
    reservationPriceDisplay: "$27 USD",
    whatsapp: "+56964754219",
    timezone: "America/El_Salvador",
    mainCity: "San Salvador",
    otherCities: ["Santa Ana", "San Miguel", "Santa Tecla"],
    locale: "es_SV",
    hreflang: "es-SV",
    tone: "El futuro es tech en El Salvador",
    keywords: [
      "curso de ia para niños el salvador",
      "cursos ia para adolescentes san salvador"
    ],
    longTailKeywords: [
      "mejor curso online de inteligencia artificial para niños en el salvador"
    ],
    paymentMethods: ["Tarjeta de crédito", "Tarjeta de débito", "PayPal"],
    flag: "🇸🇻",
    metaTitle: "Curso de IA para Niños en El Salvador | InnovaKids",
    metaDescription: "El mejor curso online de Inteligencia Artificial para niños y adolescentes de 8 a 17 años en El Salvador. Grupos de 5 alumnos. Tu hijo crea apps reales en vivo.",
    heroSubtext: "Familias en San Salvador, Santa Ana y todo el país ya aprenden con InnovaKids.",
    faqPaymentAnswer: "Proceso global y seguro: paga en 1 clic con cualquier tarjeta de crédito, débito o PayPal. La reserva es de $27 USD."
  },
  gt: {
    code: "gt",
    name: "Guatemala",
    demonym: "guatemaltecos",
    childTerm: "patojos",
    currency: "GTQ",
    currencySymbol: "Q",
    priceUSD: 267,
    priceLocal: 2000,
    priceDisplay: "Q 2,000",
    reservationPrice: 200,
    reservationPriceDisplay: "Q 200",
    whatsapp: "+56964754219",
    timezone: "America/Guatemala",
    mainCity: "Ciudad de Guatemala",
    otherCities: ["Quetzaltenango", "Escuintla", "Antigua"],
    locale: "es_GT",
    hreflang: "es-GT",
    tone: "Desarrolla el talento chapín",
    keywords: [
      "curso de ia para niños guatemala",
      "cursos ia para adolescentes guatemala"
    ],
    longTailKeywords: [
      "mejor curso online de inteligencia artificial para niños en guatemala"
    ],
    paymentMethods: ["Tarjeta de crédito", "Tarjeta de débito", "PayPal"],
    flag: "🇬🇹",
    metaTitle: "Curso de IA para Niños en Guatemala | InnovaKids",
    metaDescription: "El mejor curso online de Inteligencia Artificial para niños y adolescentes de 8 a 17 años en Guatemala. Grupos de 5 alumnos. Tu hijo crea apps reales en vivo.",
    heroSubtext: "Familias en Ciudad de Guatemala, Xela y todo el país ya aprenden con InnovaKids.",
    faqPaymentAnswer: "Proceso global y seguro: paga en 1 clic con cualquier tarjeta de crédito, débito o PayPal. La reserva es de $27 USD."
  },
  py: {
    code: "py",
    name: "Paraguay",
    demonym: "paraguayos",
    childTerm: "niños",
    currency: "PYG",
    currencySymbol: "₲",
    priceUSD: 267,
    priceLocal: 2000000,
    priceDisplay: "₲ 2.000.000",
    reservationPrice: 200000,
    reservationPriceDisplay: "₲ 200.000",
    whatsapp: "+56964754219",
    timezone: "America/Asuncion",
    mainCity: "Asunción",
    otherCities: ["Ciudad del Este", "Encarnación", "Luque"],
    locale: "es_PY",
    hreflang: "es-PY",
    tone: "Tecnología sin fronteras en Paraguay",
    keywords: [
      "curso de ia para niños paraguay",
      "cursos ia para adolescentes paraguay"
    ],
    longTailKeywords: [
      "mejor curso online de inteligencia artificial para niños en paraguay"
    ],
    paymentMethods: ["Tarjeta de crédito", "Tarjeta de débito", "PayPal"],
    flag: "🇵🇾",
    metaTitle: "Curso de IA para Niños en Paraguay | InnovaKids",
    metaDescription: "El mejor curso online de Inteligencia Artificial para niños y adolescentes de 8 a 17 años en Paraguay. Grupos de 5 alumnos. Tu hijo crea apps reales en vivo.",
    heroSubtext: "Familias en Asunción, Ciudad del Este y todo el país ya aprenden con InnovaKids.",
    faqPaymentAnswer: "Proceso global y seguro: paga en 1 clic con cualquier tarjeta de crédito, débito o PayPal. La reserva es de $27 USD."
  },
  bo: {
    code: "bo",
    name: "Bolivia",
    demonym: "bolivianos",
    childTerm: "niños",
    currency: "BOB",
    currencySymbol: "Bs",
    priceUSD: 267,
    priceLocal: 1850,
    priceDisplay: "Bs 1.850",
    reservationPrice: 185,
    reservationPriceDisplay: "Bs 185",
    whatsapp: "+56964754219",
    timezone: "America/La_Paz",
    mainCity: "La Paz",
    otherCities: ["Santa Cruz de la Sierra", "Cochabamba", "El Alto"],
    locale: "es_BO",
    hreflang: "es-BO",
    tone: "Impulsando el talento en Bolivia",
    keywords: [
      "curso de ia para niños bolivia",
      "cursos ia para adolescentes bolivia"
    ],
    longTailKeywords: [
      "mejor curso online de inteligencia artificial para niños en bolivia"
    ],
    paymentMethods: ["Tarjeta de crédito", "Tarjeta de débito", "PayPal"],
    flag: "🇧🇴",
    metaTitle: "Curso de IA para Niños en Bolivia | InnovaKids",
    metaDescription: "El mejor curso online de Inteligencia Artificial para niños y adolescentes de 8 a 17 años en Bolivia. Grupos de 5 alumnos. Tu hijo crea apps reales en vivo.",
    heroSubtext: "Familias en La Paz, Santa Cruz y todo el país ya aprenden con InnovaKids.",
    faqPaymentAnswer: "Proceso global y seguro: paga en 1 clic con cualquier tarjeta de crédito, débito o PayPal. La reserva es de $27 USD."
  },
  ni: {
    code: "ni",
    name: "Nicaragua",
    demonym: "nicaragüenses",
    childTerm: "niños",
    currency: "NIO",
    currencySymbol: "C$",
    priceUSD: 267,
    priceLocal: 9800,
    priceDisplay: "C$ 9,800",
    reservationPrice: 980,
    reservationPriceDisplay: "C$ 980",
    whatsapp: "+56964754219",
    timezone: "America/Managua",
    mainCity: "Managua",
    otherCities: ["León", "Masaya", "Matagalpa"],
    locale: "es_NI",
    hreflang: "es-NI",
    tone: "Futuro digital en Nicaragua",
    keywords: [
      "curso de ia para niños nicaragua",
      "cursos ia para adolescentes nicaragua"
    ],
    longTailKeywords: [
      "mejor curso online de inteligencia artificial para niños en nicaragua"
    ],
    paymentMethods: ["Tarjeta de crédito", "Tarjeta de débito", "PayPal"],
    flag: "🇳🇮",
    metaTitle: "Curso de IA para Niños en Nicaragua | InnovaKids",
    metaDescription: "El mejor curso online de Inteligencia Artificial para niños y adolescentes de 8 a 17 años en Nicaragua. Grupos de 5 alumnos. Tu hijo crea apps reales en vivo.",
    heroSubtext: "Familias en Managua, León y todo el país ya aprenden con InnovaKids.",
    faqPaymentAnswer: "Proceso global y seguro: paga en 1 clic con cualquier tarjeta de crédito, débito o PayPal. La reserva es de $27 USD."
  },
  pr: {
    code: "pr",
    name: "Puerto Rico",
    demonym: "puertorriqueños",
    childTerm: "niños",
    currency: "USD",
    currencySymbol: "$",
    priceUSD: 267,
    priceLocal: 267,
    priceDisplay: "$267 USD",
    reservationPrice: 27,
    reservationPriceDisplay: "$27 USD",
    whatsapp: "+56964754219",
    timezone: "America/Puerto_Rico",
    mainCity: "San Juan",
    otherCities: ["Bayamón", "Carolina", "Ponce"],
    locale: "es_PR",
    hreflang: "es-PR",
    tone: "Innovación caribeña y global",
    keywords: [
      "curso de ia para niños puerto rico",
      "cursos ia para adolescentes pr"
    ],
    longTailKeywords: [
      "mejor curso online de inteligencia artificial para niños en puerto rico"
    ],
    paymentMethods: ["Tarjeta de crédito", "Tarjeta de débito", "PayPal"],
    flag: "🇵🇷",
    metaTitle: "Curso de IA para Niños en Puerto Rico | InnovaKids",
    metaDescription: "El mejor curso online de Inteligencia Artificial para niños y adolescentes de 8 a 17 años en Puerto Rico. Grupos de 5 alumnos. Tu hijo crea apps reales en vivo.",
    heroSubtext: "Familias en San Juan, Bayamón y toda la isla ya aprenden con InnovaKids.",
    faqPaymentAnswer: "Proceso global y seguro: paga en 1 clic con cualquier tarjeta de crédito, débito o PayPal. La reserva es de $27 USD."
  },
  gq: {
    code: "gq",
    name: "Guinea Ecuatorial",
    demonym: "ecuatoguineanos",
    childTerm: "niños",
    currency: "XAF",
    currencySymbol: "FCFA",
    priceUSD: 267,
    priceLocal: 160000,
    priceDisplay: "160.000 FCFA",
    reservationPrice: 16000,
    reservationPriceDisplay: "16.000 FCFA",
    whatsapp: "+56964754219",
    timezone: "Africa/Malabo",
    mainCity: "Malabo",
    otherCities: ["Bata", "Ebebiyín"],
    locale: "es_GQ",
    hreflang: "es-GQ",
    tone: "Conectando África con el futuro",
    keywords: [
      "curso de ia para niños guinea ecuatorial",
      "cursos ia para adolescentes malabo"
    ],
    longTailKeywords: [
      "mejor curso online de inteligencia artificial para niños en guinea ecuatorial"
    ],
    paymentMethods: ["Tarjeta de crédito", "Tarjeta de débito", "PayPal"],
    flag: "🇬🇶",
    metaTitle: "Curso de IA para Niños en Guinea Ecuatorial | InnovaKids",
    metaDescription: "El mejor curso online de Inteligencia Artificial para niños y adolescentes de 8 a 17 años en Guinea Ecuatorial. Grupos de 5 alumnos. Tu hijo crea apps reales en vivo.",
    heroSubtext: "Familias en Malabo, Bata y todo el país ya aprenden con InnovaKids.",
    faqPaymentAnswer: "Proceso global y seguro: paga en 1 clic con cualquier tarjeta de crédito internacional, débito o PayPal. La reserva es de $27 USD."
  }
}

export const getCountryConfig = (code: CountryCode): CountryConfig => {
  return countriesConfig[code]
}

export const getAllCountryCodes = (): CountryCode[] => {
  return Object.keys(countriesConfig) as CountryCode[]
}
