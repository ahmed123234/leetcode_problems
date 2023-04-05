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
    public boolean isCompleteTree(TreeNode root) {
        Queue<TreeNode> q = new LinkedList<>();

        if(root == null) return false;

        q.offer(root);

        while (q.peek() != null) {
            TreeNode temp = q.poll();
            // Add both null and not null values
            q.offer(temp.left);
            q.offer(temp.right);
        }

        while(!q.isEmpty() && q.peek() == null) {
            q.poll();
        }

        // Check if the tree is complete 
        return q.isEmpty();
    }
}
