var numSubarrayBoundedMax = function(nums, left, right) {
    let ans = 0, low = 0, mid = 0;
    for (const num of nums) {
        if (num > right) mid = 0;
        else ans += ++mid
        if (num >= left) low = 0
        else ans -= ++low
    }
    return ans
};
