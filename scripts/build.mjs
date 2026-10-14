import { execFileSync } from 'node:child_process';
import { copyFile, mkdir, rm, stat, readFile, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const output = path.join(root, 'dist');
const assetExtensions = new Set(['.html', '.css', '.js', '.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg', '.ico', '.mp4', '.webm', '.woff', '.woff2', '.ttf', '.avif']);
const tracked = execFileSync('git', ['ls-files', '-z'], { cwd: root, encoding: 'utf8' }).split('\0').filter(Boolean);
const assets = tracked.filter((file) => !file.startsWith('.') && !file.startsWith('scripts/') &&
  (assetExtensions.has(path.extname(file).toLowerCase()) || ['_redirects', '_headers', 'robots.txt', 'sitemap.xml'].includes(file)));

for (const required of ['index.html', 'styles.css', 'main.js', '_redirects']) {
  if (!assets.includes(required)) throw new Error(`Missing required site file: ${required}`);
}
if (assets.length > 20000) throw new Error('The site exceeds the Pages free-plan file limit.');
for (const file of assets) {
  if ((await stat(path.join(root, file))).size > 25 * 1024 * 1024) {
    throw new Error(`Cloudflare Pages cannot upload files larger than 25 MiB: ${file}`);
  }
}

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
for (const file of assets) {
  const destination = path.join(output, file);
  await mkdir(path.dirname(destination), { recursive: true });
  await copyFile(path.join(root, file), destination);
}
// Pages caches scripts and styles. Refresh their URLs whenever their contents change.
const versions = new Map();
for (const file of assets.filter((file) => ['.js', '.css'].includes(path.extname(file)))) {
  const digest = createHash('sha256').update(await readFile(path.join(output, file))).digest('hex').slice(0, 12);
  versions.set(`/${file}`, digest);
}
const entry = path.join(output, 'index.html');
const html = await readFile(entry, 'utf8');
await writeFile(entry, html.replace(/(src|href)="(\/[^"?#]+\.(?:js|css))"/g,
  (match, attribute, url) => versions.has(url) ? `${attribute}="${url}?v=${versions.get(url)}"` : match));
console.log(`Prepared ${assets.length} site files in dist/.`);
