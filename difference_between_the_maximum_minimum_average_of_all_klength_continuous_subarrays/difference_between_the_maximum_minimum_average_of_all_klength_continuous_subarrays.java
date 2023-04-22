public class Solution {
	public int getMinMaxDiff(int [] nums, int k) {
		int start = 0;
		int windowSum = 0;
		int minAvg = 0;
		int maxAvg = 0;
		int n = nums.length;

		for (int i = 0; i < n; i++) {
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
	}
}
