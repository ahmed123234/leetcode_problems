class Solution {
    public int arrangeCoins(int n) {
      
	return (int)(Math.sqrt(2 * (long)n + 0.25) - (0.5));

    // Solution using sequantial search   
      int res = 0;
      int i = 1;
      while (i <= n) {
          n -= i++;
          res++;
      }
      return res;
    }
}
