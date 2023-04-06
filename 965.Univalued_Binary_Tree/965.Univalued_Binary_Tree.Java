/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    
    public boolean isUnivalTree(TreeNode root) {
        if (root == null) return false;
        int val = root.val;

        Stack<TreeNode> s = new Stack<>();
        s.push(root);

        while (!s.isEmpty()) {
            TreeNode curr = s.pop();
           
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
    }
}
