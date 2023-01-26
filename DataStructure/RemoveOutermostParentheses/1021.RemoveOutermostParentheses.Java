class Solution {
    public String removeOuterParentheses(String s) {
        int opened = 0;
        StringBuilder res = new StringBuilder();

        for(char c : s.toCharArray()) {
            if (c == '(' && opened++ > 0) {
                res.append(c);
            }
            
            if (c == ')' && opened-- > 1){
                res.append(c);
            }
        }
        return res.toString();
    }
}
