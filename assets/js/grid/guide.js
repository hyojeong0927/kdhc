import { rowData } from './data.js'
import { normalColumnDefs, colspanColumnDefs, inputColumnDefs } from './column.js'

// option
const normalGridOptions = {
    defaultColDef: {
        editable: false, // edit 사용 유무
        autoHeight: true,
        sortable: true, // sort 사용 유무
    },
    columnDefs:normalColumnDefs,
    headerHeight: 41, // header height
    rowData: rowData,
    rowHeight: 63, // row height
    rowSelection: { // row checkbox
        mode: "multiRow",
        groupSelects: "descendants",
        selectAll: 'filtered',
        width: 52,
    },
    domLayout: "autoHeight", // scroll 없는 레이아웃
    suppressColumnVirtualisation: true, // scroll 없는 레이아웃
    // data empty style
    overlayNoRowsTemplate: '<div class="empty"><div class="empty-img"></div><div class="empty-txt">데이타가 없습니다.</div></div>',
};
// header colspan
const colspanGridOptions = {
    defaultColDef: {
        editable: false,
        autoHeight: true,
        sortable: true,
    },
    columnDefs:colspanColumnDefs,
    headerHeight: 41,
    rowData: rowData,
    rowHeight: 63,
    rowSelection: {
        mode: "multiRow",
        groupSelects: "descendants",
        selectAll: 'filtered',
        width: 52,
    },
    domLayout: "autoHeight",
    suppressColumnVirtualisation: true,
    // data empty style
    overlayNoRowsTemplate: '<div class="empty"><div class="empty-img"></div><div class="empty-txt">데이타가 없습니다.</div></div>',
};

// cell rowspan
const rowspanColumnDefs = [
    {
        headerName: "순번",
        headerClass: "center",
        field: "field01",
        width: 64,
        rowSpan: (params) => shouldMergeRows(params, ["field01", "field02", "field03"]),
        cellClass: getMergeCellClass,
    },
    {
        headerName: "자산관리번호",
        headerClass: "center",
        field: "field02",
        width: 238,
        editable: true,
        cellEditor: 'customInputSearchEditor',
        rowSpan: (params) => shouldMergeRows(params, ["field01", "field02", "field03"]),
        cellClass: getMergeCellClass,
        cellRenderer: (params) => {
            const rowIndex = params.node.rowIndex;
            const value = params.value ? params.value.trim() : "";

            if (rowIndex === 0 && !value) {
                const htmlContent = `
                    <div class="input-search-group">
                        <input type="search" class="form-control" id="search1" placeholder="자산관리번호" value="">
                        <label class="input-group-text" for="search1"><i class="icon search"></i></label>
                    </div>
                `;
                
                setTimeout(() => {
                    const label = document.querySelector('#search1 + .input-group-text');
                    const width = 1400; 
                    const height = 800;

                    const left = (window.screenLeft || window.screenX) + (window.innerWidth - width) / 2;
                    const top = (window.screenTop || window.screenY) + (window.innerHeight - height) / 2;

                    label.addEventListener('click', () => {
                        window.open(
                            "./SB-USR-023.html",
                            "SearchPopup",
                            `width=${width},height=${height},left=${left},top=${top},scrollbars=yes,resizable=yes`
                        );
                    });
                }, 0);

                return htmlContent;
            } else {
                return value;
            }
        }
    },
    {
        headerName: "시스템명",
        headerClass: "center",
        field: "field03",
        width: 200,
        rowSpan: (params) => shouldMergeRows(params, ["field01", "field02", "field03"]),
        cellClass: getMergeCellClass,
    },
    {
        headerName: "구분",
        headerClass: "center",
        field: "field04",
        width: 120,
        cellClass: "cell-normal",
    },
    {
        headerName: "사용 중 포트 봉인",
        headerClass: "center",
        width: 322,
        cellClass: "cell-normal",
        children: [
            {
                headerName: "용도",
                headerClass: "center",
                field: "field05",
                width: 160,
                cellClass: "cell-normal",
            },
            {
                headerName: "봉인 관리번호",
                headerClass: "center",
                field: "field06",
                width: 160,
                cellClass: "cell-normal",
                editable: true,
                cellEditor: 'customInputSearchEditor',
                cellRenderer: (params) => {
                    const value = params.value;
                    if (!value) {
                        return `
                            <!-- input search group start -->
                            <div class="input-search-group">
                                <input type="search" class="form-control" id="search1" placeholder="봉인번호" value="">
                                <label class="input-group-text" for="search1"><i class="icon search"></i></label>
                            </div>
                            <!--// input search group end -->
                        `;
                    } else {
                        return value;
                    }
                }
            },
        ]
    },
    {
        headerName: "미사용 포트 봉인",
        headerClass: "center",
        width: 160,
        cellClass: "cell-normal",
        children: [
            {
                headerName: "봉인 관리번호",
                headerClass: "center",
                field: "field07",
                width: 160,
                cellClass: "cell-normal",
            }
        ]
    },
    {
        headerName: "비고",
        headerClass: "center",
        field: "field08",
        minWidth: 120,
        flex: 1,
        cellClass: "cell-normal",
    },
    {
        headerName: "삭제",
        headerClass: "center",
        field: "field09",
        minWidth: 120,
        flex: 1,
        cellClass: "cell-normal",
            cellRenderer: params => {
            return '<button type="button" class="btn btn-icon"><i class="icon del-trash" /></button>';
        }
    },
];

