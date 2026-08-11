/* =========================================================
   MRN AGRO INDUSTRIES — shared scripts
   Kept deliberately light: menu, fade-up reveals, counters,
   the static paddy artwork, and the contact form.
   ========================================================= */
(function () {
  "use strict";

  const SVGNS = "http://www.w3.org/2000/svg";
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const $  = (s, c) => (c || document).querySelector(s);
  const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));
  const rand = (a, b) => a + Math.random() * (b - a);

  /* ---------------------------------------------------------
     Paddy artwork (static — drawn once, no motion)
     --------------------------------------------------------- */
  function qPoint(t, p0, p1, p2) {
    const u = 1 - t;
    return {
      x: u * u * p0.x + 2 * u * t * p1.x + t * t * p2.x,
      y: u * u * p0.y + 2 * u * t * p1.y + t * t * p2.y
    };
  }

  function makeStalk(height, lean, color, grains) {
    const g = document.createElementNS(SVGNS, "g");
    const p0 = { x: 0, y: 0 };
    const p1 = { x: lean * 0.25, y: -height * 0.58 };
    const p2 = { x: lean, y: -height };

    const stem = document.createElementNS(SVGNS, "path");
    stem.setAttribute("d", `M0 0 Q ${p1.x.toFixed(1)} ${p1.y.toFixed(1)} ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`);
    stem.setAttribute("fill", "none");
    stem.setAttribute("stroke", color);
    stem.setAttribute("stroke-width", (height * 0.014).toFixed(2));
    stem.setAttribute("stroke-linecap", "round");
    g.appendChild(stem);

    for (let b = 0; b < 2; b++) {
      const side = b === 0 ? -1 : 1;
      const base = qPoint(0.22 + b * 0.14, p0, p1, p2);
      const bl = height * rand(0.3, 0.46);
      const blade = document.createElementNS(SVGNS, "path");
      blade.setAttribute(
        "d",
        `M${base.x.toFixed(1)} ${base.y.toFixed(1)}
         Q ${(base.x + side * bl * 0.55).toFixed(1)} ${(base.y - bl * 0.55).toFixed(1)}
           ${(base.x + side * bl * 1.05).toFixed(1)} ${(base.y - bl * 0.18).toFixed(1)}
         Q ${(base.x + side * bl * 0.5).toFixed(1)} ${(base.y - bl * 0.32).toFixed(1)}
           ${base.x.toFixed(1)} ${base.y.toFixed(1)} Z`
      );
      blade.setAttribute("fill", color);
      g.appendChild(blade);
    }

    for (let i = 0; i < grains; i++) {
      const t = 0.6 + (i / grains) * 0.42;
      if (t > 1) break;
      const pt = qPoint(Math.min(t, 1), p0, p1, p2);
      const side = i % 2 === 0 ? -1 : 1;
      const len = height * rand(0.035, 0.06);
      const cx = pt.x + side * len * 0.9;
      const cy = pt.y + len * 0.35;
      const grain = document.createElementNS(SVGNS, "ellipse");
      grain.setAttribute("cx", cx.toFixed(1));
      grain.setAttribute("cy", cy.toFixed(1));
      grain.setAttribute("rx", (len * 0.95).toFixed(1));
      grain.setAttribute("ry", (len * 0.34).toFixed(1));
      grain.setAttribute("fill", color);
      grain.setAttribute("transform", `rotate(${(side * rand(24, 44)).toFixed(1)} ${cx.toFixed(1)} ${cy.toFixed(1)})`);
      g.appendChild(grain);
    }
    return g;
  }

  // hero / banner strip of paddy along the bottom edge
  $$(".paddy").forEach((svg) => {
    const count = parseInt(svg.dataset.stalks, 10) || 26;
    const color = svg.dataset.color || "#08200F";
    const layer = document.createElementNS(SVGNS, "g");
    layer.setAttribute("opacity", svg.dataset.opacity || "1");
    for (let i = 0; i < count; i++) {
      const x = (i / (count - 1)) * 1480 - 20 + rand(-20, 20);
      const stalk = makeStalk(300, rand(-48, 48), color, 9);
      stalk.setAttribute("transform", `translate(${x.toFixed(1)} 428) scale(${rand(0.72, 1.15).toFixed(3)})`);
      layer.appendChild(stalk);
    }
    svg.appendChild(layer);
  });

  // illustrated field inside the About figure
  $$("[data-artstalks]").forEach((g) => {
    const count = 18;
    for (let i = 0; i < count; i++) {
      const baseY = rand(520, 830);
      const x = (i / (count - 1)) * 660 - 12 + rand(-16, 16);
      const depth = (baseY - 520) / 310;
      const stalk = makeStalk(300, rand(-44, 44), "#20381A", 8);
      stalk.setAttribute("transform", `translate(${x.toFixed(1)} ${baseY.toFixed(1)}) scale(${(0.45 + depth * 0.85).toFixed(3)})`);
      stalk.setAttribute("opacity", (0.45 + depth * 0.5).toFixed(2));
      g.appendChild(stalk);
    }
  });

  /* ---------------------------------------------------------
     Hero slider (home page)
     --------------------------------------------------------- */
  const slider = $("#heroSlider");
  if (slider) {
    const slides = $$(".hs-slide", slider);
    const dots = $$("button", $("#hsDots"));
    const INTERVAL = 6000;
    let index = 0;
    let timer = null;

    function show(next) {
      index = (next + slides.length) % slides.length;
      slides.forEach((s, i) => s.classList.toggle("is-active", i === index));
      dots.forEach((d, i) => d.setAttribute("aria-selected", String(i === index)));
    }

    function play() {
      if (reduced) return;
      stop();
      timer = setInterval(() => show(index + 1), INTERVAL);
    }
    function stop() {
      if (timer) { clearInterval(timer); timer = null; }
    }
    function goto(i) { show(i); play(); }

    $("#hsNext").addEventListener("click", () => goto(index + 1));
    $("#hsPrev").addEventListener("click", () => goto(index - 1));
    dots.forEach((d, i) => d.addEventListener("click", () => goto(i)));

    // pause while the visitor is reading or tabbing through
    slider.addEventListener("mouseenter", stop);
    slider.addEventListener("mouseleave", play);
    slider.addEventListener("focusin", stop);
    slider.addEventListener("focusout", play);
    document.addEventListener("visibilitychange", () => (document.hidden ? stop() : play()));

    // arrow keys
    slider.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") { e.preventDefault(); goto(index + 1); }
      if (e.key === "ArrowLeft")  { e.preventDefault(); goto(index - 1); }
    });

    // swipe on touch devices
    let startX = null;
    slider.addEventListener("touchstart", (e) => { startX = e.touches[0].clientX; stop(); }, { passive: true });
    slider.addEventListener("touchend", (e) => {
      if (startX === null) return;
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 45) goto(index + (dx < 0 ? 1 : -1));
      else play();
      startX = null;
    }, { passive: true });

    play();
  }

  /* ---------------------------------------------------------
     Mobile menu
     --------------------------------------------------------- */
  const nav = $("#primaryNav");
  const toggle = $("#navToggle");
  if (nav && toggle) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    $$("a", nav).forEach((a) =>
      a.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  /* ---------------------------------------------------------
     Fade-up reveals
     --------------------------------------------------------- */
  $$("[data-delay]").forEach((el) => el.style.setProperty("--d", el.dataset.delay + "ms"));

  const revealObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        revealObs.unobserve(entry.target);
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
  );
  $$(".reveal").forEach((el) => revealObs.observe(el));

  /* ---------------------------------------------------------
     Counting statistics
     --------------------------------------------------------- */
  function countUp(el) {
    const target = parseFloat(el.dataset.count);
    if (reduced) { el.textContent = String(target); return; }
    const plain = el.dataset.plain === "1";     // a year, not a quantity
    const from = plain ? Math.max(target - 30, 0) : 0;
    const dur = 1200;
    const start = performance.now();
    (function step(now) {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = String(Math.round(from + (target - from) * eased));
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = String(target);
    })(start);
  }

  const countObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        countUp(entry.target);
        countObs.unobserve(entry.target);
      });
    },
    { threshold: 0.5 }
  );
  $$("[data-count]").forEach((el) => countObs.observe(el));

  /* ---------------------------------------------------------
     Process timeline — highlight steps as they scroll in
     --------------------------------------------------------- */
  const process = $(".process");
  if (process) {
    const stepObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-lit");
          stepObs.unobserve(entry.target);
        });
      },
      { threshold: 0.4 }
    );
    $$("li", process).forEach((li) => stepObs.observe(li));
  }

  /* ---------------------------------------------------------
     Contact form (no backend yet — hands off to the mail client)
     --------------------------------------------------------- */
  const form = $("#enquiryForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const lines = [
        "Name: " + (data.get("name") || ""),
        "Company: " + (data.get("company") || ""),
        "Phone: " + (data.get("phone") || ""),
        "Email: " + (data.get("email") || ""),
        "Product: " + (data.get("product") || ""),
        "Quantity: " + (data.get("quantity") || ""),
        "",
        String(data.get("message") || "")
      ];
      const subject = "Enquiry from " + (data.get("name") || "website");
      window.location.href =
        "mailto:info@mrnagro.in?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(lines.join("\n"));

      const status = $("#formStatus");
      if (status) {
        status.textContent = "Opening your email app with the enquiry details. If nothing opens, write to us directly at info@mrnagro.in.";
        status.classList.add("show");
      }
    });
  }

  /* ---------------------------------------------------------
     Footer year
     --------------------------------------------------------- */
  const year = $("#year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
