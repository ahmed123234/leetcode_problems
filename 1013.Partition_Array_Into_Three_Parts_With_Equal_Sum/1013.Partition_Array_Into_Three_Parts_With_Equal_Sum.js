var canThreePartsEqualSum = function(arr) {
    let sum = 0;

    arr.forEach((value)=> {
          sum += value;  
    });

    let n = arr.length;
    let sumPart = sum /3;

    let s = 0;
    let parts = 0;
        
    for (let i = 0; i< n; i++) {
        s += arr[i];

        if (s == sumPart) {
            s = 0;
            parts++;
        }
    }
    return (parts >= 3) && sum %3 == 0;
};
