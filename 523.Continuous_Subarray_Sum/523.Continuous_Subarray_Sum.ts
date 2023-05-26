function checkSubarraySum(nums: number[], k: number): boolean {
    let n = nums.length;
    const map = new Map();

    map.set(0, 0);
    let sum = 0;

    for (let i = 0; i < n; i++) {
        sum += nums[i];
        if(!map.has(sum % k)) {
            map.set(sum % k, i + 1);
        } else {
            if(map.get(sum % k) < i) {
                return true;
            }
        }
    }
    return false;
};
