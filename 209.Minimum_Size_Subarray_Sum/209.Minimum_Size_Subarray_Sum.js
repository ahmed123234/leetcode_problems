/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
//  using sliding window approach
var minSubArrayLen = function(target, nums) {
  let n = nums.length;
        let minimalLength = +Infinity;
        let windowSum = 0;
        let start = 0;

        for (let i = 0; i < n;) {
            windowSum += nums[i++];

            while (windowSum >= target) {
                
                minimalLength = Math.min(minimalLength, i - start);
                windowSum -= nums[start++];
            }
        }
        return minimalLength != Infinity? minimalLength: 0;
};
