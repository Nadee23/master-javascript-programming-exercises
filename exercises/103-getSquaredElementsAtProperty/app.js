function getSquaredElementsAtProperty(obj, key) {
    // your code here
                if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length == 0) {
        return []
    }

    let newArr = []

    for (let i = 0; i < obj[key].length; i++) {
            newArr.push(obj[key][i] * obj[key][i])
        
    }

    return newArr
}

let obj = {
  key: [2, 1, 5]
};
let output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]
