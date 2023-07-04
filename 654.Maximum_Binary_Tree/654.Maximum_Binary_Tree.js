/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
   
            const stack = [];
         const n = nums.length;
       
       for(let i = 0; i < n; i++) {
        const curr = new TreeNode(nums[i]);

          while(stack.length !== 0 && stack[stack.length - 1].val < nums[i]) {
            curr.left = stack.pop();
          }

          if (stack.length !== 0) {
            stack[stack.length - 1].right = curr;
          }
          stack.push(curr);
       }
       return stack.length == 0? null: stack.shift(); 
 
};
