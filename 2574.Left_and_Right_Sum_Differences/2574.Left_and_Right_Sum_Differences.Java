class Solution {
    public int[] leftRigthDifference(int[] nums) {
        int n = nums.length;
        int res [] = new int [n]; 
        
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
            res[i] = Math.abs(rightSum - leftSum);
        }
        return res;
    }
}
