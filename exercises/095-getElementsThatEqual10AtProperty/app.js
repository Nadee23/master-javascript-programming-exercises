// Write your function here
function getElementsThatEqual10AtProperty(obj, key) {
    if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length == 0) {
        return []
    }

    let newArr = []

    for (let i = 0; i < obj[key].length; i++) {
        if (obj[key][i] === 10) {
            newArr.push(obj[key][i])
        }

    }

    return newArr
}