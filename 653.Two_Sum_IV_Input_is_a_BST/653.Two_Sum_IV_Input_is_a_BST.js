/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const pass = (set, root, k) => {
    if (root == null) return false;

        if (set.has(k - root.val)) return true;

        set.add(root.val);
        
        
        if (root.left == null && root.right == null) {
            return false;
        }  

        return  pass(set, root.left, k) || pass(set, root.right, k);
}

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    const set = new Set();
    return pass(set, root, k);
};

