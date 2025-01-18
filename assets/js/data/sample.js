let gridApi;

const gridOptions = {
  columnDefs: [
    { field: "athlete", width: 150 },
    { field: "age", width: 90 },
    { 
      field: "country", 
      width: 150,
      editable: true,
    },
    { field: "year", width: 90 },
    { field: "date", width: 150 },
    { field: "sport", width: 150 },
    { field: "gold", width: 100 },
    { field: "silver", width: 100 },
    { field: "bronze", width: 100 },
    { field: "total", width: 100 },
    { 
      field: "선택", 
      width: 300,
      colSpan: function(params) {
        return 3;
      },
      cellRenderer: function(params) {
        const container = document.createElement('div');
        container.style.display = 'flex';
        container.style.gap = '10px';

        const numberOfCheckboxes = 3;
        const values = params.value || Array(numberOfCheckboxes).fill(false);

        for (let i = 0; i < numberOfCheckboxes; i++) {
          const checkbox = document.createElement('input');
          checkbox.type = 'checkbox';
          checkbox.checked = values[i];
          checkbox.addEventListener('change', () => {
            values[i] = checkbox.checked;
            params.setValue(values);
          });

          container.appendChild(checkbox);
        }

        return container;
      },
    },
  ],
  
};

function fillLarge() {
  setWidthAndHeight("100%");
}

function fillMedium() {
  setWidthAndHeight("60%");
}

function fillExact() {
  setWidthAndHeight("700px");
}

function setWidthAndHeight(size) {
  const eGridDiv = document.querySelector("#myGrid");
  eGridDiv.style.setProperty("width", size);
  eGridDiv.style.setProperty("height", size);
}

const gridDiv = document.querySelector("#myGrid");
gridApi = agGrid.createGrid(gridDiv, gridOptions);

fetch("https://www.ag-grid.com/example-assets/olympic-winners.json")
  .then((response) => response.json())
  .then((data) => gridApi.setGridOption("rowData", data));