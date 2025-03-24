import { bootstrapDatePickerEditor } from "../../../assets/js/components/agGridComponents.js"
        
const multiRowData = [
    { field01: "1", field02: "", field03: "분산제어", field04: "", field05: "", field06: "", field07: "" },
    { field01: "1", field02: "", field03: "발전제어", field04: "", field05: "", field06: "", field07: "" },
    { field01: "1", field02: "", field03: "전력제어", field04: "", field05: "", field06: "", field07: "" },
    { field01: "1", field02: "", field03: "보조제어", field04: "", field05: "", field06: "", field07: "" },
    { field01: "2", field02: "", field03: "전력제어", field04: "", field05: "", field06: "", field07: "" },
    { field01: "2", field02: "", field03: "보조제어", field04: "", field05: "", field06: "", field07: "" },
    { field01: "3", field02: "", field03: "보조제어", field04: "", field05: "", field06: "", field07: "" },
    { field01: "4", field02: "", field03: "보조제어1", field04: "", field05: "", field06: "", field07: "" },
    { field01: "4", field02: "", field03: "보조제어2", field04: "", field05: "", field06: "", field07: "" },
    { field01: "4", field02: "", field03: "보조제어3", field04: "", field05: "", field06: "", field07: "" },
    { field01: "5", field02: "", field03: "보조제어3", field04: "", field05: "", field06: "", field07: "" },
    { field01: "6", field02: "", field03: "보조제어3", field04: "", field05: "", field06: "", field07: "" },
    { field01: "6", field02: "", field03: "보조제어3", field04: "", field05: "", field06: "", field07: "" },
];
const multiColumnDefs = [
    {
        headerName: "순번",
        headerClass: "center",
        field: "field01",
        width: 64,
        rowSpan: (params) => shouldMergeRows(params, ["field01", "field05", "field06"]),
        cellClass: getMergeCellClass,
        
    },
    {
        headerName: "점검일",
        headerClass: "center",
        field: "field02",
        width: 180,
        cellClass: "cell-normal input",
        editable: true,
        cellEditor: 'bootstrapDatePickerEditor',
        cellRenderer: (params) => {
            const value = params.value;
            
            if (!value) {
                return `
                    <div class="input-date-group">
                        <input type="text" id="singleDate" class="form-control datepicker" value="" placeholder="YYYY-MM-DD">
                        <label class="input-group-text" for="singleDate"><i class="icon calendar"></i></label>
                    </div>
                `;
            } else {
                return value;
            }
        }
    },
    {
        headerName: "점검항목",
        headerClass: "center",
        field: "field03",
        minWidth: 180,
        flex: 1,
        cellClass: "cell-normal",
    },
    {
        headerName: "이상유무(O,X)",
        headerClass: "center",
        field: "field04",
        width: 180,
        editable: false,
        cellClass: "cell-normal input",
        cellRenderer: (params) => {
            const value = params.value;

            if (!value) {
                return `
                <!-- select-group is-error -->
                    <div class="select-group">
                        <select class="form-select" aria-label="Default select">
                            <option value="" selected>선택</option>
                            <option value="O">O</option>
                            <option value="X">X</option>
                        </select>
                    </div>
                    <!--// select-group -->
                `;
            } else {
                return value;
            }
        }
    },
    {
        headerName: "점검결과",
        headerClass: "center",
        field: "field05",
        minWidth: 180,
        flex: 1,
        editable: false,
        rowSpan: (params) => shouldMergeRows(params, ["field01", "field05", "field06"]),
        cellClass: getMergeCellClass,
        cellRenderer: (params) => createRegisterButton(params, "field05")
    },
    {
        headerName: "조치사항",
        headerClass: "center",
        field: "field06",
        minWidth: 180,
        flex: 1,
        editable: false,
        rowSpan: (params) => shouldMergeRows(params, ["field01", "field05", "field06"]),
        cellClass: getMergeCellClass,
        cellRenderer: (params) => createRegisterButton(params, "field06")
    },
    {
        headerName: "삭제",
        headerClass: "center",
        field: "field07",
        width: 100,
        cellClass: "cell-normal",
        cellRenderer: params => {
            return '<button type="button" class="btn btn-icon"><i class="icon del-trash" /></button>';
        }
    },
];


// rowspan start
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
            rowspanMap[mapKey][rowIndex + i] = i === 0 ? mergeCount : 0;
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
    const mapKey = ["field01", "field05", "field06"].join(",");
    const rowIndex = params.node.rowIndex;
    
    if (rowspanMap[mapKey]?.[rowIndex] > 1) {
        return "merge-cell";
    } else if (rowspanMap[mapKey]?.[rowIndex] === 0) {
        return "blank";
    }
    return "cell-normal";
}

function getRowHeight(params) {
    const mapKey = ["field01", "field05", "field06"].join(",");
    const rowIndex = params.node.rowIndex;
    return rowspanMap[mapKey]?.[rowIndex] > 1 ? 63 * rowspanMap[mapKey][rowIndex] : 63;
}

// rowspan end

// 등록 버튼 생성
function createRegisterButton(params, field) {
    const rowIndex = params.node.rowIndex;
    const mapKey = ["field01", "field05", "field06"].join(",");
    
    const currentRowspan = rowspanMap[mapKey]?.[rowIndex] || 1;
    const prevRowspan = rowspanMap[mapKey]?.[rowIndex - 1] || 1;

    const isFirstMergedRow = currentRowspan > 1 && (rowIndex === 0 || prevRowspan === 1);

    if (isFirstMergedRow || currentRowspan === 1) {
        return `
            <button type="button" class="btn btn-grid register-btn" data-row-index="${rowIndex}" data-field="${field}">
                등록
            </button>
        `;
    }
    return "";
}
// 등록 버튼 생성 end

// popup
document.addEventListener("click", (event) => {
    const button = event.target.closest(".register-btn");
    if (!button) return;

    const rowIndex = button.dataset.rowIndex;
    const field = button.dataset.field;
    
    const isInspectionResult = field === "field05";
    const popupUrl = isInspectionResult ? "./SB-USR-057_02.html" : "./SB-USR-057_03.html";

    const width = 600;
    const height = 300;
    const left = (window.screenLeft || window.screenX) + (window.innerWidth - width) / 2;
    const top = (window.screenTop || window.screenY) + (window.innerHeight - height) / 2;

    window.open(
        popupUrl,
        "PopupWindow",
        `width=${width},height=${height},left=${left},top=${top},scrollbars=yes,resizable=yes`
    );
});
// popup end

let multiGridApi;

const multiGridOptions = {
defaultColDef: {
    editable: false, // edit 사용 유무
    autoHeight: true,
    sortable: false, // sort 사용 유무
},
columnDefs: multiColumnDefs,
headerHeight: 41, // header height
rowData: multiRowData,
rowHeight: 63, // row height

onGridReady: (params) => { // merge option
    calculateRowspanMap(multiRowData, ["field01", "field05", "field06"]);
    params.api.refreshCells({ force: true });
    params.api.redrawRows();
},
getRowHeight: (params) => 63,
domLayout: "autoHeight",
suppressColumnVirtualisation: false,
suppressRowTransform: true, // merge option 추가
components: {
    bootstrapDatePickerEditor
},
// data empty style
overlayNoRowsTemplate: '<div class="empty"><div class="empty-img"></div><div class="empty-txt">데이타가 없습니다.</div></div>',
};

const multiGridDiv = document.querySelector("#multiGrid");
multiGridApi = agGrid.createGrid(multiGridDiv, multiGridOptions);