public class Solution {

	public boolean findDuplicates(int [] nums, int k) {

		int start = 0;
		int n = nums.length;

		Set<Integer> set = new HashSet<>();

		for (int i = 0; i< n; i++) {
			
			if ( i - start + 1 <= k) {
				if (!set.add(nums[i]) {
					return false;
				})

	
			}
		}
	}
}
