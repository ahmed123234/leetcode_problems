class Solution {
    public int numMatchingSubseq(String s, String[] words) {
        int n = s.length();
        int res = 0;

        Map <String, Integer> strings = new HashMap<>();
        
        for (String t : words) {
            strings.put(t, strings.getOrDefault(t, 0) + 1);
        }

        for (String t : strings.keySet()) {
            int m = t.length();
            int i = 0; 
            int j = 0;
            while(i < m && j < n) {
                if (t.charAt(i) == s.charAt(j)) {
                    i++;
                    j++;    
                } else {
                    j++;
                }
            }
             res = (i == m) ? res + strings.get(t) : res;
        }

        return res;
    }
}
