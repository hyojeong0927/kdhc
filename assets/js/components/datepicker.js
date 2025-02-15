$(document).ready(function() {
    $('.datepicker').datepicker({
        format: 'yyyy-mm-dd',
        autoclose: true,
        language: 'ko',
        todayHighlight: true,
        minViewMode: 1,
    });

    $('#startDate').datepicker({
        format: 'yyyy-mm-dd',
        autoclose: true,
        todayHighlight: true,
        language: 'ko'
    }).on('changeDate', function(e) {
        $('#endDate').datepicker('setStartDate', e.date);
    });
    
    $('#endDate').datepicker({
        format: 'yyyy-mm-dd',
        autoclose: true,
        todayHighlight: true,
        language: 'ko'
    }).on('changeDate', function(e) {
        $('#startDate').datepicker('setEndDate', e.date);
    });
     
});
