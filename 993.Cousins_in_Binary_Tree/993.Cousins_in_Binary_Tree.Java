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
    public boolean isCousins(TreeNode root, int x, int y) {
        Queue<TreeNode> q = new LinkedList<>();

        if(root == null) return false;

        q.offer(root);

        while (!q.isEmpty()) {
            int count = 0;
            for (int sz = q.size(); sz > 0; --sz) {
                TreeNode temp = q.poll();
                if(temp.val == x || temp.val == y) {
                    count ++;
                }
                if(temp.left != null && temp.right != null) {
                    if (temp.left.val == x && temp.right.val == y) return false;

                    if (temp.left.val == y && temp.right.val == x) return false;
                }

                if(temp.left != null) 
                    q.offer(temp.left);

                if(temp.right != null) 
                    q.offer(temp.right);
            }
            if(count == 2) return true;
        }
        return false; 
    }
}
