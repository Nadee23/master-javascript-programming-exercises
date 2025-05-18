function isEvenWithoutModulo(num) {
    // your code here
      let mod = true;
  if (num >= 0) {
      for (let x = -1; x <= num + 1; x += 2) {
          if (x === num) mod = false;
      }
  } else {
      for (let x = -1; x >= num - 1; x -= 2) {
          if (x === num) mod = false;
      }
  }
  return mod;
}

let output = isEvenWithoutModulo(8);
console.log(output); // --> true
