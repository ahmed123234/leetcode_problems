
class Solution {
    public int[] finalPrices(int[] prices) {
        int length = prices.length;
        for (int i = 0; i < length - 1 ; i++) {
            for (int j = i + 1; j < length; j++) {
                if (prices[j] <= prices[i]) {
                    prices[i] -= prices[j];
                    break;
                }
            }
        }
        return prices;
    }
}
