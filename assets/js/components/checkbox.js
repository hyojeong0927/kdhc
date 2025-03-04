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

// document.addEventListener("DOMContentLoaded", function () {
//     const weekSelection = document.querySelector(".col2 .form-group .form-check-group"); // 점검요일 영역
//     const radioButtons = document.querySelectorAll("input[name='drone1']"); // 점검 주기 유형

//     // 초기 숨김 처리
//     weekSelection.closest(".col2").style.display = "none";

//     // 이벤트 리스너 추가
//     radioButtons.forEach((radio) => {
//         radio.addEventListener("change", function () {
//             if (this.value === "radio02") {
//                 weekSelection.closest(".col2").style.display = "block"; // 주간 선택 시 표시
//             } else {
//                 weekSelection.closest(".col2").style.display = "none"; // 다른 옵션 선택 시 숨김
//             }
//         });
//     });
// });
