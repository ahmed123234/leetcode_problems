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
    public List<List<Integer>> levelOrderBottom(TreeNode root) {
        Queue<TreeNode> q = new LinkedList<>();
        List<List<Integer>> res = new ArrayList<>();

        if(root == null) return res;

        q.offer(root);

        while (!q.isEmpty()) {
            
            List<Integer> levelVals = new ArrayList<>();

            for (int sz = q.size(); sz > 0; --sz) {
                TreeNode temp = q.poll();
                levelVals.add(temp.val);

                if(temp.left != null) 
                    q.offer(temp.left);

                if(temp.right != null) 
                    q.offer(temp.right);
            }
            res.add(levelVals);
        }
        Collections.reverse(res);
        return res;
    }
}
