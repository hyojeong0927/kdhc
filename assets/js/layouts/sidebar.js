document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const menuData = JSON.parse(sidebar.getAttribute("data-menu"));

    if (!menuData || !Array.isArray(menuData)) return;

    let menuHTML = `<nav class="sidebar-menu"><ul class="lnb-list">`;

    menuData.forEach(item => {
        const isActive = item.active ? "active" : "";
        menuHTML += `
            <li class="lnb-item">
                <a href="${item.url}" class="lnb-btn lnb-link ${isActive}" data-name="${item.name}">
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
