class Solution {
    public List<Integer> findAnagrams(String s, String p) {
        int n = p.length();
        int m = s.length();
        List <Integer> list = new ArrayList <> ();
        
        for(int i = 0; i <= m - n; i++){
	   
	   String sub = s.substring(i, i + n);
            
           if(isAngram(sub, p, sub.length(), n))
               list.add(i);
        }
        return list;
    }
        
        public static boolean isAngram(String a, String b,
                      int m, int n) {
            int [] chars = new int [26];
            if(n != m)
                return false;
            
            for(int i = 0; i < m; i++) {
               chars[a.charAt(i) - 'a'] += 1;                 
               chars[b.charAt(i) - 'a'] -= 1;    
            }

            for(int i = 0; i < 26; i++) 
                if(chars[i] != 0)
                    return false;
             
            return true;
    }
}
