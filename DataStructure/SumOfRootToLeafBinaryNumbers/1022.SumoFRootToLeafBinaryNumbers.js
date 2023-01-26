/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sum = 0;
var sumRootToLeaf = function(root) {
    sum = 0;
    return preOrderTraversal(root, 0);    
};

function preOrderTraversal ( root,  currNumber) {


    if(root == undefined) {
        return 0;
    }

    currNumber = (currNumber << 1) | root.val;

    if (root.left == undefined && root.right == undefined) {
        sum += currNumber;
    }

    preOrderTraversal(root.left, currNumber);
    preOrderTraversal(root.right, currNumber);
    return sum;
}

