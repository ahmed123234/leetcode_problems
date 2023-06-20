function kthSmallest(matrix: number[][], k: number): number {
    let arr  = [];

    matrix.forEach(a => {
        a.forEach(elm => {
            arr.push(elm)
        })
    });

    arr.sort((b, a) => {
        
        return b - a
        
    });

    return arr[k - 1];
};
