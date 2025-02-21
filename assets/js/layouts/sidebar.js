document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const menuData = JSON.parse(sidebar.getAttribute("data-menu"));

    if (!menuData || !Array.isArray(menuData)) return;

    let menuHTML = `
        <div class="sidebar-top-btn">
            <button id="toggleButton" class="btn-toggle" aria-label="사이드바 열고 닫기">
                <i id="menuIcon" class="icon arrow-close"></i>
            </button>
        </div>
        <nav class="sidebar-menu"><ul class="lnb-list">`;

    menuData.forEach(item => {
        const isActive = item.active ? "active" : "";
        
        menuHTML += `
            <li class="lnb-item ${isActive}">
                <a href="${item.url}" class="lnb-btn lnb-link" data-name="${item.name}">
                    ${item.name}
                </a>
            </li>
        `;
    });

    menuHTML += `</ul></nav>`;

    sidebar.innerHTML = menuHTML;

    const menuItems = sidebar.querySelectorAll(".lnb-link");
    menuItems.forEach(item => {
        item.addEventListener("click", function (event) {
            event.preventDefault();

            menuItems.forEach(el => el.classList.remove("active"));

            this.classList.add("active");

            console.log(`선택한 메뉴: ${this.dataset.name}`);
        });
    });
});
