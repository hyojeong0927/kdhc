let gridApi;

const columnDefs = [
  {
    headerCheckboxSelection: true,
    checkboxSelection: true,
    width: 50,
  },
  {
    field: "category",
    editable: true,
    cellEditor: 'agTextCellEditor',
  },
  { field: "item" },
  { field: "price" },
  {
    field: "선택",
    editable: true,
    cellEditor: 'agSelectCellEditor',
    cellRenderer: (params) => {
      // Return the value as a set of checkboxes (for display purpose)
      const values = params.value ? params.value.split(',') : [];
      return `<input type="checkbox" ${values.includes('1') ? 'checked' : ''} /> 1
              <input type="checkbox" ${values.includes('2') ? 'checked' : ''} /> 2
              <input type="checkbox" ${values.includes('3') ? 'checked' : ''} /> 3`;
    },
    // This can also be implemented in a more sophisticated way using a custom editor
    valueSetter: (params) => {
      // Get the selected checkbox values and update the model
      const selectedValues = [];
      if (params.newValue.includes('1')) selectedValues.push('1');
      if (params.newValue.includes('2')) selectedValues.push('2');
      if (params.newValue.includes('3')) selectedValues.push('3');
      params.data[params.colDef.field] = selectedValues.join(',');
      return true;
    }
  },
];

const rowData = [
  { category: "Electronics", item: "Laptop", price: 1000, 선택: "1" },
  { category: "Electronics", item: "Phone", price: 500, 선택: "2" },
  { category: "Electronics", item: "Tablet", price: 300, 선택: "3" },
  { category: "Furniture", item: "Chair", price: 100, 선택: "1,3" },
  { category: "Furniture", item: "Table", price: 200, 선택: "2" },
];

const gridOptions = {
  columnDefs: columnDefs,
  rowData: rowData,
  defaultColDef: {
    resizable: true,
  },
  suppressRowClickSelection: true,
};

const gridDiv = document.querySelector("#myGrid");
gridApi = agGrid.createGrid(gridDiv, gridOptions);