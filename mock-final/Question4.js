/*
Question 4 (HARD): Given a non-empty binary tree, find the maximum path sum. A path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path sum is the sum of the node values along the path. 

 

Example: 

Input: root = -10 

Output: 25 

Explanation: The optimal path is -10, 20, 15 with a sum of 25. 

 

 -10 

   /  \ 

 9  20  

      /   \  

     15  7 

 

 

YOUR CODE BELOW */

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function maxPathSumFromRoot(root) {
  if (!root) return 0;

  function dfs(node) {
    if (!node) return 0;

    // Recursively calculate the maximum path sum for the left and right subtrees
    const leftMax = Math.max(dfs(node.left), 0); // Only add positive contributions
    const rightMax = Math.max(dfs(node.right), 0); // Only add positive contributions

    // Calculate the maximum path sum from this node considering only direct paths
    const currentMax = node.val + Math.max(leftMax, rightMax);

    // Return the maximum path sum considering one path (left or right) to the parent
    return currentMax;
  }

  // Start DFS from the root
  return dfs(root);
}

// Example usage:
const root = new TreeNode(-10);
root.left = new TreeNode(9);
root.right = new TreeNode(20, new TreeNode(15), new TreeNode(7));

console.log(maxPathSumFromRoot(root)); // Output: 25


