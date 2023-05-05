/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function(n, k) {
    let order = 1;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            if(order === k) {
                return i;
            }
            order++;
        }
    }
    return -1;
};
