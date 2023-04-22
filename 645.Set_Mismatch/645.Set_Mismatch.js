/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let n = nums.length;
    let expectedSum = (n * (n + 1)) / 2;
    let  currentSum = 0;
    let res = [];

    nums.sort((a, b) => {
        return a - b;
    });

    nums.forEach(val => {
        currentSum += val;
    });
    console.log(currentSum)

    let pre = -1;

    for( let i = 0; i < n; i++) {
        if(nums[i] == pre) {
            currentSum -= pre;
            res.push(pre);
            break;
        }
        pre = nums[i];
    }
    console.log(currentSum)

    res.push(expectedSum - currentSum);
    return res;
};

