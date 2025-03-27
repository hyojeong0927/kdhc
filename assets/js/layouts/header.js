document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header#kdhc-header");
    if (!header) return;

    let menuData = [];

    try {
        const menuAttr = header.getAttribute("data-menu");
        menuData = menuAttr ? JSON.parse(menuAttr) : [];
    } catch (error) {
        console.error("Error parsing menu data:", error);
    }

    const navItems = menuData
        .map(item => 
            `<li class="nav-item">
                <a class="nav-link ${item.active ? "active" : ""}" href="${item.url}" data-title="${item.title}">
                    ${item.title}
                </a>
            </li>`
        )
        .join("");

    header.innerHTML += `
        <h2 class="logo">
            <a href="../home/SB-USR-001.html" class="logo-img" data-title="한국지역난방공사">한국지역난방공사</a>
            <a href="../home/SB-USR-001.html" class="logo-txt" data-title="제어망 스마트 보안관리 플랫폼">제어망 스마트 보안관리 플랫폼</a>
        </h2>
        <div class="gnb">
            <ul class="util">
                <li class="util-01"><a href="#" id="SB-USR-008" data-title="결재관리">결재관리</a></li>
                <li class="util-02"><a href="#" id="SB-GMR-004" data-title="정기점검">정기점검</a></li>
                <li class="util-03"><a href="#" id="SB-USR-005" data-title="지침 및 매뉴얼">지침 및 매뉴얼</a></li>
                <li class="util-04 user"><a href="#" data-title="홍길동 과장">홍길동 과장<em>계전보안부</em></a></li>
            </ul>
            <div class="header-action">
                <button type="button" class="btn btn-link" id="btn-change-password">비밀번호변경</button>
                <button type="button" class="btn btn-link" id="btn-logout">로그아웃</button>
            </div>
            <nav>
                <ul class="nav">
                    ${navItems}
                </ul>
            </nav>
        </div>
    `;

    // 이벤트 추가
    header.addEventListener("click", (event) => {
        const target = event.target;

        // 네비게이션 메뉴 클릭 이벤트
        if (target.classList.contains(".nav-link")) {
            event.preventDefault(); 
            console.log(`메뉴 클릭: ${target.getAttribute("data-title")}`);
        }

        // 유틸 메뉴 클릭 이벤트
        if (target.closest(".util li a")) {
            if (target.id === "SB-USR-008") {
                window.location.href = "../home/SB-USR-008.html";
            } else if (target.id === "SB-GMR-004") {
                window.location.href = "../gmr/SB-GMR-004.html";
            } else if (target.id === "SB-USR-005") {
                window.location.href = "../home/SB-USR-005.html";
            }
        }

        // 비밀번호 변경 버튼 클릭 이벤트
        if (target.id === "btn-change-password") {
            window.location.href = "../home/SB-USR-004.html";
        }

        // 로그아웃 버튼 클릭 이벤트
        if (target.id === "btn-logout") {
            alert("로그아웃 되었습니다.");
            window.location.href = "../home/SB-USR-003.html";
        }

    });
});
