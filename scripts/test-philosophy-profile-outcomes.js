/* eslint-disable no-console */
'use strict'

/**
 * Run:
 *   node scripts/test-philosophy-profile-outcomes.js
 *
 * Purpose:
 *   Cheap QA for consistency + edge cases (no philosophy background required).
 */

const path = require('path')

const model = require(path.join(__dirname, '..', 'data', 'philosophy-profile.model.en.js'))
const engine = require(path.join(__dirname, '..', 'data', 'philosophy-profile.engine.js'))

function answersFromBits(bits) {
  const answers = []
  for (let i = 0; i < model.questions.length; i++) {
    const q = model.questions[i]
    const b = bits[i] || '0'
    answers.push({ id: q.id, choiceKey: b === '1' ? 'b' : 'a' })
  }
  return answers
}

function padBits(bits) {
  const need = model.questions.length
  if (bits.length >= need) return bits.slice(0, need)
  return bits + '0'.repeat(need - bits.length)
}

function makeCase(id, bits, note) {
  return { id, bits: padBits(bits), note }
}

// Synthetic cases: extremes, alternations, clusters, and “near-balanced” patterns (12 questions).
const cases = [
  makeCase('allA', '000000000000', 'Baseline A on all questions'),
  makeCase('allB', '111111111111', 'Baseline B on all questions'),
  makeCase('alternating01', '010101010101', 'Alternating pattern'),
  makeCase('alternating10', '101010101010', 'Alternating pattern (inverse)'),
  makeCase('firstHalfB', '111110000000', 'Weeks 1–5 B, 6–12 A'),
  makeCase('secondHalfB', '000001111111', 'Weeks 1–5 A, 6–12 B'),
  makeCase('onlyW1B', '100000000000', 'Single deviation early'),
  makeCase('onlyW10B', '000000001000', 'Single deviation late (Week 10)'),
  makeCase('onlySocialDimsB', '001000010000', 'Cohesion+guardrails as B; rest A'),
  makeCase('onlyPersonalDimsB', '110000000100', 'Meaning+authenticity+dignity as B; rest A'),
  makeCase('onlyW3B', '001000000000', 'Only Week 3 (truth/cohesion) is B'),
  makeCase('onlyW8B', '000000010000', 'Only Week 8 (liberty/guardrails) is B'),
  makeCase('libertyA_guardrailsB', '000000010000', 'Liberty/Guardrails B, rest A'),
  makeCase('equityB', '000000001000', 'Equality/Equity B, rest A'),
  makeCase('longtermA', '000000100000', 'Longterm A, rest A'),
  makeCase('immediateB', '000000100000', 'Longterm/Immediate = B'),
  makeCase('selfMasteryA', '000000000000', 'Self-mastery/authenticity = A'),
  makeCase('authenticityB', '010000000000', 'Self-mastery/authenticity = B'),
  makeCase('integrityA', '000000000000', 'Integrity/loyalty = A'),
  makeCase('loyaltyB', '000100000000', 'Integrity/loyalty = B'),
  makeCase('rulesA', '000000000000', 'Rules/judgment = A'),
  makeCase('judgmentB', '000010000000', 'Rules/judgment = B'),
  makeCase('courageA', '000000000000', 'Courage/patience = A'),
  makeCase('patienceB', '000001000000', 'Courage/patience = B'),
  makeCase('meaningB_dignityB', '100000000100', 'Meaning and dignity directions (B)'),
  makeCase('comfortA_wellbeingA', '000000000000', 'Comfort and wellbeing directions (A)'),
  makeCase('mixedSocial', '001100011000', 'Mix of cohesion/loyalty/guardrails/equity'),
  makeCase('mixedPersonal', '110011000100', 'Mix of meaning/authenticity/judgment/dignity'),
  makeCase('nearBalanced', '001010110000', 'Intentionally mixed to trigger low confidence'),
  makeCase('nearBalanced2', '010110001100', 'Another mixed profile'),
]

function assert(cond, msg) {
  if (!cond) throw new Error(msg)
}

function run() {
  console.log(`Philosophy Profile outcome QA (cases=${cases.length})`)

  const seen = new Set()
  for (const c of cases) {
    assert(c.bits.length === model.questions.length, `Case ${c.id}: bits length must be ${model.questions.length}`)
    assert(!seen.has(c.id), `Duplicate case id: ${c.id}`)
    seen.add(c.id)

    const answers = answersFromBits(c.bits)
    const res = engine.buildNarrative(model, answers, { includeDebug: true })

    assert(res && res.archetype && res.archetype.id, `Case ${c.id}: missing archetype`)
    assert(res.signature === c.bits, `Case ${c.id}: signature mismatch (got ${res.signature}, want ${c.bits})`)
    assert(Array.isArray(res.sections.thinkers) && res.sections.thinkers.length >= 2, `Case ${c.id}: expected thinkers`)

    const conf = res.archetype.confidence
    assert(conf === 'high' || conf === 'medium' || conf === 'low', `Case ${c.id}: invalid confidence ${conf}`)

    // Print a compact summary for quick manual inspection.
    console.log(
      `${c.id.padEnd(14)} bits=${c.bits}  type=${res.archetype.id.padEnd(18)} conf=${conf}  title="${res.archetype.title}"`
    )
  }

  console.log('OK: all cases produced deterministic outcomes.')
}

run()

