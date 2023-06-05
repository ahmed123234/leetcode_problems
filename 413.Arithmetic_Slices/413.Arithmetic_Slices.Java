class Solution {
    public int numberOfArithmeticSlices(int[] nums) {
        int n = nums.length;

        int count = 0;
   
        for (int i = 2, prev = 0; i < n; i++) {

            count += (nums[i] - nums[i - 1] == nums[i - 1] - nums[i - 2])? ++prev: (prev = 0);
        
        }

        return count;  
    }
}
