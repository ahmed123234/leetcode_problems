var rearrangeArray = function(nums) {
       positives = [];
        negatives = [];
        let n = nums.length;

        for (let i = 0; i < n; i++) {
            if (nums[i] > 0) {
                positives.push(nums[i]);
            } else {
                negatives.push(nums[i]);
            }
        }

        let j = 0, k = 0;

        for (let i = 0; i < n; i++) {
            if (i % 2 == 0) {
                nums[i] = positives[j++];
            } else {
                nums[i] = negatives[k++];
            }
        }

        return nums;
};
