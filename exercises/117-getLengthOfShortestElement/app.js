function getLengthOfShortestElement(arr) {
    // your code here
    if (arr.length < 1) {return 0};

    let counter = arr[0].length

    for(let element of arr) {
        if (counter > element.length) {
            counter = element.length;
        }
    }
    return counter
}

let output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3
