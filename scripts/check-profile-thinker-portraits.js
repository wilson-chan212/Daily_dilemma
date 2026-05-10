/* eslint-disable no-console */
'use strict'

/**
 * Checks whether each thinker referenced by the Philosophy Profile model
 * has a matching portrait file in web/images/philosophers/.
 *
 * Rule:
 *   thinkerName -> kebab-case slug -> slug.(jpg|png|webp)
 *
 * Run:
 *   node scripts/check-profile-thinker-portraits.js
 */

const fs = require('fs')
const path = require('path')

const model = require(path.join(__dirname, '..', 'data', 'philosophy-profile.model.en.js'))

const DIR = path.join(__dirname, '..', 'web', 'images', 'philosophers')
const exts = ['.jpg', '.png', '.webp']

function slugify(name) {
  return String(name || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function hasPortrait(slug) {
  for (const ext of exts) {
    const p = path.join(DIR, `${slug}${ext}`)
    if (fs.existsSync(p)) return `${slug}${ext}`
  }
  return null
}

const thinkers = new Set()
for (const a of model.archetypes || []) {
  for (const t of a.thinkers || []) {
    if (t && t.name) thinkers.add(t.name)
  }
}

const sorted = [...thinkers].sort((x, y) => x.localeCompare(y))
const found = []
const missing = []

for (const name of sorted) {
  const slug = slugify(name)
  const file = slug ? hasPortrait(slug) : null
  if (file) found.push({ name, file })
  else missing.push({ name, slug })
}

console.log(`Thinkers referenced: ${sorted.length}`)
console.log(`Portraits found:     ${found.length}`)
console.log(`Portraits missing:   ${missing.length}`)
console.log('')

if (missing.length) {
  console.log('Missing portraits (save as web/images/philosophers/<slug>.<ext>):')
  for (const m of missing) console.log(`- ${m.name}  ->  ${m.slug}`)
}

