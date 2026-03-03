const fs = require('fs');
const path = require('path');

function walkDir(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat && stat.isDirectory()) {
            results = results.concat(walkDir(fullPath));
        } else if (fullPath.endsWith('page.tsx')) {
            results.push(fullPath);
        }
    });
    return results;
}

const files = walkDir('app');
let modifiedCount = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;

    // Detect if we need to fix
    if (content.includes('innovakids.cl/')) {
        content = content.replace(/innovakids\.cl\//g, 'innovakidslatam.com/');
        changed = true;
    }

    const hasAlternates = content.includes('alternates: {');
    const hasLanguages = content.includes('languages:');

    if (hasAlternates && !hasLanguages) {
        if (!content.includes('generateHreflangs')) {
            if (content.match(/import\s+\{.*\}\s+from\s+["']@\/lib\/seo-config["']/)) {
                content = content.replace(/import\s+\{(.*)\}\s+from\s+["']@\/lib\/seo-config["']/, 'import { $1, generateHreflangs } from "@/lib/seo-config"');
            } else {
                content = `import { generateHreflangs } from "@/lib/seo-config";\n` + content;
            }
        }

        let type = "home";
        if (file.includes('blog')) type = "home"; // simplified for now
        if (file.includes('programa') || file.includes('resultados')) type = "sales";

        content = content.replace(/(canonical\s*:\s*[^,}]+)(,?)/, `$1,\n      languages: generateHreflangs("${type}")`);
        changed = true;
    }

    if (changed) {
        fs.writeFileSync(file, content, 'utf8');
        modifiedCount++;
    }
});

console.log('Modified ' + modifiedCount + ' files.');
