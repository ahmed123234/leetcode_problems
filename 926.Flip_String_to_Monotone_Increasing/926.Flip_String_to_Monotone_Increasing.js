var minFlipsMonoIncr = function(s) {
        let i = 0;
        let n = s.length;
        let ans = 0;
        let numOfOnes = 0;

        for (; i < n; i++) {
            if (s.charAt(i) == '0')
                ans = Math.min(ans + 1, numOfOnes);
            else
                numOfOnes ++;
        }  
        return ans; 
};
