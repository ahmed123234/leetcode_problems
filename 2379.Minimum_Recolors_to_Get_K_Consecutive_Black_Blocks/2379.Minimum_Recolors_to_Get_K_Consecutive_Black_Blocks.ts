function minimumRecolors(blocks: string, k: number): number {
    let windowCount = 0;
    let ans = + Infinity;
    let start = 0;
    let n = blocks.length;

    for(let i = 0; i < n; i++) {
        if (blocks.charAt(i) == 'W')
            windowCount ++;
        
        if (i - start + 1 == k) {
            ans = Math.min(ans, windowCount);

            if (blocks.charAt(start) == 'W')
                windowCount --;

            start ++;
        }
    }
    return ans;
};
