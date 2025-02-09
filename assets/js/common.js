'use strict'

// bootstrap
import "./vendors/bootstrap.bundle.min.js";
// ag grid
import "./vendors/ag-grid-community.min.js";
// select
import "./components/select.js";


 $(document).ready(function() {
    $('.datepicker').datepicker({
        format: 'yyyy-mm-dd',
        autoclose: true,
        todayHighlight: true
    });
    var startDate = $('#startDate').datepicker({
        format: 'yyyy-mm-dd',
        autoclose: true,
        todayHighlight: true
    }).on('changeDate', function(e) {
        var startDateVal = e.date;
        $('#endDate').datepicker('setStartDate', startDateVal);
    });

    var endDate = $('#endDate').datepicker({
        format: 'yyyy-mm-dd',
        autoclose: true,
        todayHighlight: true
    }).on('changeDate', function(e) {
        var endDateVal = e.date;
        $('#startDate').datepicker('setEndDate', endDateVal);
    });
});