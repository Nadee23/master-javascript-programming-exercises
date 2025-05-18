function getLargestElement(arr) {
  // your code here
      if (arr.length < 1) {return 0};

    let counter = arr[0]

    for(let element of arr) {
        if (counter < element) {
            counter = element;
        }
    }
    return counter
}

let output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;