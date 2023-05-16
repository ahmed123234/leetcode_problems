/**
 * @param {string} s
 * @return {number}
 */
var numberOfWays = function(s) {
      let zero = 0, one = 0;
      let res = 0, n01 = 0, n10 = 0;
        for (const c of s) {
          if(c === '0') {
            zero++;
            n10 += one;
            res += n01;
          } else {
            one++;
            n01 += zero;
            res += n10;
          }
        }

        return res;
};
