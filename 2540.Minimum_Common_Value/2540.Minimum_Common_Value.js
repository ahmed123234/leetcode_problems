var getCommon = function(nums1, nums2) {

    let n = nums1.length;
    let m = nums2.length;

    for(let i = 0, j = 0 ; i < n && j < m;) {

        if(nums1[i] == nums2[j]) {

            return nums1[i];

        } else if (nums1[i]< nums2[j]) {

            i++;

        } else {
            j++;
        }

    }

    return -1;
};
