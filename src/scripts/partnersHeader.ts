export type PartnersHeader = {
  label: string;
  titleHtml: string;
  subtitle: string;
};

export function buildPartnersHeaderFragment(
  headerData: PartnersHeader,
  headerTplId: string = "#partners-header-template"
): DocumentFragment | null {
  const headerTpl = document.querySelector<HTMLTemplateElement>(headerTplId);
  if (!headerTpl) return null;

  const frag = headerTpl.content.cloneNode(true) as DocumentFragment;
  (frag.querySelector(".partners-label") as HTMLElement).textContent = headerData.label;
  (frag.querySelector(".partners-title") as HTMLElement).innerHTML = headerData.titleHtml;
  (frag.querySelector(".partners-subtitle") as HTMLElement).textContent = headerData.subtitle;
  return frag;
}
