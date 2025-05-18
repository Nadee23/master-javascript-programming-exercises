function computeProductOfAllElements(arr) {
  // your code here
if (arr.length <= 0) {
  return 0
}

  let counter = 1
  
  for(let element of arr) {
    counter *= element
  }
  return counter
}

let output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60
