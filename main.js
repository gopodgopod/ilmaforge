/* ==============================================================
   PROJECT DATA

   How to add a project:
   1. Add an object to the PROJECTS array below.
   2. img       — path to the cover image (e.g. "images/1.jpg")
   3. tags      — array of strings, used automatically in filters
   4. wide      — true/false: card spans 2 columns in the grid
   5. blocks    — array of content blocks rendered on the project page

   AVAILABLE BLOCK TYPES:
   ─────────────────────────────────────────────────────────────
   Full-width image (edge to edge, no padding):
     { type: 'img-full', src: 'photo.jpg' }

   Full-width image with inner padding:
     { type: 'img-padded', src: 'photo.jpg' }

   Two images side by side:
     { type: 'img-2', items: ['a.jpg', 'b.jpg'] }

   Three images side by side:
     { type: 'img-3', items: ['a.jpg', 'b.jpg', 'c.jpg'] }

   Image LEFT + text RIGHT (50/50 split):
     { type: 'img-text', src: 'photo.jpg', heading: 'Title', body: 'Paragraph text here.' }

   Text LEFT + image RIGHT (50/50 split):
     { type: 'text-img', src: 'photo.jpg', heading: 'Title', body: 'Paragraph text here.' }

   Full-width text block (heading + paragraphs, use \n\n to separate):
     { type: 'text', heading: 'Title', body: 'First paragraph.\n\nSecond paragraph.' }

   Full-width text block without heading:
     { type: 'text', body: 'Some copy here.' }

   Centered quote with accent border:
     { type: 'quote', text: 'The quote text.', author: 'Author Name' }

   Embedded video (Vimeo or YouTube URL):
     { type: 'video-embed', url: 'https://vimeo.com/123456' }

   Self-hosted video file:
     { type: 'video-file', src: 'video.mp4' }

   Thin horizontal divider line:
     { type: 'divider' }

   ─────────────────────────────────────────────────────────────
   ============================================================== */

const PROJECTS = [
  {
    id: 1,
    title: "Project Title MAIN TEST",
    client: "Client Name",
    tags: ["3d", "product"],
    year: 2025,
    img: "1.jpg",
    wide: true,
    description: "Short description of the project.",
    role: "CGI, 3D Animation",
    deliverables: "Product Film",
    duration: "4 weeks",
    blocks: [
      { type: "img-full", src: "1.jpg" },
      { type: "img-2", items: ["2.jpg", "3.jpg"] },
      {
        type: "text",
        heading: "About this project",
        body: "Describe the project here.",
      },
    ],
  },
  {
    id: 2,
    title: "Project Title 2",
    client: "Client Name",
    tags: ["motion", "film"],
    year: 2025,
    img: "4.jpg",
    wide: false,
    description: "Short description of the project.",
    role: "Motion Design",
    deliverables: "60s Film",
    duration: "3 weeks",
    blocks: [
      { type: "img-full", src: "4.jpg" },
      { type: "img-2", items: ["5.jpg", "6.jpg"] },
      {
        type: "text",
        heading: "About this project",
        body: "Describe the project here.",
      },
    ],
  },
  {
    id: 3,
    title: "Project Title 3",
    client: "Client Name",
    tags: ["3d", "still"],
    year: 2024,
    img: "7.jpg",
    wide: false,
    description: "Short description of the project.",
    role: "CGI, Rendering",
    deliverables: "Still Images",
    duration: "2 weeks",
    blocks: [
      { type: "img-full", src: "7.jpg" },
      { type: "img-2", items: ["8.jpg", "9.jpg"] },
    ],
  },
  {
    id: 4,
    title: "Project Title 4",
    client: "Client Name",
    tags: ["product", "still"],
    year: 2024,
    img: "10.jpg",
    wide: true,
    description: "Short description of the project.",
    role: "Product Visualization",
    deliverables: "CGI Images",
    duration: "3 weeks",
    blocks: [
      { type: "img-full", src: "10.jpg" },
      { type: "img-3", items: ["1.jpg", "2.jpg", "3.jpg"] },
    ],
  },
];

