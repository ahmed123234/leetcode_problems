class Solution {
    public double myPow(double x, int n) {
        
	if(n<0) return 1/x * myPow(1/x, -(n+1));
    	if(n==0) return 1;
    	if(n==2) return x*x;
    	return (n%2==0)? myPow( myPow(x, n/2), 2) :
    	x*myPow( myPow(x, n/2), 2);
   
    }
}
