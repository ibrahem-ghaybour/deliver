import "../styles/_timeline.scss";
const data = [
  {
    year: "2018",
    title: "Raised Series A at $50M valuation",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam.",
  },
  {
    year: "2019",
    title: "Raised Series B at $600M valuation",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam.",
  },
  {
    year: "2020",
    title: "Expanded globally",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam.",
  },
  {
    year: "2019",
    title: "Raised Series B at $600M valuation",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam.",
  },
  {
    year: "2020",
    title: "Expanded globally",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam.",
  },
];

export function buildTimeline(): void {
  const tpl = document.querySelector<HTMLTemplateElement>("#timeline-template");
  const container = document.querySelector<HTMLElement>("#timeline-container");

  if (!tpl) {
    console.error("Missing #timeline-template_");
    return;
  }
  if (!container) {
    console.error("Missing #timeline-container_");
    return;
  }

  data.forEach((item) => {
    const frag = tpl.content.cloneNode(true) as DocumentFragment;

    (frag.querySelector(".year") as HTMLElement).textContent = item.year;
    (frag.querySelector(".title") as HTMLElement).textContent = item.title;
    (frag.querySelector(".desc") as HTMLElement).textContent = item.desc;

    container.appendChild(frag);
  });
}