/* ==============================================================
   UTILITY FUNCTIONS
   ============================================================== */

/** Collects unique tags from all projects */
function getAllTags() {
  const set = new Set();
  PROJECTS.forEach((p) => p.tags.forEach((t) => set.add(t)));
  return [...set].sort();
}

/** Converts a Vimeo / YouTube URL to an embed URL */
function toEmbedUrl(url) {
  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
  if (vimeoMatch)
    return `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=0`;

  const ytMatch = url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=)([\w-]+)/);
  if (ytMatch) return `https://www.youtube.com/embed/${ytMatch[1]}`;

  return url;
}

/* ==============================================================
   SECTION NAVIGATION
   ============================================================== */
let currentSection = "home";
let previousSection = "home";

function navigate(sectionId) {
  document
    .querySelectorAll("section")
    .forEach((s) => s.classList.remove("active"));
  document.getElementById(sectionId).classList.add("active");

  document.querySelectorAll(".nav-links a").forEach((a) => {
    const isActive =
      a.getAttribute("data-section") === sectionId ||
      (a.getAttribute("data-section") === "works" && sectionId === "project");
    a.classList.toggle("act", isActive);
  });

  currentSection = sectionId;
  window.scrollTo(0, 0);

  if (sectionId === "home") renderGrid("homeGrid", "all", "homeFilterTags");
  if (sectionId === "works") renderGrid("worksGrid", "all", "worksFilterTags");

  // Update URL hash
  if (sectionId === "home") history.pushState(null, "", "/");
  if (sectionId === "works") history.pushState(null, "", "/works");
  if (sectionId === "contact") history.pushState(null, "", "/contact");
}

/** Go back from project detail page */
function goBackToWorks() {
  navigate(previousSection === "home" ? "home" : "works");
}

/** Mobile menu toggle */
let mobileMenuOpen = false;
function toggleMobileMenu() {
  mobileMenuOpen = !mobileMenuOpen;
  const links = document.querySelector(".nav-links");
  links.style.display = mobileMenuOpen ? "flex" : "";

  const spans = document.querySelectorAll(".nav-burger span");
  if (mobileMenuOpen) {
    spans[0].style.transform = "rotate(45deg) translate(4px, 4px)";
    spans[1].style.opacity = "0";
    spans[2].style.transform = "rotate(-45deg) translate(4px, -4px)";
  } else {
    spans.forEach((s) => (s.style = ""));
  }
}

/* ==============================================================
   PROJECT GRID RENDER
   ============================================================== */

function renderGrid(gridId, activeTag, tagsId) {
  renderFilterButtons(tagsId, activeTag, gridId);

  const grid = document.getElementById(gridId);
  const filtered =
    activeTag === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.tags.includes(activeTag));

  const origin = gridId === "homeGrid" ? "home" : "works";

  grid.innerHTML = filtered
    .map(
      (p) => `
    <div class="proj-card ${p.wide ? "wide" : ""}"
         onclick="openProject(${p.id}, '${origin}')">
      <div class="proj-card-bg"
           style="background-image: url('/${p.img}'); background-color: #1a1a1a;"></div>
      <div class="proj-card-overlay">
        <div class="proj-card-meta">
          <span class="proj-card-title">${p.title}</span>
          <div class="proj-card-tags">
            ${p.tags.map((t) => `<span class="proj-card-tag">${t}</span>`).join("")}
          </div>
        </div>
      </div>
    </div>
  `,
    )
    .join("");
}

/** Renders filter buttons above the grid */
function renderFilterButtons(containerId, activeTag, gridId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const tags = ["all", ...getAllTags()];
  container.innerHTML = tags
    .map(
      (tag) => `
    <button class="tag-btn ${tag === activeTag ? "active" : ""}"
            onclick="renderGrid('${gridId}', '${tag}', '${containerId}')">
      ${tag === "all" ? "All" : tag}
    </button>
  `,
    )
    .join("");
}

