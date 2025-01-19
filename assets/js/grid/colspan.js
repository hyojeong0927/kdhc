let colspanGridApi;

const rowData = [
    { name: "민지", birth: new Date("2004-05-07"), nationality: "대한민국", input: "입력값1", colspanField: 'F1' },
    { name: "하니", birth: new Date("2004-10-06"), nationality: "호주|베트남", input: "입력값2", colspanField: 'F2'},
    { name: "다니엘", birth: new Date("2005-04-11"), nationality: "호주|한국", input: "입력값3", colspanField: 'span' },
    { name: "해린", birth: new Date("2006-05-15"), nationality: "대한민국", input: "입력값4", colspanField: 'F4' },
    { name: "혜인", birth: new Date("2008-04-21"), nationality: "대한민국", input: "입력값5", colspanField: 'F5' }
];
const colspanGridOptions = {
    columnDefs: [
        {
            headerCheckboxSelection: true, 
            checkboxSelection: true,
            width: 50,
        },
        {
            headerName: "이름",
            field: "name",
            headerClass: 'colspan',
            editable: true,
            cellEditor: 'agTextCellEditor',
            tooltipField: "country",
            headerTooltip: "Tooltip for Athlete Column Header",
        },
        {
            headerName: "생일",
            field: "birth",
            headerClass: 'colspan',
            editable: true,
            valueFormatter: (params) => {
                if (!params.value) return "";
                const date = new Date(params.value);
                if (isNaN(date)) return params.value;
                const month = date.getMonth() + 1;
                const day = date.getDate();
                return `${date.getFullYear()}-${month < 10 ? "0" + month : month}-${day < 10 ? "0" + day : day}`;
            },
            cellEditor: "agDateCellEditor",
        },
        {
            headerName: "국적",
            field: "nationality",
            headerClass: 'colspan',
            cellStyle: { textAlign: "center" },
            tooltipValueGetter: (p) =>
                "This is a dynamic tooltip using the value of " + p.value,
            headerTooltip: "Tooltip for Age Column Header",
        },
        {
            headerName: "입력",
            field: "input",
            headerClass: 'colspan',
            cellRenderer: (params) => {
                const rowIndex = params.node.rowIndex;
                if (rowIndex === 0) {
                    const values = params.value ? params.value.split(',') : [];
                    return `
                        <input type="text" value="${values.includes('1') ? '1' : ''}" />
                    `;
                } else {
                    return params.value || '';
                }
            }
        },
        {
            headerName: "선택",
            field: "선택",
            headerClass: 'colspan',
            cellRenderer: (params) => {
                const values = params.value ? params.value.split(',') : [];
                return `
                    <input type="checkbox" ${values.includes('1') ? 'checked' : ''} />
                    <input type="checkbox" ${values.includes('2') ? 'checked' : ''} />
                    <input type="checkbox" ${values.includes('3') ? 'checked' : ''} />
                `;
            },
            valueSetter: (params) => {
                const selectedValues = [];
                if (params.newValue.includes('1')) selectedValues.push('1');
                if (params.newValue.includes('2')) selectedValues.push('2');
                if (params.newValue.includes('3')) selectedValues.push('3');
                params.data[params.colDef.field] = selectedValues.join(',');
                return true;
            }
        },
        {
            headerName: '3',
            headerClass: 'colspan',
            children: [
                {
                    headerName: '3.1',
                    field: 'col3',
                    width: 50,
                    headerClass: 'header-hidden',
                    cellRenderer: (params) => {
                        const values = params.value ? params.value.split(',') : [];
                        return `
                            <input type="checkbox" ${values.includes('1') ? 'checked' : ''} />
                        `;
                    },
                },
                {
                    headerName: '3.2',
                    field: 'col4',
                    width: 50,
                    headerClass: 'header-hidden',
                    cellRenderer: (params) => {
                        const values = params.value ? params.value.split(',') : [];
                        return `
                            <input type="checkbox" ${values.includes('1') ? 'checked' : ''} />
                        `;
                    },
                },
                {
                    headerName: '3.3',
                    field: 'col5',
                    width: 50,
                    headerClass: 'header-hidden',
                    cellRenderer: (params) => {
                        const values = params.value ? params.value.split(',') : [];
                        return `
                            <input type="checkbox" ${values.includes('1') ? 'checked' : ''} />
                        `;
                    },
                }
            ]
        },
        {
            headerName: "Colspan Example",
            headerClass: 'colspan',
            field: "colspanField",
        },
    ],
    rowData: rowData,
    rowHeight: 45,
    rowSelection: "multiple",
    pagination: true,
    paginationPageSize: 10,
    tooltipShowDelay: 500,
};

const colspanGridDiv = document.querySelector('#colspanGrid');
colspanGridApi = agGrid.createGrid(colspanGridDiv, colspanGridOptions);