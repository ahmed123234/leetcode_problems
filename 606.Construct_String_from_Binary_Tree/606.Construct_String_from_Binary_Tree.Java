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
    StringBuilder res = new StringBuilder();
    public String tree2str(TreeNode root) {

        if( root == null) {
            return res.toString();
        }
        if (root.left == null  && root.right == null) {
            res.append(root.val);
            return res.toString();
        }

    
        res.append(root.val);
        

        if(root.left != null) {
            res.append("(");
            tree2str(root.left);
            res.append(")");
        }

        if (root.left == null && root.right != null) {
            res.append("()");
        }
        
        if(root.right != null) {
            res.append("(");
            tree2str(root.right);
            res.append(")");
        }

        return res.toString();
    }
}
