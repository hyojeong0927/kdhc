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
    <h2 class="lnb-tit" data-main-title="물리보안">물리보안</h2>
    <!--// lnb title  -->

    <ul class="lnb-list">
        <li class="lnb-item">
            <a href="#" class="lnb-btn lnb-link" data-sub-title="영상정보장치점검">영상정보장치점검</a>
        </li>
        <li class="lnb-item">
            <a href="#" class="lnb-btn lnb-link" data-sub-title="봉인장치사용내역">봉인장치사용내역</a>
        </li>
    </ul>
</nav>
<!--// 좌측 메뉴 영역 -->
`