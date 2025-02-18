$(document).ready(function() {
    var treeData = [
        {
            text: "Root",
            href: "#root0",
            selectable: false,
        },
        {
            text: "관리보안",
            class: 'parents',
            href: "#root1",
            selectable: false,
            state: { expanded: true },
            nodes: [
                { text: "자산정보세부현황", href: "#", icon: "tree-doc" },
                { text: "월간사이버보안점검", href: "#", icon: "tree-doc" }
            ]
        },
        {
            text: "물리보안",
            href: "#root2",
            selectable: false,
            nodes: [
                { text: "봉인장치사용내역", href: "#", icon: "tree-doc" },
                { text: "영상정보장치점검관리", href: "#", icon: "tree-doc" }
            ]
        },
        {
            text: "기술보안",
            href: "#root3",
            selectable: false,
            nodes: [
                { text: "계정관리", href: "#", icon: "tree-doc" },
                { text: "자산정보세부현황", href: "#", icon: "tree-doc" },
                { text: "공개취약점내역", href: "#", icon: "tree-doc" },
                { text: "공개취약점조치유예", href: "#", icon: "tree-doc" },
                { text: "로그분석결과", href: "#", icon: "tree-doc" },
                { text: "원격접속내역", href: "#", icon: "tree-doc" }
            ]
        },
        {
            text: "보안정책",
            href: "#root3",
            selectable: false,
            nodes: [
                { text: "백신운영현황", href: "#", icon: "tree-doc" },
                { text: "백신미운영현황", href: "#", icon: "tree-doc" },
                { text: "백신정책세부내역", href: "#", icon: "tree-doc" },
                { text: "운영체제보안패치업데이트현황", href: "#", icon: "tree-doc" },
                { text: "운영체제소프트웨어업데이트현황", href: "#", icon: "tree-doc" },
                { text: "공정제어설비운영체제현황", href: "#", icon: "tree-doc" },
                { text: "네트워크장비소프트웨어현황", href: "#", icon: "tree-doc" },
                { text: "보안패치미운영월간점검", href: "#", icon: "tree-doc" },
                { text: "비밀번호정책운영", href: "#", icon: "tree-doc" },
                { text: "비밀번호변경불가월간점검", href: "#", icon: "tree-doc" },
                { text: "계정 로그일일점검내역", href: "#", icon: "tree-doc" }
            ]
        },
        {
            text: "클린PC",
            href: "#root3",
            selectable: false,
            nodes: [
                { text: "휴대용저장매체사용등록 관리", href: "#", icon: "tree-doc" },
                { text: "휴대용저장매체사용내역", href: "#", icon: "tree-doc" },
                { text: "휴대용저장매체점검내역", href: "#", icon: "tree-doc" },
                { text: "클린PC사용내역", href: "#", icon: "tree-doc" },
                { text: "클린PC반출입내역", href: "#", icon: "tree-doc" }
            ]
        },
        {
            text: "정보자산",
            href: "#root3",
            selectable: false,
            nodes: [
                { text: "자산정보관리", href: "#", icon: "tree-doc" },
                { text: "노트북사용", href: "#", icon: "tree-doc" },
                { text: "정보자산반출입내역", href: "#", icon: "tree-doc" }
            ]
        },
        {
            text: "관리자",
            href: "#root3",
            class: "last-child",
            selectable: false,
            nodes: [
                { text: "관리자1", href: "#", icon: "tree-doc" },
                { text: "관리자2", href: "#", icon: "tree-doc" },
                { text: "관리자3", href: "#", icon: "tree-doc", class: "nav-level-3" }
            ]
        }
    ];

    $('#treeview').treeview({
        data: treeData,
        expandIcon: 'icon tree-plus',
        collapseIcon: 'icon tree-minus',
        nodeIcon: 'icon tree-folder-close',
        levels: 1,
        showBorder: false,
        highlightSelected: true,
        enableLinks: true,
    });

    // id에 클래스 추가
    // $('[data-nodeid="3"]').addClass('last-child');
    // $('[data-nodeid="6"]').addClass('last-child');
    // $('[data-nodeid="13"]').addClass('last-child');
    // $('[data-nodeid="25"]').addClass('last-child');
    // $('[data-nodeid="31"]').addClass('last-child');
    // $('[data-nodeid="35"]').addClass('last-child');
    // $('[data-nodeid="36"]').addClass('last-parent');
    // $('[data-nodeid="39"]').addClass('last-child');
});