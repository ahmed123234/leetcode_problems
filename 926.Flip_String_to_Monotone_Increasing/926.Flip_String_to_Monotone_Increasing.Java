class Solution {
    public int minFlipsMonoIncr(String s) {
        int i = 0;
        int n = s.length();
        int ans = 0;
        int numOfOnes = 0;

        for (; i < n; i++) {
            if (s.charAt(i) == '0')
                ans = Math.min(ans + 1, numOfOnes);
            else
                numOfOnes ++;
        }  
        return ans; 
    }
}
