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

//  Solve the problem using recurrsion:
class Solution {

    int sum = 0;
  
    public int sumRootToLeaf(TreeNode root) {

        return preOrderTraversal(root, 0);
    }


    public int preOrderTraversal (TreeNode root, int currNumber) {

        if(root == null) {
            return 0;
        }
       
        currNumber = (currNumber << 1) | root.val;

        if (root.left == null && root.right == null) {
            sum += currNumber;
        }

            preOrderTraversal(root.left, currNumber);
            preOrderTraversal(root.right, currNumber);
            return sum;
    }

}
            
