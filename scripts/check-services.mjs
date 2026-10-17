import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { services } from '../content/services.mjs';

const output = fileURLToPath(new URL('../dist/', import.meta.url));
const home = await readFile(path.join(output, 'index.html'), 'utf8');
const sitemap = await readFile(path.join(output, 'sitemap.xml'), 'utf8');
const canonicalUrls = new Set();
for (const service of services) {
  const route = `/services/${service.slug}/`;
  const html = await readFile(path.join(output, route, 'index.html'), 'utf8');
  const canonical = html.match(/rel="canonical" href="([^"]+)"/)?.[1];
  assert.equal(canonical, `https://ilmaforge.com${route}`, `Wrong canonical: ${route}`);
  assert(!canonicalUrls.has(canonical), `Duplicate canonical: ${route}`);
  canonicalUrls.add(canonical);
  assert.equal((html.match(/<h1[\s>]/g) || []).length, 1, `Expected one H1: ${route}`);
  assert(html.includes('name="description"'), `Missing description: ${route}`);
  assert(home.includes(`href="${route}"`), `Article not linked from home: ${route}`);
  assert(sitemap.includes(`<loc>${canonical}</loc>`), `Article missing from sitemap: ${route}`);
  const prose = html.match(/<article>([\s\S]*?)<\/article>/)?.[1].replace(/<[^>]+>/g, ' ') || '';
  assert(prose.split(/\s+/).length > 550, `Article needs substantive server-rendered text: ${route}`);
  for (const match of html.matchAll(/<img [^>]*src="([^"]+)"[^>]*>/g)) {
    await access(path.join(output, match[1]));
    assert(/alt="[^"]+"/.test(match[0]), `Image needs alt text: ${match[1]}`);
    assert(/width="\d+" height="\d+"/.test(match[0]), `Image needs dimensions: ${match[1]}`);
  }
  for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) JSON.parse(match[1]);
}
console.log(`Verified ${services.length} static articles: content, headings, metadata, images, homepage links and sitemap.`);
