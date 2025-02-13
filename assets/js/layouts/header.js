const header = document.querySelector("header");

header.innerHTML = `
    <h2 class="logo">
        <a href="../home/SB-USR-001.html" class="logo-img" data-title="한국지역난방공사">한국지역난방공사</a>
        <a href="../home/SB-USR-001.html" class="logo-txt" data-title="제어망 스마트 보안관리 플랫폼">제어망 스마트 보안관리 플랫폼</a>
    </h2>
    <div class="gnb">
        <ul class="util">
            <li class="util-01"><a href="#" data-title="결재관리">결재관리</a></li>
            <li class="util-02"><a href="#" data-title="정기점검">정기점검</a></li>
            <li class="util-03"><a href="#" data-title="지침 및 매뉴얼">지침 및 매뉴얼</a></li>
            <li class="util-04 user"><a href="#" data-title="홍길동 과장">홍길동 과장</a></li>
        </ul>
        <div class="header-action">
            <button type="button" class="btn btn-link">비밀번호변경</button>
            <button type="button" class="btn btn-link">로그아웃</button>
        </div>
        <nav>
            <ul class="nav">
                <li class="nav-item"><a class="nav-link active" aria-current="page" href="#" data-title="관리보안">관리보안</a></li>
                <li class="nav-item"><a class="nav-link" href="#" data-title="물리보안">물리보안</a></li>
                <li class="nav-item"><a class="nav-link" href="#" data-title="기술보안">기술보안</a></li>
                <li class="nav-item"><a class="nav-link" href="#" data-title="보안정책">보안정책</a></li>
                <li class="nav-item"><a class="nav-link" href="#" data-title="클린PC">클린PC</a></li>
                <li class="nav-item"><a class="nav-link" href="#" data-title="정보자산">정보자산</a></li>
            </ul>
        </nav>
    </div>
`