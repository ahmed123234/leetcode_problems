var maximumCount = function(nums) {
    let neg = 0;
        let max = nums.length;

        for(let val of nums) {
            if(val > 0){
                break;
            }
            if (val < 0)
                neg++;
            if (val == 0)
                max --;          
        }

        return Math.max(neg, max - neg);
};
