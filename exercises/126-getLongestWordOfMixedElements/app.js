function getLongestWordOfMixedElements(arr) {
    // your code here
    if (arr.length < 1) {return ""};

    let counter = 0
    let elementResult = ""

    for(let element of arr) {
        if (typeof element === 'string' && counter < element.length) {
            counter = element.length;
            elementResult = element

        }
    }
    return elementResult
}

let output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'
