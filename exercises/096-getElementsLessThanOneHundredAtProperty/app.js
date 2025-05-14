// Write your function here
function getElementsLessThan100AtProperty (obj,key) {
    if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length == 0) {
        return []
    }

    let newArr = []

    for (let i = 0; i < obj[key].length; i++) {
        if (obj[key][i] < 100) {
            newArr.push(obj[key][i])
        }

    }

    return newArr
}