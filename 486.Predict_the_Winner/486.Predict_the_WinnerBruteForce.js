/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function(nums) {
    const firstScore = predictTheWinnerFrom(nums, 0, nums.length - 1);

    let totalScore = 0;
    nums.forEach((val) => {
        totalScore += val;
    });
    console.log(totalScore);

    return firstScore >= totalScore - firstScore;
};


const predictTheWinnerFrom = (nums, i, j) => {

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
