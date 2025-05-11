function getLongestOfThreeWords(word1, word2, word3) {
    // your code here
    let maxWordLength = Math.max(word1.length,word2.length,word3.length);
if(word1.length === maxWordLength) {return word1}
if(word2.length === maxWordLength) {return word2}
if(word3.length === maxWordLength) {return word3}
}

let output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'
