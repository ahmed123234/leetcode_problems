class Solution {
    public String digitSum(String s, int k) {
        while(s.length() > k) {
    String temp = "";
    for (int i = 0; i < s.length(); i += k) {
      String group;

      if (i + k < s.length()) {
       group = s.substring(i, i + k);
      } else {
        group = s.substring(i);
      }
      int sum = 0;
      for (char c : group.toCharArray()) {
        sum += c - '0';
      }

      temp += "" + sum;
    }
    s = temp;
  }
  return s;
    }
}
