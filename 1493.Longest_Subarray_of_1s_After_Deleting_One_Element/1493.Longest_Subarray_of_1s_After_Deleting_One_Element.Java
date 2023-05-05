class Solution {
    public int longestSubarray(int[] nums) {
        int max = 0;
        int zeroCount = 0;
        int left = 0;
        int right = 0;
        int n = nums.length;

        for (int i = 0; i < n; i++) {
            if(nums[i] == 0) {
                zeroCount++;
            }
        
            if(zeroCount == 0 && nums[i] == 1) {
                left++;
            }

            if(zeroCount == 1 && nums[i] == 1) {
                right++;
            }   

            if (zeroCount > 1) {
                max = Math.max(left + right, max);
                left = right;
                right = 0;
                zeroCount -= 1;
            }
        }
        max = Math.max(max, left + right);
        return zeroCount == 0?  max - 1: max;
    }
}
