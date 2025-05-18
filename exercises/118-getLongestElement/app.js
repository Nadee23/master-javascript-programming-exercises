function getLongestElement(arr) {
    // your code here
        if (arr.length < 1) {return ""};

    let counter = arr[0].length
    let elementResult = arr[0]

    for(let element of arr) {
        if (counter < element.length) {
            counter = element.length;
            elementResult = element

        }
    }
    return elementResult
}

let output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'
