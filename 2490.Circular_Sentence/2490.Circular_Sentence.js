/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function(sentence) {
    
    const n = sentence.length - 1;

    for (let i = 0; i < n; i++) {

        if (sentence.charAt(i) == ' ') {
            if (sentence.charAt(i + 1) != sentence.charAt(i - 1))
                return false;
        }
    }
        

    return sentence.charAt(0) == sentence.charAt(sentence.length - 1);
    
};
