/**
 * Try common dev ports in order; spawn http-server on the first free port.
 * Evidence: EADDRINUSE on 5173 when another tool already binds it (see npm run serve errors).
 */
import net from 'net';
import path from 'path';
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const CANDIDATES = [5173, 5174, 5175, 5176, 8080];

function portFree(port) {
  return new Promise((resolve) => {
    const srv = net.createServer();
    srv.once('error', () => resolve(false));
    srv.listen({ port, host: '0.0.0.0' }, () => {
      srv.close(() => resolve(true));
    });
  });
}

async function pickPort() {
  for (const p of CANDIDATES) {
    if (await portFree(p)) return p;
  }
  return null;
}

const port = await pickPort();
if (port == null) {
  console.error(`serve-pick-port: no free port among ${CANDIDATES.join(', ')}`);
  process.exit(1);
}

const url = `http://127.0.0.1:${port}/`;
console.log(`Daily Dilemma — ${url} (first free port among ${CANDIDATES.join(', ')})`);
console.error(`Daily Dilemma — ${url} (npm run serve)`);

const child = spawn('npx', ['http-server', '.', '-p', String(port), '-c-1'], {
  cwd: root,
  stdio: 'inherit',
  shell: true,
});

child.on('error', (err) => {
  console.error('serve-pick-port: failed to start http-server:', err.message);
  console.error('Try: npm run serve:5173   or   npx http-server . -p 8080 -c-1');
  process.exit(1);
});

function forwardSignal(sig) {
  try {
    child.kill(sig);
  } catch {
    /* ignore */
  }
}
for (const sig of ['SIGINT', 'SIGTERM']) {
  process.on(sig, () => forwardSignal(sig));
}

child.on('exit', (code) => process.exit(code == null ? 1 : code));
