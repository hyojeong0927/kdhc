const customInputEditor = function () {
    return {
        init: function (params) {
            const input = document.createElement('input');
            input.id = params.id || 'inputId';
            input.type = params.type || 'text';
            input.className = 'form-control';
            input.value = params.value || '';
            input.placeholder = params.placeholder || '입력';

            const label = document.createElement('label');
            label.htmlFor = input.id;
            label.className = 'input-group-text';
            label.innerHTML = params.icon || '<i class="icon"></i>';

            if (params.type === 'search') {
                label.addEventListener('click', function () {
                    alert('검색 버튼이 클릭되었습니다!');
                });
            }

            if (params.type === 'date') {
                $(input).datepicker({
                    format: 'yyyy-mm-dd',
                    autoclose: true
                });
            }

            input.addEventListener('input', function () {
                params.api.stopEditing();
            });

            this.eInput = input;
            this.eLabel = label;

            const wrapper = document.createElement('div');
            wrapper.className = `input-${params.type}-group`;
            wrapper.appendChild(input);
            wrapper.appendChild(label);
            this.eWrapper = wrapper;
        },
        getValue: function () {
            return this.eInput.value;
        },
        getGui: function () {
            return this.eWrapper;
        }
    };
};
