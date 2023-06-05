class Solution {
    public int maxConsecutive(int bottom, int top, int[] special) {
        
        Arrays.sort(special);
        int n = special.length;
        int max = 0;

        for (int i = 1; i < n; i++) {
            max = Math.max(max,  special[i] - special[i -1] - 1);
        }

        return Math.max(max,  Math.max(special[0] - bottom, top - special[n - 1]));
    }
}
