/**
 * @param {number[]} nums
 * @return {number}
 */
var xorBeauty = function(nums) {
    let n = nums.length;
    let res = 0;

    for(let i = 0; i < n; i++) {
        res ^= nums[i];
    }
    return res;
};
