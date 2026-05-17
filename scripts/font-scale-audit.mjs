/**
 * Audits layout overflow when AI chat font is "lg" and when root font-size is boosted.
 * Run: node scripts/font-scale-audit.mjs
 */
import { chromium, devices } from 'playwright';

const BASE = process.env.BASE_URL || 'http://127.0.0.1:5173';
const VIEWPORT = { width: 390, height: 844 }; // iPhone 14-ish

function overflowReport(page, label) {
  return page.evaluate((lbl) => {
    const issues = [];
    const vw = document.documentElement.clientWidth;
    const vh = document.documentElement.clientHeight;
    const skipSel =
      '#export-card-container, #export-card, .export-only, [hidden], .visually-hidden';
    const nodes = document.querySelectorAll(
      'body *:not(script):not(style):not(svg):not(path):not(circle):not(rect):not(line):not(polyline):not(polygon)'
    );
    nodes.forEach((el) => {
      if (!(el instanceof HTMLElement)) return;
      if (el.closest(skipSel)) return;
      const style = getComputedStyle(el);
      if (style.display === 'none' || style.visibility === 'hidden') return;
      if (parseFloat(style.opacity) === 0) return;
      const rect = el.getBoundingClientRect();
      if (rect.width < 2 || rect.height < 2) return;
      const ox = Math.max(0, rect.right - vw) + Math.max(0, -rect.left);
      const oy = Math.max(0, rect.bottom - vh) + Math.max(0, -rect.top);
      if (ox > 2 || oy > 2) {
        const tag = `${el.tagName.toLowerCase()}${el.id ? '#' + el.id : ''}${el.className && typeof el.className === 'string' ? '.' + el.className.trim().split(/\s+/).slice(0, 2).join('.') : ''}`;
        issues.push({
          tag,
          ox: Math.round(ox),
          oy: Math.round(oy),
          text: (el.innerText || '').replace(/\s+/g, ' ').slice(0, 40),
        });
      }
    });
    issues.sort((a, b) => b.ox + b.oy - (a.ox + a.oy));
    return { label: lbl, count: issues.length, top: issues.slice(0, 12) };
  }, label);
}

async function dismissBlockingModals(page) {
  const closeChatPick = page.locator('#btn-close-chat-pick');
  if (await closeChatPick.count()) {
    const overlay = page.locator('#chat-pick-overlay');
    const visible = await overlay.evaluate((el) => !el.hidden && getComputedStyle(el).display !== 'none').catch(() => false);
    if (visible) await closeChatPick.click({ timeout: 2000 }).catch(() => {});
    await page.waitForTimeout(400);
  }
  for (const sel of ['.modal-overlay:not([hidden]) .btn-close', '#btn-dismiss-onboarding']) {
    const b = page.locator(sel).first();
    if (await b.count()) await b.click({ timeout: 1500 }).catch(() => {});
  }
  await page.waitForTimeout(300);
}

async function clickTab(page, id) {
  await dismissBlockingModals(page);
  const btn = page.locator(`#${id}`);
  if (await btn.count()) await btn.click({ timeout: 8000, force: true });
  await page.waitForTimeout(400);
}

async function setAiFontLg(page) {
  await page.evaluate(() => {
    localStorage.setItem('dd_ai_chat_font', 'lg');
  });
  await page.reload({ waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(800);
  const modal = page.locator('.modal.ai-modal');
  if (await modal.count()) {
    await modal.evaluate((el) => el.setAttribute('data-ai-font', 'lg'));
  }
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ ...devices['iPhone 13'], viewport: VIEWPORT });
  const page = await context.newPage();
  const reports = [];

  try {
    await page.goto(`${BASE}/index.html`, { waitUntil: 'domcontentloaded', timeout: 20000 });
    await page.waitForTimeout(1200);

    // Default font — all tabs
    const tabs = ['tab-btn-home', 'tab-btn-chat', 'tab-btn-forum', 'tab-btn-profile', 'tab-btn-bookmarks'];
    for (const tab of tabs) {
      await clickTab(page, tab);
      reports.push(await overflowReport(page, `default / ${tab}`));
    }

    // Large AI font
    await setAiFontLg(page);
    await clickTab(page, 'tab-btn-chat');
    reports.push(await overflowReport(page, 'ai-font-lg / chat tab'));

    const fontBtn = page.locator('#btn-ai-chat-font');
    if (await fontBtn.count()) {
      await fontBtn.click();
      await page.waitForTimeout(300);
      reports.push(await overflowReport(page, 'cycled font / chat'));
    }

    // Plato reader if openable
    const platoBtn = page.locator('.btn-plato-reader').first();
    if (await platoBtn.count()) {
      await platoBtn.click({ timeout: 3000 }).catch(() => {});
      await page.waitForTimeout(600);
      const sheet = page.locator('.plato-reader-sheet');
      if (await sheet.count()) {
        await sheet.evaluate((el) => el.setAttribute('data-ai-font', 'lg'));
        reports.push(await overflowReport(page, 'ai-font-lg / plato reader'));
      }
    }

    // OS-style root boost (150%)
    await page.evaluate(() => {
      document.documentElement.style.fontSize = '150%';
    });
    for (const tab of ['tab-btn-home', 'tab-btn-chat', 'tab-btn-forum']) {
      await clickTab(page, tab);
      reports.push(await overflowReport(page, `root 150% / ${tab}`));
    }
  } catch (err) {
    console.error('Audit failed:', err.message);
    process.exitCode = 1;
  } finally {
    await browser.close();
  }

  console.log(JSON.stringify(reports, null, 2));
  const bad = reports.filter((r) => r.count > 8);
  if (bad.length) {
    console.error('\nScreens with many overflows (>8):', bad.map((b) => b.label).join(', '));
    process.exitCode = 1;
  }
}

main();
