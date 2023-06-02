function longestContinuousSubstring(s: string): number {
    let start = 0;
    let max = 0;
    let slidingLength = 0;
    let n = s.length;
    let alphabetical = "abcdefghijklmnopqrstuvwxyz";
    for(let i = 0; i< n; i++) {
        const str = s.substring(start, i+ 1);

        if(alphabetical.includes(str)) {
            slidingLength = str.length;
            max = Math.max(max, slidingLength);
        } else {
            start ++;
        }
    }
    return max;

};
