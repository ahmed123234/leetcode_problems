class Solution {
    public int findTheDistanceValue(int[] arr1, int[] arr2, int d) {
        
        int count = arr1.length;
        int n = arr1.length;
        int m = arr2.length;

        for (int i = 0; i < n; i++) {
            for(int j = 0; j < m; j++) {
                if(Math.abs(arr1[i]- arr2[j]) <= d) {
                    count --;
                    break;
                } 
            }
        }
        return count;
    }
}
