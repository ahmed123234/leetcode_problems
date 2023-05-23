class Solution {
    public int findUnsortedSubarray(int[] nums) {
    int start = -1;
    int end = -1;
    int n = nums.length;

    int max = nums[0];
    int min = nums[n - 1];

    if (n <= 1) {
        return 0;
    }

    for (int i = 1; i < n; i++) {
        max = Math.max(max, nums[i]);
        min = Math.min(min, nums[n - i - 1]);

        if(nums[i] < max) {
            end = i;
        }

        if (nums[n - i - 1] > min) {
            start = n - i - 1;  
        }
    }

    return  start == -1? 0: end - start + 1;

    }
}
