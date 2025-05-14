function getAverageOfElementsAtProperty(obj, key) {
  // your code here
            if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length == 0) {
        return 0
    }

    let counter = 0
    for (let i = 0; i < obj[key].length; i++) {
            counter += obj[key][i]
    }

    return counter / obj[key].length
}