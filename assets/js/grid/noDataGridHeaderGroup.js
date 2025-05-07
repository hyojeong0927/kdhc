const noDataColRowData = [
    
];
const noDataColspanColumnDefs = [
    {
        headerName: "순번",
        headerClass: "center",
        field: "field01",
        width: 72,
        cellClass: "cell-normal",
        valueGetter: "node.rowIndex + 1"
    },
    {
        headerName: "열원구분",
        headerClass: "center",
        field: "field02",
        minWidth: 238,
        flex: 1,
        cellClass: "cell-normal",
    },
    {
        headerName: "자산분류",
        headerClass: "center",
        field: "field03",
        minWidth: 238,
        flex: 1,
        cellClass: "cell-normal",
    },
    {
        headerName: "자산관리번호\n(00-Controller-No)",
        headerClass: "center",
        field: "field04",
        width: 160,
        cellClass: "cell-normal",
    },
    {
        headerName: "구축시기 (년.월)",
        headerClass: "center",
        field: "field05",
        width: 140,
        cellClass: "cell-normal",
    },
    {
        headerName: "자산위치",
        headerClass: "center",
        field: "field06",
        width: 140,
        cellClass: "cell-normal",
    },
    {
        headerName: "관리부서",
        headerClass: "center",
        cellClass: "cell-normal",
        children: [
            {
                headerName: "부서명",
                headerClass: "center",
                field: "field07",
                width: 140,
                cellClass: "cell-normal",
            },
            {
                headerName: "제어보호차(팀)장",
                headerClass: "center",
                field: "field08",
                width: 140,
                cellClass: "cell-normal",
            },
        ]
    },
    {
        headerName: "제어보호담당자",
        headerClass: "center",
        field: "field09",
        width: 130,
        cellClass: "cell-normal",
    },
    {
        headerName: "제어보호담당관",
        headerClass: "center",
        field: "field10",
        width: 130,
        cellClass: "cell-normal",
    },
    {
        headerName: "관리자 (지사장)",
        headerClass: "center",
        field: "field11",
        width: 130,
        cellClass: "cell-normal",
    },
    {
        headerName: "자산중요도",
        headerClass: "center",
        cellClass: "cell-normal",
        children: [
            {
                headerName: "가용성",
                headerClass: "center",
                field: "field12",
                width: 120,
                cellClass: "cell-normal",
            },
            {
                headerName: "무결성",
                headerClass: "center",
                field: "field13",
                width: 120,
                cellClass: "cell-normal",
            },
            {
                headerName: "기밀성",
                headerClass: "center",
                field: "field14",
                width: 120,
                cellClass: "cell-normal",
            },
            {
                headerName: "합계",
                headerClass: "center",
                field: "field15",
                width: 120,
                cellClass: "cell-normal",
            }
        ]
    },
    {
        headerName: "긴급도",
        headerClass: "center",
        field: "field16",
        width: 120,
        cellClass: "cell-normal",
    },
    {
        headerName: "업무영향도 합계",
        headerClass: "center",
        field: "field17",
        width: 160,
        cellClass: "cell-normal",
    },
    {
        headerName: "등급",
        headerClass: "center",
        field: "field18",
        width: 60,
        cellClass: "cell-normal",
    },
    {
        headerName: "기반시설 지정여부",
        headerClass: "center",
        field: "field19",
        width: 160,
        cellClass: "cell-normal",
    },
    {
        headerName: "IP Address",
        headerClass: "center",
        field: "field20",
        width: 160,
        cellClass: "cell-normal",
    },
    {
        headerName: "Mac Address",
        headerClass: "center",
        field: "field21",
        width: 140,
        cellClass: "cell-normal",
    },
    {
        headerName: "시스템 용도",
        headerClass: "center",
        field: "field22",
        width: 120,
        cellClass: "cell-normal",
    },
    {
        headerName: "시스템 명",
        headerClass: "center",
        field: "field23",
        width: 120,
        cellClass: "cell-normal",
    },
];
let noDataColspanGridApi;

const noDataColspanGridOptions = {
    defaultColDef: {
        editable: false, // edit 사용 유무
        autoHeight: true,
        sortable: true, // sort 사용 유무
    },
    columnDefs: noDataColspanColumnDefs,
    headerHeight: 39, // header height
    rowData: noDataColRowData,
    rowHeight: 48, // row height
    domLayout: "autoHeight", // 2025-02-19 추가 옵션
    suppressColumnVirtualisation: true, // 2025-02-19 추가 옵션
    // data empty style
    overlayNoRowsTemplate: '<div class="empty"><div class="empty-img"></div><div class="empty-txt">데이타가 없습니다.</div></div>',
};
const noDataColspanGridDiv = document.querySelector("#noDataColspanGrid");
noDataColspanGridApi = agGrid.createGrid(noDataColspanGridDiv, noDataColspanGridOptions);