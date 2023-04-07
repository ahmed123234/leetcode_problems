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
   
    public TreeNode sortedArrayToBST(int[] nums) {
         int low = 0; int high = nums.length - 1;

         return createTree(nums, low, high);     
    }

    public TreeNode createTree(int [] nums, int low, int high) {
        if (low > high) // the tree is generated succesffully
            return null;

        int mid = (low + (high - low) / 2);

        TreeNode node = new TreeNode(nums[mid]);
        // use binary search algorithm
        node.left = createTree(nums, low, mid - 1);
        node.right = createTree(nums, mid + 1, high);

        return node;
    }
}
