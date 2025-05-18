function joinArrayOfArrays(arr) {
  // your code here
let newArray = []

  for(let a of arr) {
    newArray = newArray.concat(a)
  }

  return newArray
}

let output = joinArrayOfArrays([
  [1, 4],
  [true, false],
  ['x', 'y'],
]);

console.log(output); // --> [1, 4, true, false, 'x', 'y']
