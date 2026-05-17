import fs from 'fs';

const cssNew = fs.readFileSync('web/snippets/philosopher-gateway.css', 'utf8');
const jsNew = fs.readFileSync('web/snippets/philosopher-gateway.js', 'utf8');
const jsVars = jsNew.split('function getPhilosopherDisplayName')[0].trim();
const jsFuncs = jsNew.slice(jsNew.indexOf('function getPhilosopherDisplayName'));

for (const cssFile of ['web/style.css', 'style.css']) {
  let css = fs.readFileSync(cssFile, 'utf8');
  const s = css.indexOf('/* Chat philosopher picker');
  const e = css.indexOf('.ch-preview{');
  if (s < 0 || e < 0) throw new Error(`css markers ${cssFile}`);
  css = css.slice(0, s) + cssNew + '\n' + css.slice(e);
  fs.writeFileSync(cssFile, css);
  console.log('css', cssFile);
}

const listenerOld = `document.getElementById('btn-chat-after-answer')?.addEventListener('click', () => {
  openChatPickOverlay();
});
document.getElementById('btn-close-chat-pick')?.addEventListener('click', closeChatPickOverlay);
document.getElementById('btn-chat-pick-profile')?.addEventListener('click', openChatPickProfile);
document.getElementById('btn-chat-pick-send')?.addEventListener('click', () => {
  sendChatPickAndOpenChat();
});
document.getElementById('chat-pick-overlay')?.addEventListener('click', (e) => {
  if (e.target === document.getElementById('chat-pick-overlay')) closeChatPickOverlay();
});`;

const listenerNew = `document.getElementById('btn-chat-after-answer')?.addEventListener('click', () => {
  openPhilosopherGateway('post-answer');
});
document.getElementById('btn-close-chat-pick')?.addEventListener('click', closePhilosopherGateway);
document.getElementById('btn-gateway-back')?.addEventListener('click', showPhilosopherGatewayGrid);
document.getElementById('btn-gateway-start-chat')?.addEventListener('click', () => {
  philosopherGatewayStartChat();
});
document.getElementById('btn-gateway-profile')?.addEventListener('click', philosopherGatewayOpenProfile);
document.getElementById('chat-pick-overlay')?.addEventListener('click', (e) => {
  if (e.target === document.getElementById('chat-pick-overlay')) closePhilosopherGateway();
});`;

for (const jsFile of ['web/app.js', 'app.js']) {
  let js = fs.readFileSync(jsFile, 'utf8');
  js = js.replace(
    /\/\*\* Philosopher id selected in post-answer chat picker overlay \(not persisted until send\)\. \*\/\nlet chatPickPhilosopherId = null;\n\/\*\* Profile scroll opened from picker during current overlay session\. \*\/\nlet chatPickProfilesRead = new Set\(\);/,
    jsVars
  );
  const start = js.indexOf('function getChatPickPhilosopherDisplayName');
  const end = js.indexOf('function closeAiAssistant()');
  if (start < 0 || end < 0) throw new Error(`js markers ${jsFile}`);
  js = js.slice(0, start) + jsFuncs + '\n\n' + js.slice(end);
  if (!js.includes(listenerNew)) {
    if (js.includes(listenerOld)) js = js.replace(listenerOld, listenerNew);
    else throw new Error(`listeners not found ${jsFile}`);
  }
  js = js.replace(
    "document.getElementById('tab-btn-chat')?.addEventListener('click', () => setMainTab('chat'));",
    "document.getElementById('tab-btn-chat')?.addEventListener('click', () => openPhilosopherGateway('tab'));"
  );
  js = js.replace(
    /if \(isChatPickOverlayOpen\(\)\) \{\n    const id = chatPickPhilosopherId \|\| getSelectedPhilosopherId\(\);\n    markChatPickProfileRead\(id\);\n    requestAnimationFrame\(\(\) => \{\n      document\.getElementById\('btn-chat-pick-profile'\)\?\.focus\(\);\n    \}\);\n  \}/,
    `if (isChatPickOverlayOpen() && philosopherGatewaySelectedId) {
    requestAnimationFrame(() => {
      showPhilosopherGatewayActions(philosopherGatewaySelectedId);
    });
  }`
  );
  js = js.replace(
    'if (isChatPickOverlayOpen()) applyChatPickOverlayTexts();',
    'if (isChatPickOverlayOpen()) applyPhilosopherGatewayTexts();'
  );
  fs.writeFileSync(jsFile, js);
  console.log('js', jsFile);
}
