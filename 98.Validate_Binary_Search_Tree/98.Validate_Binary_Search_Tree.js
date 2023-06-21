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
 * @return {boolean}
 */
var isValidBST = function(root) {
    
        return inorder(root, - Infinity, + Infinity);

};


function  inorder(root, min, max) {
        if(root === null) return true;

        if (root.val >= max || root.val <= min) {
            return false;
        }

        return inorder(root.left, min, root.val) &&
            inorder(root.right, root.val, max);
  
    }
