/**
 * Genera PDFs visuales a partir de los HTML de lead magnets.
 * Usa Puppeteer (instalado globalmente).
 *
 * Uso:  NODE_PATH=$(npm root -g) node lead-magnets/generate-pdfs.js
 */
const puppeteer = require("puppeteer");
const path = require("path");

async function generatePDF(htmlFile, outputFile, options = {}) {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();

  const filePath = path.resolve(__dirname, htmlFile);
  await page.goto(`file://${filePath}`, {
    waitUntil: "networkidle0",
    timeout: 30000,
  });

  // Wait for fonts to load
  await page.evaluate(() => document.fonts.ready);
  await new Promise((r) => setTimeout(r, 1500));

  const pdfOptions = {
    path: path.resolve(__dirname, "output", outputFile),
    printBackground: true,
    preferCSSPageSize: false,
    ...options,
  };

  await page.pdf(pdfOptions);
  console.log(`PDF generado: output/${outputFile}`);

  await browser.close();
}

async function main() {
  console.log("Generando PDFs de lead magnets...\n");

  // 1. Guía 7 Herramientas (A4, 10 páginas)
  await generatePDF("guia-7-herramientas.html", "Guia-7-Herramientas-IA-InnovaKids.pdf", {
    format: "A4",
    margin: { top: "0", right: "0", bottom: "0", left: "0" },
  });

  // 2. Invitación Clase en Vivo (formato email, más angosto)
  await generatePDF("invitacion-clase-vivo.html", "Invitacion-Clase-Gratis-InnovaKids.pdf", {
    width: "600px",
    margin: { top: "0", right: "0", bottom: "0", left: "0" },
  });

  console.log("\nListo. Archivos en lead-magnets/output/");
}

main().catch(console.error);
