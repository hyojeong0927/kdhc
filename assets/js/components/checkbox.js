document.addEventListener('DOMContentLoaded', () => {
    const selectAllCheckbox = document.getElementById('selectAllCheckbox');
    const checkboxes = document.querySelectorAll('.checkboxes:not(#selectAllCheckbox)');

    if (!selectAllCheckbox || checkboxes.length === 0) {
        console.warn("체크박스 요소를 찾을 수 없습니다.");
        return;
    }

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

    // 정기점검 관리
    const sections = {
        week: document.querySelector("#valueWeek"),
        month: document.querySelector("#valueMonth"),
        quarter: document.querySelector("#valueQuarter"),
        half: document.querySelector("#valueHalf"),
        year: document.querySelector("#valueYear"),
    };

    // 모든 입력 필드 숨기기 (초기 상태)
    Object.values(sections).forEach(section => section.style.display = "none");

    // 라디오 버튼 선택 시 필드 표시
    const radioButtons = document.querySelectorAll("input[name='typeValue']");

    radioButtons.forEach(radio => {
        radio.addEventListener("change", function () {
            // 모든 입력 필드 숨기기
            Object.values(sections).forEach(section => section.style.display = "none");

            // 선택된 값에 해당하는 입력 필드만 표시
            if (sections[this.value]) {
                sections[this.value].style.display = "flex"; // 또는 "block"
            }
        });
    });

    // ✅ 기본 선택된 값 반영 (초기화)
    const checkedRadio = document.querySelector("input[name='typeValue']:checked");
    if (checkedRadio && sections[checkedRadio.value]) {
        sections[checkedRadio.value].style.display = "flex";
    }
});
