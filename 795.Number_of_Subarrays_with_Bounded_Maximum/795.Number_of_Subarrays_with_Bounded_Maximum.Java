class Solution {
    public int numSubarrayBoundedMax(int[] nums, int left, int right) {
        int res = 0;
        int mid = 0;
        int low = 0; 

        for(int num : nums) {
            if ( num <= right)
                res += ++mid;
            else mid = 0;

            if (num < left) {
                    res += --low;
            } else low = 0;
                 
        }
        return res;
    }
}
