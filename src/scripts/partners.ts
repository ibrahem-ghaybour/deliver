export type Partner = {
  img: string;
  alt: string;
  name: string;
  desc: string;
};

export type PartnersHeader = {
  label: string;
  titleHtml: string; // يسمح بإدراج <br>
  subtitle: string;
};
import { createScrollAnimation } from "./createScrollAnimation";
// helper صغير
function qs<T extends Element>(root: ParentNode, sel: string): T {
  const el = root.querySelector(sel) as T | null;
  if (!el) throw new Error(`Selector not found: ${sel}`);
  return el;
}

/** 1) إبني القسم الفارغ وألحقه في الـ mount. تعود بجذر القسم */
export function mountPartnersSection(
  mountSelector: string = "#partners-container",
  sectionTplId: string = "#partners-section-template"
): HTMLElement | null {
  const sectionTpl = document.querySelector<HTMLTemplateElement>(sectionTplId);
  const mount = document.querySelector<HTMLElement>(mountSelector);
  if (!sectionTpl || !mount) return null;

  const sectionFrag = sectionTpl.content.cloneNode(true) as DocumentFragment;
  mount.appendChild(sectionFrag);

  // أرجع أحدث قسم تم تركيبه داخل الـ mount
  const section = mount.querySelector<HTMLElement>(".partners-section");
  return section ?? null;
}

/** 2) ركّب الهيدر داخل القسم */
export function renderPartnersHeader(
  headerData: PartnersHeader,
  sectionRootOrSelector: HTMLElement | string = ".partners-section",
  headerTplId: string = "#partners-header-template"
): void {
  const sectionRoot =
    typeof sectionRootOrSelector === "string"
      ? document.querySelector<HTMLElement>(sectionRootOrSelector)
      : sectionRootOrSelector;

  const headerTpl = document.querySelector<HTMLTemplateElement>(headerTplId);
  if (!sectionRoot || !headerTpl) return;

  const headerMount = qs<HTMLElement>(sectionRoot, ".partners-header");
  // امسح محتوى سابق لو وُجد
  headerMount.innerHTML = "";

  const headerFrag = headerTpl.content.cloneNode(true) as DocumentFragment;
  qs<HTMLElement>(headerFrag, ".partners-label").textContent = headerData.label;
  qs<HTMLElement>(headerFrag, ".partners-title").innerHTML =
    headerData.titleHtml;
  qs<HTMLElement>(headerFrag, ".partners-subtitle").textContent =
    headerData.subtitle;

  headerMount.appendChild(headerFrag);
}

/** أضف عنصر شريك واحد */
export function appendPartnerItem(
  partner: Partner,
  sectionRootOrSelector: HTMLElement | string = ".partners-section",
  itemTplId: string = "#partner-item-template"
): void {
  const sectionRoot =
    typeof sectionRootOrSelector === "string"
      ? document.querySelector<HTMLElement>(sectionRootOrSelector)
      : sectionRootOrSelector;

  const itemTpl = document.querySelector<HTMLTemplateElement>(itemTplId);
  if (!sectionRoot || !itemTpl) return;

  const list = qs<HTMLElement>(sectionRoot, ".partners-list");
  const itemFrag = itemTpl.content.cloneNode(true) as DocumentFragment;

  const img = qs<HTMLImageElement>(itemFrag, ".partner-img");
  img.src = partner.img;
  img.alt = partner.alt;

  qs<HTMLElement>(itemFrag, ".partner-name").textContent = partner.name;
  qs<HTMLElement>(itemFrag, ".partner-desc").textContent = partner.desc;

  list.appendChild(itemFrag);
}

export function renderPartnersItems(
  partnersData: Partner[],
  sectionRootOrSelector: HTMLElement | string = ".partners-section",
  itemTplId: string = "#partner-item-template"
): void {
  partnersData.forEach((p) =>
    appendPartnerItem(p, sectionRootOrSelector, itemTplId)
  );

  const sectionRoot =
    typeof sectionRootOrSelector === "string"
      ? document.querySelector<HTMLElement>(sectionRootOrSelector)
      : sectionRootOrSelector;

  if (!sectionRoot) return;

  createScrollAnimation(".partners-list .partner-item", sectionRoot, {
    y: 50,
    opacity: 0,
  });
}
