
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

// --- Setup ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PACKAGE_PATH = path.join(__dirname, '../package.json');
const CHANGELOG_PATH = path.join(__dirname, '../data/changelog.json');

// --- Helpers ---
function getLatestCommitInfo() {
    try {
        // Get the full commit message
        const log = execSync('git log -1 --pretty=%B').toString().trim();
        const lines = log.split('\n');
        
        // First line is title
        const title = lines[0].trim();
        
        // Rest is description (if any)
        const description = lines.slice(1).join('\n').trim();
        
        return { title, description };
    } catch (e) {
        console.error('Failed to get git log:', e);
        // Fallback for non-git environments or initial commits
        return { 
            title: 'fix(ui): Enable Read-Only View for Archived/Trashed Tasks', 
            description: '<h3>🐛 Bug Fixes</h3><ul><li><strong>Read-Only Modal:</strong> Fixed a bug that prevented users from viewing the details of archived or trashed tasks. The modal now opens in a read-only mode, allowing users to see the content while disabling all editing functionalities.</li><li><strong>Restore Functionality:</strong> Added a "Restore to Board" button within the read-only modal for quick recovery of tasks.</li></ul>' 
        };
    }
}

function bumpVersion(ver) {
    const parts = ver.split('.').map(Number);
    parts[2] += 1;
    return parts.join('.');
}

async function main() {
    console.log('\n🚀 Nexus-AI Automated Release Tool\n');

    // 1. Load Package Version
    const packageJson = JSON.parse(fs.readFileSync(PACKAGE_PATH, 'utf-8'));
    const currentVersion = packageJson.version;
    const newVersion = bumpVersion(currentVersion);
    
    console.log(`Current Version: ${currentVersion}`);
    console.log(`New Version:     ${newVersion}`);

    // 2. Get Info from Git
    const commitInfo = getLatestCommitInfo();
    console.log(`Release Title:   ${commitInfo.title}`);

    // 3. Update package.json
    packageJson.version = newVersion;
    fs.writeFileSync(PACKAGE_PATH, JSON.stringify(packageJson, null, 2) + '\n');
    console.log(`\n✅ Updated package.json`);

    // 4. Update changelog.json
    let changelog = [];
    try {
        changelog = JSON.parse(fs.readFileSync(CHANGELOG_PATH, 'utf-8'));
    } catch (e) {
        console.log('Creating new changelog.json...');
    }

    const today = new Date().toISOString().split('T')[0];
    
    // Convert markdown line breaks to HTML if needed or keep as is.
    // Here we keep it raw for markdown rendering support in frontend
    const newEntry = {
        version: newVersion,
        date: today,
        title: commitInfo.title,
        description: commitInfo.description || "No description provided."
    };

    changelog.unshift(newEntry);
    fs.writeFileSync(CHANGELOG_PATH, JSON.stringify(changelog, null, 2));
    console.log(`✅ Updated data/changelog.json`);

    console.log(`\n🎉 Release preparation complete.`);
}

main();
