class Solution {
    public boolean isPrefixString(String s, String[] words) {
     
        String res = "";
        for (String word : words) {
            res += word;
            if (res.equals(s)) {
              return true;
            }
        }
        return false;
    }
}
