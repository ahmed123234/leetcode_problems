var intersect = function(nums1, nums2) {
    let n = nums1.length;
    let m = nums2.length;
    const res = [];

    nums1.sort(function(a, b){
        return a - b;
    });
    nums2.sort(function(a, b){
        return a - b;
    });
    for(let i = 0, j = 0 ; i < n && j < m;) {

        if(nums1[i] == nums2[j]) {

            res.push(nums1[i]);
            i++;
            j++;

        } else if (nums1[i]< nums2[j]) {

            i++;

        } else {
            j++;
        }

    }

    return res;
};
