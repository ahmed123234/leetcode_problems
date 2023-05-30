class Solution {
    public double findMaxAverage(int[] nums, int k) {
        // using sliding window pattern 

        double windowSum = 0;
        int start = 0;
        double maxAvg = Integer.MIN_VALUE;
        int n = nums.length;

        for (int i = 0; i < n; i++) {
            windowSum += nums[i];

            if(i - start + 1 == k) {
                double avg = (windowSum / k) ;
                maxAvg = Math.max(maxAvg, avg);
                windowSum -= nums[start];
                start += 1;
            }
        }
        return maxAvg;
    }
}
