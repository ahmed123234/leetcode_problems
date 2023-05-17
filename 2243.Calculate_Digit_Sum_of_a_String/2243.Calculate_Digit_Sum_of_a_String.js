/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSum = function(s, k) {
    while(s.length > k) {
    let temp = "";
    for (let i = 0; i < s.length; i += k) {
      let group;

      if (i + k < s.length) {
       group = s.substring(i, i + k);
      } else {
        group = s.substring(i, s.length);
      }
      let sum = 0;
      for (const c of group) {
        sum += parseInt(c);
      }

      temp += sum;
    }
    s = temp;
  }
  return s;
};
