var binaryGap = function(n) {
    let res = 0;
    let distance = -32;
    
    for (; n > 0; distance++) {
       // another way to find n % 2 
        if (n & 1 == 1) { 
            res = Math.max(res, distance);
            distance = 0;
        }

        // another way to devide n /2 is by doing bitwise right shift
        n >>= 1; 
    }

    return res; 
};