/* ==============================================================
   PROJECT DETAIL PAGE
   ============================================================== */

function openProject(id, fromSection) {
  const project = PROJECTS.find((p) => p.id === id);
  if (!project) return;

  previousSection = fromSection || "works";

  document.getElementById("projTopbarName").textContent = project.title;
  document.getElementById("projHeaderEl").innerHTML =
    buildProjectHeader(project);
  document.getElementById("projContentEl").innerHTML = `
    <div class="proj-content">
      ${project.blocks.map((b) => buildBlock(b)).join("")}
    </div>
  `;
  document.getElementById("projNavEl").innerHTML = "";

  // Update URL — shareable link e.g. ilmaforge.com/#project-1
  history.pushState(null, "", `/project/${project.id}`);

  navigate("project");
}

/** HTML header for the project detail page */
function buildProjectHeader(p) {
  return `
    <div class="proj-header">
      <div class="proj-header-left">
        <div class="proj-tags-row">
          ${p.tags.map((t) => `<span class="proj-tag">${t}</span>`).join("")}
        </div>
        <h1 class="proj-title">${p.title}</h1>
        <p class="proj-client">${p.client} · ${p.year}</p>
      </div>
      <div class="proj-header-right">
        <p class="proj-desc">${p.description}</p>
        <div class="proj-meta-grid">
          <div>
            <span class="proj-meta-lbl">Role</span>
            <span class="proj-meta-val">${p.role}</span>
          </div>
          <div>
            <span class="proj-meta-lbl">Deliverables</span>
            <span class="proj-meta-val">${p.deliverables}</span>
          </div>
          <div>
            <span class="proj-meta-lbl">Duration</span>
            <span class="proj-meta-val">${p.duration}</span>
          </div>
          <div>
            <span class="proj-meta-lbl">Year</span>
            <span class="proj-meta-val">${p.year}</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

/** HTML for a single content block */
function buildBlock(block) {
  switch (block.type) {
    case "img-full":
      return `
        <div class="blk-img-full">
          <img src="/${block.src}" alt="" loading="lazy">
        </div>`;

    case "img-padded":
      return `
        <div class="blk-img-padded">
          <img src="/${block.src}" alt="" loading="lazy">
        </div>`;

    case "img-2":
      return `
        <div class="blk-img-2">
          ${block.items.map((src) => `<img src="/${src}" alt="" loading="lazy">`).join("")}
        </div>`;

    case "img-3":
      return `
        <div class="blk-img-3">
          ${block.items.map((src) => `<img src="/${src}" alt="" loading="lazy">`).join("")}
        </div>`;

    case "img-text":
      return `
        <div class="blk-split blk-split--img-text">
          <div class="blk-split-img">
            <img src="/${block.src}" alt="" loading="lazy">
          </div>
          <div class="blk-split-text">
            ${block.heading ? `<h2>${block.heading}</h2>` : ""}
            ${(block.body || "")
              .split("\n\n")
              .map((p) => `<p>${p}</p>`)
              .join("")}
          </div>
        </div>`;

    case "text-img":
      return `
        <div class="blk-split blk-split--text-img">
          <div class="blk-split-text">
            ${block.heading ? `<h2>${block.heading}</h2>` : ""}
            ${(block.body || "")
              .split("\n\n")
              .map((p) => `<p>${p}</p>`)
              .join("")}
          </div>
          <div class="blk-split-img">
            <img src="/${block.src}" alt="" loading="lazy">
          </div>
        </div>`;

    case "text":
      return `
        <div class="blk-text">
          ${block.heading ? `<h2>${block.heading}</h2>` : ""}
          <div class="blk-text-body">
            ${(block.body || "")
              .split("\n\n")
              .map((p) => `<p>${p}</p>`)
              .join("")}
          </div>
        </div>`;

    case "quote":
      return `
        <div class="blk-quote">
          <div class="blk-quote-inner">
            <p class="blk-quote-text">"${block.text}"</p>
            ${block.author ? `<span class="blk-quote-author">${block.author}</span>` : ""}
          </div>
        </div>`;

    case "video-embed":
      return `
        <div class="blk-video">
          <iframe src="${toEmbedUrl(block.url)}"
                  allow="autoplay; fullscreen" allowfullscreen></iframe>
        </div>`;

    case "video-file":
      return `
        <div class="blk-video">
          <video src="${block.src}" controls playsinline></video>
        </div>`;

    case "divider":
      return `<div class="blk-divider"></div>`;

    default:
      return "";
  }
}

/* ==============================================================
   CONTACT FORM — Formspree
   Replace YOUR_FORM_ID with your ID from formspree.io
   ============================================================== */
async function submitForm() {
  const name = document.getElementById("ctName").value.trim();
  const email = document.getElementById("ctEmail").value.trim();
  const subject = document.getElementById("ctSubject").value.trim();
  const message = document.getElementById("ctMessage").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in name, email and message.");
    return;
  }

  const btn = document.querySelector(".send-btn");
  btn.textContent = "Sending…";
  btn.disabled = true;

  try {
    const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ name, email, subject, message }),
    });

    if (res.ok) {
      document.getElementById("formSuccess").classList.add("show");
      ["ctName", "ctEmail", "ctSubject", "ctMessage"].forEach((id) => {
        document.getElementById(id).value = "";
      });
      btn.textContent = "Sent ✓";
    } else {
      const data = await res.json();
      alert(
        data?.errors?.[0]?.message || "Something went wrong. Please try again.",
      );
      btn.textContent = "Send Message";
      btn.disabled = false;
    }
  } catch (err) {
    alert("Network error. Please try again.");
    btn.textContent = "Send Message";
    btn.disabled = false;
  }
}

/* ==============================================================
   CUSTOM CURSOR — disabled on touch devices
   ============================================================== */
const cursorEl = document.getElementById("cursor");
const cursorDot = document.getElementById("cursorDot");
const cursorRing = document.getElementById("cursorRing");
let mouseX = 0,
  mouseY = 0,
  ringX = 0,
  ringY = 0;

const isTouchDevice = () =>
  window.matchMedia("(pointer: coarse)").matches ||
  navigator.maxTouchPoints > 0;

if (isTouchDevice()) {
  if (cursorEl) cursorEl.style.display = "none";
  document.body.style.cursor = "auto";
  document
    .querySelectorAll("a, button")
    .forEach((el) => (el.style.cursor = "auto"));
} else {
  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateCursor() {
    cursorDot.style.left = mouseX + "px";
    cursorDot.style.top = mouseY + "px";

    ringX += (mouseX - ringX) * 0.3;
    ringY += (mouseY - ringY) * 0.3;
    cursorRing.style.left = ringX + "px";
    cursorRing.style.top = ringY + "px";

    requestAnimationFrame(animateCursor);
  }
  animateCursor();
}

/* ==============================================================
   INIT
   ============================================================== */
renderGrid("homeGrid", "all", "homeFilterTags");

// Handle direct URL on page load
(function handlePath() {
  const path = window.location.pathname;
  if (!path || path === "/") return;

  if (path === "/works") {
    navigate("works");
    return;
  }
  if (path === "/contact") {
    navigate("contact");
    return;
  }

  const projectMatch = path.match(/^\/project\/(\d+)$/);
  if (projectMatch) {
    openProject(parseInt(projectMatch[1]), "home");
  }
})();

// Handle browser back/forward buttons
window.addEventListener("popstate", () => {
  const path = window.location.pathname;
  if (!path || path === "/") {
    navigate("home");
    return;
  }
  if (path === "/works") {
    navigate("works");
    return;
  }
  if (path === "/contact") {
    navigate("contact");
    return;
  }

  const projectMatch = path.match(/^\/project\/(\d+)$/);
  if (projectMatch) openProject(parseInt(projectMatch[1]), "home");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.1 },
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
