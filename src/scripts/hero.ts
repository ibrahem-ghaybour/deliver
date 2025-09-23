import { makeSequence } from "./timeline";

export function heroIntro(): gsap.core.Timeline | null {
  if (!document.querySelector(".hero-title")) return null;

  return makeSequence([
    { selector: ".hero-title", from: { y: 40, opacity: 0 } },
    { selector: ".hero-text", from: { y: 20, opacity: 0 }, at: ">-0.2" },
    {
      selector: ".hero-right .hero-visual",
      from: { scale: 0.95, opacity: 0 },
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