/*A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.

The path sum of a path is the sum of the node's values in the path.

Given the root of a binary tree, return the maximum path sum of any non-empty path.

*/

var maxPathSum = function(root) {

    let max = -Infinity;

    function dfs(root){
        if(!root) return 0;
        
        let left = Math.max(0,dfs(root.left));
        let right = Math.max(0,dfs(root.right));
        let curMax = left + root.val + right;

        max = Math.max(curMax, max);

        return root.val + Math.max(left, right);
    }

    dfs(root);
    return max;
}