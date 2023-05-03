class Solution {
    public String fractionAddition(String expression) {
        Scanner tokens = new Scanner(expression).useDelimiter("/|(?=[-+])");
        int A = 0, B = 1;
        while(tokens.hasNext()) {

            int a = tokens.nextInt(), b = tokens.nextInt();
 A = A * b + a * B;
        B *= b;
        int g = gcd(A, B);
        A /= g;
        B /= g;
    }
    return A + "/" + B;

    }


    public int gcd(int a, int b) {
        return  a != 0? gcd(b % a, a): Math.abs(b);
    }
}
