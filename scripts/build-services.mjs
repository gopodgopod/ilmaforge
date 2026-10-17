import { mkdir, writeFile, access } from 'node:fs/promises';
import path from 'node:path';
import { services } from '../content/services.mjs';

const site = 'https://ilmaforge.com';
const escape = (value) => String(value).replace(/[&<>"']/g, (char) => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'}[char]));
const urlFor = (service) => `/services/${service.slug}/`;
const figure = (image, eager = false) => `<figure class="service-figure${eager ? ' service-hero' : ''}"><img src="${escape(image.src)}" alt="${escape(image.alt)}" width="${image.width}" height="${image.height}" loading="${eager ? 'eager' : 'lazy'}" decoding="async"${eager ? ' fetchpriority="high"' : ''}>${image.caption ? `<figcaption>${escape(image.caption)}</figcaption>` : ''}</figure>`;

export async function buildServicePages({ root, output, versions }) {
  const versioned = (file) => `${file}?v=${versions.get(file)}`;
  for (const [index, service] of services.entries()) {
    const images = [service.hero.src, ...service.sections.flatMap((s) => s.figure ? [s.figure.src] : []), ...service.examples.map((p) => p.image)];
    for (const image of images) await access(path.join(root, image.replace(/^\//, '')));
    const canonical = site + urlFor(service);
    const wordCount = [service.intro, ...service.sections.flatMap((s) => s.paragraphs), service.closing].join(' ').split(/\s+/).length;
    const schema = [
      {'@context':'https://schema.org', '@type':'Article', headline:service.title, description:service.description,
        author:{'@type':'Organization',name:'ILMA',url:site}, publisher:{'@type':'Organization',name:'ILMA',url:site},
        mainEntityOfPage:canonical, image:site + service.hero.src, inLanguage:'en'},
      {'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[
        {'@type':'ListItem',position:1,name:'Home',item:site + '/'},
        {'@type':'ListItem',position:2,name:service.label,item:canonical}
      ]}
    ];
    const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escape(service.label)} — Approach &amp; Projects | ILMA</title>
  <meta name="description" content="${escape(service.description)}">
  <link rel="canonical" href="${canonical}">
  <meta property="og:type" content="article">
  <meta property="og:title" content="${escape(service.title)}">
  <meta property="og:description" content="${escape(service.description)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${site}${service.hero.src}">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700&display=swap">
  <link rel="stylesheet" href="${versioned('/styles.css')}">
  <link rel="stylesheet" href="${versioned('/service-pages.css')}">
  <link rel="stylesheet" href="${versioned('/analytics-consent.css')}">
  <script type="application/ld+json">${JSON.stringify(schema).replace(/</g, '\\u003c')}</script>
</head>
<body class="service-page">
  <a class="service-skip" href="#article">Skip to article</a>
  <nav aria-label="Main navigation">
    <a class="logo" href="/" aria-label="ILMA — home">ILMA</a>
    <ul class="nav-links"><li><a href="/">About</a></li><li><a href="/works">Work</a></li><li><a href="/contact">Contact</a></li></ul>
  </nav>
  <main id="article">
    <article>
      <header class="service-header">
        <a class="service-eyebrow" href="/#what-we-do">What we do <span aria-hidden="true">/ ${String(index + 1).padStart(2, '0')}</span></a>
        <h1>${escape(service.title)}</h1>
        <div class="service-meta"><span>ILMA — Studio notes</span><span>${Math.max(3, Math.ceil(wordCount / 180))} min read</span></div>
        <p class="service-lead">${escape(service.intro)}</p>
      </header>
      ${figure(service.hero, true)}
      <div class="service-body">
        <aside class="service-contents" aria-label="Article contents">
          <span class="service-eyebrow">In this article</span>
          <ol>${service.sections.map((s) => `<li><a href="#${s.id}">${escape(s.heading)}</a></li>`).join('')}<li><a href="#selected-work">Selected work</a></li></ol>
        </aside>
        <div class="service-prose">
          ${service.sections.map((s, i) => `<section class="service-section" id="${s.id}" aria-labelledby="heading-${s.id}"><span class="service-number" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span><h2 id="heading-${s.id}">${escape(s.heading)}</h2>${s.paragraphs.map((p) => `<p>${escape(p)}</p>`).join('')}${s.figure ? figure(s.figure) : ''}</section>`).join('\n')}
        </div>
      </div>
      <section class="service-work" id="selected-work" aria-labelledby="work-heading">
        <div class="service-work-heading"><span class="service-eyebrow">From the studio</span><h2 id="work-heading">The approach, in practice.</h2></div>
        <div class="service-projects">${service.examples.map((project) => `<a class="service-project" href="/project/${project.slug}"><img src="${project.image}" alt="${escape(project.name)} — selected project" width="${project.width}" height="${project.height}" loading="lazy" decoding="async"><div><h3>${escape(project.name)} <span aria-hidden="true">↗</span></h3><p>${escape(project.text)}</p><span class="service-project-link">View project</span></div></a>`).join('')}</div>
      </section>
      <section class="service-contact" aria-labelledby="contact-heading"><span class="service-eyebrow">Your next project</span><h2 id="contact-heading">Let’s give your idea form.</h2><p>${escape(service.closing)}</p><a class="service-contact-link" href="/contact">Talk to ILMA <span aria-hidden="true">↗</span></a></section>
    </article>
    <aside class="service-more" aria-labelledby="more-heading"><h2 id="more-heading">Explore what we do.</h2><div>${services.filter((s) => s.slug !== service.slug).map((s) => `<a href="${urlFor(s)}">${escape(s.label)} <span aria-hidden="true">↗</span></a>`).join('')}</div></aside>
  </main>
  <footer class="service-footer"><a class="logo" href="/" aria-label="ILMA — home">ILMA</a><span>CGI &amp; motion design studio.</span><a href="/privacy.html">Privacy &amp; cookies</a></footer>
  <script src="${versioned('/analytics-consent.js')}" defer></script>
</body>
</html>
`;
    const destination = path.join(output, 'services', service.slug);
    await mkdir(destination, { recursive:true });
    await writeFile(path.join(destination, 'index.html'), html);
  }
  const projectSlugs = ['posnord','favorite','canal-plus','duolife','crypto-coin-generator','nalgene-bottle-outdoor','pcb-risc-v-challenge','gamerhash','ghx-trailer','from-concept-to-campaign'];
  const routes = ['/', '/works', '/contact', ...projectSlugs.map((slug) => `/project/${slug}`), ...services.map(urlFor)];
  await writeFile(path.join(output, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes.map((route) => `  <url><loc>${site}${route}</loc></url>`).join('\n')}\n</urlset>\n`);
  console.log(`Prepared ${services.length} service articles and sitemap.xml.`);
}
