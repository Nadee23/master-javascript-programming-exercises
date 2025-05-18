function computeSumOfAllElements(arr) {
  // your code here
  if (arr.length <= 0) {
  return 0
}

  let counter = 0
  
  for(let element of arr) {
    counter += element
  }
  return counter
}

let output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6
