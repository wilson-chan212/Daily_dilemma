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
  'laozi',
  'buddha',
  'marx',
]

/** Each id must have these substrings somewhere in the profile (English fields), for persona fidelity. */
const EN_KEYWORD_CHECKS = {
  aristotle: ['eudaimonia', 'habit', 'mean', 'phronesis'],
  plato: ['justice', 'soul', 'truth', 'education'],
  socrates: ['examined', 'question', 'soul', 'knowledge'],
  confucius: ['Ren', 'Li', 'ritual', 'harmony'],
  kant: ['Duty', 'categorical', 'universal', 'dignity'],
  laozi: ['Dao', 'wu-wei', 'natural', 'soft'],
  buddha: ['suffering', 'impermanence', 'middle', 'compassion'],
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
    assert(typeof p.replyDisciplineEn === 'string' && p.replyDisciplineEn.length > 40, `${id}: replyDisciplineEn`)
    assert(typeof p.replyDisciplineZh === 'string' && p.replyDisciplineZh.length >= 8, `${id}: replyDisciplineZh`)
    assert(typeof p.coreIdeasEn === 'string' && p.coreIdeasEn.length > 120, `${id}: coreIdeasEn`)
    assert(typeof p.coreIdeasZh === 'string' && p.coreIdeasZh.length > 40, `${id}: coreIdeasZh`)
    assert(typeof p.conceptMovesEn === 'string' && p.conceptMovesEn.length > 50, `${id}: conceptMovesEn`)
    assert(typeof p.conceptMovesZh === 'string' && p.conceptMovesZh.length > 20, `${id}: conceptMovesZh`)
    assert(typeof p.signatureMisreadingsEn === 'string' && p.signatureMisreadingsEn.length > 50, `${id}: signatureMisreadingsEn`)
    assert(typeof p.signatureMisreadingsZh === 'string' && p.signatureMisreadingsZh.length > 20, `${id}: signatureMisreadingsZh`)
    assert(typeof p.voiceEn === 'string' && p.voiceEn.length > 10, `${id}: voiceEn`)
    assert(typeof p.voiceZh === 'string' && p.voiceZh.length > 10, `${id}: voiceZh`)
    assert(typeof p.exampleReplyZh === 'string' && p.exampleReplyZh.length > 40, `${id}: exampleReplyZh`)
    assert(typeof p.exampleReplyEn === 'string' && p.exampleReplyEn.length > 40, `${id}: exampleReplyEn`)
    assert(typeof p.deepExampleReplyZh === 'string' && p.deepExampleReplyZh.length > 120, `${id}: deepExampleReplyZh`)
    assert(typeof p.deepExampleReplyEn === 'string' && p.deepExampleReplyEn.length > 220, `${id}: deepExampleReplyEn`)
    assert(Array.isArray(p.blendMustUseZh) && p.blendMustUseZh.length >= 3, `${id}: blendMustUseZh`)
    assert(Array.isArray(p.blendMustUseEn) && p.blendMustUseEn.length >= 3, `${id}: blendMustUseEn`)
    assert(typeof p.contrastZh === 'string' && p.contrastZh.length > 8, `${id}: contrastZh`)
    assert(!/我喺.+角度/.test(p.exampleReplyZh), `${id}: exampleReplyZh must not use 我喺…角度 opener`)
    assert(!/我喺.+角度/.test(p.deepExampleReplyZh), `${id}: deepExampleReplyZh must not use 我喺…角度 opener`)
    assert(p.exampleReplyZh.length <= 135, `${id}: exampleReplyZh should stay within ~130 chars`)

    const blob = [
      p.conceptsEn,
      p.methodEn,
      p.toneEn,
      p.avoidEn,
      p.anchorsEn,
      p.replyDisciplineEn,
      p.coreIdeasEn,
      p.conceptMovesEn,
      p.signatureMisreadingsEn,
      p.deepExampleReplyEn,
    ].join(' ')

    const checks = EN_KEYWORD_CHECKS[id]
    assert(Array.isArray(checks), `No keyword checks for ${id}`)
    for (const kw of checks) {
      assert(
        blob.includes(kw),
        `${id}: English profile bundle should reference "${kw}" (anchor for QA)`
      )
    }

    const teachingBlob = [p.coreIdeasEn, p.conceptMovesEn, p.signatureMisreadingsEn, p.deepExampleReplyEn].join(' ')
    const hasTeachingKeyword = p.blendMustUseEn.some(kw => teachingBlob.toLowerCase().includes(String(kw).toLowerCase()))
    assert(hasTeachingKeyword, `${id}: teaching fields should use at least one blendMustUseEn concept`)

    const teachingBlobZh = [p.coreIdeasZh, p.conceptMovesZh, p.signatureMisreadingsZh, p.deepExampleReplyZh].join('')
    const hasTeachingKeywordZh = p.blendMustUseZh.some(kw => teachingBlobZh.includes(kw))
    assert(hasTeachingKeywordZh, `${id}: teaching fields should use at least one blendMustUseZh concept`)
  }

  console.log('Philosopher chat personas QA: OK (profiles=%s)', EXPECTED_IDS.join(', '))
}

run()
