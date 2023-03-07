class Solution {
    public int findMiddleIndex(int[] nums) {
        int n = nums.length;
        int res = -1; 
        
        for (int i  = 0; i < n; i++) {
            int j = 0;
            int leftSum = 0;
            int rightSum = 0; 

            while(j < i) {
                leftSum += nums[j++];
            }

            j = i + 1;

            while(j < n) {
                rightSum += nums[j++];
            }
            if (rightSum == leftSum) {
                return i; 
            }
        }
        return res;
    }
}
