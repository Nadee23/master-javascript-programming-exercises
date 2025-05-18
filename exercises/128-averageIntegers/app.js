function average(arr) {
  // your code here
  return sum(arr) / arr.length
}

function sum(arr) {
  // your code here
  let count = 0
  for(let a of arr) {
    count += a
  }
return count
}

console.log(average([1, 2])); // --> 1.5
