/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let n = matrix.length;
    let m = matrix[0].length;
  
    let ans = [];

    for (let i = 0; i < n; i++) {
        let res = [];
        for(let j = 0; j < m; j++) {
            res.push(matrix[j][i]);
        }
        ans.push(res);
    }
    
    return ans;
};

