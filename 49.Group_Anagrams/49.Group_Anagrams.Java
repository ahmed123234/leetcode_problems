class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {

        Map <String, List<String>> map = new HashMap<>();

        for (String str : strs) {
            char [] s = str.toCharArray();
            char[] ca = new char[26];
            for (char c : s) ca[c - 'a']++;
            String keyStr = String.valueOf(ca);
            if (!map.containsKey(keyStr))  
                map.put(keyStr, new ArrayList<>());
                
            map.get(keyStr).add(str);
        }

        return new ArrayList<>(map.values());
    }
}

