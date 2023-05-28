function subarraySum(nums: number[], k: number): number {
    const map = new Map();

    map.set(0, 1);
    const n = nums.length;
    let count = 0;
    let sum = 0;

    for (let i = 0; i < n; i++) {
        sum += nums[i];

        if (map.has(sum - k)) {
            count += map.get(sum - k);
        } 

        map.has(sum)? 
        map.set(sum, map.get(sum) + 1):
        map.set(sum, 1);

    }

    return count;
  
};
