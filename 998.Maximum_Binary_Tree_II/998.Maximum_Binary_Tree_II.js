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
var insertIntoMaxTree = function(root, val) {
    if (root !== null && root.val > val) {
        root.right = insertIntoMaxTree(root.right, val);
        return root;
    }

    const node = new TreeNode(val);
    node.left = root;

    return node;
};
