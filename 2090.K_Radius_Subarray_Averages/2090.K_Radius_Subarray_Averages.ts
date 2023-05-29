function getAverages(nums: number[], k: number): number[] {
const n = nums.length;
const count = 2 * k + 1;

        const res: number[] = [];
        const prefixSum: number[] = [];
       
        for (let i = 0; i < n; i++) {
            if (i == 0) {
                prefixSum.push(nums[i]);    
            } else
                prefixSum.push(prefixSum[i - 1] + nums[i]);
        }

        for (let i = 0; i < n; i++) {
            if (i >= k && n - i - 1>= k) {
                let j = i - k;
                let sum = 0;

                if (i - k === 0) {
                    sum = prefixSum[i + k]; 
                } else
                    sum = prefixSum[i + k] -
                prefixSum[i - k - 1];

                res.push(Math.floor(sum / count));
            } else {
                res.push(-1);
            }
        }
        return res;
};
