class Solution {
    public int binaryGap(int n) {
        int res = 0;
        int distance = -32;
        for (; n > 0; n /= 2, distance++) {
            if (n % 2 == 1) {
                res = Math.max(res, distance);
                distance = 0;
            }
        }

        return res;
    }
}
