class Solution {
    public int captureForts(int[] forts) {
        int max = 0;
        int n = forts.length;

        for (int i = 0; i < n; i++) {
            if(forts[i] == 1 ) {
                for (int j = i + 1; j < n; j++) {
                    if(forts[j] == -1){
                        max = Math.max(max, j - i - 1);
                        break;
                    }else if(forts[j] == 1){
                        break;
                    }
                }
            }else if(forts[i] == -1){
                for (int j = i + 1; j < n; j++) {
                    if(forts[j] == 1){
                        max = Math.max(max, j - i - 1);
                        break;
                    }else if(forts[j] == -1){
                        break;
                    }
                }
            }
        }
        return max;
    }
}
