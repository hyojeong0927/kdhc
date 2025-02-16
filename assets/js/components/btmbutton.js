export class BottomButtonArea {
    constructor(selector) {
        this.elements = document.querySelectorAll(selector);
        if (this.elements.length) {
            this.init();
        }
    }

    init() {
        this.elements.forEach(element => {
            const buttonsData = element.getAttribute("data-buttons");

            let buttons = [
                { text: "", class: "btn btn-secondary btn-md" },
                { text: "", class: "btn btn-secondary btn-md" }
            ];

            try {
                if (buttonsData) {
                    const parsedButtons = JSON.parse(buttonsData);
                    buttons = parsedButtons.map(button => ({
                        text: button.text && button.text.trim() ? button.text : "기본 버튼",
                        class: button.class || "btn btn-secondary btn-md"
                    }));
                } else {
                  
                    buttons = buttons.map(button => ({
                        ...button,
                        text: "기본 버튼"
                    }));
                }
            } catch (error) {
                console.error("Invalid JSON format in data-buttons attribute", error);
            }

            element.innerHTML = buttons
                .map(button => `<button type="button" class="${button.class}">${button.text}</button>`)
                .join("");
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new BottomButtonArea(".bottom-btn-area");
});
