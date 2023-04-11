class Solution {
    public boolean isCircularSentence(String sentence) {
        
        int n = sentence.length() - 1;

        for (int i = 0; i < n; i++) {

            if (sentence.charAt(i) == ' ') {
                if (sentence.charAt(i + 1) != sentence.charAt(i - 1))
                    return false;
            }
        }
        

        return sentence.charAt(0) == sentence.charAt(sentence.length() - 1);
    }
}
