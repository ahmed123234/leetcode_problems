/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
   let n = nums.length;

    let count = 0;
   
    for (let i = 2, prev = 0 ; i < n; i++) {
        count += (nums[i] - nums[i - 1] === nums[i - 1] - nums[i - 2])? ++prev: (prev = 0);
    }

    return count;  
};
