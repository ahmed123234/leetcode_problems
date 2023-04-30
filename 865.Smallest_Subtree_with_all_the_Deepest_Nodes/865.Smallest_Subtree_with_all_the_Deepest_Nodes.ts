/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

 class Result {
    depth: number
    node: TreeNode

    constructor(depth?: number, node?: TreeNode) {
         this.depth = depth,
         this.node = node
    }
 }


function nodeDepth(root: TreeNode | null): Result {
        if (root == null) {
            return new Result( -1, root );
        }

        const left = nodeDepth(root.left), right = nodeDepth(root.right);

        let d1 = left.depth, d2 = right.depth;

        return new Result (Math.max(d1, d2) + 1, d1 == d2 ? root : d1 > d2 ? left.node : right.node);
   
    }


function subtreeWithAllDeepest(root: TreeNode | null): TreeNode | null {
        return nodeDepth(root).node;
};

