class Solution {
    public int[] answerQueries(int[] nums, int[] queries) {
        int n = nums.length; 
        int m = queries.length;
        int [] res = new int [m];

        Arrays.sort(nums);

        for (int i = 1; i < n; ++i) {
            nums[i] += nums[i - 1];
            System.out.println(nums[i]);
        }

        for (int i = 0; i< m; i++) {
            int j = Arrays.binarySearch(nums, queries[i]);

            res[i] = Math.abs(j + 1);
            System.out.println(j);
        }

        return res;
    }
}
