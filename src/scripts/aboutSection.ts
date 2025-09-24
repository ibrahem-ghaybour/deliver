export type MissionData = {
  img: string;
  label: string;
  title: string;
  desc: string;
};

import { createScrollAnimation } from "./createScrollAnimation";

// عدّاد محلي لإنتاج معرفات فريدة
let __missionCounter = 0;

function toClassList(input?: string[] | string): string[] {
  if (!input) return [];
  return Array.isArray(input) ? input : input.split(/\s+/).filter(Boolean);
}


export function buildMission(
  props: MissionData | MissionData[],
  tplId: string,
  containerSelector: string,
  classNames?: string[] | string,
  idBase: string = "mission"
): void {
  const tpl = document.querySelector<HTMLTemplateElement>(tplId);
  const container = document.querySelector<HTMLElement>(containerSelector);
  if (!tpl || !container) return;

  if (Array.isArray(props)) {
    props.forEach((item) => {
      const id = `${idBase}-${++__missionCounter}`;
      buildMission(item, tplId, containerSelector, classNames, id);
    });
    return;
  }

  // عنصر مفرد
  const frag = tpl.content.cloneNode(true) as DocumentFragment;

  const root =
    (frag.firstElementChild as HTMLElement | null) ??
    frag.querySelector<HTMLElement>(".our-mission");

  if (!root) return;

  const rootId = /-\d+$/.test(idBase)
    ? idBase
    : `${idBase}-${++__missionCounter}`;

  root.id = rootId;

  const imgEl = root.querySelector<HTMLImageElement>(".mission-img");
  const labelEl = root.querySelector<HTMLElement>(".mission-label");
  const titleEl = root.querySelector<HTMLElement>(".mission-title");
  const descEl = root.querySelector<HTMLElement>(".mission-desc");
  const classes = root.querySelector<HTMLElement>(".classes");
  classes?.classList.add(...toClassList(classNames));

  if (imgEl) imgEl.src = props.img;
  if (labelEl) labelEl.textContent = props.label;
  if (titleEl) titleEl.innerHTML = props.title;
  if (descEl) descEl.textContent = props.desc;

  const extraClasses = toClassList(classNames);
  if (extraClasses.length) {
    const cardEl = root.querySelector<HTMLElement>(".containte-card") ?? root;
    cardEl.classList.add(...extraClasses);
  }

  container.appendChild(frag);

  createScrollAnimation(`#${rootId} img`, `#${rootId}`);
}
