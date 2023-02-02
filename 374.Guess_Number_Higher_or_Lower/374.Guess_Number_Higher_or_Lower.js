** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let l = 0;
        let h = n;
            while(l <= h) {
	    //Using Unsigned shift right operator >>>
            let mid = (h + l) >>> 1;
            let g = guess(mid);

            if (g == 0) 
                return mid;

            else if (g == -1) {
                h = mid - 1;
                
            } else if (g == 1) {
                l = mid + 1;
            }
        }

        return 0;
};
