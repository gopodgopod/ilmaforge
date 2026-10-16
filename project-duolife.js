function buildDuoLifeCaseStudy() {
  const dimensions = {"01-collagen-hero.jpg": [2020, 738], "02-boreliss-fern.jpg": [2500, 2500], "03-aloes-packaging.jpg": [520, 560], "04-product-ring.jpg": [1920, 1920], "05-day-night.jpg": [522, 560], "06-maca-campaign.jpg": [2560, 1440], "07-box-open.jpg": [1920, 1080], "08-collagen-detail.jpg": [1080, 1920], "09-box-overhead.jpg": [1920, 1080], "10-night-water.jpg": [1500, 2000], "11-capsule.jpg": [1920, 1080], "12-packaging-detail.jpg": [600, 1066], "13-boreliss-sunlight.jpg": [2500, 2500], "15-dropper.png": [1080, 1080]};
  const image = (name, alt, eager = false) => `<img src="/assets/duolife/${name}" alt="${alt}" width="${dimensions[name][0]}" height="${dimensions[name][1]}" loading="${eager ? 'eager' : 'lazy'}" decoding="async"${eager ? ' fetchpriority="high"' : ''}>`;
  return `<article class="duo-study" aria-labelledby="duo-title">
    <figure class="duo-hero">${image('01-collagen-hero.jpg', 'DuoLife Collagen night cream — close-up of the packaging', true)}</figure>
    <header class="duo-intro duo-contained">
      <h1 id="duo-title">DuoLife: Motion design agency &amp; CGI production for a supplement brand — 5+ years of collaboration</h1>
      <p>A long-term marketing collaboration with the DuoLife supplement brand — packaging design, 3D product visualization, CGI advertising production, and motion design for marketing campaigns and corporate events.</p>
    </header>
    <section class="duo-about">
      <div class="duo-about-copy">
        <section aria-labelledby="duo-about-title"><h2 id="duo-about-title">About the<br>collaboration</h2>
          <p>As a motion design agency and CGI production studio, we've been working with DuoLife, a company in the dietary supplement industry, for more than five years. Over that time we've delivered dozens of projects combining product design, 3D animation and full-scale advertising production for multiple marketing channels. This long-term marketing collaboration allowed us to gain a deep understanding of the brand's visual identity, its values, and the way it communicates with customers, while steadily expanding the scope of our services — from early packaging design concepts to the advanced 3D animation used in advertising campaigns, digital marketing materials, and at corporate events.</p>
          <p>This kind of long-term agency-brand relationship has its own dynamic. Instead of a series of disconnected, one-off assignments, every subsequent project built on the experience gained from previous work — familiarity with the product line, the brand's aesthetic preferences, its marketing tone of voice, and its expectations regarding final production quality. This allowed us to work faster and with greater precision than in a one-time collaboration, while maintaining a consistently high production standard throughout the entire partnership.</p>
        </section>
        <section class="duo-scope-intro" aria-labelledby="duo-scope-title"><h2 id="duo-scope-title">Scope of services<br>delivered</h2>
          <p>Our collaboration with DuoLife spans several complementary areas of creative production, which over time began to overlap and reinforce one another.</p>
        </section>
      </div>
      <figure>${image('02-boreliss-fern.jpg', 'DuoLife BorelissPro bottle floating above ferns')}</figure>
    </section>
    <section class="duo-services duo-contained" aria-labelledby="duo-scope-title">
      <div class="duo-service"><h3>Product packaging design</h3>
        <p>The collaboration started with packaging design — a core branding element in the dietary supplement industry, where packaging aesthetics, the clarity of ingredient information, and how the product is presented on the store shelf and across e-commerce channels directly influence consumer purchasing decisions. Packaging design projects had to account for both the regulatory requirements typical of the supplement industry and consistency with DuoLife's overall visual identity.</p>
        <figure>${image('03-aloes-packaging.jpg', 'DuoLife Aloes Beauty Care packaging with aloe and passion fruit')}</figure>
      </div>
      <div class="duo-service"><h3>3D product visualization<br>and CGI rendering</h3>
        <p>Building on this packaging work, we produced 3D product visualizations used across advertising materials, digital marketing campaigns, and the brand's website. Photorealistic 3D renders let the brand present products in high quality without commissioning a new photo shoot for every advertising campaign, label update, or product line refresh. 3D modeling and precise material texturing — from matte cardboard packaging to plastic and glass containers — gave the brand full flexibility to produce advertising visuals for multiple marketing channels at once: social media, display advertising, in-store POS</p>
        <figure>${image('04-product-ring.jpg', 'Colorful DuoLife product containers arranged in a floating ring')}</figure>
      </div>
      <div class="duo-service"><h3>Motion design and product animation</h3>
        <p>Alongside this, we grew our motion design services, creating animated advertising content promoting individual products from DuoLife's portfolio. This work ranged from short product animations designed for social media to more extensive CGI advertising films supporting sales campaigns, new product launches, and the brand's seasonal marketing communication. Every animation was designed with a specific marketing goal in mind — whether building awareness for a new product or driving sales of an existing line.</p>
        <figure>${image('05-day-night.jpg', 'DuoLife Day bottle in a cinematic outdoor night scene')}</figure>
      </div>
    </section>
    <section class="duo-event duo-contained" aria-labelledby="duo-event-title"><h3 id="duo-event-title">Event animation and corporate production</h3>
      <p>A separate, less typical part of the collaboration involved producing decorative animations used at corporate events, industry conferences, and parties organized by DuoLife. This type of video production called for a different creative approach than standard consumer-facing product advertising — mood, visual aesthetics matched to the event's set design, on-stage dynamics, and overall consistency with the character of the event were the key priorities. Animations of this kind served a purely visual function, building atmosphere and reinforcing the brand's sense of professionalism among attendees.</p>
    </section>
    <figure class="duo-banner">${image('06-maca-campaign.jpg', 'DuoLife Maca supplement bottle against magenta light and reflections')}</figure>
    <section class="duo-partnership duo-contained" aria-labelledby="duo-partnership-title"><h2 id="duo-partnership-title">Why a long-term partnership with<br>a motion design agency pays off</h2>
      <p>Our experience working with DuoLife illustrates how much value a stable relationship with a single production agency can bring to brands that invest regularly in visual marketing. Instead of onboarding a new creative partner for every project, the brand was able to draw on an existing library of 3D product models, proven animation workflows, and an established visual style — which meaningfully shortened production timelines for new advertising materials and lowered the cost of launching new campaigns.</p>
      <div class="duo-gallery">
        <div><figure>${image('07-box-open.jpg', 'Open DuoLife presentation box with individually packaged products')}</figure><figure>${image('12-packaging-detail.jpg', 'Black product packaging — close-up of the molded caps')}</figure></div>
        <div><figure>${image('08-collagen-detail.jpg', 'DuoLife Collagen night cream glass jar and material detail')}</figure><figure>${image('11-capsule.jpg', 'Exploded supplement capsule showing its ingredients')}</figure></div>
        <div><figure>${image('09-box-overhead.jpg', 'DuoLife product gift box seen from above')}</figure><figure>${image('10-night-water.jpg', 'DuoLife Night bottle beside water and pale sand dunes')}</figure></div>
      </div>
    </section>
    <section class="duo-tools duo-contained">
      <div><section aria-labelledby="duo-tools-title"><h2 id="duo-tools-title">3D production tools<br>and technologies</h2>
        <p>Depending on the project stage, we used Fusion 360 for product modeling, Cinema 4D with the Redshift render engine for 3D visualization, photorealistic rendering and animation, and Adobe After Effects for compositing, motion design and video post-production.</p>
      </section>
      <section class="duo-scope-intro" aria-labelledby="duo-agency-title"><h2 id="duo-agency-title">Agency scope of<br>services</h2>
        <p>Packaging Design · 3D Product Visualization · 3D Modeling · 3D &amp; CGI Rendering · Advertising Production · Motion Design · 3D Animation · Event Animation · Marketing Campaigns · Digital Marketing · POS Materials · Social Media Content</p>
      </section></div>
      <figure>${image('13-boreliss-sunlight.jpg', 'DuoLife BorelissPro bottle on a stone pedestal in warm sunlight')}</figure>
    </section>
    <figure class="duo-finish">${image('15-dropper.png', 'DuoLife amber glass dropper bottle')}</figure>
    <footer class="duo-signoff"><img class="ilma-wordmark" src="/assets/brand/ilma-wordmark.svg" alt="ILMA" width="156" height="36" loading="lazy"><a href="/works" onclick="navigate('works'); return false;">Back to projects <span aria-hidden="true">↗</span></a></footer>
  </article>`;
}
