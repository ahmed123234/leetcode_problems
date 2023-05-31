class Solution {
    public int minimumRecolors(String blocks, int k) {
        int windowCount = 0;
        int ans = Integer.MAX_VALUE;
        int start = 0;
        int n = blocks.length();

        for(int i = 0; i < n; i++) {
            if (blocks.charAt(i) == 'W')
                windowCount ++;
            
            if (i - start + 1 == k) {
                ans = Math.min(ans, windowCount);

                if (blocks.charAt(start) == 'W')
                    windowCount --;

                start ++;
            }
        }
        return ans;
    }
}
