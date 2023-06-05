function maxConsecutive(bottom: number, top: number, special: number[]): number {
    special.sort((a, b) => a - b);
    let n = special.length;
    let max = 0;

    for (let i = 1; i < n; i++) {
        max = Math.max(max,  special[i] - special[i -1] - 1);
    }

    return Math.max(max, special[0] - bottom, top - special[n - 1] );
};
