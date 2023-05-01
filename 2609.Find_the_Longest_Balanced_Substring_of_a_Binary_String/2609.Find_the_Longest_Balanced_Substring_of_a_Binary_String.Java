class Solution {
    public int findTheLongestBalancedSubstring(String s) {
     int n = s.length();
     int longestLength = 0;
     String temp = "01";

     while(temp.length() <= s.length()) {
         if (s.contains(temp))
            longestLength = temp.length();
        temp = "0" + temp + "1";
     }
        
     return longestLength;
    }
}
