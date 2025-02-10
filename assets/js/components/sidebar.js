document.getElementById('toggleButton').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    var menu = document.getElementById('menu');
    var menuIcon = document.getElementById('menuIcon');

    sidebar.classList.toggle('collapsed');
    // menu.classList.toggle('collapse');
    
    if (sidebar.classList.contains('collapsed')) {
      menuIcon.classList.remove('arrow-close');
      menuIcon.classList.add('arrow-expansion');
    } else {
      menuIcon.classList.remove('arrow-expansion');
      menuIcon.classList.add('arrow-close');
    }
});