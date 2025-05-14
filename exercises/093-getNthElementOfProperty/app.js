// Write your function here
function getNthElementOfProperty (obj, key, n) {
    if(!obj[key] || obj[key].length <= n || !Array.isArray(obj[key])) {
        return undefined
    } 
    return obj[key][n]
}