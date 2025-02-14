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
     $('#toggleButton').on('click', function () {
        var $sidebar = $('#sidebar');
        var $menuIcon = $('#menuIcon');
        var $subMenu = $('#subMenu');

        $sidebar.toggleClass('collapsed');
        $menuIcon.toggleClass('arrow-expansion arrow-close');

        if ($sidebar.hasClass('collapsed')) {
            $subMenu.stop(true, true).slideUp(300);
        } else {
            $subMenu.stop(true, true).slideDown(300);
        }
    });

    $('.lnb-item').on('click', function () {
        $('.lnb-item').removeClass('active');
        $(this).addClass('active');
    });

    $('.nav-link').on('click', function () {
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
    });
});
