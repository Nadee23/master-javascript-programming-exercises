function removeNumberValues(obj) {
    // your code here
            for(let key in obj) {
        if (typeof obj[key] === "number") {
            obj[key] = undefined;
        }
    }
    return obj;
}

let obj = {
    a: 2,
    b: 'remaining',
    c: 4
};

removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }
