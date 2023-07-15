export function buildBreadcrumbs(breadcrumbList) {
  if (!breadcrumbList) return;
  if (breadcrumbList.length < 1) return;
  const breadcrumb = document.getElementById("breadcrumb");

  let breadcrumbHtml = `
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
  `;

  breadcrumbList.forEach((element, index) => {
    if (index === breadcrumbList.length - 1) {
      breadcrumbHtml =
        breadcrumbHtml +
        `\n<li class="breadcrumb-item active" aria-current="page">${element.name}</li>`;
    } else {
      breadcrumbHtml =
        breadcrumbHtml +
        `\n<li class="breadcrumb-item"><a href="${element.link}">${element.name}</a></li>`;
    }
  });

  breadcrumbHtml =
    breadcrumbHtml +
    `
      </ol>
    </nav>
  `;
  breadcrumb.innerHTML = breadcrumbHtml;
}
