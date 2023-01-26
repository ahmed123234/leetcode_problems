class Solution {
    public int maxSubarraySumCircular(int[] nums) {
        int length = nums.length;
        int maxSum = Integer.MIN_VALUE;
        int minDiff = Integer.MAX_VALUE;
        int currentSum = 0;
        int currentDiff = 0;
        int sum = 0;

        for (int i = 0; i < length; i++) {

                currentSum += nums[i];
                currentDiff += nums[i];
                sum += nums[i];

                if (currentSum > maxSum)
                        maxSum = currentSum;

                if(currentSum < 0)
                        currentSum = 0;

                if (currentDiff < minDiff)
                        minDiff = currentDiff;
                
                if(currentDiff > 0)
                        currentDiff = 0;
        }

       return (sum == minDiff)? maxSum : Math.max(maxSum , sum - minDiff);

    }
}
