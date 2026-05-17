/**
 * Download distinct PD profile-section images from Wikimedia Commons.
 * Run: node scripts/download-philosopher-profile-sections.mjs
 */
import fs from 'fs'
import path from 'path'
import crypto from 'crypto'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

/** @type {Record<string, { intro: string, early: string, ideas: string, attribution: Record<string, string> }>} */
const SOURCES = {
  plato: {
    intro: 'Plato-raphael.jpg',
    early: "MANNapoli 124545 plato's academy mosaic (cropped).jpg",
    ideas: 'Plato Silanion Musei Capitolini MC1377.jpg',
    attribution: {
      intro: 'https://commons.wikimedia.org/wiki/File:Plato-raphael.jpg',
      early:
        "https://commons.wikimedia.org/wiki/File:MANNapoli_124545_plato's_academy_mosaic_(cropped).jpg",
      ideas: 'https://commons.wikimedia.org/wiki/File:Plato_Silanion_Musei_Capitolini_MC1377.jpg',
    },
  },
  socrates: {
    intro: 'Socrates Louvre.jpg',
    early: 'David - The Death of Socrates.jpg',
    ideas: 'Statue of Socrates in front of the National Academy of Athens.jpg',
    attribution: {
      intro: 'https://commons.wikimedia.org/wiki/File:Socrates_Louvre.jpg',
      early: 'https://commons.wikimedia.org/wiki/File:David_-_The_Death_of_Socrates.jpg',
      ideas:
        'https://commons.wikimedia.org/wiki/File:Statue_of_Socrates_in_front_of_the_National_Academy_of_Athens.jpg',
    },
  },
  aristotle: {
    intro: 'Aristotle Altemps Inv8575.jpg',
    early: "Aristotle and Plato in Raphael's School of Athens.jpg",
    ideas: 'Francesco Hayez Aristotle.jpg',
    attribution: {
      intro: 'https://commons.wikimedia.org/wiki/File:Aristotle_Altemps_Inv8575.jpg',
      early:
        "https://commons.wikimedia.org/wiki/File:Aristotle_and_Plato_in_Raphael's_School_of_Athens.jpg",
      ideas: 'https://commons.wikimedia.org/wiki/File:Francesco_Hayez_Aristotle.jpg',
    },
  },
  confucius: {
    intro: 'Half Portraits of the Great Sage and Virtuous Men of Old - Confucius.jpg',
    early: 'Kongzi (Confucius) Temple, Qufu (13035569695).jpg',
    ideas: 'Rongo Analects 02.jpg',
    attribution: {
      intro:
        'https://commons.wikimedia.org/wiki/File:Half_Portraits_of_the_Great_Sage_and_Virtuous_Men_of_Old_-_Confucius.jpg',
      early:
        'https://commons.wikimedia.org/wiki/File:Kongzi_(Confucius)_Temple,_Qufu_(13035569695).jpg',
      ideas: 'https://commons.wikimedia.org/wiki/File:Rongo_Analects_02.jpg',
    },
  },
  kant: {
    intro: 'Immanuel Kant (painted portrait).jpg',
    early: 'Kant wohnhaus 2.jpg',
    ideas: 'Kant Critique of pure reason 1781.jpg',
    attribution: {
      intro: 'https://commons.wikimedia.org/wiki/File:Immanuel_Kant_(painted_portrait).jpg',
      early: 'https://commons.wikimedia.org/wiki/File:Kant_wohnhaus_2.jpg',
      ideas: 'https://commons.wikimedia.org/wiki/File:Kant_Critique_of_pure_reason_1781.jpg',
    },
  },
  laozi: {
    intro: 'Laozi.jpg',
    early: 'Lao-Tzu on his buffalo, followed by a disciple.jpg',
    ideas: 'Representation of Laozi.PNG',
    attribution: {
      intro: 'https://commons.wikimedia.org/wiki/File:Laozi.jpg',
      early:
        'https://commons.wikimedia.org/wiki/File:Lao-Tzu_on_his_buffalo,_followed_by_a_disciple.jpg',
      ideas: 'https://commons.wikimedia.org/wiki/File:Representation_of_Laozi.PNG',
    },
  },
  buddha: {
    intro: 'Fasting Buddha (22388752086).jpg',
    early: 'Lumbini1.jpg',
    ideas: 'Sarnath capital.jpg',
    attribution: {
      intro: 'https://commons.wikimedia.org/wiki/File:Fasting_Buddha_(22388752086).jpg',
      early: 'https://commons.wikimedia.org/wiki/File:Lumbini1.jpg',
      ideas: 'https://commons.wikimedia.org/wiki/File:Sarnath_capital.jpg',
    },
  },
  marx: {
    intro: 'Karl Marx 001.jpg',
    early: 'Karl-Marx-Haus Trier 2009.jpg',
    ideas: 'Manifestet1848.jpg',
    attribution: {
      intro: 'https://commons.wikimedia.org/wiki/File:Karl_Marx_001.jpg',
      early: 'https://commons.wikimedia.org/wiki/File:Karl-Marx-Haus_Trier_2009.jpg',
      ideas: 'https://commons.wikimedia.org/wiki/File:Manifestet1848.jpg',
    },
  },
}

const SECTION_KEYS = [
  ['intro', 'brief-intro'],
  ['early', 'early-life'],
  ['ideas', 'main-ideas'],
]

async function commonsThumbUrlViaRedirect(fileName, width = 500) {
  const url = `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(fileName)}?width=${width}`
  return { url, mime: 'image/jpeg' }
}

