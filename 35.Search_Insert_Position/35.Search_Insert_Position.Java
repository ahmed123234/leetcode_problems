class Solution {
    public int searchInsert(int[] nums, int target) {
    int i =0;
    int j = nums.length - 1;
    int index = -1;
    while(i <= j) {
        if(nums[i] >= target) {
            index = i;
            break;
        }
        i++;
    }

    return index == -1 ? j + 1: index;

    }
}
