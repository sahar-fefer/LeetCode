var arrayStringsAreEqual = function (word1, word2) {
    let i = 0;
    let j = 0;
    let word1Index = 0;
    let word2Index = 0;
    let str1 = '';
    let str2 = '';

    while (word1[i][word1Index] || word2[j][word2Index]) {
        str1 += word1[i][word1Index++];
        str2 += word2[j][word2Index++];
        if (str1 === str2) {
            if (!word1[i][word1Index]) {
                if (word1[i + 1]) {
                    i++;
                    word1Index = 0;
                }
            }
            if (!word2[j][word2Index]) {
                if (word2[j + 1]) {
                    j++;
                    word2Index = 0;
                }
            }
        } else {
            return false
        }
    }
    return true;
};

console.log(arrayStringsAreEqual(["ab", "c"], ["a", "bc"]))
console.log(arrayStringsAreEqual(["a", "cb"], ["ab", "c"]))
console.log(arrayStringsAreEqual(["abc", "d", "defg"], ["abcddef"]))
console.log(arrayStringsAreEqual(["abc","d","defg"], ["abcddef"]))