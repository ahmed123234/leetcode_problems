class Solution {
    public int maximumCount(int[] nums) {
        int neg = 0;
        int max = nums.length;

        for(int val : nums) {
            if(val > 0){
                break;
            }
            if (val < 0)
                neg++;
            if (val == 0)
                max --;          
        }

        return Math.max(neg, max - neg);
    }
}
