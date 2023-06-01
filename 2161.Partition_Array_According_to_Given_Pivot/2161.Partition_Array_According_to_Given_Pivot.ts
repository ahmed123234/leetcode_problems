function pivotArray(nums: number[], pivot: number): number[] {
    let before = [];
    let after = [];
    let equal = [];
    
    nums.forEach(value => {
        if (value < pivot) {
            before.push(value);
        } else if (value > pivot) {
            after.push(value);
        }  else {
            equal.push(value);
        }
    });

    return before.concat(equal, after); 
};
