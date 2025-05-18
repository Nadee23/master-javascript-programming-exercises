function convertObjectToList(obj) {
  // your code here
    let newMatrix = [];

  for (let element in obj) {
    newMatrix.push([element, obj[element]]);
  }
  
  return newMatrix;
}

let output = convertObjectToList({ name: 'Holly', age: 35, role: 'producer' });
console.log(output); // --> [ ['name', 'Holly'], ['age', 35], ['role', 'producer'] ]
