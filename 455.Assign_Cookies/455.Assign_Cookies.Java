class Solution {
    public int findContentChildren(int[] g, int[] s) {
        int i = 0;
        int j = 0;

        int n = g.length;
        int m = s.length;
        int count = 0;
        Arrays.sort(s);
        Arrays.sort(g);

        for(; i< n && j < m;) {
            if (s[j] >= g[i]){
                count ++;
                i++;
            }
            j++;
        }
        return count;
    }
}
