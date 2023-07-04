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
    public TreeNode constructMaximumBinaryTree(int[] nums) {
       Deque <TreeNode> stack = new LinkedList<>();
       int n = nums.length;
       
       for(int i = 0; i < n; i++) {
          TreeNode curr = new TreeNode(nums[i]);

          while(!stack.isEmpty() && stack.peek().val < nums[i]) {
            curr.left = stack.pop();
          }

          if (!stack.isEmpty()) {
            stack.peek().right = curr;
          }

          stack.push(curr);
       }

       return stack.isEmpty()? null: stack.removeLast(); 

         

    }
}
