import { makeScrollSequence } from "./timelineScroll";

export function aboutReveal(selector: string,trigger: string): gsap.core.Timeline {
  return makeScrollSequence(
    [
      { selector: selector, from: { scale: 0.5, opacity: 0 } },
    ],
    {
      scroll: { trigger: trigger, start: "top 80%", once: true },
      defaults: { duration: 0.6, ease: "power2.out", stagger: 0.15 },
    }
  );
}
