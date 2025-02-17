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

        // const isVisible = badge.getAttribute("data-badge-visible") === "true";

        // if (!isVisible) {
        //     return `
        //         <h1 class="h-tit">${title}</h1>
        //     `;
        //   } else if (isVisible) {
        //     return `
        //         <h1 class="h-tit">${title}</h1>
        //         <span class="badge-text">${badge}</span>
        //     `;
        //   }
          
        this.element.innerHTML = `
            <h1 class="h-tit">${title}</h1>
            <span class="badge-text">${badge}</span>
        `;
    }
}

export class TitleSection {
    constructor(selector) {
        this.elements = document.querySelectorAll(selector);
        if (this.elements.length) {
            this.init();
        }
    }

    init() {
        this.elements.forEach(element => {
            const title = element.getAttribute("data-title") || "기본정보";
            const headingTag = element.getAttribute("data-heading") || "h6";

            if (!["h3", "h6"].includes(headingTag)) {
                console.warn(`Invalid heading tag: ${headingTag}. Defaulting to <h6>.`);
            }

            element.innerHTML = `
                <${headingTag} class="sec-tit">${title}</${headingTag}>
            `;
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new PageTitle(".page-title-wrap");
    new TitleSection(".title-wrap");
});
