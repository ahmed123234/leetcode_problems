/**
 * @param {string} s
 * @return {number}
 */

var maxDepth = function(s) {

    let length = s.length;
    let maxDepth = 0;
    let curr = 0;

    for (let i = 0; i <length; i++) {

    	if (s.charAt(i) == '(') 
            maxDepth = Math.max( maxDepth, ++curr);

        else if(s.charAt(i) == ')')
            curr--;

        else
            continue;

     }

     return maxDepth;
};
