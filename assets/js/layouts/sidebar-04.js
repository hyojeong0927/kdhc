const aside = document.querySelector("aside");
aside.innerHTML = `
<!-- 사이드바 열고 닫기 -->
<div class="sidebar-top-btn">
    <button id="toggleButton" class="btn-toggle" aria-label="사이드바 열고 닫기">
        <i id="menuIcon" class="icon arrow-close"></i> 
    </button>
</div>
<!--// 사이드바 열고 닫기 -->

<!-- 좌측 메뉴 영역 -->
<nav id="subMenu">

    <!-- lnb title : 웹접근성으로 인해 넣고 숨김 처리 되어 있음 -->
    <h2 class="lnb-tit" data-main-title="보안정책">보안정책</h2>
    <!--// lnb title  -->

    <ul class="lnb-list">
        <li class="lnb-item">
            <a href="#" class="lnb-btn lnb-link" data-sub-title="백신운영현황">백신운영현황</a>
        </li>
        <li class="lnb-item">
            <a href="#" class="lnb-btn lnb-link" data-sub-title="백신미운영현황">백신미운영현황</a>
        </li>
        <li class="lnb-item">
            <a href="#" class="lnb-btn lnb-link" data-sub-title="백신정책세부내역">백신정책세부내역</a>
        </li>
        <li class="lnb-item">
            <a href="#" class="lnb-btn lnb-link" data-sub-title="백신미운영월간점검현황">백신미운영월간점검현황</a>
        </li>
        <li class="lnb-item">
            <a href="#" class="lnb-btn lnb-link" data-sub-title="운영체제보안패치업데이트현황">운영체제보안패치업데이트현황</a>
        </li>
        <li class="lnb-item">
            <a href="#" class="lnb-btn lnb-link" data-sub-title="운영체제소프트웨어업데이트현황">운영체제소프트웨어업데이트현황</a>
        </li>
        <li class="lnb-item">
            <a href="#" class="lnb-btn lnb-link" data-sub-title="공정제어설비운영체제현황">공정제어설비운영체제현황</a>
        </li>
        <li class="lnb-item">
            <a href="#" class="lnb-btn lnb-link" data-sub-title="네트워크장비소프트웨어현황">네트워크장비소프트웨어현황</a>
        </li>
        <li class="lnb-item">
            <a href="#" class="lnb-btn lnb-link" data-sub-title="네트워크장비소프트웨어현황">네트워크장비소프트웨어현황</a>
        </li>
        <li class="lnb-item">
            <a href="#" class="lnb-btn lnb-link" data-sub-title="보안패치미운영월간점검">보안패치미운영월간점검</a>
        </li>
        <li class="lnb-item">
            <a href="#" class="lnb-btn lnb-link" data-sub-title="비밀번호정책운영">비밀번호정책운영</a>
        </li>
        <li class="lnb-item">
            <a href="#" class="lnb-btn lnb-link" data-sub-title="비밀번호변경불가월간점검">비밀번호변경불가월간점검</a>
        </li>
        <li class="lnb-item">
            <a href="#" class="lnb-btn lnb-link" data-sub-title="계정로그일일점검내역">계정로그일일점검내역</a>
        </li>
    </ul>
</nav>
<!--// 좌측 메뉴 영역 -->
`