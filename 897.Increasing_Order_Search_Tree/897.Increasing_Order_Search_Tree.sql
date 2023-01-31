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

    List<Integer> nodes  = new ArrayList<>();
    
    public TreeNode increasingBST(TreeNode root) {
        inorderBST(root);

        int length = nodes.size();
        TreeNode  tree = new TreeNode(nodes.get(0));
        TreeNode pointer = tree;   
        for (int i = 1; i < length; i++) {

            if(pointer.right == null) {
                pointer.right = new TreeNode(nodes.get(i));   
                pointer = pointer.right;
            }

        } 
        return tree;
    }


    public boolean inorderBST(TreeNode root) {
        if(root == null) {  
            return false;
        }

        inorderBST(root.left);
        nodes.add(root.val);
        inorderBST(root.right);

        return true;
    }

}
