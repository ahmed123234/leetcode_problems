function maxVowels(s: string, k: number): number {
    let slidingCount = 0;
    let n = s.length;
    let max = 0;
    let start = 0;

    for (let i = 0; i < n; i++) {
        
        if (isVowel(s.charAt(i))) {
            slidingCount ++;
        }

        if (i - start + 1 === k) {
            max = Math.max(max, slidingCount);
            if(isVowel(s.charAt(start))) {
                slidingCount --;
            }
            start ++;
        }

    }
    return max;
};

function isVowel(c= ''): boolean {
    if (c === 'a' || c === 'e' || c === 'i'|| c === 'o' || c === 'u') 
    return true;

    return false;
}
