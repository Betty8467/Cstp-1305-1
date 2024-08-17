class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}


var maxDepth = function(root){
    let depth = 0;

    let BFS = (node, level) => {
        if(node === null) return;
        if(level > depth) depth = level;
        BFS(node.left, level+1)
        BFS(node.right, level+1)
    }

    BFS(root, 1);
    return depth
}

let node15 = new TreeNode(15);
let node7 = new TreeNode(7);
let node20 = new TreeNode(20, node15, node7);
let node9 = new TreeNode(9);
let root = new TreeNode(3, node9, node20);

let result = maxDepth(root);
console.log(result);