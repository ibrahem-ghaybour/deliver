import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export type Step = {
  selector: string | Element;
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  at?: gsap.Position;
};

export interface ScrollOptions {
  defaults?: gsap.TweenVars;
  scroll?: {
    trigger: string | Element;
    start?: string;
    end?: string;
    once?: boolean;
    toggleActions?: string;
    markers?: boolean;
  };
}

export function makeScrollSequence(
  steps: Step[] = [],
  {
    defaults = { duration: 0.6, ease: "power2.out" },
    scroll = {} as any,
  }: ScrollOptions = {}
): gsap.core.Timeline {
  const tl = gsap.timeline({
    defaults,
    scrollTrigger: scroll.trigger
      ? {
          trigger: scroll.trigger,
          start: scroll.start || "top 80%",
          // Replay when scrolling down and up by default
          // Format: onEnter onLeave onEnterBack onLeaveBack
          toggleActions: scroll.toggleActions || "play none play none",
          // Not one-time by default; can be overridden per call
          once: scroll.once ?? false,
          end: scroll.end,
          markers: scroll.markers || false,
        }
      : undefined,
  });

  steps.forEach(({ selector, from = {}, to, at }) => {
    if (to) {
      tl.fromTo(selector, from, to, at);
    } else {
      tl.from(selector, from, at);
    }
  });

  return tl;
}
