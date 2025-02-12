document.addEventListener("DOMContentLoaded", function () {
    const singleSelectBox = document.getElementById("singleSelectBox");
    const singleOptions = document.getElementById("singleOptions");
    const placeholder = singleSelectBox.querySelector(".placeholder");

    if (singleSelectBox && singleOptions && placeholder) {
        singleSelectBox.addEventListener("click", (event) => {
            toggleDropdown(singleOptions, singleSelectBox);
            event.stopPropagation();
        });

        // 옵션 클릭 시 값 변경
        singleOptions.querySelectorAll("li").forEach(option => {
            option.addEventListener("click", () => {
                placeholder.textContent = option.textContent;
                singleSelectBox.setAttribute("data-selected", option.getAttribute("data-value"));
                placeholder.classList.remove("placeholder-active"); // 스타일 제거
                closeDropdown(singleOptions, singleSelectBox);
            });
        });

        // 초기 상태 유지 (선택되지 않았을 때 placeholder 스타일 적용)
        if (!singleSelectBox.getAttribute("data-selected")) {
            placeholder.classList.add("placeholder-active");
        }
    }

    function toggleDropdown(optionsContainer, selectBox) {
        const isVisible = optionsContainer.style.display === "block";
        closeAllDropdowns();
        optionsContainer.style.display = isVisible ? "none" : "block";
        selectBox.setAttribute("aria-expanded", !isVisible);
    }

    function closeDropdown(optionsContainer, selectBox) {
        optionsContainer.style.display = "none";
        selectBox.setAttribute("aria-expanded", "false");
    }

    function closeAllDropdowns() {
        document.querySelectorAll(".options").forEach(container => container.style.display = "none");
        document.querySelectorAll(".form-select").forEach(box => box.setAttribute("aria-expanded", "false"));
    }

    document.addEventListener("click", closeAllDropdowns);
});
