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

    // 정기점검 관리 radio
    // const sections = {
    //     // day: document.querySelector("#valueDay"),
    //     week: document.querySelector("#valueWeek"),
    //     month: document.querySelector("#valueMonth"),
    //     quarter: document.querySelector("#valueQuarter"),
    //     half: document.querySelector("#valueHalf"),
    //     year: document.querySelector("#valueYear"),
    // };

    // Object.values(sections).forEach(section => section.style.display = "none");

    // const radioButtons = document.querySelectorAll("input[name='typeValue']");

    // radioButtons.forEach(radio => {
    //     radio.addEventListener("change", function () {
    //         Object.values(sections).forEach(section => section.style.display = "none");

    //         if (sections[this.value]) {
    //             sections[this.value].style.display = "flex";
    //         }
    //     });
    // });

    // const checkedRadio = document.querySelector("input[name='typeValue']:checked");

    // if (checkedRadio && sections[checkedRadio.value]) {
    //     sections[checkedRadio.value].style.display = "flex";
    // }


    const sections = {
        // day: document.querySelector("#valueDay"),
        week: document.querySelector("#valueWeek"),
        month: document.querySelector("#valueMonth"),
        quarter: document.querySelector("#valueQuarter"),
        half: document.querySelector("#valueHalf"),
        year: document.querySelector("#valueYear"),
    };

    Object.values(sections).forEach(section => section.style.display = "none");

    const radioButtons = document.querySelectorAll("input[name='typeValue']");

    radioButtons.forEach(radio => {
        radio.addEventListener("change", function () {
            Object.values(sections).forEach(section => section.style.display = "none");

            if (sections[this.value]) {
                sections[this.value].style.display = "flex";
            }
        });
    });

    
    // 정기점검 관리 end
});