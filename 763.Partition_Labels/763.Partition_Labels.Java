class Solution {
    public List<Integer> partitionLabels(String s) {
        Map<Character, Integer> map = new HashMap<>();
        List<Integer> res = new ArrayList<>();

        int n = s.length();

        int max = 0;
        int prev = -1;

        for(int i = 0; i < n; i++) {
            map.put(s.charAt(i), i);
        }


        for(int i = 0; i < n; i++) {
            max = Math.max(map.get(s.charAt(i)), max);
            if (max == i) {
                res.add(max - prev);
                prev = max;

            }
        }
        return res;


    }
}
