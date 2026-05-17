/**
 * Rasterize philosophy-profile-soft-rounded demo SVGs to PNG + JPG.
 * Usage: node scripts/convert-philosophy-profile-demos.mjs
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { Resvg } from '@resvg/resvg-js'
import sharp from 'sharp'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DEMOS_DIR = path.join(
  __dirname,
  '..',
  'web',
  'images',
  'philosophy-profile-soft-rounded',
  'demos',
)
const OUT_SIZE = 1024
const JPG_QUALITY = 92

const svgs = fs
  .readdirSync(DEMOS_DIR)
  .filter((f) => f.startsWith('demo-') && f.endsWith('.svg'))
  .sort()

if (!svgs.length) {
  console.error('No demo SVG files found in', DEMOS_DIR)
  process.exit(1)
}

for (const file of svgs) {
  const base = file.replace(/\.svg$/i, '')
  const svgPath = path.join(DEMOS_DIR, file)
  const pngPath = path.join(DEMOS_DIR, `${base}.png`)
  const jpgPath = path.join(DEMOS_DIR, `${base}.jpg`)

  let svg = fs.readFileSync(svgPath, 'utf8')
  // Strip comments and non-XML control chars (resvg is strict).
  svg = svg.replace(/<!--[\s\S]*?-->/g, '').replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '')
  const resvg = new Resvg(svg, {
    fitTo: { mode: 'width', value: OUT_SIZE },
    background: 'white',
  })
  const pngBuffer = resvg.render().asPng()
  fs.writeFileSync(pngPath, pngBuffer)

  await sharp(pngBuffer).jpeg({ quality: JPG_QUALITY, mozjpeg: true }).toFile(jpgPath)

  console.log(`✓ ${base} → .png, .jpg (${OUT_SIZE}px)`)
}

console.log(`\nDone: ${svgs.length} files in\n  ${DEMOS_DIR}`)
