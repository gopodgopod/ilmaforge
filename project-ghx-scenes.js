function buildGhxScenesCaseStudy() {
  const image = (name, alt, width = 2512, height = 1413, eager = false) => `<img src="/assets/ghx-scenes/${name}.jpg" alt="${alt}" width="${width}" height="${height}" loading="${eager ? 'eager' : 'lazy'}" decoding="async"${eager ? ' fetchpriority="high"' : ''}>`;
  const motion = (name, label, width = 800, height = 450) => `<figure><video class="ghx-motion" data-src="/assets/ghx-scenes/${name}.mp4" poster="/assets/ghx-scenes/${name}-poster.jpg" width="${width}" height="${height}" muted loop playsinline preload="none" tabindex="0" role="button" aria-label="${label} — play or pause animation"></video><figcaption>${label}</figcaption></figure>`;
  const pair = (scene, title) => `<div class="ghxs-comparison" role="group" aria-label="${title}">${motion(scene + '-viewport', 'Viewport preview — ' + title)}${motion(scene + '-final', 'Final render — ' + title)}</div>`;
  return `<article class="ghxs-study" aria-labelledby="ghxs-title">
    <div class="ghxs-hero">${image('Hero_ghx_main', 'GHX coin inside a red illuminated futuristic chamber', 2512, 1413, true)}</div>
    <div class="ghxs-body">
      <header class="ghxs-copy"><h1 id="ghxs-title">GHX — Trailer</h1><p>A set of 3D scenes and motion design produced for a promotional video of GHX, one of GamerHash's products.</p></header>
      <figure>${image('Tunel_coin_render_3d_1', 'GHX coin moving through a tunnel of red light', 1400, 491)}</figure>
      <section class="ghxs-copy"><h2>About the project</h2><p>In a very short period of time, we needed to develop a promotional video that clearly explains what GHX is and how it works. Our task was to design several scenes used in the final piece — the goal was to create an engaging and informative video that would quickly communicate the core purpose and benefits of GHX to the target audience.</p><p>With such a tight timeline, the key challenge was balancing production speed with final quality — the scenes had to be ready to assemble into a cohesive whole without losing the visual precision associated with GamerHash productions.</p></section>
      <figure class="ghxs-film">${image('room_coin_render_3d_1', 'Preview of the GHX promotional film — film to be added')}<figcaption>Film coming soon</figcaption></figure>
      <div class="ghxs-gallery">
        <figure class="ghxs-wide">${image('globe_coin_render_3d_1', 'Particle globe in red light', 1400, 611)}</figure>
        <figure>${image('room_coin_render_3d_1', 'Illuminated chamber and GHX coin')}</figure>
        <figure>${image('globe_coin_render_3d_2', 'Globe with interface panels', 2512, 1412)}</figure>
        <figure>${image('globe_coin_render_3d_3', 'Close-up of the illuminated globe surface')}</figure>
        <figure>${image('globe_coin_render_3d_4', 'Globe in a dark atmospheric scene')}</figure>
        <figure>${image('AI_render_3d_1', 'Glowing GHX symbol and red motion trails')}</figure>
        <figure>${image('Coin_render_3d_1', 'Red GHX coins floating in space')}</figure>
        <div class="ghxs-two ghxs-wide"><figure>${image('computer_AI_render_3d_1', 'Red light trails entering a computer', 2512, 1412)}</figure><figure>${image('computer_AI_render_3d_2', 'Computer scene with glowing red details', 810, 456)}</figure></div>
      </div>
      <section class="ghxs-copy"><h2>Our approach</h2><p>We focused on designing scenes that explain the product's mechanics in a simple, visual way, rather than relying solely on text or voiceover. The aesthetics and editing pace were aligned with GamerHash's brand style, known for its tech-driven, gaming-focused visual communication.</p></section>
      <figure>${image('Coin_render_3d_1', 'Final render of the animated GHX coins')}</figure>
      <div class="ghxs-process" aria-label="Viewport and final render comparisons">
        ${pair('ai', 'Light trails')}<div class="ghxs-comparison" role="group" aria-label="Globe animation variants">${motion('globe-viewport', 'Globe — particle trails')}${motion('globe-final', 'Globe — final lighting')}</div>${pair('coins', 'Coins')}
        <div class="ghxs-three" role="group" aria-label="Chamber scene development">${motion('room-layout', 'Scene layout — Chamber', 800, 454)}${motion('room-viewport', 'Viewport preview — Chamber', 1000, 562)}${motion('room-final', 'Final render — Chamber', 1000, 562)}</div>
      </div>
      <section class="ghxs-copy"><h2>Tools and scope<br>of work</h2><p>The 3D scenes and animation were built in Cinema 4D with the Redshift render engine, with compositing and editing done in Adobe After Effects. The scope of work covered the design and animation of 3D scenes used in the product's promotional video.</p></section>
    </div>
    <figure class="ghxs-ending">${image('Tunel_coin_render_3d_2', 'Abstract tunnel of red motion trails')}</figure>
    <footer class="ghxs-footer"><a class="logo" href="/" onclick="navigate('home'); return false;" aria-label="ILMA — home">ILMA</a><a href="/works" onclick="navigate('works'); return false;">Back to projects ↗</a></footer>
  </article>`;
}
