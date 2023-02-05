var countBadPairs = function(nums) {
    const map = new Map();
    const length = nums.length;
    let bad = 0;

    for(let i = 0; i < length ; i++) {
        const key = nums[i] - i;
        const val = map.get(key) == undefined? 0: map.get(key);
        bad += i - val;
     map.set(key, val + 1);
    }
    
    return bad;
};
