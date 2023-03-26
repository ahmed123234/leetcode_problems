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
    public List<TreeNode> findDuplicateSubtrees(TreeNode root) {
        Map<String, Integer> map = new HashMap<>();
        List<TreeNode> res = new ArrayList<>();

        pass(res, root, map);
        return res;

    }

    public String pass(List<TreeNode> res, TreeNode root, Map<String, Integer> map) {
        if (root == null) return "";

        String left = pass(res, root.left, map);
        String right = pass(res, root.right, map);

        String key = root.val + "$" + left + "$" + right;

        if (map.getOrDefault(key, 0) == 1) {
            res.add(root);
        }
        map.put(key, map.getOrDefault(key, 0) + 1);
    
        return key;
    }
}
