const rowData = [
    {
        field01: "판교-25-0001",
        field02: "정보자산 반·출입대장",
        field03: "노트북-판교-0002",
        field04: "네트워크설비 유지보수",
        field05: "계전부",
        field06: "홍창기",
        field07: "반출",
        field08: "2024.12.12 12:24:30",
        field09: "2024.12.12 12:24:30",
        field10: "2024.12.12 12:24:30",
        field11: "",
    },
    {
        field01: "판교-25-0002",
        field02: "정보자산 반·출입대장",
        field03: "노트북-판교-0003",
        field04: "OVATION",
        field05: "계전부",
        field07: "홍창기",
        field08: "반입",
        field09: "2024.12.12 12:24:30",
        field10: "2024.12.12 12:24:30",
        field11: "2024.12.12 12:24:30",
        field12: "",
    },
];

const columnDefs = [
    {
        headerName: "문서번호",
        field: "field01",
    },
    {
        headerName: "결재명",
        field: "field02",
    },
    {
        headerName: "자산관리번호",
        field: "field03",
    },
    {
        headerName: "시스템명",
        field: "field04",
    },

    {
        headerName: "기안부서",
        field: "field05",
    },
    {
        headerName: "기안자",
        field: "field06",
    },
    {
        headerName: "반입/반출",
        field: "field07",
    },
    {
        headerName: "기안일자",
        field: "field08",
    },
    {
        headerName: "결재일자",
        field: "field09",
    },
    {
        headerName: "반입일자",
        field: "field10",
    },
    {
        headerName: "결재/ 승인 상태",
        field: "field11",
    },
];

let sampleGridApi;

const sampleGridOptions = {
    defaultColDef: {
        width: 200,
        editable: true,
    },
    columnDefs,
    rowData: rowData,
    rowHeight: 45,
    rowSelection: {
        mode: "multiRow",
        groupSelects: "descendants",
    },
    pagination: false,
    tooltipShowDelay: 500,
};

const sampleGridDiv = document.querySelector("#sampleGrid");
sampleGridApi = agGrid.createGrid(sampleGridDiv, sampleGridOptions);