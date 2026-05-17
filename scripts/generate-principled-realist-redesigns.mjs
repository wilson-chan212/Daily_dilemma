/**
 * Generate three connected-head redesigns for the Principled Realist profile.
 * Output: SVG sources plus PNG/JPG exports in
 * web/images/philosophy-profile-soft-rounded/principled-realist-redesigns.
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
  'principled-realist-redesigns',
)

const OUT_SIZE = 1024
const JPG_QUALITY = 92
const ink = '#57483d'
const paper = '#f6efe2'
const skin = '#edd3bd'
const hair = '#6e5948'
const red = '#b87866'
const redSoft = '#e4b7a4'
const tan = '#d7b184'

fs.mkdirSync(OUT_DIR, { recursive: true })

const designs = [
  {
    id: '01',
    title: 'Warm Desk Study',
    note: 'Closest to the reference: storybook linework, seated figure, document review.',
    svg: warmDeskStudy,
  },
  {
    id: '02',
    title: 'Editorial Side Profile',
    note: 'More mature editorial look with side pose, long coat, and evidence board.',
    svg: editorialSideProfile,
  },
  {
    id: '03',
    title: 'Soft Paper Portrait',
    note: 'Simpler rounded portrait style with integrated truth/document symbol.',
    svg: softPaperPortrait,
  },
]

for (const design of designs) {
  const base = `demo-pp-principled-realist-redesign-${design.id}`
  const svg = design.svg(design.title)
  const svgPath = path.join(OUT_DIR, `${base}.svg`)
  const pngPath = path.join(OUT_DIR, `${base}.png`)
  const jpgPath = path.join(OUT_DIR, `${base}.jpg`)

  fs.writeFileSync(svgPath, svg)
  const resvg = new Resvg(svg, {
    fitTo: { mode: 'width', value: OUT_SIZE },
    background: 'white',
  })
  const pngBuffer = resvg.render().asPng()
  fs.writeFileSync(pngPath, pngBuffer)
  await sharp(pngBuffer).jpeg({ quality: JPG_QUALITY, mozjpeg: true }).toFile(jpgPath)
  console.log(`✓ ${base} -> .svg, .png, .jpg`)
}

writePreview()
console.log(`\nDone: ${designs.length} redesigns in\n  ${OUT_DIR}`)

function shell(title, body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" fill="none" role="img" aria-label="Principled Realist - ${title}">
  <defs>
    <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="16" stdDeviation="18" flood-color="#a98d73" flood-opacity=".18"/>
    </filter>
  </defs>
  <rect width="1024" height="1024" rx="38" fill="${paper}"/>
  <path d="M92 143c138-52 280-68 415-35 143 35 260 11 425-31" stroke="#eadfca" stroke-width="34" stroke-linecap="round" opacity=".34"/>
  <path d="M78 848c148 34 290 29 421-15 154-51 280-37 448 23" stroke="${redSoft}" stroke-width="42" stroke-linecap="round" opacity=".25"/>
  <circle cx="203" cy="196" r="3" fill="#d3c3aa" opacity=".25"/>
  <circle cx="784" cy="220" r="2.5" fill="#d3c3aa" opacity=".25"/>
  <circle cx="827" cy="739" r="3" fill="#d3c3aa" opacity=".25"/>
  <circle cx="164" cy="687" r="2.5" fill="#d3c3aa" opacity=".25"/>
${body}
</svg>
`
}

function faceFront(x, y, scale, expression = 'soft') {
  const smile = expression === 'serious' ? 'M-2 39c19 5 38 3 54-7' : 'M-4 37c19 13 42 12 60-5'
  return `<g transform="translate(${x} ${y}) scale(${scale})">
    <path d="M-58-74c37-43 118-27 130 31 12 61-36 113-95 101-54-11-71-80-35-132z" fill="${skin}" stroke="${ink}" stroke-width="7" stroke-linejoin="round"/>
    <path d="M-62-61c15-52 90-75 131-25 21 25 21 54 10 76-22-31-65-34-103-23-15 4-30-7-38-28z" fill="${hair}" stroke="${ink}" stroke-width="7" stroke-linejoin="round"/>
    <path d="M-30-74c-8 23-26 34-50 39M0-75c-8 19-24 30-47 36" stroke="${ink}" stroke-width="5" stroke-linecap="round" opacity=".62"/>
    <circle cx="-8" cy="-15" r="5.5" fill="${ink}"/>
    <circle cx="35" cy="-13" r="5.5" fill="${ink}"/>
    <path d="M21 4c8 9 18 12 30 9" stroke="${ink}" stroke-width="4" stroke-linecap="round"/>
    <path d="${smile}" stroke="${ink}" stroke-width="4" stroke-linecap="round" opacity=".72"/>
  </g>`
}

function faceSide(x, y, scale) {
  return `<g transform="translate(${x} ${y}) scale(${scale})">
    <path d="M-68-66c37-48 119-34 139 20 19 52-17 112-77 119-50 6-84-34-80-82 1-22 7-40 18-57z" fill="${skin}" stroke="${ink}" stroke-width="7" stroke-linejoin="round"/>
    <path d="M-70-58c15-54 88-84 134-38 25 25 24 58 10 81-16-25-47-36-85-27-30 7-49 1-59-16z" fill="${hair}" stroke="${ink}" stroke-width="7" stroke-linejoin="round"/>
    <path d="M3-70c-9 20-28 32-57 37" stroke="${ink}" stroke-width="5" stroke-linecap="round" opacity=".6"/>
    <circle cx="27" cy="-16" r="5.5" fill="${ink}"/>
    <path d="M51 3c12 6 21 7 32 2" stroke="${ink}" stroke-width="4" stroke-linecap="round"/>
    <path d="M24 34c17 9 36 8 53-3" stroke="${ink}" stroke-width="4" stroke-linecap="round" opacity=".72"/>
  </g>`
}

function documentIcon(x, y, scale, color = red) {
  return `<g transform="translate(${x} ${y}) scale(${scale})">
    <path d="M-72-104H43l48 48v159H-72z" fill="#fff8ea" stroke="${ink}" stroke-width="6" stroke-linejoin="round"/>
    <path d="M43-104v48h48" stroke="${ink}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M-35-39h74M-35 0h90M-35 39h62" stroke="${ink}" stroke-width="6" stroke-linecap="round"/>
    <circle cx="64" cy="62" r="38" fill="${color}" opacity=".45" stroke="${ink}" stroke-width="6"/>
    <path d="M90 88l39 39" stroke="${ink}" stroke-width="6" stroke-linecap="round"/>
  </g>`
}

function warmDeskStudy(title) {
  return shell(
    title,
    `  <g filter="url(#softShadow)">
    <ellipse cx="512" cy="862" rx="300" ry="42" fill="#d8c7aa" opacity=".38"/>
    <rect x="214" y="658" width="596" height="52" rx="26" fill="${tan}" stroke="${ink}" stroke-width="7"/>
    <path d="M360 710v116M664 710v116" stroke="${ink}" stroke-width="8" stroke-linecap="round"/>
    <path d="M454 432h77c-3 46-1 72 8 104H445c10-33 13-67 9-104z" fill="${skin}" stroke="${ink}" stroke-width="7" stroke-linejoin="round"/>
    ${faceFront(478, 342, 1.27, 'serious')}
    <path d="M332 542c38-85 166-111 244-48 54 44 70 107 62 174H301c-8-44 2-88 31-126z" fill="${redSoft}" stroke="${ink}" stroke-width="7" stroke-linejoin="round"/>
    <path d="M444 537c31 22 55 55 72 99" stroke="${ink}" stroke-width="6" stroke-linecap="round" opacity=".5"/>
    <path d="M346 615c-50 10-87 28-121 55" stroke="${ink}" stroke-width="10" stroke-linecap="round"/>
    <path d="M620 613c46 11 85 28 124 55" stroke="${ink}" stroke-width="10" stroke-linecap="round"/>
    <circle cx="223" cy="671" r="18" fill="${skin}" stroke="${ink}" stroke-width="6"/>
    <circle cx="746" cy="669" r="18" fill="${skin}" stroke="${ink}" stroke-width="6"/>
    ${documentIcon(661, 514, 1.04)}
    <path d="M282 655c38-24 87-31 146-20" stroke="#b79c79" stroke-width="18" stroke-linecap="round" opacity=".24"/>
  </g>`,
  )
}

function editorialSideProfile(title) {
  return shell(
    title,
    `  <g filter="url(#softShadow)">
    <ellipse cx="514" cy="872" rx="250" ry="38" fill="#d8c7aa" opacity=".34"/>
    <path d="M379 431h72c-7 39-5 68 9 96h-90c12-32 15-65 9-96z" fill="${skin}" stroke="${ink}" stroke-width="7" stroke-linejoin="round"/>
    ${faceSide(417, 343, 1.22)}
    <path d="M342 512c33-65 129-88 197-44 56 36 84 116 78 256H328c-10-92-6-162 14-212z" fill="#d9aa98" stroke="${ink}" stroke-width="7" stroke-linejoin="round"/>
    <path d="M410 724c-20 50-29 96-31 146M531 723c23 48 35 93 39 146" stroke="${ink}" stroke-width="10" stroke-linecap="round"/>
    <path d="M358 582c-61 30-101 67-126 116" stroke="${ink}" stroke-width="11" stroke-linecap="round"/>
    <path d="M584 565c51-2 98 16 140 53" stroke="${ink}" stroke-width="11" stroke-linecap="round"/>
    <circle cx="233" cy="700" r="18" fill="${skin}" stroke="${ink}" stroke-width="6"/>
    <circle cx="725" cy="619" r="18" fill="${skin}" stroke="${ink}" stroke-width="6"/>
    <g transform="translate(715 390)">
      <path d="M-98-111H97V91H-98z" fill="#fff8ea" stroke="${ink}" stroke-width="7" stroke-linejoin="round"/>
      <path d="M-63-60H61M-63-17H75M-63 26H38" stroke="${ink}" stroke-width="6" stroke-linecap="round"/>
      <path d="M-108 111H108" stroke="${ink}" stroke-width="7" stroke-linecap="round"/>
      <circle cx="60" cy="41" r="37" fill="${red}" opacity=".42" stroke="${ink}" stroke-width="6"/>
      <path d="M84 66l43 43" stroke="${ink}" stroke-width="6" stroke-linecap="round"/>
    </g>
    <path d="M314 503c-24 80-20 153 12 220" stroke="#fff3e1" stroke-width="18" stroke-linecap="round" opacity=".35"/>
  </g>`,
  )
}

function softPaperPortrait(title) {
  return shell(
    title,
    `  <g filter="url(#softShadow)">
    <ellipse cx="512" cy="858" rx="278" ry="42" fill="#d8c7aa" opacity=".35"/>
    <path d="M451 449h96c-7 48-3 86 13 117H438c16-34 21-73 13-117z" fill="${skin}" stroke="${ink}" stroke-width="7" stroke-linejoin="round"/>
    <path d="M283 676c17-130 99-218 211-218h41c113 0 197 88 212 218l19 171H264l19-171z" fill="${redSoft}" stroke="${ink}" stroke-width="8" stroke-linejoin="round"/>
    ${faceFront(497, 340, 1.5, 'soft')}
    <path d="M380 611c41 38 70 82 90 139M634 609c-42 39-70 84-91 141" stroke="${ink}" stroke-width="8" stroke-linecap="round" opacity=".48"/>
    <g transform="translate(512 687) scale(1.18)">
      <path d="M-74-102H42l48 48v156H-74z" fill="#fff8ea" stroke="${ink}" stroke-width="6" stroke-linejoin="round"/>
      <path d="M42-102v48h48" stroke="${ink}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M-37-36h72M-37 2h90M-37 40h58" stroke="${ink}" stroke-width="6" stroke-linecap="round"/>
      <path d="M-91 132H91" stroke="${ink}" stroke-width="6" stroke-linecap="round"/>
      <circle cx="63" cy="61" r="37" fill="${red}" opacity=".45" stroke="${ink}" stroke-width="6"/>
      <path d="M88 87l38 38" stroke="${ink}" stroke-width="6" stroke-linecap="round"/>
    </g>
    <path d="M329 715c-57 38-82 78-72 123" stroke="${ink}" stroke-width="12" stroke-linecap="round"/>
    <path d="M692 715c58 38 83 78 73 123" stroke="${ink}" stroke-width="12" stroke-linecap="round"/>
    <circle cx="258" cy="837" r="18" fill="${skin}" stroke="${ink}" stroke-width="6"/>
    <circle cx="764" cy="837" r="18" fill="${skin}" stroke="${ink}" stroke-width="6"/>
  </g>`,
  )
}

function writePreview() {
  const figures = designs
    .map((design) => {
      const base = `demo-pp-principled-realist-redesign-${design.id}`
      return `    <figure>
      <img src="${base}.png" alt="Principled Realist - ${design.title}"/>
      <figcaption><strong>${design.title}</strong>${design.note}</figcaption>
    </figure>`
    })
    .join('\n')

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <title>Principled Realist redesign demos</title>
  <style>
    :root { font-family: system-ui, sans-serif; color: #2a211a; background: #faf7f0; }
    body { margin: 0; padding: 2rem 1.4rem 3rem; max-width: 980px; margin-inline: auto; }
    h1 { font-size: 1.45rem; margin: 0 0 .35rem; font-weight: 650; }
    p { margin: 0 0 1.35rem; color: #65584d; line-height: 1.55; max-width: 760px; }
    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1rem; }
    figure { margin: 0; background: #fffdf8; border: 1px solid #e5dccd; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(70, 55, 37, .07); }
    img { display: block; width: 100%; aspect-ratio: 1; object-fit: cover; background: #f6efe2; }
    figcaption { padding: .8rem .9rem 1rem; font-size: .88rem; line-height: 1.45; color: #6a5d50; }
    strong { display: block; color: #2a211a; margin-bottom: .25rem; }
  </style>
</head>
<body>
  <h1>Principled Realist - connected-head redesigns</h1>
  <p>Three one-person directions based on the earlier demo. Each keeps the warm paper/line-art feeling, but the head is physically connected to the body with a neck.</p>
  <div class="grid">
${figures}
  </div>
</body>
</html>
`

  fs.writeFileSync(path.join(OUT_DIR, 'preview.html'), html)
}
