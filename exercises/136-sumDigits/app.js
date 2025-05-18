function sumDigits(num) {
    // your code here
   let newNum = 0
   let stringNum = num.toString()

    for (let i = 0; i < stringNum.length; i++) {
        if (stringNum[i] === "-" && i === 0) {
            newNum -= Number(stringNum[i + 1]);
            i++;
        } else {
            newNum += Number(stringNum[i])
        }
    }
    return newNum
}

let output = sumDigits(-316);
console.log(output); // --> 4
