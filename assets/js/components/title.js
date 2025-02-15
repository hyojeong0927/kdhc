export default class PageTitle {
    constructor(selector) {
        this.element = document.querySelector(selector);
        if (this.element) {
            this.init();
        }
    }

    init() {
        const title = this.element.getAttribute("data-title") || "기본 제목";
        const badge = this.element.getAttribute("data-badge") || "";

        this.element.innerHTML = `
            <h1 class="h-tit">${title}</h1>
            <span class="badge-text">${badge}</span>
        `;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new PageTitle(".page-title-wrap");
});