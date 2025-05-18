function isOddWithoutModulo(num) {
    // your code here
   let mod = num
   while (mod != 0 || mod != 1) {
    mod -= 2
   }
 return  mod = 1 ? true : false
}

let output = isOddWithoutModulo(17);
console.log(output); // --> true
