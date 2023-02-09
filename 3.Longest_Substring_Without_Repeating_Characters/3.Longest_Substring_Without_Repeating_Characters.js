var lengthOfLongestSubstring = function(s) {
    const map = new Map();
    const n = s.length;
    let max = 0;
    for (let i = 0, j = 0; i < n; ++i) {
        const c = s.charAt(i);
        if(map.has(c)) {
            j = Math.max(j, map.get(c) + 1); 
        }
        map.set(c, i);
        max = Math.max(max, i - j + 1 );
    }
    return max;
};
