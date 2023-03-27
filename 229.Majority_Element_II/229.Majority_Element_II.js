/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let n = nums.length;
        let occurance = n / 3;

        const map = new Map();
        const res = [];

        

        for (const num of nums) {
            if (!map.has(num))
                map.set(num, 1);
            else
                map.set(num, map.get(num) + 1);

        }


        map.forEach((value, key) => {
            
            if (value > occurance) {
                res.push(key);
            }
        })
        return res;
};
