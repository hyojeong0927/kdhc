export const normalColumnDefs = [
    {
        headerName: "문서번호",
        headerClass: "center",
        field: "field01",
        width: 88,
        cellClass: "cell-normal",
    },
    {
        headerName: "자산관리번호",
        headerClass: "center",
        field: "field02",
        width: 120,
        cellClass: "cell-normal",
    },
        {
        headerName: "시스템명",
        headerClass: "center",
        field: "field03",
        width: 181,
        cellClass: "cell-normal",
    },
    {
        headerName: "기안부서",
        headerClass: "center",
        field: "field04",
        width: 92,
        cellClass: "cell-normal",
    },
    {
        headerName: "기안자",
        headerClass: "center",
        field: "field05",
        width: 76,
        cellClass: "cell-normal",
    },
    {
        headerName: "반입/반출",
        headerClass: "center",
        field: "field06",
        width: 125,
        cellClass: "cell-normal",
    },
    {
        headerName: "기안일자",
        headerClass: "center",
        field: "field07",
        width: 100,
        cellClass: "cell-normal",
    },
    {
        headerName: "결재일자",
        headerClass: "center",
        field: "field08",
        width: 100,
        cellClass: "cell-normal",
    },
    {
        headerName: "반입일자",
        headerClass: "center",
        field: "field09",
        width: 100,
        cellClass: "cell-normal",
    },
    {
        headerName: "반출일자",
        headerClass: "center",
        field: "field10",
        width: 120,
        cellClass: "cell-normal",
    },
    {
        headerName: "결재/승인 상태",
        headerClass: "center",
        field: "field11",
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

export const colspanColumnDefs = [
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

export const rowspanColumnDefs = [ 
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
export const inputColumnDefs = [

]