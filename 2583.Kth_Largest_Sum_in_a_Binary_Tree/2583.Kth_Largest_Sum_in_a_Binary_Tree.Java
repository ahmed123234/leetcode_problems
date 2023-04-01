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
    public long kthLargestLevelSum(TreeNode root, int k) {
        List<Long> levelSum = new ArrayList<>();
        Queue<TreeNode> q = new LinkedList<>();
        q.offer(root);

        while ( !q.isEmpty()) {
        long sum = 0;
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
            levelSum.add(sum);
        }

        Collections.sort(levelSum);
        int n = levelSum.size();
        return (k >n)? -1 : levelSum.get(n - k);
    }
}
