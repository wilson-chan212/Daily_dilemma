/**
 * Generate one-person demo illustrations for all 12 Philosophy Profiles.
 * Output: SVG sources plus PNG/JPG exports in web/images/philosophy-profile-soft-rounded/profile-demos.
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { Resvg } from '@resvg/resvg-js'
import sharp from 'sharp'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUT_DIR = path.join(
  __dirname,
  '..',
  'web',
  'images',
  'philosophy-profile-soft-rounded',
  'profile-demos',
)

const OUT_SIZE = 1024
const JPG_QUALITY = 92
const ink = '#56483d'
const paper = '#f6efe2'

const profiles = [
  {
    id: 'stoicArchitect',
    slug: 'stoic-architect',
    title: 'Stoic Architect',
    tone: 'blue',
    accent: '#8aa5b9',
    secondary: '#c9d9e4',
    hair: '#8c7660',
    prop: 'blocks',
  },
  {
    id: 'principledRealist',
    slug: 'principled-realist',
    title: 'Principled Realist',
    tone: 'red',
    accent: '#b77d68',
    secondary: '#e4b7a4',
    hair: '#6f5b4b',
    prop: 'document',
  },
  {
    id: 'civicGuardian',
    slug: 'civic-guardian',
    title: 'Civic Guardian',
    tone: 'red',
    accent: '#a86f61',
    secondary: '#dbc2aa',
    hair: '#5f5246',
    prop: 'shield',
  },
  {
    id: 'careCentered',
    slug: 'care-centered',
    title: 'Care-Centered Pragmatist',
    tone: 'green',
    accent: '#8d9d7d',
    secondary: '#c9d5bc',
    hair: '#7a6552',
    prop: 'care',
  },
  {
    id: 'relationalProtector',
    slug: 'relational-protector',
    title: 'Relational Protector',
    tone: 'green',
    accent: '#78906f',
    secondary: '#c6d2bd',
    hair: '#705c4b',
    prop: 'bridge',
  },
  {
    id: 'freedomFirst',
    slug: 'freedom-first',
    title: 'Freedom-First Humanist',
    tone: 'yellow',
    accent: '#d7a95f',
    secondary: '#ecd6a5',
    hair: '#8a6f55',
    prop: 'kite',
  },
  {
    id: 'disciplinedBuilder',
    slug: 'disciplined-builder',
    title: 'Disciplined Builder',
    tone: 'blue',
    accent: '#7395ad',
    secondary: '#c4d7e0',
    hair: '#6f604f',
    prop: 'calendar',
  },
  {
    id: 'meaningSeeker',
    slug: 'meaning-seeker',
    title: 'Meaning-Seeking Striver',
    tone: 'yellow',
    accent: '#c99b4f',
    secondary: '#ead3a2',
    hair: '#8b735c',
    prop: 'mountain',
  },
  {
    id: 'pragmaticReformer',
    slug: 'pragmatic-reformer',
    title: 'Pragmatic Reformer',
    tone: 'red',
    accent: '#b76f62',
    secondary: '#e3b39f',
    hair: '#665143',
    prop: 'tools',
  },
  {
    id: 'longtermSteward',
    slug: 'longterm-steward',
    title: 'Long-Term Steward',
    tone: 'blue',
    accent: '#6f93a7',
    secondary: '#c5d7de',
    hair: '#75624f',
    prop: 'sapling',
  },
  {
    id: 'harmonizer',
    slug: 'harmonizer',
    title: 'Social Harmonizer',
    tone: 'green',
    accent: '#879b72',
    secondary: '#d0d7b7',
    hair: '#765f4c',
    prop: 'lantern',
  },
  {
    id: 'balancedIntegrator',
    slug: 'balanced-integrator',
    title: 'Balanced Integrator',
    tone: 'yellow',
    accent: '#c7a35b',
    secondary: '#e8d4a8',
    hair: '#7b6652',
    prop: 'balance',
  },
]

const variants = [
  {
    id: '01',
    name: 'Table Study',
    pose: 'table',
    note: 'Seated, focused, one profile prop on the tabletop.',
  },
  {
    id: '02',
    name: 'Quiet Walk',
    pose: 'standing',
    note: 'Standing figure with a larger symbolic prop.',
  },
  {
    id: '03',
    name: 'Reflective Portrait',
    pose: 'portrait',
    note: 'Closer single-person portrait with the profile cue in hand.',
  },
]

fs.mkdirSync(OUT_DIR, { recursive: true })

const round = (n) => Number.parseFloat(n.toFixed(2))

function svgHeader(title) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" fill="none" role="img" aria-label="${title}">
  <defs>
    <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="14" stdDeviation="16" flood-color="#b7a48c" flood-opacity=".18"/>
    </filter>
  </defs>`
}

function background(profile, seed) {
  const dots = Array.from({ length: 18 }, (_, i) => {
    const x = 72 + ((i * 137 + seed * 53) % 880)
    const y = 64 + ((i * 91 + seed * 37) % 840)
    const r = 1.4 + ((i + seed) % 4) * 0.55
    return `<circle cx="${x}" cy="${y}" r="${round(r)}" fill="#d4c5aa" opacity=".22"/>`
  }).join('\n    ')

  return `<rect width="1024" height="1024" rx="38" fill="${paper}"/>
  <path d="M88 151c142-58 272-71 414-38 136 31 252 10 429-34" stroke="#eadfca" stroke-width="36" stroke-linecap="round" opacity=".34"/>
  <path d="M82 851c162 35 298 29 428-15 149-51 268-37 423 20" stroke="${profile.secondary}" stroke-width="42" stroke-linecap="round" opacity=".26"/>
  ${dots}`
}

function face(x, y, scale, profile, looking = 1) {
  const s = scale
  const eyeX = looking > 0 ? 14 : -14
  return `<g transform="translate(${x} ${y}) scale(${s})">
    <path d="M-55-76c35-42 113-24 123 32 11 59-35 109-91 98-52-10-67-79-32-130z" fill="#eed4bd" stroke="${ink}" stroke-width="7" stroke-linejoin="round"/>
    <path d="M-58-66c11-49 84-74 126-25 22 25 22 56 12 79-21-34-68-34-104-24-11 3-26-8-34-30z" fill="${profile.hair}" stroke="${ink}" stroke-width="7" stroke-linejoin="round"/>
    <path d="M-20-74c-11 23-29 33-50 35" stroke="${ink}" stroke-width="5" stroke-linecap="round" opacity=".65"/>
    <path d="M8-73c-10 20-26 30-47 34" stroke="${ink}" stroke-width="5" stroke-linecap="round" opacity=".65"/>
    <circle cx="${eyeX}" cy="-18" r="5.5" fill="${ink}"/>
    <path d="M31 1c8 9 18 12 30 9" stroke="${ink}" stroke-width="4" stroke-linecap="round"/>
    <path d="M8 25c19 12 39 10 55-4" stroke="${ink}" stroke-width="4" stroke-linecap="round" opacity=".72"/>
  </g>`
}

function tablePose(profile) {
  return `<g filter="url(#softShadow)">
    <ellipse cx="513" cy="857" rx="294" ry="42" fill="#d8c7aa" opacity=".38"/>
    <rect x="244" y="646" width="536" height="48" rx="24" fill="#d1ad82" stroke="${ink}" stroke-width="7"/>
    <path d="M394 694v122M634 694v122" stroke="${ink}" stroke-width="8" stroke-linecap="round"/>
    ${face(421, 370, 1.32, profile, 1)}
    <path d="M340 535c31-77 126-107 194-49 44 38 59 99 52 181H303c-8-53 4-98 37-132z" fill="${profile.secondary}" stroke="${ink}" stroke-width="7" stroke-linejoin="round"/>
    <path d="M485 520c36 25 58 60 71 105" stroke="${ink}" stroke-width="6" stroke-linecap="round" opacity=".55"/>
    <path d="M337 612c-49 6-78 18-101 45" stroke="${ink}" stroke-width="10" stroke-linecap="round"/>
    <path d="M582 606c49 14 86 28 121 48" stroke="${ink}" stroke-width="10" stroke-linecap="round"/>
    <circle cx="246" cy="656" r="17" fill="#eed4bd" stroke="${ink}" stroke-width="6"/>
    <circle cx="704" cy="655" r="17" fill="#eed4bd" stroke="${ink}" stroke-width="6"/>
    ${propGraphic(profile, 614, 570, 1.1)}
  </g>`
}

function standingPose(profile) {
  return `<g filter="url(#softShadow)">
    <ellipse cx="508" cy="869" rx="238" ry="39" fill="#d8c7aa" opacity=".35"/>
    ${face(466, 315, 1.28, profile, 1)}
    <path d="M358 502c38-82 167-88 216-15 31 46 35 136 22 247H337c-14-93-8-171 21-232z" fill="${profile.secondary}" stroke="${ink}" stroke-width="7" stroke-linejoin="round"/>
    <path d="M423 733c-18 46-25 82-28 136M532 732c21 44 31 86 35 136" stroke="${ink}" stroke-width="10" stroke-linecap="round"/>
    <path d="M373 572c-61 30-101 63-121 112" stroke="${ink}" stroke-width="11" stroke-linecap="round"/>
    <path d="M574 568c62 18 111 45 148 83" stroke="${ink}" stroke-width="11" stroke-linecap="round"/>
    <circle cx="253" cy="686" r="17" fill="#eed4bd" stroke="${ink}" stroke-width="6"/>
    <circle cx="725" cy="652" r="17" fill="#eed4bd" stroke="${ink}" stroke-width="6"/>
    ${propGraphic(profile, 710, 386, 1.32)}
  </g>`
}

function portraitPose(profile) {
  return `<g filter="url(#softShadow)">
    <ellipse cx="512" cy="856" rx="268" ry="40" fill="#d8c7aa" opacity=".34"/>
    <path d="M287 694c13-132 90-220 202-220h46c116 0 194 89 207 220l18 159H269l18-159z" fill="${profile.secondary}" stroke="${ink}" stroke-width="8" stroke-linejoin="round"/>
    ${face(499, 338, 1.56, profile, 1)}
    <path d="M386 612c47 33 76 68 98 124" stroke="${ink}" stroke-width="8" stroke-linecap="round" opacity=".54"/>
    <path d="M630 605c-42 32-70 69-90 131" stroke="${ink}" stroke-width="8" stroke-linecap="round" opacity=".54"/>
    <path d="M334 700c-61 35-86 76-75 122" stroke="${ink}" stroke-width="12" stroke-linecap="round"/>
    <path d="M680 700c62 35 88 76 77 122" stroke="${ink}" stroke-width="12" stroke-linecap="round"/>
    <circle cx="261" cy="821" r="18" fill="#eed4bd" stroke="${ink}" stroke-width="6"/>
    <circle cx="756" cy="821" r="18" fill="#eed4bd" stroke="${ink}" stroke-width="6"/>
    ${propGraphic(profile, 506, 686, 1.28)}
  </g>`
}

function propGraphic(profile, x, y, scale) {
  const a = profile.accent
  const b = profile.secondary
  const stroke = `stroke="${ink}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"`
  const fillStroke = `stroke="${ink}" stroke-width="6" stroke-linejoin="round"`

  const props = {
    blocks: `<g><rect x="-68" y="40" width="92" height="62" rx="14" fill="${b}" ${fillStroke}/><rect x="-21" y="-27" width="92" height="62" rx="14" fill="${a}" ${fillStroke}/><rect x="27" y="-94" width="92" height="62" rx="14" fill="${b}" ${fillStroke}/><path d="M-44 73h34M4 6h34M52-61h34" ${stroke}/></g>`,
    document: `<g><path d="M-68-98h113l47 47v153H-68z" fill="#fff8ea" ${fillStroke}/><path d="M45-98v47h47" ${stroke}/><path d="M-33-35h69M-33 1h83M-33 37h55" ${stroke}/><circle cx="64" cy="58" r="38" fill="${a}" opacity=".45" ${fillStroke}/><path d="M89 83l38 38" ${stroke}/></g>`,
    shield: `<g><path d="M0-106c43 31 83 40 122 43-3 94-45 151-122 178-77-27-119-84-122-178 39-3 79-12 122-43z" fill="${a}" ${fillStroke}/><path d="M0-63v134M-48 5h96" ${stroke}/><path d="M-89 111h178" ${stroke}/></g>`,
    care: `<g><path d="M-104 26c37-48 91-50 125 0 34-50 88-48 125 0-32 57-76 89-125 118-49-29-93-61-125-118z" fill="${a}" opacity=".6" ${fillStroke}/><path d="M-55-82h110v78H-55z" fill="#fff8ea" ${fillStroke}/><path d="M0-62v37M-19-43h38" ${stroke}/></g>`,
    bridge: `<g><path d="M-124 68c39-71 84-106 124-106s85 35 124 106" fill="${b}" ${fillStroke}/><path d="M-99 68c34-42 67-63 99-63s65 21 99 63" ${stroke}/><path d="M-118 108H118M-70 68v40M0 6v102M70 68v40" ${stroke}/><path d="M-26-68c12-18 39-18 52 0 14-18 42-13 49 8 8 29-35 54-75 82-40-28-83-53-75-82 7-21 35-26 49-8z" fill="${a}" ${fillStroke}/></g>`,
    kite: `<g><path d="M0-122l94 87L9 62-85-25z" fill="${a}" ${fillStroke}/><path d="M0-122L9 62M-85-25l179-10" ${stroke}/><path d="M9 62c23 43 11 80-28 110" ${stroke}/><path d="M-34 102l30 9M-19 135l31 3" ${stroke}/></g>`,
    calendar: `<g><rect x="-96" y="-90" width="192" height="178" rx="18" fill="#fff8ea" ${fillStroke}/><path d="M-96-38H96M-45-114v45M45-114v45" ${stroke}/><path d="M-50 10h32M16 10h32M-50 52h32M16 52h32" ${stroke}/><path d="M-101 128L104-77" stroke="${a}" stroke-width="13" stroke-linecap="round"/></g>`,
    mountain: `<g><path d="M-130 104L-50-41 2 39 52-70 137 104z" fill="${b}" ${fillStroke}/><path d="M-50-41l28 44 24-36M52-70l31 49 19-28" ${stroke}/><path d="M3-131l17 35 39 6-28 27 7 38-35-18-35 18 7-38-28-27 39-6z" fill="${a}" ${fillStroke}/></g>`,
    tools: `<g><path d="M-102 34l78-78 34 34-78 78c-18 18-45-9-34-34z" fill="${a}" ${fillStroke}/><path d="M48-98c38-12 75 23 65 61L78-72 49-43 84-8c-38 10-73-27-61-65z" fill="${b}" ${fillStroke}/><path d="M-1 22l86 86" ${stroke}/><path d="M-110 107h220" ${stroke}/></g>`,
    sapling: `<g><path d="M-76-90h152v201H-76z" fill="#fff8ea" ${fillStroke}/><path d="M-43-57c31 23 55 23 86 0M-43 77c31-23 55-23 86 0M0-56v133" ${stroke}/><path d="M0 121c-1-74 23-127 72-158" ${stroke}/><path d="M70-37c29 3 55 25 66 55-36 9-67-5-85-34z" fill="${a}" ${fillStroke}/><path d="M0 121c-6-49-31-82-75-99" ${stroke}/><path d="M-78 22c-28 10-46 37-48 70 36-1 63-20 75-54z" fill="${a}" ${fillStroke}/></g>`,
    lantern: `<g><path d="M-65-72h130l38 71-38 99H-65l-38-99z" fill="${b}" ${fillStroke}/><path d="M-52-72c16-32 88-32 104 0M-41 98c13 28 69 28 82 0" ${stroke}/><path d="M0-38c28 21 45 50 43 86-24 16-62 16-86 0-2-36 15-65 43-86z" fill="${a}" opacity=".65" ${fillStroke}/><path d="M-122 133H122" ${stroke}/></g>`,
    balance: `<g><path d="M0-112v204M-74 92H74M-118 129H118" ${stroke}/><path d="M-90-47H90" ${stroke}/><path d="M-90-47l-45 87h90zM90-47L45 40h90z" fill="${b}" ${fillStroke}/><circle cx="0" cy="-47" r="18" fill="${a}" ${fillStroke}/><path d="M-43 92h86" ${stroke}/></g>`,
  }

  return `<g transform="translate(${x} ${y}) scale(${scale})">${props[profile.prop]}</g>`
}

function buildSvg(profile, variant, index) {
  const pose =
    variant.pose === 'table'
      ? tablePose(profile)
      : variant.pose === 'standing'
        ? standingPose(profile)
        : portraitPose(profile)

  return `${svgHeader(`${profile.title} ${variant.name}`)}
  ${background(profile, index)}
  ${pose}
</svg>
`
}

const outputs = []

for (const [profileIndex, profile] of profiles.entries()) {
  for (const [variantIndex, variant] of variants.entries()) {
    const base = `demo-pp-${profile.slug}-${variant.id}`
    const svgPath = path.join(OUT_DIR, `${base}.svg`)
    const pngPath = path.join(OUT_DIR, `${base}.png`)
    const jpgPath = path.join(OUT_DIR, `${base}.jpg`)
    const svg = buildSvg(profile, variant, profileIndex * variants.length + variantIndex)

    fs.writeFileSync(svgPath, svg)

    const resvg = new Resvg(svg, {
      fitTo: { mode: 'width', value: OUT_SIZE },
      background: 'white',
    })
    const pngBuffer = resvg.render().asPng()
    fs.writeFileSync(pngPath, pngBuffer)
    await sharp(pngBuffer).jpeg({ quality: JPG_QUALITY, mozjpeg: true }).toFile(jpgPath)

    outputs.push({ base, profile, variant })
    console.log(`✓ ${base} -> .svg, .png, .jpg`)
  }
}

writePreview(outputs)
console.log(`\nDone: ${outputs.length} demo illustrations in\n  ${OUT_DIR}`)

function writePreview(items) {
  const figures = items
    .map(
      ({ base, profile, variant }) => `    <figure data-tone="${profile.tone}">
      <img src="${base}.png" alt="${profile.title} - ${variant.name}"/>
      <figcaption><strong>${profile.title}</strong><span>${variant.name}</span>${variant.note}</figcaption>
    </figure>`,
    )
    .join('\n')

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <title>Philosophy profile one-person demos</title>
  <style>
    :root { font-family: system-ui, sans-serif; color: #2a211a; background: #faf7f0; }
    body { margin: 0; padding: 2rem 1.4rem 3rem; max-width: 1280px; margin-inline: auto; }
    h1 { font-size: 1.45rem; margin: 0 0 .35rem; font-weight: 650; }
    p { margin: 0 0 1.35rem; color: #65584d; line-height: 1.55; max-width: 760px; }
    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 1rem; }
    figure { margin: 0; background: #fffdf8; border: 1px solid #e5dccd; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(70, 55, 37, .07); }
    img { display: block; width: 100%; aspect-ratio: 1; object-fit: cover; background: #f6efe2; }
    figcaption { padding: .75rem .85rem .9rem; font-size: .82rem; line-height: 1.4; color: #6a5d50; }
    strong, span { display: block; color: #2a211a; }
    span { margin: .12rem 0 .28rem; font-weight: 600; color: #8b6a3f; }
  </style>
</head>
<body>
  <h1>Philosophy profile - one-person demo set</h1>
  <p>Three warm, soft line-and-wash variants for each of the 12 Philosophy Profiles. Every image uses a single person and a distinct profile prop.</p>
  <div class="grid">
${figures}
  </div>
</body>
</html>
`

  fs.writeFileSync(path.join(OUT_DIR, 'preview.html'), html)
}
