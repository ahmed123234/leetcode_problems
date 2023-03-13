var rotateString = function(s, goal) {
        const c = goal.charAt(0);
        let  i = s.indexOf(c);

        while (i != -1) {

            const sub1 = s.substring(0, i);
            const sub2 = s.substring(i);
            if ((sub2 + sub1) === goal) {
                return true;
            } 
            i = s.indexOf(c, i + 1);
        } 
        return false;
};

// OR :
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    const a = [];

    for(let value of s) {
        a.push(value);
    };
    console.log(a);
        const n = a.length;

        for (let i = 0; i < n; i++) {
            console.log(a);
            if (a.join("") == goal) {
                return true;
            } 
            a.push(a.shift());
        } 

        return false;
};
