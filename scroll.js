(function () {
  const revealSelectors = [
    ".section-head",
    ".about-card",
    ".store-card",
    ".info-panel",
    ".mini-card",
    ".course-cards li",
    ".exp-card",
    ".edu-card",
    ".project-card",
    ".contact-card",
  ];

  const elements = document.querySelectorAll(revealSelectors.join(", "));
  if (!elements.length) return;

  elements.forEach((el) => el.classList.add("reveal"));

  document.querySelectorAll(".store-grid, .contact-grid, .timeline, .project-grid, .lang-cards, .course-cards").forEach((grid) => {
    const items = grid.querySelectorAll(".reveal");
    items.forEach((item, index) => {
      item.style.transitionDelay = `${Math.min(index * 0.1, 0.6)}s`;
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  elements.forEach((el) => observer.observe(el));
})();
