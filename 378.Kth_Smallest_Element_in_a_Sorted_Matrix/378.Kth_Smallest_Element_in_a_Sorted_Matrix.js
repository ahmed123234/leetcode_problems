/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    let arr  = [];

    matrix.forEach(a => {
        a.forEach(elm => {
            arr.push(elm)
        })
    });

    // console.log(arr)

    arr.sort((b, a) => {
        
        return b - a
        
    });

    // console.log(arr)


    return arr[k - 1];
};
