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
    <h2 class="lnb-tit" data-main-title="관리자">관리자</h2>
    <!--// lnb title  -->

    <ul class="lnb-list">
        <li class="lnb-item">
            <a href="#" class="lnb-btn lnb-link" data-sub-title="공지사항관리">공지사항관리</a>
        </li>
        <li class="lnb-item">
            <a href="#" class="lnb-btn lnb-link" data-sub-title="정기점검관리">정기점검관리</a>
        </li>
        <li class="lnb-item">
            <a href="#" class="lnb-btn lnb-link" data-sub-title="지침및메뉴얼관리">지침및메뉴얼관리</a>
        </li>
        <li class="lnb-item">
            <a href="#" class="lnb-btn lnb-link" data-sub-title="메뉴 관리">메뉴 관리</a>
        </li>
        <li class="lnb-item">
            <a href="#" class="lnb-btn lnb-link" data-sub-title="권한별 메뉴 관리">권한별 메뉴 관리</a>
        </li>
        <li class="lnb-item">
            <a href="#" class="lnb-btn lnb-link" data-sub-title="페이지관리">페이지관리</a>
        </li>
        <li class="lnb-item">
            <a href="#" class="lnb-btn lnb-link" data-sub-title="사용자 관리">사용자 관리</a>
        </li>
        <li class="lnb-item">
            <a href="#" class="lnb-btn lnb-link" data-sub-title="공통코드 관리">공통코드 관리</a>
        </li>
        <li class="lnb-item">
            <a href="#" class="lnb-btn lnb-link" data-sub-title="인사이동 관리">인사이동 관리</a>
        </li>
        <li class="lnb-item">
            <a href="#" class="lnb-btn lnb-link" data-sub-title="USB저장매체사용현황">USB저장매체사용현황</a>
        </li>
        <li class="lnb-item">
            <a href="#" class="lnb-btn lnb-link" data-sub-title="스티커사용현황">스티커사용현황</a>
        </li>
    </ul>
</nav>
<!--// 좌측 메뉴 영역 -->
`