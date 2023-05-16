class Solution {
    public long numberOfWays(String s) {
        long zero = 0, one = 0;
        long res = 0, n01 = 0, n10 = 0;
        for (char c: s.toCharArray()) {
          if(c == '0') {
            zero++;
            n10 += one;
            res += n01;
          } else {
            one++;
            n01 += zero;
            res += n10;
          }
        }

        return res;
    }
}
