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

function isValidBST(root: TreeNode | null): boolean {
    return inorder(root, - Infinity, + Infinity);

};

function  inorder(root: TreeNode, min: number, max: number) {
        if(root === null) return true;

        if (root.val >= max || root.val <= min) {
            return false;
        }

        return inorder(root.left, min, root.val) &&
            inorder(root.right, root.val, max);
  
    }
