import { defineConfig } from "eslint/config"
import coreWebVitals from "eslint-config-next/core-web-vitals"

export default defineConfig([
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      ".vercel/**",
      "out/**",
      "build/**",
      "public/**",
      "scripts/**",
      "lead-magnets/**",
      "next-env.d.ts",
      // código generado por shadcn/ui — se trata como vendor
      "components/ui/**",
    ],
  },
  ...coreWebVitals,
  {
    rules: {
      // sitio con textos largos en español: comillas/apóstrofes en JSX son contenido, no bugs
      "react/no-unescaped-entities": "off",
      // regla nueva de React 19 con falsos positivos sobre hooks tipo useInView que retornan {ref, inView}
      "react-hooks/refs": "warn",
    },
  },
])
