class GridButtonArea {
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
                { text: "", class: "btn btn-outline btn-sm" },
                { text: "", class: "btn btn-outline btn-sm" }
            ];

            try {
                if (buttonsData) {
                    const parsedButtons = JSON.parse(buttonsData);
                    buttons = parsedButtons.map(button => ({
                        text: button.text && button.text.trim() ? button.text : "기본 버튼",
                        class: button.class || "btn btn-outline btn-sm",
                        url: button.url || "#"
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
    new GridButtonArea(".grid-top-btn");

    // 버튼 클릭 이벤트 처리
    document.querySelectorAll(".grid-top-btn button").forEach(button => {
        button.addEventListener("click", function () {
            const url = this.getAttribute("data-url");
            
            if (url && url !== "#") {
                window.location.href = url;
            } else {
                alert(`Clicked button: ${this.innerText}`);
            }
        });
    });
});
