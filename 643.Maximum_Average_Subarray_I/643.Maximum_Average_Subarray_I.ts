function findMaxAverage(nums: number[], k: number): number {
    // using sliding window pattern 

    let windowSum = 0;
    let start = 0;
    let maxAvg = - Infinity;
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        windowSum += nums[i];

        if(i - start + 1 == k) {
            const avg = (windowSum / k) ;
            maxAvg = Math.max(maxAvg, avg);
            windowSum -= nums[start];
            start += 1;
        }
    }
    return maxAvg;
};
