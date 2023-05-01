function findTheLongestBalancedSubstring(s: string): number {
    let n = s.length;
    let longestLength = 0;
    let temp = "01";

     while(temp.length <= n) {
         if (s.match(temp))
            longestLength = temp.length;
        temp = "0".concat(temp , "1");
     }
        
     return longestLength;
};
