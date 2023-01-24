/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
        let st = [];
        let res = [];

        for(let c of s) {
            if(st.length != 0) {
                    res.push(c);
            }

            if(c == '(') {
                st.push(c);

            } else {
                st.pop();
                if (st.length == 0)
                    res.pop();
            }
        }
        s = "";
        for (let c of res) {
            s += c;
        }
        return s;
};
