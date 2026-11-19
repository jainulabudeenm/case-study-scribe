#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');

const SKILL_NAME = 'case-study-scribe';
const SKILL_FILE = path.join(__dirname, '..', 'skills', `${SKILL_NAME}.skill`);

const args = process.argv.slice(2);
const isProject = args.includes('--project') || args.includes('-p');

console.log(`\ncase-study-scribe installer\n`);

if (!fs.existsSync(SKILL_FILE)) {
  console.error('Skill file not found in package. Try reinstalling.');
  process.exit(1);
}

// Claude Code reads ~/.agents/skills/, Claude.ai reads ~/.claude/skills/.
// Install to both so it works wherever you are.
const targets = isProject
  ? [
      path.join(process.cwd(), '.agents', 'skills'),
      path.join(process.cwd(), '.claude', 'skills'),
    ]
  : [
      path.join(os.homedir(), '.agents', 'skills'),
      path.join(os.homedir(), '.claude', 'skills'),
    ];

let anySuccess = false;

for (const targetDir of targets) {
  const targetFile = path.join(targetDir, `${SKILL_NAME}.skill`);
  try {
    fs.mkdirSync(targetDir, { recursive: true });
    fs.copyFileSync(SKILL_FILE, targetFile);
    console.log(`installed: ${targetFile}`);
    anySuccess = true;
  } catch (err) {
    if (err.code === 'EEXIST' || err.message.includes('identical')) {
      console.log(`already in place: ${targetFile}`);
      anySuccess = true;
    } else {
      console.warn(`could not install to ${targetDir}: ${err.message}`);
    }
  }
}

if (!anySuccess) {
  console.error('Installation failed. Check folder permissions.');
  process.exit(1);
}

if (isProject) {
  console.log(`\nTip: commit .agents/skills/ and .claude/skills/ to share with your team.`);
}

console.log(`\nHow to use:`);
console.log(`   Log your work, then say "scribe this" or "add this to the case study"`);
console.log(`   Each entry lands in its project's case-study seed, dated and sourced`);
console.log(`   Ask "what do I have for my portfolio?" for a readiness report`);
console.log(`\nThis package ships the skill only. For the /case-study-scribe-init slash command as well,`);
console.log(`install it as a plugin instead:`);
console.log(`  /plugin marketplace add jainulabudeenm/case-study-scribe`);
console.log(`  /plugin install case-study-scribe`);

console.log(`\nTo update later: npx case-study-scribe@latest\n`);
