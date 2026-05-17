import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const app = fs.readFileSync(path.join(root, 'web/app.js'), 'utf8')
const model = fs.readFileSync(path.join(root, 'web/data/philosophy-profile.model.en.js'), 'utf8')

function slug(name) {
  return String(name || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[øØ]/g, 'o')
    .replace(/[æÆ]/g, 'ae')
    .replace(/[œŒ]/g, 'oe')
    .replace(/[ß]/g, 'ss')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

const SLUG_OVERRIDES = { 'shakyamuni-buddha': 'buddha' }

const q1Start = app.indexOf('const PHILOSOPHER_QUOTES = [')
const q1End = app.indexOf('const PHILOSOPHER_QUOTES_2')
const q1Block = app.slice(q1Start, q1End)
const q2Start = q1End
const q2End = app.indexOf('const OTHERS_SPLIT')
const q2Block = app.slice(q2Start, q2End)

const q1 = [...q1Block.matchAll(/author:\s*'([^']+)'/g)].map((m) => m[1])
const q2 = [...q2Block.matchAll(/author:\s*'([^']+)'/g)].map((m) => m[1])

const thinkers = [...model.matchAll(/\{\s*name:\s*'([^']+)'/g)].map((m) => m[1])

const portraits = {}
const m = app.match(/const PHILOSOPHER_PORTRAITS = \{([\s\S]*?)\n\};/)
if (m) {
  for (const line of m[1].split('\n')) {
    const mm = line.match(/'([^']+)':\s*'([^']+)'/)
    if (mm) portraits[mm[1]] = mm[2]
  }
}

const dir = path.join(root, 'web/images/philosophers')

function hasPortrait(name) {
  const mapped = portraits[name]
  if (mapped && fs.existsSync(path.join(root, 'web', mapped))) return true
  const stem = SLUG_OVERRIDES[slug(name)] || slug(name)
  return ['jpg', 'png', 'webp'].some((ext) => fs.existsSync(path.join(dir, `${stem}.${ext}`)))
}

const all = new Set([...q1, ...q2, ...thinkers])
const missing = [...all].filter((n) => !hasPortrait(n)).sort()

console.log('Total unique authors/thinkers:', all.size)
console.log('Missing portraits:', missing.length)
for (const name of missing) console.log(' -', name)

console.log('\n--- Questions 31-50 (quote 1) ---')
q1.slice(30).forEach((a, i) => {
  console.log(`${i + 31}: ${a} ${hasPortrait(a) ? 'OK' : 'MISSING'}`)
})

console.log('\n--- Questions 31-50 (quote 2) ---')
q2.slice(30).forEach((a, i) => {
  console.log(`${i + 31}: ${a} ${hasPortrait(a) ? 'OK' : 'MISSING'}`)
})

console.log('\n--- Profile thinkers ---')
for (const name of [...new Set(thinkers)].sort()) {
  console.log(`${name}: ${hasPortrait(name) ? 'OK' : 'MISSING'}`)
}
