import { gsap } from "gsap";

export type Step = {
  selector: string | Element;
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  at?: gsap.Position;
};

export function makeSequence(
  steps: Step[] = [],
  defaults: gsap.TweenVars = { duration: 0.6, ease: "power2.out" }
): gsap.core.Timeline {
  const tl = gsap.timeline({ defaults });
  steps.forEach(({ selector, from = {}, to, at }) => {
    if (to) {
      tl.fromTo(selector, from, to, at);
    } else {
      tl.from(selector, from, at);
    }
  });
  return tl;
}
