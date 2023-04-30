/**
 * Definition for a binary tree node.
 * class TreeNode {
 *    
 *     constructor(val?: number, left, right) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */


function nodeDepth(root) {
        if (root == null) {
            return new [ -1, root ];
        }

        const left = nodeDepth(root.left), right = nodeDepth(root.right);

        let d1 = left[0], d2 = right[0];

        return [ Math.max(d1, d2) + 1, d1 == d2 ? root : d1 > d2 ? left[1] : right1[1]];
   
    }


function subtreeWithAllDeepest(root: TreeNode | null): TreeNode | null {
        return nodeDepth(root)[1];
};

