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
                        url: button.url || "#",
                        popup: button.popup || false
                    }));
                }
            } catch (error) {
                console.error("Invalid JSON format in data-buttons attribute", error);
            }

            element.innerHTML = buttons
                .map(button => `<button type="button" class="${button.class}" data-url="${button.url}" data-popup="${button.popup}">${button.text}</button>`)
                .join("");
            
            // 버튼 클릭 이벤트 추가
            element.querySelectorAll("button").forEach(button => {
                button.addEventListener("click", () => {
                    const url = button.getAttribute("data-url");
                    const isPopup = button.getAttribute("data-popup") === "true"; 

                    if (isPopup && this.popupUrls.large) {
                        setupPopupListeners({ large: url });

                    } else if (url && url !== "#") {
                        window.location.href = url;

                    } else {
                        alert(`Clicked button: ${button.innerText}`);
                    }
                });
            });
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const urlList = {
        large: './popup/SB-USR-013.html',
    };
    new GridButtonArea(".grid-top-btn", urlList);
});