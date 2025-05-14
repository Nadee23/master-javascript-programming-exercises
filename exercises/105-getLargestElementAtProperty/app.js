function getLargestElementAtProperty(obj, key) {
    // your code here
                  if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length == 0) {
        return []
    }

    let counter = obj[key][0]

    for (let i = 0; i < obj[key].length; i++) {
        if (counter < obj[key][i]) {
            counter = obj[key][i]
        }
    }

    return counter
}

let obj = {
  key: [1, 2, 4]
};
let output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4
