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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    const res = [];
    return pass(root, k, res); 
};

function pass(root, k, i) {

    if (root == null) {
        return 0;
    } 

    pass(root.left, k, res);

    res.push(root.val);
   
    pass(root.right, k, res);

    return (res[k - 1] !== undefined)? res[k - 1]: 0;

}

