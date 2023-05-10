/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function(s, words) {
  
    let res = "";
    for (const word of words) {
        res += word;
        if (res === s) {
          return true;
        }
    }
    return false;
};
