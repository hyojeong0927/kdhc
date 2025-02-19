$(document).ready(function() {
    var treeData = [
        // {
        //     text: "Root",
        //     class: "root",
        //     href: "",
        //     selectable: false,
        // },
        {
            text: "관리보안",
            class: "depth1",
            href: "#root1",
            selectable: false,
            state: { expanded: true },
            nodes: [
                { text: "자산정보세부현황", href: "#", icon: "tree-doc", class: "depth2" },
                { text: "월간사이버보안점검", href: "#", icon: "tree-doc", class: "depth2 last-child" }
            ]
        },
        {
            text: "물리보안",
            class: "depth1",
            href: "#root2",
            selectable: false,
            nodes: [
                { text: "봉인장치사용내역", href: "#", icon: "tree-doc", class: "depth2" },
                { text: "영상정보장치점검관리", href: "#", icon: "tree-doc", class: "depth2 last-child" }
            ]
        },
        {
            text: "기술보안",
            class: "depth1",
            href: "#root3",
            selectable: false,
            nodes: [
                { text: "계정관리", href: "#", icon: "tree-doc", class: "depth2" },
                { text: "자산정보세부현황", href: "#", icon: "tree-doc", class: "depth2" },
                { text: "공개취약점내역", href: "#", icon: "tree-doc", class: "depth2" },
                { text: "공개취약점조치유예", href: "#", icon: "tree-doc", class: "depth2" },
                { text: "로그분석결과", href: "#", icon: "tree-doc", class: "depth2" },
                { text: "원격접속내역", href: "#", icon: "tree-doc", class: "depth2 last-child" }
            ]
        },
        {
            text: "보안정책",
            class: "depth1",
            href: "#root3",
            selectable: false,
            nodes: [
                { text: "백신운영현황", href: "#", icon: "tree-doc", class: "depth2" },
                { text: "백신미운영현황", href: "#", icon: "tree-doc", class: "depth2" },
                { text: "백신정책세부내역", href: "#", icon: "tree-doc", class: "depth2" },
                { text: "운영체제보안패치업데이트현황", href: "#", icon: "tree-doc", class: "depth2" },
                { text: "운영체제소프트웨어업데이트현황", href: "#", icon: "tree-doc", class: "depth2" },
                { text: "공정제어설비운영체제현황", href: "#", icon: "tree-doc", class: "depth2" },
                { text: "네트워크장비소프트웨어현황", href: "#", icon: "tree-doc", class: "depth2" },
                { text: "보안패치미운영월간점검", href: "#", icon: "tree-doc", class: "depth2" },
                { text: "비밀번호정책운영", href: "#", icon: "tree-doc", class: "depth2" },
                { text: "비밀번호변경불가월간점검", href: "#", icon: "tree-doc", class: "depth2" },
                { text: "계정 로그일일점검내역", href: "#", icon: "tree-doc", class: "depth2 last-child" }
            ]
        },
        {
            text: "클린PC",
            class: "depth1",
            href: "#root3",
            selectable: false,
            nodes: [
                { text: "휴대용저장매체사용등록 관리", href: "#", icon: "tree-doc", class: "depth2" },
                { text: "휴대용저장매체사용내역", href: "#", icon: "tree-doc", class: "depth2" },
                { text: "휴대용저장매체점검내역", href: "#", icon: "tree-doc", class: "depth2" },
                { text: "클린PC사용내역", href: "#", icon: "tree-doc", class: "depth2" },
                { text: "클린PC반출입내역", href: "#", icon: "tree-doc", class: "depth2 last-child" }
            ]
        },
        {
            text: "정보자산",
            class: "depth1",
            href: "#root3",
            selectable: false,
            nodes: [
                { text: "자산정보관리", href: "#", icon: "tree-doc", class: "depth2" },
                { text: "노트북사용", href: "#", icon: "tree-doc", class: "depth2" },
                { text: "정보자산반출입내역", href: "#", icon: "tree-doc", class: "depth2 last-child" }
            ]
        },
        {
            text: "관리자",
            class: "depth1 last-child",
            href: "#root3",
            selectable: false,
            nodes: [
                { text: "관리자1", href: "#", icon: "tree-doc", class: "depth2" },
                { text: "관리자2", href: "#", icon: "tree-doc", class: "depth2" },
                { text: "관리자3", href: "#", icon: "tree-doc", class: "depth2 last-child" }
            ]
        }
    ];

    var $tree = $('#treeview');

    $tree.treeview({
        data: treeData,
        expandIcon: 'icon tree-plus',
        collapseIcon: 'icon tree-minus',
        nodeIcon: 'icon tree-folder-close',
        levels: 1,
        showBorder: false,
        highlightSelected: true,
        enableLinks: true,
        onNodeExpanded: function(event, node) {
            setTimeout(applyClasses, 50);
        },
        onNodeCollapsed: function(event, node) {
            setTimeout(applyClasses, 50);
        },
        onNodeSelected: function(event, node) {
            setTimeout(function() {
                applyClasses();
                restoreNodeClass(node);
            }, 50);
        },
        onNodeUnselected: function(event, node) {
            setTimeout(applyClasses, 50);
        }
    });

    function applyClasses() {
        $tree.find('li').each(function() {
            var nodeId = $(this).attr('data-nodeid');
            if (nodeId !== undefined) {
                var nodeData = $tree.treeview('getNode', nodeId);
                if (nodeData.class) {
                    $(this).addClass(nodeData.class);
                }
                // if (nodeData.text === "Root") {
                //     $(this).addClass("root");
                // }
            }
        });
    }

    function restoreNodeClass(node) {
        var $nodeElement = $tree.find('li[data-nodeid="' + node.nodeId + '"]');
        if (node.class) {
            $nodeElement.addClass(node.class);
        }
    }
    setTimeout(function() {
        applyClasses();
    }, 100);

    $tree.on('rendered', function() {
        setTimeout(applyClasses, 50);
    });
});
