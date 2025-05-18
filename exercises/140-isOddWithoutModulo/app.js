function isOddWithoutModulo(num) {
    // your code here
  let mod = true;
  if (num >= 0) {
      for (let x = 0; x <= num + 1; x += 2) {
          if (x === num) mod = false;
      }
  } else {
      for (let x = 0; x >= num - 1; x -= 2) {
          if (x === num) mod = false;
      }
  }
  return mod;
}

let output = isOddWithoutModulo(17);
console.log(output); // --> true
