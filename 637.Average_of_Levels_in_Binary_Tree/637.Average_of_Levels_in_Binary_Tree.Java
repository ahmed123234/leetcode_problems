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
    public List<Double> averageOfLevels(TreeNode root) {
        List<Double> res = new ArrayList<>();
        if(root == null) return res;
        Queue<TreeNode> queue = new LinkedList<>();

        queue.offer(root);
        while(!queue.isEmpty()) {
            double sum = 0;
            long n = queue.size();
            for(long sz = n; sz > 0 ; --sz) {
                TreeNode temp = queue.poll();
                sum += temp.val;

                if(temp.left != null) 
                    queue.offer(temp.left);

                if(temp.right != null) 
                    queue.offer(temp.right);
            }
            res.add(sum / n);
        }

    return res;
    }
}
