/*
Question 3: Given the root of a binary tree, determine if it is a valid binary search tree (BST). A BST is valid if for every node, all nodes in its left subtree are less than the node’s value, and all nodes in its right subtree are greater than the node’s value. 

Input: root = [2,1,3] 

Output: true 


YOUR CODE BELOW */

var isValidBST = function(root){
    function recurse(root, min, max){
        if(root == null) return true;

        if((root.val >= max || root.val <= min)){
            return false;
        } 

        return recurse(root.left, min, root.val) && recurse(root.right, root.val, max);
    }
    return recurse(root, -Infinity, Infinity)
};

