/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let max = 0;
    let zeroCount = 0;
    let left = 0;
    let right = 0;
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        if(nums[i] == 0) {
            zeroCount++;
        }
    
        if(zeroCount == 0 && nums[i] == 1) {
            left++;
        }

        if(zeroCount == 1 && nums[i] == 1) {
            right++;
        }   

        if (zeroCount > 1) {
            max = Math.max(left + right, max);
            left = right;
            right = 0;
            zeroCount -= 1;
        }
    }
    max = Math.max(max, left + right);
    return zeroCount == 0?  max - 1: max;
};
