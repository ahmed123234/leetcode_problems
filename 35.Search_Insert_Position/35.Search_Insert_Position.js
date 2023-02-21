var searchInsert = function(nums, target) {
    let i =0;
    let j = nums.length - 1;
    let index = -1;
    while(i <= j) {
        if(nums[i] >= target) {
            index = i;
            break;
        }
        i++;
    }

    return index == -1 ? j + 1: index;
};
