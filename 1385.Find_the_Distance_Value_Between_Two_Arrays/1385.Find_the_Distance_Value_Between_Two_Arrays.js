var findTheDistanceValue = function(arr1, arr2, d) {
    let count = arr1.length;
    let n = arr1.length;
    let m = arr2.length;

    for (let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(Math.abs(arr1[i]- arr2[j]) <= d) {
                count --;
                break;
            } 
        }
    }
    return count;
};
