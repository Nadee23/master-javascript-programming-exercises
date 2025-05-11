function repeatString(string, num) {
    // your code here
    let str = ""
    for (let i = 0; i < num; i++) {
        str += string
    }
    return str;
}

let output = repeatString('code', 3);
console.log(output); // --> 'codecodecode'
