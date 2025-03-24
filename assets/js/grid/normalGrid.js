const normalRowData = [
    {
        field01: "판교-25-0001",
        field02: "계전부",
        field03: "임찬규",
        field04: "2024.12.10 12:20:33",
        field05: "2024.12.12 12:24:30",
        field06: "step01",
    },
    {
        field01: "판교-25-0001",
        field02: "계전부",
        field03: "임찬규",
        field04: "2024.12.10 12:20:33",
        field05: "2024.12.12 12:24:30",
        field06: "step01 reject",
    },
    {
        field01: "판교-25-0001",
        field02: "계전부",
        field03: "임찬규",
        field04: "2024.12.10 12:20:33",
        field05: "2024.12.12 12:24:30",
        field06: "step02",
    },
    {
        field01: "판교-25-0001",
        field02: "계전부",
        field03: "임찬규",
        field04: "2024.12.10 12:20:33",
        field05: "2024.12.12 12:24:30",
        field06: "step02 reject",
    },
    {
        field01: "판교-25-0001",
        field02: "계전부",
        field03: "임찬규",
        field04: "2024.12.10 12:20:33",
        field05: "2024.12.12 12:24:30",
        field06: "step03",
    },
    {
        field01: "판교-25-0001",
        field02: "계전부",
        field03: "임찬규",
        field04: "2024.12.10 12:20:33",
        field05: "2024.12.12 12:24:30",
        field06: "step03 reject",
    },
    {
        field01: "판교-25-0001",
        field02: "계전부",
        field03: "임찬규",
        field04: "2024.12.10 12:20:33",
        field05: "2024.12.12 12:24:30",
        field06: "done",
    },
];
const normalColumnDefs = [
    {
        headerName: "문서번호",
        headerClass: "center",
        field: "field01",
        width: 160,
        cellClass: "cell-normal",
    },
    {
        headerName: "기안부서",
        headerClass: "center",
        field: "field02",
        width: 92,
        cellClass: "cell-normal",
    },
    {
        headerName: "기안자",
        headerClass: "center",
        field: "field03",
        width: 76,
        cellClass: "cell-normal",
    },
    {
        headerName: "기안일자",
        headerClass: "center",
        field: "field04",
        width: 180,
        cellClass: "cell-normal",
    },
    {
        headerName: "결재일자",
        headerClass: "center",
        field: "field05",
        width: 180,
        cellClass: "cell-normal",
    },
    {
        headerName: "결재/승인 상태",
        headerClass: "center",
        field: "field06",
        minWidth: 435,
        flex: 1,
        cellClass: "cell-normal",
        cellRenderer: (params) => {
            const status = params.value;
            let stepsData = [];
            
            if (status === "step01") {
                stepsData = [
                    { "status": "step-current", "title": "기안자", "name": "박동원" },
                    { "status": "step-default", "title": "제어보호담당자", "name": "오승환" },
                    { "status": "step-default", "title": "제어보호담당자", "name": "김현수" }
                ];
            } else if (status === "step01 reject") {
                stepsData = [
                    { "status": "step-reject", "title": "기안자", "name": "박동원" },
                    { "status": "step-default", "title": "제어보호담당자", "name": "오승환" },
                    { "status": "step-default", "title": "제어보호담당관", "name": "김현수" }
                ];
            } else if (status === "step02") {
                stepsData = [
                    { "status": "step-done", "title": "기안자", "name": "박동원" },
                    { "status": "step-current", "title": "제어보호담당자", "name": "오승환" },
                    { "status": "step-default", "title": "제어보호담당관", "name": "김현수" }
                ];
            } else if (status === "step02 reject") {
                stepsData = [
                    { "status": "step-done", "title": "기안자", "name": "박동원" },
                    { "status": "step-reject", "title": "제어보호담당자", "name": "오승환" },
                    { "status": "step-default", "title": "제어보호담당관", "name": "김현수" }
                ];
            } else if (status === "step03") {
                stepsData = [
                    { "status": "step-done", "title": "기안자", "name": "박동원" },
                    { "status": "step-done", "title": "제어보호담당자", "name": "오승환" },
                    { "status": "step-current", "title": "제어보호담당관", "name": "김현수" }
                ];
            } else if (status === "step03 reject") {
                stepsData = [
                    { "status": "step-done", "title": "기안자", "name": "박동원" },
                    { "status": "step-done", "title": "제어보호담당자", "name": "오승환" },
                    { "status": "step-reject", "title": "제어보호담당관", "name": "김현수" }
                ];
            } else if (status === "done") {
                stepsData = [
                    { "status": "step-done", "title": "기안자", "name": "박동원" },
                    { "status": "step-done", "title": "제어보호담당자", "name": "오승환" },
                    { "status": "step-done", "title": "제어보호담당관", "name": "김현수" }
                ];
            }
            let stepListHtml = '<ul class="step-list">';
            stepsData.forEach(step => {
                stepListHtml += `
                    <li class="${step.status}">
                        <dl>
                            <dt><i class="step-img"></i></dt>
                            <dd class="txt">${step.title}</dd>
                            <dd class="txt">${step.name}</dd>
                        </dl>
                    </li>
                `;
            });
            stepListHtml += '</ul>';
            return `<div class="step step-sm">${stepListHtml}</div>`;
        }

    }
];

let normalGridApi;

const normalGridOptions = {
    defaultColDef: {
        editable: false, // edit 사용 유무
        autoHeight: true,
        sortable: true, // sort 사용 유무
    },
    columnDefs: normalColumnDefs,
    headerHeight: 41, // header height
    rowData: normalRowData,
    rowHeight: 63, // row height
    rowSelection: { // row checkbox
        mode: "multiRow",
        groupSelects: "descendants",
        selectAll: 'filtered',
        width: 52,
    },
    domLayout: "autoHeight", // 2025-02-19 추가 옵션
    suppressColumnVirtualisation: true, // 2025-02-19 추가 옵션
    // data empty style
    overlayNoRowsTemplate: '<div class="empty"><div class="empty-img"></div><div class="empty-txt">데이타가 없습니다.</div></div>',
};
const normalGridDiv = document.querySelector("#normalGrid");
normalGridApi = agGrid.createGrid(normalGridDiv, normalGridOptions);