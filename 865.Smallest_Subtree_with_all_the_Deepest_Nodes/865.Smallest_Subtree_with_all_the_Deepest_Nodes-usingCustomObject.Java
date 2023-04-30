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
 class Result {
     private Integer depth;
     private TreeNode node;

     public Result(Integer depth, TreeNode node) {
         this.depth = depth;
         this.node = node;
     }

     public Integer getDepth() {
         return depth;
     }

     public TreeNode getNode() {
         return node;
     }
 }

class Solution {
    public TreeNode subtreeWithAllDeepest(TreeNode root) {
       return nodeDepth(root).getNode();
    }

    public Result nodeDepth(TreeNode root) {
        if (root == null) {
            return new Result (-1, root);
        }

        Result left = nodeDepth(root.left), right = nodeDepth(root.right);

        int d1 = left.getDepth(), d2 = right.getDepth();

        return new Result(Math.max(d1, d2) + 1, d1 == d2 ? root : d1 > d2 ? left.getNode() : right.getNode());
   
    }
}
