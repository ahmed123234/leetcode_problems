class Solution {
    Brute Force Algorithm:
    Time complexity: O(n2)
    Space complexity: O(1)
    public int subarraysDivByK(int[] nums, int k) {
        int sum = 0;
        int length = nums.length;
        for (int i = 0; i < length; i++) {
            int currentVal = 0;
            for (int j = i; j < length; j++) {
                currentVal += nums[j];
                if (currentVal % k == 0) {
                    sum ++;
                }
            }
        }
        return sum;
    }
}
