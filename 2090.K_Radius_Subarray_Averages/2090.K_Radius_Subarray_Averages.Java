class Solution {
    public int[] getAverages(int[] nums, int k) {
        int n = nums.length;
        int [] res = new int [n];
        int count = 2 * k + 1;

        long [] prefixSum = new long [n];
       
        for (int i = 0; i < n; i++) {
            if (i == 0) {
                prefixSum[i] = nums[i];    
            } else
                prefixSum[i] = prefixSum[i - 1] + nums[i];
        }

        for (int i = 0; i < n; i++) {
            if (i >= k && n - i - 1>= k) {
                long sum = 0;

                if (i - k == 0) {
                    sum = prefixSum[i + k]; 
                } else
                    sum = prefixSum[i + k] -
                prefixSum[i - k - 1];

                res[i] = Math.round(sum / count);
            } else {
                res[i] = -1;
            }
        }
        return res;
    }
}
