function squareElements(arr) {
  // your code here
      if (arr.length === 0) {
        return 0
    }

    let newArr = []

    for (let i = 0; i < arr.length; i++) {
            newArr.push(arr[i] * arr[i]) 
    }

    return newArr
}

let output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]
