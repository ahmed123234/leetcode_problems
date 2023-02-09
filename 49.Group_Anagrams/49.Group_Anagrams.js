var groupAnagrams = function(strs) {
    map = new Map();
    
    for(const str of strs) {
        let key = str.split("").sort().join("");

        if(!map.has(key)) {
            map.set(key, [str]);
        }
        else
            map.get(key).push(str);

    }

    const res = [];

    map.forEach ((value, key) => {
        res.push(map.get(key));

    });

    return res;
};
