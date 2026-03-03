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

    // Fix remaining broken literals:
    // Ex: canonical: `https://www.innovakidslatam.com/${countryCode,\n      languages: generateHreflangs("sales")}/resultados`,
    const regex = /canonical:\s*`([^`\$]+)\$\{([^,}]+),\s*languages:\s*generateHreflangs\("([^"]+)"\)\}([^`]*)`/g;

    if (content.match(regex)) {
        content = content.replace(regex, 'canonical: `$1\$\{$2\}$4`,\n      languages: generateHreflangs("$3")');
        changed = true;
    }

    if (changed) {
        fs.writeFileSync(file, content, 'utf8');
        modifiedCount++;
    }
});

console.log('Fixed syntax in ' + modifiedCount + ' files.');
