class Solution {
    public boolean areNumbersAscending(String s) {
        String [] words = s.split(" ");
        int prev = Integer.MIN_VALUE;
        for (String word : words) {
            if(Character.isDigit(word.charAt(0))) {
                int n = word.length();
                int i = 0;
                int num = 0;
                while (i < n) {
                    num = (word.charAt(i++) - '0') + num * 10;
                } 

                if (num > prev) {
                    prev = num;
                } else {
                    return false;
                }
            }
        }

        return true;
    }
}
