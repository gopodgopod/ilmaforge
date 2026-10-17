(() => {
  "use strict";

  const measurementId = "G-0LZNFW01K3";
  const storageKey = "ilma-analytics-choice";
  let loaded = false;
  let lastPage = "";

  const currentPage = () => `${window.location.pathname}${window.location.search}`;

  function trackPageView() {
    if (!loaded || localStorage.getItem(storageKey) !== "accepted") return;
    const page = currentPage();
    if (page === lastPage) return;
    lastPage = page;
    window.gtag("event", "page_view", {
      page_title: document.title,
      page_location: window.location.href,
      page_path: page,
    });
  }

  function loadAnalytics() {
    if (loaded) return;
    loaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("consent", "default", { analytics_storage: "denied" });
    window.gtag("consent", "update", { analytics_storage: "granted" });
    window.gtag("config", measurementId, { send_page_view: false });

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);
    trackPageView();
  }

  function removeAnalyticsCookies() {
    document.cookie.split(";").forEach((cookie) => {
      const name = cookie.split("=")[0].trim();
      if (!name.startsWith("_ga")) return;
      document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
      document.cookie = `${name}=; Max-Age=0; path=/; domain=ilmaforge.com; SameSite=Lax`;
      document.cookie = `${name}=; Max-Age=0; path=/; domain=.ilmaforge.com; SameSite=Lax`;
    });
  }

  function saveChoice(choice) {
    localStorage.setItem(storageKey, choice);
    if (choice === "accepted") {
      loadAnalytics();
    } else {
      if (loaded && window.gtag) {
        window.gtag("consent", "update", { analytics_storage: "denied" });
      }
      removeAnalyticsCookies();
    }
    banner.remove();
  }

  const banner = document.createElement("aside");
  banner.className = "analytics-consent";
  banner.setAttribute("aria-label", "Analytics cookie preferences");
  banner.setAttribute("role", "dialog");
  banner.setAttribute("aria-live", "polite");
  banner.innerHTML = `
    <div class="analytics-consent-copy">
      <strong>Privacy choices</strong>
      <p>ILMA uses Google Analytics to understand visits to this site. Analytics starts only if you allow it. <a href="/privacy.html">Privacy &amp; cookies</a></p>
    </div>
    <div class="analytics-consent-actions">
      <button type="button" class="analytics-consent-reject">Reject</button>
      <button type="button" class="analytics-consent-accept">Allow analytics</button>
    </div>`;
  banner.querySelector(".analytics-consent-reject").addEventListener("click", () => saveChoice("rejected"));
  banner.querySelector(".analytics-consent-accept").addEventListener("click", () => saveChoice("accepted"));

  window.ilmaAnalyticsConsent = {
    showSettings() {
      document.body.appendChild(banner);
    },
    getChoice() {
      return localStorage.getItem(storageKey);
    },
  };

  const choice = localStorage.getItem(storageKey);
  if (choice === "accepted") loadAnalytics();
  else if (choice !== "rejected") document.body.appendChild(banner);

  const originalPushState = history.pushState.bind(history);
  history.pushState = (...args) => {
    originalPushState(...args);
    window.setTimeout(trackPageView, 0);
  };
  window.addEventListener("popstate", trackPageView);
})();

