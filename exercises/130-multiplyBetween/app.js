function multiplyBetween(num1, num2) {
    // your code here
    if (num2 < num1) return 0;

    let newNum = 1

    for (let i = num1; i < num2; i++) {
        newNum *= i

    }
    return newNum
}

let output = multiplyBetween(2, 5);
console.log(output); // --> 24
