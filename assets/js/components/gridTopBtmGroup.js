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

            let buttons = [];

            try {
                if (buttonsData) {
                    const parsedButtons = JSON.parse(buttonsData);
                    buttons = parsedButtons.map(button => ({
                        text: button.text && button.text.trim() ? button.text : "기본 버튼",
                        class: button.class || "btn btn-outline btn-sm",
                        url: button.url || "#",
                        popup: button.popup || false,
                        popupSize: button.popupSize || "large"
                    }));
                }
            } catch (error) {
                console.error("Invalid JSON format in data-buttons attribute", error);
            }

            element.innerHTML = buttons
                .map(button => `<button type="button" class="${button.class}" data-url="${button.url}" data-popup="${button.popup}" data-popup-size="${button.popupSize}">${button.text}</button>`)
                .join("");

            element.querySelectorAll("button").forEach(button => {
                button.addEventListener("click", () => {
                    const url = button.getAttribute("data-url");
                    const isPopup = button.getAttribute("data-popup") === "true";
                    const popupSize = button.getAttribute("data-popup-size") || "large";

                    console.log(`Clicked: ${button.innerText}, URL: ${url}, Popup: ${isPopup}, Size: ${popupSize}`);

                    if (isPopup) {
                        this.openPopup(url, popupSize);
                    } else if (url && url !== "#") {
                        window.location.href = url;
                    } else {
                        alert(`Clicked button: ${button.innerText}`);
                    }
                });
            });
        });
    }

    openPopup(url, size) {
        const sizes = {
            small: { width: 600, height: 500 },
            medium: { width: 800, height: 500 },
            large: { width: 1440, height: 1080 }
        };

        let popupSize = sizes[size] || sizes.large;

        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        const windowLeft = window.screenX || window.screenLeft || 0;
        const windowTop = window.screenY || window.screenTop || 0;

        const left = windowLeft + (windowWidth - popupSize.width) / 2;
        const top = windowTop + (windowHeight - popupSize.height) / 2;

        const popupOptions = `width=${popupSize.width},height=${popupSize.height},top=${top},left=${left},scrollbars=yes,resizable=yes`;
        
        window.open(url, "_blank", popupOptions);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new GridButtonArea(".grid-top-btn");
});
