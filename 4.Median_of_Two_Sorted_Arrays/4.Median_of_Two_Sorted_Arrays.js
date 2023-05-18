/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    
    nums1 = [...nums1, ...nums2].sort((a, b)=> {
        return b - a;
    });

    let n = nums1.length   

    if(nums1.length % 2 === 0) {
        let mid = (0 + n) / 2;
        return (nums1[mid - 1] + nums1[mid]) / 2
    
    } 
    return nums1[Math.floor((0 + n)/ 2)]
};
