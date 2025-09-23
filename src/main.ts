import "./styles/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { heroIntro, navbarReveal } from "./scripts/hero";
import { statsReveal } from "./scripts/stats";

document.addEventListener("DOMContentLoaded", () => {
  navbarReveal();
  heroIntro();
  statsReveal();
});