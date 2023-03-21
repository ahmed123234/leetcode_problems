class Solution {
    public boolean PredictTheWinner(int[] nums) {
        
      int firstScore = predictTheWinnerFrom(nums, 0, nums.length - 1);

    int totalScore = 0;
    for(int val : nums) {
        totalScore += val;
    };

    return firstScore >= totalScore - firstScore;
};


    private int predictTheWinnerFrom(int [] nums, int i, int j) {

        if (i > j) return 0;

        if (i == j) return nums[i];

        return Math.max(
            nums[i] + Math.min(
                predictTheWinnerFrom(nums, i + 2, j),
                predictTheWinnerFrom(nums, i + 1, j - 1)
            ),
            nums[j] + Math.min(
                predictTheWinnerFrom(nums, i, j - 2),
                predictTheWinnerFrom(nums, i + 1, j - 1)
            )
        );
    }
}
