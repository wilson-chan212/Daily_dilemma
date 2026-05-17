/**
 * Downloads philosopher portraits via English Wikipedia pageimages (Commons-hosted).
 * Use when Commons file titles are hard to guess.
 *
 *   node scripts/fetch-wikipedia-portraits.mjs
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const OUT_DIR = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'web', 'images', 'philosophers')

const targets = [
  { slug: 'mary-wollstonecraft', title: 'Mary Wollstonecraft' },
  { slug: 'aldo-leopold', title: 'Aldo Leopold' },
  { slug: 'apostle-paul', title: 'Paul the Apostle' },
  { slug: 'augustine-of-hippo', title: 'Augustine of Hippo' },
  { slug: 'bell-hooks', title: 'Bell hooks' },
  { slug: 'benjamin-franklin', title: 'Benjamin Franklin' },
  { slug: 'c-s-lewis', title: 'C. S. Lewis' },
  { slug: 'cicero', title: 'Cicero' },
  { slug: 'elinor-ostrom', title: 'Elinor Ostrom' },
  { slug: 'hans-jonas', title: 'Hans Jonas' },
  { slug: 'joan-didion', title: 'Joan Didion' },
  { slug: 'john-dewey', title: 'John Dewey' },
  { slug: 'john-morley', title: 'John Morley' },
  { slug: 'joseph-hall', title: 'Joseph Hall (bishop)' },
  { slug: 'konstantin-tsiolkovsky', title: 'Konstantin Tsiolkovsky' },
  { slug: 'kwame-anthony-appiah', title: 'Kwame Anthony Appiah' },
  { slug: 'michael-sandel', title: 'Michael Sandel' },
  { slug: 'paul-farmer', title: 'Paul Farmer' },
  { slug: 'rachel-carson', title: 'Rachel Carson' },
  { slug: 'rumi', title: 'Rumi' },
  { slug: 'voltaire', title: 'Voltaire' },
  { slug: 'walter-benjamin', title: 'Walter Benjamin' },
]

function exists(slug) {
  return ['jpg', 'png', 'webp'].some((ext) => fs.existsSync(path.join(OUT_DIR, `${slug}.${ext}`)))
}

async function wikiThumb(title) {
  const api = new URL('https://en.wikipedia.org/w/api.php')
  api.searchParams.set('action', 'query')
  api.searchParams.set('titles', title)
  api.searchParams.set('prop', 'pageimages')
  api.searchParams.set('pithumbsize', '800')
  api.searchParams.set('format', 'json')
  const res = await fetch(api.toString(), {
    headers: { 'user-agent': 'DailyDilemma/1.0 (wikipedia portrait fetch)' },
  })
  if (!res.ok) throw new Error(`Wikipedia API ${res.status} for ${title}`)
  const data = await res.json()
  const page = Object.values(data.query.pages)[0]
  if (!page || page.missing) throw new Error(`No page for ${title}`)
  const url = page.thumbnail && page.thumbnail.source
  if (!url) throw new Error(`No thumbnail for ${title}`)
  return url
}

async function download(url, outPath) {
  const res = await fetch(url, {
    headers: { 'user-agent': 'DailyDilemma/1.0 (wikipedia portrait fetch)' },
  })
  if (!res.ok) throw new Error(`Download ${res.status}`)
  const buf = Buffer.from(await res.arrayBuffer())
  await fs.promises.writeFile(outPath, buf)
}

async function run() {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true })
  const list = targets.filter((t) => !exists(t.slug))
  console.log(`Fetching ${list.length} via Wikipedia…`)

  let ok = 0
  for (const t of list) {
    await new Promise((r) => setTimeout(r, 2500))
    try {
      const url = await wikiThumb(t.title)
      const ext = url.includes('.png') ? 'png' : 'jpg'
      const outPath = path.join(OUT_DIR, `${t.slug}.${ext}`)
      await download(url, outPath)
      console.log(`OK   ${t.slug}.${ext}`)
      ok += 1
    } catch (err) {
      console.log(`FAIL ${t.slug}: ${err.message}`)
    }
  }
  console.log(`Done. ok=${ok} fail=${list.length - ok}`)
}

run().catch((err) => {
  console.error(err)
  process.exitCode = 1
})
