function maxScore(cardPoints: number[], k: number): number {
    let start = 0;
    let windowSum = 0;
    let ans = 0;
    let totalSum = 0;
    let n = cardPoints.length;

    totalSum = cardPoints.reduce((value, tSum) => {
        return tSum += value;
    })

    if (k == n) return totalSum;
    if(k == 0) return 0;

    for (let i = 0; i < n; i++) {
        windowSum += cardPoints[i];

        if (i - start + 1 == n - k) {
            ans = Math.max(ans, totalSum - windowSum);
            
            windowSum -= cardPoints[start];
            start ++;
        }

    }
    return ans;
};
