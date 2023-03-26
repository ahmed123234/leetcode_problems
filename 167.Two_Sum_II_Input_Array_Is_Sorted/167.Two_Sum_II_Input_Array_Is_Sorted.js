/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
        const res = [];
        const n = numbers.length - 1;
        let i = 0;
        let j = n;

        for (; i < n && j > 0 && i != j;) {
            const temp = numbers[i] + numbers [j];
            if (temp < target) {
                i ++;
            } else if (temp > target) {
                j --;
            }
            else {
                res[0] = ++i;
                res[1] = ++j;
                break;
            }
        }

        return res;
};
