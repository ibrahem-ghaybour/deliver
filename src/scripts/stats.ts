import { makeScrollSequence } from "./timelineScroll";

export function statsReveal(): gsap.core.Timeline {
  return makeScrollSequence(
    [
      { selector: ".hero-stats > .col-6, .hero-stats > .col-lg-3", from: { y: 20, opacity: 0 } },
    ],
    {
      scroll: { trigger: ".hero-stats", start: "top 55%", once: true },
      defaults: { duration: 0.6, ease: "power2.out", stagger: 0.15 },
    }
  );
}
