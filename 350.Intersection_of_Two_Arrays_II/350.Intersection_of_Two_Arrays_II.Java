class Solution {
    public int[] intersect(int[] nums1, int[] nums2) {
        int n = nums1.length;
        int m = nums2.length;
        Arrays.sort(nums1);
        Arrays.sort(nums2);
        ArrayList <Integer> common = new ArrayList<>();

         for(int i = 0, j = 0 ; i < n && j < m;) {
            if(nums1[i] == nums2[j]) {
                
                common.add(nums1[i]);
                i++;
                j++;

            } else if(nums1[i] < nums2[j]) {
                
                i++;

            } else {

                j++;
                
            }
        }

        n = common.size();
        int [] commonRes = new int [n];
        
        for(int i = 0; i < n; i++)
            commonRes[i] = common.get(i);

        return commonRes;
        
    }
}
