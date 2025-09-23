import "./styles/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { heroIntro, navbarReveal } from "./scripts/hero";
import { statsReveal } from "./scripts/stats";
import { aboutReveal } from "./scripts/about";
import { journeyTimeline } from "./scripts/journey";
import { headerReveal } from "./scripts/header";
document.addEventListener("DOMContentLoaded", () => {
  // main.ts

  headerReveal();
  navbarReveal();
  heroIntro();
  statsReveal();
  aboutReveal('.about-section img','.about-section');
  aboutReveal('.our-mission img','.our-mission');
  journeyTimeline();

});