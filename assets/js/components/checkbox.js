document.addEventListener('DOMContentLoaded', () => {
    const selectAllCheckbox = document.getElementById('selectAllCheckbox');
    const checkboxes = document.querySelectorAll('.checkboxes');

    selectAllCheckbox.addEventListener('change', (event) => {
        checkboxes.forEach(checkbox => checkbox.checked = event.target.checked);
    });

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            selectAllCheckbox.checked = [...checkboxes].every(cb => cb.checked);
        });
    });
});

// 정기점검 관리
document.addEventListener("DOMContentLoaded", function () {
    const radioButtons = document.querySelectorAll("input[name='typeValue']"); // 점검 주기 유형

    const weekSelection = document.querySelector("#valueWeek"); // 주간
    const monthSelection = document.querySelector("#valueMonth"); // 월간
    const quarterSelection = document.querySelector("#valueQuarter"); // 분기
    const halfSelection = document.querySelector("#valueHalf"); // 반기
    const yearSelection = document.querySelector("#valueYear"); // 연간

    weekSelection.closest("#valueWeek").style.display = "none";
    monthSelection.closest("#valueMonth").style.display = "none";
    quarterSelection.closest("#valueQuarter").style.display = "none";
    halfSelection.closest("#valueHalf").style.display = "none";
    yearSelection.closest("#valueYear").style.display = "none";

    radioButtons.forEach((radio) => {
        radio.addEventListener("change", function () {
            if (this.value === "week") {
                weekSelection.closest("#valueWeek").style.display = "flex";
            } else {
                weekSelection.closest("#valueWeek").style.display = "none";

            }
        });
    });
});
