$(document).ready(function() {
    var treeData = [
    {
            text: "Root",
            href: "#root0",
            selectable: false,
        },
        {
            text: "관리보안",
            href: "#root1",
            selectable: false,
            state: { expanded: true }, 
            nodes: [
                {
                    text: "자산정보세부현황",
                    href: "#"
                },
                {
                    text: "월간사이버보안점검",
                    href: "#"
                }
            ]
        },
        {
            text: "물리보안",
            href: "#root2",
            selectable: false,
            nodes: [
                {
                    text: "봉인장치사용내역",
                    href: "#"
                },
                {
                    text: "영상정보장치점검관리",
                    href: "#"
                }
            ]
        },
        {
            text: "기술보안",
            href: "#root3",
            selectable: false,
            nodes: [
                {
                    text: "계정관리",
                    href: "#"
                },
                {
                    text: "자산정보세부현황",
                    href: "#"
                },
                {
                    text: "공개취약점내역",
                    href: "#"
                },
                {
                    text: "공개취약점조치유예",
                    href: "#"
                },
                {
                    text: "로그분석결과",
                    href: "#"
                },
                {
                    text: "원격접속내역",
                    href: "#"
                }
            ]
        },
        {
            text: "보안정책",
            href: "#root3",
            selectable: false,
            nodes: [
                {
                    text: "백신운영현황",
                    href: "#"
                },
                {
                    text: "백신미운영현황",
                    href: "#"
                },
                {
                    text: "백신정책세부내역",
                    href: "#"
                },
                {
                    text: "운영체제보안패치업데이트현황",
                    href: "#"
                },
                {
                    text: "운영체제소프트웨어업데이트현황",
                    href: "#"
                },
                {
                    text: "공정제어설비운영체제현황",
                    href: "#"
                },
                {
                    text: "네트워크장비소프트웨어현황",
                    href: "#"
                },
                {
                    text: "보안패치미운영월간점검",
                    href: "#"
                },
                {
                    text: "비밀번호정책운영",
                    href: "#"
                },
                {
                    text: "비밀번호변경불가월간점검",
                    href: "#"
                },
                {
                    text: "계정 로그일일점검내역",
                    href: "#"
                }
            ]
        },
        {
            text: "클린PC",
            href: "#root3",
            selectable: false,
            nodes: [
                {
                    text: "휴대용저장매체사용등록 관리",
                    href: "#"
                },
                {
                    text: "휴대용저장매체사용내역",
                    href: "#"
                },
                {
                    text: "휴대용저장매체점검내역",
                    href: "#"
                },
                {
                    text: "클린PC사용내역",
                    href: "#"
                },
                {
                    text: "클린PC반출입내역",
                    href: "#"
                }
            ]
        },
        {
            text: "정보자산관리",
            href: "#root3",
            selectable: false,
            nodes: [
                {
                    text: "자산정보관리",
                    href: "#"
                },
                {
                    text: "노트북사용",
                    href: "#"
                },
                {
                    text: "정보자산반출입내역",
                    href: "#"
                }
            ]
        },
    ];

    $('#treeview').treeview({
        data: treeData,
        expandIcon: 'fa fa-plus', 
        collapseIcon: 'fa fa-minus',
        nodeIcon: 'fa fa-folder',
        levels: 1,
        showBorder: false,
        highlightSelected: true,
        enableLinks: true
    });
});