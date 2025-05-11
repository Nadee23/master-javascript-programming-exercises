function or(expression1, expression2) {
  // your code here
  if (expression1 === true) {
    return true;
  }
  if (expression2 === true) {
    return true;
  }
  return false;
}

let output = or(true, false);
console.log(output); // --> true;
