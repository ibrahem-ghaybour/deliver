export type DownloadCTAData = {
  logoSrc?: string;
  title?: string;
  desc?: string;
  iosUrl?: string;
  androidUrl?: string;
};

export function mountDownloadCTA(
  mountSelector: string = "#download-container",
  data: DownloadCTAData = {}
): void {
  const mount = document.querySelector<HTMLElement>(mountSelector);
  if (!mount) return;

  const {
    logoSrc = "src/assets/images/customers.svg",
    title = "Deliver X",
    desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut.",
    iosUrl = "#",
    androidUrl = "#",
  } = data;

  const section = document.createElement("section");
  section.className = "download-cta py-5";

  section.innerHTML = `
    <div class="container">
      <div class="download-card rounded-4 bg-white shadow-soft p-4 p-md-5">
        <div class="row align-items-center g-4">
          <div class="col-12 col-lg-6">
            <div class="d-flex align-items-start gap-3">
              <img src="${logoSrc}" alt="Logo" class="download-logo" />
              <div>
                <h5 class="mb-2 download-title">${title}</h5>
                <p class="m-0 text-secondary download-desc">${desc}</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-6 d-flex flex-wrap gap-3 justify-content-lg-end">
            <a href="${iosUrl}" class="store-btn" role="button">Download for iOS</a>
            <a href="${androidUrl}" class="store-btn" role="button">Download for Android</a>
          </div>
        </div>
      </div>
    </div>
  `;

  mount.replaceChildren(section);
}
