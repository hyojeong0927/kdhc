document.getElementById('toggleButton').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    var menuIcon = document.getElementById('menuIcon');

    sidebar.classList.toggle('collapsed');

    if (sidebar.classList.contains('collapsed')) {
        menuIcon.classList.remove('arrow-close');
        menuIcon.classList.add('arrow-expansion');
    } else {
        menuIcon.classList.remove('arrow-expansion');
        menuIcon.classList.add('arrow-close');
    }
});

document.querySelectorAll('.lnb-item').forEach(function(item) {
    item.addEventListener('click', function() {
        document.querySelectorAll('.lnb-item').forEach(function(otherItem) {
            otherItem.classList.remove('active');
        });
        this.classList.add('active');
    });
});

// top nav
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            // 모든 nav-link에서 active 클래스 제거
            navLinks.forEach(item => item.classList.remove("active"));

            // 현재 클릭된 nav-link에 active 클래스 추가
            this.classList.add("active");
        });
    });
});