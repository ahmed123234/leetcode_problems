class Solution {
    public int maxVowels(String s, int k) {
        int slidingCount = 0;
        int n = s.length();
        int max = 0;
        int start = 0;

        for (int i = 0; i < n; i++) {
            
            if (isVowel(s.charAt(i))) {
                slidingCount ++;
            }

            if (i - start + 1 == k) {
                max = Math.max(max, slidingCount);
                if(isVowel(s.charAt(start))) {
                    slidingCount --;
                }
                start ++;
            }

        }
        return max;
    }

    public boolean isVowel(char c) {
        if (c == 'a' || c == 'e' || c == 'i'|| c == 'o' || c == 'u') 
            return true;

        return false;
    }
}


