/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {

    let low = 0;
    let high = nums.length - 1;

    while(low < high) {
        let mid = (low + high) / 2;      // divide the array
            
        if(nums[mid] == nums[mid + 1]) mid = mid - 1;      //two same elements should be in same half
            
        if((mid - low + 1) % 2 != 0) high = mid;            // checking the length of left half. If its is odd then update ur right pointer to mid
            
        else low = mid + 1; 
    }

    return nums[low]
}; 
