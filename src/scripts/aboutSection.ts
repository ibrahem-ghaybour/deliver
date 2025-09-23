export type MissionData = {
  img: string;
  label: string;
  title: string;
  desc: string;
};

export function buildMission(props: MissionData, tplId: string, containerId: string): void {
  const tpl = document.querySelector<HTMLTemplateElement>(tplId);
  const container = document.querySelector<HTMLElement>(containerId);
  if (!tpl || !container) return;

  const frag = tpl.content.cloneNode(true) as DocumentFragment;

  (frag.querySelector(".mission-img") as HTMLImageElement).src =
    props.img;
  (frag.querySelector(".mission-label") as HTMLElement).textContent =
    props.label;
  (frag.querySelector(".mission-title") as HTMLElement).innerHTML =
    props.title;
  (frag.querySelector(".mission-desc") as HTMLElement).textContent =
    props.desc;

  container.appendChild(frag);
}
