function fromListToObject(array) {
  // your code here
    let newArr = {};
  for (let element of array) {
    newArr[element[0]] = element[1];
  }
  return newArr;
}

let output = fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]])
console.log(output) // --> { make: 'Ford', model: 'Mustang', year: 1964 }
