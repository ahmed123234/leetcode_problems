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
 * @return {TreeNode}
 */
var subtreeWithAllDeepest = function(root) {
    return nodeDepth(root).node;
};


const nodeDepth = function(root) {
        if (root == null) {
            return { depth: -1, node: root };
        }

        const left = nodeDepth(root.left), right = nodeDepth(root.right);

        let d1 = left.depth, d2 = right.depth;

        return { depth: Math.max(d1, d2) + 1, node: d1 == d2 ? root : d1 > d2 ? left.node : right.node };
   
    }
