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
      return `<li class="breadcrumb-item"><a href="${item.url}" data-name="${item.name}">${item.name}</a></li>`;
    } else {
      return `<li class="breadcrumb-item">${item.name}</li>`;
    }
  }).join("");

  breadcrumb.innerHTML = `
    <ol class="breadcrumb">
      ${breadcrumbList}
    </ol>
  `;

  // 클릭 이벤트 추가
  breadcrumb.addEventListener("click", (event) => {
    const link = event.target.closest("a");
    if (link) {
      event.preventDefault();
      console.log(`Breadcrumb 클릭: ${link.dataset.name}, URL: ${link.href}`);

      // (예: 페이지 이동)
      // window.location.href = link.href;
    }
  });
});
