document.addEventListener('DOMContentLoaded', () => {
    // all check
    const selectAllCheckbox = document.getElementById('selectAllCheckbox');
    const checkboxes = document.querySelectorAll('.checkboxes:not(#selectAllCheckbox)');

    selectAllCheckbox.addEventListener('change', () => {
        checkboxes.forEach(checkbox => checkbox.checked = selectAllCheckbox.checked);
    });

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const allChecked = [...checkboxes].every(cb => cb.checked);
            selectAllCheckbox.checked = allChecked;
        });
    });

    const allChecked = [...checkboxes].every(cb => cb.checked);
    selectAllCheckbox.checked = allChecked;
    // all check end
});

// 정기점검 관리
const sections = document.querySelectorAll(".obj");
sections.forEach(section => section.style.display = "none");

document.addEventListener("change", function (event) {
    if (event.target.name === "typeValue") {
        console.log('Radio button changed to:', event.target.value);

        if (event.target.id === "day" && event.target.checked) {
            sections.forEach(section => section.style.display = "none");
        } else if (event.target.id === "week" && event.target.checked) {
           
            const weekSections = document.querySelectorAll(".week");
            sections.forEach(section => section.style.display = "none");
            weekSections.forEach(section => section.style.display = "flex");
        } else {
            const selectedSections = document.querySelectorAll(`.${event.target.value}`);

            if (selectedSections && selectedSections.length > 0) {

                sections.forEach(section => section.style.display = "none");

                selectedSections.forEach(section => section.style.display = "block");
            } else {
                console.warn(`No sections found with class: ${event.target.value}`);

                const noSectionMessage = document.querySelector("#noSectionMessage");

                if (noSectionMessage) {
                    noSectionMessage.textContent = `No sections available for "${event.target.value}".`;
                    noSectionMessage.style.display = "block";
                }
            }
        }
    }
});