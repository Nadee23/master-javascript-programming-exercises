function getAllButLastElementOfProperty(obj, key) {
    // your code here
        // your code here
                  if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length == 0) {
        return []
    }

    let newArr = []

    for (let i = 0; i < obj[key].length - 1; i++) {
            newArr.push(obj[key][i])

    }

    return newArr
}

let obj = {
  key: [1, 2, 3]
};
let output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1, 2]
