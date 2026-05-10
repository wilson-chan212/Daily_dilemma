const fs = require('fs');
const path = require('path');

function read(p) {
  return fs.readFileSync(path.resolve(__dirname, '..', p), 'utf8');
}

function extractGoFurtherTerms(appJs) {
  const idx = appJs.indexOf('const GO_FURTHER');
  if (idx < 0) throw new Error('GO_FURTHER not found');
  const block = appJs.slice(idx);
  const re = /terms\s*:\s*\[([^\]]*)\]/g;
  const arrays = [];
  let m;
  while ((m = re.exec(block))) {
    const inside = m[1];
    const terms = [...inside.matchAll(/'((?:\\'|[^'])*)'/g)].map((x) => x[1].replace(/\\'/g, "'"));
    arrays.push(terms);
  }
  if (arrays.length < 50) {
    throw new Error(`Expected ~50 term arrays, got ${arrays.length}`);
  }
  return new Set(arrays.flat());
}

function extractObjectKeys(conceptNotesJs, globalVarName) {
  const sandbox = { window: {} };
  const fn = new Function('window', `${conceptNotesJs}\nreturn window.${globalVarName};`);
  const obj = fn(sandbox.window);
  if (!obj || typeof obj !== 'object') throw new Error(`Could not load ${globalVarName}`);
  return new Set(Object.keys(obj));
}

function main() {
  const app = read('app.js');
  const terms = extractGoFurtherTerms(app);

  const enJs = read('data/concept-notes.en.js');
  const zhJs = read('data/concept-notes.zh-hant.js');

  const enKeys = extractObjectKeys(enJs, 'CONCEPT_NOTES_EN');
  const zhKeys = extractObjectKeys(zhJs, 'CONCEPT_NOTES_ZH_HANT');

  const missingEn = [...terms].filter((t) => !enKeys.has(t)).sort();
  const missingZh = [...terms].filter((t) => !zhKeys.has(t)).sort();

  console.log(JSON.stringify({
    totalTerms: terms.size,
    enKeys: enKeys.size,
    zhKeys: zhKeys.size,
    missingEn,
    missingZh,
  }, null, 2));
}

main();

