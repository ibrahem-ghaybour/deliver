// src/anim/journey.ts
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

/* يحرك فقط كروت اليمين عند الوصول، الصفحة نفسها لا تتحرك غير العادي */
export function journeyTimeline(): gsap.core.Timeline {
  const items = gsap.utils.toArray<HTMLElement>(".timeline-card[data-anim='fade-up']");
  return gsap.timeline({
    scrollTrigger: {
      trigger: ".timeline",
      start: "top 75%",
      end: "bottom 20%",
        once: true,
      invalidateOnRefresh: true,            // مرة واحدة فقط
    },
    defaults: { duration: 0.6, ease: "power2.out" }
  })
  .to(items, {
    opacity: 1,
    y: 24,
    stagger: 0.18
  });
}
