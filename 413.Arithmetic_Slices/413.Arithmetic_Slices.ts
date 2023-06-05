function numberOfArithmeticSlices(nums: number[]): number {
    let n = nums.length;

    if (n < 3) return 0;
    let count = 0;
   
    for (let i = 2, prev = 0 ; i < n; i++) {
        count += (nums[i] - nums[i - 1] === nums[i - 1] - nums[i - 2])? ++prev: (prev = 0);
    }

    return count;
};
