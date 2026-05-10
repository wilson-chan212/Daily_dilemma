/* eslint-disable no-console */
'use strict'

/**
 * Run:
 *   node scripts/test-philosopher-chat-personas.js
 *
 * Lightweight QA: profile JSON integrity + keyword anchors per philosopher
 * (no network / no API keys).
 */

const fs = require('fs')
const path = require('path')

const profilesPath = path.join(__dirname, '..', 'supabase', 'functions', 'ai-chat', 'philosopher-profiles.json')

const EXPECTED_IDS = [
  'aristotle',
  'plato',
  'socrates',
  'confucius',
  'kant',
  'descartes',
  'nietzsche',
  'marx',
]

/** Each id must have these substrings somewhere in the profile (English fields), for persona fidelity. */
const EN_KEYWORD_CHECKS = {
  aristotle: ['eudaimonia', 'habit', 'mean', 'phronesis'],
  plato: ['justice', 'soul', 'truth', 'education'],
  socrates: ['examined', 'question', 'soul', 'knowledge'],
  confucius: ['Ren', 'Li', 'ritual', 'harmony'],
  kant: ['Duty', 'categorical', 'universal', 'dignity'],
  descartes: ['doubt', 'cogito', 'distinct', 'method'],
  nietzsche: ['genealogy', 'perspectivism', 'values', 'power'],
  marx: ['alienation', 'class', 'labor', 'ideology'],
}

function assert(cond, msg) {
  if (!cond) throw new Error(msg)
}

function run() {
  const raw = fs.readFileSync(profilesPath, 'utf8')
  const profiles = JSON.parse(raw)

  assert(Object.keys(profiles).length === EXPECTED_IDS.length, `Expected exactly ${EXPECTED_IDS.length} profiles`)

  for (const id of EXPECTED_IDS) {
    const p = profiles[id]
    assert(p && typeof p === 'object', `Missing profile: ${id}`)
    assert(typeof p.nameEn === 'string' && p.nameEn.length > 1, `${id}: nameEn`)
    assert(typeof p.nameZh === 'string' && p.nameZh.length > 0, `${id}: nameZh`)
    assert(typeof p.conceptsEn === 'string' && p.conceptsEn.length > 30, `${id}: conceptsEn`)
    assert(typeof p.conceptsZh === 'string' && p.conceptsZh.length > 10, `${id}: conceptsZh`)
    assert(typeof p.methodEn === 'string', `${id}: methodEn`)
    assert(typeof p.avoidEn === 'string', `${id}: avoidEn`)
    assert(typeof p.anchorsEn === 'string', `${id}: anchorsEn`)

    const blob = [
      p.conceptsEn,
      p.methodEn,
      p.toneEn,
      p.avoidEn,
      p.anchorsEn,
    ].join(' ')

    const checks = EN_KEYWORD_CHECKS[id]
    assert(Array.isArray(checks), `No keyword checks for ${id}`)
    for (const kw of checks) {
      assert(
        blob.includes(kw),
        `${id}: English profile bundle should reference "${kw}" (anchor for QA)`
      )
    }
  }

  console.log('Philosopher chat personas QA: OK (profiles=%s)', EXPECTED_IDS.join(', '))
}

run()
