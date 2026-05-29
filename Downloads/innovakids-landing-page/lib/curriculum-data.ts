/**
 * Single source of truth para el currículum InnovaKids.
 * Estructura: Nivel 1 (Explorer) + Nivel 2 (Maker: 5 core + 6 tracks)
 */

/* ─── NIVEL 1 · VIBE EXPLORER ────────────────────────── */

export const EXPLORER_CLASSES = [
  { num: "01", title: "Vibe IA: Tu nuevo superpoder", desc: "Fundamentos de la IA generativa." },
  { num: "02", title: "Prompt Engineering", desc: "Estructura de prompts efectivos." },
  { num: "03", title: "Vibe Voice", desc: "Clonación de voz y narración." },
  { num: "04", title: "Vibe Music", desc: "Composición musical con IA." },
  { num: "05", title: "Generative Art I", desc: "De la imaginación a la imagen." },
  { num: "06", title: "Generative Art II", desc: "Storytelling visual consistente." },
  { num: "07", title: "Vibe Coding", desc: "Programación de videojuegos con IA." },
  { num: "08", title: "Vibe Study", desc: "Hackea tu escuela." },
  { num: "09", title: "Cyber Ethics", desc: "Deepfakes y seguridad digital." },
  { num: "10", title: "The Vibe Project", desc: "Presentación final de identidad." },
] as const

/* ─── NIVEL 2 · VIBE MAKER — 5 MISIONES CORE ─────────── */

export const MAKER_CORE = [
  {
    num: "01",
    title: "Setup Day · Tu taller listo en 60 min",
    desc: "Cuentas y herramientas listas, todos juntos, sin frustración.",
    loot: "Perfiles activos + Space vacío + cuenta Vercel + Cursor instalado.",
  },
  {
    num: "02",
    title: "Mi Primera App · Sale al mundo hoy",
    desc: "Página personal generada con v0.app, desplegada en Vercel en menos de 60 min.",
    loot: "Página pública en Vercel + backup en HF Space.",
  },
  {
    num: "03",
    title: "Tu Primer Bot · Que sepa lo que TÚ sabes",
    desc: "Bot conversacional con tu pasión, hosteado gratis con cerebro Groq.",
    loot: "Bot público sobre tu pasión con respuesta en menos de 2 s.",
  },
  {
    num: "04",
    title: "Automatización Diaria · n8n + IA",
    desc: "Workflow que cada día te manda algo útil al celular, generado por IA.",
    loot: "Workflow corriendo todos los días, mensaje personalizado al celular.",
  },
  {
    num: "05",
    title: "Eligiendo Tu Track · Plan personal",
    desc: "El alumno elige su perfil y mapea las 5 misiones que va a hacer.",
    loot: "Plan personal de 5 misiones del track elegido + proyecto final definido.",
  },
] as const

/* ─── NIVEL 2 · 6 TRACKS ESPECIALIZADOS ──────────────── */

export interface Track {
  id: string
  name: string
  subtitle: string
  color: string
  audience: string
  finalProject: string
  missions: { num: string; title: string; desc: string; loot: string }[]
}

