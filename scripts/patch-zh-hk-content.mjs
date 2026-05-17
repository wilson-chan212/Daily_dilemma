/**
 * Patch dilemmas + counterargs from scripts/dilemmas-zh-hant-all.mjs into i18n.
 * Run: node scripts/patch-zh-hk-content.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dilemmas, counterargs } from './dilemmas-zh-hant-all.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const targets = [
  path.join(root, 'web', 'i18n.zh-hant.js'),
  path.join(root, 'i18n.zh-hant.js'),
];

function formatDilemma(d) {
  const r = d.reflection;
  return `      { id: ${d.id}, text: '${d.text.replace(/'/g, "\\'")}', optA: '${d.optA.replace(/'/g, "\\'")}', optB: '${d.optB.replace(/'/g, "\\'")}', reflection: { a: '${r.a.replace(/'/g, "\\'")}', b: '${r.b.replace(/'/g, "\\'")}' }, image: '${d.image}', tags: [${d.tags.map((t) => `'${t.replace(/'/g, "\\'")}'`).join(', ')}] }`;
}

function formatCounterarg(c) {
  return `      { a: '${c.a.replace(/'/g, "\\'")}', b: '${c.b.replace(/'/g, "\\'")}' }`;
}

const dilemmasBlock = `    dilemmas: [\n${dilemmas.map(formatDilemma).join(',\n')}\n    ],`;
const counterargsBlock = `    counterargs: [\n${counterargs.map(formatCounterarg).join(',\n')}\n    ],`;

for (const filePath of targets) {
  let src = fs.readFileSync(filePath, 'utf8');
  src = src.replace(/    dilemmas: \[[\s\S]*?    \],\n    counterargs: \[/, `${dilemmasBlock}\n    counterargs: [`);
  src = src.replace(/    counterargs: \[[\s\S]*?    \],\n    quotes1: \[/, `${counterargsBlock}\n    quotes1: [`);
  fs.writeFileSync(filePath, src, 'utf8');
  console.log('Patched', filePath);
}
