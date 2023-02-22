var findContentChildren = function(g, s) {
       let i = 0;
        let j = 0;

        let n = g.length;
        let m = s.length;
        let count = 0;
        s.sort((a, b) => {return a - b});
        g.sort((a, b) => {return a - b});

        for(; i< n && j < m;) {
            if (s[j] >= g[i]){
                count ++;
                i++;
            }
            j++;
        }
        return count;
};
