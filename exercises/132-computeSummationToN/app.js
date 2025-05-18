function computeSummationToN(n) {
  // your code here

    let newNum = 0

    for (let i = 1; i <= n ; i++) {
        newNum += i

    }
    return newNum
}

let output = computeSummationToN(6);
console.log(output); // --> 21

