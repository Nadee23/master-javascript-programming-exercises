function findShortestOfThreeWords(word1, word2, word3) {
    // your code here
        let minWordLength = Math.min(word1.length,word2.length,word3.length);
if(word1.length === minWordLength) {return word1}
if(word2.length === minWordLength) {return word2}
if(word3.length === minWordLength) {return word3}
}

let output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'
