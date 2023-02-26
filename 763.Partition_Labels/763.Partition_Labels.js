var partitionLabels = function(s) {
    let res = [];
    let map = new Map();
    let i = 0;
    for(let c of s) {
        map.set(c, i++);
    }

    let max = 0;
    let prev = -1;

    i = 0;
    for(let c of s) {
        max = Math.max(max, map.get(c));
        if (max == i) {
            res.push(max - prev);
            prev = max;
        }
        i++;
    }
    return res;
};
