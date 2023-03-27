/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
        let n = nums.length;
        let occurance = n / 2;

        const map = new Map();

        for (const num of nums) {
            if (!map.has(num))
                map.set(num, 1);
            else
                map.set(num, map.get(num) + 1);

            if (map.get(num) > occurance) {
                return num;
            }
        }
        return 0;
};
