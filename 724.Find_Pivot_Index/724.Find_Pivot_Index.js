
var pivotIndex = function(nums) {
    let n = nums.length;
        let res = -1; 
        
        for (let i  = 0; i < n; i++) {
            let j = 0;
            let leftSum = 0;
            let rightSum = 0; 

            while(j < i) {
                leftSum += nums[j++];
            }

            j = i + 1;

            while(j < n) {
                rightSum += nums[j++];
            }
            if (rightSum == leftSum) {
                res = i;
                break;
            }
        }
        return res;
};
