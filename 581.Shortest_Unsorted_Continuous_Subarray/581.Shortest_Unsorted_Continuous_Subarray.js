/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    
    let start = -1;
    let end = -1;
    let n = nums.length;
    let min = nums[n - 1];
    let max = nums[0];
    if (n <= 1) {
        return 0;
    }

    for (let i = 1; i < n; i++) {
        min = Math.min(min, nums[n - i - 1]);
        max= Math.max(max, nums[i]);
        
        if(nums[i] < max) {
            end = i;
        }
          
        if (nums[n - i - 1] > min) {
            start = n - 1 - i;
        }

        
    }

    return  start == -1? 0: end - start + 1;
};
