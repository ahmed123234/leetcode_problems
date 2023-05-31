class Solution {
    public int maxScore(int[] cardPoints, int k) {
        int start = 0;
        int windowSum = 0;
        int ans = 0;
        int totalSum = 0;
        int n = cardPoints.length;

        for(int i = 0; i < n; i++)
            totalSum += cardPoints[i];

        if (k == n) return totalSum;
        if(k == 0) return 0;

        for (int i = 0; i < n; i++) {
            windowSum += cardPoints[i];

            if (i - start + 1 == n - k) {
                ans = Math.max(ans, totalSum - windowSum);
                
                windowSum -= cardPoints[start];
                start ++;
            }

        }
        return ans;
    }
}
