/*
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: 3

Example 2:

Input: root = [1,null,2]
Output: 2

Constraints:

    The number of nodes in the tree is in the range [0, 104].
    -100 <= Node.val <= 100
*/
/*
Calculate the maxiumum depth of a binary tree, which is the length of the longest path from the root node to any leaf node.
*/
var maxDepth = function(root) {
    //function defined with a parameter root which represents the root node of the binary tree
    if (!root) return 0
    //check if root is falsy, if root is falsy the function returns 0 which indicates the tree has no nodes
    //if root is truthy use Math.max method to compare max depth of the left subtree and the max depth of the right subtree
    //maxDepth() function is called recursively on the left and right child nodes of root in order to compute maximum depths.
    //you add one to the value to account for the last root node itself
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};