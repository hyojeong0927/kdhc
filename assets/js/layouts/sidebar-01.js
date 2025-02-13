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
    <h2 class="lnb-tit" data-main-title="관리보안">관리보안</h2>
    <!--// lnb title  -->

    <ul class="lnb-list">
        <li class="lnb-item">
            <a href="#" class="lnb-btn lnb-link" data-sub-title="월간사이버보안점검">월간사이버보안점검</a>
        </li>
        <li class="lnb-item">
            <a href="#" class="lnb-btn lnb-link" data-sub-title="클린 PC 점검">클린 PC 점검</a>
        </li>
    </ul>
</nav>
<!--// 좌측 메뉴 영역 -->
`