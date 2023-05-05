class Solution {
    public int kthFactor(int n, int k) {
        int order = 1;
        for (int i = 1; i <= n; i++) {
            if (n % i == 0) {
                if(order == k) {
                    return i;
                }
                order++;
            }
            
        }
        return -1; 
    }
}
