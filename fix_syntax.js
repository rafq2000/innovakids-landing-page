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

    // Fix the broken template literal canonicals!
    // Ex: canonical: `https://www.innovakidslatam.com/${country.code,\n      languages: generateHreflangs("home")}`,
    const regex1 = /canonical:\s*`([^`\$]+)\$\{([^,}]+),\s*languages:\s*generateHreflangs\("([^"]+)"\)\}`/g;

    if (content.match(regex1)) {
        content = content.replace(regex1, 'canonical: `$1\$\{$2\}`, \n      languages: generateHreflangs("$3")');
        changed = true;
    }

    // Also fix standard quotes if broken. 
    // Ex: canonical: "https://www.innovakidslatam.com/resultados,\n      languages: generateHreflangs("sales")",
    const regex2 = /canonical:\s*"([^",]+),\s*languages:\s*generateHreflangs\("([^"]+)"\)"/g;
    if (content.match(regex2)) {
        content = content.replace(regex2, 'canonical: "$1",\n      languages: generateHreflangs("$2")');
        changed = true;
    }

    // Check for another variation:
    // canonical: `https://www.innovakidslatam.com/${country.code, languages: generateHreflangs("home")}`
    const regex3 = /canonical:\s*`([^`\$]+\$\{?[^,}]+?),?\s*languages:\s*generateHreflangs\("([^"]+)"\)\}?`/g;
    if (content.match(regex3) && !changed) {
        content = content.replace(regex3, 'canonical: `$1`, \n      languages: generateHreflangs("$2")');
        changed = true;
    }

    if (changed) {
        fs.writeFileSync(file, content, 'utf8');
        modifiedCount++;
    }
});

console.log('Fixed syntax in ' + modifiedCount + ' files.');
