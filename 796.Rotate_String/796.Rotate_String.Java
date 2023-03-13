class Solution {
    public boolean rotateString(String s, String goal) {
        char c = goal.charAt(0);
        int  i = s.indexOf(c);

        while (i != -1) {

            String sub1 = s.substring(0, i);
            String sub2 = s.substring(i);
            if ((sub2 + sub1).equals(goal)) {
                return true;
            } 
            i = s.indexOf(c, i + 1);
        } 
        return false;
    }
}
