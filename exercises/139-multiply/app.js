function multiply(num1, num2) {
    // your code here
    let resultado = 0;
    let positivo = Math.abs(num1);

    for (let i = 0; i < positivo; i++) {
        resultado += num2;
    }

    return num1 < 0 ? -resultado : resultado;
}

let output = multiply(4, 7);
console.log(output); // --> 28
