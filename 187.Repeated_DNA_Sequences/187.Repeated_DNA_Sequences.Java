class Solution {
    public List<String> findRepeatedDnaSequences(String s) {
        List<String> res = new ArrayList <> ();
        Map <String, Integer> map = new HashMap<>();
        int n = s.length();
        for (int i = 0; i < n - 9; i++) {
            String temp = s.substring(i, i + 10);
            map.put(temp, map.getOrDefault(temp, 0) + 1);
        }

        for (String key : map.keySet()) {
            if (map.get(key) > 1) {
                res.add(key);
            }
        }
        return res;
    }
}
