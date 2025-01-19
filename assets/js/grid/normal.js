let normalGridApi;

const normalGridOptions = {
    columnDefs: [
        { field: "athlete", width: 150, editable: true, cellEditor: 'agTextCellEditor' },
        { field: "age", width: 90, editable: true, cellEditor: 'agTextCellEditor' },
        { field: "country", width: 150, editable: true, cellEditor: 'agTextCellEditor' },
        { field: "year", width: 90, editable: true, cellEditor: 'agTextCellEditor' },
        { field: "date", width: 150, editable: true, cellEditor: 'agTextCellEditor' },
        { field: "sport", width: 150, editable: true, cellEditor: 'agTextCellEditor' },
        { field: "gold", width: 100, editable: true, cellEditor: 'agTextCellEditor' },
        { field: "silver", width: 100, editable: true, cellEditor: 'agTextCellEditor' },
        { field: "bronze", width: 100, editable: true, cellEditor: 'agTextCellEditor' },
        { field: "total", width: 100, editable: true, cellEditor: 'agTextCellEditor' },
    ],
    autoSizeStrategy: {
        type: 'fitGridWidth',
        defaultMinWidth: 50
    },
};

const normalGridDiv = document.querySelector("#normalLayout");
normalGridApi = agGrid.createGrid(normalGridDiv, normalGridOptions);

fetch("https://www.ag-grid.com/example-assets/olympic-winners.json")
  .then((response) => response.json())
  .then((data) => normalGridApi.setGridOption("rowData", data));