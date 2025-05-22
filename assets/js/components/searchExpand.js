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
            expandBtn.innerHTML = isOpen
                ? '<i class="icon arrow-up"></i>'
                : '<i class="icon arrow-down"></i>';
        });

        expandBtn.innerHTML = '<i class="icon arrow-down"></i>';
    });
})();
