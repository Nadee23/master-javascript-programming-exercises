function computeFactorialOfN(n) {
    // your code here

    let newNum = 1

    for (let i = 1; i <= n; i++) {
        newNum *= i

    }
    return newNum
}

let output = computeFactorialOfN(4);
console.log(output); // --> 24
