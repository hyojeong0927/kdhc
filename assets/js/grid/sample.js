const rowData = [
    {
        name: "민지",
        birth: new Date("2004-05-07"),
        nationality: "대한민국",
        input: "",
        boolean: true,
        language: "English",
        number: 1,
    },
    {
        name: "하니",
        birth: new Date("2004-10-06"),
        nationality: "호주|베트남",
        input: "입력값2",
        boolean: false,
        language: "Spanish",
        number: 2,
    },
    {
        name: "다니엘",
        birth: new Date("2005-04-11"),
        nationality: "호주|,한국",
        input: "입력값3",
        boolean: true,
        language: "French",
        number: 0,
    },
    {
        name: "해린",
        birth: new Date("2006-05-15"),
        nationality: "대한민국",
        input: "입력값4",
        boolean: false,
        language: "",
        number: 0,
    },
    {
        name: "혜인",
        birth: new Date("2008-04-21"),
        nationality: "대한민국",
        input: "입력값5",
        boolean: false,
        language: "other",
        number: 6,
    }
];
const languages = ["English", "Spanish", "French", "Portuguese", "(other)"];

const columnDefs = [
    {
        headerName: "이름(agTextCellEditor)",
        field: "name",
        headerClass: "colspan",
        cellEditor: "agTextCellEditor",
        tooltipField: "country",
        headerTooltip: "Tooltip for Athlete Column Header",
    },
    {
        headerName: "생일(agDateCellEditor)",
        field: "birth",
        headerClass: "colspan",
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
        headerName: "국적(tooltipValueGetter)",
        field: "nationality",
        headerClass: "colspan",
        cellStyle: { textAlign: "center" },
        tooltipValueGetter: (p) =>
            "This is a dynamic tooltip using the value of " + p.value,
            headerTooltip: "Tooltip for Age Column Header",
    },
    {
        headerName: "입력(rowIndex)",
        field: "input",
        headerClass: "colspan",
        cellEditor: "agTextCellEditor",
        cellClassRules: {
            "empty-input": (params) => !params.value || params.value.trim() === "", 
        },
        valueFormatter: function (params) {
            const editingCells = params.api.getEditingCells();
            const isEditing = editingCells.some(cell => 
                cell.rowIndex === params.node.rowIndex && cell.column.getId() === params.column.getId()
            );
            return !isEditing && (!params.value || params.value.trim() === "") ? "입력하세요" : params.value;
        },
        // 특정 인덱스에만 넣을 경우
        // cellRenderer: (params) => {
        //     const rowIndex = params.node.rowIndex;
        //     if (rowIndex === 0) {
        //         const values = params.value ? params.value.split(",") : [];
        //         return `
        //             <input type="text" value="${values.includes("1") ? "1" : ""}" />
        //         `;
        //     } else {
        //         return params.value || "";
        //     }
        // }
    },
  
    {
        headerName: "colspan(sort 안됨)",
        headerClass: "colspan",
        children: [
            {
                headerName: "3.1",
                field: "boolean",
                width: 50,
                headerClass: "header-hidden",
                cellEditor: "agCheckboxCellEditor",
            },
            {
                headerName: "3.2",
                field: "boolean",
                width: 50,
                headerClass: "header-hidden",
                cellEditor: "agCheckboxCellEditor",
            },
            {
                headerName: "3.3",
                field: "boolean",
                width: 50,
                headerClass: "header-hidden",
                cellRenderer: "agCheckboxCellRenderer",
                cellEditor: "agCheckboxCellEditor",
            }
        ]
    },
    {
        headerName: "Select Editor",
        field: "language",
        headerClass: "colspan",
        cellEditor: "agSelectCellEditor",
        cellEditorParams: {
            values: languages,
        },
        cellClassRules: {
            "empty-input": (params) => !params.value || params.value.trim() === "",
        },
        valueFormatter: function (params) {
            if (!params.node || !params.column || !params.api) {
                return params.value || "선택하세요";
            }
            const editingCells = params.api.getEditingCells();
            const isEditing = editingCells.some(cell => 
                cell.rowIndex === params.node.rowIndex && cell.column.getId() === params.column.getId()
            );
            return !isEditing && (!params.value || params.value.trim() === "")
                ? "선택하세요"
                : params.value;
        },
    },
    {
        headerName: "Number Cell Editor",
        field: "number",
        headerClass: "colspan",
        cellEditor: "agNumberCellEditor",
        cellEditorParams: {
            min: 0,
            max: 100
        }
    },
];
class CustomMultiNumberCellEditor {
    init(params) {
        this.params = params;
        this.container = document.createElement("div");
        this.container.style.display = "flex";
        this.container.style.gap = "5px";

        const values = params.value ? params.value.split(",") : ["", "", ""];
        this.inputs = [];
        for (let i = 0; i < 3; i++) {
            const input = document.createElement("input");
            input.type = "number";
            input.value = values[i] || "";
            input.style.width = "50px";
            input.addEventListener("input", () => {
                input.value = input.value.replace(/[^\d]/g, "");
            });
            this.inputs.push(input);
            this.container.appendChild(input);
        }
    }
    getGui() {
        return this.container;
    }
    getValue() {
        return this.inputs.map(input => input.value || "").join(",");
    }
    destroy() {
    }
}

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
    pagination: true,
    // paginationPageSize: 10,
    // paginationPageSizeSelector: [10, 20, 50, 100],
    tooltipShowDelay: 500,
};

const sampleGridDiv = document.querySelector("#sampleGrid");
sampleGridApi = agGrid.createGrid(sampleGridDiv, sampleGridOptions);