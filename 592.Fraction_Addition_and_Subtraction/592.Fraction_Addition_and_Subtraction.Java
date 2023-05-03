class Solution {
    public String fractionAddition(String expression) {
        return evaluate(expression);
    }


    public int gcd(int a, int b) {
        return  a != 0? gcd(b % a, a): Math.abs(b);
    }


    public String evaluate(String exp) {

    //   split the tokens using positive lookahead regex
    /* split according to every token folows by +/- but +/- 
        are not in the exp;
    */
        String[] tokens = exp.split("(?=[-+])");
    int A = 0, B = 1;
    for (String token : tokens) {
    
        System.out.println(token);
        String nums[] = token.split("/"); 

        int a = Integer.parseInt(nums[0]);
        int b = Integer.parseInt(nums[1]); 

        A = A * b + B * a;

        B *= b;
        int g = gcd(A, B);
        A /= g;
        B /= g;

    }
        return A + "/" + B;
    }
}
