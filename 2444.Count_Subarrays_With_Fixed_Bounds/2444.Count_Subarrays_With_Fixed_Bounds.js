var countSubarrays = function(nums, minK, maxK) {

    let ans = 0; // initialize answer variable to 0
    let j = -1; // initialize starting index of current subarray to -1
    let prevMinKIndex = -1; // initialize most recent index of minK to -1
    let prevMaxKIndex = -1; // initialize most recent index of maxK to -1
    let n = nums.length;

    for (let i = 0; i < n; ++i) { // iterate over every element in nums
      if (nums[i] < minK || nums[i] > maxK)
        j = i; // if nums[i] is out of range, move starting index of current subarray to i
      if (nums[i] == minK)
        prevMinKIndex = i; // if nums[i] is minK, update most recent index of minK to i
      if (nums[i] == maxK)
        prevMaxKIndex = i; // if nums[i] is maxK, update most recent index of maxK to i

      // calculate number of valid subarrays that end at index i and add to answer
      ans += Math.max(0, Math.min(prevMinKIndex, prevMaxKIndex) - j);
    }

    return ans; // return the total count of valid subarrays
};
