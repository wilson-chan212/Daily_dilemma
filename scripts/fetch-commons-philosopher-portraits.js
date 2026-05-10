/* eslint-disable no-console */
'use strict'

/**
 * Downloads portraits from Wikimedia Commons when the license allows reuse
 * (Public Domain, CC0, CC BY, CC BY-SA, etc.—see isAllowedLicense).
 *
 * Run:
 *   node scripts/fetch-commons-philosopher-portraits.js
 *
 * Output:
 *   Saves files into web/images/philosophers/<slug>.<ext>
 */

const fs = require('fs')
const path = require('path')

const OUT_DIR = path.join(__dirname, '..', 'web', 'images', 'philosophers')

/** Licenses acceptable for profile “Thinkers you echo” portraits. */
function isAllowedLicense(licenseShortName) {
  const s = String(licenseShortName || '').toLowerCase()
  return (
    s.includes('public domain') ||
    s.includes('cc0') ||
    s.includes('cc by') ||
    s.includes('gnu free documentation')
  )
}

async function commonsFileInfo(fileTitle) {
  const api = new URL('https://commons.wikimedia.org/w/api.php')
  api.searchParams.set('action', 'query')
  api.searchParams.set('titles', `File:${fileTitle}`)
  api.searchParams.set('prop', 'imageinfo')
  api.searchParams.set('iiprop', 'url|extmetadata')
  api.searchParams.set('format', 'json')

  const res = await fetch(api.toString(), {
    headers: { 'user-agent': 'DailyDilemma/1.0 (portrait fetch script)' },
  })
  if (!res.ok) throw new Error(`Commons API failed (${res.status}) for ${fileTitle}`)
  const data = await res.json()
  const pages = data && data.query && data.query.pages ? data.query.pages : {}
  const page = pages[Object.keys(pages)[0]]
  const ii = page && page.imageinfo && page.imageinfo[0] ? page.imageinfo[0] : null
  if (!ii || !ii.url) throw new Error(`Missing imageinfo.url for ${fileTitle}`)

  const meta = ii.extmetadata || {}
  const license = (meta.LicenseShortName && meta.LicenseShortName.value) || ''
  const licenseUrl = (meta.LicenseUrl && meta.LicenseUrl.value) || ''
  const attribution = (meta.Attribution && meta.Attribution.value) || ''

  return { url: ii.url, license, licenseUrl, attribution }
}

async function downloadTo(url, outPath) {
  const cleanUrl = (() => {
    try {
      const u = new URL(url)
      u.search = ''
      return u.toString()
    } catch {
      return url
    }
  })()

  let attempt = 0
  // Basic backoff for Wikimedia rate limiting.
  while (attempt < 4) {
    attempt += 1
    const res = await fetch(cleanUrl, {
      headers: { 'user-agent': 'DailyDilemma/1.0 (portrait fetch script)' },
    })
    if (res.ok) {
      const buf = Buffer.from(await res.arrayBuffer())
      await fs.promises.writeFile(outPath, buf)
      return
    }
    if (res.status === 429 && attempt < 4) {
      const waitMs = 600 * attempt * attempt
      await new Promise(r => setTimeout(r, waitMs))
      continue
    }
    throw new Error(`Download failed (${res.status}) ${cleanUrl}`)
  }
}

function ensureDir() {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true })
}

function extFromUrl(url) {
  const u = new URL(url)
  const m = u.pathname.match(/\.([a-zA-Z0-9]+)$/)
  const ext = (m && m[1] ? m[1] : 'jpg').toLowerCase()
  // Keep common raster types only.
  if (ext === 'jpeg') return 'jpg'
  if (ext === 'jpg' || ext === 'png' || ext === 'webp') return ext
  return 'jpg'
}

const targets = [
  // slug is your local filename base (consistent kebab-case).
  { thinker: 'John Stuart Mill', slug: 'john-stuart-mill', commons: 'JohnStuartMill.jpg' },
  { thinker: 'David Hume', slug: 'david-hume', commons: 'Allan Ramsay - David Hume, 1711 - 1776. Historian and philosopher - Google Art Project.jpg' },
  { thinker: 'Confucius', slug: 'confucius', commons: 'Portrait of Konfucius, 18th century.jpg' },
  { thinker: 'Epictetus', slug: 'epictetus', commons: 'Epictetus from L. Annaei Senecae philosophi Opera, 1605, title page detail.png' },
  { thinker: 'Hannah Arendt', slug: 'hannah-arendt', commons: 'Hannah Arendt 1933.jpg' },
  { thinker: 'John Rawls', slug: 'john-rawls', commons: 'John Rawls (1971 photo portrait).jpg' },
  { thinker: 'Simone de Beauvoir', slug: 'simone-de-beauvoir', commons: 'Simone de Beauvoir in Beijing 1955.jpg' },
  // Philosophy Profile archetypes — ensure slug matches kebab-case name in app resolution
  { thinker: 'Amartya Sen', slug: 'amartya-sen', commons: 'Amartya Sen 2012.jpg' },
  { thinker: 'Carol Gilligan', slug: 'carol-gilligan', commons: 'Carol Gilligan P1010970 - cropped.jpg' },
  { thinker: 'Isaiah Berlin', slug: 'isaiah-berlin', commons: 'IsaiahBerlin1983.jpg' },
  { thinker: 'Martha Nussbaum', slug: 'martha-nussbaum', commons: 'Martha Nussbaum 2010 (cropped2).jpg' },
  { thinker: 'Peter Singer', slug: 'peter-singer', commons: 'Peter Singer MIT Veritas.jpg' },
  { thinker: 'Viktor Frankl', slug: 'viktor-frankl', commons: 'Viktor Frankl2.jpg' },
]

async function run() {
  ensureDir()
  console.log(`Saving to: ${OUT_DIR}`)

  const results = []

  for (const t of targets) {
    // Gentle pacing reduces Wikimedia 429 rate limits on imageinfo queries.
    await new Promise(r => setTimeout(r, 750))
    try {
      const info = await commonsFileInfo(t.commons)
      if (!isAllowedLicense(info.license)) {
        console.log(`SKIP  ${t.slug}: license not allowed: "${info.license}" (${info.licenseUrl || 'no url'})`)
        results.push({ ...t, ok: false, reason: `license_not_allowed:${info.license}` })
        continue
      }

      const ext = extFromUrl(info.url)
      const outPath = path.join(OUT_DIR, `${t.slug}.${ext}`)
      if (fs.existsSync(outPath)) {
        console.log(`HAVE  ${t.slug}.${ext}`)
        results.push({ ...t, ok: true, out: outPath, reused: true, license: info.license })
        continue
      }

      await downloadTo(info.url, outPath)
      console.log(`OK    ${t.slug}.${ext}  (${info.license})`)
      results.push({ ...t, ok: true, out: outPath, reused: false, license: info.license })
    } catch (err) {
      console.log(`FAIL  ${t.slug}: ${err && err.message ? err.message : String(err)}`)
      results.push({ ...t, ok: false, reason: 'error' })
    }
  }

  const ok = results.filter(r => r.ok).length
  const skip = results.filter(r => !r.ok).length
  console.log(`Done. ok=${ok} skip_or_fail=${skip}`)
}

run().catch(err => {
  console.error(err)
  process.exitCode = 1
})

