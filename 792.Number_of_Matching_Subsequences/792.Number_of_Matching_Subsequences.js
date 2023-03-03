/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(s, words) {
       let n = s.length;
        let res = 0;
        
        for (let t of words) {
            let m = t.length;
            let i = 0; 
            let j = 0;
            while(i < m && j < n) {
                if (t.charAt(i) == s.charAt(j)) {
                    i++;
                    j++;    
                } else {
                    j++;
                }
            }
             res = (i == m) ? ++ res : res;
        }

        return res;
};
