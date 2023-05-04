class Solution {
    public int[] findColumnWidth(int[][] grid) {
        int m = grid.length;
        int n = grid[0].length;
        int result [] = new int [n];

        for(int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                
                int width = findLength(grid[i][j]);
                result[j] = Math.max(width, result[j]);
                
            }    
        }
        return result;
    }


    public int findLength(int num) {
        int width = 0;
        if (num <= 0) {
            width ++;
        }

        while(num != 0) {
            width ++;
            num /= 10;        
        }

        return width;
    }
    
}
