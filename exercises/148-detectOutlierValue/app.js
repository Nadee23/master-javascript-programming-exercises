function detectOutlierValue(input) {
    // your code here
    let numbers = input.split(' ').map(Number);

  let parities = numbers.slice(0, 3).map(n => n % 2);
  
  let majorityIsEven = parities.filter(p => p === 0).length >= 2;

  for (let i = 0; i < numbers.length; i++) {
    let isEven = numbers[i] % 2 === 0;
    if (isEven !== majorityIsEven) {
      return i + 1; 
    }
  }
}

// Third number is odd, while the rest of the numbers are even
console.log(detectOutlierValue("2 4 7 8 10")); // --> 3 

// Second number is even, while the rest of the numbers are odd
console.log(detectOutlierValue("1 10 1 1"))  // --> 2
