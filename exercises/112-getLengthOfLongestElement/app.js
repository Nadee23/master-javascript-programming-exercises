function getLengthOfLongestElement(arr) {
    if (arr.length === 0) {
        return 0
    }

    let counter = arr[0].length

    for (let i = 0; i < arr.length; i++) {
        if (counter < arr[i].length) {
            counter = arr[i].length
        }
    }

    return counter
}

let output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5
