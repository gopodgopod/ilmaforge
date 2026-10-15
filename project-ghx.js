function buildGhxCaseStudy() {
  const image = (name, alt, width, height) => `<img src="/assets/ghx/${name}.webp" alt="${alt}" width="${width}" height="${height}" loading="lazy" decoding="async">`;
  const motion = (name, label, width, height, hero = false) => `<video class="ghx-motion${hero ? ' ghx-hero-motion' : ''}"${hero ? ` src="/assets/ghx/${name}.mp4"` : ` data-src="/assets/ghx/${name}.mp4"`} poster="/assets/ghx/${name}-poster.jpg" width="${width}" height="${height}" muted loop playsinline tabindex="0" role="button" preload="${hero ? 'metadata' : 'none'}" aria-label="${label} — play or pause animation"></video>`;
  return `<article class="ghx-study" aria-labelledby="ghx-title">
    <div class="ghx-hero">${motion('00-01', 'GHX coins rotating in a red-lit space', 1400, 365, true)}</div>
    <header class="ghx-intro ghx-copy">
      <h1 id="ghx-title">GHX — Trailer</h1>
      <p>In a very short period of time, I needed to develop a promotional video that clearly explains what GHX is and how it works. The goal was to create an engaging and informative video that would quickly communicate the core purpose and benefits of GHX to the target audience.</p>
    </header>
    <figure class="ghx-banner">${image('02-01', 'GHX coin emerging from a red illuminated futuristic chamber', 1400, 541)}</figure>
    <div class="ghx-film ghx-contained">
      <iframe src="https://player.vimeo.com/video/1181564766?title=0&amp;byline=0&amp;portrait=0&amp;dnt=1" title="GHX Trailer — full film" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div class="ghx-process" role="region" aria-labelledby="ghx-process-title">
      <h2 id="ghx-process-title">Process</h2>
      <figure class="ghx-process-lead">${motion('05-01', 'Animated camera move through the GHX chamber', 1000, 562)}</figure>
      <div class="ghx-three ghx-row">
        ${motion('06-01', 'Wireframe camera and scene animation in the 3D viewport', 600, 337)}
        ${motion('06-02', 'Rendered GHX chamber and coin animation', 1400, 600)}
        ${motion('06-03', 'Wireframe chamber animation and scene setup', 600, 340)}
      </div>
      <figure class="ghx-scene-banner">${image('07-01', 'GHX coin travelling through red motion trails', 1200, 421)}</figure>
      <div class="ghx-pair ghx-row">
        ${motion('08-01', 'Red light trails building up around the camera', 600, 338)}
        ${motion('08-02', 'Final luminous motion trails and depth', 600, 338)}
      </div>
      <figure class="ghx-scene-banner">${image('09-01', 'Glowing globe surrounded by particles and GHX graphics', 1200, 524)}</figure>
      <div class="ghx-pair ghx-row">
        ${motion('10-01', 'Globe particle animation and lighting', 600, 338)}
        ${motion('10-02', 'Animated close-up of the coin material and edge', 600, 338)}
      </div>
      <figure class="ghx-scene-banner">${motion('11-01', 'GHX coins floating through the final animated composition', 1200, 313)}</figure>
      <div class="ghx-pair ghx-row">
        ${motion('12-01', 'Rendered GHX coin motion', 600, 338)}
        ${motion('12-02', 'Matching coin motion in the wireframe viewport', 600, 338)}
      </div>
      <div class="ghx-pair ghx-row">
        ${motion('13-01', 'Wireframe view of the animated portal and trails', 600, 338)}
        ${motion('13-02', 'Final red portal and motion trails', 600, 338)}
      </div>
      <div class="ghx-gallery ghx-pair">
        ${image('14-01', 'Final frame: red-lit GHX chamber', 1400, 788)}
        ${image('14-02', 'Final frame: GHX coin in a tunnel of red light', 1400, 788)}
        ${image('14-03', 'Final frame: illuminated globe and particles', 1400, 788)}
        ${image('14-04', 'Final frame: GHX symbol and glowing motion trails', 1400, 788)}
        ${image('14-05', 'Final frame: stack of red GHX coins', 1400, 788)}
        ${image('14-06', 'Final frame: globe surface in dramatic light', 1400, 788)}
        ${motion('14-07', 'Globe with animated interface panels', 600, 337)}
        ${motion('14-08', 'Animated GHX portal and 3D scene', 600, 337)}
      </div>
    </div>
    <footer class="ghx-credits ghx-contained">
      <div><h2>Maksym Kuznietsov</h2><p>Modeling<br>Animation<br>Lighting<br>Compositing</p></div>
      <p class="ghx-year">2025</p>
      <a href="/works" onclick="navigate('works'); return false;">Back to projects <span aria-hidden="true">↗</span></a>
    </footer>
  </article>`;
}

let ghxMotionObserver;
function initGhxMotion() {
  if (ghxMotionObserver) ghxMotionObserver.disconnect();
  const projectPage = document.getElementById('project');
  if (!projectPage.classList.contains('is-ghx') && !projectPage.classList.contains('is-study')) return;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const videos = document.querySelectorAll('.ghx-motion');
  const load = (video) => {
    if (video.dataset.src) {
      video.src = video.dataset.src;
      delete video.dataset.src;
      video.load();
    }
  };
  videos.forEach((video) => {
    video.muted = true;
    const toggle = () => {
      load(video);
      if (video.paused) {
        video.dataset.userPaused = 'false';
        video.play().catch(() => {});
      } else {
        video.dataset.userPaused = 'true';
        video.pause();
      }
    };
    video.addEventListener('click', toggle);
    video.addEventListener('keydown', (event) => {
      if (event.key === ' ' || event.key === 'Enter') {
        event.preventDefault();
        toggle();
      }
    });
  });
  if (reducedMotion) return;
  ghxMotionObserver = new IntersectionObserver((entries) => {
    entries.forEach(({ target, isIntersecting }) => {
      if (isIntersecting && target.dataset.userPaused !== 'true' && document.getElementById('project').classList.contains('active')) {
        load(target);
        target.play().catch(() => {});
      } else {
        target.pause();
      }
    });
  }, { rootMargin: '100px 0px', threshold: 0.01 });
  videos.forEach((video) => ghxMotionObserver.observe(video));
}
