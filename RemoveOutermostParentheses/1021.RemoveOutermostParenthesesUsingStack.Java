class Solution {
    public String removeOuterParentheses(String s) {
        Stack <Character> st = new Stack<> ();
        StringBuilder res = new StringBuilder();

        for(char c : s.toCharArray()) {
            if(!st.isEmpty()) {
                    res.append(c);
            }

            if(c == '(') {
                st.push(c);

            } else {
                st.pop();
                if (st.isEmpty())
                    res.deleteCharAt(res.length()-1);
            }
        }
        return res.toString();
    }
}
