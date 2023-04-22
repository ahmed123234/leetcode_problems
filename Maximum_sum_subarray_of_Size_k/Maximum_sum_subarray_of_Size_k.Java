class Solution {
	public int getMaxSum(int [] arr, int k) {
		int start = 0;
		int n = arr.length;
		int sum = 0;
		int maxSum = 0;

		for (int i = 0; i < n; i++) {
			sum += arr[i];

			if (i - start + 1 == k) {
				maxSum = Math.max(maxSum, sum);
				sum -= arr[start];
				start += 1;
			}
		}

		return maxSum;
	}
}
