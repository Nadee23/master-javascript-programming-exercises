function findPairForSum(array, number) {

 for (let i = 0; i < array.length; i++) {
      for (let e = 1; e < array.length; e++) {
          if (array[i] + array[e] === number) {
              return [array[i], array[e]]
          }
      }
  }
}

let pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]
