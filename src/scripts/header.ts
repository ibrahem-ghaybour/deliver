export function headerReveal() {
  const header = document.querySelector<HTMLElement>(".site-header");
  if (header) {
    let lastY = window.scrollY;
    let ticking = false;
    const THRESHOLD = 8;

    const onScroll = () => {
      const y = Math.max(0, window.scrollY);
      const delta = y - lastY;

      header.classList.toggle("site-header--scrolled", y > 2);

      if (delta > THRESHOLD) {
        header.classList.add("site-header--hidden");
      } else if (delta < -THRESHOLD) {
        header.classList.remove("site-header--hidden");
      }

      if (y <= 0) header.classList.remove("site-header--hidden");

      lastY = y;
      ticking = false;
    };

    const onScrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(onScroll);
        ticking = true;
      }
    };

    addEventListener("scroll", onScrollHandler, { passive: true });
    addEventListener("resize", () => (lastY = window.scrollY), {
      passive: true,
    });

    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      header.style.transition = "none";
    }
  }
}
