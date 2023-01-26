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
    
    public boolean isSymmetric(TreeNode root) {

    	if (root == null)
            return true;

       	return isSameTree(root.left, root.right);
    }

    public boolean isSameTree(TreeNode r, TreeNode q) {
        
	if (r == null && q == null )
            return true;

        if (r == null || q == null )
            return false;

        if (r.val != q.val)
            return false;

        return isSameTree(r.left, q.right) &&
        isSameTree(r.right, q.left);
    }

}
