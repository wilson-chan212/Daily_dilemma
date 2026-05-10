const fs = require('fs');

function collectListenerIds(jsText) {
  const re = /document\.getElementById\((['"])([^'"]+)\1\)\.addEventListener/g;
  const ids = new Set();
  let m;
  while ((m = re.exec(jsText))) ids.add(m[2]);
  return ids;
}

function collectHtmlIds(htmlText) {
  const re = /\bid=(['"])([^'"]+)\1/g;
  const ids = new Set();
  let m;
  while ((m = re.exec(htmlText))) ids.add(m[2]);
  return ids;
}

function main() {
  const app = fs.readFileSync('app.js', 'utf8');
  const html = fs.readFileSync('index.html', 'utf8');
  const listenerIds = collectListenerIds(app);
  const htmlIds = collectHtmlIds(html);

  const missing = [...listenerIds].filter(id => !htmlIds.has(id)).sort();

  console.log(`Total listener ids: ${listenerIds.size}`);
  console.log(`Total HTML ids: ${htmlIds.size}`);
  console.log(`Missing in index.html: ${missing.length}`);
  if (missing.length) console.log(missing.join('\n'));
}

main();

