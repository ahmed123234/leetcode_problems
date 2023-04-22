var maxSum = (arr, k) => {

	let start = 0;
        let n = arr.length;
        let sum = 0;
	let maxSum = 0;

        for (let i = 0; i < n; i++) {
		sum += arr[i];
                
		if (i - start + 1 == k) {
                     	maxSum = Math.max(maxSum, sum);
                     	sum -= arr[start];
			start += 1;
                }
        }
        
	return maxSum;
}
