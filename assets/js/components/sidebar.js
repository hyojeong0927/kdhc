$(document).ready(function () {
    $('#toggleButton').on('click', function () {
        var $sidebar = $('#sidebar');
        var $menuIcon = $('#menuIcon');

        $sidebar.toggleClass('collapsed');

        if ($sidebar.hasClass('collapsed')) {
            $sidebar.stop(true, true).animate({
                width: 'rem(60px)'
            }, 300);
            $menuIcon.removeClass('arrow-close').addClass('arrow-expansion');
        } else {
            $sidebar.stop(true, true).animate({
                width: '$sidebar-width'
            }, 300);
            $menuIcon.removeClass('arrow-expansion').addClass('arrow-close');
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
