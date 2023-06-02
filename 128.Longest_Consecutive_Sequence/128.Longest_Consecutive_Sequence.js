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


// Using sorting
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let max = 0;
    let count = 1;
    let n = nums.length;

    nums.sort((a, b) => b - a);

    if (n == 0) return 0;

    for (let i = 0; i < n - 1; i++) {
        if(nums[i + 1] !== nums[i]) {
            if (nums[i + 1] === nums[i] - 1) {
                count ++;
                
            } else {
                max = Math.max(max, count);
                count = 1;
            }
        }
    } 

    return Math.max(max, count);
};
