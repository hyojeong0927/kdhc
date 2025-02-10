document.addEventListener("DOMContentLoaded", function () {
    
    // 다중 선택 콤보박스 (Multi-Select Dropdown)
    const multiSelectBox = document.getElementById("multiSelectBox");
    const multiOptions = document.getElementById("multiOptions");
    const multiCheckboxes = document.querySelectorAll("input[name='multi-options']");
    const selectAllCheckbox = document.getElementById("selectAll");

    if (multiSelectBox && multiOptions && selectAllCheckbox) {
        multiSelectBox.addEventListener("click", (event) => {
            toggleDropdown(multiOptions, multiSelectBox);
            event.stopPropagation();
        });

        selectAllCheckbox.addEventListener("change", () => {
            multiCheckboxes.forEach(checkbox => checkbox.checked = selectAllCheckbox.checked);
            updateMultiDropdown();
        });

        multiCheckboxes.forEach(checkbox => {
            checkbox.addEventListener("change", updateMultiDropdown);
        });

        function updateMultiDropdown() {
            let selected = Array.from(multiCheckboxes)
                .filter(c => c.checked)
                .map(c => c.value);

            let displayText = selected.length > 0 ? selected.join(", ") : "Select options";

            // Length limit: truncate after 20 characters
            multiSelectBox.textContent = displayText.length > 20 ? displayText.substring(0, 20) + "..." : displayText;
            
            // Show the full selected text on hover
            multiSelectBox.setAttribute("title", displayText);
            
            // Update "Select All" checkbox state
            selectAllCheckbox.checked = selected.length === multiCheckboxes.length;
        }
    }

    // 단일 선택 콤보박스 (Single Select Dropdown)
    const singleSelectBox = document.getElementById("singleSelectBox");
    const singleOptions = document.getElementById("singleOptions");

    if (singleSelectBox && singleOptions) {
        singleSelectBox.addEventListener("click", (event) => {
            toggleDropdown(singleOptions, singleSelectBox);
            event.stopPropagation();
        });

        singleOptions.querySelectorAll("li").forEach(option => {
            option.addEventListener("click", () => {
                singleSelectBox.textContent = option.textContent;
                closeDropdown(singleOptions, singleSelectBox);
            });
        });
    }

    // 검색 전용 콤보박스 (Search Dropdown)
    const searchSelectBox = document.getElementById("searchSelectBox");
    const searchOptions = document.getElementById("searchOptions");
    const searchInput = document.getElementById("searchInput");

    if (searchSelectBox && searchOptions && searchInput) {
        searchSelectBox.addEventListener("click", (event) => {
            toggleDropdown(searchOptions, searchSelectBox);
            event.stopPropagation();
        });

        searchInput.addEventListener("click", (event) => {
            event.stopPropagation();
        });

        searchOptions.querySelectorAll("div").forEach(option => {
            option.addEventListener("click", () => {
                searchSelectBox.textContent = option.textContent;
                closeDropdown(searchOptions, searchSelectBox);
            });
        });

        searchInput.addEventListener("input", () => filterOptions(searchInput, searchOptions));

        // 검색 필터링 (Search Filtering)
        function filterOptions(input, container) {
            let filter = input.value.toLowerCase();
            let items = container.querySelectorAll("div");

            items.forEach(item => {
                let text = item.textContent || item.innerText;
                item.style.display = text.toLowerCase().includes(filter) ? "block" : "none";
            });
        }
    }

    // 공통: 드롭다운 열고 닫기 (Common Dropdown Open/Close Logic)
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

    // 외부 클릭 시 닫기 (Close Dropdowns on Outside Click)
    function closeAllDropdowns() {
        document.querySelectorAll(".options").forEach(container => container.style.display = "none");
        document.querySelectorAll(".selectbox").forEach(box => box.setAttribute("aria-expanded", "false"));
    }

    document.addEventListener("click", closeAllDropdowns);
});