function getLargestNumberAmongMixedElements(arr) {
    // your code here
      let counter = 0
  
  for(let element of arr) {
    if (typeof element === 'number' && counter < element) {
      counter = element;
      
    }
  }
  if (counter === Infinity) {return 0}
    

    return counter
}

let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5
