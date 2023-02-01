var countNegatives = function(grid) {
    let totalCount = 0;
        let n = grid.length;
        let m = grid[0].length - 1;
        for (let i = 0; i < n; i++) {
            for (let j = m ; j >= 0; j--) {
                if (grid[i][j] < 0)
                    totalCount ++;
                else 
                    break;
            }
        }
        return totalCount;
};
