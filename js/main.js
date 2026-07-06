(() => {
  const toggle = document.querySelector(".linia-menu-toggle");
  const nav = document.querySelector(".linia-nav");
  const closeMenu = () => {
    if (!toggle || !nav) return;
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Ouvrir le menu");
    nav.classList.remove("is-open");
    document.body.classList.remove("nav-open");
  };
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      toggle.setAttribute(
        "aria-label",
        open ? "Ouvrir le menu" : "Fermer le menu",
      );
      nav.classList.toggle("is-open", !open);
      document.body.classList.toggle("nav-open", !open);
    });
    nav
      .querySelectorAll("a")
      .forEach((link) => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });
  }
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const items = document.querySelectorAll(".reveal-on-scroll");
  if (reduce || !("IntersectionObserver" in window))
    items.forEach((el) => el.classList.add("is-visible"));
  else {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
    );
    items.forEach((el) => observer.observe(el));
  }
  const footer = document.querySelector(".site-footer");
  const sticky = document.querySelector(".sticky-mobile-cta");
  if (footer && sticky && "IntersectionObserver" in window)
    new IntersectionObserver(
      ([entry]) => {
        sticky.style.transform = entry.isIntersecting
          ? "translateY(120%)"
          : "translateY(0)";
      },
      { threshold: 0.05 },
    ).observe(footer);
})();
