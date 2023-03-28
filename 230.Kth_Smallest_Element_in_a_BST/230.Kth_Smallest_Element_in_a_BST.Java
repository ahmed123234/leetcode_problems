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
    int count;
    public int kthSmallest(TreeNode root, int k) {
        count = k;

        return pass(root);     
    }

    public int pass(TreeNode root) {
        
        if (root == null) return -1 ;

        int ans = pass(root.left);

        if (ans != -1) {
            return ans;
        }

        if (count == 1) return root.val;
        count --;
        return pass(root.right);
    }
}
