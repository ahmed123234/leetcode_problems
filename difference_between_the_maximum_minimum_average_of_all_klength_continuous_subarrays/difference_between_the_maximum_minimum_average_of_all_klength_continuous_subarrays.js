
var minMaxDiff = (nums, k) => {

	let start = 0;
                let windowSum = 0;
                let minAvg = 0;
                let maxAvg = 0;
                let n = nums.length;

                for (let i = 0; i < n; i++) {
                        windowSum += nums[i];

                        if ( i - start + 1 == k) {
                                int avg = windowSum / k;
                                minAvg = Math.min(minAvg, avg);
                                maxAvg = Math.max(maxAvg, avg);

                                windowSum -= nums[start];
                                start += 1;
                        }
                }

                return maxAvg - minAvg;
};
