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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
        if(root === null) return null;

    if(root.val === val) return root;

    let v1

     if(root.val > val) {
       v1 = searchBST(root.left, val);
    }

    if(root.val < val) {
        v1 = searchBST(root.right, val) ;
    }

    return v1 ;

};
