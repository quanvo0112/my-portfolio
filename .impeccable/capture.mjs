import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const [url, widthText, heightText, output, mode] = process.argv.slice(2);
const width = Number(widthText);
const height = Number(heightText);
const port = 12000 + Math.floor(Math.random() * 40000);
const chrome = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const profile = path.resolve(`.impeccable/chrome-cdp-${width}-${process.pid}-${Date.now()}`);

fs.mkdirSync('.impeccable/review', { recursive: true });
const child = spawn(chrome, [
  '--headless=new',
  '--disable-gpu',
  '--hide-scrollbars',
  '--no-first-run',
  '--no-default-browser-check',
  '--remote-debugging-address=127.0.0.1',
  `--remote-debugging-port=${port}`,
  `--user-data-dir=${profile}`,
  'about:blank',
], { stdio: 'ignore' });

const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

try {
  let version;
  for (let attempt = 0; attempt < 40; attempt += 1) {
    try {
      version = await fetch(`http://127.0.0.1:${port}/json/version`).then((res) => res.json());
      break;
    } catch {
      await pause(100);
    }
  }
  if (!version) throw new Error('Chrome DevTools did not start');

  const target = await fetch(`http://127.0.0.1:${port}/json/new?${encodeURIComponent(url)}`, { method: 'PUT' })
    .then((res) => res.json());
  const ws = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise((resolve, reject) => {
    ws.addEventListener('open', resolve, { once: true });
    ws.addEventListener('error', reject, { once: true });
  });

  let nextId = 0;
  const pending = new Map();
  ws.addEventListener('message', (event) => {
    const message = JSON.parse(event.data);
    if (!message.id || !pending.has(message.id)) return;
    const { resolve, reject } = pending.get(message.id);
    pending.delete(message.id);
    if (message.error) reject(new Error(message.error.message));
    else resolve(message.result);
  });
  const send = (method, params = {}) => new Promise((resolve, reject) => {
    const id = ++nextId;
    pending.set(id, { resolve, reject });
    ws.send(JSON.stringify({ id, method, params }));
  });

  await send('Page.enable');
  await send('Emulation.setDeviceMetricsOverride', {
    width,
    height,
    deviceScaleFactor: 1,
    mobile: width < 600,
    screenWidth: width,
    screenHeight: height,
  });
  await send('Page.navigate', { url });
  await send('Runtime.evaluate', {
    expression: '(async () => { await document.fonts.ready; await new Promise(r => setTimeout(r, 1200)); return true; })()',
    awaitPromise: true,
  });
  const { contentSize } = await send('Page.getLayoutMetrics');
  const jpeg = /\.jpe?g$/i.test(output);
  const viewportOnly = mode === 'viewport';
  const capture = await send('Page.captureScreenshot', {
    format: jpeg ? 'jpeg' : 'png',
    ...(jpeg ? { quality: 86 } : {}),
    captureBeyondViewport: true,
    fromSurface: true,
    clip: {
      x: 0,
      y: 0,
      width: Math.max(width, Math.ceil(contentSize.width)),
      height: viewportOnly ? height : Math.ceil(contentSize.height),
      scale: 1,
    },
  });
  fs.writeFileSync(output, Buffer.from(capture.data, 'base64'));
  ws.close();
  console.log(`${output}: ${Math.ceil(contentSize.width)}x${Math.ceil(contentSize.height)}`);
} finally {
  child.kill();
}
