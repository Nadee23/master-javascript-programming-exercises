function getSumOfAllElementsAtProperty(obj, key) {
    // your code here
                if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length == 0) {
        return 0
    }

    let counter = 0
    for (let i = 0; i < obj[key].length; i++) {
            counter += obj[key][i]
    }

    return counter
}

let obj = {
    key: [4, 1, 8]
};
let output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13
