import { customInputSearchEditor } from "../../../assets/js/components/agGridComponents.js"

const indexRowData = [
    {
        field01: "",
        field02: "checked",
        field03: "판교",
        field04: "",
        field05: "987654",
        field06: "",
        field07: "",
        field08: "",
        field09: "",
    },
    {
        field01: "",
        field02: "checked",
        field03: "판교",
        field04: "",
        field05: "987654",
        field06: "",
        field07: "",
        field08: "",
        field09: "",
    },
    {
        field01: "",
        field02: "",
        field03: "대구",
        field04: "",
        field05: "987654",
        field06: "",
        field07: "",
        field08: "",
        field09: "",
    },
    {
        field01: "",
        field02: "",
        field03: "광교",
        field04: "",
        field05: "987654",
        field06: "",
        field07: "",
        field08: "",
        field09: "",
    },
    {
        field01: "",
        field02: "",
        field03: "판교",
        field04: "",
        field05: "987654",
        field06: "",
        field07: "",
        field08: "",
        field09: "",
    },
];
const indexColumnDefs = [
    {
        headerName: "순번",
        headerClass: "center",
        field: "field01",
        width: 88,
        cellClass: "cell-normal",
        valueGetter: "node.rowIndex + 1"
    },
    {
        headerName: "주부서",
        headerClass: "center",
        field: "field02",
        width: 88,
        cellClass: "cell-normal",
        cellEditor: 'agCheckboxCellEditor',
        cellRenderer: params => {
            return `
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" ${params.value ? 'checked' : ''}>
                    <label class="form-check-label hidden" for="flexCheckDefault1">default</label>
                </div>
            `;
        }
    },
    {
        headerName: "지사",
        headerClass: "center",
        field: "field03",
        width: 120,
        cellClass: "cell-normal",
    },
    {
        headerName: "이름",
        headerClass: "center",
        field: "field04",
        width: 180,
        cellClass: "cell-normal input",
        cellEditor: 'customInputSearchEditor',
        cellRenderer: (params) => {
            const value = params.value;

            if (!value) {
                return `
                    <!-- input-search-group is-error -->
                    <div class="input-search-group">
                        <input type="search" class="form-control" id="search1" placeholder="이름" value="">
                        <label class="input-group-text" for="search1"><i class="icon search"></i></label>
                    </div>
                    <!--// input search group end -->
                `;
            } else {
                return value;
            }
        }
    },
    {
        headerName: "사번",
        headerClass: "center",
        field: "field05",
        width: 120,
        cellClass: "cell-normal",
    },
    {
        headerName: "부서",
        headerClass: "center",
        field: "field06",
        minWidth: 150,
        flex: 1,
        cellClass: "cell-normal input",
        editable: true,
        cellRenderer: (params) => {
            const value = params.value;

            if (!value) {
                return `
                        <!-- select-group is-error -->
                        <div class="select-group">
                            <select class="form-select" aria-label="Default select" required>
                                <option value="" selected>선택</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
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
        headerName: "부서과",
        headerClass: "center",
        field: "field07",
        minWidth: 150,
        flex: 1,
        cellClass: "cell-normal input",
        editable: true,
        cellRenderer: (params) => {
            const value = params.value;

            if (!value) {
                return `
                        <!-- select-group is-error -->
                        <div class="select-group">
                            <select class="form-select" aria-label="Default select" required>
                                <option value="" selected>선택</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
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
        headerName: "권한",
        headerClass: "center",
        field: "field08",
        minWidth: 220,
        flex: 1,
        cellClass: "cell-normal input",
        editable: true,
        cellRenderer: (params) => {
            const value = params.value;

            if (!value) {
                return `
                    <!-- select-group is-error -->
                    <div class="select-group">
                        <select class="form-select" aria-label="Default select" required>
                            <option value="" selected>선택</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
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
        headerName: "삭제",
        headerClass: "center",
        field: "field09",
        width: 112,
        cellClass: "cell-normal",
        cellRenderer: params => {
            return '<button type="button" class="btn btn-icon"><i class="icon del-trash" /></button>';
        }
    }
];
let indexGridApi;

const indexGridOptions = {
    defaultColDef: {
        editable: true, // edit 사용 유무
        autoHeight: true,
        sortable: false, // sort 사용 유무
    },
    columnDefs: indexColumnDefs,
    headerHeight: 41, // header height
    rowData: indexRowData,
    rowHeight: 56, // row height // 2025-02-19 수정
    domLayout: "autoHeight", // 2025-02-19 추가 옵션
    suppressColumnVirtualisation: true, // 2025-02-19 추가 옵션
    components: {
        customInputSearchEditor
    },
    // data empty style
    overlayNoRowsTemplate: '<div class="empty"><div class="empty-img"></div><div class="empty-txt">데이타가 없습니다.</div></div>',
};
const indexGridDiv = document.querySelector("#indexGrid");
indexGridApi = agGrid.createGrid(indexGridDiv, indexGridOptions);