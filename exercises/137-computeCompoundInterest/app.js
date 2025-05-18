function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears) {
  // your code here
  let pow = timeInYears * compoundingFrequency
  let base = Math.pow(1 +  (interestRate / compoundingFrequency),pow)
 let interestAmount = principal * base
 return interestAmount - principal
}

let output = computeCompoundInterest(1500, .043, 4, 6);
console.log(output); // --> 438.83682213410543
