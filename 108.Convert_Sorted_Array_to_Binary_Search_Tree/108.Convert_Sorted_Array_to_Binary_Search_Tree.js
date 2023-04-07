/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const createTree = (nums, low, high) => {
        if (low > high) // the tree is generated succesffully
            return null;

        let mid = Math.floor(low + (high - low) / 2);

        const node = new TreeNode(nums[mid]);
        // use binary search algorithm
        node.left = createTree(nums, low, mid - 1);
        node.right = createTree(nums, mid + 1, high);

        return node;
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    return createTree (nums, 0, nums.length - 1);
};

