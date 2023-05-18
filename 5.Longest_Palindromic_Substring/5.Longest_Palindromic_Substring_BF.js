/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let n = s.length;
    let res = "";
    let subStr = "";

    for (let i = 0; i < n; i++) {
        subStr = s.charAt(i);

        if(isPalindrome(subStr)) {

            res = compareStrings(subStr, res)
               
        } 
    
        for (let j = i+1; j < n; j++) {
            subStr += s.charAt(j);

            if(isPalindrome(subStr)) {
               res = compareStrings(subStr, res)
            } 
        }
       
    }
    return res;
};

function isPalindrome(str) {
    let i = 0;
    let j = str.length - 1;

    while( i < j) {
        if (str.charAt(i) !== str.charAt(j)) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}

function compareStrings(subStr, res) {
    if (subStr.length > res.length) {
        res = subStr;
    }
    return res;
}
