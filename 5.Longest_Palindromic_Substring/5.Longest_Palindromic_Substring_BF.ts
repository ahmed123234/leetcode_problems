var longestPalindrome = function(s: string): string {
    let n = s.length;
    let res = "";
    let subStr = "";

    for (let i = 0; i < n; i++) {
        subStr = s.charAt(i);

        if(isPalindrome(subStr)) {

            res = compareStrings(subStr, res)
               
        } 
    
        for (let j = i+1; j < n; j++) {
            subStr += s.charAt(j);

            if(isPalindrome(subStr)) {
               res = compareStrings(subStr, res)
            } 
        }
       
    }
    return res;
};

function isPalindrome(str: string): boolean {
    let i = 0;
    let j = str.length - 1;

    while( i < j) {
        if (str.charAt(i) !== str.charAt(j)) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}

function compareStrings(subStr: string, res: string) {
        if (subStr.length > res.length) {
            res = subStr;
        }
        return res;
}


