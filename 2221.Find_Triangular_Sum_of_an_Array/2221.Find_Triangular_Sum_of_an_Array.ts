function triangularSum(nums: number[]): number {
  while (nums.length > 1) {
    let n = nums.length;
    let temp = [];
    for (let i = 0; i < n - 1; i++) {
        temp.push((nums[i] + nums[i + 1]) % 10);
    }
    nums = temp;
  }

    return nums[0];
};
