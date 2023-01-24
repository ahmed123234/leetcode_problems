/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
        let opened = 0;
        let res = [];

        for(let c of s) {
            if(c == '(' && opened++ > 0) {
                res.push(c);
            }
                
            if (c == ')' && opened-- > 1) {
                    res.push(c);
            }
        }
        s = "";
        for (let c of res) {
            s += c;
        }
        return s;
};
