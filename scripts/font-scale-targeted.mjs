/**
 * Targeted horizontal-overflow + header metrics at large font.
 */
import { chromium, devices } from 'playwright';

const BASE = process.env.BASE_URL || 'http://127.0.0.1:5173';

async function main() {
  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext({ ...devices['iPhone 13'], viewport: { width: 390, height: 844 } });
  const page = await ctx.newPage();
  await page.goto(`${BASE}/index.html`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1000);

  await page.evaluate(() => {
    localStorage.setItem('dd_ai_chat_font', 'lg');
    localStorage.setItem('dd_ai_philosopher', 'plato');
  });
  await page.reload({ waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(800);

  // Open chat tab + dismiss gateway
  await page.locator('#tab-btn-chat').click({ force: true });
  await page.waitForTimeout(500);
  const close = page.locator('#btn-close-chat-pick');
  if (await close.isVisible().catch(() => false)) await close.click();
  await page.waitForTimeout(500);

  const metrics = await page.evaluate(() => {
    const vw = document.documentElement.clientWidth;
    const horiz = [];
    document.querySelectorAll('body *').forEach((el) => {
      if (!(el instanceof HTMLElement)) return;
      if (el.closest('#export-card-container, [hidden], .visually-hidden')) return;
      const s = getComputedStyle(el);
      if (s.display === 'none' || s.visibility === 'hidden') return;
      const r = el.getBoundingClientRect();
      if (r.width < 4 || r.height < 4) return;
      const ox = Math.max(0, r.right - vw) + Math.max(0, -r.left);
      if (ox > 3) {
        horiz.push({
          tag: el.tagName + (el.id ? '#' + el.id : '') + (el.className ? '.' + String(el.className).split(/\s+/)[0] : ''),
          ox: Math.round(ox),
          w: Math.round(r.width),
        });
      }
    });
    horiz.sort((a, b) => b.ox - a.ox);

    const header = document.querySelector('.ai-modal-header');
    const headerR = header?.getBoundingClientRect();
    const title = document.querySelector('.ai-modal-title');
    const actions = document.querySelector('.ai-modal-header-actions');
    const platoSpan = document.querySelector('#btn-plato-reader span');

    return {
      vw,
      horizCount: horiz.length,
      horizTop: horiz.slice(0, 15),
      header: headerR
        ? { w: headerR.width, right: headerR.right, overflowX: headerR.right > vw + 1 }
        : null,
      title: title ? getComputedStyle(title).fontSize : null,
      actionsW: actions?.getBoundingClientRect().width,
      platoSpan: platoSpan
        ? {
            scrollW: platoSpan.scrollWidth,
            clientW: platoSpan.clientWidth,
            clipped: platoSpan.scrollWidth > platoSpan.clientWidth + 1,
            text: platoSpan.textContent,
          }
        : null,
      chatPanelHidden: document.getElementById('tab-panel-chat')?.hidden,
      fontBtnVisible: (() => {
        const b = document.getElementById('btn-ai-chat-font');
        if (!b) return false;
        const r = b.getBoundingClientRect();
        return r.width > 0 && r.height > 0;
      })(),
    };
  });

  console.log('=== AI chat lg @ 390px ===');
  console.log(JSON.stringify(metrics, null, 2));

  // Plato reader
  const plato = page.locator('#btn-plato-reader');
  if (await plato.isVisible().catch(() => false)) {
    await plato.click();
    await page.waitForTimeout(600);
    const platoMetrics = await page.evaluate(() => {
      const vw = document.documentElement.clientWidth;
      const horiz = [];
      const sheet = document.querySelector('.plato-reader-sheet');
      document.querySelectorAll('.plato-reader-sheet *').forEach((el) => {
        if (!(el instanceof HTMLElement)) return;
        const r = el.getBoundingClientRect();
        if (r.width < 4) return;
        const ox = Math.max(0, r.right - vw) + Math.max(0, -r.left);
        if (ox > 3) {
          horiz.push({
            tag: el.tagName + (el.className ? '.' + String(el.className).split(/\s+/)[0] : ''),
            ox: Math.round(ox),
          });
        }
      });
      const navBtns = [...document.querySelectorAll('.plato-reader-nav-btn')].map((b) => ({
        text: b.innerText.replace(/\s+/g, ' ').slice(0, 30),
        fs: getComputedStyle(b).fontSize,
        h: b.getBoundingClientRect().height,
        scrollH: b.scrollHeight,
        clipped: b.scrollHeight > b.clientHeight + 2,
      }));
      return {
        horizCount: horiz.length,
        horizTop: horiz.slice(0, 10),
        navBtns,
        bodyFs: getComputedStyle(document.querySelector('.plato-reader-block-body')).fontSize,
      };
    });
    console.log('\n=== Plato reader lg ===');
    console.log(JSON.stringify(platoMetrics, null, 2));
  }

  // Root 150% on home
  await page.evaluate(() => {
    document.documentElement.style.fontSize = '150%';
    document.querySelector('.plato-reader-overlay')?.setAttribute('hidden', '');
  });
  await page.locator('#tab-btn-home').click({ force: true });
  await page.waitForTimeout(400);
  const homeHoriz = await page.evaluate(() => {
    const vw = document.documentElement.clientWidth;
    let n = 0;
    const top = [];
    document.querySelectorAll('.header, .app-tab-bar, .dilemma-card, .sticky-next').forEach((root) => {
      root.querySelectorAll('*').forEach((el) => {
        if (!(el instanceof HTMLElement)) return;
        const r = el.getBoundingClientRect();
        const ox = Math.max(0, r.right - vw) + Math.max(0, -r.left);
        if (ox > 3 && r.width > 4) {
          n++;
          top.push({ tag: el.className || el.id, ox: Math.round(ox) });
        }
      });
    });
    top.sort((a, b) => b.ox - a.ox);
    return { n, top: top.slice(0, 10), tabBarH: document.querySelector('.app-tab-bar')?.getBoundingClientRect().height };
  });
  console.log('\n=== Home @ root 150% ===');
  console.log(JSON.stringify(homeHoriz, null, 2));

  await browser.close();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
