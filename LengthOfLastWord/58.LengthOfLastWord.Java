class Solution {

    public int lengthOfLastWord(String s) {

        int length = s.trim().length() - 
		s.trim().lastIndexOf(" ") - 1;

        return length;
    }

//   OR (But inneffecient)
//   String [] res = s.split("( )+");
//   return res[res.length - 1].length();
    
}
