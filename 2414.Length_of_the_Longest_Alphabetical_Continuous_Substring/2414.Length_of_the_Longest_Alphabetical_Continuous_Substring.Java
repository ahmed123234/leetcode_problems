class Solution {
    public int longestContinuousSubstring(String s) {
    int start = 0;
    int max = 0;
    int slidingLength = 0;
    int n = s.length();
    String alphabetical = "abcdefghijklmnopqrstuvwxyz";
    for(int i = 0; i < n; i++) {
        String str = s.substring(start, i+ 1);

        if(alphabetical.contains(str)) {
            slidingLength = str.length();
            max = Math.max(max, slidingLength);
        } else {
            start ++;
        }
    }
    return max;
    }
}
