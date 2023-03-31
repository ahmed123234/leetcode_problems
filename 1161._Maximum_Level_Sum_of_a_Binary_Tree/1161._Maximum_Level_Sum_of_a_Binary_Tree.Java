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
    public int maxLevelSum(TreeNode root) {
        int max = Integer.MIN_VALUE, maxLevel = 1;
        Queue<TreeNode> q = new LinkedList<>();
        q.offer(root);
        int level = 1;
        while ( !q.isEmpty()) {
            int sum = 0;
            for (int sz = q.size(); sz > 0; --sz) {
                TreeNode temp = q.poll();
                sum += temp.val;
                if (temp.left != null) { 
                    q.offer(temp.left);
                }
                if (temp.right != null) {
                    q.offer(temp.right);
                }
            }
            if (max < sum) {
                max = sum;
                maxLevel = level;
            }
            ++level;
        }
        return maxLevel;
    }
 }
