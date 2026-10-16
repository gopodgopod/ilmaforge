function buildCanalCaseStudy() {
  const dimensions = {
    '01-speedway-hero.jpg': [2020, 865], '02-stadium-model.jpg': [3840, 2160],
    '03-stadium-panorama.jpg': [3840, 1180], '04-scene-wireframe.jpg': [3840, 2160],
    '05-track-closeup.jpg': [1920, 1080], '06-motion-trails.jpg': [1920, 1080],
    '07-logo-detail.jpg': [1920, 1080], '08-track-overview.jpg': [1920, 1080],
    '09-stadium-finish.jpg': [3175, 802]
  };
  const image = (name, alt, eager = false) => `<img src="/assets/canal-plus/${name}" alt="${alt}" width="${dimensions[name][0]}" height="${dimensions[name][1]}" loading="${eager ? 'eager' : 'lazy'}" decoding="async"${eager ? ' fetchpriority="high"' : ''}>`;
  return `<article class="canal-study" aria-labelledby="canal-title">
    <figure class="canal-hero">${image('01-speedway-hero.jpg', 'CANAL+ — speedway rider in a cloud of dust', true)}</figure>
    <header class="canal-intro canal-contained">
      <div><h1 id="canal-title">CANAL+: Intro and scene transitions for a speedway show</h1>
        <p>An animated logo intro and scene transitions created for Canal+ Poland — motion design blending a 2D logo with the dynamics of the sport in 3D space, produced for speedway motorcycle racing broadcasts.</p>
      </div>
      <figure>${image('02-stadium-model.jpg', 'Wireframe 3D model of the speedway stadium')}</figure>
    </header>
    <section class="canal-about canal-centered" aria-labelledby="canal-about-title"><h2 id="canal-about-title">About the project</h2>
      <p>For Canal+ Poland, we produced an intro for a show dedicated to speedway motorcycle racing, along with a set of scene transitions used throughout the broadcast. The task was to create a graphics package that captures the full energy and pace of the sport in just a few seconds, while staying consistent with the channel's visual identity and the show's theme.</p>
      <p>The material had to work on two levels at once — as a recognizable branding element (logo, color palette, channel style) and as something the viewer instinctively associates with the sport itself: speed, sliding through the track, dust kicked up by the tires.</p>
    </section>
    <figure class="canal-film-placeholder canal-contained" aria-label="Reserved space for the CANAL+ film">
      ${image('06-motion-trails.jpg', 'Preview still from the CANAL+ speedway intro')}
      <figcaption>Film coming soon</figcaption>
    </figure>
    <figure class="canal-panorama">${image('03-stadium-panorama.jpg', 'Wide wireframe panorama of the stadium architecture')}</figure>
    <section class="canal-approach" aria-labelledby="canal-approach-title">
      <div><h2 id="canal-approach-title">Our approach</h2>
        <p>The starting point was combining a flat 2D logo with 3D elements that build a sense of motion and speed. Instead of a static title card, we designed a sequence in which the logo becomes part of a scene directly referencing speedway racing — through camera movement, particles, track marks, and lighting that evokes the look of motorcycle racing events.</p>
        <p>The biggest challenge was fitting the full dynamics of the discipline into a few-second shot, so the intro wouldn't just be a title card but a short, intense experience that immediately puts the viewer in a racing mindset. We carried the same visual language into the scene transitions, keeping the show's entire look consistent from the intro through every subsequent cut.</p>
      </div>
      <figure>${image('04-scene-wireframe.jpg', 'Wireframe close-up of the track, lighting and CANAL+ scene construction')}</figure>
    </section>
    <div class="canal-gallery" role="group" aria-label="CANAL+ intro and scene transition stills">
      <figure>${image('05-track-closeup.jpg', 'Light and yellow racing lines following the speedway track')}</figure>
      <figure>${image('06-motion-trails.jpg', 'Luminous motion trails speeding along the track')}</figure>
      <figure>${image('08-track-overview.jpg', 'Overhead view of the curved track and layered yellow lines')}</figure>
      <figure>${image('07-logo-detail.jpg', 'Close-up of the gold three-dimensional logo detail')}</figure>
    </div>
    <section class="canal-tools canal-centered" aria-labelledby="canal-tools-title"><h2 id="canal-tools-title">Tools and scope<br>of work</h2>
      <p>The 3D animation and motion design were built in Cinema 4D with the Redshift render engine, while final compositing, integration of the 2D logo with 3D elements, and editing were handled in Adobe After Effects. The scope of work covered show intro design, logo animation, scene transition design, and the graphics package for a live sports broadcast.</p>
    </section>
    <figure class="canal-finish">${image('09-stadium-finish.jpg', 'Close-up of the stadium wireframe from above')}</figure>
    <footer class="canal-signoff"><div class="case-brand"><a class="logo" href="/" onclick="navigate('home'); return false;" aria-label="ILMA — home">ILMA</a></div><a href="/works" onclick="navigate('works'); return false;">Back to projects <span aria-hidden="true">↗</span></a></footer>
  </article>`;
}
