/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
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
