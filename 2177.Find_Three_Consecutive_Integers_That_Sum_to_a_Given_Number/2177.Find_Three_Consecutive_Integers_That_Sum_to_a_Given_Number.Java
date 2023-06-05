class Solution {
    public long[] sumOfThree(long num) {
          long middleNum = num / 3;
          long  res [] = new long [3]; 

        if (num % 3 != 0) {
            return new long [0];
        } 

            res[0] = middleNum - 1;
            res[1] =  middleNum;
            res[2] =  middleNum + 1;
            return  res;

    }
}
