class Solution {
    public int countNegatives(int[][] grid) {
        int totalCount = 0;
        int n = grid.length;
        int m = grid[0].length - 1;
        for (int i = 0; i < n; i++) {
            for (int j = m ; j >= 0; j--) {
                if (grid[i][j] < 0)
                    totalCount ++;
                else 
                    break;
            }
        }
        return totalCount;
    }
}
