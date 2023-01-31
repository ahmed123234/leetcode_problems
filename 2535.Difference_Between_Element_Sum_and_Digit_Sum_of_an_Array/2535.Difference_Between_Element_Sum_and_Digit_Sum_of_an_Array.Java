class Solution {
    public int differenceOfSum(int[] nums) {
        int diff = 0;
        int length = nums.length;
        for(int i = 0; i < length; i++) {
            diff += nums[i];
            int val = nums[i];
            while(val != 0) {
                diff -= val % 10;
                val /= 10;
            }
        }
        return Math.abs(diff);
    }
}
