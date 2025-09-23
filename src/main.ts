import "./styles/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { heroIntro, navbarReveal } from "./scripts/hero";
import { statsReveal } from "./scripts/stats";
import { aboutReveal } from "./scripts/about";
import { journeyTimeline } from "./scripts/journey";
import { headerReveal } from "./scripts/header";
import { buildTimeline } from "./scripts/ourJourney";
import { buildMission, type MissionData } from "./scripts/aboutSection";
import { buildPartners } from "./scripts/partners";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
document.addEventListener("DOMContentLoaded", () => {
  // main.ts
  const missionData: MissionData = {
    img: "src/assets/images/22.jpeg",
    label: "Our mission",
    title: "Our mission is to disrupt <br> the food industry",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam...",
  };
  const aboutData: MissionData = {
    img: "src/assets/images/11.jpeg",
    label: "About us",
    title: "About us started <br> back in 2016",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsaquae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur..",
  };
  headerReveal();
  navbarReveal();
  heroIntro();
  statsReveal();
  buildMission(missionData, "#mission-template", "#mission-container");
  buildMission(aboutData, "#about-template", "#about-container");
  aboutReveal(".about-section img", ".about-section");
  aboutReveal(".our-mission img", ".our-mission");
  buildTimeline();
  journeyTimeline();
  buildPartners();
});
