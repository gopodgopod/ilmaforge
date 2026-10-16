function buildPosnordCaseStudy() {
  const sizes = { '01-hero.png': [3840, 1500], '02-table-top.png': [1500, 1500], '03-table-perspective.png': [1500, 1500], '04-table-side.png': [1500, 1500], '05-model-shading.png': [1536, 1920], '06-depth-map.png': [1536, 1920], '07-model-wireframe.png': [1536, 1920], '08-social-formats.png': [3840, 2160], '09-film-preview.png': [1920, 1080], '10-construction-detail.png': [1500, 441] };
  const image = (file, alt, eager = false) => `<img src="/assets/posnord/${file}" alt="${alt}" width="${sizes[file][0]}" height="${sizes[file][1]}" loading="${eager ? 'eager' : 'lazy'}" decoding="async"${eager ? ' fetchpriority="high"' : ''}>`;
  return `<article class="posnord-study" aria-labelledby="posnord-title">
    <figure class="posnord-hero">${image('01-hero.png', 'Posnord — green Simon side table in a sunlit interior', true)}</figure>
    <div class="posnord-opening">
      <header class="posnord-intro posnord-contained"><div><h1 id="posnord-title">Product animation explaining design and construction</h1>
        <p>How to communicate the complexity of a physical product within a few seconds? For Posnord, we created a CGI product animation designed for social media, showing not only the final form of the product but also the individual elements that make up its construction.</p>
      </div></header>
      <div class="posnord-products posnord-contained" role="group" aria-label="Posnord table product views">
        <figure>${image('02-table-top.png', 'Overhead view of the green table with a book and coffee cup')}</figure>
        <figure>${image('03-table-perspective.png', 'Three-quarter view of the green table and wooden legs')}</figure>
        <figure>${image('04-table-side.png', 'Side view of the table in the sunlit room')}</figure>
      </div>
      <section class="posnord-about posnord-contained" aria-labelledby="posnord-about-title">
        <div><h2 id="posnord-about-title">About the project</h2>
          <p>The goal of the project was to create a short and engaging animation that would present the product in a clear and visually attractive way. Instead of showing only the finished object, we focused on revealing the design process behind it — separating and animating its components to explain how the different parts work together.</p>
          <p>CGI gave us full control over the presentation, allowing us to build a digital version of the product where every element could be precisely modeled, positioned, and animated. This approach helped transform a technical product presentation into a more dynamic and understandable visual story.</p>
        </div>
        <figure>${image('05-model-shading.png', 'Untextured 3D model and exploded components in the room')}</figure>
        <figure>${image('06-depth-map.png', 'Depth map of the table and surrounding interior')}</figure>
      </section>
    </div>
    <section class="posnord-model posnord-contained" aria-labelledby="posnord-model-title">
      <figure>${image('07-model-wireframe.png', 'Wireframe view of the individual table components')}</figure>
      <div><h2 id="posnord-model-title">Creating the 3D model</h2>
        <p>The production started with building the complete 3D model based on reference materials provided by the client. Every component of the product was recreated individually, including smaller elements such as screws and assembly parts.</p>
        <p>Preparing each element as a separate 3D object allowed us to create an animation where the product could be deconstructed and rebuilt. This required precise modeling, accurate proportions, and careful material development to maintain a realistic appearance throughout the sequence.</p>
      </div>
    </section>
    <section class="posnord-story posnord-contained" aria-labelledby="posnord-story-title">
      <div><h2 id="posnord-story-title">Animation and visual storytelling</h2>
        <p>The animation was designed around one main idea — showing as much as possible within a short format. By presenting the individual components and their relationship to the final product, the animation creates a clear visual explanation of the object's construction.</p>
        <p>The final CGI asset was prepared for social media communication, combining product visualization, motion design, and technical storytelling in a concise and engaging format.</p>
      </div>
      <figure>${image('08-social-formats.png', 'Examples of the Posnord campaign in social feed, square and vertical story formats')}</figure>
    </section>
    <figure class="posnord-film posnord-contained" aria-label="Reserved space for the Posnord film">${image('09-film-preview.png', 'Preview of the Simon table product animation')}<figcaption>Film coming soon</figcaption></figure>
    <section class="posnord-summary posnord-contained" aria-labelledby="posnord-summary-title"><div><h2 id="posnord-summary-title">Project summary</h2>
      <p>For Posnord, we created a complete CGI product animation that transforms a technical object into an engaging visual presentation. By recreating and animating every individual component, we were able to show the product's structure and design in a clear and memorable way.</p>
    </div></section>
    <figure class="posnord-finish posnord-contained">${image('10-construction-detail.png', 'Close-up of the table leg connection and assembly screw')}</figure>
    <footer class="posnord-signoff"><div class="case-brand"><a class="logo" href="/" onclick="navigate('home'); return false;" aria-label="ILMA — home">ILMA</a></div><a href="/works" onclick="navigate('works'); return false;">Back to projects <span aria-hidden="true">↗</span></a></footer>
  </article>`;
}
