// All Checkbox


    document.getElementById('selectAllCheckbox')
    .addEventListener('change', (event) => {
        const checkboxes = document.querySelectorAll('.checkboxes');
        checkboxes.forEach((checkbox) => {
            checkbox.checked = event.target.checked;
        });
    });

    const individualCheckboxes = document.querySelectorAll('.checkboxes');

    individualCheckboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', () => {
            const allChecked = Array.from(individualCheckboxes).every(cb => cb.checked);
            document.getElementById('selectAllCheckbox').checked = allChecked;
        });
    });
