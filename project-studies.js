// Project media is grouped by case study. See each project folder for SOURCES.md.
const PORTFOLIO_MEDIA = {
  "crypto-coin-generator": {
    "00-01": {
      "file": "crypto-coin-generator/00-01.webp",
      "width": 1400,
      "height": 432,
      "kind": "image"
    },
    "02-01": {
      "file": "crypto-coin-generator/02-01.mp4",
      "width": 1400,
      "height": 1400,
      "kind": "motion",
      "poster": "crypto-coin-generator/02-01-poster.jpg"
    },
    "02-02": {
      "file": "crypto-coin-generator/02-02.webp",
      "width": 1000,
      "height": 2000,
      "kind": "image"
    },
    "03-01": {
      "file": "crypto-coin-generator/03-01.webp",
      "width": 1000,
      "height": 2000,
      "kind": "image"
    },
    "03-02": {
      "file": "crypto-coin-generator/03-02.mp4",
      "width": 1400,
      "height": 1400,
      "kind": "motion",
      "poster": "crypto-coin-generator/03-02-poster.jpg"
    },
    "04-01": {
      "file": "crypto-coin-generator/04-01.mp4",
      "width": 1400,
      "height": 1400,
      "kind": "motion",
      "poster": "crypto-coin-generator/04-01-poster.jpg"
    },
    "04-02": {
      "file": "crypto-coin-generator/04-02.webp",
      "width": 1000,
      "height": 2000,
      "kind": "image"
    },
    "05-01": {
      "file": "crypto-coin-generator/05-01.mp4",
      "width": 1400,
      "height": 1400,
      "kind": "motion",
      "poster": "crypto-coin-generator/05-01-poster.jpg"
    },
    "05-02": {
      "file": "crypto-coin-generator/05-02.mp4",
      "width": 1400,
      "height": 1400,
      "kind": "motion",
      "poster": "crypto-coin-generator/05-02-poster.jpg"
    },
    "05-03": {
      "file": "crypto-coin-generator/05-03.mp4",
      "width": 1400,
      "height": 1400,
      "kind": "motion",
      "poster": "crypto-coin-generator/05-03-poster.jpg"
    },
    "06-01": {
      "file": "crypto-coin-generator/06-01.mp4",
      "width": 600,
      "height": 606,
      "kind": "motion",
      "poster": "crypto-coin-generator/06-01-poster.jpg"
    },
    "06-02": {
      "file": "crypto-coin-generator/06-02.mp4",
      "width": 600,
      "height": 606,
      "kind": "motion",
      "poster": "crypto-coin-generator/06-02-poster.jpg"
    },
    "06-03": {
      "file": "crypto-coin-generator/06-03.mp4",
      "width": 600,
      "height": 606,
      "kind": "motion",
      "poster": "crypto-coin-generator/06-03-poster.jpg"
    },
    "07-01": {
      "file": "crypto-coin-generator/07-01.webp",
      "width": 1200,
      "height": 423,
      "kind": "image"
    },
    "cover": {
      "file": "crypto-coin-generator/cover.jpg",
      "width": 808,
      "height": 632,
      "kind": "image"
    }
  }
};
const PORTFOLIO_STUDIES = {
  "crypto-coin-generator": {
    "title": "Crypto Coint Generator",
    "hero": "00-01",
    "paragraphs": [
      "Coints Generator — a series of animations created for a crypto industry company.",
      "The animations serve as visual support for a web page, helping to clearly and simply explain how the product works, making complex processes easy to understand."
    ],
    "blocks": [
      {
        "type": "pair",
        "items": [
          "02-01",
          "02-02"
        ],
        "square": true
      },
      {
        "type": "pair",
        "items": [
          "03-01",
          "03-02"
        ],
        "square": true
      },
      {
        "type": "pair",
        "items": [
          "04-01",
          "04-02"
        ],
        "square": true
      },
      {
        "type": "three",
        "items": [
          "05-01",
          "05-02",
          "05-03"
        ],
        "square": true
      },
      {
        "type": "heading",
        "text": "Process"
      },
      {
        "type": "three",
        "items": [
          "06-01",
          "06-02",
          "06-03"
        ],
        "square": true
      },
      {
        "type": "media",
        "item": "07-01"
      }
    ],
    "roles": [
      "Modeling",
      "Animation",
      "Lighting",
      "Compositing"
    ]
  }
};

function buildPortfolioStudy(slug) {
  const study = PORTFOLIO_STUDIES[slug];
  const asset = (key, eager = false) => {
    const item = PORTFOLIO_MEDIA[slug][key];
    const url = '/assets/studies/' + item.file;
    const description = `${study.title} — ${item.kind === 'motion' ? 'animation' : 'project visual'} ${key}`;
    if (item.kind === 'motion') {
      return `<video class="ghx-motion" data-src="${url}" poster="/assets/studies/${item.poster}" width="${item.width}" height="${item.height}" muted loop playsinline tabindex="0" role="button" preload="none" aria-label="${description} — play or pause animation"></video>`;
    }
    return `<img src="${url}" width="${item.width}" height="${item.height}" alt="${description}" loading="${eager ? 'eager' : 'lazy'}" decoding="async"${eager ? ' fetchpriority="high"' : ''}>`;
  };
  const block = (item) => {
    switch (item.type) {
      case 'heading': return `<h2 class="study-heading ghx-copy">${item.text}</h2>`;
      case 'film': return `<div class="ghx-film ghx-contained"><iframe src="https://player.vimeo.com/video/${item.id}?title=0&amp;byline=0&amp;portrait=0&amp;dnt=1" title="${item.title}" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>`;
      case 'crop': return `<figure class="study-bottle-detail">${asset(item.item)}</figure>`;
      case 'media': return `<figure class="study-full">${asset(item.item)}</figure>`;
      default: return `<div class="study-grid study-grid--${item.type}${item.square ? ' study-grid--square' : ''}">${item.items.map(key => `<figure>${asset(key)}</figure>`).join('')}</div>`;
    }
  };
  return `<article class="ghx-study portfolio-study" aria-labelledby="study-title">
    <figure class="study-hero">${asset(study.hero, true)}</figure>
    <header class="ghx-intro ghx-copy"><h1 id="study-title">${study.title}</h1>${study.paragraphs.map(text => `<p>${text}</p>`).join('')}</header>
    ${study.blocks.map(block).join('')}
    <footer class="ghx-credits ghx-contained"><div><h2>Maksym Kuznietsov</h2><p>${study.roles.join('<br>')}</p></div>
      ${study.extraCredit ? `<div class="study-extra-credit"><h2>${study.extraCredit.label}</h2><p>${study.extraCredit.name}</p></div>` : ''}
      ${study.year ? `<p class="ghx-year">${study.year}</p>` : ''}
      <a href="/works" onclick="navigate('works'); return false;">Back to projects <span aria-hidden="true">↗</span></a>
    </footer>
  </article>`;
}
