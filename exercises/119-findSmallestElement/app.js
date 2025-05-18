function findSmallestElement(arr) {
    // your code here
    if (arr.length < 1) {return 0};

    let counter = arr[0]

    for(let element of arr) {
        if (counter > element) {
            counter = element;
        }
    }
    return counter
}

let output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1