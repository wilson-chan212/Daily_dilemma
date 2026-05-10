/**
 * 3 graphic-forward "Brief introduction" SVGs (same full text, richer layout).
 * Run: node scripts/build-plato-brief-intro-graphics.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const outDir = path.join(root, "images", "chat-plato-demos");
const webDir = path.join(root, "web", "images", "chat-plato-demos");

const C = {
  bg: "#f5f4f0",
  surface: "#faf9f7",
  line: "#eeecea",
  border: "#dbd9d4",
  text: "#1e1c18",
  muted: "#7a7874",
  primary: "#6b5b4f",
  acA: "#c5603a",
  acB: "#4a87a8",
};

const part1 = `Plato is one of the most influential philosophers in the European tradition and a defining shaper of how &quot;philosophy&quot; is practiced as systematic argument in dialogue form.`;
const part2 = `His writings are almost entirely <strong style="font-weight:700;color:${C.primary}">dialogues</strong>, many starring <strong style="font-weight:700;color:${C.primary}">Socrates</strong>, blending drama, rhetoric critique, and arguments about <strong style="font-weight:700;color:${C.primary}">justice</strong>, <strong style="font-weight:700;color:${C.primary}">knowledge</strong>, <strong style="font-weight:700;color:${C.primary}">love</strong>, <strong style="font-weight:700;color:${C.primary}">death and the soul</strong>, and the <strong style="font-weight:700;color:${C.primary}">ideal community</strong>.`;
const part3 = `Interpreters disagree on how literally to take some proposals (for example in the <em>Republic</em>), but the texts persistently press the reader to ask what makes a life and a city <strong style="font-weight:700;color:${C.primary}">good</strong>, not merely powerful or pleasant.`;

function fo(y, h, inner) {
  return `<foreignObject x="0" y="${y}" width="390" height="${h}">
    <div xmlns="http://www.w3.org/1999/xhtml" style="box-sizing:border-box;font-family:'DM Sans',system-ui,-apple-system,sans-serif;color:${C.text};font-size:14.5px;line-height:1.68;">
      ${inner}
    </div>
  </foreignObject>`;
}

function foAt(x, y, w, h, inner) {
  return `<foreignObject x="${x}" y="${y}" width="${w}" height="${h}">
    <div xmlns="http://www.w3.org/1999/xhtml" style="box-sizing:border-box;font-family:'DM Sans',system-ui,-apple-system,sans-serif;color:${C.text};font-size:14.5px;line-height:1.68;">
      ${inner}
    </div>
  </foreignObject>`;
}

function wrap(h, body) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="390" height="${h}" viewBox="0 0 390 ${h}" role="img" aria-labelledby="t d">
  <title id="t">Plato brief introduction graphic demo</title>
  <desc id="d">Full introductory paragraph with infographic-style layout.</desc>
  ${body}
</svg>
`;
}

const I = {
  bust: (x, y, sc) =>
    `<g transform="translate(${x},${y}) scale(${sc})" fill="none" stroke="${C.primary}" stroke-width="2" stroke-linecap="round"><circle cx="22" cy="18" r="14"/><path d="M8 34c4 12 12 18 22 18s18-6 22-18"/><path d="M6 14c4-7 12-10 22-10s18 3 22 10"/></g>`,
  mask: (x, y, sc) =>
    `<g transform="translate(${x},${y}) scale(${sc})" fill="none" stroke="${C.acA}" stroke-width="2"><path d="M2 10c10-7 30-7 40 0v16c-10 9-30 9-40 0z"/><path d="M14 20h4M28 20h4"/><path d="M20 26c3 2 7 2 10 0"/></g>`,
  scroll: (x, y, sc) =>
    `<g transform="translate(${x},${y}) scale(${sc})" fill="none" stroke="${C.primary}" stroke-width="2"><path d="M6 4h20a4 4 0 0 1 4 4v30a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4z"/><path d="M10 14h16M10 20h14M10 26h16"/></g>`,
  columns: (x, y, sc) =>
    `<g transform="translate(${x},${y}) scale(${sc})" fill="none" stroke="${C.acB}" stroke-width="2"><path d="M2 32V6h36v26M10 6v26M20 6v26M30 6v26M4 2h32"/></g>`,
  sun: (x, y, sc) =>
    `<g transform="translate(${x},${y}) scale(${sc})" fill="none" stroke="${C.acA}" stroke-width="1.8"><circle cx="18" cy="18" r="9" fill="${C.acA}" fill-opacity="0.15"/><path d="M18 2v4M18 30v4M2 18h4M30 18h4"/></g>`,
  cave: (x, y, sc) =>
    `<g transform="translate(${x},${y}) scale(${sc})" fill="none" stroke="${C.primary}" stroke-width="2" stroke-linecap="round"><path d="M4 40c8-28 28-36 44-28"/><path d="M12 40c6-16 18-22 32-18"/><ellipse cx="46" cy="10" rx="6" ry="6" fill="${C.acA}" fill-opacity="0.25" stroke="none"/></g>`,
};

/** Inline SVG chips for header strip (22×22, stroke icons) */
const chip = (stroke, d) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="${stroke}" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="${d}"/></svg>`;

const HEADER_CHIPS = [
  { s: C.primary, d: "M8 5h12l2 4v12l-8-4-8 4V9l2-4z" },
  { s: C.acA, d: "M5 6h7v12H5zM13 6h7v12h-7zM9 10h6M9 14h6" },
  { s: C.acB, d: "M5 21h14M7 21V10l5-5 5 5v11M10 14h4" },
  { s: C.primary, d: "M12 3v4M5 9l2 2M19 9l-2 2M6 16l2-2M18 16l-2-2M12 12v9" },
  { s: C.acA, d: "M4 15s4 5 8 5 8-5 8-5M6 12h12M8 8h8" },
];

function headerIconStrip() {
  return `<div style="display:flex;gap:8px;margin-top:16px;flex-wrap:wrap;">
    ${HEADER_CHIPS.map(
      (c) =>
        `<span style="display:flex;width:40px;height:40px;border-radius:14px;align-items:center;justify-content:center;background:${C.surface};border:1px solid ${C.border};box-shadow:0 2px 8px rgba(0,0,0,.04);">${chip(c.s, c.d)}</span>`
    ).join("")}
  </div>`;
}

/** Seven profile sections — visual “nav” (demo only); Brief introduction is current */
function sectionNavGrid() {
  const NAV = [
    { label: "Brief introduction", cur: true, s: C.acB, d: "M5 4h14l2 3v12l-9-4-9 4V7l2-3z" },
    { label: "Early life", cur: false, s: C.primary, d: "M4 20 L10 10 L14 14 L20 6" },
    { label: "Key achievements", cur: false, s: C.acA, d: "M10 4h4v2l2 2v10H8V8l2-2zM11 15h2" },
    { label: "Main ideas", cur: false, s: C.acB, d: "M12 3v4M5 9l2 2M19 9l-2 2M6 16l2-2M18 16l-2-2M12 12v9" },
    { label: "Key concepts", cur: false, s: C.primary, d: "M8 5h8v8H8zM10 8h4M10 11h4M10 14h4" },
    { label: "Suggested books", cur: false, s: C.acA, d: "M5 6h7v12H5zM13 6h7v12h-7zM9 10h6M9 14h6" },
    { label: "Suggested videos", cur: false, s: C.acB, d: "M10 8l8 5-8 5zM6 6h4v12H6z" },
  ];
  const cell = (item) =>
    `<div style="display:flex;flex-direction:column;align-items:center;gap:3px;padding:5px 2px;border-radius:12px;border:1px solid ${item.cur ? C.acB : C.border};background:${item.cur ? `${C.acB}12` : C.surface};box-shadow:${item.cur ? `0 0 0 2px ${C.acB}40` : "0 1px 6px rgba(0,0,0,.04)"};min-height:52px;justify-content:center;">
      <span style="display:flex;width:28px;height:28px;border-radius:9px;align-items:center;justify-content:center;background:${item.cur ? C.surface : C.bg};transform:scale(0.92);">${chip(item.s, item.d)}</span>
      <span style="font-size:7.5px;line-height:1.12;color:${item.cur ? C.text : C.muted};font-weight:${item.cur ? 700 : 600};text-align:center;max-width:86px;">${item.label}</span>
    </div>`;
  const row1 = NAV.slice(0, 4).map(cell).join("");
  const row2 = NAV.slice(4).map(cell).join("");
  return `<div style="margin-top:10px;">
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:6px;">${row1}</div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-top:6px;">${row2}</div>
  </div>`;
}

/** Graphic-02 section: Roman badge + accent bar + body (full part text) */
function g02Section(roman, accent, connectorDown, partHtml) {
  return `<div style="display:flex;gap:10px;align-items:stretch;margin-bottom:${connectorDown ? "12px" : "0"};">
    <div style="flex:0 0 30px;display:flex;flex-direction:column;align-items:center;">
      <div style="width:26px;height:26px;border-radius:50%;background:${accent}18;border:2px solid ${accent};color:${accent};font:700 11px 'DM Sans',Arial,sans-serif;display:flex;align-items:center;justify-content:center;">${roman}</div>
      ${
        connectorDown
          ? `<div style="width:2px;flex:1;min-height:26px;background:linear-gradient(180deg,${accent}50,${C.line});margin:5px 0;border-radius:1px;"></div>`
          : ""
      }
    </div>
    <div style="flex:1;min-width:0;border-radius:16px;background:${C.surface};border:1px solid ${C.border};box-shadow:0 6px 22px rgba(0,0,0,.06);overflow:hidden;">
      <div style="height:2px;background:${accent};"></div>
      <div style="padding:11px 13px 13px;font-size:12.5px;line-height:1.72;letter-spacing:.012em;color:${C.text};">${partHtml}</div>
    </div>
  </div>`;
}

/* Style 1 — Hero circle + theme strip + 3 text bands */
function build1() {
  const h = 1280;
  const body =
    `<rect width="390" height="${h}" fill="${C.bg}"/>` +
    `<circle cx="300" cy="96" r="62" fill="${C.surface}" stroke="${C.border}"/>` +
    I.bust(272, 68, 1.05) +
    `<rect x="24" y="228" width="160" height="3" rx="1.5" fill="${C.acA}"/>` +
    `<text x="24" y="268" fill="${C.muted}" font-family="DM Sans,Arial,sans-serif" font-size="10" letter-spacing="0.14em">THEMES</text>` +
    I.mask(36, 286, 0.75) +
    I.scroll(116, 284, 0.75) +
    I.columns(196, 284, 0.72) +
    I.sun(276, 278, 0.85) +
    `<rect x="24" y="332" width="342" height="1" fill="${C.line}"/>` +
    fo(
      0,
      230,
      `<div style="padding:28px 24px 8px;background:${C.bg};">
        <p style="margin:0 0 12px;font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:${C.muted};">Plato &#183; Profile</p>
        <h1 style="margin:0;font-family:'DM Serif Display',Georgia,serif;font-size:30px;font-weight:400;color:${C.text};">Brief introduction</h1>
      </div>`
    ) +
    fo(
      340,
      260,
      `<div style="padding:0 22px;">
        <div style="padding:20px;border-radius:20px;background:${C.surface};border:1px solid ${C.border};box-shadow:0 3px 14px rgba(0,0,0,.05);">
          <p style="margin:0;font-size:22px;font-family:'DM Serif Display',Georgia,serif;line-height:1.25;color:${C.acB};opacity:.9;">&#8220;</p>
          <p style="margin:6px 0 0;font-size:15px;line-height:1.65;color:${C.text};">${part1}</p>
        </div>
      </div>`
    ) +
    fo(
      600,
      300,
      `<div style="padding:0 22px;">
        <div style="display:flex;gap:10px;align-items:flex-start;margin-bottom:14px;">
          <span style="flex-shrink:0;width:32px;height:32px;border-radius:10px;background:${C.acA}22;display:flex;align-items:center;justify-content:center;color:${C.acA};font-weight:700;font-size:14px;">2</span>
          <span style="font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:${C.muted};padding-top:8px;">Cast &amp; topics</span>
        </div>
        <div style="padding:18px 18px 20px;border-radius:18px;background:${C.surface};border:1px solid ${C.border};">
          <p style="margin:0;">${part2}</p>
        </div>
      </div>`
    ) +
    fo(
      900,
      340,
      `<div style="padding:0 22px 36px;">
        <div style="display:flex;gap:12px;align-items:center;margin-bottom:14px;">
          <span style="flex-shrink:0;width:36px;height:36px;border-radius:12px;background:${C.acB}22;display:flex;align-items:center;justify-content:center;font-family:'DM Serif Display',Georgia,serif;font-size:16px;color:${C.acB};">R</span>
          <span style="font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:${C.muted};">Reading the <em>Republic</em></span>
        </div>
        <div style="padding:18px;border-radius:18px;background:linear-gradient(145deg,${C.surface} 0%, ${C.bg} 100%);border:1px solid ${C.border};">
          <p style="margin:0;">${part3}</p>
        </div>
      </div>`
    );

  return wrap(h, body);
}

/* Style 2 — Section nav (7) + 4 theme pills + compact timeline cards (graphic-02) */
function build2() {
  /** Body stack height tuned to three paragraphs (no tall transparent tail inside foreignObject) */
  const bodyH = 548;
  const h = 278 + bodyH;
  const laneTop = 292;
  const laneBot = 668;
  const body =
    `<defs>
      <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${C.surface}"/><stop offset="1" stop-color="${C.bg}"/></linearGradient>
      <pattern id="g2dots" width="18" height="18" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1.2" fill="${C.primary}" opacity="0.055"/>
      </pattern>
    </defs>` +
    `<rect width="390" height="${h}" fill="url(#g2)"/>` +
    `<rect width="390" height="${h}" fill="url(#g2dots)"/>` +
    `<ellipse cx="78" cy="210" rx="118" ry="88" fill="${C.acB}" fill-opacity="0.06"/>` +
    `<ellipse cx="318" cy="360" rx="88" ry="72" fill="${C.acA}" fill-opacity="0.045"/>` +
    I.cave(278, 12, 0.82) +
    `<line x1="18" y1="${laneTop}" x2="18" y2="${laneBot}" stroke="${C.line}" stroke-width="2" stroke-dasharray="5 9" opacity="0.85"/>` +
    `<circle cx="18" cy="332" r="4.5" fill="${C.acB}" opacity="0.55"/>` +
    `<circle cx="18" cy="498" r="4.5" fill="${C.primary}" opacity="0.45"/>` +
    `<circle cx="18" cy="652" r="4.5" fill="${C.acA}" opacity="0.5"/>` +
    fo(
      0,
      278,
      `<div style="padding:18px 16px 8px;">
        <p style="margin:0 0 10px;font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:${C.muted};">Plato &#183; Profile</p>
        ${sectionNavGrid()}
        <div style="margin-top:12px;display:flex;flex-wrap:nowrap;justify-content:space-between;gap:6px;">
          ${["Dialogue", "Justice", "Knowledge", "Good"].map((w, i) => {
            const tint = i % 2 === 0 ? C.acB : C.acA;
            return `<span style="flex:1;min-width:0;text-align:center;padding:8px 6px;border-radius:999px;border:1px solid ${C.border};background:${C.surface};font-size:10px;font-weight:700;color:${tint};letter-spacing:0.03em;box-shadow:0 1px 4px rgba(0,0,0,.04);">${w}</span>`;
          }).join("")}
        </div>
      </div>`
    ) +
    fo(
      278,
      bodyH,
      `<div style="box-sizing:border-box;min-height:${bodyH}px;background:${C.bg};padding:0 14px 6px 12px;display:flex;flex-direction:column;justify-content:flex-start;">
        ${g02Section("I", C.acB, true, part1)}
        ${g02Section("II", C.primary, true, part2)}
        ${g02Section("III", C.acA, false, part3)}
      </div>`
    );

  return wrap(h, body);
}

/* Style 3 — Magazine rail + big numerals + pull rail */
function build3() {
  const h = 1260;
  const rail =
    `<rect x="0" y="0" width="56" height="${h}" fill="${C.surface}"/>` +
    `<line x1="55.5" y1="0" x2="55.5" y2="${h}" stroke="${C.border}"/>` +
    `<circle cx="28" cy="120" r="6" fill="${C.acB}"/>` +
    `<circle cx="28" cy="260" r="6" fill="${C.primary}"/>` +
    `<circle cx="28" cy="420" r="6" fill="${C.acA}"/>` +
    `<text x="28" y="200" text-anchor="middle" fill="${C.muted}" font-family="DM Sans" font-size="11" transform="rotate(-90 28 200)">INTRO</text>`;

  const body =
    rail +
    `<rect x="56" y="0" width="334" height="${h}" fill="${C.bg}"/>` +
    foAt(
      56,
      0,
      334,
      200,
      `<div style="padding:28px 22px 8px 6px;">
        <p style="margin:0 0 12px;font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:${C.muted};">Plato &#183; Profile</p>
        <h1 style="margin:0;font-family:'DM Serif Display',Georgia,serif;font-size:32px;line-height:1.1;color:${C.text};">Brief<br/>introduction</h1>
        <div style="margin-top:16px;height:4px;width:56px;background:${C.acA};border-radius:2px;"></div>
      </div>`
    ) +
    foAt(
      56,
      200,
      334,
      280,
      `<div style="padding:0 20px 0 6px;">
        <div style="display:flex;gap:12px;align-items:flex-start;">
          <span style="flex-shrink:0;font-family:'DM Serif Display',Georgia,serif;font-size:42px;line-height:1;color:${C.acB};opacity:.35;">1</span>
          <p style="margin:8px 0 0;">${part1}</p>
        </div>
      </div>`
    ) +
    foAt(
      56,
      460,
      334,
      320,
      `<div style="padding:0 20px 0 6px;">
        <div style="display:flex;gap:12px;align-items:flex-start;">
          <span style="flex-shrink:0;font-family:'DM Serif Display',Georgia,serif;font-size:42px;line-height:1;color:${C.primary};opacity:.35;">2</span>
          <div style="margin-top:4px;">
            <p style="margin:0;padding:16px;border-left:3px solid ${C.acA};background:${C.surface};border-radius:0 16px 16px 0;">${part2}</p>
          </div>
        </div>
      </div>`
    ) +
    foAt(
      56,
      780,
      334,
      460,
      `<div style="padding:0 20px 40px 6px;">
        <div style="display:flex;gap:12px;align-items:flex-start;">
          <span style="flex-shrink:0;font-family:'DM Serif Display',Georgia,serif;font-size:42px;line-height:1;color:${C.acA};opacity:.35;">3</span>
          <p style="margin:8px 0 0;">${part3}</p>
        </div>
      </div>`
    );

  return wrap(h, body);
}

function write(name, content) {
  fs.mkdirSync(outDir, { recursive: true });
  fs.mkdirSync(webDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, name), content, "utf8");
  fs.writeFileSync(path.join(webDir, name), content, "utf8");
}

write("demo-plato-brief-intro-graphic-01.svg", build1());
write("demo-plato-brief-intro-graphic-02.svg", build2());
write("demo-plato-brief-intro-graphic-03.svg", build3());

console.log("Wrote demo-plato-brief-intro-graphic-0[1-3].svg -> images/chat-plato-demos + web/images/chat-plato-demos");
