var selectedNode = null;
var treeData = [
    {
        text: "부모 노드 1",
        nodes: [
            { text: "자식 노드 1-1" },
            { text: "자식 노드 1-2" }
        ]
    },
    {
        text: "부모 노드 2",
        nodes: [
            { text: "자식 노드 2-1" },
            { text: "자식 노드 2-2" }
        ]
    }
];

function initTree() {
    var tree = $('#tree').treeview({
        data: treeData,
        showBorder: false,
        expandIcon: 'glyphicon glyphicon-plus',  
        collapseIcon: 'glyphicon glyphicon-minus',  
        nodeIcon: 'glyphicon glyphicon-folder-close',
        onNodeSelected: function(event, data) {
            selectedNode = data;
            console.log("선택한 노드:", data.text);
        }
    });

    if (selectedNode) {
        var nodeId = selectedNode.nodeId;
        tree.treeview('selectNode', [nodeId, { silent: true }]);
    }
}

$(document).ready(function() {
    initTree();

    $('#addNodeBtn').click(function() {
        if (!selectedNode) {
            alert("추가할 부모 노드를 선택하세요!");
            return;
        }

        var newNode = { text: "새로운 노드" };

        if (!selectedNode.nodes) {
            selectedNode.nodes = [];
        }

        selectedNode.nodes.push(newNode);

        // Clear the tree and reinitialize it with updated data
        $('#tree').treeview('remove');
        initTree();
    });

    $('#removeNodeBtn').click(function() {
        if (!selectedNode) {
            alert("삭제할 노드를 선택하세요!");
            return;
        }

        function removeNodeRecursive(nodes, target) {
            return nodes
                .map(node => {
                    if (node.nodes) {
                        node.nodes = removeNodeRecursive(node.nodes, target);
                    }
                    return node === target ? null : node;
                })
                .filter(node => node !== null);
        }

        // Remove the node from the treeData
        treeData = removeNodeRecursive(treeData, selectedNode);
        selectedNode = null;

        // Clear the tree and reinitialize it with updated data
        $('#tree').treeview('remove');
        initTree();
    });
});