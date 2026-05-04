import type React from "react"
import type { Metadata, Viewport } from "next"
import { Fraunces, Instrument_Sans, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { TrackingPixels } from "@/components/tracking-pixels"
import { ScrollDepthTracker } from "@/components/scroll-depth-tracker"
import { generateHreflangs } from "@/lib/seo-config"
import "./globals.css"

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
  axes: ["SOFT", "opsz"],
})

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#F5F1E8",
}

export const metadata: Metadata = {
  // Title: empathetic fear-hook · keyword-rich · brand at end
  title: "Cursos de IA para Niños y Adolescentes (8-17 años) | ★4.9 · Clase Gratis | InnovaKids",
  // Description: keyword-first + social proof + CTA
  description:
    "Clases en vivo de Inteligencia Artificial para niños y adolescentes 8-17 años. Crean videojuegos, apps y arte con IA. Grupos de máx. 5. 527 graduados en 9 países. ★4.9. 1ª clase gratis.",
  keywords: [
    "mi hijo se queda atrás en la era de la ia",
    "como evitar que mi hijo se quede atras con la ia",
    "niños rezagados inteligencia artificial",
    "brecha digital niños ia",
    "ia el nuevo ingles",
    "ia habilidad basica siglo xxi",
    "mi hijo no sabe usar ia",
    "ia para estudiar colegio",
    "curso inteligencia artificial niños",
    "curso inteligencia artificial adolescentes",
    "cursos de ia para niños",
    "clases online ia niños adolescentes",
    "escuela de inteligencia artificial para niños",
    "aprender chatgpt para niños",
    "curso de programación y ia para adolescentes",
    "academia ia niños",
    "innovakids",
    "innovakidslatam",
    "cursos de tecnologia para niños y adolescentes"
  ],
  authors: [{ name: "Innovakids Team" }],
  creator: "Innovakids",
  publisher: "Innovakids",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.innovakidslatam.com"),
  alternates: {
    canonical: "/",
    languages: generateHreflangs("home"),
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "Cursos de IA para Niños y Adolescentes (8-17 años) | ★4.9 · Clase Gratis | InnovaKids",
    description:
      "Clases de IA en vivo para niños 8-17 años. Crean videojuegos, apps y arte con Inteligencia Artificial. Máx. 5 alumnos. 527 graduados en 9 países. ★4.9. 1ª clase gratis.",
    url: "https://www.innovakidslatam.com",
    siteName: "Innovakids",
    images: [
      {
        url: "/hero-child-learning-ai.jpg",
        width: 1200,
        height: 630,
        alt: "Curso de Inteligencia Artificial para Niños y Adolescentes 8-17 años - InnovaKids",
      },
    ],
    locale: "es_419",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cursos de IA para Niños y Adolescentes (8-17) | ★4.9 | InnovaKids",
    description:
      "Clases de IA para niños 8-17 años. Videojuegos, apps y arte con IA. Grupos de 5. 527 graduados. ★4.9. Clase gratis.",
    images: ["/hero-child-learning-ai.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "5DUPn39I0nG06dUypWPbuuaNnTp5tTH7GqaLxwCjv2A",
  },
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Removed reCAPTCHA script loading to fix deployment error

  return (
    <html lang="es-419">
      <head>
        {/* Scripts moved to components/tracking-pixels.tsx for performance */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src=""
            alt=""
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Innovakids",
              alternateName: ["Innova Kids", "InnovaKids LATAM", "Cursos IA Niños"],
              description:
                "Academia #1 en LATAM para que niños y adolescentes (8-17 años) aprendan IA a tiempo y no se queden atrás. La IA es el nuevo inglés/internet/Excel: una habilidad base para el colegio, la universidad y el trabajo. 527 graduados en 9 países.",
              url: "https://www.innovakidslatam.com",
              logo: "https://www.innovakidslatam.com/logo-innovakids.png",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Diagonal Oriente 1620",
                addressLocality: "Providencia",
                addressRegion: "RM",
                addressCountry: "CL",
              },
              areaServed: [
                { "@type": "Country", name: "Chile" },
                { "@type": "Country", name: "México" },
                { "@type": "Country", name: "Colombia" },
                { "@type": "Country", name: "Argentina" },
                { "@type": "Country", name: "Perú" },
                { "@type": "Country", name: "Ecuador" },
                { "@type": "Country", name: "Uruguay" },
                { "@type": "Country", name: "Costa Rica" },
                { "@type": "Country", name: "Panamá" },
                { "@type": "Country", name: "República Dominicana" },
                { "@type": "Country", name: "Honduras" },
                { "@type": "Country", name: "El Salvador" },
                { "@type": "Country", name: "Guatemala" },
                { "@type": "Country", name: "Paraguay" },
                { "@type": "Country", name: "Bolivia" },
                { "@type": "Country", name: "Venezuela" },
                { "@type": "Country", name: "Nicaragua" },
                { "@type": "Country", name: "Puerto Rico" },
                { "@type": "Country", name: "Guinea Ecuatorial" },
                { "@type": "Country", name: "España" },
                { "@type": "Country", name: "Estados Unidos" },
                { "@type": "Place", name: "Latinoamérica" },
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+56-9-6475-4219",
                contactType: "customer service",
                email: "innovakidslatam@gmail.com",
                availableLanguage: ["Spanish"],
                areaServed: "LATAM",
              },
              sameAs: ["https://www.instagram.com/innovakidslatam"],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "127",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              name: "Cursos de IA para Niños y Adolescentes | Clases de Inteligencia Artificial Online - Innovakids",
              description:
                "Curso práctico de 5 semanas donde tu hijo crea Videojuegos, Apps y Arte con IA. Sin experiencia previa. Incluye certificación internacional y portafolio de proyectos.",
              provider: {
                "@type": "Organization",
                name: "Innovakids",
                sameAs: "https://www.innovakidslatam.com",
                url: "https://www.innovakidslatam.com",
              },
              educationalLevel: "Beginner",
              audience: {
                "@type": "EducationalAudience",
                educationalRole: "student",
                audienceType: "Children and Adolescents aged 8-17",
                geographicArea: {
                  "@type": "Place",
                  name: "Latin America",
                },
              },
              coursePrerequisites: "Ninguno - Curso para principiantes totales",
              numberOfLessons: 10,
              timeRequired: "P5W",
              inLanguage: "es",
              availableLanguage: "Spanish",
              courseMode: "online",
              hasCourseInstance: {
                "@type": "CourseInstance",
                courseMode: "online",
                courseWorkload: "PT90M",
                instructor: {
                  "@type": "Person",
                  name: "Innovakids Team",
                },
              },
              hasPart: [
                {
                  "@type": "Course",
                  name: "Curso de Creación de Videojuegos con IA para Niños",
                  description: "Aprende a crear videojuegos con Inteligencia Artificial. Roblox, Unity y diseño de mundos 3D.",
                  url: "https://www.innovakidslatam.com/curso-creacion-videojuegos-ninos",
                  courseMode: "online",
                },
                {
                  "@type": "Course",
                  name: "Curso de Creador de Contenido y Cine IA para Niños",
                  description: "Producción de contenido, YouTube, cine y edición con Inteligencia Artificial.",
                  url: "https://www.innovakidslatam.com/curso-creador-contenido-ia",
                  courseMode: "online",
                },
                {
                  "@type": "Course",
                  name: "Curso de Emprendimiento y Startups con IA para Niños",
                  description: "Educación financiera, creación de startups y negocios digitales con IA.",
                  url: "https://www.innovakidslatam.com/curso-emprendimiento-ninos",
                  courseMode: "online",
                },
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "127", // Consistent with title
                bestRating: "5",
                worstRating: "1",
              },
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "Curso de IA para Niños y Adolescentes - Innovakids",
              description:
                "Programa Vibe Explorer (10 Clases en Vivo). Aprende a programar con IA. Incluye software, grabaciones de por vida y garantía de satisfacción de 10 días.",
              image: "https://www.innovakidslatam.com/hero-child-learning-ai.jpg",
              brand: {
                "@type": "Brand",
                name: "Innovakids",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "127",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Inicio",
                  item: "https://www.innovakidslatam.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Cursos de IA para Niños y Adolescentes",
                  item: "https://www.innovakidslatam.com/#programa",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Clases de Inteligencia Artificial",
                  item: "https://www.innovakidslatam.com/#clases",
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: "Cursos de Inteligencia Artificial para Niños y Adolescentes - InnovaKids",
              description: "Catálogo completo de cursos de IA: Vibe Explorer (nivel base), Creación de Videojuegos, Creador de Contenido y Cine, Emprendimiento y Startups.",
              numberOfItems: 4,
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Vibe Explorer - Curso Base de IA para Niños",
                  url: "https://www.innovakidslatam.com/cursos/inteligencia-artificial",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Creación de Videojuegos con IA",
                  url: "https://www.innovakidslatam.com/curso-creacion-videojuegos-ninos",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Creador de Contenido y Cine IA",
                  url: "https://www.innovakidslatam.com/curso-creador-contenido-ia",
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: "Emprendimiento y Startups con IA",
                  url: "https://www.innovakidslatam.com/curso-emprendimiento-ninos",
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "VideoObject",
              name: "Cómo Funcionan los Cursos de IA para Niños y Adolescentes - Innovakids",
              description:
                "Descubre cómo nuestros cursos de inteligencia artificial para niños y adolescentes transforman a estudiantes en creadores de tecnología.",
              thumbnailUrl: "https://www.innovakidslatam.com/video-thumbnail.jpg",
              uploadDate: "2025-01-01T00:00:00Z",
              duration: "PT2M30S",
              contentUrl: "https://www.innovakidslatam.com/video-cursos-ia-ninos",
            }),
          }}
        />
      </head>
      <body className={`${fraunces.variable} ${instrumentSans.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <TrackingPixels />
        <ScrollDepthTracker />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
