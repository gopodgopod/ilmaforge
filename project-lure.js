function buildLureCaseStudy() {
  const image = (name, alt, className = '', eager = false) => `<img class="${className}" src="/assets/lure/${name}" alt="${alt}" loading="${eager ? 'eager' : 'lazy'}" decoding="async"${eager ? ' fetchpriority="high"' : ''}>`;
  return `<article class="lure-study" aria-labelledby="lure-title">
    <figure class="lure-hero">${image('hero.jpg', 'Finished fishing lure with transparent body and bronze details', '', true)}</figure>
    <div class="lure-intro lure-centered">
      <h1 id="lure-title">From concept to campaign</h1>
      <p>A complete 3D and motion design project — from product design and prototyping to advertising animation and marketing materials for online and outdoor campaigns.</p>
    </div>
    <div class="lure-film-space" aria-hidden="true"></div>
    <div class="lure-mobile-opening">
      ${image('product-detail.jpg', 'Close-up of the polished lure eye and translucent body')}
      ${image('gold-detail.jpg', 'Golden lure detail with motion trails')}
    </div>
    <div class="lure-about">
      <div class="lure-about-copy lure-copy">
        <h2>About the project</h2>
        <p>We delivered a full production cycle for a client who needed a new fishing lure (wobbler) responding to real market demand. The project covered far more than visuals — it spanned the entire product process, from concept design through prototyping and testing, to the final production of advertising materials used in an online and outdoor campaign.</p>
        <p>This case study shows how we combine industrial design, 3D graphics and motion design into one coherent production pipeline — from the first concept sketch to a finished advertising spot.</p>
      </div>
      <figure class="lure-about-image">${image('about.jpg', 'Smoke trails reveal the form of the fishing lure')}</figure>
    </div>
    <div class="lure-motion-pair">
      <figure class="lure-flame">${image('flame-detail.jpg', 'Amber lure detail emerging from motion trails')}</figure>
      <figure class="lure-motion">${image('motion-study.jpg', 'Study of flowing motion and the lure silhouette')}</figure>
    </div>
    <div class="lure-process">
      <div class="lure-process-copy lure-copy">
        <h2>Design process</h2>
        <p>Work on the project began with initial sketches provided by the client, which became the starting point for further concept design of the wobbler — we looked for a shape and proportions that not only look good, but genuinely affect how the lure behaves in water. This led into an intensive stage of product design and prototyping in Fusion 360, involving dozens of iterations and tests. Successive versions of the model were reviewed with the client and tested in water conditions, verifying balance, buoyancy and construction details until the product's form met every requirement, well before moving into production.</p>
      </div>
      <figure class="lure-side-blueprint">${image('side-blueprint.jpg', 'Side-view technical drawing of the lure construction')}</figure>
      <figure class="lure-mobile-sketch">${image('concept-sketch.png', 'Initial line sketch of the fishing lure')}</figure>
    </div>
    <div class="lure-modeling">
      <figure class="lure-front-blueprint">${image('front-blueprint.jpg', 'Front-view technical drawing of the lure')}</figure>
      <div class="lure-modeling-copy lure-copy">
        <p>Once the product form was finalized, we moved on to 3D modeling and rendering — refining materials, light reflections and finishes so the wobbler would look just as good on screen as it does in hand. Building on that, we created a 3D animation showing the entire process of the lure coming to life, from the first concept lines to the finished product. The animation was produced in Cinema 4D with the Redshift render engine, delivering photorealistic image quality and smooth transitions between production stages. Final compositing, color correction and editing were done in Adobe After Effects, fine-tuning pacing and visual style for digital media.</p>
      </div>
      <figure class="lure-desktop-sketch">${image('concept-sketch.png', 'Initial line sketch of the fishing lure')}</figure>
    </div>
    <div class="lure-campaign-copy lure-centered">
      <p>The project didn't end with the animation itself. Our studio also handled the production of complete advertising materials — graphics and video tailored both for online campaigns (social media, display advertising, product video) and for outdoor advertising, all visually consistent with the overall product launch campaign.</p>
    </div>
    <div class="lure-campaign-gallery">
      <figure class="lure-campaign-motion">${image('campaign-motion.jpg', 'Advertising visual showing the lure through luminous motion trails')}</figure>
      <figure class="lure-campaign-gold">${image('gold-detail.jpg', 'Golden product detail for the advertising campaign')}</figure>
      <figure class="lure-campaign-detail">${image('product-detail.jpg', 'Vertical crop of the finished lure eye and body')}</figure>
      <figure class="lure-mobile-flame">${image('flame-detail.jpg', 'Amber lure detail emerging from motion trails')}</figure>
      <figure class="lure-mobile-motion">${image('motion-study.jpg', 'Study of flowing motion and the lure silhouette')}</figure>
    </div>
    <div class="lure-tools lure-centered">
      <h2>Tools and technologies used</h2>
      <p>Fusion 360 (product modeling and prototyping), Cinema 4D + Redshift (modeling, 3D rendering, animation), Adobe After Effects (compositing, post-production, editing).</p>
    </div>
    <figure class="lure-finish">${image('finished-lure.png', 'Final rendered fishing lure')}</figure>
  </article>`;
}