async function commonsThumbUrl(fileName, width = 500) {
  const title = fileName.startsWith('File:') ? fileName : `File:${fileName}`
  const api = new URL('https://commons.wikimedia.org/w/api.php')
  api.searchParams.set('action', 'query')
  api.searchParams.set('format', 'json')
  api.searchParams.set('origin', '*')
  api.searchParams.set('titles', title)
  api.searchParams.set('prop', 'imageinfo')
  api.searchParams.set('iiprop', 'url|mime')
  api.searchParams.set('iiurlwidth', String(width))
  for (let attempt = 0; attempt < 6; attempt++) {
    await sleep(1000 + attempt * 2500)
    const res = await fetch(api, {
      headers: { 'User-Agent': 'DailyDilemma/1.0 (educational; profile images)' },
    })
    if (res.status === 429) continue
    if (!res.ok) throw new Error(`API ${res.status} for ${title}`)
    const j = await res.json()
    const page = Object.values(j.query.pages)[0]
    if (page.missing || !page.imageinfo) throw new Error(`Commons file not found: ${title}`)
    const info = page.imageinfo[0]
    return { url: info.thumburl || info.url, mime: info.mime || 'image/jpeg' }
  }
  throw new Error(`API rate-limited for ${title}`)
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

async function download(url, attempt = 0) {
  await sleep(attempt ? 4000 * attempt : 1200)
  const res = await fetch(url, {
    headers: { 'User-Agent': 'DailyDilemma/1.0 (educational; profile images)' },
  })
  if (res.status === 429 && attempt < 4) return download(url, attempt + 1)
  if (!res.ok) throw new Error(`${res.status} ${url}`)
  return Buffer.from(await res.arrayBuffer())
}

function extFromMime(mime) {
  if (mime.includes('png')) return 'png'
  if (mime.includes('gif')) return 'gif'
  return 'jpg'
}

async function main() {
  const dirs = [
    path.join(root, 'web/images/philosopher-profile-sections'),
    path.join(root, 'images/philosopher-profile-sections'),
  ]
  for (const d of dirs) fs.mkdirSync(d, { recursive: true })

  const extOverrides = {}
  const attributionLines = [
    'Profile reader section images (brief-intro, early-life, main-ideas).',
    'Three distinct images per philosopher; sourced from Wikimedia Commons (PD / PD-Art).',
    '',
  ]

  const force = process.env.FORCE === '1'

  for (const [id, spec] of Object.entries(SOURCES)) {
    attributionLines.push(`  ${id}:`)
    for (const [key, suffix] of SECTION_KEYS) {
      const existing = fs
        .readdirSync(dirs[0])
        .find((f) => f.startsWith(`${id}-${suffix}.`))
      if (existing && !force) {
        console.log(`skip ${existing} (exists)`)
        attributionLines.push(`    ${existing}: ${spec.attribution[key]}`)
        continue
      }
      const fileName = spec[key]
      let url, mime
      try {
        ;({ url, mime } = await commonsThumbUrl(fileName))
      } catch {
        ;({ url, mime } = await commonsThumbUrlViaRedirect(fileName))
      }
      const ext = extFromMime(mime)
      const filename = `${id}-${suffix}.${ext}`
      if (ext !== 'jpg') {
        if (!extOverrides[id]) extOverrides[id] = {}
        extOverrides[id][key === 'intro' ? 'intro' : key === 'early' ? 'early' : 'ideas'] = ext
      }
      const buf = await download(url)
      for (const dir of dirs) {
        // Remove other extensions for same slot
        for (const oldExt of ['jpg', 'png', 'gif']) {
          const old = path.join(dir, `${id}-${suffix}.${oldExt}`)
          if (oldExt !== ext && fs.existsSync(old)) fs.unlinkSync(old)
        }
        fs.writeFileSync(path.join(dir, filename), buf)
      }
      console.log(`OK ${filename} (${buf.length} bytes) <- ${fileName}`)
      attributionLines.push(`    ${filename}: ${spec.attribution[key]}`)
    }
    attributionLines.push('')
  }

  for (const dir of dirs) {
    const png = path.join(dir, 'buddha-brief-intro.png')
    if (fs.existsSync(png)) fs.unlinkSync(png)
  }

  const attrPath = path.join(root, 'images/philosopher-profile-sections/WIKIMEDIA-ATTRIBUTION.txt')
  fs.writeFileSync(attrPath, attributionLines.join('\n'))
  fs.copyFileSync(attrPath, path.join(root, 'web/images/philosopher-profile-sections/WIKIMEDIA-ATTRIBUTION.txt'))

  fs.writeFileSync(
    path.join(root, 'scripts/philosopher-profile-section-ext.generated.json'),
    JSON.stringify(extOverrides, null, 2)
  )

  for (const id of Object.keys(SOURCES)) {
    const hashes = new Set()
    for (const [, suffix] of SECTION_KEYS) {
      const dir = dirs[0]
      const match = fs.readdirSync(dir).find((f) => f.startsWith(`${id}-${suffix}.`))
      if (!match) {
        console.error(`MISSING ${id}-${suffix}`)
        continue
      }
      const h = crypto.createHash('md5').update(fs.readFileSync(path.join(dir, match))).digest('hex').slice(0, 8)
      if (hashes.has(h)) console.error(`DUPLICATE within ${id}: ${match}`)
      hashes.add(h)
    }
  }
  console.log('Done.')
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
