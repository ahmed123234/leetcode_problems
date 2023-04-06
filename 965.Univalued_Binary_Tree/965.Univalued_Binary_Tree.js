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
var isUnivalTree = function(root) {
    if (root == null) return false;
       const val = root.val;

        const s = [];
        s.push(root);
        while (s.length != 0) {
            const curr = s.pop();

            if (curr.val != val) {
                return false;
            }
            
            if (curr.left != null) {
                s.push(curr.left);
            }

            if (curr.right != null) {
                s.push(curr.right);
            }
        }

        return true;
};
