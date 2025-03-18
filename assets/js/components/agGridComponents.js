export const bootstrapDatePickerEditor = function () {
    return {
        init: function (params) {
            const input = document.createElement('input');
            input.id = 'date';
            input.type = 'text';
            input.className = 'form-control datepicker';
            input.value = params.value || '';
            input.placeholder = "YYYY-MM-DD";

            const label = document.createElement('label');
            label.className = 'input-group-text';
            label.htmlFor = 'date';
            label.innerHTML = '<i class="icon calendar"></i>';

            input.addEventListener('input', function () {
                params.api.stopEditing();
            });

            this.eInput = input;
            this.eLabel = label;

            const wrapper = document.createElement('div');
            wrapper.className = 'input-date-group';
            wrapper.appendChild(input);
            wrapper.appendChild(label);
            this.eWrapper = wrapper;

            $(input).datepicker({
                format: 'yyyy-mm-dd',
                autoclose: true
            });
            input.value = params.value;

            input.addEventListener('change', function () {
                params.api.stopEditing();
            });
        },
        getValue: function () {
            return this.eInput.value;
        },
        getGui: function () {
            return this.eWrapper;
        }
    };
};

export const customInputSearchEditor = function () {
    return {
        init: function (params) {
                
            const input = document.createElement('input');
            input.id = 'searchId';
            input.type = 'search';
            input.className = 'form-control';
            input.value = params.value || '';
            input.placeholder = "입력";

            const label = document.createElement('label');
            label.htmlFor = 'searchId';
            label.className = 'input-group-text';
            label.innerHTML = '<i class="icon search"></i>';       
            input.addEventListener('input', function () {
                params.api.stopEditing();
            });

            this.eInput = input;
            this.eLabel = label;

            const wrapper = document.createElement('div');
            wrapper.className = 'input-search-group';
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