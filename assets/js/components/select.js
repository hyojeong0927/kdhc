(() => {
    document.addEventListener('DOMContentLoaded', function () {
        const comboBoxes = document.querySelectorAll('.combo-box');

        comboBoxes.forEach(box => {
            const selectBox = box.querySelector('.selectbox');
            const optionsContainer = box.querySelector('.options');
            const selectTextSpan = selectBox.querySelector('.selected');
            const selectAllCheckbox = box.querySelector('input[id^="selectAll"]');
            const optionCheckboxes = box.querySelectorAll('input[name="multi-options"]');

            const isDisabled = box.getAttribute('aria-disabled') === 'true';
            const isReadOnly = box.getAttribute('aria-readonly') === 'true';

            if (isDisabled || isReadOnly) {
                [...optionCheckboxes, selectAllCheckbox].forEach(cb => cb.disabled = true);
            }
            selectBox.addEventListener('click', function (e) {
                if (isDisabled || isReadOnly) return;

                const expanded = selectBox.getAttribute('aria-expanded') === 'true';
                selectBox.setAttribute('aria-expanded', String(!expanded));
                optionsContainer.style.display = expanded ? 'none' : 'block';
                e.stopPropagation();
            });

            // 전체 선택
            selectAllCheckbox?.addEventListener('change', function () {
                if (isDisabled || isReadOnly) return;

                optionCheckboxes.forEach(cb => cb.checked = this.checked);
                updateSelectedText();
            });
            
            optionCheckboxes.forEach(cb => {
                cb.addEventListener('change', function () {
                    if (isDisabled || isReadOnly) return;

                    const allChecked = [...optionCheckboxes].every(cb => cb.checked);
                    if (selectAllCheckbox) selectAllCheckbox.checked = allChecked;
                    updateSelectedText();

                    if (allChecked) {
                        optionsContainer.style.display = 'none';
                        selectBox.setAttribute('aria-expanded', 'false');
                    }
                });
            });

            if (!selectBox || !optionsContainer || !selectTextSpan || !optionCheckboxes.length) return;

            function updateSelectedText() {
                const selected = [...optionCheckboxes].filter(cb => cb.checked).map(cb => cb.value);
                selectTextSpan.textContent = selected.length ? selected.join(', ') : '선택';


                if (selected.length === 0) {
                    selectBox.classList.add('placeholder');
                } else {
                    selectBox.classList.remove('placeholder');
                }
                if (selectAllCheckbox) {
                    selectAllCheckbox.checked = [...optionCheckboxes].every(cb => cb.checked);
                }
            }

            document.addEventListener('click', function (e) {
                if (!box.contains(e.target)) {
                    optionsContainer.style.display = 'none';
                    selectBox.setAttribute('aria-expanded', 'false');
                }
            });
            selectBox.addEventListener('keydown', function (e) {
                if (e.key === 'Escape') {
                    optionsContainer.style.display = 'none';
                    selectBox.setAttribute('aria-expanded', 'false');
                }
            });
            
            updateSelectedText();
        });
    });
})();