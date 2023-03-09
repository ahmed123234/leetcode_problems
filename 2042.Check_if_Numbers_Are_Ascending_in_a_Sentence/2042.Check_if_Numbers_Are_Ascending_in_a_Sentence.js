var areNumbersAscending = function(s) {

        const words = s.split(" ");
        let prev = - (2 ** 31);

        for (const word of words) {
            if(!isNaN(word.charAt(0))) {
                const n = word.length;
                let i = 0;
                let num = 0;
                while (i < n) {
                    num = (word.charAt(i++) - '0') + num * 10;
                } 

                if (num > prev) {
                    prev = num;
                } else {
                    return false;
                }
            }
        }

        return true;
};
