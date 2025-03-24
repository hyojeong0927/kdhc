const mergeRowData = [
    { field01: "1", field02: "분류1", field03: "3대", field04: "불가", field05: "3대", field06: "불가", field07: "3대", field08: "불가", field09: "3대", field10: "불가" },
    { field01: "1", field02: "분류2", field03: "3대", field04: "불가", field05: "3대", field06: "불가", field07: "3대", field08: "불가", field09: "3대", field10: "불가" },
    { field01: "1", field02: "분류3", field03: "3대", field04: "불가", field05: "3대", field06: "불가", field07: "3대", field08: "불가", ield09: "3대", field10: "불가" },
    { field01: "1", field02: "분류4", field03: "3대", field04: "불가", field05: "3대", field06: "불가", field07: "3대", field08: "불가", field09: "3대", field10: "불가" },
    { field01: "1", field02: "분류5", field03: "3대", field04: "불가", field05: "3대", field06: "불가", field07: "3대", field08: "불가", field09: "3대", field10: "불가" },
    { field01: "2", field02: "분류1", field03: "3대", field04: "불가", field05: "3대", field06: "불가", field07: "3대", field08: "불가", field09: "3대", field10: "불가" },
    { field01: "2", field02: "분류2", field03: "3대", field04: "불가", field05: "3대", field06: "불가", field07: "3대", field08: "불가", field09: "3대", field10: "불가" },
    { field01: "3", field02: "분류2", field03: "3대", field04: "불가", field05: "3대", field06: "불가", field07: "3대", field08: "불가", field09: "3대", field10: "불가" },
];
const mergeColumnDefs = [
    {
        headerName: "순번",
        headerClass: "center",
        field: "field01",
        width: 120,
        rowSpan: (params) => shouldMergeRows(params, ["field01"]),
        cellClass: getMergeCellClass,
    },
    {
        headerName: "분류",
        headerClass: "center",
        field: "field02",
        minWidth: 180,
        flex: 1,
        cellClass: "cell-normal",
    },
    {
        headerName: "Win XP",
        headerClass: "center",
        cellClass: "cell-normal",
        children: [
            {
                headerName: "수량",
                headerClass: "center",
                field: "field03",
                width: 120,
                cellClass: "cell-normal",
            },
            {
                headerName: "업데이트",
                headerClass: "center",
                field: "field04",
                width: 120,
                cellClass: "cell-normal",
            },
        ]
    },
    {
        headerName: "Win 7",
        headerClass: "center",
        cellClass: "cell-normal",
        children: [
            {
                headerName: "수량",
                headerClass: "center",
                field: "field05",
                width: 120,
                cellClass: "cell-normal",
            },
            {
                headerName: "업데이트",
                headerClass: "center",
                field: "field06",
                width: 120,
                cellClass: "cell-normal",
            },
        ]
    },
    {
        headerName: "Win 2003",
        headerClass: "center",
        cellClass: "cell-normal",
        children: [
            {
                headerName: "수량",
                headerClass: "center",
                field: "field07",
                width: 120,
                cellClass: "cell-normal",
            },
            {
                headerName: "업데이트",
                headerClass: "center",
                field: "field08",
                width: 120,
                cellClass: "cell-normal",
            },
        ]
    },
    
    {
        headerName: "Win 10",
        headerClass: "center",
        cellClass: "cell-normal",
        children: [
            {
                headerName: "수량",
                headerClass: "center",
                field: "field09",
                width: 120,
                cellClass: "cell-normal",
            },
            {
                headerName: "업데이트",
                headerClass: "center",
                field: "field10",
                width: 120,
                cellClass: "cell-normal",
            },
        ]
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
    const mapKey = ["field01"].join(",");
    const rowIndex = params.node.rowIndex;

    if (rowspanMap[mapKey]?.[rowIndex] > 1) {
        return "merge-cell";
    } else if (rowspanMap[mapKey]?.[rowIndex] === 0) {
        return "blank";
    }
    return "cell-normal";
}

function getRowHeight(params) {
    const mapKey = ["field01"].join(",");
    const rowIndex = params.node.rowIndex;
    return rowspanMap[mapKey]?.[rowIndex] > 1 ? 63 * rowspanMap[mapKey][rowIndex] : 63;
}
// rowspan end

let rowspanGridApi;

const rowspanGridOptions = {
    defaultColDef: {
        editable: false, // edit 사용 유무
        autoHeight: true,
        sortable:  false, // sort 사용 유무
    },
    columnDefs: mergeColumnDefs,
    headerHeight: 41, // header height
    rowData: mergeRowData,
    rowHeight: 63, // row height
    
    onGridReady: (params) => { // merge option
        calculateRowspanMap(mergeRowData, ["field01"]);
        params.api.refreshCells({ force: true });
        params.api.redrawRows();
    },
    getRowHeight: (params) => 63,  // rowspan
    domLayout: "autoHeight", // 2025-02-19 추가 옵션
    suppressColumnVirtualisation: true, // 2025-02-19 추가 옵션
    // data empty style
    overlayNoRowsTemplate: '<div class="empty"><div class="empty-img"></div><div class="empty-txt">데이타가 없습니다.</div></div>',
};
const rowspanGridDiv = document.querySelector("#rowspanGrid");
rowspanGridApi = agGrid.createGrid(rowspanGridDiv, rowspanGridOptions);