function addToBackOfNew(arr, element) {
    // your code here
     let array = [...arr, element];
 return array;
}

let input = [1, 2];
let output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3]
