class Solution {
    public int distributeCandies(int[] candyType) {
       Set<Integer> set = new HashSet<>();

       for (int type : candyType) {
         set.add(type);
       } 
        int size = set.size(),
        len = candyType.length / 2; 
        if(size < len) {
          return set.size();
        }
        return len;

    }
}
