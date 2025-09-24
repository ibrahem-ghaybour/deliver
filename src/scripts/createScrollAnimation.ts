import { makeScrollSequence } from "./timelineScroll";

type ScrollAnimOptions = {
  start?: string;
  once?: boolean;
  defaults?: gsap.TweenVars;
};

export function createScrollAnimation(
  selector: string,
  trigger: string | HTMLElement,
  animation: object = { scale: 0.5, opacity: 0 },
  options?: ScrollAnimOptions
): gsap.core.Timeline {
  const { start, once, defaults } = options || {};
  return makeScrollSequence(
    [{ selector: selector, from: animation }],
    {
      scroll: { trigger: trigger, start: start || "top 70%", once: once ?? true },
      defaults: { duration: 0.6, ease: "power2.out", stagger: 0.15, ...(defaults || {}) },
    }
  );
}
