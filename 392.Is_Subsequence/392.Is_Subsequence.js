var isSubsequence = function(s, t) {
        const n = s.length;
        const m = t.length;
        let i = 0; 
        let j = 0;
        
        while(i < n && j < m) {
            if (s.charAt(i) == t.charAt(j)) {
                i++;
                j++;    
            } else {
                j++;
            }
        } 

        return i==n;
};
