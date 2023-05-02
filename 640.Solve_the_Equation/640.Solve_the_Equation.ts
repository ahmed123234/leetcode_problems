function solveEquation(equation: string): string {
     let sides = equation.split("=");
      
        let res = evaluate(sides[0]),
        res1 = evaluate(sides[1]);


        res[0] -= res1[0];
        res[1] = res1[1] - res[1];

        if(res[0] === 0 && res[1] === 0)
            return  "Infinite solutions";
        if(res[0] === 0) {
            return "No solution";
        } 
        return "x=" + Math.floor(res[1] / res[0]);
};


function evaluate(exp: string): number[] {
       
    let tokens = exp.split("?=[-+]"); 
    let res = [0, 0];
    for (const token of tokens) {
        if (token === "+x" || token === "x") 
            res[0] += 1;
	    else if (token === "-x") res[0] -= 1;
	    else if (token.includes("x")) res[0] += parseInt(token.substring(0, token.indexOf("x")));
	    else res[1] += parseInt(token);
    }
        return res;
}
