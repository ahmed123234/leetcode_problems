class Solution {
    public int myAtoi(String s) {
        s = s.trim();
        
        int res = 0;
        char sign = '+';

        if (s.length() == 0) {
            return res;
        }

        if (s.charAt(0) == '+' || s.charAt(0) == '-') {
            sign = s.charAt(0);
            s  = s.substring(1);
        }

        for (char c : s.toCharArray()) {
            if (!(Character.isDigit(c))) {
                break;
            }

            int digit = c - '0'; 

            if ( res > Integer.MAX_VALUE / 10 
            || ((res == Integer.MAX_VALUE / 10) && (digit > 7))) {
                return (sign == '+') ? Integer.MAX_VALUE : Integer.MIN_VALUE;
            }
            res =  (digit) + (10 * res);
        }

        return (sign == '+')? res : -res;

    }
}
