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

var isSymmetric = function(root) {
     
    if (root == undefined)
        return true;
    
    return isSameTree(root.left, root.right);
};

function isSameTree(r, q) {
        
	if (r == undefined && q == undefined)
            return true;

        if (r == undefined || q == undefined)
            return false;

        if (r.val != q.val)
            return false;
            
        return isSameTree(r.left, q.right) &&
        isSameTree(r.right, q.left);
}
