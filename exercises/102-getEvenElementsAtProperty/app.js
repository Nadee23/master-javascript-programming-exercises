function getEvenElementsAtProperty(obj, key) {
    // your code here
                if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length == 0) {
        return []
    }

    let newArr = []

    for (let i = 0; i < obj[key].length; i++) {
        if (obj[key][i] % 2 === 0) {
            newArr.push(obj[key][i])
        }
    }

    return newArr
}

let obj = {
  key: [1000, 11, 50, 17]
};
let output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]
