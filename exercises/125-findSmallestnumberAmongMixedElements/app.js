function findSmallestNumberAmongMixedElements(arr) {
  // your code here

  let counter = Infinity
  
  for(let element of arr) {
    if (typeof element === 'number' && counter > element) {
      counter = element;
      
    }
  }
  if (counter === Infinity) {return 0}
    

    return counter
}

let output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4
