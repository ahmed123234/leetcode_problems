class Solution {

    public int maxDepth(String s) {

        int length = s.length();
        int maxDepth = 0;
        int curr = 0;

        for (int i = 0; i <length; i++) {

            if (s.charAt(i) == '(') 
                maxDepth = Math.max( maxDepth, ++curr);

            else if(s.charAt(i) == ')')
                curr--;

            else
                continue;
        }

        return maxDepth;
    }
}