// rowspan
let rowspanMap = {};

function calculateRowspanMap(data, fields) {
    const mapKey = fields.join(",");
    rowspanMap[mapKey] = {};

    let rowIndex = 0;

    while (rowIndex < data.length) {
        let mergeCount = 1;
        const key = fields.map(field => data[rowIndex][field]).join(",");

        for (let i = rowIndex + 1; i < data.length; i++) {
            const nextKey = fields.map(field => data[i][field]).join(",");
            if (nextKey === key) {
                mergeCount++;
            } else {
                break;
            }
        }

        for (let i = 0; i < mergeCount; i++) {
            if (i > 0) {
                fields.forEach(field => {
                    data[rowIndex + i][field] = "";
                });
            }
            rowspanMap[mapKey][rowIndex + i] = i === 0 ? mergeCount : 1;
        }

        rowIndex += mergeCount;
    }
}

function shouldMergeRows(params, fields) {
    const mapKey = fields.join(",");
    const rowIndex = params.node.rowIndex;
    return rowspanMap[mapKey]?.[rowIndex] || 1;
}

function getMergeCellClass(params) {
    const mapKey = ["field01", "field02", "field03"].join(",");
    const rowIndex = params.node.rowIndex;
    return rowspanMap[mapKey]?.[rowIndex] > 1 ? "merge-cell" : "";
}

const rowspanGridOptions = {
    defaultColDef: {
        editable: false,
        autoHeight: true,
        sortable: true,
    },
    columnDefs:rowspanColumnDefs,
    headerHeight: 41,
    rowData: rowData,
    rowHeight: 63,
    rowSelection: {
        mode: "multiRow",
        groupSelects: "descendants",
        selectAll: 'filtered',
        width: 52,
    },
    onGridReady: (params) => { // merge option
        calculateRowspanMap(rowData, ["field01", "field02", "field03"]);
        params.api.refreshCells({ force: true });
        params.api.redrawRows();
    },
    getRowHeight: (params) => 63,
    domLayout: "autoHeight",
    suppressColumnVirtualisation: true,

    components: {
        customInputSearchEditor: function () {
            return {
                init: function (params) {

                    const input = document.createElement('input');
                    input.id = `search-${params.rowIndex}-${params.column.colId}`;
                    input.type = 'search';
                    input.className = 'form-control';
                    input.value = params.value || '';
                    input.placeholder = "입력";

                    const label = document.createElement('label');
                    label.htmlFor = 'searchId';
                    label.className = 'input-group-text';
                    label.innerHTML = '<i class="icon search"></i>';

                    // 컴퍼넌트 검색에서 팝업띄우기
                        label.addEventListener("click", function () {
                        const width = 1400;
                        const height = 800;

                        const left = (window.screenLeft || window.screenX) + (window.innerWidth - width) / 2;
                        const top = (window.screenTop || window.screenY) + (window.innerHeight - height) / 2;

                        window.open(
                            "./SB-USR-023.html",
                            "SearchPopup",
                            `width=${width},height=${height},left=${left},top=${top},scrollbars=yes,resizable=yes`
                        );
                    });


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
        },
    },
    // data empty style
    overlayNoRowsTemplate: '<div class="empty"><div class="empty-img"></div><div class="empty-txt">데이타가 없습니다.</div></div>',
};

const inputGridOptions = {
    defaultColDef: {
        editable: false,
        autoHeight: true,
        sortable: true,
    },
    columnDefs:inputColumnDefs,
    headerHeight: 41,
    rowData: rowData,
    rowHeight: 63,
    rowSelection: {
        mode: "multiRow",
        groupSelects: "descendants",
        selectAll: 'filtered',
        width: 52,
    },
    domLayout: "autoHeight",
    suppressColumnVirtualisation: true,
    // data empty style
    overlayNoRowsTemplate: '<div class="empty"><div class="empty-img"></div><div class="empty-txt">데이타가 없습니다.</div></div>',
};

// api
let normalGridApi;
let colspanGridApi;
let rowspanGridApi;
let inputGridApi;

const normalGridDiv = document.querySelector("#normalGrid");
normalGridApi = agGrid.createGrid(normalGridDiv, normalGridOptions);

const colspanGridDiv = document.querySelector("#colspanGrid");
colspanGridApi = agGrid.createGrid(colspanGridDiv, colspanGridOptions);

const rowspanGridDiv = document.querySelector("#rowspanGrid");
rowspanGridApi = agGrid.createGrid(rowspanGridDiv, rowspanGridOptions);

const inputGridDiv = document.querySelector("#inputGrid");
inputGridApi = agGrid.createGrid(inputGridDiv, inputGridOptions);