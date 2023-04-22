class Solution {
    public int[] findErrorNums(int[] nums) {
        int[] res = new int[2];
    for (int i : nums) {
        if (nums[Math.abs(i) - 1] < 0) res[0] = Math.abs(i);
	else nums[Math.abs(i) - 1] *= -1;
    }
    for (int i=0;i<nums.length;i++) {
        if (nums[i] > 0) res[1] = i+1;
    }
    return res;
    }
}

//OR using hash set

class Solution {
    public int[] findErrorNums(int[] nums) {
        int n = nums.length;
        int expectedSum = (n * (n + 1)) / 2;
        int  currentSum = 0;
        int [] res = new int [2];

        Set<Integer> s = new HashSet<>();
         int pre = 0;

        for(int val : nums) {
            if (!s.add(val)) {
                res[0] = val;
                currentSum -= val;
            }
            currentSum += val;
        }


        res[1] = expectedSum - currentSum;
        return res;
    }
}
