import "./styles/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { heroIntro, navbarReveal } from "./scripts/hero";
import { statsReveal } from "./scripts/stats";
import { journeyTimeline } from "./scripts/journey";
import { headerReveal } from "./scripts/header";
import { buildTimeline } from "./scripts/ourJourney";
import { buildMission, type MissionData } from "./scripts/aboutSection";
import { mountPartnersSection, renderPartnersHeader, renderPartnersItems, type Partner } from "./scripts/partners";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { mountPressSection, renderPressHeader, renderPressItems, type PressItem } from "./scripts/pressSection";

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
  const partnersData: Partner[] = [
    {
      img: "src/assets/images/customers.svg",
      alt: "Customer avatar illustration",
      name: "Customers",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam."
    },
    {
      img: "src/assets/images/restaurants.svg",
      alt: "Restaurant storefront illustration",
      name: "Restaurants",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam."
    },
    {
      img: "src/assets/images/riders.svg",
      alt: "Scooter rider illustration",
      name: "Riders",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam."
    }
  ];
  const headerPressNewsData:{label: string, titleHtml: string,subtitle: string} = {
    label: "Press",
    titleHtml: "Press news",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu egestas morbi sem vulputate etiam facilisis pellentesque ut quis."
  }
    
  
  headerReveal();
  navbarReveal();
  heroIntro();
  statsReveal();
  buildMission(missionData, "#mission-template", ".mission-container",);
  buildMission(aboutData, "#mission-template", ".mission-container","flex-lg-row-reverse");
  buildTimeline();
  journeyTimeline();
const section = mountPartnersSection("#partners-container");

renderPartnersHeader(
  {
    label: "Our partners",
    titleHtml: "We don’t walk alone, Deliver X<br>works thanks to our partners",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu egestas morbi sem vulputate etiam facilisis pellentesque ut quis.",
  },
  section!
);
renderPartnersItems(
  partnersData,
  section!
);


const pressHeader = {
  label: "Press & News",
  titleHtml: "See what the press says<br>about Deliver X",
  subtitle: "Latest updates and media coverage around Deliver X.",
};

const pressItems: PressItem[] = [
  {
    logo: "src/assets/images/company1.svg",
    logoAlt: "Company logo",
    source: "company",
    title: "Deliver X raises $26M in series B funding for growth",
    url: "#",
    date: "January 22, 2023",
  },
  {
    logo: "src/assets/images/company2.svg",
    logoAlt: "Company logo",
    source: "Company",
    title: "Deliver X claims to be the #1 player in the delivery industry",
    url: "#",
    date: "Nov 15, 2022",
  },
];

const pressSection = mountPressSection("#press-container");
renderPressHeader(pressHeader, pressSection!);
renderPressItems(pressItems, pressSection!);

});
