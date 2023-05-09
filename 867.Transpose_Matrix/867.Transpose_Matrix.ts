function transpose(matrix: number[][]): number[][] {
    let n = matrix.length;
    let m = matrix[0].length;

    let ans : number [][] = [];

    for (let i = 0; i < n; i++) {
        let res : number[] = [];
        for(let j = 0; j < m; j++) {
            res.push(matrix[j][i]);
        }
        ans.push(res);
    }

    return ans;
};

