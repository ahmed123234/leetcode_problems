/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
        const res = [];
        const map = new Map();
        const n = s.length;
        for (let i = 0; i < n - 9; i++) {
            const temp = s.substring(i, i + 10);

            if (!map.has(temp))
                map.set(temp, 1);
            else  {
                let val = map.get(temp);
                map.set(temp, ++val);
            }
            
        }

        map.forEach((val, key) => {
            if (val > 1)
                 res.push(key);
        });

        return res;
};
