class Solution {
    public List<Integer> majorityElement(int[] nums) {
        int n = nums.length;
        int occurance = n / 3;

        Map <Integer, Integer> map = new HashMap<>();
        List<Integer> res = new ArrayList<>();
        
        for (int num : nums) {
            map.put(num, map.getOrDefault(num, 0)+1);
        }


        for (int key : map.keySet()) {
             if (map.get(key) > occurance) {
                res.add(key);
            }
        }
        return res;
    }
}
