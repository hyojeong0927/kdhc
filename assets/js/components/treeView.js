$(document).ready(function () {
    var treeData = [
        {
            text: "루트 노드",
            nodes: [
                {
                    text: "자식 노드 1",
                    nodes: [
                        { text: "손자 노드 1" },
                        { text: "손자 노드 2" }
                    ]
                },
                { text: "자식 노드 2" }
            ]
        }
    ];

    $('#tree').treeview({
        data: treeData,  // 트리 데이터
        expandIcon: "glyphicon glyphicon-plus",  // 확장 아이콘
        collapseIcon: "glyphicon glyphicon-minus",  // 축소 아이콘
        nodeIcon: "glyphicon glyphicon-folder-open",  // 기본 노드 아이콘
        enableLinks: true,
        highlightSelected: true
    });

    // 트리뷰 확장: 2단계까지 확장 (levels: 2)
    $('#tree').treeview('expandAll', { levels: 2 });

    // 트리뷰 축소
    $('#tree').treeview('collapseAll');

    // 선택된 노드 이벤트 (주석 해제 시 동작)
    $('#tree').on('nodeSelected', function(event, data) {
        alert("선택한 노드: " + data.text);
    });
});
