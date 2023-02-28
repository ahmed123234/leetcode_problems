class Solution {
    public int[][] intervalIntersection(int[][] firstList, int[][] secondList) {

        int n = firstList.length; 
        int m = secondList.length;

        if (n == 0 || m == 0) {
            return new int [0][0];
        }

        ArrayList<int[]> res = new ArrayList<>();

        int i = 0;
        int j = 0;

        for (; i < n && j < m;) {
                int [] temp = new int [2];
                temp[0] = Math.max(firstList[i][0], 
                secondList[j][0]);
                temp[1] = Math.min(firstList[i][1], 
                secondList[j][1]);

                if (temp[0] <= temp[1]) {
                    res.add(new int [] {temp[0], temp[1]});
                } 
            
             if(temp[1] == firstList[i][1]) i++;       
             if(temp [1] == secondList[j][1]) j++;
        } 

        return res.toArray(new int [res.size()][2]);
        
    }
}
