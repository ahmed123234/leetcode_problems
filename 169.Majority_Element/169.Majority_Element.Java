class Solution {
    public int majorityElement(int[] nums) {
        int n = nums.length;
        int occurance = n / 2;

        Map <Integer, Integer> map = new HashMap<>();

        for (int num : nums) {
            map.put(num, map.getOrDefault(num, 0)+1);

            if (map.get(num) > occurance) {
                return num;
            }
        }
        return 0;
    }
}
