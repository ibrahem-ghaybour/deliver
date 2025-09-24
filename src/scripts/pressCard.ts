import { ASSETS } from "../assets/urls";
export type Press_Item = {
  icon: string;
  source: string;
  headline: string;
  date: string;
  url: string;
};

export type PressHeader = {
  label?: string;     // الافتراضي: "Press & News"
  title?: string;     // الافتراضي: "See what the press says<br>about Deliver X"
  subtitle?: string;  // الافتراضي: نص تجريبي قصير
};

const defaultItems: Press_Item[] = [
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
];

export function buildPress(
  items: Press_Item[] = defaultItems,
  header: PressHeader = {}
): void {
  const sectionTpl = document.querySelector<HTMLTemplateElement>("#press-section-template");
  const itemTpl    = document.querySelector<HTMLTemplateElement>("#press-item-template");
  const mount      = document.querySelector<HTMLElement>("#press-container");

  if (!sectionTpl) { console.error("Missing #press-section-template"); return; }
  if (!itemTpl)    { console.error("Missing #press-item-template");    return; }
  if (!mount)      { console.error("Missing #press-container");        return; }

  // ابنِ القسم من القالب
  const frag = sectionTpl.content.cloneNode(true) as DocumentFragment;

  // عيّن نصوص الهيدر (مطابقة تمامًا لكلاسات الHTML)
  const labelEl = frag.querySelector<HTMLElement>(".press-label");
  const titleEl = frag.querySelector<HTMLElement>(".press-title");
  const subEl   = frag.querySelector<HTMLElement>(".press-subtitle");

  if (labelEl) labelEl.textContent = header.label ?? "Press & News";
  if (titleEl) titleEl.innerHTML   = header.title ?? "See what the press says<br>about Deliver X";
  if (subEl)   subEl.textContent   =
    header.subtitle ??
    "Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu egestas morbi sem vulputate etiam facilisis pellentesque ut quis.";

  const list = frag.querySelector<HTMLElement>(".press-list");
  if (!list) { console.error("Missing .press-list inside section template"); return; }

  // ابنِ العناصر من القالب
  items.forEach((p) => {
    const itemFrag = itemTpl.content.cloneNode(true) as DocumentFragment;

    const iconEl   = itemFrag.querySelector<HTMLImageElement>(".press-icon");
    // const sourceEl = itemFrag.querySelector<HTMLElement>(".press-source");
    const headEl   = itemFrag.querySelector<HTMLElement>(".press-headline");
    const dateEl   = itemFrag.querySelector<HTMLElement>(".press-date");
    const linkEl   = itemFrag.querySelector<HTMLAnchorElement>(".press-link");
    const arrowEl  = itemFrag.querySelector<HTMLImageElement>(".rotate-45");

    if (iconEl)   { iconEl.src = p.icon; iconEl.alt = p.source; }
    // if (sourceEl) sourceEl.textContent = p.source;
    if (headEl)   headEl.textContent   = p.headline;
    if (dateEl)   dateEl.textContent   = p.date;
    if (linkEl)   linkEl.href          = p.url;
    if (arrowEl)  arrowEl.src          = ASSETS.press.row;

    list.appendChild(itemFrag);
  });

  // استبدال المحتوى (تجنّب التكرار لو استدعيت الدالة ثانية)
  mount.replaceChildren(frag);
}
