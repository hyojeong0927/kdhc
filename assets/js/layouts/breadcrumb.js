document.addEventListener("DOMContentLoaded", () => {
  const breadcrumb = document.querySelector("nav.breadcrumb-wrap");

  if (!breadcrumb) return;

  const isVisible = breadcrumb.getAttribute("data-visible") === "true";
  if (!isVisible) {
    breadcrumb.style.display = "none";
    return;
  }
  
  const breadcrumbData = JSON.parse(breadcrumb.getAttribute("data-breadcrumb") || "[]");

  const breadcrumbList = breadcrumbData.map(item => {
    if (item.active) {
      return `<li class="breadcrumb-item active" aria-current="page">${item.name}</li>`;
    } else if (item.url) {
      return `<li class="breadcrumb-item"><a href="${item.url}">${item.name}</a></li>`;
    } else {
      return `<li class="breadcrumb-item">${item.name}</li>`;
    }
  }).join("");

  breadcrumb.innerHTML = `
    <ol class="breadcrumb">
      ${breadcrumbList}
    </ol>
  `;
});
