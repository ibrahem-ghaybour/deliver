import "./styles/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { heroIntro, navbarReveal, heroFloat } from "./scripts/hero";
import { statsReveal } from "./scripts/stats";
import { journeyTimeline } from "./scripts/journey";
import { headerReveal } from "./scripts/header";
import { buildTimeline } from "./scripts/ourJourney";
import { buildMission, type MissionData } from "./scripts/aboutSection";
import {
  mountPartnersSection,
  renderPartnersHeader,
  renderPartnersItems,
  type Partner,
} from "./scripts/partners";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { buildPress, type Press_Item } from "./scripts/pressCard";
import { createScrollAnimation } from "./scripts/createScrollAnimation";
import { mountDownloadCTA } from "./scripts/downloadCTA";
import { ASSETS } from "./assets/urls";

gsap.registerPlugin(ScrollTrigger);
document.addEventListener("DOMContentLoaded", () => {
  // main.ts
  const missionData: MissionData = {
    img: ASSETS.mission.img22,
    label: "Our mission",
    title: "Our mission is to disrupt <br> the food industry",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam...",
  };
  const aboutData: MissionData = {
    img: ASSETS.mission.img11,
    label: "About us",
    title: "Our company started back in 2016",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.",
  };
  const partnersData: Partner[] = [
    {
      img: ASSETS.partners.customers,
      alt: "Customer avatar illustration",
      name: "Customers",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam.",
    },
    {
      img: ASSETS.partners.restaurants,
      alt: "Restaurant storefront illustration",
      name: "Restaurants",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam.",
    },
    {
      img: ASSETS.partners.riders,
      alt: "Scooter rider illustration",
      name: "Riders",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam.",
    },
  ];
  const headerPressNewsData: {
    label: string;
    titleHtml: string;
    subtitle: string;
  } = {
    label: "Press & News",
    titleHtml: "See what the press says<br>about Deliver X",
    subtitle: "",
  };

  headerReveal();
  navbarReveal();
  heroIntro();
  // Ensure hero images use Vite-resolved URLs
  const heroImage = document.querySelector<HTMLImageElement>(".hero-visual .image");
  if (heroImage) heroImage.src = ASSETS.heroCourier;
  const burgerImg = document.querySelector<HTMLImageElement>(".hero-right .card-burger .thumb");
  if (burgerImg) burgerImg.src = ASSETS.heroBurger;
  const deliveryImg = document.querySelector<HTMLImageElement>(".hero-right .card-delivery img");
  if (deliveryImg) deliveryImg.src = ASSETS.heroDeliveryCard;

  // Header logo
  const headerLogo = document.querySelector<HTMLImageElement>(".navbar-brand img");
  if (headerLogo) headerLogo.src = ASSETS.logo;
  heroFloat();
  statsReveal();

  buildMission(aboutData, "#mission-template", ".mission-container",'flex-lg-row-reverse');

  buildMission(missionData, "#mission-template", ".mission-container");

  buildTimeline();
  journeyTimeline();
  const section = mountPartnersSection("#partners-container");

  renderPartnersHeader(
    {
      label: "Our partners",
      titleHtml:
        "We don’t walk alone, Deliver X<br>works thanks to our partners",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu egestas morbi sem vulputate etiam facilisis pellentesque ut quis.",
    },
    section!
  );
  renderPartnersItems(partnersData, section!);

  // Build Press section using pressCard.ts (matches index.html templates)
  const pressItemsForCard: Press_Item[] = [
    {
      icon: ASSETS.press.icon1,
      source: "Company",
      headline: "Deliver X raises $26M in series B funding for growth",
      date: "January 22, 2023",
      url: "#",
    },
    {
      icon: ASSETS.press.icon2,
      source: "Company",
      headline: "Deliver X claims to be the #1 player in the delivery industry",
      date: "Nov 15, 2022",
      url: "#",
    },
    {
      icon: ASSETS.press.icon3,
      source: "Company",
      headline: "Introducing curbside ordering with Deliver X",
      date: "Sep 18, 2022",
      url: "#",
    },
    {
      icon: ASSETS.press.icon4,
      source: "Company",
      headline: "Introducing the Square POS integration with Deliver X",
      date: "Mar 12, 2022",
      url: "#",
    },
  ];

  buildPress(pressItemsForCard, {
    label: headerPressNewsData.label,
    title: headerPressNewsData.titleHtml,
    subtitle: headerPressNewsData.subtitle,
  });

  // Mount Download CTA
  mountDownloadCTA("#download-container", {
    logoSrc: ASSETS.logo,
    title: "Deliver X",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut.",
    iosUrl: "#",
    androidUrl: "#",
  });

  // Animate the download card
  createScrollAnimation(
    ".download-card",
    "#download-container",
    { y: 20, opacity: 0 },
    { start: "top 60%" }
  );

  // Footer city icons (ensure Vite URLs after build)
  const cityIcons: Record<string, string> = {
    "San Francisco": ASSETS.footer.f1,
    "New York": ASSETS.footer.f2,
    "Los Angeles": ASSETS.footer.f3,
    "Seattle": ASSETS.footer.f4,
  };
  document.querySelectorAll<HTMLImageElement>(".available-list .city-icon img").forEach((img) => {
    const alt = img.getAttribute("alt") || "";
    for (const key in cityIcons) {
      if (alt.includes(key)) {
        img.src = cityIcons[key];
      }
    }
  });
  // Responsive scroll animations for Press cards
  ScrollTrigger.matchMedia({
    "(min-width: 992px)": () => {
      createScrollAnimation(
        ".press-list > *",
        "#press-container",
        { y: 24, opacity: 0 },
        { start: "top 20%", defaults: { stagger: 0.15 } }
      );
    },
    "(max-width: 991px)": () => {
      createScrollAnimation(
        ".press-list > *",
        "#press-container",
        { y: 12, opacity: 0 },
        { start: "top 20%", defaults: { stagger: 0.08 } }
      );
    },
  });
});
