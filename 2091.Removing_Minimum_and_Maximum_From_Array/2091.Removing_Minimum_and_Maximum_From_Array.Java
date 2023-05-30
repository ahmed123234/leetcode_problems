class Solution {
    public int minimumDeletions(int[] nums) {
        int n = nums.length;

        int minF = nums[0];
        int maxF = nums[0];    
        
        int minB = nums[n - 1];
        int maxB = nums[n - 1];

        int minCf = 1, minCB = 1, maxCf = 1, maxCB = 1;

        for (int i = 0, j = n - 1; i < n && j >= 0; i++,j--) {
            if (nums[i] > maxF) {
                maxF = nums[i];
                maxCf = i + 1;
            }

            if (nums[j] > maxB) {
                maxB = nums[j];
                maxCB = n - j;
            }

            if (nums[i] < minF) {
                minF = nums[i];
                minCf = i + 1;
            }

            if (nums[j] < minB) {
                minB = nums[j];
                minCB = n - j;
            }
        }

        return Math.min(
            Math.min(Math.max(minCf , maxCf), Math.max(minCB , maxCB)),
            (Math.min(minCB, minCf) + Math.min(maxCB, maxCf))
            
        );

    }
}
