class Solution {
    public int longestConsecutive(int[] nums) {
        Map<Integer, Boolean> map = new HashMap<>();
        int n = nums.length;

        for (int num : nums) {
            map.put(num, false);
        }
        // determine the starting point element
        for (int i = 0; i < n; i++) {
            if (!map.containsKey(nums[i] - 1))  
                map.put(nums[i], true);
        }   

        int max = 0;
         for (int i = 0; i < n; i++) {
            if (map.get(nums[i]) == true) {
                int j = 0;
                int count = 0;
                while(map.containsKey(nums[i] + j)) {
                    count ++;
                    j++;
                }
                max = Math.max(max, count);
            } 
        } 

        return max;
    }
}
