function minimumDeletions(nums: number[]): number {
    const n = nums.length;

    let minF = nums[0];
    let maxF = nums[0];    
    
    let minB = nums[n - 1];
    let maxB = nums[n - 1]

    let minCf = 1, minCB = 1, maxCf = 1, maxCB = 1;

    for (let i = 0, j = n - 1; i < n && j >= 0; i++,j--) {
        if (nums[i] > maxF) {
            maxF = nums[i];
            maxCf = i + 1;
        }

        if (nums[j] > maxB) {
            maxB = nums[j];
            maxCB = n - j;
        }

        if (nums[i] < minF) {
            minF = nums[i];
            minCf = i + 1;
        }

        if (nums[j] < minB) {
            minB = nums[j];
            minCB = n - j;
        }
    }

    console.log("minCf ", minCf,
     "maxCf", maxCf,
     "minCB", minCB,
     "maxCB", maxCB)

     
    return Math.min(
        Math.max(minCf , maxCf),
        (Math.min(minCB, minCf) + Math.min(maxCB, maxCf)),
        Math.max(minCB , maxCB)
    )

};

