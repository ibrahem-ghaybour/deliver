// pressSection.ts
import { buildPartnersHeaderFragment, type PartnersHeader } from "./partnersHeader";
import { createScrollAnimation } from "./createScrollAnimation";

export type PressItem = {
  logo: string;      // مسار لوجو صغير
  logoAlt: string;   // Alt للّوجو
  source: string;    // اسم الجهة (Company, TechCrunch, ...)
  title: string;     // عنوان الخبر
  url: string;       // رابط "Read more"
  date: string;      // تاريخ بصيغة نصية ظاهرة (Nov 15, 2022)
};

// helper بسيط
function qs<T extends Element>(root: ParentNode, sel: string): T {
  const el = root.querySelector(sel) as T | null;
  if (!el) throw new Error(`Selector not found: ${sel}`);
  return el;
}

/** يبني قسم الـ Press فارغًا ويُلحقه بالمكان المحدّد */
export function mountPressSection(
  mountSelector: string = "#press-container",
  sectionTplId: string = "#press-section-template"
): HTMLElement | null {
  const tpl = document.querySelector<HTMLTemplateElement>(sectionTplId);
  const mount = document.querySelector<HTMLElement>(mountSelector);
  if (!tpl || !mount) return null;

  const frag = tpl.content.cloneNode(true) as DocumentFragment;
  mount.appendChild(frag);

  return mount.querySelector<HTMLElement>(".press-section");
}

/** يركّب الهيدر داخل قسم الـ Press باستخدام تمبليت الهيدر المفصول */
export function renderPressHeader(
  headerData: PartnersHeader, // نعيد استخدام نفس النوع
  sectionRootOrSelector: HTMLElement | string = ".press-section",
  headerTplId: string = "#partners-header-template",
  { animate = true }: { animate?: boolean } = {}
): void {
  const sectionRoot =
    typeof sectionRootOrSelector === "string"
      ? document.querySelector<HTMLElement>(sectionRootOrSelector)
      : sectionRootOrSelector;

  if (!sectionRoot) return;

  const headerMount = qs<HTMLElement>(sectionRoot, ".partners-header");
  headerMount.innerHTML = "";

  const headerFrag = buildPartnersHeaderFragment(headerData, headerTplId);
  if (!headerFrag) return;

  headerMount.appendChild(headerFrag);

  // أنيميشن خفيفة للهيدر
  if (animate) {
    const id = ensureId(headerMount);
    createScrollAnimation(
      `#${id} .partners-label, #${id} .partners-title, #${id} .partners-subtitle`,
      sectionRoot,
      { y: 30, opacity: 0 }
    );
  }
}

/** يضيف كرت خبر واحد */
export function appendPressItem(
  item: PressItem,
  sectionRootOrSelector: HTMLElement | string = ".press-section",
  itemTplId: string = "#press-item-template"
): void {
  const sectionRoot =
    typeof sectionRootOrSelector === "string"
      ? document.querySelector<HTMLElement>(sectionRootOrSelector)
      : sectionRootOrSelector;

  const tpl = document.querySelector<HTMLTemplateElement>(itemTplId);
  if (!sectionRoot || !tpl) return;

  const list = qs<HTMLElement>(sectionRoot, ".press-list");
  const frag = tpl.content.cloneNode(true) as DocumentFragment;

  const logo = qs<HTMLImageElement>(frag, ".press-logo");
  const source = qs<HTMLElement>(frag, ".press-source");
  const title = qs<HTMLElement>(frag, ".press-title");
  const link = qs<HTMLAnchorElement>(frag, ".press-link");
  const date = qs<HTMLTimeElement>(frag, ".press-date");

  logo.src = item.logo;
  logo.alt = item.logoAlt;
  source.textContent = item.source;
  title.textContent = item.title;
  link.href = item.url;
  date.textContent = item.date;

  list.appendChild(frag);
}

/** يضيف دفعة عناصر + أنيميشن بالتسلسل من الأسفل للأعلى */
export function renderPressItems(
  items: PressItem[],
  sectionRootOrSelector: HTMLElement | string = ".press-section",
  itemTplId: string = "#press-item-template"
): void {
  items.forEach(i => appendPressItem(i, sectionRootOrSelector, itemTplId));

  const sectionRoot =
    typeof sectionRootOrSelector === "string"
      ? document.querySelector<HTMLElement>(sectionRootOrSelector)
      : sectionRootOrSelector;

  if (!sectionRoot) return;

  createScrollAnimation(".press-list .press-card", sectionRoot, {
    y: 40,
    opacity: 0,
  });
}

/** يضمن وجود id فريد على عنصر */
function ensureId(el: HTMLElement): string {
  if (!el.id) el.id = `press-${Math.random().toString(36).slice(2, 8)}`;
  return el.id;
}
