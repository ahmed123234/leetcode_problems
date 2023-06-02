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

//Using sorting
class Solution {
    public int longestConsecutive(int[] nums) {
        int n = nums.length;
        int count = 1;  
        int max = 0;

        if (n == 0) return 0;
        
        Arrays.sort(nums);

        for (int i = 0; i < n - 1; i++) {
            if (nums[i] != nums[i + 1]) {
                if(nums[i + 1] == nums[i] + 1) {
                    count ++;
                } else {
                    max = Math.max(max, count);
                    count = 1;
                }
            } 
        } 

        return Math.max(max, count);
    }
}
