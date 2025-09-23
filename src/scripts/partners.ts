type Partner = {
  img: string;
  alt: string;
  name: string;
  desc: string;
};

const partnersData: Partner[] = [
  {
    img: "../assets/images/partners/customer.svg",
    alt: "Customer avatar illustration",
    name: "Customers",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam."
  },
  {
    img: "../assets/images/partners/restaurant.svg",
    alt: "Restaurant storefront illustration",
    name: "Restaurants",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam."
  },
  {
    img: "../assets/images/partners/riders.svg",
    alt: "Scooter rider illustration",
    name: "Riders",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam."
  }
];

export function buildPartners(): void {
  const sectionTpl = document.querySelector<HTMLTemplateElement>("#partners-template");
  const itemTpl = document.querySelector<HTMLTemplateElement>("#partner-item-template");
  const mount = document.querySelector<HTMLElement>("#partners-container");

  if (!sectionTpl || !itemTpl || !mount) return;

  // انسخ هيكل القسم
  const sectionFrag = sectionTpl.content.cloneNode(true) as DocumentFragment;

  // عناوين القسم (يمكنك تعديلها من هنا أو تمريرها من خارج)
  (sectionFrag.querySelector(".partners-label") as HTMLElement).textContent = "Our partners";
  (sectionFrag.querySelector(".partners-title") as HTMLElement).innerHTML =
    "We don’t walk alone, Deliver X<br>works thanks to our partners";
  (sectionFrag.querySelector(".partners-subtitle") as HTMLElement).textContent =
    "Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu egestas morbi sem vulputate etiam facilisis pellentesque ut quis.";

  const list = sectionFrag.querySelector(".partners-list") as HTMLElement;

  // ولّد العناصر
  partnersData.forEach(p => {
    const itemFrag = itemTpl.content.cloneNode(true) as DocumentFragment;
    (itemFrag.querySelector(".partner-img") as HTMLImageElement).src = p.img;
    (itemFrag.querySelector(".partner-img") as HTMLImageElement).alt = p.alt;
    (itemFrag.querySelector(".partner-name") as HTMLElement).textContent = p.name;
    (itemFrag.querySelector(".partner-desc") as HTMLElement).textContent = p.desc;
    list.appendChild(itemFrag);
  });

  mount.appendChild(sectionFrag);
}

