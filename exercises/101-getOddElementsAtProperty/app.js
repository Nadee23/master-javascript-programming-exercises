function getOddElementsAtProperty(obj, key) {
    // your code here
                if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length == 0) {
        return []
    }

    let newArr = []

    for (let i = 0; i < obj[key].length; i++) {
        if (obj[key][i] % 2 != 0) {
            newArr.push(obj[key][i])
        }
    }

    return newArr
}

let obj = {
  key: [1, 2, 3, 4, 5]
};
let output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]
