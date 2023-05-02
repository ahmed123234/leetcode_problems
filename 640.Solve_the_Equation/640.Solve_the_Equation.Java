class Solution {
    public String solveEquation(String equation) {

        String sides [] = equation.split("=");
      
        int [] res = evaluate(sides[0]),
        res1 = evaluate(sides[1]);

        int k1 = res[0], k2 = res1[0];
        int v1 = res[1], v2 = res1[1];

        k1 -= k2;
        v1 = v2 - v1;

        if(k1 == 0 && v1 == 0)
            return  "Infinite solutions";
        if(k1 == 0) {
            return "No solution";
        } 
        return "x=" + v1 / k1; 

        
    }

    public int [] evaluate(String exp) {
      
        String[] tokens = exp.split("(?=[-+])"); 
    int[] res =  new int[2];
    for (String token : tokens) {
        if (token.equals("+x") || token.equals("x")) 
            res[0] += 1;
	    else if (token.equals("-x")) res[0] -= 1;
	    else if (token.contains("x")) res[0] += Integer.parseInt(token.substring(0, token.indexOf("x")));
	    else res[1] += Integer.parseInt(token);
    }
        return res;
    }
}


