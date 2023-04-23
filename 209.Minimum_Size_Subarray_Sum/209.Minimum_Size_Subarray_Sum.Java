class Solution {
    public int minSubArrayLen(int target, int[] nums) {
        int n = nums.length;
        int minimalLength = Integer.MAX_VALUE;
        int windowSum = 0;
        int start = 0;
        
        for (int i = 0; i < n;) {
            windowSum += nums[i++];

            while (windowSum >= target) {
                
                minimalLength = Math.min(minimalLength, i - start);
                windowSum -= nums[start++];
            }
        }
        return minimalLength != Integer.MAX_VALUE? minimalLength: 0;
        
    }
}

//OR using sliding window 

class Solution {
    public int minSubArrayLen(int target, int[] nums) {
        int i = 0, n = nums.length, res = n + 1;
        for (int j = 0; j < n; ++j) {
            target -= nums[j];
            while (target <= 0) {
                res = Math.min(res, j - i + 1);
                target += nums[i++];
            }
        }
        return res % (n + 1);
    }
}
