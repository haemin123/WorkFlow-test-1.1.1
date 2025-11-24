
import fs from 'fs';
import path from 'path';
import readline from 'readline';
import { fileURLToPath } from 'url';

// --- Setup ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const PACKAGE_PATH = path.join(__dirname, '../package.json');
const CHANGELOG_PATH = path.join(__dirname, '../data/changelog.json');

// --- Helpers ---
const question = (query) => new Promise((resolve) => rl.question(query, resolve));

async function main() {
    console.log('\n🚀 Nexus-AI Release Automation Tool\n');

    // 1. Load Package Version
    const packageJson = JSON.parse(fs.readFileSync(PACKAGE_PATH, 'utf-8'));
    const currentVersion = packageJson.version;
    console.log(`Current Version: ${currentVersion}`);

    // 2. Input New Version
    const newVersion = await question(`Enter new version (default: patch bump): `) || bumpVersion(currentVersion);
    
    // 3. Input Changelog Details
    const title = await question('Enter release title: ');
    const descRaw = await question('Enter description (HTML allowed, use <br> for breaks): ');
    
    // 4. Update package.json
    packageJson.version = newVersion;
    fs.writeFileSync(PACKAGE_PATH, JSON.stringify(packageJson, null, 2) + '\n');
    console.log(`\n✅ Updated package.json to v${newVersion}`);

    // 5. Update changelog.json
    let changelog = [];
    try {
        changelog = JSON.parse(fs.readFileSync(CHANGELOG_PATH, 'utf-8'));
    } catch (e) {
        console.log('Creating new changelog.json...');
    }

    const today = new Date().toISOString().split('T')[0];
    const newEntry = {
        version: newVersion,
        date: today,
        title: title,
        description: descRaw // In a real app, we might parse Markdown here
    };

    changelog.unshift(newEntry); // Add to top
    fs.writeFileSync(CHANGELOG_PATH, JSON.stringify(changelog, null, 2));
    console.log(`✅ Updated data/changelog.json`);

    console.log(`\n🎉 Release prep complete! Now run:\n`);
    console.log(`   git add .`);
    console.log(`   git commit -m "chore(release): bump to v${newVersion}"`);
    console.log(`   git push\n`);

    rl.close();
}

function bumpVersion(ver) {
    const parts = ver.split('.').map(Number);
    parts[2] += 1;
    return parts.join('.');
}

main();
