document.addEventListener("DOMContentLoaded", function() {
    const dateInput = document.getElementById("start");
    const placeholderText = document.getElementById("date-placeholder");

    // 입력 필드 상태 업데이트 함수
    function updatePlaceholder() {
        if (dateInput.value) {
            dateInput.classList.add("filled"); // 날짜가 입력된 상태
        } else {
            dateInput.classList.remove("filled");
        }
    }

    // 초기 상태 설정
    updatePlaceholder();

    // 날짜 입력 값 변경 시 업데이트
    dateInput.addEventListener("change", updatePlaceholder);
});
