var captureForts = function(forts) {
    
    let max = 0;
    let n = forts.length;

    for (let i = 0; i < n; i++) {
        if (forts[i] == 1) {
            for(let j = i + 1; j < n; j++) {
                if (forts[j] == -1) {
                    max = Math.max(max, j - i - 1);
                    break;
                }
                if (forts[j] == 1) {
                    break;
                }
            }
        } else if (forts[i] == -1) {
            for(let j = i + 1; j < n; j++) {
                if (forts[j] == 1) {
                    max = Math.max(max, j - i - 1);
                    break;
                }
                if (forts[j] == -1) {
                    break;
                }
            }
        }
    } 

    return max; 
};
