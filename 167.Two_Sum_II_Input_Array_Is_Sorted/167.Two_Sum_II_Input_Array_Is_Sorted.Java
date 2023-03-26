class Solution {
    public int[] twoSum(int[] numbers, int target) {
        int [] res = new int [2];
        int n = numbers.length - 1;
        int i = 0;
        int j = n;

        for (; i < n && j > 0 && i != j;) {
            int temp = numbers[i] + numbers [j];
            if (temp < target) {
                i ++;
            } else if (temp > target) {
                j --;
            }
            else {
                res[0] = ++i;
                res[1] = ++j;
                break;
            }
        }

        return res;

    }
}
