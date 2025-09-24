import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { makeSequence } from "./timeline";
gsap.registerPlugin(ScrollTrigger);

export function heroIntro(): gsap.core.Timeline | null {
  if (!document.querySelector(".hero-title")) return null;

  return makeSequence([
    { selector: ".hero-title", from: { y: 40, opacity: 0 } },
    { selector: ".hero-text", from: { y: 20, opacity: 0 }, at: ">-0.2" },
    {
      selector: ".hero-right .hero-visual",
      from: { scale: 0.9, opacity: 0 },
      at: ">-0.1",
    },
    {
      selector: ".hero-right .card-burger",
      from: { y: 20, opacity: 0 },
      at: ">-0.2",
    },
    {
      selector: ".hero-right .card-delivery",
      from: { y: 20, opacity: 0 },
      at: ">-0.15",
    },
  ]);
}

export function navbarReveal(): gsap.core.Timeline | null {
  if (!document.querySelector(".site-header")) return null;

  return makeSequence([
    { selector: ".site-header", from: { y: -40, opacity: 0 } },
    { selector: ".navbar", from: { y: -40, opacity: 0 } },
  ]);
}

// Scroll-scrubbed floating effect for hero cards
export function heroFloat(): void {
  const heroSection = document.querySelector<HTMLElement>(".hero-about");
  if (!heroSection) return;

  const floatOnce = (selector: string, amplitude: number) => {
    if (!document.querySelector(selector)) return;
    gsap.timeline({
      scrollTrigger: {
        trigger: heroSection,
        start: "top top",
        end: "bottom top",
        // Smoothly catch up to scroll over 3s -> visually ~3x slower reaction
        scrub: 3,
      },
      defaults: { ease: "none" },
    })
    .to(selector, { y: -amplitude })
    .to(selector, { y: amplitude })
    .to(selector, { y: -amplitude * 0.6 });
  };

  floatOnce(".hero-right .card-burger", 16);
  floatOnce(".hero-right .card-delivery", 12);
}