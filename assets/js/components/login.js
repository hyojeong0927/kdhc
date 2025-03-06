document.addEventListener("DOMContentLoaded", function () {
    function handleFocus(label) {
        label.classList.add("hidden-label");
    }

    function handleBlur(input, label) {
        if (input.value.trim() === "") {
            label.classList.remove("hidden-label");
        }
    }

    // 모든 input 요소에 대해 자동으로 이벤트 등록
    document.querySelectorAll("input[data-label]").forEach((input) => {
        const label = document.querySelector(`.${input.dataset.label}`);
        if (label) {
            input.addEventListener("focus", () => handleFocus(label));
            input.addEventListener("blur", () => handleBlur(input, label));
        }
    });
});
