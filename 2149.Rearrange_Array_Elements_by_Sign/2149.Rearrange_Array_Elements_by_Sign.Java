class Solution {
    public int[] rearrangeArray(int[] nums) {
        
        List<Integer> positives = new ArrayList<>();
        List<Integer> negatives = new ArrayList<>();
        int n = nums.length;

        for (int i = 0; i < n; i++) {
            if (nums[i] > 0) {
                positives.add(nums[i]);
            } else {
                negatives.add(nums[i]);
            }
        }

        int j = 0, k = 0;

        for (int i = 0; i < n; i++) {
            if (i % 2 == 0) {
                nums[i] = positives.get(j++);
            } else {
                nums[i] = negatives.get(k++);
            }
        }

        return nums;

    }
}
