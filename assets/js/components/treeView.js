$(document).ready(function() {
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
