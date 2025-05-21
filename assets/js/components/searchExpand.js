(() => {
    document.addEventListener('DOMContentLoaded', function () {
        const expandRow = document.querySelector('.form-expand-row');
        const expandBtnRow = document.querySelector('.form-row.expand-btn');
        const expandBtn = expandBtnRow?.querySelector('button');

        if (!expandRow || expandRow.innerHTML.trim() === '') {
            if (expandBtnRow) expandBtnRow.style.display = 'none';
            return;
        }

        expandBtn?.addEventListener('click', () => {
            const isOpen = expandRow.classList.toggle('show');
            expandBtn.textContent = isOpen ? '접기' : '더보기';
        });
    });
})();
