/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
    let prev = -1;
    for( let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            if (prev == -1) prev = i;
            else if ((i - prev - 1) < k) return false;
            prev = i;
        }
    }
    return true;
};
