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
    desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut.",
    iosUrl = "#",
    androidUrl = "#",
  } = data;

  const section = document.createElement("section");
  section.className = "download-cta py-5";

  section.innerHTML = `
    <div class="container border-top">
      <div class="download-card rounded-4 bg-white border-0  p-4 p-md-5">
        <div class="row align-items-center g-4">
          <div class="col-12 col-lg-6">
            <div class="d-flex align-items-start gap-3">
              <div>
                 <img src="${logoSrc}" alt="Logo" class="download-logo pb-4" />
                <p class="m-0 text-secondary download-desc">${desc}</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-6 d-flex flex-wrap gap-3 justify-content-lg-end">
            <button href="${iosUrl}" class=" btn my-btn" role="button">Download for iOS</button>
            <button href="${androidUrl}" class="btn my-btn" role="button">Download for Android</button>
          </div>
        </div>
      </div>
    </div>
  `;

  mount.replaceChildren(section);
}
