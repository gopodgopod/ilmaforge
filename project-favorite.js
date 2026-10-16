function buildFavoriteCaseStudy() {
  const sizes = { '01-hero.jpg': [2020, 832], '02-spool-detail.jpg': [1000, 1000], '03-braid-spool.jpg': [1500, 1500], '04-label-detail.jpg': [1000, 366], '05-spool-finish.png': [1080, 1080] };
  const image = (file, alt, eager = false) => `<img src="/assets/favorite/${file}" alt="${alt}" width="${sizes[file][0]}" height="${sizes[file][1]}" loading="${eager ? 'eager' : 'lazy'}" decoding="async"${eager ? ' fetchpriority="high"' : ''}>`;
  const frames = Array.from({ length: 14 }, (_, i) => `${String(23 + i * 10).padStart(4, '0')}`);
  return `<article class="favorite-study" aria-labelledby="favorite-title">
    <figure class="favorite-hero">${image('01-hero.jpg', 'Favorite X1 braided fishing line — transparent spool and lime green braid', true)}</figure>
    <div class="favorite-intro">
      <figure>${image('02-spool-detail.jpg', 'Close-up of the transparent spool and wound fishing braid')}</figure>
      <div class="favorite-intro-copy">
        <header><h1 id="favorite-title">Favorite: 3D animation<br>of a new<br>fishing braid</h1>
          <p>A short 3D promotional spot for the fishing brand Favorite — a product animation of a new braided fishing line, completed in just a few hours using a reusable 3D asset for future products.</p>
        </header>
        <section aria-labelledby="favorite-about"><h2 id="favorite-about">About the<br>project</h2>
          <p>For the fishing brand Favorite, we produced a short animation promoting a new product — a braided fishing line. The material was intended for marketing purposes as a concise, visually appealing spot presenting the product in a form ready for publication.</p>
          <p>This was one of our quickest and most spontaneous projects — the entire process, from measuring the product to the final animation with an information sticker, was completed in just a few hours, done entirely from scratch without any additional reference materials beyond the physical product itself.</p>
        </section>
      </div>
    </div>
    <div class="favorite-filmstrip" role="group" aria-label="Sequence of product animation frames">${frames.map((frame, i) => `<img src="/assets/favorite/frames/spool-${frame}.webp" alt="${i === 0 ? 'Green opening frame' : `Favorite spool animation — frame ${i}`}" width="256" height="256" loading="lazy" decoding="async">`).join('')}</div>
    <section class="favorite-approach favorite-contained" aria-labelledby="favorite-approach-title">
      <figure>${image('03-braid-spool.jpg', 'Favorite X1 spool with simulated braid and product label')}</figure>
      <div><h2 id="favorite-approach-title">Our approach</h2>
        <p>We split the project into three stages. The first was fast hard surface modeling in Fusion 360 — using caliper measurements of the spool, we reconstructed its geometry as a 3D model ready for further work.</p>
        <p>The second stage was creating a simulation of the fishing line wound around the spool. For this, we used the rope simulation tag in Cinema 4D, which allowed us to recreate the way the braid wraps around the product in a natural, realistic way, without manually modeling every single wind.</p>
        <p>The final step was implementing the animation and adding an information sticker with product details, finishing the material into a form ready for a marketing campaign.</p>
        <p>The key advantage of this approach was reusability — once prepared, the 3D asset (the spool model together with the braid winding simulation) could be reused for animating similar products from the brand's line, significantly cutting down production time for future advertising materials.</p>
      </div>
    </section>
    <div class="favorite-video favorite-contained"><iframe title="Favorite — 3D fishing braid product animation" data-src="https://player.vimeo.com/video/1181739226?h=8c4b55d62e&amp;autoplay=1&amp;muted=1&amp;loop=1&amp;playsinline=1&amp;background=1&amp;controls=0&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0" width="640" height="360" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="autoplay; fullscreen; picture-in-picture; encrypted-media" allowfullscreen></iframe></div>
    <section class="favorite-tools favorite-contained" aria-labelledby="favorite-tools-title">
      <div><h2 id="favorite-tools-title">Tools and scope<br>of work</h2>
        <p>The product model was built in Fusion 360, the braid simulation and animation in Cinema 4D, and the final information graphic and editing in Adobe After Effects. The scope of work covered product measurement and 3D modeling, physical material simulation, product animation, and preparation of the spot for publication.</p>
      </div>
      <figure>${image('04-label-detail.jpg', 'Close-up of the Favorite X1 product information label')}</figure>
    </section>
    <figure class="favorite-finish">${image('05-spool-finish.png', 'Transparent Favorite fishing line spool on black')}</figure>
    <footer class="favorite-signoff"><div class="case-brand"><a class="logo" href="/" onclick="navigate('home'); return false;" aria-label="ILMA — home">ILMA</a></div><a href="/works" onclick="navigate('works'); return false;">Back to projects <span aria-hidden="true">↗</span></a></footer>
  </article>`;
}

let favoriteFilmObserver;
function initFavoriteFilm() {
  favoriteFilmObserver?.disconnect();
  const container = document.querySelector('#project.is-favorite.active .favorite-video');
  if (!container) return;
  const frame = container.querySelector('iframe');
  favoriteFilmObserver = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting && entry.intersectionRatio >= 0.15) {
      if (!frame.hasAttribute('src')) frame.src = frame.dataset.src;
    } else {
      frame.removeAttribute('src');
    }
  }, { threshold: [0, 0.15] });
  favoriteFilmObserver.observe(container);
}
