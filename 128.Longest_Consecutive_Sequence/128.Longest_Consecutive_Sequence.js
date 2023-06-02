/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const map = new Map();
    let max = 0;
    let n = nums.length;

    for (let num of nums) {
        map.set(num, false);
    }

    // determine the starting point element
    for (let i = 0; i < n; i++) {
        if (!map.has(nums[i] - 1))  
            map.set(nums[i], true);
    }   

    for (let i = 0; i < n; i++) {
        if (map.get(nums[i]) === true) {
            let j = 0;
            let count = 0;
            while(map.has(nums[i] + j)) {
                count ++;
                j++;
            }
            max = Math.max(max, count);
        } 
    } 

    return max;
};
