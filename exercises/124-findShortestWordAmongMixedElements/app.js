function findShortestWordAmongMixedElements(arr) {
    // your code here
        if (arr.length < 1) {return ""};

    let counter = Infinity
    let elementResult = ""

    for(let element of arr) {
        if (typeof element === 'string' && counter > element.length) {
            counter = element.length;
            elementResult = element

        }
    }
    return elementResult
}

let output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'