export const TRACKS: Track[] = [
  {
    id: "estudio",
    name: "Track Estudio",
    subtitle: "Hackea tu colegio",
    color: "#2E7D6B",
    audience: "Alumno 11-17 que quiere optimizar sus notas.",
    finalProject: "Copiloto de estudio: bot personal + transcriptor de clases + flashcards + dashboard de progreso.",
    missions: [
      { num: "06", title: "Flashcard Factory", desc: "App que toma PDF/foto y genera flashcards estilo Anki.", loot: "App pública + 50 flashcards de su materia más difícil." },
      { num: "07", title: "Audio a Apuntes", desc: "Graba la clase → transcribe → resume → manda al celular.", loot: "Bot Telegram que convierte audio en apuntes." },
      { num: "08", title: "Quiz Generator Pro", desc: "Cualquier material → cuestionario tipo prueba real.", loot: "App pública con quiz de 20 preguntas." },
      { num: "09", title: "Mapa Mental Auto", desc: "Texto largo → mapa mental visual interactivo.", loot: "3 mapas mentales exportados de las materias más difíciles." },
      { num: "10", title: "Dashboard de Estudio", desc: "Conecta Calendar y Drive, ve tu progreso con IA.", loot: "Dashboard en Vercel con resumen IA cada domingo." },
    ],
  },
  {
    id: "emprender",
    name: "Track Emprender",
    subtitle: "Tu primer negocio",
    color: "#C96342",
    audience: "Alumno 12-17 con idea de negocio o ganas de tenerla.",
    finalProject: "Negocio online completo: landing + catálogo + bot de ventas + automatización + redes sociales con IA.",
    missions: [
      { num: "06", title: "Landing de Venta", desc: "Página que convierte: hero, beneficios, CTA, formulario.", loot: "Landing pública en Vercel con formulario funcionando." },
      { num: "07", title: "Catálogo de Productos", desc: "Fotos generadas por IA y descripciones con tu tono.", loot: "Catálogo online con 10+ productos listos." },
      { num: "08", title: "Bot de Ventas Telegram", desc: "Bot que atiende clientes 24/7: responde, toma pedidos, confirma.", loot: "Bot vivo que cualquiera puede usar para comprar." },
      { num: "09", title: "Auto-Pilot Pedidos", desc: "Pide → recibo + planilla + aviso, todo automático.", loot: "Sistema completo: pide → todo se gestiona solo." },
      { num: "10", title: "Redes Sociales con IA", desc: "Posts para Instagram/TikTok con copy + imagen, programados.", loot: "Calendario de 30 posts listos para publicarse." },
    ],
  },
  {
    id: "video",
    name: "Track Video",
    subtitle: "Creador de contenido",
    color: "#4A3B8C",
    audience: "Alumno 11-17 que ve mucho contenido y quiere crearlo.",
    finalProject: "Mini-estudio de video con IA: voz clonada + imágenes + música original + canal publicado.",
    missions: [
      { num: "06", title: "Guion + Storyboard con IA", desc: "De idea a guion y storyboard visual en 60 min.", loot: "Guion + storyboard de 1 min listos para producir." },
      { num: "07", title: "Voz Clonada + Narración", desc: "Clona tu voz una vez, narra cualquier guion.", loot: "Pack de 5 narraciones con tu voz personalizada." },
      { num: "08", title: "Imagen + Video Generado", desc: "Imágenes generadas → video con efectos cinematográficos.", loot: "Video de 60 s con imágenes generadas y narración." },
      { num: "09", title: "Música + Mezcla Final", desc: "Música original con IA → mezcla con narración.", loot: "Video final con voz + música + imágenes." },
      { num: "10", title: "Publicación Automatizada", desc: "Subir videos a YouTube/TikTok automáticamente.", loot: "Canal con 3 videos publicados automáticamente." },
    ],
  },
  {
    id: "audio",
    name: "Track Audio",
    subtitle: "Música, podcast y voz",
    color: "#B85A8C",
    audience: "Alumno 11-17 que vive con audífonos puestos.",
    finalProject: "Podcast personal o EP musical: episodios reales, intro original, distribución automática.",
    missions: [
      { num: "06", title: "Voz Clonada Avanzada", desc: "Controla tu voz: emociones, pausas, acentos.", loot: "5 audios con tu voz en 5 emociones distintas." },
      { num: "07", title: "Música Original con IA", desc: "Compón canciones y construye tu sonido.", loot: "EP de 3 canciones con coherencia de estilo." },
      { num: "08", title: "Podcast Solo con IA", desc: "Episodios con tu voz: intro, contenido, outro.", loot: "Episodio de 5 min publicado en Spotify." },
      { num: "09", title: "Transcripción y Subtítulos", desc: "Cualquier audio → texto + subtítulos SRT.", loot: "App que devuelve SRT en menos de 60 s." },
      { num: "10", title: "Estudio Distribuido", desc: "Publica en Spotify, Apple Podcasts y RSS.", loot: "Podcast con 3 episodios distribuidos." },
    ],
  },
  {
    id: "transcribir",
    name: "Track Transcribir",
    subtitle: "Procesar info como pro",
    color: "#1F6FB0",
    audience: "Alumno 13-17 que estudia mucho o quiere investigar.",
    finalProject: "Suite de procesamiento: PDFs → resumen + flashcards + audio + chat con el documento.",
    missions: [
      { num: "06", title: "Transcribir Cualquier Cosa", desc: "Audio, video, voz nota → texto en menos de 1 min.", loot: "App que acepta cualquier formato y transcribe." },
      { num: "07", title: "Chat con tu PDF", desc: "Sube PDF largo → hazle preguntas como ChatGPT.", loot: "RAG funcional: subes PDF y conversas con él." },
      { num: "08", title: "Resumen Inteligente", desc: "Texto/URL → resumen en 3 formatos.", loot: "App con TL;DR, bullets y mapa mental." },
      { num: "09", title: "Extracción de Datos", desc: "Foto de menú / tabla → CSV o JSON estructurado.", loot: "App que extrae datos de documentos visuales." },
      { num: "10", title: "Dashboard de Conocimiento", desc: "Unifica todo: sube archivo → procesa, indexa, avisa.", loot: "Dashboard con búsqueda + chat sobre todo tu conocimiento." },
    ],
  },
  {
    id: "programar",
    name: "Track Programar",
    subtitle: "Apps de verdad",
    color: "#D17C2A",
    audience: "Alumno 12-17 con interés en código.",
    finalProject: "App full-stack propia: idea → diseño → frontend → backend → base de datos → publicada.",
    missions: [
      { num: "06", title: "JavaScript con IA", desc: "Aprende JS con Claude Code como tutor.", loot: "Mini-app web entendiendo cada línea." },
      { num: "07", title: "API + Backend Propio", desc: "Tu propia API REST desplegada gratis.", loot: "API pública con 3 endpoints documentados." },
      { num: "08", title: "Juego Multiplayer Simple", desc: "Juego web jugable entre 2 celulares.", loot: "Juego multiplayer real con URL compartible." },
      { num: "09", title: "Base de Datos + Auth", desc: "Registro, login, datos guardados. App real.", loot: "App con login real y datos persistentes." },
      { num: "10", title: "Tu Producto Real", desc: "App que tus amigos usen DE VERDAD por una semana.", loot: "App pública con 5+ usuarios reales activos." },
    ],
  },
]

/* ─── HELPERS ─────────────────────────────────────────── */

export const TOTAL_EXPLORER_CLASSES = EXPLORER_CLASSES.length
export const TOTAL_MAKER_CORE = MAKER_CORE.length
export const TOTAL_TRACK_MISSIONS = 5
export const TOTAL_TRACKS = TRACKS.length
