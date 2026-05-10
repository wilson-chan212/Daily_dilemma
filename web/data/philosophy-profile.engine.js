/* eslint-disable no-undef */
;(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory()
  else root.PhilosophyProfileEngine = factory()
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict'

  function clamp(n, lo, hi) {
    return Math.max(lo, Math.min(hi, n))
  }

  function safeGetModel(model) {
    if (!model) throw new Error('Missing philosophy profile model')
    if (!Array.isArray(model.questions) || !Array.isArray(model.archetypes)) {
      throw new Error('Invalid philosophy profile model shape')
    }
    return model
  }

  function buildAnswerMap(answers) {
    const map = Object.create(null)
    for (const a of answers || []) {
      if (!a || !a.id) continue
      const c = (a.choiceKey || '').toLowerCase()
      if (c !== 'a' && c !== 'b') continue
      map[a.id] = c
    }
    return map
  }

  function signatureFromAnswers(model, answers) {
    const m = safeGetModel(model)
    const map = buildAnswerMap(answers)
    // Deterministic in question order (weeks 1..12). A=0, B=1.
    let bits = ''
    for (const q of m.questions) {
      const c = map[q.id]
      bits += c === 'b' ? '1' : '0'
    }
    return bits
  }

  function computeScores(model, answers) {
    const m = safeGetModel(model)
    const map = buildAnswerMap(answers)

    const perQuestion = []
    const meta = Object.create(null)
    for (const dim of m.metaDims || []) meta[dim.id] = 0

    for (const q of m.questions) {
      const c = map[q.id] || 'a'
      const sign = c === 'a' ? +1 : -1
      const w = typeof q.weight === 'number' ? q.weight : 1
      if (q.metaDim) meta[q.metaDim] = (meta[q.metaDim] || 0) + sign * w
      perQuestion.push({
        id: q.id,
        week: q.week,
        theme: q.theme,
        choiceKey: c,
        metaDim: q.metaDim,
        axis: q.axis,
        signed: sign * w,
        weight: w,
      })
    }

    const metaAbs = Object.create(null)
    let metaAbsSum = 0
    for (const k of Object.keys(meta)) {
      metaAbs[k] = Math.abs(meta[k])
      metaAbsSum += metaAbs[k]
    }

    return { perQuestion, meta, metaAbs, metaAbsSum }
  }

  function scoreArchetype(meta, archetype, metaDims) {
    const target = archetype && archetype.target ? archetype.target : {}
    // Distance-like score: lower is better.
    // Compare across all dimensions; unspecified targets are treated as neutral (0).
    let dist = 0
    let used = 0
    for (const d of metaDims || []) {
      const dim = d.id
      const t = clamp(Number(target[dim] != null ? target[dim] : 0), -1, 1)
      const v = clamp(Number(meta[dim] || 0), -1, 1)
      dist += Math.abs(t - v)
      used += 1
    }
    if (!used) return 999
    return dist / used
  }

  function pickArchetype(model, scores) {
    const m = safeGetModel(model)
    const meta = scores.meta

    const ranked = m.archetypes
      .map(a => ({ archetype: a, dist: scoreArchetype(meta, a, m.metaDims || []) }))
      .sort((x, y) => x.dist - y.dist)

    const best = ranked[0]
    const second = ranked[1] || { dist: best.dist + 1 }

    // Confidence heuristics:
    // - margin: how much better best is vs runner-up
    // - extremity: how “peaked” the user's meta profile is
    const margin = clamp(second.dist - best.dist, 0, 10)
    const extremity = clamp((scores.metaAbsSum || 0) / (m.metaDims || []).length, 0, 1) // 0..1

    let confidence = 'medium'
    if (margin >= 0.22 && extremity >= 0.6) confidence = 'high'
    else if (margin < 0.12 || extremity < 0.45) confidence = 'low'

    // If low confidence, use explicit balanced archetype if present.
    if (confidence === 'low') {
      const bal = m.archetypes.find(a => a.id === 'balancedIntegrator')
      if (bal) return { archetype: bal, confidence, ranked, margin, extremity }
    }

    return { archetype: best.archetype, confidence, ranked, margin, extremity }
  }

  function tensionDims(model, scores, n) {
    const m = safeGetModel(model)
    const meta = scores.meta
    const dims = (m.metaDims || []).map(d => ({
      id: d.id,
      labelA: d.labelA,
      labelB: d.labelB,
      abs: Math.abs(meta[d.id] || 0),
    }))
    // Tensions: the weakest preferences (abs=0) first.
    dims.sort((a, b) => a.abs - b.abs || String(a.id).localeCompare(String(b.id)))
    return dims.slice(0, n).map(d => ({ dimId: d.id, labelA: d.labelA, labelB: d.labelB }))
  }

  function pickHeroImageQuestion(model, archetype) {
    const m = safeGetModel(model)
    const qid = archetype && archetype.heroImageQuestionId
    const q = m.questions.find(x => x.id === qid) || m.questions[0]
    return q ? q.id : null
  }

  function computeGroupedDimensions(scores) {
    const m = scores && scores.meta ? scores.meta : {}

    // Meta scores are in {-1,+1} (one question per meta axis). Normalize to [-1,+1] averages.
    function avg(keys) {
      if (!keys.length) return 0
      let s = 0
      for (const k of keys) s += Number(m[k] || 0)
      return clamp(s / keys.length, -1, 1)
    }

    const dims = [
      {
        id: 'orderVsAdaptation',
        left: 'Order',
        right: 'Adaptation',
        leftCode: 'O',
        rightCode: 'A',
        // Rules + integrity + equal treatment before rules (vs contextual equity).
        v: avg(['rulesVsJudgment', 'integrityVsLoyalty', 'equalityVsEquity']),
      },
      {
        id: 'truthVsHarmony',
        left: 'Truth',
        right: 'Harmony',
        leftCode: 'T',
        rightCode: 'H',
        v: avg(['truthVsCohesion', 'courageVsPatience', 'plainSpeechVsSocialEase']),
      },
      {
        id: 'freedomVsGuardrails',
        left: 'Freedom',
        right: 'Guardrails',
        leftCode: 'F',
        rightCode: 'G',
        v: avg(['libertyVsGuardrails', 'selfMasteryVsAuthenticity', 'consentVsPaternalism']),
      },
      {
        id: 'comfortVsStriving',
        left: 'Comfort',
        right: 'Striving',
        leftCode: 'C',
        rightCode: 'S',
        v: avg(['comfortVsMeaning', 'wellbeingVsDignity', 'longtermVsImmediate']),
      },
    ]

    // Convert v ∈ [-1,+1] to percent leaning toward LEFT (0..100).
    const withPct = dims.map(d => {
      const pctLeft = Math.round(((d.v + 1) / 2) * 100)
      const code = d.v >= 0 ? d.leftCode : d.rightCode
      return { ...d, pctLeft, code }
    })

    const typeCode = withPct.map(d => d.code).join('')
    return { dims: withPct, typeCode }
  }

  function buildNarrative(model, answers, opts) {
    const m = safeGetModel(model)
    const scores = computeScores(m, answers)
    const pick = pickArchetype(m, scores)
    const signature = signatureFromAnswers(m, answers)

    const tensions = tensionDims(m, scores, 2)
    const heroQid = pickHeroImageQuestion(m, pick.archetype)
    const grouped = computeGroupedDimensions(scores)
    const poles = (m.copy && m.copy.dimensionPoles) || Object.create(null)
    const dimensions = grouped.dims.map(d => Object.assign({}, d, poles[d.id] || {}))

    const debug = {
      signature,
      meta: scores.meta,
      typeCode: grouped.typeCode,
      confidence: pick.confidence,
      margin: Number(pick.margin.toFixed(3)),
      extremity: Number(pick.extremity.toFixed(3)),
      archetypeId: pick.archetype && pick.archetype.id,
      ranked: (pick.ranked || []).slice(0, 5).map(r => ({ id: r.archetype.id, dist: Number(r.dist.toFixed(3)) })),
    }

    const toneRaw = pick.archetype && pick.archetype.toneGroup
    const toneGroup =
      toneRaw === 'green' || toneRaw === 'yellow' || toneRaw === 'blue' || toneRaw === 'red'
        ? toneRaw
        : 'green'

    return {
      version: m.version,
      signature,
      typeCode: grouped.typeCode,
      dimensions,
      framingLine: m.copy && m.copy.framingLine,
      dimensionsSectionLabel: m.copy && m.copy.dimensionsSection,
      kicker: m.copy && m.copy.kicker,
      toneGroup,
      archetype: {
        id: pick.archetype.id,
        title: pick.archetype.title,
        sub: pick.archetype.sub,
        toneGroup,
        heroImageQuestionId: heroQid,
        confidence: pick.confidence,
      },
      sections: {
        blindSpotLabel: m.copy && m.copy.sections && m.copy.sections.blindSpot,
        blindSpot:
          (pick.archetype.blindSpots && pick.archetype.blindSpots[0]) ||
          'You may have a blind spot that appears when your strongest value gets stretched too far.',
        thinkersLabel: m.copy && m.copy.sections && m.copy.sections.thinkers,
        thinkers: (pick.archetype.thinkers || []).slice(0, 3),
        privateNote: m.copy && m.copy.privateNote,
        tensions,
      },
      debug: opts && opts.includeDebug ? debug : null,
    }
  }

  return {
    signatureFromAnswers,
    computeScores,
    pickArchetype,
    buildNarrative,
  }
})

