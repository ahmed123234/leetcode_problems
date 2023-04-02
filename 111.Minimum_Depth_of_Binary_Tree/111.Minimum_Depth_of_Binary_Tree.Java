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

    public int minDepth(TreeNode root) {
    
       	int minDepth = Integer.MAX_VALUE;
        int depth =  1;
        if(root == null) return 0;
        Queue<TreeNode> q = new LinkedList<>();
        q.offer(root);
        while ( !q.isEmpty()) {
            for (int sz = q.size(); sz > 0; --sz) {
                TreeNode temp = q.poll();
                if (temp.left == null && temp.right == null) {
                    if(depth < minDepth) minDepth = depth;
                }
                
                if (temp.left != null) { 
                    q.offer(temp.left);
                }
                if (temp.right != null) {
                    q.offer(temp.right);
                }
            }
            ++depth;
        }
        return minDepth;
    }

}
